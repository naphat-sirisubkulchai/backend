
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.11.0
 * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
 */
Prisma.prismaVersion = {
  client: "5.11.0",
  engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.FundScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  regis_id: 'regis_id',
  regis_date: 'regis_date',
  cancel_date: 'cancel_date',
  proj_name_th: 'proj_name_th',
  proj_name_en: 'proj_name_en',
  proj_abbr_name: 'proj_abbr_name',
  fund_status: 'fund_status',
  unique_id: 'unique_id',
  permit_us_investment: 'permit_us_investment',
  invest_country_flag: 'invest_country_flag',
  last_upd_date: 'last_upd_date'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  proj_abbr_name: 'proj_abbr_name',
  proj_name_en: 'proj_name_en',
  proj_name_th: 'proj_name_th',
  unique_id: 'unique_id',
  risk_spectrum: 'risk_spectrum'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  username: 'username'
};

exports.Prisma.FavoriteScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  favID: 'favID'
};

exports.Prisma.CompareinfomationScalarFieldEnum = {
  id: 'id',
  fundType: 'fundType',
  risk_spectrum: 'risk_spectrum',
  Feeder_Fund: 'Feeder_Fund',
  Currency_policy: 'Currency_policy',
  Dividend_payment_policy: 'Dividend_payment_policy',
  Sales_fees: 'Sales_fees',
  Buyback_fee: 'Buyback_fee',
  Mutual_fund_expenses: 'Mutual_fund_expenses',
  Minimum_initial_investment: 'Minimum_initial_investment',
  Minimum_next_investment: 'Minimum_next_investment',
  Investment_registration_date: 'Investment_registration_date',
  Net_asset_value: 'Net_asset_value'
};

exports.Prisma.Type_assets_investedScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  data: 'data'
};

exports.Prisma.Top_five_investment_assetsScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  data: 'data'
};

exports.Prisma.Fees_charged_by_mutual_fundsScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  data: 'data'
};

exports.Prisma.Fees_charged_to_unitholdersScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  data: 'data'
};

exports.Prisma.Investment_allocation_in_the_top_five_issuersScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  data: 'data'
};

exports.Prisma.Investment_allocation_according_to_credit_ratingScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  data: 'data'
};

exports.Prisma.Investment_In_CountryScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  Countrydata: 'Countrydata'
};

exports.Prisma.AllProductInfoScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  proj_abbr_name: 'proj_abbr_name',
  Allinfo: 'Allinfo'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  Fund: 'Fund',
  Product: 'Product',
  User: 'User',
  Favorite: 'Favorite',
  Compareinfomation: 'Compareinfomation',
  Type_assets_invested: 'Type_assets_invested',
  Top_five_investment_assets: 'Top_five_investment_assets',
  Fees_charged_by_mutual_funds: 'Fees_charged_by_mutual_funds',
  Fees_charged_to_unitholders: 'Fees_charged_to_unitholders',
  Investment_allocation_in_the_top_five_issuers: 'Investment_allocation_in_the_top_five_issuers',
  Investment_allocation_according_to_credit_rating: 'Investment_allocation_according_to_credit_rating',
  Investment_In_Country: 'Investment_In_Country',
  AllProductInfo: 'AllProductInfo'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
