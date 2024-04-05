
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model Page1compareinfomation
 * 
 */
export type Page1compareinfomation = $Result.DefaultSelection<Prisma.$Page1compareinfomationPayload>
/**
 * Model Page2Operating_results_and_dividends
 * 
 */
export type Page2Operating_results_and_dividends = $Result.DefaultSelection<Prisma.$Page2Operating_results_and_dividendsPayload>
/**
 * Model Page3topfiveCompareport
 * 
 */
export type Page3topfiveCompareport = $Result.DefaultSelection<Prisma.$Page3topfiveCompareportPayload>
/**
 * Model Page3typeCompareport
 * 
 */
export type Page3typeCompareport = $Result.DefaultSelection<Prisma.$Page3typeCompareportPayload>
/**
 * Model Page3Investment_proportionCompareport
 * 
 */
export type Page3Investment_proportionCompareport = $Result.DefaultSelection<Prisma.$Page3Investment_proportionCompareportPayload>
/**
 * Model Page4Fee
 * 
 */
export type Page4Fee = $Result.DefaultSelection<Prisma.$Page4FeePayload>
/**
 * Model AllProductInfo
 * 
 */
export type AllProductInfo = $Result.DefaultSelection<Prisma.$AllProductInfoPayload>
/**
 * Model SearchTest
 * 
 */
export type SearchTest = $Result.DefaultSelection<Prisma.$SearchTestPayload>
/**
 * Model ProductDetail
 * 
 */
export type ProductDetail = $Result.DefaultSelection<Prisma.$ProductDetailPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs>;

  /**
   * `prisma.page1compareinfomation`: Exposes CRUD operations for the **Page1compareinfomation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Page1compareinfomations
    * const page1compareinfomations = await prisma.page1compareinfomation.findMany()
    * ```
    */
  get page1compareinfomation(): Prisma.Page1compareinfomationDelegate<ExtArgs>;

  /**
   * `prisma.page2Operating_results_and_dividends`: Exposes CRUD operations for the **Page2Operating_results_and_dividends** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Page2Operating_results_and_dividends
    * const page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.findMany()
    * ```
    */
  get page2Operating_results_and_dividends(): Prisma.Page2Operating_results_and_dividendsDelegate<ExtArgs>;

  /**
   * `prisma.page3topfiveCompareport`: Exposes CRUD operations for the **Page3topfiveCompareport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Page3topfiveCompareports
    * const page3topfiveCompareports = await prisma.page3topfiveCompareport.findMany()
    * ```
    */
  get page3topfiveCompareport(): Prisma.Page3topfiveCompareportDelegate<ExtArgs>;

  /**
   * `prisma.page3typeCompareport`: Exposes CRUD operations for the **Page3typeCompareport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Page3typeCompareports
    * const page3typeCompareports = await prisma.page3typeCompareport.findMany()
    * ```
    */
  get page3typeCompareport(): Prisma.Page3typeCompareportDelegate<ExtArgs>;

  /**
   * `prisma.page3Investment_proportionCompareport`: Exposes CRUD operations for the **Page3Investment_proportionCompareport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Page3Investment_proportionCompareports
    * const page3Investment_proportionCompareports = await prisma.page3Investment_proportionCompareport.findMany()
    * ```
    */
  get page3Investment_proportionCompareport(): Prisma.Page3Investment_proportionCompareportDelegate<ExtArgs>;

  /**
   * `prisma.page4Fee`: Exposes CRUD operations for the **Page4Fee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Page4Fees
    * const page4Fees = await prisma.page4Fee.findMany()
    * ```
    */
  get page4Fee(): Prisma.Page4FeeDelegate<ExtArgs>;

  /**
   * `prisma.allProductInfo`: Exposes CRUD operations for the **AllProductInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AllProductInfos
    * const allProductInfos = await prisma.allProductInfo.findMany()
    * ```
    */
  get allProductInfo(): Prisma.AllProductInfoDelegate<ExtArgs>;

  /**
   * `prisma.searchTest`: Exposes CRUD operations for the **SearchTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchTests
    * const searchTests = await prisma.searchTest.findMany()
    * ```
    */
  get searchTest(): Prisma.SearchTestDelegate<ExtArgs>;

  /**
   * `prisma.productDetail`: Exposes CRUD operations for the **ProductDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductDetails
    * const productDetails = await prisma.productDetail.findMany()
    * ```
    */
  get productDetail(): Prisma.ProductDetailDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'product' | 'favorite' | 'page1compareinfomation' | 'page2Operating_results_and_dividends' | 'page3topfiveCompareport' | 'page3typeCompareport' | 'page3Investment_proportionCompareport' | 'page4Fee' | 'allProductInfo' | 'searchTest' | 'productDetail'
      txIsolationLevel: never
    },
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FavoriteFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.FavoriteAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>,
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      Page1compareinfomation: {
        payload: Prisma.$Page1compareinfomationPayload<ExtArgs>
        fields: Prisma.Page1compareinfomationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Page1compareinfomationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page1compareinfomationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Page1compareinfomationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page1compareinfomationPayload>
          }
          findFirst: {
            args: Prisma.Page1compareinfomationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page1compareinfomationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Page1compareinfomationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page1compareinfomationPayload>
          }
          findMany: {
            args: Prisma.Page1compareinfomationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page1compareinfomationPayload>[]
          }
          create: {
            args: Prisma.Page1compareinfomationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page1compareinfomationPayload>
          }
          createMany: {
            args: Prisma.Page1compareinfomationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Page1compareinfomationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page1compareinfomationPayload>
          }
          update: {
            args: Prisma.Page1compareinfomationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page1compareinfomationPayload>
          }
          deleteMany: {
            args: Prisma.Page1compareinfomationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Page1compareinfomationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Page1compareinfomationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page1compareinfomationPayload>
          }
          aggregate: {
            args: Prisma.Page1compareinfomationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePage1compareinfomation>
          }
          groupBy: {
            args: Prisma.Page1compareinfomationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Page1compareinfomationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Page1compareinfomationFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Page1compareinfomationAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Page1compareinfomationCountArgs<ExtArgs>,
            result: $Utils.Optional<Page1compareinfomationCountAggregateOutputType> | number
          }
        }
      }
      Page2Operating_results_and_dividends: {
        payload: Prisma.$Page2Operating_results_and_dividendsPayload<ExtArgs>
        fields: Prisma.Page2Operating_results_and_dividendsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Page2Operating_results_and_dividendsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page2Operating_results_and_dividendsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Page2Operating_results_and_dividendsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page2Operating_results_and_dividendsPayload>
          }
          findFirst: {
            args: Prisma.Page2Operating_results_and_dividendsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page2Operating_results_and_dividendsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Page2Operating_results_and_dividendsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page2Operating_results_and_dividendsPayload>
          }
          findMany: {
            args: Prisma.Page2Operating_results_and_dividendsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page2Operating_results_and_dividendsPayload>[]
          }
          create: {
            args: Prisma.Page2Operating_results_and_dividendsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page2Operating_results_and_dividendsPayload>
          }
          createMany: {
            args: Prisma.Page2Operating_results_and_dividendsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Page2Operating_results_and_dividendsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page2Operating_results_and_dividendsPayload>
          }
          update: {
            args: Prisma.Page2Operating_results_and_dividendsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page2Operating_results_and_dividendsPayload>
          }
          deleteMany: {
            args: Prisma.Page2Operating_results_and_dividendsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Page2Operating_results_and_dividendsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Page2Operating_results_and_dividendsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page2Operating_results_and_dividendsPayload>
          }
          aggregate: {
            args: Prisma.Page2Operating_results_and_dividendsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePage2Operating_results_and_dividends>
          }
          groupBy: {
            args: Prisma.Page2Operating_results_and_dividendsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Page2Operating_results_and_dividendsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Page2Operating_results_and_dividendsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Page2Operating_results_and_dividendsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Page2Operating_results_and_dividendsCountArgs<ExtArgs>,
            result: $Utils.Optional<Page2Operating_results_and_dividendsCountAggregateOutputType> | number
          }
        }
      }
      Page3topfiveCompareport: {
        payload: Prisma.$Page3topfiveCompareportPayload<ExtArgs>
        fields: Prisma.Page3topfiveCompareportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Page3topfiveCompareportFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3topfiveCompareportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Page3topfiveCompareportFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3topfiveCompareportPayload>
          }
          findFirst: {
            args: Prisma.Page3topfiveCompareportFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3topfiveCompareportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Page3topfiveCompareportFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3topfiveCompareportPayload>
          }
          findMany: {
            args: Prisma.Page3topfiveCompareportFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3topfiveCompareportPayload>[]
          }
          create: {
            args: Prisma.Page3topfiveCompareportCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3topfiveCompareportPayload>
          }
          createMany: {
            args: Prisma.Page3topfiveCompareportCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Page3topfiveCompareportDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3topfiveCompareportPayload>
          }
          update: {
            args: Prisma.Page3topfiveCompareportUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3topfiveCompareportPayload>
          }
          deleteMany: {
            args: Prisma.Page3topfiveCompareportDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Page3topfiveCompareportUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Page3topfiveCompareportUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3topfiveCompareportPayload>
          }
          aggregate: {
            args: Prisma.Page3topfiveCompareportAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePage3topfiveCompareport>
          }
          groupBy: {
            args: Prisma.Page3topfiveCompareportGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Page3topfiveCompareportGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Page3topfiveCompareportFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Page3topfiveCompareportAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Page3topfiveCompareportCountArgs<ExtArgs>,
            result: $Utils.Optional<Page3topfiveCompareportCountAggregateOutputType> | number
          }
        }
      }
      Page3typeCompareport: {
        payload: Prisma.$Page3typeCompareportPayload<ExtArgs>
        fields: Prisma.Page3typeCompareportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Page3typeCompareportFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3typeCompareportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Page3typeCompareportFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3typeCompareportPayload>
          }
          findFirst: {
            args: Prisma.Page3typeCompareportFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3typeCompareportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Page3typeCompareportFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3typeCompareportPayload>
          }
          findMany: {
            args: Prisma.Page3typeCompareportFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3typeCompareportPayload>[]
          }
          create: {
            args: Prisma.Page3typeCompareportCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3typeCompareportPayload>
          }
          createMany: {
            args: Prisma.Page3typeCompareportCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Page3typeCompareportDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3typeCompareportPayload>
          }
          update: {
            args: Prisma.Page3typeCompareportUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3typeCompareportPayload>
          }
          deleteMany: {
            args: Prisma.Page3typeCompareportDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Page3typeCompareportUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Page3typeCompareportUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3typeCompareportPayload>
          }
          aggregate: {
            args: Prisma.Page3typeCompareportAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePage3typeCompareport>
          }
          groupBy: {
            args: Prisma.Page3typeCompareportGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Page3typeCompareportGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Page3typeCompareportFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Page3typeCompareportAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Page3typeCompareportCountArgs<ExtArgs>,
            result: $Utils.Optional<Page3typeCompareportCountAggregateOutputType> | number
          }
        }
      }
      Page3Investment_proportionCompareport: {
        payload: Prisma.$Page3Investment_proportionCompareportPayload<ExtArgs>
        fields: Prisma.Page3Investment_proportionCompareportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Page3Investment_proportionCompareportFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3Investment_proportionCompareportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Page3Investment_proportionCompareportFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3Investment_proportionCompareportPayload>
          }
          findFirst: {
            args: Prisma.Page3Investment_proportionCompareportFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3Investment_proportionCompareportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Page3Investment_proportionCompareportFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3Investment_proportionCompareportPayload>
          }
          findMany: {
            args: Prisma.Page3Investment_proportionCompareportFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3Investment_proportionCompareportPayload>[]
          }
          create: {
            args: Prisma.Page3Investment_proportionCompareportCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3Investment_proportionCompareportPayload>
          }
          createMany: {
            args: Prisma.Page3Investment_proportionCompareportCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Page3Investment_proportionCompareportDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3Investment_proportionCompareportPayload>
          }
          update: {
            args: Prisma.Page3Investment_proportionCompareportUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3Investment_proportionCompareportPayload>
          }
          deleteMany: {
            args: Prisma.Page3Investment_proportionCompareportDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Page3Investment_proportionCompareportUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Page3Investment_proportionCompareportUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page3Investment_proportionCompareportPayload>
          }
          aggregate: {
            args: Prisma.Page3Investment_proportionCompareportAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePage3Investment_proportionCompareport>
          }
          groupBy: {
            args: Prisma.Page3Investment_proportionCompareportGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Page3Investment_proportionCompareportGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Page3Investment_proportionCompareportFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Page3Investment_proportionCompareportAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Page3Investment_proportionCompareportCountArgs<ExtArgs>,
            result: $Utils.Optional<Page3Investment_proportionCompareportCountAggregateOutputType> | number
          }
        }
      }
      Page4Fee: {
        payload: Prisma.$Page4FeePayload<ExtArgs>
        fields: Prisma.Page4FeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Page4FeeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page4FeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Page4FeeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page4FeePayload>
          }
          findFirst: {
            args: Prisma.Page4FeeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page4FeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Page4FeeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page4FeePayload>
          }
          findMany: {
            args: Prisma.Page4FeeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page4FeePayload>[]
          }
          create: {
            args: Prisma.Page4FeeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page4FeePayload>
          }
          createMany: {
            args: Prisma.Page4FeeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Page4FeeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page4FeePayload>
          }
          update: {
            args: Prisma.Page4FeeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page4FeePayload>
          }
          deleteMany: {
            args: Prisma.Page4FeeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Page4FeeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Page4FeeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Page4FeePayload>
          }
          aggregate: {
            args: Prisma.Page4FeeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePage4Fee>
          }
          groupBy: {
            args: Prisma.Page4FeeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Page4FeeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Page4FeeFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Page4FeeAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Page4FeeCountArgs<ExtArgs>,
            result: $Utils.Optional<Page4FeeCountAggregateOutputType> | number
          }
        }
      }
      AllProductInfo: {
        payload: Prisma.$AllProductInfoPayload<ExtArgs>
        fields: Prisma.AllProductInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllProductInfoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllProductInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllProductInfoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllProductInfoPayload>
          }
          findFirst: {
            args: Prisma.AllProductInfoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllProductInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllProductInfoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllProductInfoPayload>
          }
          findMany: {
            args: Prisma.AllProductInfoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllProductInfoPayload>[]
          }
          create: {
            args: Prisma.AllProductInfoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllProductInfoPayload>
          }
          createMany: {
            args: Prisma.AllProductInfoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AllProductInfoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllProductInfoPayload>
          }
          update: {
            args: Prisma.AllProductInfoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllProductInfoPayload>
          }
          deleteMany: {
            args: Prisma.AllProductInfoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AllProductInfoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AllProductInfoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllProductInfoPayload>
          }
          aggregate: {
            args: Prisma.AllProductInfoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAllProductInfo>
          }
          groupBy: {
            args: Prisma.AllProductInfoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AllProductInfoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AllProductInfoFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AllProductInfoAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AllProductInfoCountArgs<ExtArgs>,
            result: $Utils.Optional<AllProductInfoCountAggregateOutputType> | number
          }
        }
      }
      SearchTest: {
        payload: Prisma.$SearchTestPayload<ExtArgs>
        fields: Prisma.SearchTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchTestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchTestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchTestPayload>
          }
          findFirst: {
            args: Prisma.SearchTestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchTestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchTestPayload>
          }
          findMany: {
            args: Prisma.SearchTestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchTestPayload>[]
          }
          create: {
            args: Prisma.SearchTestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchTestPayload>
          }
          createMany: {
            args: Prisma.SearchTestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SearchTestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchTestPayload>
          }
          update: {
            args: Prisma.SearchTestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchTestPayload>
          }
          deleteMany: {
            args: Prisma.SearchTestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SearchTestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SearchTestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SearchTestPayload>
          }
          aggregate: {
            args: Prisma.SearchTestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSearchTest>
          }
          groupBy: {
            args: Prisma.SearchTestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SearchTestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SearchTestFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.SearchTestAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.SearchTestCountArgs<ExtArgs>,
            result: $Utils.Optional<SearchTestCountAggregateOutputType> | number
          }
        }
      }
      ProductDetail: {
        payload: Prisma.$ProductDetailPayload<ExtArgs>
        fields: Prisma.ProductDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductDetailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductDetailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload>
          }
          findFirst: {
            args: Prisma.ProductDetailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductDetailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload>
          }
          findMany: {
            args: Prisma.ProductDetailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload>[]
          }
          create: {
            args: Prisma.ProductDetailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload>
          }
          createMany: {
            args: Prisma.ProductDetailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDetailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload>
          }
          update: {
            args: Prisma.ProductDetailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload>
          }
          deleteMany: {
            args: Prisma.ProductDetailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductDetailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductDetailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload>
          }
          aggregate: {
            args: Prisma.ProductDetailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductDetail>
          }
          groupBy: {
            args: Prisma.ProductDetailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductDetailGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductDetailFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductDetailAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ProductDetailCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductDetailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
    proj_name_en: string | null
    proj_name_th: string | null
    unique_id: string | null
    risk_spectrum: string | null
    companyTH: string | null
    companyEN: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
    proj_name_en: string | null
    proj_name_th: string | null
    unique_id: string | null
    risk_spectrum: string | null
    companyTH: string | null
    companyEN: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    proj_id: number
    proj_abbr_name: number
    proj_name_en: number
    proj_name_th: number
    unique_id: number
    risk_spectrum: number
    companyTH: number
    companyEN: number
    Allinfo: number
    feefunds: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    proj_name_en?: true
    proj_name_th?: true
    unique_id?: true
    risk_spectrum?: true
    companyTH?: true
    companyEN?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    proj_name_en?: true
    proj_name_th?: true
    unique_id?: true
    risk_spectrum?: true
    companyTH?: true
    companyEN?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    proj_name_en?: true
    proj_name_th?: true
    unique_id?: true
    risk_spectrum?: true
    companyTH?: true
    companyEN?: true
    Allinfo?: true
    feefunds?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
    companyTH: string
    companyEN: string
    Allinfo: JsonValue
    feefunds: string[]
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    proj_name_en?: boolean
    proj_name_th?: boolean
    unique_id?: boolean
    risk_spectrum?: boolean
    companyTH?: boolean
    companyEN?: boolean
    Allinfo?: boolean
    feefunds?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    proj_name_en?: boolean
    proj_name_th?: boolean
    unique_id?: boolean
    risk_spectrum?: boolean
    companyTH?: boolean
    companyEN?: boolean
    Allinfo?: boolean
    feefunds?: boolean
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      proj_abbr_name: string
      proj_name_en: string
      proj_name_th: string
      unique_id: string
      risk_spectrum: string
      companyTH: string
      companyEN: string
      Allinfo: Prisma.JsonValue
      feefunds: string[]
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * @param {ProductFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const product = await prisma.product.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProductFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Product.
     * @param {ProductAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const product = await prisma.product.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProductAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly proj_id: FieldRef<"Product", 'String'>
    readonly proj_abbr_name: FieldRef<"Product", 'String'>
    readonly proj_name_en: FieldRef<"Product", 'String'>
    readonly proj_name_th: FieldRef<"Product", 'String'>
    readonly unique_id: FieldRef<"Product", 'String'>
    readonly risk_spectrum: FieldRef<"Product", 'String'>
    readonly companyTH: FieldRef<"Product", 'String'>
    readonly companyEN: FieldRef<"Product", 'String'>
    readonly Allinfo: FieldRef<"Product", 'Json'>
    readonly feefunds: FieldRef<"Product", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product findRaw
   */
  export type ProductFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Product aggregateRaw
   */
  export type ProductAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
  }



  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    user: string | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    user: string | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    user: number
    proj_abbr_name_list: number
    product_json_list: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    user?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    user?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    user?: true
    proj_abbr_name_list?: true
    product_json_list?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    user: string
    proj_abbr_name_list: string[]
    product_json_list: JsonValue[]
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    proj_abbr_name_list?: boolean
    product_json_list?: boolean
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    user?: boolean
    proj_abbr_name_list?: boolean
    product_json_list?: boolean
  }


  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user: string
      proj_abbr_name_list: string[]
      product_json_list: Prisma.JsonValue[]
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }


  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FavoriteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Favorite that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FavoriteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FavoriteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
    **/
    create<T extends FavoriteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Favorites.
     *     @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     *     @example
     *     // Create many Favorites
     *     const favorite = await prisma.favorite.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FavoriteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
    **/
    delete<T extends FavoriteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FavoriteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FavoriteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FavoriteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
    **/
    upsert<T extends FavoriteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Favorites that matches the filter.
     * @param {FavoriteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const favorite = await prisma.favorite.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: FavoriteFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Favorite.
     * @param {FavoriteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const favorite = await prisma.favorite.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: FavoriteAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Favorite model
   */ 
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly user: FieldRef<"Favorite", 'String'>
    readonly proj_abbr_name_list: FieldRef<"Favorite", 'String[]'>
    readonly product_json_list: FieldRef<"Favorite", 'Json[]'>
  }
    

  // Custom InputTypes

  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }


  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }


  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }


  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }


  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
  }


  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
  }


  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }


  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
  }


  /**
   * Favorite findRaw
   */
  export type FavoriteFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Favorite aggregateRaw
   */
  export type FavoriteAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
  }



  /**
   * Model Page1compareinfomation
   */

  export type AggregatePage1compareinfomation = {
    _count: Page1compareinfomationCountAggregateOutputType | null
    _min: Page1compareinfomationMinAggregateOutputType | null
    _max: Page1compareinfomationMaxAggregateOutputType | null
  }

  export type Page1compareinfomationMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
  }

  export type Page1compareinfomationMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
  }

  export type Page1compareinfomationCountAggregateOutputType = {
    id: number
    proj_id: number
    proj_abbr_name: number
    compareinfomation: number
    _all: number
  }


  export type Page1compareinfomationMinAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
  }

  export type Page1compareinfomationMaxAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
  }

  export type Page1compareinfomationCountAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    compareinfomation?: true
    _all?: true
  }

  export type Page1compareinfomationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page1compareinfomation to aggregate.
     */
    where?: Page1compareinfomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page1compareinfomations to fetch.
     */
    orderBy?: Page1compareinfomationOrderByWithRelationInput | Page1compareinfomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Page1compareinfomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page1compareinfomations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page1compareinfomations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Page1compareinfomations
    **/
    _count?: true | Page1compareinfomationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Page1compareinfomationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Page1compareinfomationMaxAggregateInputType
  }

  export type GetPage1compareinfomationAggregateType<T extends Page1compareinfomationAggregateArgs> = {
        [P in keyof T & keyof AggregatePage1compareinfomation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage1compareinfomation[P]>
      : GetScalarType<T[P], AggregatePage1compareinfomation[P]>
  }




  export type Page1compareinfomationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Page1compareinfomationWhereInput
    orderBy?: Page1compareinfomationOrderByWithAggregationInput | Page1compareinfomationOrderByWithAggregationInput[]
    by: Page1compareinfomationScalarFieldEnum[] | Page1compareinfomationScalarFieldEnum
    having?: Page1compareinfomationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Page1compareinfomationCountAggregateInputType | true
    _min?: Page1compareinfomationMinAggregateInputType
    _max?: Page1compareinfomationMaxAggregateInputType
  }

  export type Page1compareinfomationGroupByOutputType = {
    id: string
    proj_id: string
    proj_abbr_name: string
    compareinfomation: JsonValue
    _count: Page1compareinfomationCountAggregateOutputType | null
    _min: Page1compareinfomationMinAggregateOutputType | null
    _max: Page1compareinfomationMaxAggregateOutputType | null
  }

  type GetPage1compareinfomationGroupByPayload<T extends Page1compareinfomationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Page1compareinfomationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Page1compareinfomationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Page1compareinfomationGroupByOutputType[P]>
            : GetScalarType<T[P], Page1compareinfomationGroupByOutputType[P]>
        }
      >
    >


  export type Page1compareinfomationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    compareinfomation?: boolean
  }, ExtArgs["result"]["page1compareinfomation"]>

  export type Page1compareinfomationSelectScalar = {
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    compareinfomation?: boolean
  }


  export type $Page1compareinfomationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page1compareinfomation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      proj_abbr_name: string
      compareinfomation: Prisma.JsonValue
    }, ExtArgs["result"]["page1compareinfomation"]>
    composites: {}
  }


  type Page1compareinfomationGetPayload<S extends boolean | null | undefined | Page1compareinfomationDefaultArgs> = $Result.GetResult<Prisma.$Page1compareinfomationPayload, S>

  type Page1compareinfomationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Page1compareinfomationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Page1compareinfomationCountAggregateInputType | true
    }

  export interface Page1compareinfomationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page1compareinfomation'], meta: { name: 'Page1compareinfomation' } }
    /**
     * Find zero or one Page1compareinfomation that matches the filter.
     * @param {Page1compareinfomationFindUniqueArgs} args - Arguments to find a Page1compareinfomation
     * @example
     * // Get one Page1compareinfomation
     * const page1compareinfomation = await prisma.page1compareinfomation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Page1compareinfomationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Page1compareinfomationFindUniqueArgs<ExtArgs>>
    ): Prisma__Page1compareinfomationClient<$Result.GetResult<Prisma.$Page1compareinfomationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Page1compareinfomation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Page1compareinfomationFindUniqueOrThrowArgs} args - Arguments to find a Page1compareinfomation
     * @example
     * // Get one Page1compareinfomation
     * const page1compareinfomation = await prisma.page1compareinfomation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Page1compareinfomationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Page1compareinfomationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Page1compareinfomationClient<$Result.GetResult<Prisma.$Page1compareinfomationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Page1compareinfomation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page1compareinfomationFindFirstArgs} args - Arguments to find a Page1compareinfomation
     * @example
     * // Get one Page1compareinfomation
     * const page1compareinfomation = await prisma.page1compareinfomation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Page1compareinfomationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Page1compareinfomationFindFirstArgs<ExtArgs>>
    ): Prisma__Page1compareinfomationClient<$Result.GetResult<Prisma.$Page1compareinfomationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Page1compareinfomation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page1compareinfomationFindFirstOrThrowArgs} args - Arguments to find a Page1compareinfomation
     * @example
     * // Get one Page1compareinfomation
     * const page1compareinfomation = await prisma.page1compareinfomation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Page1compareinfomationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Page1compareinfomationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Page1compareinfomationClient<$Result.GetResult<Prisma.$Page1compareinfomationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Page1compareinfomations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page1compareinfomationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Page1compareinfomations
     * const page1compareinfomations = await prisma.page1compareinfomation.findMany()
     * 
     * // Get first 10 Page1compareinfomations
     * const page1compareinfomations = await prisma.page1compareinfomation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const page1compareinfomationWithIdOnly = await prisma.page1compareinfomation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Page1compareinfomationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page1compareinfomationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Page1compareinfomationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Page1compareinfomation.
     * @param {Page1compareinfomationCreateArgs} args - Arguments to create a Page1compareinfomation.
     * @example
     * // Create one Page1compareinfomation
     * const Page1compareinfomation = await prisma.page1compareinfomation.create({
     *   data: {
     *     // ... data to create a Page1compareinfomation
     *   }
     * })
     * 
    **/
    create<T extends Page1compareinfomationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Page1compareinfomationCreateArgs<ExtArgs>>
    ): Prisma__Page1compareinfomationClient<$Result.GetResult<Prisma.$Page1compareinfomationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Page1compareinfomations.
     *     @param {Page1compareinfomationCreateManyArgs} args - Arguments to create many Page1compareinfomations.
     *     @example
     *     // Create many Page1compareinfomations
     *     const page1compareinfomation = await prisma.page1compareinfomation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Page1compareinfomationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page1compareinfomationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Page1compareinfomation.
     * @param {Page1compareinfomationDeleteArgs} args - Arguments to delete one Page1compareinfomation.
     * @example
     * // Delete one Page1compareinfomation
     * const Page1compareinfomation = await prisma.page1compareinfomation.delete({
     *   where: {
     *     // ... filter to delete one Page1compareinfomation
     *   }
     * })
     * 
    **/
    delete<T extends Page1compareinfomationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Page1compareinfomationDeleteArgs<ExtArgs>>
    ): Prisma__Page1compareinfomationClient<$Result.GetResult<Prisma.$Page1compareinfomationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Page1compareinfomation.
     * @param {Page1compareinfomationUpdateArgs} args - Arguments to update one Page1compareinfomation.
     * @example
     * // Update one Page1compareinfomation
     * const page1compareinfomation = await prisma.page1compareinfomation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Page1compareinfomationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Page1compareinfomationUpdateArgs<ExtArgs>>
    ): Prisma__Page1compareinfomationClient<$Result.GetResult<Prisma.$Page1compareinfomationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Page1compareinfomations.
     * @param {Page1compareinfomationDeleteManyArgs} args - Arguments to filter Page1compareinfomations to delete.
     * @example
     * // Delete a few Page1compareinfomations
     * const { count } = await prisma.page1compareinfomation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Page1compareinfomationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page1compareinfomationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Page1compareinfomations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page1compareinfomationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Page1compareinfomations
     * const page1compareinfomation = await prisma.page1compareinfomation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Page1compareinfomationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Page1compareinfomationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Page1compareinfomation.
     * @param {Page1compareinfomationUpsertArgs} args - Arguments to update or create a Page1compareinfomation.
     * @example
     * // Update or create a Page1compareinfomation
     * const page1compareinfomation = await prisma.page1compareinfomation.upsert({
     *   create: {
     *     // ... data to create a Page1compareinfomation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page1compareinfomation we want to update
     *   }
     * })
    **/
    upsert<T extends Page1compareinfomationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Page1compareinfomationUpsertArgs<ExtArgs>>
    ): Prisma__Page1compareinfomationClient<$Result.GetResult<Prisma.$Page1compareinfomationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Page1compareinfomations that matches the filter.
     * @param {Page1compareinfomationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const page1compareinfomation = await prisma.page1compareinfomation.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Page1compareinfomationFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Page1compareinfomation.
     * @param {Page1compareinfomationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const page1compareinfomation = await prisma.page1compareinfomation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Page1compareinfomationAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Page1compareinfomations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page1compareinfomationCountArgs} args - Arguments to filter Page1compareinfomations to count.
     * @example
     * // Count the number of Page1compareinfomations
     * const count = await prisma.page1compareinfomation.count({
     *   where: {
     *     // ... the filter for the Page1compareinfomations we want to count
     *   }
     * })
    **/
    count<T extends Page1compareinfomationCountArgs>(
      args?: Subset<T, Page1compareinfomationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Page1compareinfomationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page1compareinfomation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page1compareinfomationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Page1compareinfomationAggregateArgs>(args: Subset<T, Page1compareinfomationAggregateArgs>): Prisma.PrismaPromise<GetPage1compareinfomationAggregateType<T>>

    /**
     * Group by Page1compareinfomation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page1compareinfomationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Page1compareinfomationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Page1compareinfomationGroupByArgs['orderBy'] }
        : { orderBy?: Page1compareinfomationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Page1compareinfomationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPage1compareinfomationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page1compareinfomation model
   */
  readonly fields: Page1compareinfomationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page1compareinfomation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Page1compareinfomationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Page1compareinfomation model
   */ 
  interface Page1compareinfomationFieldRefs {
    readonly id: FieldRef<"Page1compareinfomation", 'String'>
    readonly proj_id: FieldRef<"Page1compareinfomation", 'String'>
    readonly proj_abbr_name: FieldRef<"Page1compareinfomation", 'String'>
    readonly compareinfomation: FieldRef<"Page1compareinfomation", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Page1compareinfomation findUnique
   */
  export type Page1compareinfomationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page1compareinfomation
     */
    select?: Page1compareinfomationSelect<ExtArgs> | null
    /**
     * Filter, which Page1compareinfomation to fetch.
     */
    where: Page1compareinfomationWhereUniqueInput
  }


  /**
   * Page1compareinfomation findUniqueOrThrow
   */
  export type Page1compareinfomationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page1compareinfomation
     */
    select?: Page1compareinfomationSelect<ExtArgs> | null
    /**
     * Filter, which Page1compareinfomation to fetch.
     */
    where: Page1compareinfomationWhereUniqueInput
  }


  /**
   * Page1compareinfomation findFirst
   */
  export type Page1compareinfomationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page1compareinfomation
     */
    select?: Page1compareinfomationSelect<ExtArgs> | null
    /**
     * Filter, which Page1compareinfomation to fetch.
     */
    where?: Page1compareinfomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page1compareinfomations to fetch.
     */
    orderBy?: Page1compareinfomationOrderByWithRelationInput | Page1compareinfomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Page1compareinfomations.
     */
    cursor?: Page1compareinfomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page1compareinfomations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page1compareinfomations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Page1compareinfomations.
     */
    distinct?: Page1compareinfomationScalarFieldEnum | Page1compareinfomationScalarFieldEnum[]
  }


  /**
   * Page1compareinfomation findFirstOrThrow
   */
  export type Page1compareinfomationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page1compareinfomation
     */
    select?: Page1compareinfomationSelect<ExtArgs> | null
    /**
     * Filter, which Page1compareinfomation to fetch.
     */
    where?: Page1compareinfomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page1compareinfomations to fetch.
     */
    orderBy?: Page1compareinfomationOrderByWithRelationInput | Page1compareinfomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Page1compareinfomations.
     */
    cursor?: Page1compareinfomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page1compareinfomations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page1compareinfomations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Page1compareinfomations.
     */
    distinct?: Page1compareinfomationScalarFieldEnum | Page1compareinfomationScalarFieldEnum[]
  }


  /**
   * Page1compareinfomation findMany
   */
  export type Page1compareinfomationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page1compareinfomation
     */
    select?: Page1compareinfomationSelect<ExtArgs> | null
    /**
     * Filter, which Page1compareinfomations to fetch.
     */
    where?: Page1compareinfomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page1compareinfomations to fetch.
     */
    orderBy?: Page1compareinfomationOrderByWithRelationInput | Page1compareinfomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Page1compareinfomations.
     */
    cursor?: Page1compareinfomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page1compareinfomations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page1compareinfomations.
     */
    skip?: number
    distinct?: Page1compareinfomationScalarFieldEnum | Page1compareinfomationScalarFieldEnum[]
  }


  /**
   * Page1compareinfomation create
   */
  export type Page1compareinfomationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page1compareinfomation
     */
    select?: Page1compareinfomationSelect<ExtArgs> | null
    /**
     * The data needed to create a Page1compareinfomation.
     */
    data: XOR<Page1compareinfomationCreateInput, Page1compareinfomationUncheckedCreateInput>
  }


  /**
   * Page1compareinfomation createMany
   */
  export type Page1compareinfomationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Page1compareinfomations.
     */
    data: Page1compareinfomationCreateManyInput | Page1compareinfomationCreateManyInput[]
  }


  /**
   * Page1compareinfomation update
   */
  export type Page1compareinfomationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page1compareinfomation
     */
    select?: Page1compareinfomationSelect<ExtArgs> | null
    /**
     * The data needed to update a Page1compareinfomation.
     */
    data: XOR<Page1compareinfomationUpdateInput, Page1compareinfomationUncheckedUpdateInput>
    /**
     * Choose, which Page1compareinfomation to update.
     */
    where: Page1compareinfomationWhereUniqueInput
  }


  /**
   * Page1compareinfomation updateMany
   */
  export type Page1compareinfomationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Page1compareinfomations.
     */
    data: XOR<Page1compareinfomationUpdateManyMutationInput, Page1compareinfomationUncheckedUpdateManyInput>
    /**
     * Filter which Page1compareinfomations to update
     */
    where?: Page1compareinfomationWhereInput
  }


  /**
   * Page1compareinfomation upsert
   */
  export type Page1compareinfomationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page1compareinfomation
     */
    select?: Page1compareinfomationSelect<ExtArgs> | null
    /**
     * The filter to search for the Page1compareinfomation to update in case it exists.
     */
    where: Page1compareinfomationWhereUniqueInput
    /**
     * In case the Page1compareinfomation found by the `where` argument doesn't exist, create a new Page1compareinfomation with this data.
     */
    create: XOR<Page1compareinfomationCreateInput, Page1compareinfomationUncheckedCreateInput>
    /**
     * In case the Page1compareinfomation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Page1compareinfomationUpdateInput, Page1compareinfomationUncheckedUpdateInput>
  }


  /**
   * Page1compareinfomation delete
   */
  export type Page1compareinfomationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page1compareinfomation
     */
    select?: Page1compareinfomationSelect<ExtArgs> | null
    /**
     * Filter which Page1compareinfomation to delete.
     */
    where: Page1compareinfomationWhereUniqueInput
  }


  /**
   * Page1compareinfomation deleteMany
   */
  export type Page1compareinfomationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page1compareinfomations to delete
     */
    where?: Page1compareinfomationWhereInput
  }


  /**
   * Page1compareinfomation findRaw
   */
  export type Page1compareinfomationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Page1compareinfomation aggregateRaw
   */
  export type Page1compareinfomationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Page1compareinfomation without action
   */
  export type Page1compareinfomationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page1compareinfomation
     */
    select?: Page1compareinfomationSelect<ExtArgs> | null
  }



  /**
   * Model Page2Operating_results_and_dividends
   */

  export type AggregatePage2Operating_results_and_dividends = {
    _count: Page2Operating_results_and_dividendsCountAggregateOutputType | null
    _min: Page2Operating_results_and_dividendsMinAggregateOutputType | null
    _max: Page2Operating_results_and_dividendsMaxAggregateOutputType | null
  }

  export type Page2Operating_results_and_dividendsMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
  }

  export type Page2Operating_results_and_dividendsMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
  }

  export type Page2Operating_results_and_dividendsCountAggregateOutputType = {
    id: number
    proj_id: number
    proj_abbr_name: number
    operating_results: number
    _all: number
  }


  export type Page2Operating_results_and_dividendsMinAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
  }

  export type Page2Operating_results_and_dividendsMaxAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
  }

  export type Page2Operating_results_and_dividendsCountAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    operating_results?: true
    _all?: true
  }

  export type Page2Operating_results_and_dividendsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page2Operating_results_and_dividends to aggregate.
     */
    where?: Page2Operating_results_and_dividendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page2Operating_results_and_dividends to fetch.
     */
    orderBy?: Page2Operating_results_and_dividendsOrderByWithRelationInput | Page2Operating_results_and_dividendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Page2Operating_results_and_dividendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page2Operating_results_and_dividends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page2Operating_results_and_dividends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Page2Operating_results_and_dividends
    **/
    _count?: true | Page2Operating_results_and_dividendsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Page2Operating_results_and_dividendsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Page2Operating_results_and_dividendsMaxAggregateInputType
  }

  export type GetPage2Operating_results_and_dividendsAggregateType<T extends Page2Operating_results_and_dividendsAggregateArgs> = {
        [P in keyof T & keyof AggregatePage2Operating_results_and_dividends]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage2Operating_results_and_dividends[P]>
      : GetScalarType<T[P], AggregatePage2Operating_results_and_dividends[P]>
  }




  export type Page2Operating_results_and_dividendsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Page2Operating_results_and_dividendsWhereInput
    orderBy?: Page2Operating_results_and_dividendsOrderByWithAggregationInput | Page2Operating_results_and_dividendsOrderByWithAggregationInput[]
    by: Page2Operating_results_and_dividendsScalarFieldEnum[] | Page2Operating_results_and_dividendsScalarFieldEnum
    having?: Page2Operating_results_and_dividendsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Page2Operating_results_and_dividendsCountAggregateInputType | true
    _min?: Page2Operating_results_and_dividendsMinAggregateInputType
    _max?: Page2Operating_results_and_dividendsMaxAggregateInputType
  }

  export type Page2Operating_results_and_dividendsGroupByOutputType = {
    id: string
    proj_id: string
    proj_abbr_name: string
    operating_results: JsonValue
    _count: Page2Operating_results_and_dividendsCountAggregateOutputType | null
    _min: Page2Operating_results_and_dividendsMinAggregateOutputType | null
    _max: Page2Operating_results_and_dividendsMaxAggregateOutputType | null
  }

  type GetPage2Operating_results_and_dividendsGroupByPayload<T extends Page2Operating_results_and_dividendsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Page2Operating_results_and_dividendsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Page2Operating_results_and_dividendsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Page2Operating_results_and_dividendsGroupByOutputType[P]>
            : GetScalarType<T[P], Page2Operating_results_and_dividendsGroupByOutputType[P]>
        }
      >
    >


  export type Page2Operating_results_and_dividendsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    operating_results?: boolean
  }, ExtArgs["result"]["page2Operating_results_and_dividends"]>

  export type Page2Operating_results_and_dividendsSelectScalar = {
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    operating_results?: boolean
  }


  export type $Page2Operating_results_and_dividendsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page2Operating_results_and_dividends"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      proj_abbr_name: string
      operating_results: Prisma.JsonValue
    }, ExtArgs["result"]["page2Operating_results_and_dividends"]>
    composites: {}
  }


  type Page2Operating_results_and_dividendsGetPayload<S extends boolean | null | undefined | Page2Operating_results_and_dividendsDefaultArgs> = $Result.GetResult<Prisma.$Page2Operating_results_and_dividendsPayload, S>

  type Page2Operating_results_and_dividendsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Page2Operating_results_and_dividendsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Page2Operating_results_and_dividendsCountAggregateInputType | true
    }

  export interface Page2Operating_results_and_dividendsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page2Operating_results_and_dividends'], meta: { name: 'Page2Operating_results_and_dividends' } }
    /**
     * Find zero or one Page2Operating_results_and_dividends that matches the filter.
     * @param {Page2Operating_results_and_dividendsFindUniqueArgs} args - Arguments to find a Page2Operating_results_and_dividends
     * @example
     * // Get one Page2Operating_results_and_dividends
     * const page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Page2Operating_results_and_dividendsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Page2Operating_results_and_dividendsFindUniqueArgs<ExtArgs>>
    ): Prisma__Page2Operating_results_and_dividendsClient<$Result.GetResult<Prisma.$Page2Operating_results_and_dividendsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Page2Operating_results_and_dividends that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Page2Operating_results_and_dividendsFindUniqueOrThrowArgs} args - Arguments to find a Page2Operating_results_and_dividends
     * @example
     * // Get one Page2Operating_results_and_dividends
     * const page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Page2Operating_results_and_dividendsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Page2Operating_results_and_dividendsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Page2Operating_results_and_dividendsClient<$Result.GetResult<Prisma.$Page2Operating_results_and_dividendsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Page2Operating_results_and_dividends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page2Operating_results_and_dividendsFindFirstArgs} args - Arguments to find a Page2Operating_results_and_dividends
     * @example
     * // Get one Page2Operating_results_and_dividends
     * const page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Page2Operating_results_and_dividendsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Page2Operating_results_and_dividendsFindFirstArgs<ExtArgs>>
    ): Prisma__Page2Operating_results_and_dividendsClient<$Result.GetResult<Prisma.$Page2Operating_results_and_dividendsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Page2Operating_results_and_dividends that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page2Operating_results_and_dividendsFindFirstOrThrowArgs} args - Arguments to find a Page2Operating_results_and_dividends
     * @example
     * // Get one Page2Operating_results_and_dividends
     * const page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Page2Operating_results_and_dividendsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Page2Operating_results_and_dividendsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Page2Operating_results_and_dividendsClient<$Result.GetResult<Prisma.$Page2Operating_results_and_dividendsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Page2Operating_results_and_dividends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page2Operating_results_and_dividendsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Page2Operating_results_and_dividends
     * const page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.findMany()
     * 
     * // Get first 10 Page2Operating_results_and_dividends
     * const page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const page2Operating_results_and_dividendsWithIdOnly = await prisma.page2Operating_results_and_dividends.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Page2Operating_results_and_dividendsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page2Operating_results_and_dividendsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Page2Operating_results_and_dividendsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Page2Operating_results_and_dividends.
     * @param {Page2Operating_results_and_dividendsCreateArgs} args - Arguments to create a Page2Operating_results_and_dividends.
     * @example
     * // Create one Page2Operating_results_and_dividends
     * const Page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.create({
     *   data: {
     *     // ... data to create a Page2Operating_results_and_dividends
     *   }
     * })
     * 
    **/
    create<T extends Page2Operating_results_and_dividendsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Page2Operating_results_and_dividendsCreateArgs<ExtArgs>>
    ): Prisma__Page2Operating_results_and_dividendsClient<$Result.GetResult<Prisma.$Page2Operating_results_and_dividendsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Page2Operating_results_and_dividends.
     *     @param {Page2Operating_results_and_dividendsCreateManyArgs} args - Arguments to create many Page2Operating_results_and_dividends.
     *     @example
     *     // Create many Page2Operating_results_and_dividends
     *     const page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Page2Operating_results_and_dividendsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page2Operating_results_and_dividendsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Page2Operating_results_and_dividends.
     * @param {Page2Operating_results_and_dividendsDeleteArgs} args - Arguments to delete one Page2Operating_results_and_dividends.
     * @example
     * // Delete one Page2Operating_results_and_dividends
     * const Page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.delete({
     *   where: {
     *     // ... filter to delete one Page2Operating_results_and_dividends
     *   }
     * })
     * 
    **/
    delete<T extends Page2Operating_results_and_dividendsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Page2Operating_results_and_dividendsDeleteArgs<ExtArgs>>
    ): Prisma__Page2Operating_results_and_dividendsClient<$Result.GetResult<Prisma.$Page2Operating_results_and_dividendsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Page2Operating_results_and_dividends.
     * @param {Page2Operating_results_and_dividendsUpdateArgs} args - Arguments to update one Page2Operating_results_and_dividends.
     * @example
     * // Update one Page2Operating_results_and_dividends
     * const page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Page2Operating_results_and_dividendsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Page2Operating_results_and_dividendsUpdateArgs<ExtArgs>>
    ): Prisma__Page2Operating_results_and_dividendsClient<$Result.GetResult<Prisma.$Page2Operating_results_and_dividendsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Page2Operating_results_and_dividends.
     * @param {Page2Operating_results_and_dividendsDeleteManyArgs} args - Arguments to filter Page2Operating_results_and_dividends to delete.
     * @example
     * // Delete a few Page2Operating_results_and_dividends
     * const { count } = await prisma.page2Operating_results_and_dividends.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Page2Operating_results_and_dividendsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page2Operating_results_and_dividendsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Page2Operating_results_and_dividends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page2Operating_results_and_dividendsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Page2Operating_results_and_dividends
     * const page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Page2Operating_results_and_dividendsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Page2Operating_results_and_dividendsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Page2Operating_results_and_dividends.
     * @param {Page2Operating_results_and_dividendsUpsertArgs} args - Arguments to update or create a Page2Operating_results_and_dividends.
     * @example
     * // Update or create a Page2Operating_results_and_dividends
     * const page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.upsert({
     *   create: {
     *     // ... data to create a Page2Operating_results_and_dividends
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page2Operating_results_and_dividends we want to update
     *   }
     * })
    **/
    upsert<T extends Page2Operating_results_and_dividendsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Page2Operating_results_and_dividendsUpsertArgs<ExtArgs>>
    ): Prisma__Page2Operating_results_and_dividendsClient<$Result.GetResult<Prisma.$Page2Operating_results_and_dividendsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Page2Operating_results_and_dividends that matches the filter.
     * @param {Page2Operating_results_and_dividendsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Page2Operating_results_and_dividendsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Page2Operating_results_and_dividends.
     * @param {Page2Operating_results_and_dividendsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const page2Operating_results_and_dividends = await prisma.page2Operating_results_and_dividends.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Page2Operating_results_and_dividendsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Page2Operating_results_and_dividends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page2Operating_results_and_dividendsCountArgs} args - Arguments to filter Page2Operating_results_and_dividends to count.
     * @example
     * // Count the number of Page2Operating_results_and_dividends
     * const count = await prisma.page2Operating_results_and_dividends.count({
     *   where: {
     *     // ... the filter for the Page2Operating_results_and_dividends we want to count
     *   }
     * })
    **/
    count<T extends Page2Operating_results_and_dividendsCountArgs>(
      args?: Subset<T, Page2Operating_results_and_dividendsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Page2Operating_results_and_dividendsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page2Operating_results_and_dividends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page2Operating_results_and_dividendsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Page2Operating_results_and_dividendsAggregateArgs>(args: Subset<T, Page2Operating_results_and_dividendsAggregateArgs>): Prisma.PrismaPromise<GetPage2Operating_results_and_dividendsAggregateType<T>>

    /**
     * Group by Page2Operating_results_and_dividends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page2Operating_results_and_dividendsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Page2Operating_results_and_dividendsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Page2Operating_results_and_dividendsGroupByArgs['orderBy'] }
        : { orderBy?: Page2Operating_results_and_dividendsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Page2Operating_results_and_dividendsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPage2Operating_results_and_dividendsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page2Operating_results_and_dividends model
   */
  readonly fields: Page2Operating_results_and_dividendsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page2Operating_results_and_dividends.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Page2Operating_results_and_dividendsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Page2Operating_results_and_dividends model
   */ 
  interface Page2Operating_results_and_dividendsFieldRefs {
    readonly id: FieldRef<"Page2Operating_results_and_dividends", 'String'>
    readonly proj_id: FieldRef<"Page2Operating_results_and_dividends", 'String'>
    readonly proj_abbr_name: FieldRef<"Page2Operating_results_and_dividends", 'String'>
    readonly operating_results: FieldRef<"Page2Operating_results_and_dividends", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Page2Operating_results_and_dividends findUnique
   */
  export type Page2Operating_results_and_dividendsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page2Operating_results_and_dividends
     */
    select?: Page2Operating_results_and_dividendsSelect<ExtArgs> | null
    /**
     * Filter, which Page2Operating_results_and_dividends to fetch.
     */
    where: Page2Operating_results_and_dividendsWhereUniqueInput
  }


  /**
   * Page2Operating_results_and_dividends findUniqueOrThrow
   */
  export type Page2Operating_results_and_dividendsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page2Operating_results_and_dividends
     */
    select?: Page2Operating_results_and_dividendsSelect<ExtArgs> | null
    /**
     * Filter, which Page2Operating_results_and_dividends to fetch.
     */
    where: Page2Operating_results_and_dividendsWhereUniqueInput
  }


  /**
   * Page2Operating_results_and_dividends findFirst
   */
  export type Page2Operating_results_and_dividendsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page2Operating_results_and_dividends
     */
    select?: Page2Operating_results_and_dividendsSelect<ExtArgs> | null
    /**
     * Filter, which Page2Operating_results_and_dividends to fetch.
     */
    where?: Page2Operating_results_and_dividendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page2Operating_results_and_dividends to fetch.
     */
    orderBy?: Page2Operating_results_and_dividendsOrderByWithRelationInput | Page2Operating_results_and_dividendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Page2Operating_results_and_dividends.
     */
    cursor?: Page2Operating_results_and_dividendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page2Operating_results_and_dividends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page2Operating_results_and_dividends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Page2Operating_results_and_dividends.
     */
    distinct?: Page2Operating_results_and_dividendsScalarFieldEnum | Page2Operating_results_and_dividendsScalarFieldEnum[]
  }


  /**
   * Page2Operating_results_and_dividends findFirstOrThrow
   */
  export type Page2Operating_results_and_dividendsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page2Operating_results_and_dividends
     */
    select?: Page2Operating_results_and_dividendsSelect<ExtArgs> | null
    /**
     * Filter, which Page2Operating_results_and_dividends to fetch.
     */
    where?: Page2Operating_results_and_dividendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page2Operating_results_and_dividends to fetch.
     */
    orderBy?: Page2Operating_results_and_dividendsOrderByWithRelationInput | Page2Operating_results_and_dividendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Page2Operating_results_and_dividends.
     */
    cursor?: Page2Operating_results_and_dividendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page2Operating_results_and_dividends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page2Operating_results_and_dividends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Page2Operating_results_and_dividends.
     */
    distinct?: Page2Operating_results_and_dividendsScalarFieldEnum | Page2Operating_results_and_dividendsScalarFieldEnum[]
  }


  /**
   * Page2Operating_results_and_dividends findMany
   */
  export type Page2Operating_results_and_dividendsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page2Operating_results_and_dividends
     */
    select?: Page2Operating_results_and_dividendsSelect<ExtArgs> | null
    /**
     * Filter, which Page2Operating_results_and_dividends to fetch.
     */
    where?: Page2Operating_results_and_dividendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page2Operating_results_and_dividends to fetch.
     */
    orderBy?: Page2Operating_results_and_dividendsOrderByWithRelationInput | Page2Operating_results_and_dividendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Page2Operating_results_and_dividends.
     */
    cursor?: Page2Operating_results_and_dividendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page2Operating_results_and_dividends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page2Operating_results_and_dividends.
     */
    skip?: number
    distinct?: Page2Operating_results_and_dividendsScalarFieldEnum | Page2Operating_results_and_dividendsScalarFieldEnum[]
  }


  /**
   * Page2Operating_results_and_dividends create
   */
  export type Page2Operating_results_and_dividendsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page2Operating_results_and_dividends
     */
    select?: Page2Operating_results_and_dividendsSelect<ExtArgs> | null
    /**
     * The data needed to create a Page2Operating_results_and_dividends.
     */
    data: XOR<Page2Operating_results_and_dividendsCreateInput, Page2Operating_results_and_dividendsUncheckedCreateInput>
  }


  /**
   * Page2Operating_results_and_dividends createMany
   */
  export type Page2Operating_results_and_dividendsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Page2Operating_results_and_dividends.
     */
    data: Page2Operating_results_and_dividendsCreateManyInput | Page2Operating_results_and_dividendsCreateManyInput[]
  }


  /**
   * Page2Operating_results_and_dividends update
   */
  export type Page2Operating_results_and_dividendsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page2Operating_results_and_dividends
     */
    select?: Page2Operating_results_and_dividendsSelect<ExtArgs> | null
    /**
     * The data needed to update a Page2Operating_results_and_dividends.
     */
    data: XOR<Page2Operating_results_and_dividendsUpdateInput, Page2Operating_results_and_dividendsUncheckedUpdateInput>
    /**
     * Choose, which Page2Operating_results_and_dividends to update.
     */
    where: Page2Operating_results_and_dividendsWhereUniqueInput
  }


  /**
   * Page2Operating_results_and_dividends updateMany
   */
  export type Page2Operating_results_and_dividendsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Page2Operating_results_and_dividends.
     */
    data: XOR<Page2Operating_results_and_dividendsUpdateManyMutationInput, Page2Operating_results_and_dividendsUncheckedUpdateManyInput>
    /**
     * Filter which Page2Operating_results_and_dividends to update
     */
    where?: Page2Operating_results_and_dividendsWhereInput
  }


  /**
   * Page2Operating_results_and_dividends upsert
   */
  export type Page2Operating_results_and_dividendsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page2Operating_results_and_dividends
     */
    select?: Page2Operating_results_and_dividendsSelect<ExtArgs> | null
    /**
     * The filter to search for the Page2Operating_results_and_dividends to update in case it exists.
     */
    where: Page2Operating_results_and_dividendsWhereUniqueInput
    /**
     * In case the Page2Operating_results_and_dividends found by the `where` argument doesn't exist, create a new Page2Operating_results_and_dividends with this data.
     */
    create: XOR<Page2Operating_results_and_dividendsCreateInput, Page2Operating_results_and_dividendsUncheckedCreateInput>
    /**
     * In case the Page2Operating_results_and_dividends was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Page2Operating_results_and_dividendsUpdateInput, Page2Operating_results_and_dividendsUncheckedUpdateInput>
  }


  /**
   * Page2Operating_results_and_dividends delete
   */
  export type Page2Operating_results_and_dividendsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page2Operating_results_and_dividends
     */
    select?: Page2Operating_results_and_dividendsSelect<ExtArgs> | null
    /**
     * Filter which Page2Operating_results_and_dividends to delete.
     */
    where: Page2Operating_results_and_dividendsWhereUniqueInput
  }


  /**
   * Page2Operating_results_and_dividends deleteMany
   */
  export type Page2Operating_results_and_dividendsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page2Operating_results_and_dividends to delete
     */
    where?: Page2Operating_results_and_dividendsWhereInput
  }


  /**
   * Page2Operating_results_and_dividends findRaw
   */
  export type Page2Operating_results_and_dividendsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Page2Operating_results_and_dividends aggregateRaw
   */
  export type Page2Operating_results_and_dividendsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Page2Operating_results_and_dividends without action
   */
  export type Page2Operating_results_and_dividendsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page2Operating_results_and_dividends
     */
    select?: Page2Operating_results_and_dividendsSelect<ExtArgs> | null
  }



  /**
   * Model Page3topfiveCompareport
   */

  export type AggregatePage3topfiveCompareport = {
    _count: Page3topfiveCompareportCountAggregateOutputType | null
    _min: Page3topfiveCompareportMinAggregateOutputType | null
    _max: Page3topfiveCompareportMaxAggregateOutputType | null
  }

  export type Page3topfiveCompareportMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
  }

  export type Page3topfiveCompareportMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
  }

  export type Page3topfiveCompareportCountAggregateOutputType = {
    id: number
    proj_id: number
    proj_abbr_name: number
    top_five_holding: number
    _all: number
  }


  export type Page3topfiveCompareportMinAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
  }

  export type Page3topfiveCompareportMaxAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
  }

  export type Page3topfiveCompareportCountAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    top_five_holding?: true
    _all?: true
  }

  export type Page3topfiveCompareportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page3topfiveCompareport to aggregate.
     */
    where?: Page3topfiveCompareportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page3topfiveCompareports to fetch.
     */
    orderBy?: Page3topfiveCompareportOrderByWithRelationInput | Page3topfiveCompareportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Page3topfiveCompareportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page3topfiveCompareports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page3topfiveCompareports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Page3topfiveCompareports
    **/
    _count?: true | Page3topfiveCompareportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Page3topfiveCompareportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Page3topfiveCompareportMaxAggregateInputType
  }

  export type GetPage3topfiveCompareportAggregateType<T extends Page3topfiveCompareportAggregateArgs> = {
        [P in keyof T & keyof AggregatePage3topfiveCompareport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage3topfiveCompareport[P]>
      : GetScalarType<T[P], AggregatePage3topfiveCompareport[P]>
  }




  export type Page3topfiveCompareportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Page3topfiveCompareportWhereInput
    orderBy?: Page3topfiveCompareportOrderByWithAggregationInput | Page3topfiveCompareportOrderByWithAggregationInput[]
    by: Page3topfiveCompareportScalarFieldEnum[] | Page3topfiveCompareportScalarFieldEnum
    having?: Page3topfiveCompareportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Page3topfiveCompareportCountAggregateInputType | true
    _min?: Page3topfiveCompareportMinAggregateInputType
    _max?: Page3topfiveCompareportMaxAggregateInputType
  }

  export type Page3topfiveCompareportGroupByOutputType = {
    id: string
    proj_id: string
    proj_abbr_name: string
    top_five_holding: JsonValue
    _count: Page3topfiveCompareportCountAggregateOutputType | null
    _min: Page3topfiveCompareportMinAggregateOutputType | null
    _max: Page3topfiveCompareportMaxAggregateOutputType | null
  }

  type GetPage3topfiveCompareportGroupByPayload<T extends Page3topfiveCompareportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Page3topfiveCompareportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Page3topfiveCompareportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Page3topfiveCompareportGroupByOutputType[P]>
            : GetScalarType<T[P], Page3topfiveCompareportGroupByOutputType[P]>
        }
      >
    >


  export type Page3topfiveCompareportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    top_five_holding?: boolean
  }, ExtArgs["result"]["page3topfiveCompareport"]>

  export type Page3topfiveCompareportSelectScalar = {
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    top_five_holding?: boolean
  }


  export type $Page3topfiveCompareportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page3topfiveCompareport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      proj_abbr_name: string
      top_five_holding: Prisma.JsonValue
    }, ExtArgs["result"]["page3topfiveCompareport"]>
    composites: {}
  }


  type Page3topfiveCompareportGetPayload<S extends boolean | null | undefined | Page3topfiveCompareportDefaultArgs> = $Result.GetResult<Prisma.$Page3topfiveCompareportPayload, S>

  type Page3topfiveCompareportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Page3topfiveCompareportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Page3topfiveCompareportCountAggregateInputType | true
    }

  export interface Page3topfiveCompareportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page3topfiveCompareport'], meta: { name: 'Page3topfiveCompareport' } }
    /**
     * Find zero or one Page3topfiveCompareport that matches the filter.
     * @param {Page3topfiveCompareportFindUniqueArgs} args - Arguments to find a Page3topfiveCompareport
     * @example
     * // Get one Page3topfiveCompareport
     * const page3topfiveCompareport = await prisma.page3topfiveCompareport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Page3topfiveCompareportFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Page3topfiveCompareportFindUniqueArgs<ExtArgs>>
    ): Prisma__Page3topfiveCompareportClient<$Result.GetResult<Prisma.$Page3topfiveCompareportPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Page3topfiveCompareport that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Page3topfiveCompareportFindUniqueOrThrowArgs} args - Arguments to find a Page3topfiveCompareport
     * @example
     * // Get one Page3topfiveCompareport
     * const page3topfiveCompareport = await prisma.page3topfiveCompareport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Page3topfiveCompareportFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3topfiveCompareportFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Page3topfiveCompareportClient<$Result.GetResult<Prisma.$Page3topfiveCompareportPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Page3topfiveCompareport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3topfiveCompareportFindFirstArgs} args - Arguments to find a Page3topfiveCompareport
     * @example
     * // Get one Page3topfiveCompareport
     * const page3topfiveCompareport = await prisma.page3topfiveCompareport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Page3topfiveCompareportFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3topfiveCompareportFindFirstArgs<ExtArgs>>
    ): Prisma__Page3topfiveCompareportClient<$Result.GetResult<Prisma.$Page3topfiveCompareportPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Page3topfiveCompareport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3topfiveCompareportFindFirstOrThrowArgs} args - Arguments to find a Page3topfiveCompareport
     * @example
     * // Get one Page3topfiveCompareport
     * const page3topfiveCompareport = await prisma.page3topfiveCompareport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Page3topfiveCompareportFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3topfiveCompareportFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Page3topfiveCompareportClient<$Result.GetResult<Prisma.$Page3topfiveCompareportPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Page3topfiveCompareports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3topfiveCompareportFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Page3topfiveCompareports
     * const page3topfiveCompareports = await prisma.page3topfiveCompareport.findMany()
     * 
     * // Get first 10 Page3topfiveCompareports
     * const page3topfiveCompareports = await prisma.page3topfiveCompareport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const page3topfiveCompareportWithIdOnly = await prisma.page3topfiveCompareport.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Page3topfiveCompareportFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3topfiveCompareportFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Page3topfiveCompareportPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Page3topfiveCompareport.
     * @param {Page3topfiveCompareportCreateArgs} args - Arguments to create a Page3topfiveCompareport.
     * @example
     * // Create one Page3topfiveCompareport
     * const Page3topfiveCompareport = await prisma.page3topfiveCompareport.create({
     *   data: {
     *     // ... data to create a Page3topfiveCompareport
     *   }
     * })
     * 
    **/
    create<T extends Page3topfiveCompareportCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Page3topfiveCompareportCreateArgs<ExtArgs>>
    ): Prisma__Page3topfiveCompareportClient<$Result.GetResult<Prisma.$Page3topfiveCompareportPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Page3topfiveCompareports.
     *     @param {Page3topfiveCompareportCreateManyArgs} args - Arguments to create many Page3topfiveCompareports.
     *     @example
     *     // Create many Page3topfiveCompareports
     *     const page3topfiveCompareport = await prisma.page3topfiveCompareport.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Page3topfiveCompareportCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3topfiveCompareportCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Page3topfiveCompareport.
     * @param {Page3topfiveCompareportDeleteArgs} args - Arguments to delete one Page3topfiveCompareport.
     * @example
     * // Delete one Page3topfiveCompareport
     * const Page3topfiveCompareport = await prisma.page3topfiveCompareport.delete({
     *   where: {
     *     // ... filter to delete one Page3topfiveCompareport
     *   }
     * })
     * 
    **/
    delete<T extends Page3topfiveCompareportDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Page3topfiveCompareportDeleteArgs<ExtArgs>>
    ): Prisma__Page3topfiveCompareportClient<$Result.GetResult<Prisma.$Page3topfiveCompareportPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Page3topfiveCompareport.
     * @param {Page3topfiveCompareportUpdateArgs} args - Arguments to update one Page3topfiveCompareport.
     * @example
     * // Update one Page3topfiveCompareport
     * const page3topfiveCompareport = await prisma.page3topfiveCompareport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Page3topfiveCompareportUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Page3topfiveCompareportUpdateArgs<ExtArgs>>
    ): Prisma__Page3topfiveCompareportClient<$Result.GetResult<Prisma.$Page3topfiveCompareportPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Page3topfiveCompareports.
     * @param {Page3topfiveCompareportDeleteManyArgs} args - Arguments to filter Page3topfiveCompareports to delete.
     * @example
     * // Delete a few Page3topfiveCompareports
     * const { count } = await prisma.page3topfiveCompareport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Page3topfiveCompareportDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3topfiveCompareportDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Page3topfiveCompareports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3topfiveCompareportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Page3topfiveCompareports
     * const page3topfiveCompareport = await prisma.page3topfiveCompareport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Page3topfiveCompareportUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Page3topfiveCompareportUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Page3topfiveCompareport.
     * @param {Page3topfiveCompareportUpsertArgs} args - Arguments to update or create a Page3topfiveCompareport.
     * @example
     * // Update or create a Page3topfiveCompareport
     * const page3topfiveCompareport = await prisma.page3topfiveCompareport.upsert({
     *   create: {
     *     // ... data to create a Page3topfiveCompareport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page3topfiveCompareport we want to update
     *   }
     * })
    **/
    upsert<T extends Page3topfiveCompareportUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Page3topfiveCompareportUpsertArgs<ExtArgs>>
    ): Prisma__Page3topfiveCompareportClient<$Result.GetResult<Prisma.$Page3topfiveCompareportPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Page3topfiveCompareports that matches the filter.
     * @param {Page3topfiveCompareportFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const page3topfiveCompareport = await prisma.page3topfiveCompareport.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Page3topfiveCompareportFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Page3topfiveCompareport.
     * @param {Page3topfiveCompareportAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const page3topfiveCompareport = await prisma.page3topfiveCompareport.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Page3topfiveCompareportAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Page3topfiveCompareports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3topfiveCompareportCountArgs} args - Arguments to filter Page3topfiveCompareports to count.
     * @example
     * // Count the number of Page3topfiveCompareports
     * const count = await prisma.page3topfiveCompareport.count({
     *   where: {
     *     // ... the filter for the Page3topfiveCompareports we want to count
     *   }
     * })
    **/
    count<T extends Page3topfiveCompareportCountArgs>(
      args?: Subset<T, Page3topfiveCompareportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Page3topfiveCompareportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page3topfiveCompareport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3topfiveCompareportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Page3topfiveCompareportAggregateArgs>(args: Subset<T, Page3topfiveCompareportAggregateArgs>): Prisma.PrismaPromise<GetPage3topfiveCompareportAggregateType<T>>

    /**
     * Group by Page3topfiveCompareport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3topfiveCompareportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Page3topfiveCompareportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Page3topfiveCompareportGroupByArgs['orderBy'] }
        : { orderBy?: Page3topfiveCompareportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Page3topfiveCompareportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPage3topfiveCompareportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page3topfiveCompareport model
   */
  readonly fields: Page3topfiveCompareportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page3topfiveCompareport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Page3topfiveCompareportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Page3topfiveCompareport model
   */ 
  interface Page3topfiveCompareportFieldRefs {
    readonly id: FieldRef<"Page3topfiveCompareport", 'String'>
    readonly proj_id: FieldRef<"Page3topfiveCompareport", 'String'>
    readonly proj_abbr_name: FieldRef<"Page3topfiveCompareport", 'String'>
    readonly top_five_holding: FieldRef<"Page3topfiveCompareport", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Page3topfiveCompareport findUnique
   */
  export type Page3topfiveCompareportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3topfiveCompareport
     */
    select?: Page3topfiveCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3topfiveCompareport to fetch.
     */
    where: Page3topfiveCompareportWhereUniqueInput
  }


  /**
   * Page3topfiveCompareport findUniqueOrThrow
   */
  export type Page3topfiveCompareportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3topfiveCompareport
     */
    select?: Page3topfiveCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3topfiveCompareport to fetch.
     */
    where: Page3topfiveCompareportWhereUniqueInput
  }


  /**
   * Page3topfiveCompareport findFirst
   */
  export type Page3topfiveCompareportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3topfiveCompareport
     */
    select?: Page3topfiveCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3topfiveCompareport to fetch.
     */
    where?: Page3topfiveCompareportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page3topfiveCompareports to fetch.
     */
    orderBy?: Page3topfiveCompareportOrderByWithRelationInput | Page3topfiveCompareportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Page3topfiveCompareports.
     */
    cursor?: Page3topfiveCompareportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page3topfiveCompareports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page3topfiveCompareports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Page3topfiveCompareports.
     */
    distinct?: Page3topfiveCompareportScalarFieldEnum | Page3topfiveCompareportScalarFieldEnum[]
  }


  /**
   * Page3topfiveCompareport findFirstOrThrow
   */
  export type Page3topfiveCompareportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3topfiveCompareport
     */
    select?: Page3topfiveCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3topfiveCompareport to fetch.
     */
    where?: Page3topfiveCompareportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page3topfiveCompareports to fetch.
     */
    orderBy?: Page3topfiveCompareportOrderByWithRelationInput | Page3topfiveCompareportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Page3topfiveCompareports.
     */
    cursor?: Page3topfiveCompareportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page3topfiveCompareports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page3topfiveCompareports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Page3topfiveCompareports.
     */
    distinct?: Page3topfiveCompareportScalarFieldEnum | Page3topfiveCompareportScalarFieldEnum[]
  }


  /**
   * Page3topfiveCompareport findMany
   */
  export type Page3topfiveCompareportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3topfiveCompareport
     */
    select?: Page3topfiveCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3topfiveCompareports to fetch.
     */
    where?: Page3topfiveCompareportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page3topfiveCompareports to fetch.
     */
    orderBy?: Page3topfiveCompareportOrderByWithRelationInput | Page3topfiveCompareportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Page3topfiveCompareports.
     */
    cursor?: Page3topfiveCompareportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page3topfiveCompareports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page3topfiveCompareports.
     */
    skip?: number
    distinct?: Page3topfiveCompareportScalarFieldEnum | Page3topfiveCompareportScalarFieldEnum[]
  }


  /**
   * Page3topfiveCompareport create
   */
  export type Page3topfiveCompareportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3topfiveCompareport
     */
    select?: Page3topfiveCompareportSelect<ExtArgs> | null
    /**
     * The data needed to create a Page3topfiveCompareport.
     */
    data: XOR<Page3topfiveCompareportCreateInput, Page3topfiveCompareportUncheckedCreateInput>
  }


  /**
   * Page3topfiveCompareport createMany
   */
  export type Page3topfiveCompareportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Page3topfiveCompareports.
     */
    data: Page3topfiveCompareportCreateManyInput | Page3topfiveCompareportCreateManyInput[]
  }


  /**
   * Page3topfiveCompareport update
   */
  export type Page3topfiveCompareportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3topfiveCompareport
     */
    select?: Page3topfiveCompareportSelect<ExtArgs> | null
    /**
     * The data needed to update a Page3topfiveCompareport.
     */
    data: XOR<Page3topfiveCompareportUpdateInput, Page3topfiveCompareportUncheckedUpdateInput>
    /**
     * Choose, which Page3topfiveCompareport to update.
     */
    where: Page3topfiveCompareportWhereUniqueInput
  }


  /**
   * Page3topfiveCompareport updateMany
   */
  export type Page3topfiveCompareportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Page3topfiveCompareports.
     */
    data: XOR<Page3topfiveCompareportUpdateManyMutationInput, Page3topfiveCompareportUncheckedUpdateManyInput>
    /**
     * Filter which Page3topfiveCompareports to update
     */
    where?: Page3topfiveCompareportWhereInput
  }


  /**
   * Page3topfiveCompareport upsert
   */
  export type Page3topfiveCompareportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3topfiveCompareport
     */
    select?: Page3topfiveCompareportSelect<ExtArgs> | null
    /**
     * The filter to search for the Page3topfiveCompareport to update in case it exists.
     */
    where: Page3topfiveCompareportWhereUniqueInput
    /**
     * In case the Page3topfiveCompareport found by the `where` argument doesn't exist, create a new Page3topfiveCompareport with this data.
     */
    create: XOR<Page3topfiveCompareportCreateInput, Page3topfiveCompareportUncheckedCreateInput>
    /**
     * In case the Page3topfiveCompareport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Page3topfiveCompareportUpdateInput, Page3topfiveCompareportUncheckedUpdateInput>
  }


  /**
   * Page3topfiveCompareport delete
   */
  export type Page3topfiveCompareportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3topfiveCompareport
     */
    select?: Page3topfiveCompareportSelect<ExtArgs> | null
    /**
     * Filter which Page3topfiveCompareport to delete.
     */
    where: Page3topfiveCompareportWhereUniqueInput
  }


  /**
   * Page3topfiveCompareport deleteMany
   */
  export type Page3topfiveCompareportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page3topfiveCompareports to delete
     */
    where?: Page3topfiveCompareportWhereInput
  }


  /**
   * Page3topfiveCompareport findRaw
   */
  export type Page3topfiveCompareportFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Page3topfiveCompareport aggregateRaw
   */
  export type Page3topfiveCompareportAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Page3topfiveCompareport without action
   */
  export type Page3topfiveCompareportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3topfiveCompareport
     */
    select?: Page3topfiveCompareportSelect<ExtArgs> | null
  }



  /**
   * Model Page3typeCompareport
   */

  export type AggregatePage3typeCompareport = {
    _count: Page3typeCompareportCountAggregateOutputType | null
    _min: Page3typeCompareportMinAggregateOutputType | null
    _max: Page3typeCompareportMaxAggregateOutputType | null
  }

  export type Page3typeCompareportMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
  }

  export type Page3typeCompareportMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
  }

  export type Page3typeCompareportCountAggregateOutputType = {
    id: number
    proj_id: number
    proj_abbr_name: number
    type_data: number
    _all: number
  }


  export type Page3typeCompareportMinAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
  }

  export type Page3typeCompareportMaxAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
  }

  export type Page3typeCompareportCountAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    type_data?: true
    _all?: true
  }

  export type Page3typeCompareportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page3typeCompareport to aggregate.
     */
    where?: Page3typeCompareportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page3typeCompareports to fetch.
     */
    orderBy?: Page3typeCompareportOrderByWithRelationInput | Page3typeCompareportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Page3typeCompareportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page3typeCompareports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page3typeCompareports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Page3typeCompareports
    **/
    _count?: true | Page3typeCompareportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Page3typeCompareportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Page3typeCompareportMaxAggregateInputType
  }

  export type GetPage3typeCompareportAggregateType<T extends Page3typeCompareportAggregateArgs> = {
        [P in keyof T & keyof AggregatePage3typeCompareport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage3typeCompareport[P]>
      : GetScalarType<T[P], AggregatePage3typeCompareport[P]>
  }




  export type Page3typeCompareportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Page3typeCompareportWhereInput
    orderBy?: Page3typeCompareportOrderByWithAggregationInput | Page3typeCompareportOrderByWithAggregationInput[]
    by: Page3typeCompareportScalarFieldEnum[] | Page3typeCompareportScalarFieldEnum
    having?: Page3typeCompareportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Page3typeCompareportCountAggregateInputType | true
    _min?: Page3typeCompareportMinAggregateInputType
    _max?: Page3typeCompareportMaxAggregateInputType
  }

  export type Page3typeCompareportGroupByOutputType = {
    id: string
    proj_id: string
    proj_abbr_name: string
    type_data: JsonValue
    _count: Page3typeCompareportCountAggregateOutputType | null
    _min: Page3typeCompareportMinAggregateOutputType | null
    _max: Page3typeCompareportMaxAggregateOutputType | null
  }

  type GetPage3typeCompareportGroupByPayload<T extends Page3typeCompareportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Page3typeCompareportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Page3typeCompareportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Page3typeCompareportGroupByOutputType[P]>
            : GetScalarType<T[P], Page3typeCompareportGroupByOutputType[P]>
        }
      >
    >


  export type Page3typeCompareportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    type_data?: boolean
  }, ExtArgs["result"]["page3typeCompareport"]>

  export type Page3typeCompareportSelectScalar = {
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    type_data?: boolean
  }


  export type $Page3typeCompareportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page3typeCompareport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      proj_abbr_name: string
      type_data: Prisma.JsonValue
    }, ExtArgs["result"]["page3typeCompareport"]>
    composites: {}
  }


  type Page3typeCompareportGetPayload<S extends boolean | null | undefined | Page3typeCompareportDefaultArgs> = $Result.GetResult<Prisma.$Page3typeCompareportPayload, S>

  type Page3typeCompareportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Page3typeCompareportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Page3typeCompareportCountAggregateInputType | true
    }

  export interface Page3typeCompareportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page3typeCompareport'], meta: { name: 'Page3typeCompareport' } }
    /**
     * Find zero or one Page3typeCompareport that matches the filter.
     * @param {Page3typeCompareportFindUniqueArgs} args - Arguments to find a Page3typeCompareport
     * @example
     * // Get one Page3typeCompareport
     * const page3typeCompareport = await prisma.page3typeCompareport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Page3typeCompareportFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Page3typeCompareportFindUniqueArgs<ExtArgs>>
    ): Prisma__Page3typeCompareportClient<$Result.GetResult<Prisma.$Page3typeCompareportPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Page3typeCompareport that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Page3typeCompareportFindUniqueOrThrowArgs} args - Arguments to find a Page3typeCompareport
     * @example
     * // Get one Page3typeCompareport
     * const page3typeCompareport = await prisma.page3typeCompareport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Page3typeCompareportFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3typeCompareportFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Page3typeCompareportClient<$Result.GetResult<Prisma.$Page3typeCompareportPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Page3typeCompareport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3typeCompareportFindFirstArgs} args - Arguments to find a Page3typeCompareport
     * @example
     * // Get one Page3typeCompareport
     * const page3typeCompareport = await prisma.page3typeCompareport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Page3typeCompareportFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3typeCompareportFindFirstArgs<ExtArgs>>
    ): Prisma__Page3typeCompareportClient<$Result.GetResult<Prisma.$Page3typeCompareportPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Page3typeCompareport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3typeCompareportFindFirstOrThrowArgs} args - Arguments to find a Page3typeCompareport
     * @example
     * // Get one Page3typeCompareport
     * const page3typeCompareport = await prisma.page3typeCompareport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Page3typeCompareportFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3typeCompareportFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Page3typeCompareportClient<$Result.GetResult<Prisma.$Page3typeCompareportPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Page3typeCompareports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3typeCompareportFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Page3typeCompareports
     * const page3typeCompareports = await prisma.page3typeCompareport.findMany()
     * 
     * // Get first 10 Page3typeCompareports
     * const page3typeCompareports = await prisma.page3typeCompareport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const page3typeCompareportWithIdOnly = await prisma.page3typeCompareport.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Page3typeCompareportFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3typeCompareportFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Page3typeCompareportPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Page3typeCompareport.
     * @param {Page3typeCompareportCreateArgs} args - Arguments to create a Page3typeCompareport.
     * @example
     * // Create one Page3typeCompareport
     * const Page3typeCompareport = await prisma.page3typeCompareport.create({
     *   data: {
     *     // ... data to create a Page3typeCompareport
     *   }
     * })
     * 
    **/
    create<T extends Page3typeCompareportCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Page3typeCompareportCreateArgs<ExtArgs>>
    ): Prisma__Page3typeCompareportClient<$Result.GetResult<Prisma.$Page3typeCompareportPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Page3typeCompareports.
     *     @param {Page3typeCompareportCreateManyArgs} args - Arguments to create many Page3typeCompareports.
     *     @example
     *     // Create many Page3typeCompareports
     *     const page3typeCompareport = await prisma.page3typeCompareport.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Page3typeCompareportCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3typeCompareportCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Page3typeCompareport.
     * @param {Page3typeCompareportDeleteArgs} args - Arguments to delete one Page3typeCompareport.
     * @example
     * // Delete one Page3typeCompareport
     * const Page3typeCompareport = await prisma.page3typeCompareport.delete({
     *   where: {
     *     // ... filter to delete one Page3typeCompareport
     *   }
     * })
     * 
    **/
    delete<T extends Page3typeCompareportDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Page3typeCompareportDeleteArgs<ExtArgs>>
    ): Prisma__Page3typeCompareportClient<$Result.GetResult<Prisma.$Page3typeCompareportPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Page3typeCompareport.
     * @param {Page3typeCompareportUpdateArgs} args - Arguments to update one Page3typeCompareport.
     * @example
     * // Update one Page3typeCompareport
     * const page3typeCompareport = await prisma.page3typeCompareport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Page3typeCompareportUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Page3typeCompareportUpdateArgs<ExtArgs>>
    ): Prisma__Page3typeCompareportClient<$Result.GetResult<Prisma.$Page3typeCompareportPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Page3typeCompareports.
     * @param {Page3typeCompareportDeleteManyArgs} args - Arguments to filter Page3typeCompareports to delete.
     * @example
     * // Delete a few Page3typeCompareports
     * const { count } = await prisma.page3typeCompareport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Page3typeCompareportDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3typeCompareportDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Page3typeCompareports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3typeCompareportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Page3typeCompareports
     * const page3typeCompareport = await prisma.page3typeCompareport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Page3typeCompareportUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Page3typeCompareportUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Page3typeCompareport.
     * @param {Page3typeCompareportUpsertArgs} args - Arguments to update or create a Page3typeCompareport.
     * @example
     * // Update or create a Page3typeCompareport
     * const page3typeCompareport = await prisma.page3typeCompareport.upsert({
     *   create: {
     *     // ... data to create a Page3typeCompareport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page3typeCompareport we want to update
     *   }
     * })
    **/
    upsert<T extends Page3typeCompareportUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Page3typeCompareportUpsertArgs<ExtArgs>>
    ): Prisma__Page3typeCompareportClient<$Result.GetResult<Prisma.$Page3typeCompareportPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Page3typeCompareports that matches the filter.
     * @param {Page3typeCompareportFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const page3typeCompareport = await prisma.page3typeCompareport.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Page3typeCompareportFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Page3typeCompareport.
     * @param {Page3typeCompareportAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const page3typeCompareport = await prisma.page3typeCompareport.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Page3typeCompareportAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Page3typeCompareports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3typeCompareportCountArgs} args - Arguments to filter Page3typeCompareports to count.
     * @example
     * // Count the number of Page3typeCompareports
     * const count = await prisma.page3typeCompareport.count({
     *   where: {
     *     // ... the filter for the Page3typeCompareports we want to count
     *   }
     * })
    **/
    count<T extends Page3typeCompareportCountArgs>(
      args?: Subset<T, Page3typeCompareportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Page3typeCompareportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page3typeCompareport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3typeCompareportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Page3typeCompareportAggregateArgs>(args: Subset<T, Page3typeCompareportAggregateArgs>): Prisma.PrismaPromise<GetPage3typeCompareportAggregateType<T>>

    /**
     * Group by Page3typeCompareport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3typeCompareportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Page3typeCompareportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Page3typeCompareportGroupByArgs['orderBy'] }
        : { orderBy?: Page3typeCompareportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Page3typeCompareportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPage3typeCompareportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page3typeCompareport model
   */
  readonly fields: Page3typeCompareportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page3typeCompareport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Page3typeCompareportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Page3typeCompareport model
   */ 
  interface Page3typeCompareportFieldRefs {
    readonly id: FieldRef<"Page3typeCompareport", 'String'>
    readonly proj_id: FieldRef<"Page3typeCompareport", 'String'>
    readonly proj_abbr_name: FieldRef<"Page3typeCompareport", 'String'>
    readonly type_data: FieldRef<"Page3typeCompareport", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Page3typeCompareport findUnique
   */
  export type Page3typeCompareportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3typeCompareport
     */
    select?: Page3typeCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3typeCompareport to fetch.
     */
    where: Page3typeCompareportWhereUniqueInput
  }


  /**
   * Page3typeCompareport findUniqueOrThrow
   */
  export type Page3typeCompareportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3typeCompareport
     */
    select?: Page3typeCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3typeCompareport to fetch.
     */
    where: Page3typeCompareportWhereUniqueInput
  }


  /**
   * Page3typeCompareport findFirst
   */
  export type Page3typeCompareportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3typeCompareport
     */
    select?: Page3typeCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3typeCompareport to fetch.
     */
    where?: Page3typeCompareportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page3typeCompareports to fetch.
     */
    orderBy?: Page3typeCompareportOrderByWithRelationInput | Page3typeCompareportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Page3typeCompareports.
     */
    cursor?: Page3typeCompareportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page3typeCompareports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page3typeCompareports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Page3typeCompareports.
     */
    distinct?: Page3typeCompareportScalarFieldEnum | Page3typeCompareportScalarFieldEnum[]
  }


  /**
   * Page3typeCompareport findFirstOrThrow
   */
  export type Page3typeCompareportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3typeCompareport
     */
    select?: Page3typeCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3typeCompareport to fetch.
     */
    where?: Page3typeCompareportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page3typeCompareports to fetch.
     */
    orderBy?: Page3typeCompareportOrderByWithRelationInput | Page3typeCompareportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Page3typeCompareports.
     */
    cursor?: Page3typeCompareportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page3typeCompareports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page3typeCompareports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Page3typeCompareports.
     */
    distinct?: Page3typeCompareportScalarFieldEnum | Page3typeCompareportScalarFieldEnum[]
  }


  /**
   * Page3typeCompareport findMany
   */
  export type Page3typeCompareportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3typeCompareport
     */
    select?: Page3typeCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3typeCompareports to fetch.
     */
    where?: Page3typeCompareportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page3typeCompareports to fetch.
     */
    orderBy?: Page3typeCompareportOrderByWithRelationInput | Page3typeCompareportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Page3typeCompareports.
     */
    cursor?: Page3typeCompareportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page3typeCompareports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page3typeCompareports.
     */
    skip?: number
    distinct?: Page3typeCompareportScalarFieldEnum | Page3typeCompareportScalarFieldEnum[]
  }


  /**
   * Page3typeCompareport create
   */
  export type Page3typeCompareportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3typeCompareport
     */
    select?: Page3typeCompareportSelect<ExtArgs> | null
    /**
     * The data needed to create a Page3typeCompareport.
     */
    data: XOR<Page3typeCompareportCreateInput, Page3typeCompareportUncheckedCreateInput>
  }


  /**
   * Page3typeCompareport createMany
   */
  export type Page3typeCompareportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Page3typeCompareports.
     */
    data: Page3typeCompareportCreateManyInput | Page3typeCompareportCreateManyInput[]
  }


  /**
   * Page3typeCompareport update
   */
  export type Page3typeCompareportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3typeCompareport
     */
    select?: Page3typeCompareportSelect<ExtArgs> | null
    /**
     * The data needed to update a Page3typeCompareport.
     */
    data: XOR<Page3typeCompareportUpdateInput, Page3typeCompareportUncheckedUpdateInput>
    /**
     * Choose, which Page3typeCompareport to update.
     */
    where: Page3typeCompareportWhereUniqueInput
  }


  /**
   * Page3typeCompareport updateMany
   */
  export type Page3typeCompareportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Page3typeCompareports.
     */
    data: XOR<Page3typeCompareportUpdateManyMutationInput, Page3typeCompareportUncheckedUpdateManyInput>
    /**
     * Filter which Page3typeCompareports to update
     */
    where?: Page3typeCompareportWhereInput
  }


  /**
   * Page3typeCompareport upsert
   */
  export type Page3typeCompareportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3typeCompareport
     */
    select?: Page3typeCompareportSelect<ExtArgs> | null
    /**
     * The filter to search for the Page3typeCompareport to update in case it exists.
     */
    where: Page3typeCompareportWhereUniqueInput
    /**
     * In case the Page3typeCompareport found by the `where` argument doesn't exist, create a new Page3typeCompareport with this data.
     */
    create: XOR<Page3typeCompareportCreateInput, Page3typeCompareportUncheckedCreateInput>
    /**
     * In case the Page3typeCompareport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Page3typeCompareportUpdateInput, Page3typeCompareportUncheckedUpdateInput>
  }


  /**
   * Page3typeCompareport delete
   */
  export type Page3typeCompareportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3typeCompareport
     */
    select?: Page3typeCompareportSelect<ExtArgs> | null
    /**
     * Filter which Page3typeCompareport to delete.
     */
    where: Page3typeCompareportWhereUniqueInput
  }


  /**
   * Page3typeCompareport deleteMany
   */
  export type Page3typeCompareportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page3typeCompareports to delete
     */
    where?: Page3typeCompareportWhereInput
  }


  /**
   * Page3typeCompareport findRaw
   */
  export type Page3typeCompareportFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Page3typeCompareport aggregateRaw
   */
  export type Page3typeCompareportAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Page3typeCompareport without action
   */
  export type Page3typeCompareportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3typeCompareport
     */
    select?: Page3typeCompareportSelect<ExtArgs> | null
  }



  /**
   * Model Page3Investment_proportionCompareport
   */

  export type AggregatePage3Investment_proportionCompareport = {
    _count: Page3Investment_proportionCompareportCountAggregateOutputType | null
    _min: Page3Investment_proportionCompareportMinAggregateOutputType | null
    _max: Page3Investment_proportionCompareportMaxAggregateOutputType | null
  }

  export type Page3Investment_proportionCompareportMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
  }

  export type Page3Investment_proportionCompareportMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
  }

  export type Page3Investment_proportionCompareportCountAggregateOutputType = {
    id: number
    proj_id: number
    proj_abbr_name: number
    Investment_proportion_data: number
    _all: number
  }


  export type Page3Investment_proportionCompareportMinAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
  }

  export type Page3Investment_proportionCompareportMaxAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
  }

  export type Page3Investment_proportionCompareportCountAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    Investment_proportion_data?: true
    _all?: true
  }

  export type Page3Investment_proportionCompareportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page3Investment_proportionCompareport to aggregate.
     */
    where?: Page3Investment_proportionCompareportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page3Investment_proportionCompareports to fetch.
     */
    orderBy?: Page3Investment_proportionCompareportOrderByWithRelationInput | Page3Investment_proportionCompareportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Page3Investment_proportionCompareportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page3Investment_proportionCompareports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page3Investment_proportionCompareports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Page3Investment_proportionCompareports
    **/
    _count?: true | Page3Investment_proportionCompareportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Page3Investment_proportionCompareportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Page3Investment_proportionCompareportMaxAggregateInputType
  }

  export type GetPage3Investment_proportionCompareportAggregateType<T extends Page3Investment_proportionCompareportAggregateArgs> = {
        [P in keyof T & keyof AggregatePage3Investment_proportionCompareport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage3Investment_proportionCompareport[P]>
      : GetScalarType<T[P], AggregatePage3Investment_proportionCompareport[P]>
  }




  export type Page3Investment_proportionCompareportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Page3Investment_proportionCompareportWhereInput
    orderBy?: Page3Investment_proportionCompareportOrderByWithAggregationInput | Page3Investment_proportionCompareportOrderByWithAggregationInput[]
    by: Page3Investment_proportionCompareportScalarFieldEnum[] | Page3Investment_proportionCompareportScalarFieldEnum
    having?: Page3Investment_proportionCompareportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Page3Investment_proportionCompareportCountAggregateInputType | true
    _min?: Page3Investment_proportionCompareportMinAggregateInputType
    _max?: Page3Investment_proportionCompareportMaxAggregateInputType
  }

  export type Page3Investment_proportionCompareportGroupByOutputType = {
    id: string
    proj_id: string
    proj_abbr_name: string
    Investment_proportion_data: JsonValue
    _count: Page3Investment_proportionCompareportCountAggregateOutputType | null
    _min: Page3Investment_proportionCompareportMinAggregateOutputType | null
    _max: Page3Investment_proportionCompareportMaxAggregateOutputType | null
  }

  type GetPage3Investment_proportionCompareportGroupByPayload<T extends Page3Investment_proportionCompareportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Page3Investment_proportionCompareportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Page3Investment_proportionCompareportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Page3Investment_proportionCompareportGroupByOutputType[P]>
            : GetScalarType<T[P], Page3Investment_proportionCompareportGroupByOutputType[P]>
        }
      >
    >


  export type Page3Investment_proportionCompareportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    Investment_proportion_data?: boolean
  }, ExtArgs["result"]["page3Investment_proportionCompareport"]>

  export type Page3Investment_proportionCompareportSelectScalar = {
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    Investment_proportion_data?: boolean
  }


  export type $Page3Investment_proportionCompareportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page3Investment_proportionCompareport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      proj_abbr_name: string
      Investment_proportion_data: Prisma.JsonValue
    }, ExtArgs["result"]["page3Investment_proportionCompareport"]>
    composites: {}
  }


  type Page3Investment_proportionCompareportGetPayload<S extends boolean | null | undefined | Page3Investment_proportionCompareportDefaultArgs> = $Result.GetResult<Prisma.$Page3Investment_proportionCompareportPayload, S>

  type Page3Investment_proportionCompareportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Page3Investment_proportionCompareportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Page3Investment_proportionCompareportCountAggregateInputType | true
    }

  export interface Page3Investment_proportionCompareportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page3Investment_proportionCompareport'], meta: { name: 'Page3Investment_proportionCompareport' } }
    /**
     * Find zero or one Page3Investment_proportionCompareport that matches the filter.
     * @param {Page3Investment_proportionCompareportFindUniqueArgs} args - Arguments to find a Page3Investment_proportionCompareport
     * @example
     * // Get one Page3Investment_proportionCompareport
     * const page3Investment_proportionCompareport = await prisma.page3Investment_proportionCompareport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Page3Investment_proportionCompareportFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Page3Investment_proportionCompareportFindUniqueArgs<ExtArgs>>
    ): Prisma__Page3Investment_proportionCompareportClient<$Result.GetResult<Prisma.$Page3Investment_proportionCompareportPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Page3Investment_proportionCompareport that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Page3Investment_proportionCompareportFindUniqueOrThrowArgs} args - Arguments to find a Page3Investment_proportionCompareport
     * @example
     * // Get one Page3Investment_proportionCompareport
     * const page3Investment_proportionCompareport = await prisma.page3Investment_proportionCompareport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Page3Investment_proportionCompareportFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3Investment_proportionCompareportFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Page3Investment_proportionCompareportClient<$Result.GetResult<Prisma.$Page3Investment_proportionCompareportPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Page3Investment_proportionCompareport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3Investment_proportionCompareportFindFirstArgs} args - Arguments to find a Page3Investment_proportionCompareport
     * @example
     * // Get one Page3Investment_proportionCompareport
     * const page3Investment_proportionCompareport = await prisma.page3Investment_proportionCompareport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Page3Investment_proportionCompareportFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3Investment_proportionCompareportFindFirstArgs<ExtArgs>>
    ): Prisma__Page3Investment_proportionCompareportClient<$Result.GetResult<Prisma.$Page3Investment_proportionCompareportPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Page3Investment_proportionCompareport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3Investment_proportionCompareportFindFirstOrThrowArgs} args - Arguments to find a Page3Investment_proportionCompareport
     * @example
     * // Get one Page3Investment_proportionCompareport
     * const page3Investment_proportionCompareport = await prisma.page3Investment_proportionCompareport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Page3Investment_proportionCompareportFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3Investment_proportionCompareportFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Page3Investment_proportionCompareportClient<$Result.GetResult<Prisma.$Page3Investment_proportionCompareportPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Page3Investment_proportionCompareports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3Investment_proportionCompareportFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Page3Investment_proportionCompareports
     * const page3Investment_proportionCompareports = await prisma.page3Investment_proportionCompareport.findMany()
     * 
     * // Get first 10 Page3Investment_proportionCompareports
     * const page3Investment_proportionCompareports = await prisma.page3Investment_proportionCompareport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const page3Investment_proportionCompareportWithIdOnly = await prisma.page3Investment_proportionCompareport.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Page3Investment_proportionCompareportFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3Investment_proportionCompareportFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Page3Investment_proportionCompareportPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Page3Investment_proportionCompareport.
     * @param {Page3Investment_proportionCompareportCreateArgs} args - Arguments to create a Page3Investment_proportionCompareport.
     * @example
     * // Create one Page3Investment_proportionCompareport
     * const Page3Investment_proportionCompareport = await prisma.page3Investment_proportionCompareport.create({
     *   data: {
     *     // ... data to create a Page3Investment_proportionCompareport
     *   }
     * })
     * 
    **/
    create<T extends Page3Investment_proportionCompareportCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Page3Investment_proportionCompareportCreateArgs<ExtArgs>>
    ): Prisma__Page3Investment_proportionCompareportClient<$Result.GetResult<Prisma.$Page3Investment_proportionCompareportPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Page3Investment_proportionCompareports.
     *     @param {Page3Investment_proportionCompareportCreateManyArgs} args - Arguments to create many Page3Investment_proportionCompareports.
     *     @example
     *     // Create many Page3Investment_proportionCompareports
     *     const page3Investment_proportionCompareport = await prisma.page3Investment_proportionCompareport.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Page3Investment_proportionCompareportCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3Investment_proportionCompareportCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Page3Investment_proportionCompareport.
     * @param {Page3Investment_proportionCompareportDeleteArgs} args - Arguments to delete one Page3Investment_proportionCompareport.
     * @example
     * // Delete one Page3Investment_proportionCompareport
     * const Page3Investment_proportionCompareport = await prisma.page3Investment_proportionCompareport.delete({
     *   where: {
     *     // ... filter to delete one Page3Investment_proportionCompareport
     *   }
     * })
     * 
    **/
    delete<T extends Page3Investment_proportionCompareportDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Page3Investment_proportionCompareportDeleteArgs<ExtArgs>>
    ): Prisma__Page3Investment_proportionCompareportClient<$Result.GetResult<Prisma.$Page3Investment_proportionCompareportPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Page3Investment_proportionCompareport.
     * @param {Page3Investment_proportionCompareportUpdateArgs} args - Arguments to update one Page3Investment_proportionCompareport.
     * @example
     * // Update one Page3Investment_proportionCompareport
     * const page3Investment_proportionCompareport = await prisma.page3Investment_proportionCompareport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Page3Investment_proportionCompareportUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Page3Investment_proportionCompareportUpdateArgs<ExtArgs>>
    ): Prisma__Page3Investment_proportionCompareportClient<$Result.GetResult<Prisma.$Page3Investment_proportionCompareportPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Page3Investment_proportionCompareports.
     * @param {Page3Investment_proportionCompareportDeleteManyArgs} args - Arguments to filter Page3Investment_proportionCompareports to delete.
     * @example
     * // Delete a few Page3Investment_proportionCompareports
     * const { count } = await prisma.page3Investment_proportionCompareport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Page3Investment_proportionCompareportDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page3Investment_proportionCompareportDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Page3Investment_proportionCompareports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3Investment_proportionCompareportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Page3Investment_proportionCompareports
     * const page3Investment_proportionCompareport = await prisma.page3Investment_proportionCompareport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Page3Investment_proportionCompareportUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Page3Investment_proportionCompareportUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Page3Investment_proportionCompareport.
     * @param {Page3Investment_proportionCompareportUpsertArgs} args - Arguments to update or create a Page3Investment_proportionCompareport.
     * @example
     * // Update or create a Page3Investment_proportionCompareport
     * const page3Investment_proportionCompareport = await prisma.page3Investment_proportionCompareport.upsert({
     *   create: {
     *     // ... data to create a Page3Investment_proportionCompareport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page3Investment_proportionCompareport we want to update
     *   }
     * })
    **/
    upsert<T extends Page3Investment_proportionCompareportUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Page3Investment_proportionCompareportUpsertArgs<ExtArgs>>
    ): Prisma__Page3Investment_proportionCompareportClient<$Result.GetResult<Prisma.$Page3Investment_proportionCompareportPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Page3Investment_proportionCompareports that matches the filter.
     * @param {Page3Investment_proportionCompareportFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const page3Investment_proportionCompareport = await prisma.page3Investment_proportionCompareport.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Page3Investment_proportionCompareportFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Page3Investment_proportionCompareport.
     * @param {Page3Investment_proportionCompareportAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const page3Investment_proportionCompareport = await prisma.page3Investment_proportionCompareport.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Page3Investment_proportionCompareportAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Page3Investment_proportionCompareports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3Investment_proportionCompareportCountArgs} args - Arguments to filter Page3Investment_proportionCompareports to count.
     * @example
     * // Count the number of Page3Investment_proportionCompareports
     * const count = await prisma.page3Investment_proportionCompareport.count({
     *   where: {
     *     // ... the filter for the Page3Investment_proportionCompareports we want to count
     *   }
     * })
    **/
    count<T extends Page3Investment_proportionCompareportCountArgs>(
      args?: Subset<T, Page3Investment_proportionCompareportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Page3Investment_proportionCompareportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page3Investment_proportionCompareport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3Investment_proportionCompareportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Page3Investment_proportionCompareportAggregateArgs>(args: Subset<T, Page3Investment_proportionCompareportAggregateArgs>): Prisma.PrismaPromise<GetPage3Investment_proportionCompareportAggregateType<T>>

    /**
     * Group by Page3Investment_proportionCompareport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page3Investment_proportionCompareportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Page3Investment_proportionCompareportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Page3Investment_proportionCompareportGroupByArgs['orderBy'] }
        : { orderBy?: Page3Investment_proportionCompareportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Page3Investment_proportionCompareportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPage3Investment_proportionCompareportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page3Investment_proportionCompareport model
   */
  readonly fields: Page3Investment_proportionCompareportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page3Investment_proportionCompareport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Page3Investment_proportionCompareportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Page3Investment_proportionCompareport model
   */ 
  interface Page3Investment_proportionCompareportFieldRefs {
    readonly id: FieldRef<"Page3Investment_proportionCompareport", 'String'>
    readonly proj_id: FieldRef<"Page3Investment_proportionCompareport", 'String'>
    readonly proj_abbr_name: FieldRef<"Page3Investment_proportionCompareport", 'String'>
    readonly Investment_proportion_data: FieldRef<"Page3Investment_proportionCompareport", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Page3Investment_proportionCompareport findUnique
   */
  export type Page3Investment_proportionCompareportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3Investment_proportionCompareport
     */
    select?: Page3Investment_proportionCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3Investment_proportionCompareport to fetch.
     */
    where: Page3Investment_proportionCompareportWhereUniqueInput
  }


  /**
   * Page3Investment_proportionCompareport findUniqueOrThrow
   */
  export type Page3Investment_proportionCompareportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3Investment_proportionCompareport
     */
    select?: Page3Investment_proportionCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3Investment_proportionCompareport to fetch.
     */
    where: Page3Investment_proportionCompareportWhereUniqueInput
  }


  /**
   * Page3Investment_proportionCompareport findFirst
   */
  export type Page3Investment_proportionCompareportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3Investment_proportionCompareport
     */
    select?: Page3Investment_proportionCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3Investment_proportionCompareport to fetch.
     */
    where?: Page3Investment_proportionCompareportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page3Investment_proportionCompareports to fetch.
     */
    orderBy?: Page3Investment_proportionCompareportOrderByWithRelationInput | Page3Investment_proportionCompareportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Page3Investment_proportionCompareports.
     */
    cursor?: Page3Investment_proportionCompareportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page3Investment_proportionCompareports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page3Investment_proportionCompareports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Page3Investment_proportionCompareports.
     */
    distinct?: Page3Investment_proportionCompareportScalarFieldEnum | Page3Investment_proportionCompareportScalarFieldEnum[]
  }


  /**
   * Page3Investment_proportionCompareport findFirstOrThrow
   */
  export type Page3Investment_proportionCompareportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3Investment_proportionCompareport
     */
    select?: Page3Investment_proportionCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3Investment_proportionCompareport to fetch.
     */
    where?: Page3Investment_proportionCompareportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page3Investment_proportionCompareports to fetch.
     */
    orderBy?: Page3Investment_proportionCompareportOrderByWithRelationInput | Page3Investment_proportionCompareportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Page3Investment_proportionCompareports.
     */
    cursor?: Page3Investment_proportionCompareportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page3Investment_proportionCompareports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page3Investment_proportionCompareports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Page3Investment_proportionCompareports.
     */
    distinct?: Page3Investment_proportionCompareportScalarFieldEnum | Page3Investment_proportionCompareportScalarFieldEnum[]
  }


  /**
   * Page3Investment_proportionCompareport findMany
   */
  export type Page3Investment_proportionCompareportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3Investment_proportionCompareport
     */
    select?: Page3Investment_proportionCompareportSelect<ExtArgs> | null
    /**
     * Filter, which Page3Investment_proportionCompareports to fetch.
     */
    where?: Page3Investment_proportionCompareportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page3Investment_proportionCompareports to fetch.
     */
    orderBy?: Page3Investment_proportionCompareportOrderByWithRelationInput | Page3Investment_proportionCompareportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Page3Investment_proportionCompareports.
     */
    cursor?: Page3Investment_proportionCompareportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page3Investment_proportionCompareports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page3Investment_proportionCompareports.
     */
    skip?: number
    distinct?: Page3Investment_proportionCompareportScalarFieldEnum | Page3Investment_proportionCompareportScalarFieldEnum[]
  }


  /**
   * Page3Investment_proportionCompareport create
   */
  export type Page3Investment_proportionCompareportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3Investment_proportionCompareport
     */
    select?: Page3Investment_proportionCompareportSelect<ExtArgs> | null
    /**
     * The data needed to create a Page3Investment_proportionCompareport.
     */
    data: XOR<Page3Investment_proportionCompareportCreateInput, Page3Investment_proportionCompareportUncheckedCreateInput>
  }


  /**
   * Page3Investment_proportionCompareport createMany
   */
  export type Page3Investment_proportionCompareportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Page3Investment_proportionCompareports.
     */
    data: Page3Investment_proportionCompareportCreateManyInput | Page3Investment_proportionCompareportCreateManyInput[]
  }


  /**
   * Page3Investment_proportionCompareport update
   */
  export type Page3Investment_proportionCompareportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3Investment_proportionCompareport
     */
    select?: Page3Investment_proportionCompareportSelect<ExtArgs> | null
    /**
     * The data needed to update a Page3Investment_proportionCompareport.
     */
    data: XOR<Page3Investment_proportionCompareportUpdateInput, Page3Investment_proportionCompareportUncheckedUpdateInput>
    /**
     * Choose, which Page3Investment_proportionCompareport to update.
     */
    where: Page3Investment_proportionCompareportWhereUniqueInput
  }


  /**
   * Page3Investment_proportionCompareport updateMany
   */
  export type Page3Investment_proportionCompareportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Page3Investment_proportionCompareports.
     */
    data: XOR<Page3Investment_proportionCompareportUpdateManyMutationInput, Page3Investment_proportionCompareportUncheckedUpdateManyInput>
    /**
     * Filter which Page3Investment_proportionCompareports to update
     */
    where?: Page3Investment_proportionCompareportWhereInput
  }


  /**
   * Page3Investment_proportionCompareport upsert
   */
  export type Page3Investment_proportionCompareportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3Investment_proportionCompareport
     */
    select?: Page3Investment_proportionCompareportSelect<ExtArgs> | null
    /**
     * The filter to search for the Page3Investment_proportionCompareport to update in case it exists.
     */
    where: Page3Investment_proportionCompareportWhereUniqueInput
    /**
     * In case the Page3Investment_proportionCompareport found by the `where` argument doesn't exist, create a new Page3Investment_proportionCompareport with this data.
     */
    create: XOR<Page3Investment_proportionCompareportCreateInput, Page3Investment_proportionCompareportUncheckedCreateInput>
    /**
     * In case the Page3Investment_proportionCompareport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Page3Investment_proportionCompareportUpdateInput, Page3Investment_proportionCompareportUncheckedUpdateInput>
  }


  /**
   * Page3Investment_proportionCompareport delete
   */
  export type Page3Investment_proportionCompareportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3Investment_proportionCompareport
     */
    select?: Page3Investment_proportionCompareportSelect<ExtArgs> | null
    /**
     * Filter which Page3Investment_proportionCompareport to delete.
     */
    where: Page3Investment_proportionCompareportWhereUniqueInput
  }


  /**
   * Page3Investment_proportionCompareport deleteMany
   */
  export type Page3Investment_proportionCompareportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page3Investment_proportionCompareports to delete
     */
    where?: Page3Investment_proportionCompareportWhereInput
  }


  /**
   * Page3Investment_proportionCompareport findRaw
   */
  export type Page3Investment_proportionCompareportFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Page3Investment_proportionCompareport aggregateRaw
   */
  export type Page3Investment_proportionCompareportAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Page3Investment_proportionCompareport without action
   */
  export type Page3Investment_proportionCompareportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page3Investment_proportionCompareport
     */
    select?: Page3Investment_proportionCompareportSelect<ExtArgs> | null
  }



  /**
   * Model Page4Fee
   */

  export type AggregatePage4Fee = {
    _count: Page4FeeCountAggregateOutputType | null
    _min: Page4FeeMinAggregateOutputType | null
    _max: Page4FeeMaxAggregateOutputType | null
  }

  export type Page4FeeMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
    fund_fact_url: string | null
  }

  export type Page4FeeMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
    fund_fact_url: string | null
  }

  export type Page4FeeCountAggregateOutputType = {
    id: number
    proj_id: number
    proj_abbr_name: number
    data_from_sheet: number
    data_from_real: number
    fund_fact_url: number
    buyInfo: number
    _all: number
  }


  export type Page4FeeMinAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    fund_fact_url?: true
  }

  export type Page4FeeMaxAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    fund_fact_url?: true
  }

  export type Page4FeeCountAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    data_from_sheet?: true
    data_from_real?: true
    fund_fact_url?: true
    buyInfo?: true
    _all?: true
  }

  export type Page4FeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page4Fee to aggregate.
     */
    where?: Page4FeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page4Fees to fetch.
     */
    orderBy?: Page4FeeOrderByWithRelationInput | Page4FeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Page4FeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page4Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page4Fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Page4Fees
    **/
    _count?: true | Page4FeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Page4FeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Page4FeeMaxAggregateInputType
  }

  export type GetPage4FeeAggregateType<T extends Page4FeeAggregateArgs> = {
        [P in keyof T & keyof AggregatePage4Fee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage4Fee[P]>
      : GetScalarType<T[P], AggregatePage4Fee[P]>
  }




  export type Page4FeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Page4FeeWhereInput
    orderBy?: Page4FeeOrderByWithAggregationInput | Page4FeeOrderByWithAggregationInput[]
    by: Page4FeeScalarFieldEnum[] | Page4FeeScalarFieldEnum
    having?: Page4FeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Page4FeeCountAggregateInputType | true
    _min?: Page4FeeMinAggregateInputType
    _max?: Page4FeeMaxAggregateInputType
  }

  export type Page4FeeGroupByOutputType = {
    id: string
    proj_id: string
    proj_abbr_name: string
    data_from_sheet: JsonValue
    data_from_real: JsonValue
    fund_fact_url: string
    buyInfo: JsonValue
    _count: Page4FeeCountAggregateOutputType | null
    _min: Page4FeeMinAggregateOutputType | null
    _max: Page4FeeMaxAggregateOutputType | null
  }

  type GetPage4FeeGroupByPayload<T extends Page4FeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Page4FeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Page4FeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Page4FeeGroupByOutputType[P]>
            : GetScalarType<T[P], Page4FeeGroupByOutputType[P]>
        }
      >
    >


  export type Page4FeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    data_from_sheet?: boolean
    data_from_real?: boolean
    fund_fact_url?: boolean
    buyInfo?: boolean
  }, ExtArgs["result"]["page4Fee"]>

  export type Page4FeeSelectScalar = {
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    data_from_sheet?: boolean
    data_from_real?: boolean
    fund_fact_url?: boolean
    buyInfo?: boolean
  }


  export type $Page4FeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page4Fee"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      proj_abbr_name: string
      data_from_sheet: Prisma.JsonValue
      data_from_real: Prisma.JsonValue
      fund_fact_url: string
      buyInfo: Prisma.JsonValue
    }, ExtArgs["result"]["page4Fee"]>
    composites: {}
  }


  type Page4FeeGetPayload<S extends boolean | null | undefined | Page4FeeDefaultArgs> = $Result.GetResult<Prisma.$Page4FeePayload, S>

  type Page4FeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Page4FeeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Page4FeeCountAggregateInputType | true
    }

  export interface Page4FeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page4Fee'], meta: { name: 'Page4Fee' } }
    /**
     * Find zero or one Page4Fee that matches the filter.
     * @param {Page4FeeFindUniqueArgs} args - Arguments to find a Page4Fee
     * @example
     * // Get one Page4Fee
     * const page4Fee = await prisma.page4Fee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Page4FeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Page4FeeFindUniqueArgs<ExtArgs>>
    ): Prisma__Page4FeeClient<$Result.GetResult<Prisma.$Page4FeePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Page4Fee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Page4FeeFindUniqueOrThrowArgs} args - Arguments to find a Page4Fee
     * @example
     * // Get one Page4Fee
     * const page4Fee = await prisma.page4Fee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Page4FeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Page4FeeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Page4FeeClient<$Result.GetResult<Prisma.$Page4FeePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Page4Fee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page4FeeFindFirstArgs} args - Arguments to find a Page4Fee
     * @example
     * // Get one Page4Fee
     * const page4Fee = await prisma.page4Fee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Page4FeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Page4FeeFindFirstArgs<ExtArgs>>
    ): Prisma__Page4FeeClient<$Result.GetResult<Prisma.$Page4FeePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Page4Fee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page4FeeFindFirstOrThrowArgs} args - Arguments to find a Page4Fee
     * @example
     * // Get one Page4Fee
     * const page4Fee = await prisma.page4Fee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Page4FeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Page4FeeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Page4FeeClient<$Result.GetResult<Prisma.$Page4FeePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Page4Fees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page4FeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Page4Fees
     * const page4Fees = await prisma.page4Fee.findMany()
     * 
     * // Get first 10 Page4Fees
     * const page4Fees = await prisma.page4Fee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const page4FeeWithIdOnly = await prisma.page4Fee.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Page4FeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page4FeeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Page4FeePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Page4Fee.
     * @param {Page4FeeCreateArgs} args - Arguments to create a Page4Fee.
     * @example
     * // Create one Page4Fee
     * const Page4Fee = await prisma.page4Fee.create({
     *   data: {
     *     // ... data to create a Page4Fee
     *   }
     * })
     * 
    **/
    create<T extends Page4FeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Page4FeeCreateArgs<ExtArgs>>
    ): Prisma__Page4FeeClient<$Result.GetResult<Prisma.$Page4FeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Page4Fees.
     *     @param {Page4FeeCreateManyArgs} args - Arguments to create many Page4Fees.
     *     @example
     *     // Create many Page4Fees
     *     const page4Fee = await prisma.page4Fee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Page4FeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page4FeeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Page4Fee.
     * @param {Page4FeeDeleteArgs} args - Arguments to delete one Page4Fee.
     * @example
     * // Delete one Page4Fee
     * const Page4Fee = await prisma.page4Fee.delete({
     *   where: {
     *     // ... filter to delete one Page4Fee
     *   }
     * })
     * 
    **/
    delete<T extends Page4FeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Page4FeeDeleteArgs<ExtArgs>>
    ): Prisma__Page4FeeClient<$Result.GetResult<Prisma.$Page4FeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Page4Fee.
     * @param {Page4FeeUpdateArgs} args - Arguments to update one Page4Fee.
     * @example
     * // Update one Page4Fee
     * const page4Fee = await prisma.page4Fee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Page4FeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Page4FeeUpdateArgs<ExtArgs>>
    ): Prisma__Page4FeeClient<$Result.GetResult<Prisma.$Page4FeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Page4Fees.
     * @param {Page4FeeDeleteManyArgs} args - Arguments to filter Page4Fees to delete.
     * @example
     * // Delete a few Page4Fees
     * const { count } = await prisma.page4Fee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Page4FeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Page4FeeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Page4Fees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page4FeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Page4Fees
     * const page4Fee = await prisma.page4Fee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Page4FeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Page4FeeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Page4Fee.
     * @param {Page4FeeUpsertArgs} args - Arguments to update or create a Page4Fee.
     * @example
     * // Update or create a Page4Fee
     * const page4Fee = await prisma.page4Fee.upsert({
     *   create: {
     *     // ... data to create a Page4Fee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page4Fee we want to update
     *   }
     * })
    **/
    upsert<T extends Page4FeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Page4FeeUpsertArgs<ExtArgs>>
    ): Prisma__Page4FeeClient<$Result.GetResult<Prisma.$Page4FeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Page4Fees that matches the filter.
     * @param {Page4FeeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const page4Fee = await prisma.page4Fee.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Page4FeeFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Page4Fee.
     * @param {Page4FeeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const page4Fee = await prisma.page4Fee.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Page4FeeAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Page4Fees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page4FeeCountArgs} args - Arguments to filter Page4Fees to count.
     * @example
     * // Count the number of Page4Fees
     * const count = await prisma.page4Fee.count({
     *   where: {
     *     // ... the filter for the Page4Fees we want to count
     *   }
     * })
    **/
    count<T extends Page4FeeCountArgs>(
      args?: Subset<T, Page4FeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Page4FeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page4Fee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page4FeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Page4FeeAggregateArgs>(args: Subset<T, Page4FeeAggregateArgs>): Prisma.PrismaPromise<GetPage4FeeAggregateType<T>>

    /**
     * Group by Page4Fee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Page4FeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Page4FeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Page4FeeGroupByArgs['orderBy'] }
        : { orderBy?: Page4FeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Page4FeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPage4FeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page4Fee model
   */
  readonly fields: Page4FeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page4Fee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Page4FeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Page4Fee model
   */ 
  interface Page4FeeFieldRefs {
    readonly id: FieldRef<"Page4Fee", 'String'>
    readonly proj_id: FieldRef<"Page4Fee", 'String'>
    readonly proj_abbr_name: FieldRef<"Page4Fee", 'String'>
    readonly data_from_sheet: FieldRef<"Page4Fee", 'Json'>
    readonly data_from_real: FieldRef<"Page4Fee", 'Json'>
    readonly fund_fact_url: FieldRef<"Page4Fee", 'String'>
    readonly buyInfo: FieldRef<"Page4Fee", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Page4Fee findUnique
   */
  export type Page4FeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page4Fee
     */
    select?: Page4FeeSelect<ExtArgs> | null
    /**
     * Filter, which Page4Fee to fetch.
     */
    where: Page4FeeWhereUniqueInput
  }


  /**
   * Page4Fee findUniqueOrThrow
   */
  export type Page4FeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page4Fee
     */
    select?: Page4FeeSelect<ExtArgs> | null
    /**
     * Filter, which Page4Fee to fetch.
     */
    where: Page4FeeWhereUniqueInput
  }


  /**
   * Page4Fee findFirst
   */
  export type Page4FeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page4Fee
     */
    select?: Page4FeeSelect<ExtArgs> | null
    /**
     * Filter, which Page4Fee to fetch.
     */
    where?: Page4FeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page4Fees to fetch.
     */
    orderBy?: Page4FeeOrderByWithRelationInput | Page4FeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Page4Fees.
     */
    cursor?: Page4FeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page4Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page4Fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Page4Fees.
     */
    distinct?: Page4FeeScalarFieldEnum | Page4FeeScalarFieldEnum[]
  }


  /**
   * Page4Fee findFirstOrThrow
   */
  export type Page4FeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page4Fee
     */
    select?: Page4FeeSelect<ExtArgs> | null
    /**
     * Filter, which Page4Fee to fetch.
     */
    where?: Page4FeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page4Fees to fetch.
     */
    orderBy?: Page4FeeOrderByWithRelationInput | Page4FeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Page4Fees.
     */
    cursor?: Page4FeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page4Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page4Fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Page4Fees.
     */
    distinct?: Page4FeeScalarFieldEnum | Page4FeeScalarFieldEnum[]
  }


  /**
   * Page4Fee findMany
   */
  export type Page4FeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page4Fee
     */
    select?: Page4FeeSelect<ExtArgs> | null
    /**
     * Filter, which Page4Fees to fetch.
     */
    where?: Page4FeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Page4Fees to fetch.
     */
    orderBy?: Page4FeeOrderByWithRelationInput | Page4FeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Page4Fees.
     */
    cursor?: Page4FeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Page4Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Page4Fees.
     */
    skip?: number
    distinct?: Page4FeeScalarFieldEnum | Page4FeeScalarFieldEnum[]
  }


  /**
   * Page4Fee create
   */
  export type Page4FeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page4Fee
     */
    select?: Page4FeeSelect<ExtArgs> | null
    /**
     * The data needed to create a Page4Fee.
     */
    data: XOR<Page4FeeCreateInput, Page4FeeUncheckedCreateInput>
  }


  /**
   * Page4Fee createMany
   */
  export type Page4FeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Page4Fees.
     */
    data: Page4FeeCreateManyInput | Page4FeeCreateManyInput[]
  }


  /**
   * Page4Fee update
   */
  export type Page4FeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page4Fee
     */
    select?: Page4FeeSelect<ExtArgs> | null
    /**
     * The data needed to update a Page4Fee.
     */
    data: XOR<Page4FeeUpdateInput, Page4FeeUncheckedUpdateInput>
    /**
     * Choose, which Page4Fee to update.
     */
    where: Page4FeeWhereUniqueInput
  }


  /**
   * Page4Fee updateMany
   */
  export type Page4FeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Page4Fees.
     */
    data: XOR<Page4FeeUpdateManyMutationInput, Page4FeeUncheckedUpdateManyInput>
    /**
     * Filter which Page4Fees to update
     */
    where?: Page4FeeWhereInput
  }


  /**
   * Page4Fee upsert
   */
  export type Page4FeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page4Fee
     */
    select?: Page4FeeSelect<ExtArgs> | null
    /**
     * The filter to search for the Page4Fee to update in case it exists.
     */
    where: Page4FeeWhereUniqueInput
    /**
     * In case the Page4Fee found by the `where` argument doesn't exist, create a new Page4Fee with this data.
     */
    create: XOR<Page4FeeCreateInput, Page4FeeUncheckedCreateInput>
    /**
     * In case the Page4Fee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Page4FeeUpdateInput, Page4FeeUncheckedUpdateInput>
  }


  /**
   * Page4Fee delete
   */
  export type Page4FeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page4Fee
     */
    select?: Page4FeeSelect<ExtArgs> | null
    /**
     * Filter which Page4Fee to delete.
     */
    where: Page4FeeWhereUniqueInput
  }


  /**
   * Page4Fee deleteMany
   */
  export type Page4FeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page4Fees to delete
     */
    where?: Page4FeeWhereInput
  }


  /**
   * Page4Fee findRaw
   */
  export type Page4FeeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Page4Fee aggregateRaw
   */
  export type Page4FeeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Page4Fee without action
   */
  export type Page4FeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page4Fee
     */
    select?: Page4FeeSelect<ExtArgs> | null
  }



  /**
   * Model AllProductInfo
   */

  export type AggregateAllProductInfo = {
    _count: AllProductInfoCountAggregateOutputType | null
    _min: AllProductInfoMinAggregateOutputType | null
    _max: AllProductInfoMaxAggregateOutputType | null
  }

  export type AllProductInfoMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
  }

  export type AllProductInfoMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
  }

  export type AllProductInfoCountAggregateOutputType = {
    id: number
    proj_id: number
    proj_abbr_name: number
    Allinfo: number
    _all: number
  }


  export type AllProductInfoMinAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
  }

  export type AllProductInfoMaxAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
  }

  export type AllProductInfoCountAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    Allinfo?: true
    _all?: true
  }

  export type AllProductInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllProductInfo to aggregate.
     */
    where?: AllProductInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllProductInfos to fetch.
     */
    orderBy?: AllProductInfoOrderByWithRelationInput | AllProductInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllProductInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllProductInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllProductInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AllProductInfos
    **/
    _count?: true | AllProductInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllProductInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllProductInfoMaxAggregateInputType
  }

  export type GetAllProductInfoAggregateType<T extends AllProductInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateAllProductInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllProductInfo[P]>
      : GetScalarType<T[P], AggregateAllProductInfo[P]>
  }




  export type AllProductInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllProductInfoWhereInput
    orderBy?: AllProductInfoOrderByWithAggregationInput | AllProductInfoOrderByWithAggregationInput[]
    by: AllProductInfoScalarFieldEnum[] | AllProductInfoScalarFieldEnum
    having?: AllProductInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllProductInfoCountAggregateInputType | true
    _min?: AllProductInfoMinAggregateInputType
    _max?: AllProductInfoMaxAggregateInputType
  }

  export type AllProductInfoGroupByOutputType = {
    id: string
    proj_id: string
    proj_abbr_name: string
    Allinfo: JsonValue
    _count: AllProductInfoCountAggregateOutputType | null
    _min: AllProductInfoMinAggregateOutputType | null
    _max: AllProductInfoMaxAggregateOutputType | null
  }

  type GetAllProductInfoGroupByPayload<T extends AllProductInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllProductInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllProductInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllProductInfoGroupByOutputType[P]>
            : GetScalarType<T[P], AllProductInfoGroupByOutputType[P]>
        }
      >
    >


  export type AllProductInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    Allinfo?: boolean
  }, ExtArgs["result"]["allProductInfo"]>

  export type AllProductInfoSelectScalar = {
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    Allinfo?: boolean
  }


  export type $AllProductInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AllProductInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      proj_abbr_name: string
      Allinfo: Prisma.JsonValue
    }, ExtArgs["result"]["allProductInfo"]>
    composites: {}
  }


  type AllProductInfoGetPayload<S extends boolean | null | undefined | AllProductInfoDefaultArgs> = $Result.GetResult<Prisma.$AllProductInfoPayload, S>

  type AllProductInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AllProductInfoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AllProductInfoCountAggregateInputType | true
    }

  export interface AllProductInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AllProductInfo'], meta: { name: 'AllProductInfo' } }
    /**
     * Find zero or one AllProductInfo that matches the filter.
     * @param {AllProductInfoFindUniqueArgs} args - Arguments to find a AllProductInfo
     * @example
     * // Get one AllProductInfo
     * const allProductInfo = await prisma.allProductInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AllProductInfoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AllProductInfoFindUniqueArgs<ExtArgs>>
    ): Prisma__AllProductInfoClient<$Result.GetResult<Prisma.$AllProductInfoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AllProductInfo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AllProductInfoFindUniqueOrThrowArgs} args - Arguments to find a AllProductInfo
     * @example
     * // Get one AllProductInfo
     * const allProductInfo = await prisma.allProductInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AllProductInfoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AllProductInfoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AllProductInfoClient<$Result.GetResult<Prisma.$AllProductInfoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AllProductInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllProductInfoFindFirstArgs} args - Arguments to find a AllProductInfo
     * @example
     * // Get one AllProductInfo
     * const allProductInfo = await prisma.allProductInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AllProductInfoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AllProductInfoFindFirstArgs<ExtArgs>>
    ): Prisma__AllProductInfoClient<$Result.GetResult<Prisma.$AllProductInfoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AllProductInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllProductInfoFindFirstOrThrowArgs} args - Arguments to find a AllProductInfo
     * @example
     * // Get one AllProductInfo
     * const allProductInfo = await prisma.allProductInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AllProductInfoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AllProductInfoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AllProductInfoClient<$Result.GetResult<Prisma.$AllProductInfoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AllProductInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllProductInfoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AllProductInfos
     * const allProductInfos = await prisma.allProductInfo.findMany()
     * 
     * // Get first 10 AllProductInfos
     * const allProductInfos = await prisma.allProductInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allProductInfoWithIdOnly = await prisma.allProductInfo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AllProductInfoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AllProductInfoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllProductInfoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AllProductInfo.
     * @param {AllProductInfoCreateArgs} args - Arguments to create a AllProductInfo.
     * @example
     * // Create one AllProductInfo
     * const AllProductInfo = await prisma.allProductInfo.create({
     *   data: {
     *     // ... data to create a AllProductInfo
     *   }
     * })
     * 
    **/
    create<T extends AllProductInfoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AllProductInfoCreateArgs<ExtArgs>>
    ): Prisma__AllProductInfoClient<$Result.GetResult<Prisma.$AllProductInfoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AllProductInfos.
     *     @param {AllProductInfoCreateManyArgs} args - Arguments to create many AllProductInfos.
     *     @example
     *     // Create many AllProductInfos
     *     const allProductInfo = await prisma.allProductInfo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AllProductInfoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AllProductInfoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AllProductInfo.
     * @param {AllProductInfoDeleteArgs} args - Arguments to delete one AllProductInfo.
     * @example
     * // Delete one AllProductInfo
     * const AllProductInfo = await prisma.allProductInfo.delete({
     *   where: {
     *     // ... filter to delete one AllProductInfo
     *   }
     * })
     * 
    **/
    delete<T extends AllProductInfoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AllProductInfoDeleteArgs<ExtArgs>>
    ): Prisma__AllProductInfoClient<$Result.GetResult<Prisma.$AllProductInfoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AllProductInfo.
     * @param {AllProductInfoUpdateArgs} args - Arguments to update one AllProductInfo.
     * @example
     * // Update one AllProductInfo
     * const allProductInfo = await prisma.allProductInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AllProductInfoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AllProductInfoUpdateArgs<ExtArgs>>
    ): Prisma__AllProductInfoClient<$Result.GetResult<Prisma.$AllProductInfoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AllProductInfos.
     * @param {AllProductInfoDeleteManyArgs} args - Arguments to filter AllProductInfos to delete.
     * @example
     * // Delete a few AllProductInfos
     * const { count } = await prisma.allProductInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AllProductInfoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AllProductInfoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllProductInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllProductInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AllProductInfos
     * const allProductInfo = await prisma.allProductInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AllProductInfoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AllProductInfoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AllProductInfo.
     * @param {AllProductInfoUpsertArgs} args - Arguments to update or create a AllProductInfo.
     * @example
     * // Update or create a AllProductInfo
     * const allProductInfo = await prisma.allProductInfo.upsert({
     *   create: {
     *     // ... data to create a AllProductInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AllProductInfo we want to update
     *   }
     * })
    **/
    upsert<T extends AllProductInfoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AllProductInfoUpsertArgs<ExtArgs>>
    ): Prisma__AllProductInfoClient<$Result.GetResult<Prisma.$AllProductInfoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more AllProductInfos that matches the filter.
     * @param {AllProductInfoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const allProductInfo = await prisma.allProductInfo.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AllProductInfoFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AllProductInfo.
     * @param {AllProductInfoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const allProductInfo = await prisma.allProductInfo.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AllProductInfoAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of AllProductInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllProductInfoCountArgs} args - Arguments to filter AllProductInfos to count.
     * @example
     * // Count the number of AllProductInfos
     * const count = await prisma.allProductInfo.count({
     *   where: {
     *     // ... the filter for the AllProductInfos we want to count
     *   }
     * })
    **/
    count<T extends AllProductInfoCountArgs>(
      args?: Subset<T, AllProductInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllProductInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AllProductInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllProductInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllProductInfoAggregateArgs>(args: Subset<T, AllProductInfoAggregateArgs>): Prisma.PrismaPromise<GetAllProductInfoAggregateType<T>>

    /**
     * Group by AllProductInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllProductInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AllProductInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllProductInfoGroupByArgs['orderBy'] }
        : { orderBy?: AllProductInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllProductInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllProductInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AllProductInfo model
   */
  readonly fields: AllProductInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AllProductInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllProductInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AllProductInfo model
   */ 
  interface AllProductInfoFieldRefs {
    readonly id: FieldRef<"AllProductInfo", 'String'>
    readonly proj_id: FieldRef<"AllProductInfo", 'String'>
    readonly proj_abbr_name: FieldRef<"AllProductInfo", 'String'>
    readonly Allinfo: FieldRef<"AllProductInfo", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * AllProductInfo findUnique
   */
  export type AllProductInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllProductInfo
     */
    select?: AllProductInfoSelect<ExtArgs> | null
    /**
     * Filter, which AllProductInfo to fetch.
     */
    where: AllProductInfoWhereUniqueInput
  }


  /**
   * AllProductInfo findUniqueOrThrow
   */
  export type AllProductInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllProductInfo
     */
    select?: AllProductInfoSelect<ExtArgs> | null
    /**
     * Filter, which AllProductInfo to fetch.
     */
    where: AllProductInfoWhereUniqueInput
  }


  /**
   * AllProductInfo findFirst
   */
  export type AllProductInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllProductInfo
     */
    select?: AllProductInfoSelect<ExtArgs> | null
    /**
     * Filter, which AllProductInfo to fetch.
     */
    where?: AllProductInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllProductInfos to fetch.
     */
    orderBy?: AllProductInfoOrderByWithRelationInput | AllProductInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllProductInfos.
     */
    cursor?: AllProductInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllProductInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllProductInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllProductInfos.
     */
    distinct?: AllProductInfoScalarFieldEnum | AllProductInfoScalarFieldEnum[]
  }


  /**
   * AllProductInfo findFirstOrThrow
   */
  export type AllProductInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllProductInfo
     */
    select?: AllProductInfoSelect<ExtArgs> | null
    /**
     * Filter, which AllProductInfo to fetch.
     */
    where?: AllProductInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllProductInfos to fetch.
     */
    orderBy?: AllProductInfoOrderByWithRelationInput | AllProductInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllProductInfos.
     */
    cursor?: AllProductInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllProductInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllProductInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllProductInfos.
     */
    distinct?: AllProductInfoScalarFieldEnum | AllProductInfoScalarFieldEnum[]
  }


  /**
   * AllProductInfo findMany
   */
  export type AllProductInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllProductInfo
     */
    select?: AllProductInfoSelect<ExtArgs> | null
    /**
     * Filter, which AllProductInfos to fetch.
     */
    where?: AllProductInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllProductInfos to fetch.
     */
    orderBy?: AllProductInfoOrderByWithRelationInput | AllProductInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AllProductInfos.
     */
    cursor?: AllProductInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllProductInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllProductInfos.
     */
    skip?: number
    distinct?: AllProductInfoScalarFieldEnum | AllProductInfoScalarFieldEnum[]
  }


  /**
   * AllProductInfo create
   */
  export type AllProductInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllProductInfo
     */
    select?: AllProductInfoSelect<ExtArgs> | null
    /**
     * The data needed to create a AllProductInfo.
     */
    data: XOR<AllProductInfoCreateInput, AllProductInfoUncheckedCreateInput>
  }


  /**
   * AllProductInfo createMany
   */
  export type AllProductInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AllProductInfos.
     */
    data: AllProductInfoCreateManyInput | AllProductInfoCreateManyInput[]
  }


  /**
   * AllProductInfo update
   */
  export type AllProductInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllProductInfo
     */
    select?: AllProductInfoSelect<ExtArgs> | null
    /**
     * The data needed to update a AllProductInfo.
     */
    data: XOR<AllProductInfoUpdateInput, AllProductInfoUncheckedUpdateInput>
    /**
     * Choose, which AllProductInfo to update.
     */
    where: AllProductInfoWhereUniqueInput
  }


  /**
   * AllProductInfo updateMany
   */
  export type AllProductInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AllProductInfos.
     */
    data: XOR<AllProductInfoUpdateManyMutationInput, AllProductInfoUncheckedUpdateManyInput>
    /**
     * Filter which AllProductInfos to update
     */
    where?: AllProductInfoWhereInput
  }


  /**
   * AllProductInfo upsert
   */
  export type AllProductInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllProductInfo
     */
    select?: AllProductInfoSelect<ExtArgs> | null
    /**
     * The filter to search for the AllProductInfo to update in case it exists.
     */
    where: AllProductInfoWhereUniqueInput
    /**
     * In case the AllProductInfo found by the `where` argument doesn't exist, create a new AllProductInfo with this data.
     */
    create: XOR<AllProductInfoCreateInput, AllProductInfoUncheckedCreateInput>
    /**
     * In case the AllProductInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllProductInfoUpdateInput, AllProductInfoUncheckedUpdateInput>
  }


  /**
   * AllProductInfo delete
   */
  export type AllProductInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllProductInfo
     */
    select?: AllProductInfoSelect<ExtArgs> | null
    /**
     * Filter which AllProductInfo to delete.
     */
    where: AllProductInfoWhereUniqueInput
  }


  /**
   * AllProductInfo deleteMany
   */
  export type AllProductInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllProductInfos to delete
     */
    where?: AllProductInfoWhereInput
  }


  /**
   * AllProductInfo findRaw
   */
  export type AllProductInfoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AllProductInfo aggregateRaw
   */
  export type AllProductInfoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AllProductInfo without action
   */
  export type AllProductInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllProductInfo
     */
    select?: AllProductInfoSelect<ExtArgs> | null
  }



  /**
   * Model SearchTest
   */

  export type AggregateSearchTest = {
    _count: SearchTestCountAggregateOutputType | null
    _min: SearchTestMinAggregateOutputType | null
    _max: SearchTestMaxAggregateOutputType | null
  }

  export type SearchTestMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
    proj_name_en: string | null
    proj_name_th: string | null
    unique_id: string | null
    risk_spectrum: string | null
  }

  export type SearchTestMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
    proj_name_en: string | null
    proj_name_th: string | null
    unique_id: string | null
    risk_spectrum: string | null
  }

  export type SearchTestCountAggregateOutputType = {
    id: number
    proj_id: number
    proj_abbr_name: number
    proj_name_en: number
    proj_name_th: number
    unique_id: number
    risk_spectrum: number
    _all: number
  }


  export type SearchTestMinAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    proj_name_en?: true
    proj_name_th?: true
    unique_id?: true
    risk_spectrum?: true
  }

  export type SearchTestMaxAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    proj_name_en?: true
    proj_name_th?: true
    unique_id?: true
    risk_spectrum?: true
  }

  export type SearchTestCountAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    proj_name_en?: true
    proj_name_th?: true
    unique_id?: true
    risk_spectrum?: true
    _all?: true
  }

  export type SearchTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchTest to aggregate.
     */
    where?: SearchTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchTests to fetch.
     */
    orderBy?: SearchTestOrderByWithRelationInput | SearchTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchTests
    **/
    _count?: true | SearchTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchTestMaxAggregateInputType
  }

  export type GetSearchTestAggregateType<T extends SearchTestAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchTest[P]>
      : GetScalarType<T[P], AggregateSearchTest[P]>
  }




  export type SearchTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchTestWhereInput
    orderBy?: SearchTestOrderByWithAggregationInput | SearchTestOrderByWithAggregationInput[]
    by: SearchTestScalarFieldEnum[] | SearchTestScalarFieldEnum
    having?: SearchTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchTestCountAggregateInputType | true
    _min?: SearchTestMinAggregateInputType
    _max?: SearchTestMaxAggregateInputType
  }

  export type SearchTestGroupByOutputType = {
    id: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
    _count: SearchTestCountAggregateOutputType | null
    _min: SearchTestMinAggregateOutputType | null
    _max: SearchTestMaxAggregateOutputType | null
  }

  type GetSearchTestGroupByPayload<T extends SearchTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchTestGroupByOutputType[P]>
            : GetScalarType<T[P], SearchTestGroupByOutputType[P]>
        }
      >
    >


  export type SearchTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    proj_name_en?: boolean
    proj_name_th?: boolean
    unique_id?: boolean
    risk_spectrum?: boolean
  }, ExtArgs["result"]["searchTest"]>

  export type SearchTestSelectScalar = {
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    proj_name_en?: boolean
    proj_name_th?: boolean
    unique_id?: boolean
    risk_spectrum?: boolean
  }


  export type $SearchTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchTest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      proj_abbr_name: string
      proj_name_en: string
      proj_name_th: string
      unique_id: string
      risk_spectrum: string
    }, ExtArgs["result"]["searchTest"]>
    composites: {}
  }


  type SearchTestGetPayload<S extends boolean | null | undefined | SearchTestDefaultArgs> = $Result.GetResult<Prisma.$SearchTestPayload, S>

  type SearchTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SearchTestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SearchTestCountAggregateInputType | true
    }

  export interface SearchTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchTest'], meta: { name: 'SearchTest' } }
    /**
     * Find zero or one SearchTest that matches the filter.
     * @param {SearchTestFindUniqueArgs} args - Arguments to find a SearchTest
     * @example
     * // Get one SearchTest
     * const searchTest = await prisma.searchTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SearchTestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SearchTestFindUniqueArgs<ExtArgs>>
    ): Prisma__SearchTestClient<$Result.GetResult<Prisma.$SearchTestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SearchTest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SearchTestFindUniqueOrThrowArgs} args - Arguments to find a SearchTest
     * @example
     * // Get one SearchTest
     * const searchTest = await prisma.searchTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SearchTestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchTestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SearchTestClient<$Result.GetResult<Prisma.$SearchTestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SearchTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchTestFindFirstArgs} args - Arguments to find a SearchTest
     * @example
     * // Get one SearchTest
     * const searchTest = await prisma.searchTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SearchTestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchTestFindFirstArgs<ExtArgs>>
    ): Prisma__SearchTestClient<$Result.GetResult<Prisma.$SearchTestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SearchTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchTestFindFirstOrThrowArgs} args - Arguments to find a SearchTest
     * @example
     * // Get one SearchTest
     * const searchTest = await prisma.searchTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SearchTestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchTestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SearchTestClient<$Result.GetResult<Prisma.$SearchTestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SearchTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchTestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchTests
     * const searchTests = await prisma.searchTest.findMany()
     * 
     * // Get first 10 SearchTests
     * const searchTests = await prisma.searchTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchTestWithIdOnly = await prisma.searchTest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SearchTestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchTestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchTestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SearchTest.
     * @param {SearchTestCreateArgs} args - Arguments to create a SearchTest.
     * @example
     * // Create one SearchTest
     * const SearchTest = await prisma.searchTest.create({
     *   data: {
     *     // ... data to create a SearchTest
     *   }
     * })
     * 
    **/
    create<T extends SearchTestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SearchTestCreateArgs<ExtArgs>>
    ): Prisma__SearchTestClient<$Result.GetResult<Prisma.$SearchTestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SearchTests.
     *     @param {SearchTestCreateManyArgs} args - Arguments to create many SearchTests.
     *     @example
     *     // Create many SearchTests
     *     const searchTest = await prisma.searchTest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SearchTestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchTestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SearchTest.
     * @param {SearchTestDeleteArgs} args - Arguments to delete one SearchTest.
     * @example
     * // Delete one SearchTest
     * const SearchTest = await prisma.searchTest.delete({
     *   where: {
     *     // ... filter to delete one SearchTest
     *   }
     * })
     * 
    **/
    delete<T extends SearchTestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SearchTestDeleteArgs<ExtArgs>>
    ): Prisma__SearchTestClient<$Result.GetResult<Prisma.$SearchTestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SearchTest.
     * @param {SearchTestUpdateArgs} args - Arguments to update one SearchTest.
     * @example
     * // Update one SearchTest
     * const searchTest = await prisma.searchTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SearchTestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SearchTestUpdateArgs<ExtArgs>>
    ): Prisma__SearchTestClient<$Result.GetResult<Prisma.$SearchTestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SearchTests.
     * @param {SearchTestDeleteManyArgs} args - Arguments to filter SearchTests to delete.
     * @example
     * // Delete a few SearchTests
     * const { count } = await prisma.searchTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SearchTestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SearchTestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchTests
     * const searchTest = await prisma.searchTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SearchTestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SearchTestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SearchTest.
     * @param {SearchTestUpsertArgs} args - Arguments to update or create a SearchTest.
     * @example
     * // Update or create a SearchTest
     * const searchTest = await prisma.searchTest.upsert({
     *   create: {
     *     // ... data to create a SearchTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchTest we want to update
     *   }
     * })
    **/
    upsert<T extends SearchTestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SearchTestUpsertArgs<ExtArgs>>
    ): Prisma__SearchTestClient<$Result.GetResult<Prisma.$SearchTestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more SearchTests that matches the filter.
     * @param {SearchTestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const searchTest = await prisma.searchTest.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SearchTestFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SearchTest.
     * @param {SearchTestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const searchTest = await prisma.searchTest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SearchTestAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of SearchTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchTestCountArgs} args - Arguments to filter SearchTests to count.
     * @example
     * // Count the number of SearchTests
     * const count = await prisma.searchTest.count({
     *   where: {
     *     // ... the filter for the SearchTests we want to count
     *   }
     * })
    **/
    count<T extends SearchTestCountArgs>(
      args?: Subset<T, SearchTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SearchTestAggregateArgs>(args: Subset<T, SearchTestAggregateArgs>): Prisma.PrismaPromise<GetSearchTestAggregateType<T>>

    /**
     * Group by SearchTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SearchTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchTestGroupByArgs['orderBy'] }
        : { orderBy?: SearchTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SearchTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchTest model
   */
  readonly fields: SearchTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SearchTest model
   */ 
  interface SearchTestFieldRefs {
    readonly id: FieldRef<"SearchTest", 'String'>
    readonly proj_id: FieldRef<"SearchTest", 'String'>
    readonly proj_abbr_name: FieldRef<"SearchTest", 'String'>
    readonly proj_name_en: FieldRef<"SearchTest", 'String'>
    readonly proj_name_th: FieldRef<"SearchTest", 'String'>
    readonly unique_id: FieldRef<"SearchTest", 'String'>
    readonly risk_spectrum: FieldRef<"SearchTest", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SearchTest findUnique
   */
  export type SearchTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchTest
     */
    select?: SearchTestSelect<ExtArgs> | null
    /**
     * Filter, which SearchTest to fetch.
     */
    where: SearchTestWhereUniqueInput
  }


  /**
   * SearchTest findUniqueOrThrow
   */
  export type SearchTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchTest
     */
    select?: SearchTestSelect<ExtArgs> | null
    /**
     * Filter, which SearchTest to fetch.
     */
    where: SearchTestWhereUniqueInput
  }


  /**
   * SearchTest findFirst
   */
  export type SearchTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchTest
     */
    select?: SearchTestSelect<ExtArgs> | null
    /**
     * Filter, which SearchTest to fetch.
     */
    where?: SearchTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchTests to fetch.
     */
    orderBy?: SearchTestOrderByWithRelationInput | SearchTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchTests.
     */
    cursor?: SearchTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchTests.
     */
    distinct?: SearchTestScalarFieldEnum | SearchTestScalarFieldEnum[]
  }


  /**
   * SearchTest findFirstOrThrow
   */
  export type SearchTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchTest
     */
    select?: SearchTestSelect<ExtArgs> | null
    /**
     * Filter, which SearchTest to fetch.
     */
    where?: SearchTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchTests to fetch.
     */
    orderBy?: SearchTestOrderByWithRelationInput | SearchTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchTests.
     */
    cursor?: SearchTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchTests.
     */
    distinct?: SearchTestScalarFieldEnum | SearchTestScalarFieldEnum[]
  }


  /**
   * SearchTest findMany
   */
  export type SearchTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchTest
     */
    select?: SearchTestSelect<ExtArgs> | null
    /**
     * Filter, which SearchTests to fetch.
     */
    where?: SearchTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchTests to fetch.
     */
    orderBy?: SearchTestOrderByWithRelationInput | SearchTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchTests.
     */
    cursor?: SearchTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchTests.
     */
    skip?: number
    distinct?: SearchTestScalarFieldEnum | SearchTestScalarFieldEnum[]
  }


  /**
   * SearchTest create
   */
  export type SearchTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchTest
     */
    select?: SearchTestSelect<ExtArgs> | null
    /**
     * The data needed to create a SearchTest.
     */
    data: XOR<SearchTestCreateInput, SearchTestUncheckedCreateInput>
  }


  /**
   * SearchTest createMany
   */
  export type SearchTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchTests.
     */
    data: SearchTestCreateManyInput | SearchTestCreateManyInput[]
  }


  /**
   * SearchTest update
   */
  export type SearchTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchTest
     */
    select?: SearchTestSelect<ExtArgs> | null
    /**
     * The data needed to update a SearchTest.
     */
    data: XOR<SearchTestUpdateInput, SearchTestUncheckedUpdateInput>
    /**
     * Choose, which SearchTest to update.
     */
    where: SearchTestWhereUniqueInput
  }


  /**
   * SearchTest updateMany
   */
  export type SearchTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchTests.
     */
    data: XOR<SearchTestUpdateManyMutationInput, SearchTestUncheckedUpdateManyInput>
    /**
     * Filter which SearchTests to update
     */
    where?: SearchTestWhereInput
  }


  /**
   * SearchTest upsert
   */
  export type SearchTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchTest
     */
    select?: SearchTestSelect<ExtArgs> | null
    /**
     * The filter to search for the SearchTest to update in case it exists.
     */
    where: SearchTestWhereUniqueInput
    /**
     * In case the SearchTest found by the `where` argument doesn't exist, create a new SearchTest with this data.
     */
    create: XOR<SearchTestCreateInput, SearchTestUncheckedCreateInput>
    /**
     * In case the SearchTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchTestUpdateInput, SearchTestUncheckedUpdateInput>
  }


  /**
   * SearchTest delete
   */
  export type SearchTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchTest
     */
    select?: SearchTestSelect<ExtArgs> | null
    /**
     * Filter which SearchTest to delete.
     */
    where: SearchTestWhereUniqueInput
  }


  /**
   * SearchTest deleteMany
   */
  export type SearchTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchTests to delete
     */
    where?: SearchTestWhereInput
  }


  /**
   * SearchTest findRaw
   */
  export type SearchTestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * SearchTest aggregateRaw
   */
  export type SearchTestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * SearchTest without action
   */
  export type SearchTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchTest
     */
    select?: SearchTestSelect<ExtArgs> | null
  }



  /**
   * Model ProductDetail
   */

  export type AggregateProductDetail = {
    _count: ProductDetailCountAggregateOutputType | null
    _min: ProductDetailMinAggregateOutputType | null
    _max: ProductDetailMaxAggregateOutputType | null
  }

  export type ProductDetailMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
    proj_name_en: string | null
    proj_name_th: string | null
    unique_id: string | null
    risk_spectrum: string | null
    companyTH: string | null
    companyEN: string | null
  }

  export type ProductDetailMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
    proj_name_en: string | null
    proj_name_th: string | null
    unique_id: string | null
    risk_spectrum: string | null
    companyTH: string | null
    companyEN: string | null
  }

  export type ProductDetailCountAggregateOutputType = {
    id: number
    proj_id: number
    proj_abbr_name: number
    proj_name_en: number
    proj_name_th: number
    unique_id: number
    risk_spectrum: number
    companyTH: number
    companyEN: number
    fundType: number
    fund_resYTD: number
    Allinfo: number
    _all: number
  }


  export type ProductDetailMinAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    proj_name_en?: true
    proj_name_th?: true
    unique_id?: true
    risk_spectrum?: true
    companyTH?: true
    companyEN?: true
  }

  export type ProductDetailMaxAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    proj_name_en?: true
    proj_name_th?: true
    unique_id?: true
    risk_spectrum?: true
    companyTH?: true
    companyEN?: true
  }

  export type ProductDetailCountAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    proj_name_en?: true
    proj_name_th?: true
    unique_id?: true
    risk_spectrum?: true
    companyTH?: true
    companyEN?: true
    fundType?: true
    fund_resYTD?: true
    Allinfo?: true
    _all?: true
  }

  export type ProductDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDetail to aggregate.
     */
    where?: ProductDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDetails to fetch.
     */
    orderBy?: ProductDetailOrderByWithRelationInput | ProductDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductDetails
    **/
    _count?: true | ProductDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductDetailMaxAggregateInputType
  }

  export type GetProductDetailAggregateType<T extends ProductDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateProductDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductDetail[P]>
      : GetScalarType<T[P], AggregateProductDetail[P]>
  }




  export type ProductDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDetailWhereInput
    orderBy?: ProductDetailOrderByWithAggregationInput | ProductDetailOrderByWithAggregationInput[]
    by: ProductDetailScalarFieldEnum[] | ProductDetailScalarFieldEnum
    having?: ProductDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductDetailCountAggregateInputType | true
    _min?: ProductDetailMinAggregateInputType
    _max?: ProductDetailMaxAggregateInputType
  }

  export type ProductDetailGroupByOutputType = {
    id: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
    companyTH: string
    companyEN: string
    fundType: string[]
    fund_resYTD: JsonValue
    Allinfo: JsonValue
    _count: ProductDetailCountAggregateOutputType | null
    _min: ProductDetailMinAggregateOutputType | null
    _max: ProductDetailMaxAggregateOutputType | null
  }

  type GetProductDetailGroupByPayload<T extends ProductDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ProductDetailGroupByOutputType[P]>
        }
      >
    >


  export type ProductDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    proj_name_en?: boolean
    proj_name_th?: boolean
    unique_id?: boolean
    risk_spectrum?: boolean
    companyTH?: boolean
    companyEN?: boolean
    fundType?: boolean
    fund_resYTD?: boolean
    Allinfo?: boolean
  }, ExtArgs["result"]["productDetail"]>

  export type ProductDetailSelectScalar = {
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    proj_name_en?: boolean
    proj_name_th?: boolean
    unique_id?: boolean
    risk_spectrum?: boolean
    companyTH?: boolean
    companyEN?: boolean
    fundType?: boolean
    fund_resYTD?: boolean
    Allinfo?: boolean
  }


  export type $ProductDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductDetail"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      proj_abbr_name: string
      proj_name_en: string
      proj_name_th: string
      unique_id: string
      risk_spectrum: string
      companyTH: string
      companyEN: string
      fundType: string[]
      fund_resYTD: Prisma.JsonValue
      Allinfo: Prisma.JsonValue
    }, ExtArgs["result"]["productDetail"]>
    composites: {}
  }


  type ProductDetailGetPayload<S extends boolean | null | undefined | ProductDetailDefaultArgs> = $Result.GetResult<Prisma.$ProductDetailPayload, S>

  type ProductDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductDetailCountAggregateInputType | true
    }

  export interface ProductDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductDetail'], meta: { name: 'ProductDetail' } }
    /**
     * Find zero or one ProductDetail that matches the filter.
     * @param {ProductDetailFindUniqueArgs} args - Arguments to find a ProductDetail
     * @example
     * // Get one ProductDetail
     * const productDetail = await prisma.productDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductDetailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDetailFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductDetail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductDetailFindUniqueOrThrowArgs} args - Arguments to find a ProductDetail
     * @example
     * // Get one ProductDetail
     * const productDetail = await prisma.productDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductDetailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDetailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailFindFirstArgs} args - Arguments to find a ProductDetail
     * @example
     * // Get one ProductDetail
     * const productDetail = await prisma.productDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductDetailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDetailFindFirstArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailFindFirstOrThrowArgs} args - Arguments to find a ProductDetail
     * @example
     * // Get one ProductDetail
     * const productDetail = await prisma.productDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductDetailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDetailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductDetails
     * const productDetails = await prisma.productDetail.findMany()
     * 
     * // Get first 10 ProductDetails
     * const productDetails = await prisma.productDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productDetailWithIdOnly = await prisma.productDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductDetailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDetailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductDetail.
     * @param {ProductDetailCreateArgs} args - Arguments to create a ProductDetail.
     * @example
     * // Create one ProductDetail
     * const ProductDetail = await prisma.productDetail.create({
     *   data: {
     *     // ... data to create a ProductDetail
     *   }
     * })
     * 
    **/
    create<T extends ProductDetailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDetailCreateArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductDetails.
     *     @param {ProductDetailCreateManyArgs} args - Arguments to create many ProductDetails.
     *     @example
     *     // Create many ProductDetails
     *     const productDetail = await prisma.productDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductDetailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDetailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductDetail.
     * @param {ProductDetailDeleteArgs} args - Arguments to delete one ProductDetail.
     * @example
     * // Delete one ProductDetail
     * const ProductDetail = await prisma.productDetail.delete({
     *   where: {
     *     // ... filter to delete one ProductDetail
     *   }
     * })
     * 
    **/
    delete<T extends ProductDetailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDetailDeleteArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductDetail.
     * @param {ProductDetailUpdateArgs} args - Arguments to update one ProductDetail.
     * @example
     * // Update one ProductDetail
     * const productDetail = await prisma.productDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductDetailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDetailUpdateArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductDetails.
     * @param {ProductDetailDeleteManyArgs} args - Arguments to filter ProductDetails to delete.
     * @example
     * // Delete a few ProductDetails
     * const { count } = await prisma.productDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDetailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDetailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductDetails
     * const productDetail = await prisma.productDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductDetailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDetailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductDetail.
     * @param {ProductDetailUpsertArgs} args - Arguments to update or create a ProductDetail.
     * @example
     * // Update or create a ProductDetail
     * const productDetail = await prisma.productDetail.upsert({
     *   create: {
     *     // ... data to create a ProductDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductDetail we want to update
     *   }
     * })
    **/
    upsert<T extends ProductDetailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDetailUpsertArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ProductDetails that matches the filter.
     * @param {ProductDetailFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productDetail = await prisma.productDetail.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProductDetailFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductDetail.
     * @param {ProductDetailAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productDetail = await prisma.productDetail.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProductDetailAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ProductDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailCountArgs} args - Arguments to filter ProductDetails to count.
     * @example
     * // Count the number of ProductDetails
     * const count = await prisma.productDetail.count({
     *   where: {
     *     // ... the filter for the ProductDetails we want to count
     *   }
     * })
    **/
    count<T extends ProductDetailCountArgs>(
      args?: Subset<T, ProductDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductDetailAggregateArgs>(args: Subset<T, ProductDetailAggregateArgs>): Prisma.PrismaPromise<GetProductDetailAggregateType<T>>

    /**
     * Group by ProductDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductDetailGroupByArgs['orderBy'] }
        : { orderBy?: ProductDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductDetail model
   */
  readonly fields: ProductDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductDetail model
   */ 
  interface ProductDetailFieldRefs {
    readonly id: FieldRef<"ProductDetail", 'String'>
    readonly proj_id: FieldRef<"ProductDetail", 'String'>
    readonly proj_abbr_name: FieldRef<"ProductDetail", 'String'>
    readonly proj_name_en: FieldRef<"ProductDetail", 'String'>
    readonly proj_name_th: FieldRef<"ProductDetail", 'String'>
    readonly unique_id: FieldRef<"ProductDetail", 'String'>
    readonly risk_spectrum: FieldRef<"ProductDetail", 'String'>
    readonly companyTH: FieldRef<"ProductDetail", 'String'>
    readonly companyEN: FieldRef<"ProductDetail", 'String'>
    readonly fundType: FieldRef<"ProductDetail", 'String[]'>
    readonly fund_resYTD: FieldRef<"ProductDetail", 'Json'>
    readonly Allinfo: FieldRef<"ProductDetail", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * ProductDetail findUnique
   */
  export type ProductDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Filter, which ProductDetail to fetch.
     */
    where: ProductDetailWhereUniqueInput
  }


  /**
   * ProductDetail findUniqueOrThrow
   */
  export type ProductDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Filter, which ProductDetail to fetch.
     */
    where: ProductDetailWhereUniqueInput
  }


  /**
   * ProductDetail findFirst
   */
  export type ProductDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Filter, which ProductDetail to fetch.
     */
    where?: ProductDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDetails to fetch.
     */
    orderBy?: ProductDetailOrderByWithRelationInput | ProductDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDetails.
     */
    cursor?: ProductDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDetails.
     */
    distinct?: ProductDetailScalarFieldEnum | ProductDetailScalarFieldEnum[]
  }


  /**
   * ProductDetail findFirstOrThrow
   */
  export type ProductDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Filter, which ProductDetail to fetch.
     */
    where?: ProductDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDetails to fetch.
     */
    orderBy?: ProductDetailOrderByWithRelationInput | ProductDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDetails.
     */
    cursor?: ProductDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDetails.
     */
    distinct?: ProductDetailScalarFieldEnum | ProductDetailScalarFieldEnum[]
  }


  /**
   * ProductDetail findMany
   */
  export type ProductDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Filter, which ProductDetails to fetch.
     */
    where?: ProductDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDetails to fetch.
     */
    orderBy?: ProductDetailOrderByWithRelationInput | ProductDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductDetails.
     */
    cursor?: ProductDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDetails.
     */
    skip?: number
    distinct?: ProductDetailScalarFieldEnum | ProductDetailScalarFieldEnum[]
  }


  /**
   * ProductDetail create
   */
  export type ProductDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * The data needed to create a ProductDetail.
     */
    data: XOR<ProductDetailCreateInput, ProductDetailUncheckedCreateInput>
  }


  /**
   * ProductDetail createMany
   */
  export type ProductDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductDetails.
     */
    data: ProductDetailCreateManyInput | ProductDetailCreateManyInput[]
  }


  /**
   * ProductDetail update
   */
  export type ProductDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * The data needed to update a ProductDetail.
     */
    data: XOR<ProductDetailUpdateInput, ProductDetailUncheckedUpdateInput>
    /**
     * Choose, which ProductDetail to update.
     */
    where: ProductDetailWhereUniqueInput
  }


  /**
   * ProductDetail updateMany
   */
  export type ProductDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductDetails.
     */
    data: XOR<ProductDetailUpdateManyMutationInput, ProductDetailUncheckedUpdateManyInput>
    /**
     * Filter which ProductDetails to update
     */
    where?: ProductDetailWhereInput
  }


  /**
   * ProductDetail upsert
   */
  export type ProductDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * The filter to search for the ProductDetail to update in case it exists.
     */
    where: ProductDetailWhereUniqueInput
    /**
     * In case the ProductDetail found by the `where` argument doesn't exist, create a new ProductDetail with this data.
     */
    create: XOR<ProductDetailCreateInput, ProductDetailUncheckedCreateInput>
    /**
     * In case the ProductDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductDetailUpdateInput, ProductDetailUncheckedUpdateInput>
  }


  /**
   * ProductDetail delete
   */
  export type ProductDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Filter which ProductDetail to delete.
     */
    where: ProductDetailWhereUniqueInput
  }


  /**
   * ProductDetail deleteMany
   */
  export type ProductDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDetails to delete
     */
    where?: ProductDetailWhereInput
  }


  /**
   * ProductDetail findRaw
   */
  export type ProductDetailFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ProductDetail aggregateRaw
   */
  export type ProductDetailAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ProductDetail without action
   */
  export type ProductDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const ProductScalarFieldEnum: {
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
    feefunds: 'feefunds'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    user: 'user',
    proj_abbr_name_list: 'proj_abbr_name_list',
    product_json_list: 'product_json_list'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const Page1compareinfomationScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    proj_abbr_name: 'proj_abbr_name',
    compareinfomation: 'compareinfomation'
  };

  export type Page1compareinfomationScalarFieldEnum = (typeof Page1compareinfomationScalarFieldEnum)[keyof typeof Page1compareinfomationScalarFieldEnum]


  export const Page2Operating_results_and_dividendsScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    proj_abbr_name: 'proj_abbr_name',
    operating_results: 'operating_results'
  };

  export type Page2Operating_results_and_dividendsScalarFieldEnum = (typeof Page2Operating_results_and_dividendsScalarFieldEnum)[keyof typeof Page2Operating_results_and_dividendsScalarFieldEnum]


  export const Page3topfiveCompareportScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    proj_abbr_name: 'proj_abbr_name',
    top_five_holding: 'top_five_holding'
  };

  export type Page3topfiveCompareportScalarFieldEnum = (typeof Page3topfiveCompareportScalarFieldEnum)[keyof typeof Page3topfiveCompareportScalarFieldEnum]


  export const Page3typeCompareportScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    proj_abbr_name: 'proj_abbr_name',
    type_data: 'type_data'
  };

  export type Page3typeCompareportScalarFieldEnum = (typeof Page3typeCompareportScalarFieldEnum)[keyof typeof Page3typeCompareportScalarFieldEnum]


  export const Page3Investment_proportionCompareportScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    proj_abbr_name: 'proj_abbr_name',
    Investment_proportion_data: 'Investment_proportion_data'
  };

  export type Page3Investment_proportionCompareportScalarFieldEnum = (typeof Page3Investment_proportionCompareportScalarFieldEnum)[keyof typeof Page3Investment_proportionCompareportScalarFieldEnum]


  export const Page4FeeScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    proj_abbr_name: 'proj_abbr_name',
    data_from_sheet: 'data_from_sheet',
    data_from_real: 'data_from_real',
    fund_fact_url: 'fund_fact_url',
    buyInfo: 'buyInfo'
  };

  export type Page4FeeScalarFieldEnum = (typeof Page4FeeScalarFieldEnum)[keyof typeof Page4FeeScalarFieldEnum]


  export const AllProductInfoScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    proj_abbr_name: 'proj_abbr_name',
    Allinfo: 'Allinfo'
  };

  export type AllProductInfoScalarFieldEnum = (typeof AllProductInfoScalarFieldEnum)[keyof typeof AllProductInfoScalarFieldEnum]


  export const SearchTestScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    proj_abbr_name: 'proj_abbr_name',
    proj_name_en: 'proj_name_en',
    proj_name_th: 'proj_name_th',
    unique_id: 'unique_id',
    risk_spectrum: 'risk_spectrum'
  };

  export type SearchTestScalarFieldEnum = (typeof SearchTestScalarFieldEnum)[keyof typeof SearchTestScalarFieldEnum]


  export const ProductDetailScalarFieldEnum: {
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
    Allinfo: 'Allinfo'
  };

  export type ProductDetailScalarFieldEnum = (typeof ProductDetailScalarFieldEnum)[keyof typeof ProductDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    proj_id?: StringFilter<"Product"> | string
    proj_abbr_name?: StringFilter<"Product"> | string
    proj_name_en?: StringFilter<"Product"> | string
    proj_name_th?: StringFilter<"Product"> | string
    unique_id?: StringFilter<"Product"> | string
    risk_spectrum?: StringFilter<"Product"> | string
    companyTH?: StringFilter<"Product"> | string
    companyEN?: StringFilter<"Product"> | string
    Allinfo?: JsonFilter<"Product">
    feefunds?: StringNullableListFilter<"Product">
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
    companyTH?: SortOrder
    companyEN?: SortOrder
    Allinfo?: SortOrder
    feefunds?: SortOrder
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    proj_abbr_name?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    proj_name_en?: StringFilter<"Product"> | string
    proj_name_th?: StringFilter<"Product"> | string
    unique_id?: StringFilter<"Product"> | string
    risk_spectrum?: StringFilter<"Product"> | string
    companyTH?: StringFilter<"Product"> | string
    companyEN?: StringFilter<"Product"> | string
    Allinfo?: JsonFilter<"Product">
    feefunds?: StringNullableListFilter<"Product">
  }, "id" | "proj_id" | "proj_abbr_name">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
    companyTH?: SortOrder
    companyEN?: SortOrder
    Allinfo?: SortOrder
    feefunds?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    proj_id?: StringWithAggregatesFilter<"Product"> | string
    proj_abbr_name?: StringWithAggregatesFilter<"Product"> | string
    proj_name_en?: StringWithAggregatesFilter<"Product"> | string
    proj_name_th?: StringWithAggregatesFilter<"Product"> | string
    unique_id?: StringWithAggregatesFilter<"Product"> | string
    risk_spectrum?: StringWithAggregatesFilter<"Product"> | string
    companyTH?: StringWithAggregatesFilter<"Product"> | string
    companyEN?: StringWithAggregatesFilter<"Product"> | string
    Allinfo?: JsonWithAggregatesFilter<"Product">
    feefunds?: StringNullableListFilter<"Product">
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    user?: StringFilter<"Favorite"> | string
    proj_abbr_name_list?: StringNullableListFilter<"Favorite">
    product_json_list?: JsonNullableListFilter<"Favorite">
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    user?: SortOrder
    proj_abbr_name_list?: SortOrder
    product_json_list?: SortOrder
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user?: string
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    proj_abbr_name_list?: StringNullableListFilter<"Favorite">
    product_json_list?: JsonNullableListFilter<"Favorite">
  }, "id" | "user">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    proj_abbr_name_list?: SortOrder
    product_json_list?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    user?: StringWithAggregatesFilter<"Favorite"> | string
    proj_abbr_name_list?: StringNullableListFilter<"Favorite">
    product_json_list?: JsonNullableListFilter<"Favorite">
  }

  export type Page1compareinfomationWhereInput = {
    AND?: Page1compareinfomationWhereInput | Page1compareinfomationWhereInput[]
    OR?: Page1compareinfomationWhereInput[]
    NOT?: Page1compareinfomationWhereInput | Page1compareinfomationWhereInput[]
    id?: StringFilter<"Page1compareinfomation"> | string
    proj_id?: StringFilter<"Page1compareinfomation"> | string
    proj_abbr_name?: StringFilter<"Page1compareinfomation"> | string
    compareinfomation?: JsonFilter<"Page1compareinfomation">
  }

  export type Page1compareinfomationOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    compareinfomation?: SortOrder
  }

  export type Page1compareinfomationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    proj_abbr_name?: string
    AND?: Page1compareinfomationWhereInput | Page1compareinfomationWhereInput[]
    OR?: Page1compareinfomationWhereInput[]
    NOT?: Page1compareinfomationWhereInput | Page1compareinfomationWhereInput[]
    compareinfomation?: JsonFilter<"Page1compareinfomation">
  }, "id" | "proj_id" | "proj_abbr_name">

  export type Page1compareinfomationOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    compareinfomation?: SortOrder
    _count?: Page1compareinfomationCountOrderByAggregateInput
    _max?: Page1compareinfomationMaxOrderByAggregateInput
    _min?: Page1compareinfomationMinOrderByAggregateInput
  }

  export type Page1compareinfomationScalarWhereWithAggregatesInput = {
    AND?: Page1compareinfomationScalarWhereWithAggregatesInput | Page1compareinfomationScalarWhereWithAggregatesInput[]
    OR?: Page1compareinfomationScalarWhereWithAggregatesInput[]
    NOT?: Page1compareinfomationScalarWhereWithAggregatesInput | Page1compareinfomationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page1compareinfomation"> | string
    proj_id?: StringWithAggregatesFilter<"Page1compareinfomation"> | string
    proj_abbr_name?: StringWithAggregatesFilter<"Page1compareinfomation"> | string
    compareinfomation?: JsonWithAggregatesFilter<"Page1compareinfomation">
  }

  export type Page2Operating_results_and_dividendsWhereInput = {
    AND?: Page2Operating_results_and_dividendsWhereInput | Page2Operating_results_and_dividendsWhereInput[]
    OR?: Page2Operating_results_and_dividendsWhereInput[]
    NOT?: Page2Operating_results_and_dividendsWhereInput | Page2Operating_results_and_dividendsWhereInput[]
    id?: StringFilter<"Page2Operating_results_and_dividends"> | string
    proj_id?: StringFilter<"Page2Operating_results_and_dividends"> | string
    proj_abbr_name?: StringFilter<"Page2Operating_results_and_dividends"> | string
    operating_results?: JsonFilter<"Page2Operating_results_and_dividends">
  }

  export type Page2Operating_results_and_dividendsOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    operating_results?: SortOrder
  }

  export type Page2Operating_results_and_dividendsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    proj_abbr_name?: string
    AND?: Page2Operating_results_and_dividendsWhereInput | Page2Operating_results_and_dividendsWhereInput[]
    OR?: Page2Operating_results_and_dividendsWhereInput[]
    NOT?: Page2Operating_results_and_dividendsWhereInput | Page2Operating_results_and_dividendsWhereInput[]
    operating_results?: JsonFilter<"Page2Operating_results_and_dividends">
  }, "id" | "proj_id" | "proj_abbr_name">

  export type Page2Operating_results_and_dividendsOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    operating_results?: SortOrder
    _count?: Page2Operating_results_and_dividendsCountOrderByAggregateInput
    _max?: Page2Operating_results_and_dividendsMaxOrderByAggregateInput
    _min?: Page2Operating_results_and_dividendsMinOrderByAggregateInput
  }

  export type Page2Operating_results_and_dividendsScalarWhereWithAggregatesInput = {
    AND?: Page2Operating_results_and_dividendsScalarWhereWithAggregatesInput | Page2Operating_results_and_dividendsScalarWhereWithAggregatesInput[]
    OR?: Page2Operating_results_and_dividendsScalarWhereWithAggregatesInput[]
    NOT?: Page2Operating_results_and_dividendsScalarWhereWithAggregatesInput | Page2Operating_results_and_dividendsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page2Operating_results_and_dividends"> | string
    proj_id?: StringWithAggregatesFilter<"Page2Operating_results_and_dividends"> | string
    proj_abbr_name?: StringWithAggregatesFilter<"Page2Operating_results_and_dividends"> | string
    operating_results?: JsonWithAggregatesFilter<"Page2Operating_results_and_dividends">
  }

  export type Page3topfiveCompareportWhereInput = {
    AND?: Page3topfiveCompareportWhereInput | Page3topfiveCompareportWhereInput[]
    OR?: Page3topfiveCompareportWhereInput[]
    NOT?: Page3topfiveCompareportWhereInput | Page3topfiveCompareportWhereInput[]
    id?: StringFilter<"Page3topfiveCompareport"> | string
    proj_id?: StringFilter<"Page3topfiveCompareport"> | string
    proj_abbr_name?: StringFilter<"Page3topfiveCompareport"> | string
    top_five_holding?: JsonFilter<"Page3topfiveCompareport">
  }

  export type Page3topfiveCompareportOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    top_five_holding?: SortOrder
  }

  export type Page3topfiveCompareportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    proj_abbr_name?: string
    AND?: Page3topfiveCompareportWhereInput | Page3topfiveCompareportWhereInput[]
    OR?: Page3topfiveCompareportWhereInput[]
    NOT?: Page3topfiveCompareportWhereInput | Page3topfiveCompareportWhereInput[]
    top_five_holding?: JsonFilter<"Page3topfiveCompareport">
  }, "id" | "proj_id" | "proj_abbr_name">

  export type Page3topfiveCompareportOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    top_five_holding?: SortOrder
    _count?: Page3topfiveCompareportCountOrderByAggregateInput
    _max?: Page3topfiveCompareportMaxOrderByAggregateInput
    _min?: Page3topfiveCompareportMinOrderByAggregateInput
  }

  export type Page3topfiveCompareportScalarWhereWithAggregatesInput = {
    AND?: Page3topfiveCompareportScalarWhereWithAggregatesInput | Page3topfiveCompareportScalarWhereWithAggregatesInput[]
    OR?: Page3topfiveCompareportScalarWhereWithAggregatesInput[]
    NOT?: Page3topfiveCompareportScalarWhereWithAggregatesInput | Page3topfiveCompareportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page3topfiveCompareport"> | string
    proj_id?: StringWithAggregatesFilter<"Page3topfiveCompareport"> | string
    proj_abbr_name?: StringWithAggregatesFilter<"Page3topfiveCompareport"> | string
    top_five_holding?: JsonWithAggregatesFilter<"Page3topfiveCompareport">
  }

  export type Page3typeCompareportWhereInput = {
    AND?: Page3typeCompareportWhereInput | Page3typeCompareportWhereInput[]
    OR?: Page3typeCompareportWhereInput[]
    NOT?: Page3typeCompareportWhereInput | Page3typeCompareportWhereInput[]
    id?: StringFilter<"Page3typeCompareport"> | string
    proj_id?: StringFilter<"Page3typeCompareport"> | string
    proj_abbr_name?: StringFilter<"Page3typeCompareport"> | string
    type_data?: JsonFilter<"Page3typeCompareport">
  }

  export type Page3typeCompareportOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    type_data?: SortOrder
  }

  export type Page3typeCompareportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    proj_abbr_name?: string
    AND?: Page3typeCompareportWhereInput | Page3typeCompareportWhereInput[]
    OR?: Page3typeCompareportWhereInput[]
    NOT?: Page3typeCompareportWhereInput | Page3typeCompareportWhereInput[]
    type_data?: JsonFilter<"Page3typeCompareport">
  }, "id" | "proj_id" | "proj_abbr_name">

  export type Page3typeCompareportOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    type_data?: SortOrder
    _count?: Page3typeCompareportCountOrderByAggregateInput
    _max?: Page3typeCompareportMaxOrderByAggregateInput
    _min?: Page3typeCompareportMinOrderByAggregateInput
  }

  export type Page3typeCompareportScalarWhereWithAggregatesInput = {
    AND?: Page3typeCompareportScalarWhereWithAggregatesInput | Page3typeCompareportScalarWhereWithAggregatesInput[]
    OR?: Page3typeCompareportScalarWhereWithAggregatesInput[]
    NOT?: Page3typeCompareportScalarWhereWithAggregatesInput | Page3typeCompareportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page3typeCompareport"> | string
    proj_id?: StringWithAggregatesFilter<"Page3typeCompareport"> | string
    proj_abbr_name?: StringWithAggregatesFilter<"Page3typeCompareport"> | string
    type_data?: JsonWithAggregatesFilter<"Page3typeCompareport">
  }

  export type Page3Investment_proportionCompareportWhereInput = {
    AND?: Page3Investment_proportionCompareportWhereInput | Page3Investment_proportionCompareportWhereInput[]
    OR?: Page3Investment_proportionCompareportWhereInput[]
    NOT?: Page3Investment_proportionCompareportWhereInput | Page3Investment_proportionCompareportWhereInput[]
    id?: StringFilter<"Page3Investment_proportionCompareport"> | string
    proj_id?: StringFilter<"Page3Investment_proportionCompareport"> | string
    proj_abbr_name?: StringFilter<"Page3Investment_proportionCompareport"> | string
    Investment_proportion_data?: JsonFilter<"Page3Investment_proportionCompareport">
  }

  export type Page3Investment_proportionCompareportOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    Investment_proportion_data?: SortOrder
  }

  export type Page3Investment_proportionCompareportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    proj_abbr_name?: string
    AND?: Page3Investment_proportionCompareportWhereInput | Page3Investment_proportionCompareportWhereInput[]
    OR?: Page3Investment_proportionCompareportWhereInput[]
    NOT?: Page3Investment_proportionCompareportWhereInput | Page3Investment_proportionCompareportWhereInput[]
    Investment_proportion_data?: JsonFilter<"Page3Investment_proportionCompareport">
  }, "id" | "proj_id" | "proj_abbr_name">

  export type Page3Investment_proportionCompareportOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    Investment_proportion_data?: SortOrder
    _count?: Page3Investment_proportionCompareportCountOrderByAggregateInput
    _max?: Page3Investment_proportionCompareportMaxOrderByAggregateInput
    _min?: Page3Investment_proportionCompareportMinOrderByAggregateInput
  }

  export type Page3Investment_proportionCompareportScalarWhereWithAggregatesInput = {
    AND?: Page3Investment_proportionCompareportScalarWhereWithAggregatesInput | Page3Investment_proportionCompareportScalarWhereWithAggregatesInput[]
    OR?: Page3Investment_proportionCompareportScalarWhereWithAggregatesInput[]
    NOT?: Page3Investment_proportionCompareportScalarWhereWithAggregatesInput | Page3Investment_proportionCompareportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page3Investment_proportionCompareport"> | string
    proj_id?: StringWithAggregatesFilter<"Page3Investment_proportionCompareport"> | string
    proj_abbr_name?: StringWithAggregatesFilter<"Page3Investment_proportionCompareport"> | string
    Investment_proportion_data?: JsonWithAggregatesFilter<"Page3Investment_proportionCompareport">
  }

  export type Page4FeeWhereInput = {
    AND?: Page4FeeWhereInput | Page4FeeWhereInput[]
    OR?: Page4FeeWhereInput[]
    NOT?: Page4FeeWhereInput | Page4FeeWhereInput[]
    id?: StringFilter<"Page4Fee"> | string
    proj_id?: StringFilter<"Page4Fee"> | string
    proj_abbr_name?: StringFilter<"Page4Fee"> | string
    data_from_sheet?: JsonFilter<"Page4Fee">
    data_from_real?: JsonFilter<"Page4Fee">
    fund_fact_url?: StringFilter<"Page4Fee"> | string
    buyInfo?: JsonFilter<"Page4Fee">
  }

  export type Page4FeeOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    data_from_sheet?: SortOrder
    data_from_real?: SortOrder
    fund_fact_url?: SortOrder
    buyInfo?: SortOrder
  }

  export type Page4FeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    proj_abbr_name?: string
    AND?: Page4FeeWhereInput | Page4FeeWhereInput[]
    OR?: Page4FeeWhereInput[]
    NOT?: Page4FeeWhereInput | Page4FeeWhereInput[]
    data_from_sheet?: JsonFilter<"Page4Fee">
    data_from_real?: JsonFilter<"Page4Fee">
    fund_fact_url?: StringFilter<"Page4Fee"> | string
    buyInfo?: JsonFilter<"Page4Fee">
  }, "id" | "proj_id" | "proj_abbr_name">

  export type Page4FeeOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    data_from_sheet?: SortOrder
    data_from_real?: SortOrder
    fund_fact_url?: SortOrder
    buyInfo?: SortOrder
    _count?: Page4FeeCountOrderByAggregateInput
    _max?: Page4FeeMaxOrderByAggregateInput
    _min?: Page4FeeMinOrderByAggregateInput
  }

  export type Page4FeeScalarWhereWithAggregatesInput = {
    AND?: Page4FeeScalarWhereWithAggregatesInput | Page4FeeScalarWhereWithAggregatesInput[]
    OR?: Page4FeeScalarWhereWithAggregatesInput[]
    NOT?: Page4FeeScalarWhereWithAggregatesInput | Page4FeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page4Fee"> | string
    proj_id?: StringWithAggregatesFilter<"Page4Fee"> | string
    proj_abbr_name?: StringWithAggregatesFilter<"Page4Fee"> | string
    data_from_sheet?: JsonWithAggregatesFilter<"Page4Fee">
    data_from_real?: JsonWithAggregatesFilter<"Page4Fee">
    fund_fact_url?: StringWithAggregatesFilter<"Page4Fee"> | string
    buyInfo?: JsonWithAggregatesFilter<"Page4Fee">
  }

  export type AllProductInfoWhereInput = {
    AND?: AllProductInfoWhereInput | AllProductInfoWhereInput[]
    OR?: AllProductInfoWhereInput[]
    NOT?: AllProductInfoWhereInput | AllProductInfoWhereInput[]
    id?: StringFilter<"AllProductInfo"> | string
    proj_id?: StringFilter<"AllProductInfo"> | string
    proj_abbr_name?: StringFilter<"AllProductInfo"> | string
    Allinfo?: JsonFilter<"AllProductInfo">
  }

  export type AllProductInfoOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    Allinfo?: SortOrder
  }

  export type AllProductInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    proj_abbr_name?: string
    AND?: AllProductInfoWhereInput | AllProductInfoWhereInput[]
    OR?: AllProductInfoWhereInput[]
    NOT?: AllProductInfoWhereInput | AllProductInfoWhereInput[]
    Allinfo?: JsonFilter<"AllProductInfo">
  }, "id" | "proj_id" | "proj_abbr_name">

  export type AllProductInfoOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    Allinfo?: SortOrder
    _count?: AllProductInfoCountOrderByAggregateInput
    _max?: AllProductInfoMaxOrderByAggregateInput
    _min?: AllProductInfoMinOrderByAggregateInput
  }

  export type AllProductInfoScalarWhereWithAggregatesInput = {
    AND?: AllProductInfoScalarWhereWithAggregatesInput | AllProductInfoScalarWhereWithAggregatesInput[]
    OR?: AllProductInfoScalarWhereWithAggregatesInput[]
    NOT?: AllProductInfoScalarWhereWithAggregatesInput | AllProductInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AllProductInfo"> | string
    proj_id?: StringWithAggregatesFilter<"AllProductInfo"> | string
    proj_abbr_name?: StringWithAggregatesFilter<"AllProductInfo"> | string
    Allinfo?: JsonWithAggregatesFilter<"AllProductInfo">
  }

  export type SearchTestWhereInput = {
    AND?: SearchTestWhereInput | SearchTestWhereInput[]
    OR?: SearchTestWhereInput[]
    NOT?: SearchTestWhereInput | SearchTestWhereInput[]
    id?: StringFilter<"SearchTest"> | string
    proj_id?: StringFilter<"SearchTest"> | string
    proj_abbr_name?: StringFilter<"SearchTest"> | string
    proj_name_en?: StringFilter<"SearchTest"> | string
    proj_name_th?: StringFilter<"SearchTest"> | string
    unique_id?: StringFilter<"SearchTest"> | string
    risk_spectrum?: StringFilter<"SearchTest"> | string
  }

  export type SearchTestOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
  }

  export type SearchTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    proj_abbr_name?: string
    AND?: SearchTestWhereInput | SearchTestWhereInput[]
    OR?: SearchTestWhereInput[]
    NOT?: SearchTestWhereInput | SearchTestWhereInput[]
    proj_name_en?: StringFilter<"SearchTest"> | string
    proj_name_th?: StringFilter<"SearchTest"> | string
    unique_id?: StringFilter<"SearchTest"> | string
    risk_spectrum?: StringFilter<"SearchTest"> | string
  }, "id" | "proj_id" | "proj_abbr_name">

  export type SearchTestOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
    _count?: SearchTestCountOrderByAggregateInput
    _max?: SearchTestMaxOrderByAggregateInput
    _min?: SearchTestMinOrderByAggregateInput
  }

  export type SearchTestScalarWhereWithAggregatesInput = {
    AND?: SearchTestScalarWhereWithAggregatesInput | SearchTestScalarWhereWithAggregatesInput[]
    OR?: SearchTestScalarWhereWithAggregatesInput[]
    NOT?: SearchTestScalarWhereWithAggregatesInput | SearchTestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SearchTest"> | string
    proj_id?: StringWithAggregatesFilter<"SearchTest"> | string
    proj_abbr_name?: StringWithAggregatesFilter<"SearchTest"> | string
    proj_name_en?: StringWithAggregatesFilter<"SearchTest"> | string
    proj_name_th?: StringWithAggregatesFilter<"SearchTest"> | string
    unique_id?: StringWithAggregatesFilter<"SearchTest"> | string
    risk_spectrum?: StringWithAggregatesFilter<"SearchTest"> | string
  }

  export type ProductDetailWhereInput = {
    AND?: ProductDetailWhereInput | ProductDetailWhereInput[]
    OR?: ProductDetailWhereInput[]
    NOT?: ProductDetailWhereInput | ProductDetailWhereInput[]
    id?: StringFilter<"ProductDetail"> | string
    proj_id?: StringFilter<"ProductDetail"> | string
    proj_abbr_name?: StringFilter<"ProductDetail"> | string
    proj_name_en?: StringFilter<"ProductDetail"> | string
    proj_name_th?: StringFilter<"ProductDetail"> | string
    unique_id?: StringFilter<"ProductDetail"> | string
    risk_spectrum?: StringFilter<"ProductDetail"> | string
    companyTH?: StringFilter<"ProductDetail"> | string
    companyEN?: StringFilter<"ProductDetail"> | string
    fundType?: StringNullableListFilter<"ProductDetail">
    fund_resYTD?: JsonFilter<"ProductDetail">
    Allinfo?: JsonFilter<"ProductDetail">
  }

  export type ProductDetailOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
    companyTH?: SortOrder
    companyEN?: SortOrder
    fundType?: SortOrder
    fund_resYTD?: SortOrder
    Allinfo?: SortOrder
  }

  export type ProductDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    proj_abbr_name?: string
    AND?: ProductDetailWhereInput | ProductDetailWhereInput[]
    OR?: ProductDetailWhereInput[]
    NOT?: ProductDetailWhereInput | ProductDetailWhereInput[]
    proj_name_en?: StringFilter<"ProductDetail"> | string
    proj_name_th?: StringFilter<"ProductDetail"> | string
    unique_id?: StringFilter<"ProductDetail"> | string
    risk_spectrum?: StringFilter<"ProductDetail"> | string
    companyTH?: StringFilter<"ProductDetail"> | string
    companyEN?: StringFilter<"ProductDetail"> | string
    fundType?: StringNullableListFilter<"ProductDetail">
    fund_resYTD?: JsonFilter<"ProductDetail">
    Allinfo?: JsonFilter<"ProductDetail">
  }, "id" | "proj_id" | "proj_abbr_name">

  export type ProductDetailOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
    companyTH?: SortOrder
    companyEN?: SortOrder
    fundType?: SortOrder
    fund_resYTD?: SortOrder
    Allinfo?: SortOrder
    _count?: ProductDetailCountOrderByAggregateInput
    _max?: ProductDetailMaxOrderByAggregateInput
    _min?: ProductDetailMinOrderByAggregateInput
  }

  export type ProductDetailScalarWhereWithAggregatesInput = {
    AND?: ProductDetailScalarWhereWithAggregatesInput | ProductDetailScalarWhereWithAggregatesInput[]
    OR?: ProductDetailScalarWhereWithAggregatesInput[]
    NOT?: ProductDetailScalarWhereWithAggregatesInput | ProductDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductDetail"> | string
    proj_id?: StringWithAggregatesFilter<"ProductDetail"> | string
    proj_abbr_name?: StringWithAggregatesFilter<"ProductDetail"> | string
    proj_name_en?: StringWithAggregatesFilter<"ProductDetail"> | string
    proj_name_th?: StringWithAggregatesFilter<"ProductDetail"> | string
    unique_id?: StringWithAggregatesFilter<"ProductDetail"> | string
    risk_spectrum?: StringWithAggregatesFilter<"ProductDetail"> | string
    companyTH?: StringWithAggregatesFilter<"ProductDetail"> | string
    companyEN?: StringWithAggregatesFilter<"ProductDetail"> | string
    fundType?: StringNullableListFilter<"ProductDetail">
    fund_resYTD?: JsonWithAggregatesFilter<"ProductDetail">
    Allinfo?: JsonWithAggregatesFilter<"ProductDetail">
  }

  export type ProductCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
    companyTH: string
    companyEN: string
    Allinfo: InputJsonValue
    feefunds?: ProductCreatefeefundsInput | string[]
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
    companyTH: string
    companyEN: string
    Allinfo: InputJsonValue
    feefunds?: ProductCreatefeefundsInput | string[]
  }

  export type ProductUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
    companyTH?: StringFieldUpdateOperationsInput | string
    companyEN?: StringFieldUpdateOperationsInput | string
    Allinfo?: InputJsonValue | InputJsonValue
    feefunds?: ProductUpdatefeefundsInput | string[]
  }

  export type ProductUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
    companyTH?: StringFieldUpdateOperationsInput | string
    companyEN?: StringFieldUpdateOperationsInput | string
    Allinfo?: InputJsonValue | InputJsonValue
    feefunds?: ProductUpdatefeefundsInput | string[]
  }

  export type ProductCreateManyInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
    companyTH: string
    companyEN: string
    Allinfo: InputJsonValue
    feefunds?: ProductCreatefeefundsInput | string[]
  }

  export type ProductUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
    companyTH?: StringFieldUpdateOperationsInput | string
    companyEN?: StringFieldUpdateOperationsInput | string
    Allinfo?: InputJsonValue | InputJsonValue
    feefunds?: ProductUpdatefeefundsInput | string[]
  }

  export type ProductUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
    companyTH?: StringFieldUpdateOperationsInput | string
    companyEN?: StringFieldUpdateOperationsInput | string
    Allinfo?: InputJsonValue | InputJsonValue
    feefunds?: ProductUpdatefeefundsInput | string[]
  }

  export type FavoriteCreateInput = {
    id?: string
    user: string
    proj_abbr_name_list?: FavoriteCreateproj_abbr_name_listInput | string[]
    product_json_list?: FavoriteCreateproduct_json_listInput | InputJsonValue[]
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    user: string
    proj_abbr_name_list?: FavoriteCreateproj_abbr_name_listInput | string[]
    product_json_list?: FavoriteCreateproduct_json_listInput | InputJsonValue[]
  }

  export type FavoriteUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    proj_abbr_name_list?: FavoriteUpdateproj_abbr_name_listInput | string[]
    product_json_list?: FavoriteUpdateproduct_json_listInput | InputJsonValue[]
  }

  export type FavoriteUncheckedUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    proj_abbr_name_list?: FavoriteUpdateproj_abbr_name_listInput | string[]
    product_json_list?: FavoriteUpdateproduct_json_listInput | InputJsonValue[]
  }

  export type FavoriteCreateManyInput = {
    id?: string
    user: string
    proj_abbr_name_list?: FavoriteCreateproj_abbr_name_listInput | string[]
    product_json_list?: FavoriteCreateproduct_json_listInput | InputJsonValue[]
  }

  export type FavoriteUpdateManyMutationInput = {
    user?: StringFieldUpdateOperationsInput | string
    proj_abbr_name_list?: FavoriteUpdateproj_abbr_name_listInput | string[]
    product_json_list?: FavoriteUpdateproduct_json_listInput | InputJsonValue[]
  }

  export type FavoriteUncheckedUpdateManyInput = {
    user?: StringFieldUpdateOperationsInput | string
    proj_abbr_name_list?: FavoriteUpdateproj_abbr_name_listInput | string[]
    product_json_list?: FavoriteUpdateproduct_json_listInput | InputJsonValue[]
  }

  export type Page1compareinfomationCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    compareinfomation: InputJsonValue
  }

  export type Page1compareinfomationUncheckedCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    compareinfomation: InputJsonValue
  }

  export type Page1compareinfomationUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    compareinfomation?: InputJsonValue | InputJsonValue
  }

  export type Page1compareinfomationUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    compareinfomation?: InputJsonValue | InputJsonValue
  }

  export type Page1compareinfomationCreateManyInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    compareinfomation: InputJsonValue
  }

  export type Page1compareinfomationUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    compareinfomation?: InputJsonValue | InputJsonValue
  }

  export type Page1compareinfomationUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    compareinfomation?: InputJsonValue | InputJsonValue
  }

  export type Page2Operating_results_and_dividendsCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    operating_results: InputJsonValue
  }

  export type Page2Operating_results_and_dividendsUncheckedCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    operating_results: InputJsonValue
  }

  export type Page2Operating_results_and_dividendsUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    operating_results?: InputJsonValue | InputJsonValue
  }

  export type Page2Operating_results_and_dividendsUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    operating_results?: InputJsonValue | InputJsonValue
  }

  export type Page2Operating_results_and_dividendsCreateManyInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    operating_results: InputJsonValue
  }

  export type Page2Operating_results_and_dividendsUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    operating_results?: InputJsonValue | InputJsonValue
  }

  export type Page2Operating_results_and_dividendsUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    operating_results?: InputJsonValue | InputJsonValue
  }

  export type Page3topfiveCompareportCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    top_five_holding: InputJsonValue
  }

  export type Page3topfiveCompareportUncheckedCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    top_five_holding: InputJsonValue
  }

  export type Page3topfiveCompareportUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    top_five_holding?: InputJsonValue | InputJsonValue
  }

  export type Page3topfiveCompareportUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    top_five_holding?: InputJsonValue | InputJsonValue
  }

  export type Page3topfiveCompareportCreateManyInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    top_five_holding: InputJsonValue
  }

  export type Page3topfiveCompareportUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    top_five_holding?: InputJsonValue | InputJsonValue
  }

  export type Page3topfiveCompareportUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    top_five_holding?: InputJsonValue | InputJsonValue
  }

  export type Page3typeCompareportCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    type_data: InputJsonValue
  }

  export type Page3typeCompareportUncheckedCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    type_data: InputJsonValue
  }

  export type Page3typeCompareportUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    type_data?: InputJsonValue | InputJsonValue
  }

  export type Page3typeCompareportUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    type_data?: InputJsonValue | InputJsonValue
  }

  export type Page3typeCompareportCreateManyInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    type_data: InputJsonValue
  }

  export type Page3typeCompareportUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    type_data?: InputJsonValue | InputJsonValue
  }

  export type Page3typeCompareportUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    type_data?: InputJsonValue | InputJsonValue
  }

  export type Page3Investment_proportionCompareportCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    Investment_proportion_data: InputJsonValue
  }

  export type Page3Investment_proportionCompareportUncheckedCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    Investment_proportion_data: InputJsonValue
  }

  export type Page3Investment_proportionCompareportUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    Investment_proportion_data?: InputJsonValue | InputJsonValue
  }

  export type Page3Investment_proportionCompareportUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    Investment_proportion_data?: InputJsonValue | InputJsonValue
  }

  export type Page3Investment_proportionCompareportCreateManyInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    Investment_proportion_data: InputJsonValue
  }

  export type Page3Investment_proportionCompareportUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    Investment_proportion_data?: InputJsonValue | InputJsonValue
  }

  export type Page3Investment_proportionCompareportUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    Investment_proportion_data?: InputJsonValue | InputJsonValue
  }

  export type Page4FeeCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    data_from_sheet: InputJsonValue
    data_from_real: InputJsonValue
    fund_fact_url: string
    buyInfo: InputJsonValue
  }

  export type Page4FeeUncheckedCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    data_from_sheet: InputJsonValue
    data_from_real: InputJsonValue
    fund_fact_url: string
    buyInfo: InputJsonValue
  }

  export type Page4FeeUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    data_from_sheet?: InputJsonValue | InputJsonValue
    data_from_real?: InputJsonValue | InputJsonValue
    fund_fact_url?: StringFieldUpdateOperationsInput | string
    buyInfo?: InputJsonValue | InputJsonValue
  }

  export type Page4FeeUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    data_from_sheet?: InputJsonValue | InputJsonValue
    data_from_real?: InputJsonValue | InputJsonValue
    fund_fact_url?: StringFieldUpdateOperationsInput | string
    buyInfo?: InputJsonValue | InputJsonValue
  }

  export type Page4FeeCreateManyInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    data_from_sheet: InputJsonValue
    data_from_real: InputJsonValue
    fund_fact_url: string
    buyInfo: InputJsonValue
  }

  export type Page4FeeUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    data_from_sheet?: InputJsonValue | InputJsonValue
    data_from_real?: InputJsonValue | InputJsonValue
    fund_fact_url?: StringFieldUpdateOperationsInput | string
    buyInfo?: InputJsonValue | InputJsonValue
  }

  export type Page4FeeUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    data_from_sheet?: InputJsonValue | InputJsonValue
    data_from_real?: InputJsonValue | InputJsonValue
    fund_fact_url?: StringFieldUpdateOperationsInput | string
    buyInfo?: InputJsonValue | InputJsonValue
  }

  export type AllProductInfoCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    Allinfo: InputJsonValue
  }

  export type AllProductInfoUncheckedCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    Allinfo: InputJsonValue
  }

  export type AllProductInfoUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    Allinfo?: InputJsonValue | InputJsonValue
  }

  export type AllProductInfoUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    Allinfo?: InputJsonValue | InputJsonValue
  }

  export type AllProductInfoCreateManyInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    Allinfo: InputJsonValue
  }

  export type AllProductInfoUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    Allinfo?: InputJsonValue | InputJsonValue
  }

  export type AllProductInfoUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    Allinfo?: InputJsonValue | InputJsonValue
  }

  export type SearchTestCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
  }

  export type SearchTestUncheckedCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
  }

  export type SearchTestUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
  }

  export type SearchTestUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
  }

  export type SearchTestCreateManyInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
  }

  export type SearchTestUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
  }

  export type SearchTestUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
  }

  export type ProductDetailCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
    companyTH: string
    companyEN: string
    fundType?: ProductDetailCreatefundTypeInput | string[]
    fund_resYTD: InputJsonValue
    Allinfo: InputJsonValue
  }

  export type ProductDetailUncheckedCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
    companyTH: string
    companyEN: string
    fundType?: ProductDetailCreatefundTypeInput | string[]
    fund_resYTD: InputJsonValue
    Allinfo: InputJsonValue
  }

  export type ProductDetailUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
    companyTH?: StringFieldUpdateOperationsInput | string
    companyEN?: StringFieldUpdateOperationsInput | string
    fundType?: ProductDetailUpdatefundTypeInput | string[]
    fund_resYTD?: InputJsonValue | InputJsonValue
    Allinfo?: InputJsonValue | InputJsonValue
  }

  export type ProductDetailUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
    companyTH?: StringFieldUpdateOperationsInput | string
    companyEN?: StringFieldUpdateOperationsInput | string
    fundType?: ProductDetailUpdatefundTypeInput | string[]
    fund_resYTD?: InputJsonValue | InputJsonValue
    Allinfo?: InputJsonValue | InputJsonValue
  }

  export type ProductDetailCreateManyInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
    companyTH: string
    companyEN: string
    fundType?: ProductDetailCreatefundTypeInput | string[]
    fund_resYTD: InputJsonValue
    Allinfo: InputJsonValue
  }

  export type ProductDetailUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
    companyTH?: StringFieldUpdateOperationsInput | string
    companyEN?: StringFieldUpdateOperationsInput | string
    fundType?: ProductDetailUpdatefundTypeInput | string[]
    fund_resYTD?: InputJsonValue | InputJsonValue
    Allinfo?: InputJsonValue | InputJsonValue
  }

  export type ProductDetailUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
    companyTH?: StringFieldUpdateOperationsInput | string
    companyEN?: StringFieldUpdateOperationsInput | string
    fundType?: ProductDetailUpdatefundTypeInput | string[]
    fund_resYTD?: InputJsonValue | InputJsonValue
    Allinfo?: InputJsonValue | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
    companyTH?: SortOrder
    companyEN?: SortOrder
    Allinfo?: SortOrder
    feefunds?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
    companyTH?: SortOrder
    companyEN?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
    companyTH?: SortOrder
    companyEN?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableListFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    proj_abbr_name_list?: SortOrder
    product_json_list?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
  }

  export type Page1compareinfomationCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    compareinfomation?: SortOrder
  }

  export type Page1compareinfomationMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
  }

  export type Page1compareinfomationMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
  }

  export type Page2Operating_results_and_dividendsCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    operating_results?: SortOrder
  }

  export type Page2Operating_results_and_dividendsMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
  }

  export type Page2Operating_results_and_dividendsMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
  }

  export type Page3topfiveCompareportCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    top_five_holding?: SortOrder
  }

  export type Page3topfiveCompareportMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
  }

  export type Page3topfiveCompareportMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
  }

  export type Page3typeCompareportCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    type_data?: SortOrder
  }

  export type Page3typeCompareportMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
  }

  export type Page3typeCompareportMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
  }

  export type Page3Investment_proportionCompareportCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    Investment_proportion_data?: SortOrder
  }

  export type Page3Investment_proportionCompareportMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
  }

  export type Page3Investment_proportionCompareportMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
  }

  export type Page4FeeCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    data_from_sheet?: SortOrder
    data_from_real?: SortOrder
    fund_fact_url?: SortOrder
    buyInfo?: SortOrder
  }

  export type Page4FeeMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    fund_fact_url?: SortOrder
  }

  export type Page4FeeMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    fund_fact_url?: SortOrder
  }

  export type AllProductInfoCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    Allinfo?: SortOrder
  }

  export type AllProductInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
  }

  export type AllProductInfoMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
  }

  export type SearchTestCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
  }

  export type SearchTestMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
  }

  export type SearchTestMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
  }

  export type ProductDetailCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
    companyTH?: SortOrder
    companyEN?: SortOrder
    fundType?: SortOrder
    fund_resYTD?: SortOrder
    Allinfo?: SortOrder
  }

  export type ProductDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
    companyTH?: SortOrder
    companyEN?: SortOrder
  }

  export type ProductDetailMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
    companyTH?: SortOrder
    companyEN?: SortOrder
  }

  export type ProductCreatefeefundsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProductUpdatefeefundsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FavoriteCreateproj_abbr_name_listInput = {
    set: string[]
  }

  export type FavoriteCreateproduct_json_listInput = {
    set: InputJsonValue[]
  }

  export type FavoriteUpdateproj_abbr_name_listInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FavoriteUpdateproduct_json_listInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type ProductDetailCreatefundTypeInput = {
    set: string[]
  }

  export type ProductDetailUpdatefundTypeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FavoriteDefaultArgs instead
     */
    export type FavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FavoriteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Page1compareinfomationDefaultArgs instead
     */
    export type Page1compareinfomationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Page1compareinfomationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Page2Operating_results_and_dividendsDefaultArgs instead
     */
    export type Page2Operating_results_and_dividendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Page2Operating_results_and_dividendsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Page3topfiveCompareportDefaultArgs instead
     */
    export type Page3topfiveCompareportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Page3topfiveCompareportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Page3typeCompareportDefaultArgs instead
     */
    export type Page3typeCompareportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Page3typeCompareportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Page3Investment_proportionCompareportDefaultArgs instead
     */
    export type Page3Investment_proportionCompareportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Page3Investment_proportionCompareportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Page4FeeDefaultArgs instead
     */
    export type Page4FeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Page4FeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AllProductInfoDefaultArgs instead
     */
    export type AllProductInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AllProductInfoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SearchTestDefaultArgs instead
     */
    export type SearchTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SearchTestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDetailDefaultArgs instead
     */
    export type ProductDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDetailDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}