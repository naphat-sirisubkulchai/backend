import { Prisma, PrismaClient } from '../prisma/generated/client'
import express from 'express'
import cors from 'cors';

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

app.delete(`/post/:proj_id`, async (req, res) => {
  const { proj_id } = req.params
  const post = await prisma.favorite.delete({
    where: {
      proj_id: String(proj_id),
    },
  })
  res.json(post)
})
app.post(`/post`, async (req, res) => {
  const { fav,proj_id, favID } = req.body
  const result = await prisma.favorite.create({
    data: {
      fav,
      proj_id,
      favID,
    },
  })
  res.json(result)
})

///////////////////////////////// สัดส่วนประเภททรัพย์สินที่ลงทุน /////////////////////////////////////////
app.get('/type/:proj_id', async (req, res) => {
  try {
    const { proj_id } = req.params;

    // Use Prisma to query the database
    const types = await prisma.type_assets_invested.findMany({
      where: { proj_id},
    }); 

    if (!types) {
      return res.status(404).json({ error: 'types not found' });
    }

    res.json(types);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
///////////////////////////////// Top five /////////////////////////////////////////
app.get('/topfive/:proj_id', async (req, res) => {
  try {
    const { proj_id } = req.params;

    // Use Prisma to query the database
    const types = await prisma.top_five_investment_assets.findMany({
      where: { proj_id},
    }); 

    if (!types) {
      return res.status(404).json({ error: 'top_fives not found' });
    }

    res.json(types);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
///////////////////////////////// Fees_mutal/////////////////////////////////////////
app.get('/feemutal/:proj_id', async (req, res) => {
  try {
    const { proj_id } = req.params;

    // Use Prisma to query the database
    const types = await prisma.fees_charged_by_mutual_funds.findMany({
      where: { proj_id},
    }); 

    if (!types) {
      return res.status(404).json({ error: 'fee_mutal not found' });
    }

    res.json(types);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
///////////////////////////////// Fees_unitholders/////////////////////////////////////////
app.get('/feeunit/:proj_id', async (req, res) => {
  try {
    const { proj_id } = req.params;

    // Use Prisma to query the database
    const types = await prisma.fees_charged_to_unitholders.findMany({
      where: { proj_id},
    }); 

    if (!types) {
      return res.status(404).json({ error: 'fee_unit not found' });
    }

    res.json(types);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
///////////////////////////////// Investment_top_five_issuers/////////////////////////////////////////
app.get('/invtopfiveissue/:proj_id', async (req, res) => {
  try {
    const { proj_id } = req.params;

    // Use Prisma to query the database
    const types = await prisma.investment_allocation_in_the_top_five_issuers.findMany({
      where: { proj_id},
    }); 

    if (!types) {
      return res.status(404).json({ error: 'investment top_five_issuers not found' });
    }

    res.json(types);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
///////////////////////////////// Investment_according_to_credit_rating/////////////////////////////////////////
app.get('/invcredit/:proj_id', async (req, res) => {
  try {
    const { proj_id } = req.params;

    // Use Prisma to query the database
    const types = await prisma.investment_allocation_according_to_credit_rating.findMany({
      where: { proj_id},
    }); 

    if (!types) {
      return res.status(404).json({ error: 'investment according_to_credit not found' });
    }

    res.json(types);
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