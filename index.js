"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => res.send("Express on Vercel"));
//เอาทุกอัน
app.get('/fund', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const funds = yield prisma.fund.findMany();
    res.json(funds);
}));
//เอาอันที่ไอดีตรง
app.get('/fund/:unique_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { unique_id } = req.params;
        // Use Prisma to query the database
        const fund = yield prisma.fund.findMany({
            where: { unique_id },
        });
        if (!fund) {
            return res.status(404).json({ error: 'Fund not found' });
        }
        res.json(fund);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// /filter?searchString={searchString}&take={take}&skip={skip}&orderBy={orderBy}
app.get('/filter', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchString, skip, take, orderBy } = req.query;
    const or = searchString
        ? {
            OR: [
                { proj_name_th: { contains: searchString } },
                { proj_name_en: { contains: searchString } },
            ],
        }
        : {};
    const funds = yield prisma.fund.findMany({
        where: Object.assign({}, or),
        take: Number(take) || undefined,
        skip: Number(skip) || undefined,
        orderBy: {
            proj_name_en: orderBy,
        },
    });
    res.json(funds);
}));
///////////////////////////////// product /////////////////////////////////////////
//เอาทุกอัน
app.get('/product', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield prisma.product.findMany();
    res.json(products);
}));
// /filter?searchString={searchString}&take={take}&skip={skip}&orderBy={orderBy}
app.get('/filter/product', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchString, skip, take, orderBy } = req.query;
    const or = searchString
        ? {
            OR: [
                { proj_name_th: { contains: searchString } },
                { proj_name_en: { contains: searchString } },
                { proj_abbr_name: { contains: searchString } },
            ],
        }
        : {};
    const products = yield prisma.product.findMany({
        where: Object.assign({}, or),
        take: Number(take) || undefined,
        skip: Number(skip) || undefined,
        orderBy: {
            proj_name_en: orderBy,
        },
    });
    res.json(products);
}));
///////////////////////////////// fav /////////////////////////////////////////
//เอาทุกอัน
app.get('/fav', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const favorites = yield prisma.favorite.findMany();
    res.json(favorites);
}));
app.delete(`/post/:proj_id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { proj_id } = req.params;
    const post = yield prisma.favorite.delete({
        where: {
            proj_id: String(proj_id),
        },
    });
    res.json(post);
}));
app.post(`/post`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fav, proj_id, favID } = req.body;
    const result = yield prisma.favorite.create({
        data: {
            fav,
            proj_id,
            favID,
        },
    });
    res.json(result);
}));
///////////////////////////////// สัดส่วนประเภททรัพย์สินที่ลงทุน /////////////////////////////////////////
app.get('/type/:proj_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { proj_id } = req.params;
        // Use Prisma to query the database
        const types = yield prisma.type_assets_invested.findMany({
            where: { proj_id },
        });
        if (!types) {
            return res.status(404).json({ error: 'types not found' });
        }
        res.json(types);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
///////////////////////////////// Top five /////////////////////////////////////////
app.get('/topfive/:proj_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { proj_id } = req.params;
        // Use Prisma to query the database
        const types = yield prisma.top_five_investment_assets.findMany({
            where: { proj_id },
        });
        if (!types) {
            return res.status(404).json({ error: 'top_fives not found' });
        }
        res.json(types);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
///////////////////////////////// Fees_mutal/////////////////////////////////////////
app.get('/feemutal/:proj_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { proj_id } = req.params;
        // Use Prisma to query the database
        const types = yield prisma.fees_charged_by_mutual_funds.findMany({
            where: { proj_id },
        });
        if (!types) {
            return res.status(404).json({ error: 'fee_mutal not found' });
        }
        res.json(types);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
///////////////////////////////// Fees_unitholders/////////////////////////////////////////
app.get('/feeunit/:proj_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { proj_id } = req.params;
        // Use Prisma to query the database
        const types = yield prisma.fees_charged_to_unitholders.findMany({
            where: { proj_id },
        });
        if (!types) {
            return res.status(404).json({ error: 'fee_unit not found' });
        }
        res.json(types);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
///////////////////////////////// Investment_top_five_issuers/////////////////////////////////////////
app.get('/invtopfiveissue/:proj_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { proj_id } = req.params;
        // Use Prisma to query the database
        const types = yield prisma.investment_allocation_in_the_top_five_issuers.findMany({
            where: { proj_id },
        });
        if (!types) {
            return res.status(404).json({ error: 'investment top_five_issuers not found' });
        }
        res.json(types);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
///////////////////////////////// Investment_according_to_credit_rating/////////////////////////////////////////
app.get('/invcredit/:proj_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { proj_id } = req.params;
        // Use Prisma to query the database
        const types = yield prisma.investment_allocation_according_to_credit_rating.findMany({
            where: { proj_id },
        });
        if (!types) {
            return res.status(404).json({ error: 'investment according_to_credit not found' });
        }
        res.json(types);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
///////////////////////////////// getallinfoproduct/////////////////////////////////////////
app.get('/allpro', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const all = yield prisma.allProductInfo.findMany();
    res.json(all);
}));
app.listen(5050, () => console.log("Server ready on port 5050."));
module.exports = app;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // ... you will write your Prisma Client queries here
        console.log("Server ready at: http://localhost:5050");
    });
}
main()
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    process.exit(1);
}))
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
