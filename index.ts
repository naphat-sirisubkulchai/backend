import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors';

const prisma = new PrismaClient()
// Allow requests from specific origins
const corsOptions = {
  origin: ['http://localhost:5173','https://high-tech-eepy.vercel.app','https://high-tech-eepy.vercel.app'],
  credentials: true // Enable CORS credentials
};

const app = express()
// app.use(cors());
app.use(cors(corsOptions));
app.use(express.json())



app.get("/", (req, res) => res.send("Express on Vercel"));
//à¹à¸­à¸²à¸à¸¸à¸à¸­à¸±à¸
// app.get('/fund', async (req, res) => {
//   const funds = await prisma.fund.findMany()
//   res.json(funds)
// })

// //à¹à¸­à¸²à¸­à¸±à¸à¸à¸µà¹à¹à¸­à¸à¸µà¸à¸£à¸
// app.get('/fund/:unique_id', async (req, res) => {
//   try {
//     const { unique_id } = req.params;

//     // Use Prisma to query the database
//     const fund = await prisma.fund.findMany({
//       where: { unique_id},
//     }); 

//     if (!fund) {
//       return res.status(404).json({ error: 'Fund not found' });
//     }

//     res.json(fund);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
// // /filter?searchString={searchString}&take={take}&skip={skip}&orderBy={orderBy}
// app.get('/filter', async (req, res) => {
//   const { searchString, skip, take, orderBy } = req.query

//   const or: Prisma.FundWhereInput = searchString
//     ? {
//       OR: [
//         { proj_name_th: { contains: searchString as string } },
//         { proj_name_en: { contains: searchString as string } },
//         { proj_abbr_name: { contains: searchString as string } },
//         { unique_id: { contains: searchString as string }}
//       ],
//       }
//     : {}
//   const funds = await prisma.fund.findMany({
//     where: {
//       ...or,
//     },
//     take: Number(take) || undefined,
//     skip: Number(skip) || undefined,
//     orderBy: {
//       proj_name_en: orderBy as Prisma.SortOrder,
//     },
//   })

//   res.json(funds)
// })

///////////////////////////////// product /////////////////////////////////////////
//à¹à¸­à¸²à¸à¸¸à¸à¸­à¸±à¸
app.get('/product', async (req, res) => {
  const products = await prisma.product.findMany()
  res.json(products)
})
app.get('/product/:proj_abbr_name', async (req, res) => {
  try {
    const { proj_abbr_name } = req.params;

    // Use Prisma to query the database
    const allpro = await prisma.product.findUnique({
      where: { proj_abbr_name},
    }); 

    if (!allpro) {
      return res.status(404).json({ error: 'product not found' });
    }

    res.json(allpro);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// /filter?searchString={searchString}&take={take}&skip={skip}&orderBy={orderBy}
app.get('/filter/product', async (req, res) => {
  const { searchString, take, skip, orderBy } = req.query;

  const or: Prisma.ProductWhereInput = searchString
    ? {
        OR: [
          { proj_name_th: { contains: searchString.toString(), mode: 'insensitive' } },
          { proj_name_en: { contains: searchString.toString(), mode: 'insensitive' } },
          { proj_abbr_name: { contains: searchString.toString(), mode: 'insensitive' } },
          { risk_spectrum: { contains: searchString.toString(), mode: 'insensitive' } },
          { companyTH: { contains: searchString.toString(), mode: 'insensitive' } },
          { companyEN: { contains: searchString.toString(), mode: 'insensitive' } },
          { fundType: { has: searchString.toString() } }
        ],
      }
    : {};



  const products = await prisma.product.findMany({
    where: {
      ...or,
    },
    take: Number(take) || undefined,
    skip: Number(skip) || undefined,
    orderBy: {
      proj_abbr_name: orderBy as Prisma.SortOrder,
    },
  });

  res.json(products);
});

app.put('/product/put/:proj_abbr_name', async (req, res) => {
  try {
    const { proj_abbr_name } = req.params;
    const { Allinfo } = req.body;

    const updatedProduct = await prisma.product.update({
      where: { proj_abbr_name },
      data: { Allinfo },
    });

    res.json(updatedProduct);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/product/delete/:proj_abbr_name', async (req, res) => {
  try {
    const { proj_abbr_name } = req.params;

    const deletedProduct = await prisma.product.delete({
      where: { proj_abbr_name },
    });
    const deletedDetail = await prisma.productDetail.delete({
      where: { proj_abbr_name },
    });
    const deletedpage1 = await prisma.page1compareinfomation.delete({
      where: { proj_abbr_name },
    });
    const deletepage2 = await prisma.page2Operating_results_and_dividends.delete({
      where: { proj_abbr_name },
    });
    const deletepage3 = await prisma.page3Investment_proportionCompareport.delete({
      where: { proj_abbr_name },
    });
    const deletepage3_2 = await prisma.page3topfiveCompareport.delete({
      where: { proj_abbr_name },
    });
    const deletepage3_3 = await prisma.page3typeCompareport.delete({
      where: { proj_abbr_name },
    });
    const delete4 = await prisma.page4Fee.delete({
      where: { proj_abbr_name },
    });
    res.json(deletedProduct);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
  ///////////////////////////////// fav /////////////////////////////////////////

//à¹à¸­à¸²à¸à¸¸à¸à¸­à¸±à¸
app.get('/fav', async (req, res) => {
  const favorites = await prisma.favorite.findMany()
  res.json(favorites)
})


app.get('/fav/:user', async (req, res) => {
  try {
    const { user } = req.params;

    // Use Prisma to query the database
    const fav = await prisma.favorite.findUnique({
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


// app.post(`/fav/add/:user`, async (req, res) => {
//   try {
//     const { user } = req.params;
//     const { proj_abbr_name } = req.body;

//     let proj_abbr_name_list: string[] = [];

//     if (proj_abbr_name !== "-") {
//       proj_abbr_name_list.push(proj_abbr_name);

//       // Fetch data from Product model
//       const productData = await prisma.product.findUnique({
//         where: { proj_abbr_name }
//       });

//       if (productData) {
//         // Assuming productData is defined, you can push it to product_json_list
//         // If proj_abbr_name is not found, productData will be null, handle the case accordingly
//         // Assuming productData has to be transformed into JSON
//         const productJson = productData
//         await prisma.favorite.create({
//           data: {
//             user,
//             proj_abbr_name_list,
//             product_json_list: [productJson]
//           }
//         });
//       } else {
//         throw new Error(`No product found with proj_abbr_name ${proj_abbr_name}`);
//       }
//     } // else, proj_abbr_name is "-", so no need to do anything with proj_abbr_name_list

//     res.status(200).json({ message: 'Favorite added successfully' });
//   } catch (error) {
//     res.status(500).json({ error:"An error occurred while adding the favorite."  });
//   }
// });

//à¸­à¸±à¸à¸à¸µà¹work
// app.post(`/fav/add/:user`, async (req, res) => {
//   try {
//     const { user } = req.params;
//     const { proj_abbr_name } = req.body;

//     // Fetch existing favorite entry for the user
//     const existingFavorite = await prisma.favorite.findUnique({
//       where: { user },
//     });

//     if (!existingFavorite) {
//       // If no existing favorite entry, create a new one
//       if (proj_abbr_name === "-") {
//         // If proj_abbr_name is "-", create with empty arrays
//         await prisma.favorite.create({
//           data: {
//             user,
//             proj_abbr_name_list: [],
//             product_json_list: [],
//           },
//         });
//       } else {
//         // If proj_abbr_name is not "-", fetch data from Product model
//         const productData = await prisma.product.findUnique({
//           where: { proj_abbr_name },
//         });

//         if (!productData) {
//           throw new Error(`No product found with proj_abbr_name ${proj_abbr_name}`);
//         }

//         // Create the new favorite entry with detailed product information
//         await prisma.favorite.create({
//           data: {
//             user,
//             proj_abbr_name_list: [proj_abbr_name],
//             product_json_list: [productData],
//           },
//         });
//       }
//     } else {
//       // If existing favorite entry exists, update it
//       if (proj_abbr_name === "-") {
//         // If proj_abbr_name is "-", don't update arrays
//         await prisma.favorite.update({
//           where: { user },
//           data: {},
//         });
//       } else {
//         // If proj_abbr_name is not "-", update arrays
//         if (!existingFavorite.proj_abbr_name_list.includes(proj_abbr_name)) {
//           const productData = await prisma.product.findUnique({
//             where: { proj_abbr_name },
//           });

//           if (!productData) {
//             throw new Error(`No product found with proj_abbr_name ${proj_abbr_name}`);
//           }

//           // Update the existing favorite entry with additional product information
//           await prisma.favorite.update({
//             where: { user },
//             data: {
//               proj_abbr_name_list: {
//                 push: proj_abbr_name,
//               },
//               product_json_list: {
//                 push: productData,
//               },
//             },
//           });
//         }
//       }
//     }

//     res.status(200).json({ message: 'Favorite added successfully' });
//   } catch (error: any) { // Use 'any' as the type for the error variable
//     res.status(500).json({ error: error.message });
//   }
// });
// à¸­à¸±à¸à¸à¸µà¹work
// app.delete(`/fav/delete/:user/:proj_abbr_name`, async (req, res) => {
//   try {
//     const { user, proj_abbr_name } = req.params;

//     // Fetch existing favorite entry for the user
//     const existingFavorite = await prisma.favorite.findUnique({
//       where: { user },
//     });

//     if (!existingFavorite) {
//       return res.status(404).json({ error: 'Favorite entry not found' });
//     }

//     // Remove the specified proj_abbr_name from proj_abbr_name_list
//     const updatedProjAbbrNameList = existingFavorite.proj_abbr_name_list.filter(
//       name => name !== proj_abbr_name
//     );

//     // Remove the corresponding product information from product_json_list
//     const updatedProductJsonList = existingFavorite.product_json_list.filter(product => {
//       // Check if product is a JsonObject and has the proj_abbr_name property
//       if (typeof product === 'object' && product !== null && 'proj_abbr_name' in product) {
//         // Access proj_abbr_name only if product is a JsonObject with proj_abbr_name property
//         return product.proj_abbr_name !== proj_abbr_name;
//       }
//       // If product is not a JsonObject or doesn't have proj_abbr_name property, keep it in the list
//       return true;
//     });

//     if (updatedProjAbbrNameList.length === 0) {
//       // If proj_abbr_name_list becomes empty after removal, set both lists to empty arrays
//       await prisma.favorite.update({
//         where: { user },
//         data: {
//           proj_abbr_name_list: [],
//           product_json_list: [] as any[], // Casting to any[] to resolve type mismatch
//         },
//       });
//     } else {
//       // Update the favorite entry with the updated lists
//       await prisma.favorite.update({
//         where: { user },
//         data: {
//           proj_abbr_name_list: updatedProjAbbrNameList,
//           product_json_list: updatedProductJsonList as any[], // Casting to any[] to resolve type mismatch
//         },
//       });
//     }

//     res.status(200).json({ message: 'Favorite deleted successfully' });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
// Retry logic function
async function retryOperation<T>(
  operation: () => Promise<T>,
  maxRetries = 5,
  delay = 1000
): Promise<T> {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      return await operation();
    } catch (error) {
      console.error('Operation failed, retrying...', error);
      await wait(delay); // Wait for a short delay before retrying
      retries++;
    }
  }

  throw new Error('Max retries reached, operation failed.');
}

function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// DELETE handler with retry logic
app.delete(`/fav/delete/:user/:proj_abbr_name`, async (req, res) => {
  const { user, proj_abbr_name } = req.params;

  try {
    await retryOperation(async () => {
      await prisma.$transaction(async (prisma) => {
        const existingFavorite = await prisma.favorite.findUnique({
          where: { user },
        });

        if (!existingFavorite) {
          throw new Error('Favorite entry not found');
        }

        const updatedProjAbbrNameList = existingFavorite.proj_abbr_name_list.filter(
          name => name !== proj_abbr_name
        );

        const updatedProductJsonList = existingFavorite.product_json_list.filter(product => {
          if (typeof product === 'object' && product !== null && 'proj_abbr_name' in product) {
            return product.proj_abbr_name !== proj_abbr_name;
          }
          return true;
        });

        if (updatedProjAbbrNameList.length === 0) {
          await prisma.favorite.update({
            where: { user },
            data: {
              proj_abbr_name_list: [],
              product_json_list: [],
            },
          });
        } else {
          await prisma.favorite.update({
            where: { user },
            data: {
              proj_abbr_name_list: updatedProjAbbrNameList,
              product_json_list: updatedProductJsonList as any[],
            },
          });
        }
      });
    });

    res.status(200).json({ message: 'Favorite deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST handler with retry logic
app.post(`/fav/add/:user`, async (req, res) => {
  const { user } = req.params;
  const { proj_abbr_name } = req.body;

  try {
    await retryOperation(async () => {
      await prisma.$transaction(async (prisma) => {
        const existingFavorite = await prisma.favorite.findUnique({
          where: { user },
        });

        if (!existingFavorite) {
          if (proj_abbr_name === "-") {
            await prisma.favorite.create({
              data: {
                user,
                proj_abbr_name_list: [],
                product_json_list: [],
              },
            });
          } else {
            const productData = await prisma.product.findUnique({
              where: { proj_abbr_name },
            });

            if (!productData) {
              throw new Error(`No product found with proj_abbr_name ${proj_abbr_name}`);
            }

            await prisma.favorite.create({
              data: {
                user,
                proj_abbr_name_list: [proj_abbr_name],
                product_json_list: [productData],
              },
            });
          }
        } else {
          if (proj_abbr_name === "-") {
            await prisma.favorite.update({
              where: { user },
              data: {},
            });
          } else {
            if (!existingFavorite.proj_abbr_name_list.includes(proj_abbr_name)) {
              const productData = await prisma.product.findUnique({
                where: { proj_abbr_name },
              });

              if (!productData) {
                throw new Error(`No product found with proj_abbr_name ${proj_abbr_name}`);
              }

              await prisma.favorite.update({
                where: { user },
                data: {
                  proj_abbr_name_list: {
                    push: proj_abbr_name,
                  },
                  product_json_list: {
                    push: productData,
                  },
                },
              });
            }
          }
        }
      });
    });

    res.status(200).json({ message: 'Favorite added successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



///////////////////////////////// page1/////////////////////////////////////////
app.get('/page1/:proj_abbr_name', async (req, res) => {
  try {
    const { proj_abbr_name } = req.params;

    // Use Prisma to query the database
    const page1 = await prisma.page1compareinfomation.findUnique({
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
    const page2 = await prisma.page2Operating_results_and_dividends.findUnique({
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
    const page3 = await prisma.page3Investment_proportionCompareport.findUnique({
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
    const page3 = await prisma.page3topfiveCompareport.findUnique({
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
    const page3 = await prisma.page3typeCompareport.findUnique({
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
    const page4 = await prisma.page4Fee.findUnique({
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
// /filter/search?searchString={searchString}&take={take}&skip={skip}&orderBy={orderBy}
///////////////////////////////// search/////////////////////////////////////////
app.get('/filter/search', async (req, res) => {
  const { searchString, skip, take, orderBy } = req.query;

  const or: Prisma.SearchTestWhereInput = searchString
    ? {
        OR: [
          { proj_name_th: { contains: searchString.toString(), mode: 'insensitive' } },
          { proj_name_en: { contains: searchString.toString(), mode: 'insensitive' } },
          { proj_abbr_name: { contains: searchString.toString(), mode: 'insensitive' }},
          { unique_id: { contains: searchString.toString(), mode: 'insensitive' }}
        ],
      }
    : {};

  const search = await prisma.searchTest.findMany({
    where: {
      ...or,
    },
    take: Number(take) || undefined,
    skip: Number(skip) || undefined,
    orderBy: {
      proj_name_en: orderBy as Prisma.SortOrder,
    },
  });

  res.json(search);
});
///////////////////////////////// Detail/////////////////////////////////////////
app.get('/detail/:proj_abbr_name', async (req, res) => {
  try {
    const { proj_abbr_name } = req.params;

    // Use Prisma to query the database
    const allpro = await prisma.productDetail.findUnique({
      where: { proj_abbr_name},
    }); 

    if (!allpro) {
      return res.status(404).json({ error: 'Fund not found' });
    }

    res.json(allpro);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.put('/detail/put/:proj_abbr_name', async (req, res) => {
  try {
    const productId = req.params.proj_abbr_name;
    const {
      proj_id,
      proj_abbr_name,
      proj_name_en,
      proj_name_th,
      unique_id,
      risk_spectrum,
      companyTH,
      companyEN,
      fundType,
      fund_resYTD,
      Allinfo,
    } = req.body;

    // Use Prisma to find the product detail by ID and update it
    const updatedProductDetail = await prisma.productDetail.update({
      where: { id: productId },
      data: {
        proj_id,
        proj_abbr_name,
        proj_name_en,
        proj_name_th,
        unique_id,
        risk_spectrum,
        companyTH,
        companyEN,
        fundType,
        fund_resYTD,
        Allinfo,
      },
    });

    res.json(updatedProductDetail);
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
  try {
    const { proj_abbr_name } = req.params;

    // Use Prisma to query the database
    const allpro = await prisma.allProductInfo.findUnique({
      where: { proj_abbr_name},
    }); 

    if (!allpro) {
      return res.status(404).json({ error: 'Fund not found' });
    }

    res.json(allpro);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.put('/allpro/put/:proj_abbr_name', async (req, res) => {
  try {
    const { proj_abbr_name } = req.params;
    const { Allinfo } = req.body;

    const updatedProduct = await prisma.allProductInfo.update({
      where: { proj_abbr_name },
      data: { Allinfo },
    });

    res.json(updatedProduct);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/allpro/delete/:proj_abbr_name', async (req, res) => {
  try {
    const { proj_abbr_name } = req.params;

    const deletedProduct = await prisma.allProductInfo.delete({
      where: { proj_abbr_name },
    });

    res.json(deletedProduct);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


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