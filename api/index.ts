import { Prisma, PrismaClient } from '../prisma/generated/client'
import express from 'express'
import cors from 'cors';
import { Json } from 'aws-sdk/clients/robomaker';

const prisma = new PrismaClient()

const app = express()
app.use(cors());
app.use(express.json())
app.get("/", (req, res) => res.send("Express on Vercel"));
//เอาทุกอัน
app.get('/fund', async (req, res) => {
  const funds = await prisma.fund.findMany()
  res.json(funds)
})

//เอาอันที่ไอดีตรง
app.get('/fund/:unique_id', async (req, res) => {
  try {
    const { unique_id } = req.params;

    // Use Prisma to query the database
    const fund = await prisma.fund.findMany({
      where: { unique_id},
    }); 

    if (!fund) {
      return res.status(404).json({ error: 'Fund not found' });
    }

    res.json(fund);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// /filter?searchString={searchString}&take={take}&skip={skip}&orderBy={orderBy}
app.get('/filter', async (req, res) => {
  const { searchString, skip, take, orderBy } = req.query

  const or: Prisma.FundWhereInput = searchString
    ? {
      OR: [
        { proj_name_th: { contains: searchString as string } },
        { proj_name_en: { contains: searchString as string } },
        { proj_abbr_name: { contains: searchString as string } },
        { unique_id: { contains: searchString as string }}
      ],
      }
    : {}
  const funds = await prisma.fund.findMany({
    where: {
      ...or,
    },
    take: Number(take) || undefined,
    skip: Number(skip) || undefined,
    orderBy: {
      proj_name_en: orderBy as Prisma.SortOrder,
    },
  })

  res.json(funds)
})

///////////////////////////////// product /////////////////////////////////////////
//เอาทุกอัน
app.get('/product', async (req, res) => {
  const products = await prisma.product.findMany()
  res.json(products)
})

// /filter?searchString={searchString}&take={take}&skip={skip}&orderBy={orderBy}
app.get('/filter/product', async (req, res) => {
  const { searchString, skip, take, orderBy } = req.query

  const or: Prisma.ProductWhereInput = searchString
    ? {
      OR: [
        { proj_name_th: { contains: searchString as string } },
        { proj_name_en: { contains: searchString as string } },
        { proj_abbr_name: { contains: searchString as string }},
        { unique_id: { contains: searchString as string }}
      ],
      }
    : {}
  const products = await prisma.product.findMany({
    where: {
      ...or,
    },
    take: Number(take) || undefined,
    skip: Number(skip) || undefined,
    orderBy: {
      proj_name_en: orderBy as Prisma.SortOrder,
    },
  })

  res.json(products)
})
  ///////////////////////////////// fav /////////////////////////////////////////

//เอาทุกอัน
app.get('/fav', async (req, res) => {
  const favorites = await prisma.favorite.findMany()
  res.json(favorites)
})


app.get('/fav/:user', async (req, res) => {
  try {
    const { user } = req.params;

    // Use Prisma to query the database
    const fav = await prisma.favorite.findMany({
      where: { user},
    }); 

    if (!fav) {
      return res.status(404).json({ error: 'data not found' });
    }

    res.json(fav);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// app.post(`/fav/add/:user`, async (req, res) => {
//   const { user } = req.params;
//   const { proj_abbr_name } = req.body;
//   try {
//     // Check if the username already exists
//     const existingFavorite = await prisma.favorite.findFirst({
//       where: {
//         user: String(user)
//       }
//     });

//     let post;
//     if (existingFavorite) {
//       if (proj_abbr_name && proj_abbr_name !== "-") {
//         // Update existing record by adding proj_abbr_name to the list
//         post = await prisma.favorite.update({
//           where: {
//             id: existingFavorite.id
//           },
//           data: {
//             proj_abbr_name_list: {
//               push: proj_abbr_name
//             }
//           }
//         });
//       } else {
//         // Do nothing, return the existing record
//         post = existingFavorite;
//       }
//     } else {
//       // Create new record if username doesn't exist
//       if (proj_abbr_name && proj_abbr_name !== "-") {
//         post = await prisma.favorite.create({
//           data: {
//             user: String(user),
//             proj_abbr_name_list: [proj_abbr_name]
//           }
//         });
//       } else {
//         post = await prisma.favorite.create({
//           data: {
//             user: String(user),
//             proj_abbr_name_list: []
//           }
//         });
//       }
//     }

//     res.json(post);
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred while adding the favorite." });
//   }
// });
app.post(`/fav/add/:user`, async (req, res) => {
  try {
    const { user } = req.params;
    const { proj_abbr_name } = req.body;

    let proj_abbr_name_list: string[] = [];

    if (proj_abbr_name !== "-") {
      proj_abbr_name_list.push(proj_abbr_name);

      // Fetch data from Product model
      const productData = await prisma.product.findUnique({
        where: { proj_abbr_name }
      });

      if (productData) {
        // Assuming productData is defined, you can push it to product_json_list
        // If proj_abbr_name is not found, productData will be null, handle the case accordingly
        // Assuming productData has to be transformed into JSON
        const productJson = JSON.stringify(productData)as Json;
        await prisma.favorite.create({
          data: {
            user,
            proj_abbr_name_list,
            product_json_list: [productJson]
          }
        });
      } else {
        throw new Error(`No product found with proj_abbr_name ${proj_abbr_name}`);
      }
    } // else, proj_abbr_name is "-", so no need to do anything with proj_abbr_name_list

    res.status(200).json({ message: 'Favorite added successfully' });
  } catch (error) {
    res.status(500).json({ error:"An error occurred while adding the favorite."  });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


app.delete(`/fav/delete/:user/:proj_abbr_name`, async (req, res) => {
  const { user, proj_abbr_name } = req.params;
  try {
    // Find the record based on username
    const existingFavorite = await prisma.favorite.findFirst({
      where: {
        user: String(user),
        proj_abbr_name_list: {
          has: proj_abbr_name // Check if proj_abbr_name exists in the list
        }
      }
    });

    if (!existingFavorite) {
      return res.status(404).json({ error: "Favorite record not found." });
    }

    // Update the proj_abbr_name_list array to remove proj_abbr_name
    const updatedFavorite = await prisma.favorite.update({
      where: {
        id: existingFavorite.id // Use the ID to uniquely identify the record
      },
      data: {
        proj_abbr_name_list: {
          set: existingFavorite.proj_abbr_name_list.filter(item => item !== proj_abbr_name)
        }
      }
    });

    res.json(updatedFavorite);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting the proj_abbr_name." });
  }
});


///////////////////////////////// page1/////////////////////////////////////////
app.get('/page1/:proj_abbr_name', async (req, res) => {
  try {
    const { proj_abbr_name } = req.params;

    // Use Prisma to query the database
    const page1 = await prisma.page1compareinfomation.findMany({
      where: { proj_abbr_name},
    }); 

    if (!page1) {
      return res.status(404).json({ error: 'data not found' });
    }

    res.json(page1);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

///////////////////////////////// page2/////////////////////////////////////////
app.get('/page2/:proj_abbr_name', async (req, res) => {
  try {
    const { proj_abbr_name } = req.params;

    // Use Prisma to query the database
    const page2 = await prisma.page2Operating_results_and_dividends.findMany({
      where: { proj_abbr_name},
    }); 

    if (!page2) {
      return res.status(404).json({ error: 'data not found' });
    }

    res.json(page2);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
///////////////////////////////// page3 Investment/////////////////////////////////////////
app.get('/page3/investment/:proj_abbr_name', async (req, res) => {
  try {
    const { proj_abbr_name } = req.params;

    // Use Prisma to query the database
    const page3 = await prisma.page3Investment_proportionCompareport.findMany({
      where: { proj_abbr_name},
    }); 

    if (!page3) {
      return res.status(404).json({ error: 'data not found' });
    }

    res.json(page3);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
///////////////////////////////// page3 TopFive/////////////////////////////////////////
app.get('/page3/topfive/:proj_abbr_name', async (req, res) => {
  try {
    const { proj_abbr_name } = req.params;

    // Use Prisma to query the database
    const page3 = await prisma.page3topfiveCompareport.findMany({
      where: { proj_abbr_name},
    }); 

    if (!page3) {
      return res.status(404).json({ error: 'data not found' });
    }

    res.json(page3);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
///////////////////////////////// page3 Type/////////////////////////////////////////
app.get('/page3/type/:proj_abbr_name', async (req, res) => {
  try {
    const { proj_abbr_name } = req.params;

    // Use Prisma to query the database
    const page3 = await prisma.page3typeCompareport.findMany({
      where: { proj_abbr_name},
    }); 

    if (!page3) {
      return res.status(404).json({ error: 'data not found' });
    }

    res.json(page3);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
///////////////////////////////// page4/////////////////////////////////////////
app.get('/page4/:proj_abbr_name', async (req, res) => {
  try {
    const { proj_abbr_name } = req.params;

    // Use Prisma to query the database
    const page4 = await prisma.page4Fee.findMany({
      where: { proj_abbr_name},
    }); 

    if (!page4) {
      return res.status(404).json({ error: 'data not found' });
    }

    res.json(page4);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
///////////////////////////////// getallinfoproduct/////////////////////////////////////////

app.get('/allpro', async (req, res) => {
  const all = await prisma.allProductInfo.findMany()
  res.json(all)
})

app.get('/allpro/:proj_abbr_name', async (req, res) => {
  
})
app.listen(5050, () => console.log("Server ready on port 5050."));
module.exports = app;
async function main() {
    // ... you will write your Prisma Client queries here
    console.log("Server ready at: http://localhost:5050")
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })