
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
 * Prisma Client JS version: 5.15.0
 * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
 */
Prisma.prismaVersion = {
  client: "5.15.0",
  engine: "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022"
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

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  proj_abbr_name: 'proj_abbr_name',
  proj_name_en: 'proj_name_en',
  proj_name_th: 'proj_name_th',
  unique_id: 'unique_id',
  risk_spectrum: 'risk_spectrum',
  companyTH: 'companyTH',
  companyEN: 'companyEN',
  Allinfo: 'Allinfo',
  feefunds: 'feefunds',
  fundType: 'fundType'
};

exports.Prisma.FavoriteScalarFieldEnum = {
  id: 'id',
  user: 'user',
  proj_abbr_name_list: 'proj_abbr_name_list',
  product_json_list: 'product_json_list'
};

exports.Prisma.Page1compareinfomationScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  proj_abbr_name: 'proj_abbr_name',
  compareinfomation: 'compareinfomation',
  dailydate: 'dailydate',
  dailynet: 'dailynet',
  dailyval: 'dailyval'
};

exports.Prisma.Page2Operating_results_and_dividendsScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  proj_abbr_name: 'proj_abbr_name',
  operating_results: 'operating_results'
};

exports.Prisma.Page3topfiveCompareportScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  proj_abbr_name: 'proj_abbr_name',
  top_five_holding: 'top_five_holding'
};

exports.Prisma.Page3typeCompareportScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  proj_abbr_name: 'proj_abbr_name',
  type_data: 'type_data'
};

exports.Prisma.Page3Investment_proportionCompareportScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  proj_abbr_name: 'proj_abbr_name',
  Investment_proportion_data: 'Investment_proportion_data'
};

exports.Prisma.Page4FeeScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  proj_abbr_name: 'proj_abbr_name',
  data_from_sheet: 'data_from_sheet',
  data_from_real: 'data_from_real',
  fund_fact_url: 'fund_fact_url',
  buyInfo: 'buyInfo'
};

exports.Prisma.AllProductInfoScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  proj_abbr_name: 'proj_abbr_name',
  Allinfo: 'Allinfo'
};

exports.Prisma.SearchTestScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  proj_abbr_name: 'proj_abbr_name',
  proj_name_en: 'proj_name_en',
  proj_name_th: 'proj_name_th',
  unique_id: 'unique_id',
  risk_spectrum: 'risk_spectrum'
};

exports.Prisma.ProductDetailScalarFieldEnum = {
  id: 'id',
  proj_id: 'proj_id',
  proj_abbr_name: 'proj_abbr_name',
  proj_name_en: 'proj_name_en',
  proj_name_th: 'proj_name_th',
  unique_id: 'unique_id',
  risk_spectrum: 'risk_spectrum',
  companyTH: 'companyTH',
  companyEN: 'companyEN',
  fundType: 'fundType',
  fund_resYTD: 'fund_resYTD',
  Allinfo: 'Allinfo',
  dailydate: 'dailydate',
  dailynet: 'dailynet',
  dailyval: 'dailyval'
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
  Product: 'Product',
  Favorite: 'Favorite',
  Page1compareinfomation: 'Page1compareinfomation',
  Page2Operating_results_and_dividends: 'Page2Operating_results_and_dividends',
  Page3topfiveCompareport: 'Page3topfiveCompareport',
  Page3typeCompareport: 'Page3typeCompareport',
  Page3Investment_proportionCompareport: 'Page3Investment_proportionCompareport',
  Page4Fee: 'Page4Fee',
  AllProductInfo: 'AllProductInfo',
  SearchTest: 'SearchTest',
  ProductDetail: 'ProductDetail'
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
