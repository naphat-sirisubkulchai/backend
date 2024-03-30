
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
 * Model Fund
 * 
 */
export type Fund = $Result.DefaultSelection<Prisma.$FundPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model Compareinfomation
 * 
 */
export type Compareinfomation = $Result.DefaultSelection<Prisma.$CompareinfomationPayload>
/**
 * Model Type_assets_invested
 * 
 */
export type Type_assets_invested = $Result.DefaultSelection<Prisma.$Type_assets_investedPayload>
/**
 * Model Top_five_investment_assets
 * 
 */
export type Top_five_investment_assets = $Result.DefaultSelection<Prisma.$Top_five_investment_assetsPayload>
/**
 * Model Fees_charged_by_mutual_funds
 * 
 */
export type Fees_charged_by_mutual_funds = $Result.DefaultSelection<Prisma.$Fees_charged_by_mutual_fundsPayload>
/**
 * Model Fees_charged_to_unitholders
 * 
 */
export type Fees_charged_to_unitholders = $Result.DefaultSelection<Prisma.$Fees_charged_to_unitholdersPayload>
/**
 * Model Investment_allocation_in_the_top_five_issuers
 * 
 */
export type Investment_allocation_in_the_top_five_issuers = $Result.DefaultSelection<Prisma.$Investment_allocation_in_the_top_five_issuersPayload>
/**
 * Model Investment_allocation_according_to_credit_rating
 * 
 */
export type Investment_allocation_according_to_credit_rating = $Result.DefaultSelection<Prisma.$Investment_allocation_according_to_credit_ratingPayload>
/**
 * Model Investment_In_Country
 * 
 */
export type Investment_In_Country = $Result.DefaultSelection<Prisma.$Investment_In_CountryPayload>
/**
 * Model AllProductInfo
 * 
 */
export type AllProductInfo = $Result.DefaultSelection<Prisma.$AllProductInfoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Funds
 * const funds = await prisma.fund.findMany()
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
   * // Fetch zero or more Funds
   * const funds = await prisma.fund.findMany()
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
   * `prisma.fund`: Exposes CRUD operations for the **Fund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funds
    * const funds = await prisma.fund.findMany()
    * ```
    */
  get fund(): Prisma.FundDelegate<ExtArgs>;

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

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
   * `prisma.compareinfomation`: Exposes CRUD operations for the **Compareinfomation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compareinfomations
    * const compareinfomations = await prisma.compareinfomation.findMany()
    * ```
    */
  get compareinfomation(): Prisma.CompareinfomationDelegate<ExtArgs>;

  /**
   * `prisma.type_assets_invested`: Exposes CRUD operations for the **Type_assets_invested** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Type_assets_investeds
    * const type_assets_investeds = await prisma.type_assets_invested.findMany()
    * ```
    */
  get type_assets_invested(): Prisma.Type_assets_investedDelegate<ExtArgs>;

  /**
   * `prisma.top_five_investment_assets`: Exposes CRUD operations for the **Top_five_investment_assets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Top_five_investment_assets
    * const top_five_investment_assets = await prisma.top_five_investment_assets.findMany()
    * ```
    */
  get top_five_investment_assets(): Prisma.Top_five_investment_assetsDelegate<ExtArgs>;

  /**
   * `prisma.fees_charged_by_mutual_funds`: Exposes CRUD operations for the **Fees_charged_by_mutual_funds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fees_charged_by_mutual_funds
    * const fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.findMany()
    * ```
    */
  get fees_charged_by_mutual_funds(): Prisma.Fees_charged_by_mutual_fundsDelegate<ExtArgs>;

  /**
   * `prisma.fees_charged_to_unitholders`: Exposes CRUD operations for the **Fees_charged_to_unitholders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fees_charged_to_unitholders
    * const fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.findMany()
    * ```
    */
  get fees_charged_to_unitholders(): Prisma.Fees_charged_to_unitholdersDelegate<ExtArgs>;

  /**
   * `prisma.investment_allocation_in_the_top_five_issuers`: Exposes CRUD operations for the **Investment_allocation_in_the_top_five_issuers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investment_allocation_in_the_top_five_issuers
    * const investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.findMany()
    * ```
    */
  get investment_allocation_in_the_top_five_issuers(): Prisma.Investment_allocation_in_the_top_five_issuersDelegate<ExtArgs>;

  /**
   * `prisma.investment_allocation_according_to_credit_rating`: Exposes CRUD operations for the **Investment_allocation_according_to_credit_rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investment_allocation_according_to_credit_ratings
    * const investment_allocation_according_to_credit_ratings = await prisma.investment_allocation_according_to_credit_rating.findMany()
    * ```
    */
  get investment_allocation_according_to_credit_rating(): Prisma.Investment_allocation_according_to_credit_ratingDelegate<ExtArgs>;

  /**
   * `prisma.investment_In_Country`: Exposes CRUD operations for the **Investment_In_Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investment_In_Countries
    * const investment_In_Countries = await prisma.investment_In_Country.findMany()
    * ```
    */
  get investment_In_Country(): Prisma.Investment_In_CountryDelegate<ExtArgs>;

  /**
   * `prisma.allProductInfo`: Exposes CRUD operations for the **AllProductInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AllProductInfos
    * const allProductInfos = await prisma.allProductInfo.findMany()
    * ```
    */
  get allProductInfo(): Prisma.AllProductInfoDelegate<ExtArgs>;
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'fund' | 'product' | 'user' | 'favorite' | 'compareinfomation' | 'type_assets_invested' | 'top_five_investment_assets' | 'fees_charged_by_mutual_funds' | 'fees_charged_to_unitholders' | 'investment_allocation_in_the_top_five_issuers' | 'investment_allocation_according_to_credit_rating' | 'investment_In_Country' | 'allProductInfo'
      txIsolationLevel: never
    },
    model: {
      Fund: {
        payload: Prisma.$FundPayload<ExtArgs>
        fields: Prisma.FundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          findFirst: {
            args: Prisma.FundFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          findMany: {
            args: Prisma.FundFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FundPayload>[]
          }
          create: {
            args: Prisma.FundCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          createMany: {
            args: Prisma.FundCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FundDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          update: {
            args: Prisma.FundUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          deleteMany: {
            args: Prisma.FundDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FundUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FundUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          aggregate: {
            args: Prisma.FundAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFund>
          }
          groupBy: {
            args: Prisma.FundGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FundGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FundFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.FundAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.FundCountArgs<ExtArgs>,
            result: $Utils.Optional<FundCountAggregateOutputType> | number
          }
        }
      }
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
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
      Compareinfomation: {
        payload: Prisma.$CompareinfomationPayload<ExtArgs>
        fields: Prisma.CompareinfomationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompareinfomationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompareinfomationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompareinfomationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompareinfomationPayload>
          }
          findFirst: {
            args: Prisma.CompareinfomationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompareinfomationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompareinfomationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompareinfomationPayload>
          }
          findMany: {
            args: Prisma.CompareinfomationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompareinfomationPayload>[]
          }
          create: {
            args: Prisma.CompareinfomationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompareinfomationPayload>
          }
          createMany: {
            args: Prisma.CompareinfomationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompareinfomationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompareinfomationPayload>
          }
          update: {
            args: Prisma.CompareinfomationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompareinfomationPayload>
          }
          deleteMany: {
            args: Prisma.CompareinfomationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompareinfomationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompareinfomationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompareinfomationPayload>
          }
          aggregate: {
            args: Prisma.CompareinfomationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompareinfomation>
          }
          groupBy: {
            args: Prisma.CompareinfomationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompareinfomationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CompareinfomationFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.CompareinfomationAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.CompareinfomationCountArgs<ExtArgs>,
            result: $Utils.Optional<CompareinfomationCountAggregateOutputType> | number
          }
        }
      }
      Type_assets_invested: {
        payload: Prisma.$Type_assets_investedPayload<ExtArgs>
        fields: Prisma.Type_assets_investedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Type_assets_investedFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Type_assets_investedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Type_assets_investedFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Type_assets_investedPayload>
          }
          findFirst: {
            args: Prisma.Type_assets_investedFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Type_assets_investedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Type_assets_investedFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Type_assets_investedPayload>
          }
          findMany: {
            args: Prisma.Type_assets_investedFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Type_assets_investedPayload>[]
          }
          create: {
            args: Prisma.Type_assets_investedCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Type_assets_investedPayload>
          }
          createMany: {
            args: Prisma.Type_assets_investedCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Type_assets_investedDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Type_assets_investedPayload>
          }
          update: {
            args: Prisma.Type_assets_investedUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Type_assets_investedPayload>
          }
          deleteMany: {
            args: Prisma.Type_assets_investedDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Type_assets_investedUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Type_assets_investedUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Type_assets_investedPayload>
          }
          aggregate: {
            args: Prisma.Type_assets_investedAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateType_assets_invested>
          }
          groupBy: {
            args: Prisma.Type_assets_investedGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Type_assets_investedGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Type_assets_investedFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Type_assets_investedAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Type_assets_investedCountArgs<ExtArgs>,
            result: $Utils.Optional<Type_assets_investedCountAggregateOutputType> | number
          }
        }
      }
      Top_five_investment_assets: {
        payload: Prisma.$Top_five_investment_assetsPayload<ExtArgs>
        fields: Prisma.Top_five_investment_assetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Top_five_investment_assetsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Top_five_investment_assetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Top_five_investment_assetsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Top_five_investment_assetsPayload>
          }
          findFirst: {
            args: Prisma.Top_five_investment_assetsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Top_five_investment_assetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Top_five_investment_assetsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Top_five_investment_assetsPayload>
          }
          findMany: {
            args: Prisma.Top_five_investment_assetsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Top_five_investment_assetsPayload>[]
          }
          create: {
            args: Prisma.Top_five_investment_assetsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Top_five_investment_assetsPayload>
          }
          createMany: {
            args: Prisma.Top_five_investment_assetsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Top_five_investment_assetsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Top_five_investment_assetsPayload>
          }
          update: {
            args: Prisma.Top_five_investment_assetsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Top_five_investment_assetsPayload>
          }
          deleteMany: {
            args: Prisma.Top_five_investment_assetsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Top_five_investment_assetsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Top_five_investment_assetsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Top_five_investment_assetsPayload>
          }
          aggregate: {
            args: Prisma.Top_five_investment_assetsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTop_five_investment_assets>
          }
          groupBy: {
            args: Prisma.Top_five_investment_assetsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Top_five_investment_assetsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Top_five_investment_assetsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Top_five_investment_assetsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Top_five_investment_assetsCountArgs<ExtArgs>,
            result: $Utils.Optional<Top_five_investment_assetsCountAggregateOutputType> | number
          }
        }
      }
      Fees_charged_by_mutual_funds: {
        payload: Prisma.$Fees_charged_by_mutual_fundsPayload<ExtArgs>
        fields: Prisma.Fees_charged_by_mutual_fundsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Fees_charged_by_mutual_fundsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_by_mutual_fundsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Fees_charged_by_mutual_fundsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_by_mutual_fundsPayload>
          }
          findFirst: {
            args: Prisma.Fees_charged_by_mutual_fundsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_by_mutual_fundsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Fees_charged_by_mutual_fundsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_by_mutual_fundsPayload>
          }
          findMany: {
            args: Prisma.Fees_charged_by_mutual_fundsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_by_mutual_fundsPayload>[]
          }
          create: {
            args: Prisma.Fees_charged_by_mutual_fundsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_by_mutual_fundsPayload>
          }
          createMany: {
            args: Prisma.Fees_charged_by_mutual_fundsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Fees_charged_by_mutual_fundsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_by_mutual_fundsPayload>
          }
          update: {
            args: Prisma.Fees_charged_by_mutual_fundsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_by_mutual_fundsPayload>
          }
          deleteMany: {
            args: Prisma.Fees_charged_by_mutual_fundsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Fees_charged_by_mutual_fundsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Fees_charged_by_mutual_fundsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_by_mutual_fundsPayload>
          }
          aggregate: {
            args: Prisma.Fees_charged_by_mutual_fundsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFees_charged_by_mutual_funds>
          }
          groupBy: {
            args: Prisma.Fees_charged_by_mutual_fundsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Fees_charged_by_mutual_fundsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Fees_charged_by_mutual_fundsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Fees_charged_by_mutual_fundsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Fees_charged_by_mutual_fundsCountArgs<ExtArgs>,
            result: $Utils.Optional<Fees_charged_by_mutual_fundsCountAggregateOutputType> | number
          }
        }
      }
      Fees_charged_to_unitholders: {
        payload: Prisma.$Fees_charged_to_unitholdersPayload<ExtArgs>
        fields: Prisma.Fees_charged_to_unitholdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Fees_charged_to_unitholdersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_to_unitholdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Fees_charged_to_unitholdersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_to_unitholdersPayload>
          }
          findFirst: {
            args: Prisma.Fees_charged_to_unitholdersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_to_unitholdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Fees_charged_to_unitholdersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_to_unitholdersPayload>
          }
          findMany: {
            args: Prisma.Fees_charged_to_unitholdersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_to_unitholdersPayload>[]
          }
          create: {
            args: Prisma.Fees_charged_to_unitholdersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_to_unitholdersPayload>
          }
          createMany: {
            args: Prisma.Fees_charged_to_unitholdersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Fees_charged_to_unitholdersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_to_unitholdersPayload>
          }
          update: {
            args: Prisma.Fees_charged_to_unitholdersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_to_unitholdersPayload>
          }
          deleteMany: {
            args: Prisma.Fees_charged_to_unitholdersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Fees_charged_to_unitholdersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Fees_charged_to_unitholdersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Fees_charged_to_unitholdersPayload>
          }
          aggregate: {
            args: Prisma.Fees_charged_to_unitholdersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFees_charged_to_unitholders>
          }
          groupBy: {
            args: Prisma.Fees_charged_to_unitholdersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Fees_charged_to_unitholdersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Fees_charged_to_unitholdersFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Fees_charged_to_unitholdersAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Fees_charged_to_unitholdersCountArgs<ExtArgs>,
            result: $Utils.Optional<Fees_charged_to_unitholdersCountAggregateOutputType> | number
          }
        }
      }
      Investment_allocation_in_the_top_five_issuers: {
        payload: Prisma.$Investment_allocation_in_the_top_five_issuersPayload<ExtArgs>
        fields: Prisma.Investment_allocation_in_the_top_five_issuersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload>
          }
          findFirst: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload>
          }
          findMany: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload>[]
          }
          create: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload>
          }
          createMany: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload>
          }
          update: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload>
          }
          deleteMany: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload>
          }
          aggregate: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInvestment_allocation_in_the_top_five_issuers>
          }
          groupBy: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Investment_allocation_in_the_top_five_issuersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Investment_allocation_in_the_top_five_issuersCountArgs<ExtArgs>,
            result: $Utils.Optional<Investment_allocation_in_the_top_five_issuersCountAggregateOutputType> | number
          }
        }
      }
      Investment_allocation_according_to_credit_rating: {
        payload: Prisma.$Investment_allocation_according_to_credit_ratingPayload<ExtArgs>
        fields: Prisma.Investment_allocation_according_to_credit_ratingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Investment_allocation_according_to_credit_ratingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Investment_allocation_according_to_credit_ratingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload>
          }
          findFirst: {
            args: Prisma.Investment_allocation_according_to_credit_ratingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Investment_allocation_according_to_credit_ratingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload>
          }
          findMany: {
            args: Prisma.Investment_allocation_according_to_credit_ratingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload>[]
          }
          create: {
            args: Prisma.Investment_allocation_according_to_credit_ratingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload>
          }
          createMany: {
            args: Prisma.Investment_allocation_according_to_credit_ratingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Investment_allocation_according_to_credit_ratingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload>
          }
          update: {
            args: Prisma.Investment_allocation_according_to_credit_ratingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload>
          }
          deleteMany: {
            args: Prisma.Investment_allocation_according_to_credit_ratingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Investment_allocation_according_to_credit_ratingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Investment_allocation_according_to_credit_ratingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload>
          }
          aggregate: {
            args: Prisma.Investment_allocation_according_to_credit_ratingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInvestment_allocation_according_to_credit_rating>
          }
          groupBy: {
            args: Prisma.Investment_allocation_according_to_credit_ratingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Investment_allocation_according_to_credit_ratingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Investment_allocation_according_to_credit_ratingFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Investment_allocation_according_to_credit_ratingAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Investment_allocation_according_to_credit_ratingCountArgs<ExtArgs>,
            result: $Utils.Optional<Investment_allocation_according_to_credit_ratingCountAggregateOutputType> | number
          }
        }
      }
      Investment_In_Country: {
        payload: Prisma.$Investment_In_CountryPayload<ExtArgs>
        fields: Prisma.Investment_In_CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Investment_In_CountryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_In_CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Investment_In_CountryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_In_CountryPayload>
          }
          findFirst: {
            args: Prisma.Investment_In_CountryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_In_CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Investment_In_CountryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_In_CountryPayload>
          }
          findMany: {
            args: Prisma.Investment_In_CountryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_In_CountryPayload>[]
          }
          create: {
            args: Prisma.Investment_In_CountryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_In_CountryPayload>
          }
          createMany: {
            args: Prisma.Investment_In_CountryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Investment_In_CountryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_In_CountryPayload>
          }
          update: {
            args: Prisma.Investment_In_CountryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_In_CountryPayload>
          }
          deleteMany: {
            args: Prisma.Investment_In_CountryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Investment_In_CountryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Investment_In_CountryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Investment_In_CountryPayload>
          }
          aggregate: {
            args: Prisma.Investment_In_CountryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInvestment_In_Country>
          }
          groupBy: {
            args: Prisma.Investment_In_CountryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Investment_In_CountryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Investment_In_CountryFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Investment_In_CountryAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Investment_In_CountryCountArgs<ExtArgs>,
            result: $Utils.Optional<Investment_In_CountryCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favorites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Fund
   */

  export type AggregateFund = {
    _count: FundCountAggregateOutputType | null
    _min: FundMinAggregateOutputType | null
    _max: FundMaxAggregateOutputType | null
  }

  export type FundMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
    regis_id: string | null
    regis_date: string | null
    cancel_date: string | null
    proj_name_th: string | null
    proj_name_en: string | null
    proj_abbr_name: string | null
    fund_status: string | null
    unique_id: string | null
    permit_us_investment: string | null
    invest_country_flag: string | null
    last_upd_date: string | null
  }

  export type FundMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
    regis_id: string | null
    regis_date: string | null
    cancel_date: string | null
    proj_name_th: string | null
    proj_name_en: string | null
    proj_abbr_name: string | null
    fund_status: string | null
    unique_id: string | null
    permit_us_investment: string | null
    invest_country_flag: string | null
    last_upd_date: string | null
  }

  export type FundCountAggregateOutputType = {
    id: number
    proj_id: number
    regis_id: number
    regis_date: number
    cancel_date: number
    proj_name_th: number
    proj_name_en: number
    proj_abbr_name: number
    fund_status: number
    unique_id: number
    permit_us_investment: number
    invest_country_flag: number
    last_upd_date: number
    _all: number
  }


  export type FundMinAggregateInputType = {
    id?: true
    proj_id?: true
    regis_id?: true
    regis_date?: true
    cancel_date?: true
    proj_name_th?: true
    proj_name_en?: true
    proj_abbr_name?: true
    fund_status?: true
    unique_id?: true
    permit_us_investment?: true
    invest_country_flag?: true
    last_upd_date?: true
  }

  export type FundMaxAggregateInputType = {
    id?: true
    proj_id?: true
    regis_id?: true
    regis_date?: true
    cancel_date?: true
    proj_name_th?: true
    proj_name_en?: true
    proj_abbr_name?: true
    fund_status?: true
    unique_id?: true
    permit_us_investment?: true
    invest_country_flag?: true
    last_upd_date?: true
  }

  export type FundCountAggregateInputType = {
    id?: true
    proj_id?: true
    regis_id?: true
    regis_date?: true
    cancel_date?: true
    proj_name_th?: true
    proj_name_en?: true
    proj_abbr_name?: true
    fund_status?: true
    unique_id?: true
    permit_us_investment?: true
    invest_country_flag?: true
    last_upd_date?: true
    _all?: true
  }

  export type FundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fund to aggregate.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funds
    **/
    _count?: true | FundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundMaxAggregateInputType
  }

  export type GetFundAggregateType<T extends FundAggregateArgs> = {
        [P in keyof T & keyof AggregateFund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFund[P]>
      : GetScalarType<T[P], AggregateFund[P]>
  }




  export type FundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundWhereInput
    orderBy?: FundOrderByWithAggregationInput | FundOrderByWithAggregationInput[]
    by: FundScalarFieldEnum[] | FundScalarFieldEnum
    having?: FundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundCountAggregateInputType | true
    _min?: FundMinAggregateInputType
    _max?: FundMaxAggregateInputType
  }

  export type FundGroupByOutputType = {
    id: string
    proj_id: string
    regis_id: string
    regis_date: string
    cancel_date: string
    proj_name_th: string
    proj_name_en: string
    proj_abbr_name: string
    fund_status: string
    unique_id: string
    permit_us_investment: string | null
    invest_country_flag: string
    last_upd_date: string
    _count: FundCountAggregateOutputType | null
    _min: FundMinAggregateOutputType | null
    _max: FundMaxAggregateOutputType | null
  }

  type GetFundGroupByPayload<T extends FundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundGroupByOutputType[P]>
            : GetScalarType<T[P], FundGroupByOutputType[P]>
        }
      >
    >


  export type FundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    regis_id?: boolean
    regis_date?: boolean
    cancel_date?: boolean
    proj_name_th?: boolean
    proj_name_en?: boolean
    proj_abbr_name?: boolean
    fund_status?: boolean
    unique_id?: boolean
    permit_us_investment?: boolean
    invest_country_flag?: boolean
    last_upd_date?: boolean
  }, ExtArgs["result"]["fund"]>

  export type FundSelectScalar = {
    id?: boolean
    proj_id?: boolean
    regis_id?: boolean
    regis_date?: boolean
    cancel_date?: boolean
    proj_name_th?: boolean
    proj_name_en?: boolean
    proj_abbr_name?: boolean
    fund_status?: boolean
    unique_id?: boolean
    permit_us_investment?: boolean
    invest_country_flag?: boolean
    last_upd_date?: boolean
  }


  export type $FundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fund"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      regis_id: string
      regis_date: string
      cancel_date: string
      proj_name_th: string
      proj_name_en: string
      proj_abbr_name: string
      fund_status: string
      unique_id: string
      permit_us_investment: string | null
      invest_country_flag: string
      last_upd_date: string
    }, ExtArgs["result"]["fund"]>
    composites: {}
  }


  type FundGetPayload<S extends boolean | null | undefined | FundDefaultArgs> = $Result.GetResult<Prisma.$FundPayload, S>

  type FundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FundFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FundCountAggregateInputType | true
    }

  export interface FundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fund'], meta: { name: 'Fund' } }
    /**
     * Find zero or one Fund that matches the filter.
     * @param {FundFindUniqueArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FundFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FundFindUniqueArgs<ExtArgs>>
    ): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fund that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FundFindUniqueOrThrowArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FundFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FundFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindFirstArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FundFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FundFindFirstArgs<ExtArgs>>
    ): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindFirstOrThrowArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FundFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FundFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Funds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funds
     * const funds = await prisma.fund.findMany()
     * 
     * // Get first 10 Funds
     * const funds = await prisma.fund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundWithIdOnly = await prisma.fund.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FundFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FundFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fund.
     * @param {FundCreateArgs} args - Arguments to create a Fund.
     * @example
     * // Create one Fund
     * const Fund = await prisma.fund.create({
     *   data: {
     *     // ... data to create a Fund
     *   }
     * })
     * 
    **/
    create<T extends FundCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FundCreateArgs<ExtArgs>>
    ): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Funds.
     *     @param {FundCreateManyArgs} args - Arguments to create many Funds.
     *     @example
     *     // Create many Funds
     *     const fund = await prisma.fund.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FundCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FundCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fund.
     * @param {FundDeleteArgs} args - Arguments to delete one Fund.
     * @example
     * // Delete one Fund
     * const Fund = await prisma.fund.delete({
     *   where: {
     *     // ... filter to delete one Fund
     *   }
     * })
     * 
    **/
    delete<T extends FundDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FundDeleteArgs<ExtArgs>>
    ): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fund.
     * @param {FundUpdateArgs} args - Arguments to update one Fund.
     * @example
     * // Update one Fund
     * const fund = await prisma.fund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FundUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FundUpdateArgs<ExtArgs>>
    ): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Funds.
     * @param {FundDeleteManyArgs} args - Arguments to filter Funds to delete.
     * @example
     * // Delete a few Funds
     * const { count } = await prisma.fund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FundDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FundDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funds
     * const fund = await prisma.fund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FundUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FundUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fund.
     * @param {FundUpsertArgs} args - Arguments to update or create a Fund.
     * @example
     * // Update or create a Fund
     * const fund = await prisma.fund.upsert({
     *   create: {
     *     // ... data to create a Fund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fund we want to update
     *   }
     * })
    **/
    upsert<T extends FundUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FundUpsertArgs<ExtArgs>>
    ): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Funds that matches the filter.
     * @param {FundFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const fund = await prisma.fund.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: FundFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Fund.
     * @param {FundAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const fund = await prisma.fund.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: FundAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundCountArgs} args - Arguments to filter Funds to count.
     * @example
     * // Count the number of Funds
     * const count = await prisma.fund.count({
     *   where: {
     *     // ... the filter for the Funds we want to count
     *   }
     * })
    **/
    count<T extends FundCountArgs>(
      args?: Subset<T, FundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FundAggregateArgs>(args: Subset<T, FundAggregateArgs>): Prisma.PrismaPromise<GetFundAggregateType<T>>

    /**
     * Group by Fund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundGroupByArgs} args - Group by arguments.
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
      T extends FundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundGroupByArgs['orderBy'] }
        : { orderBy?: FundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fund model
   */
  readonly fields: FundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Fund model
   */ 
  interface FundFieldRefs {
    readonly id: FieldRef<"Fund", 'String'>
    readonly proj_id: FieldRef<"Fund", 'String'>
    readonly regis_id: FieldRef<"Fund", 'String'>
    readonly regis_date: FieldRef<"Fund", 'String'>
    readonly cancel_date: FieldRef<"Fund", 'String'>
    readonly proj_name_th: FieldRef<"Fund", 'String'>
    readonly proj_name_en: FieldRef<"Fund", 'String'>
    readonly proj_abbr_name: FieldRef<"Fund", 'String'>
    readonly fund_status: FieldRef<"Fund", 'String'>
    readonly unique_id: FieldRef<"Fund", 'String'>
    readonly permit_us_investment: FieldRef<"Fund", 'String'>
    readonly invest_country_flag: FieldRef<"Fund", 'String'>
    readonly last_upd_date: FieldRef<"Fund", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Fund findUnique
   */
  export type FundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where: FundWhereUniqueInput
  }


  /**
   * Fund findUniqueOrThrow
   */
  export type FundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where: FundWhereUniqueInput
  }


  /**
   * Fund findFirst
   */
  export type FundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funds.
     */
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }


  /**
   * Fund findFirstOrThrow
   */
  export type FundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funds.
     */
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }


  /**
   * Fund findMany
   */
  export type FundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Filter, which Funds to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }


  /**
   * Fund create
   */
  export type FundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * The data needed to create a Fund.
     */
    data: XOR<FundCreateInput, FundUncheckedCreateInput>
  }


  /**
   * Fund createMany
   */
  export type FundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funds.
     */
    data: FundCreateManyInput | FundCreateManyInput[]
  }


  /**
   * Fund update
   */
  export type FundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * The data needed to update a Fund.
     */
    data: XOR<FundUpdateInput, FundUncheckedUpdateInput>
    /**
     * Choose, which Fund to update.
     */
    where: FundWhereUniqueInput
  }


  /**
   * Fund updateMany
   */
  export type FundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funds.
     */
    data: XOR<FundUpdateManyMutationInput, FundUncheckedUpdateManyInput>
    /**
     * Filter which Funds to update
     */
    where?: FundWhereInput
  }


  /**
   * Fund upsert
   */
  export type FundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * The filter to search for the Fund to update in case it exists.
     */
    where: FundWhereUniqueInput
    /**
     * In case the Fund found by the `where` argument doesn't exist, create a new Fund with this data.
     */
    create: XOR<FundCreateInput, FundUncheckedCreateInput>
    /**
     * In case the Fund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundUpdateInput, FundUncheckedUpdateInput>
  }


  /**
   * Fund delete
   */
  export type FundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Filter which Fund to delete.
     */
    where: FundWhereUniqueInput
  }


  /**
   * Fund deleteMany
   */
  export type FundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funds to delete
     */
    where?: FundWhereInput
  }


  /**
   * Fund findRaw
   */
  export type FundFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Fund aggregateRaw
   */
  export type FundAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Fund without action
   */
  export type FundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
  }



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
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
    proj_abbr_name: string | null
    proj_name_en: string | null
    proj_name_th: string | null
    unique_id: string | null
    risk_spectrum: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    proj_id: number
    proj_abbr_name: number
    proj_name_en: number
    proj_name_th: number
    unique_id: number
    risk_spectrum: number
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
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    proj_name_en?: true
    proj_name_th?: true
    unique_id?: true
    risk_spectrum?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    proj_id?: true
    proj_abbr_name?: true
    proj_name_en?: true
    proj_name_th?: true
    unique_id?: true
    risk_spectrum?: true
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
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    proj_id?: boolean
    proj_abbr_name?: boolean
    proj_name_en?: boolean
    proj_name_th?: boolean
    unique_id?: boolean
    risk_spectrum?: boolean
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
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
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
    proj_id: string | null
    favID: string | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
    favID: string | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    proj_id: number
    favID: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    proj_id?: true
    favID?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    proj_id?: true
    favID?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    proj_id?: true
    favID?: true
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
    proj_id: string
    favID: string
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
    proj_id?: boolean
    favID?: boolean
    fav?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    proj_id?: boolean
    favID?: boolean
  }

  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fav?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      fav: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      favID: string
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

    fav<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
    readonly proj_id: FieldRef<"Favorite", 'String'>
    readonly favID: FieldRef<"Favorite", 'String'>
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
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
  }



  /**
   * Model Compareinfomation
   */

  export type AggregateCompareinfomation = {
    _count: CompareinfomationCountAggregateOutputType | null
    _min: CompareinfomationMinAggregateOutputType | null
    _max: CompareinfomationMaxAggregateOutputType | null
  }

  export type CompareinfomationMinAggregateOutputType = {
    id: string | null
    fundType: string | null
    risk_spectrum: string | null
    Feeder_Fund: string | null
    Currency_policy: string | null
    Dividend_payment_policy: string | null
    Sales_fees: string | null
    Buyback_fee: string | null
    Mutual_fund_expenses: string | null
    Minimum_initial_investment: string | null
    Minimum_next_investment: string | null
    Investment_registration_date: string | null
    Net_asset_value: string | null
  }

  export type CompareinfomationMaxAggregateOutputType = {
    id: string | null
    fundType: string | null
    risk_spectrum: string | null
    Feeder_Fund: string | null
    Currency_policy: string | null
    Dividend_payment_policy: string | null
    Sales_fees: string | null
    Buyback_fee: string | null
    Mutual_fund_expenses: string | null
    Minimum_initial_investment: string | null
    Minimum_next_investment: string | null
    Investment_registration_date: string | null
    Net_asset_value: string | null
  }

  export type CompareinfomationCountAggregateOutputType = {
    id: number
    fundType: number
    risk_spectrum: number
    Feeder_Fund: number
    Currency_policy: number
    Dividend_payment_policy: number
    Sales_fees: number
    Buyback_fee: number
    Mutual_fund_expenses: number
    Minimum_initial_investment: number
    Minimum_next_investment: number
    Investment_registration_date: number
    Net_asset_value: number
    _all: number
  }


  export type CompareinfomationMinAggregateInputType = {
    id?: true
    fundType?: true
    risk_spectrum?: true
    Feeder_Fund?: true
    Currency_policy?: true
    Dividend_payment_policy?: true
    Sales_fees?: true
    Buyback_fee?: true
    Mutual_fund_expenses?: true
    Minimum_initial_investment?: true
    Minimum_next_investment?: true
    Investment_registration_date?: true
    Net_asset_value?: true
  }

  export type CompareinfomationMaxAggregateInputType = {
    id?: true
    fundType?: true
    risk_spectrum?: true
    Feeder_Fund?: true
    Currency_policy?: true
    Dividend_payment_policy?: true
    Sales_fees?: true
    Buyback_fee?: true
    Mutual_fund_expenses?: true
    Minimum_initial_investment?: true
    Minimum_next_investment?: true
    Investment_registration_date?: true
    Net_asset_value?: true
  }

  export type CompareinfomationCountAggregateInputType = {
    id?: true
    fundType?: true
    risk_spectrum?: true
    Feeder_Fund?: true
    Currency_policy?: true
    Dividend_payment_policy?: true
    Sales_fees?: true
    Buyback_fee?: true
    Mutual_fund_expenses?: true
    Minimum_initial_investment?: true
    Minimum_next_investment?: true
    Investment_registration_date?: true
    Net_asset_value?: true
    _all?: true
  }

  export type CompareinfomationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compareinfomation to aggregate.
     */
    where?: CompareinfomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compareinfomations to fetch.
     */
    orderBy?: CompareinfomationOrderByWithRelationInput | CompareinfomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompareinfomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compareinfomations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compareinfomations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Compareinfomations
    **/
    _count?: true | CompareinfomationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompareinfomationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompareinfomationMaxAggregateInputType
  }

  export type GetCompareinfomationAggregateType<T extends CompareinfomationAggregateArgs> = {
        [P in keyof T & keyof AggregateCompareinfomation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompareinfomation[P]>
      : GetScalarType<T[P], AggregateCompareinfomation[P]>
  }




  export type CompareinfomationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompareinfomationWhereInput
    orderBy?: CompareinfomationOrderByWithAggregationInput | CompareinfomationOrderByWithAggregationInput[]
    by: CompareinfomationScalarFieldEnum[] | CompareinfomationScalarFieldEnum
    having?: CompareinfomationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompareinfomationCountAggregateInputType | true
    _min?: CompareinfomationMinAggregateInputType
    _max?: CompareinfomationMaxAggregateInputType
  }

  export type CompareinfomationGroupByOutputType = {
    id: string
    fundType: string
    risk_spectrum: string
    Feeder_Fund: string
    Currency_policy: string
    Dividend_payment_policy: string
    Sales_fees: string
    Buyback_fee: string
    Mutual_fund_expenses: string
    Minimum_initial_investment: string
    Minimum_next_investment: string
    Investment_registration_date: string
    Net_asset_value: string
    _count: CompareinfomationCountAggregateOutputType | null
    _min: CompareinfomationMinAggregateOutputType | null
    _max: CompareinfomationMaxAggregateOutputType | null
  }

  type GetCompareinfomationGroupByPayload<T extends CompareinfomationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompareinfomationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompareinfomationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompareinfomationGroupByOutputType[P]>
            : GetScalarType<T[P], CompareinfomationGroupByOutputType[P]>
        }
      >
    >


  export type CompareinfomationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fundType?: boolean
    risk_spectrum?: boolean
    Feeder_Fund?: boolean
    Currency_policy?: boolean
    Dividend_payment_policy?: boolean
    Sales_fees?: boolean
    Buyback_fee?: boolean
    Mutual_fund_expenses?: boolean
    Minimum_initial_investment?: boolean
    Minimum_next_investment?: boolean
    Investment_registration_date?: boolean
    Net_asset_value?: boolean
  }, ExtArgs["result"]["compareinfomation"]>

  export type CompareinfomationSelectScalar = {
    id?: boolean
    fundType?: boolean
    risk_spectrum?: boolean
    Feeder_Fund?: boolean
    Currency_policy?: boolean
    Dividend_payment_policy?: boolean
    Sales_fees?: boolean
    Buyback_fee?: boolean
    Mutual_fund_expenses?: boolean
    Minimum_initial_investment?: boolean
    Minimum_next_investment?: boolean
    Investment_registration_date?: boolean
    Net_asset_value?: boolean
  }


  export type $CompareinfomationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Compareinfomation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fundType: string
      risk_spectrum: string
      Feeder_Fund: string
      Currency_policy: string
      Dividend_payment_policy: string
      Sales_fees: string
      Buyback_fee: string
      Mutual_fund_expenses: string
      Minimum_initial_investment: string
      Minimum_next_investment: string
      Investment_registration_date: string
      Net_asset_value: string
    }, ExtArgs["result"]["compareinfomation"]>
    composites: {}
  }


  type CompareinfomationGetPayload<S extends boolean | null | undefined | CompareinfomationDefaultArgs> = $Result.GetResult<Prisma.$CompareinfomationPayload, S>

  type CompareinfomationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompareinfomationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompareinfomationCountAggregateInputType | true
    }

  export interface CompareinfomationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Compareinfomation'], meta: { name: 'Compareinfomation' } }
    /**
     * Find zero or one Compareinfomation that matches the filter.
     * @param {CompareinfomationFindUniqueArgs} args - Arguments to find a Compareinfomation
     * @example
     * // Get one Compareinfomation
     * const compareinfomation = await prisma.compareinfomation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompareinfomationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompareinfomationFindUniqueArgs<ExtArgs>>
    ): Prisma__CompareinfomationClient<$Result.GetResult<Prisma.$CompareinfomationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Compareinfomation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompareinfomationFindUniqueOrThrowArgs} args - Arguments to find a Compareinfomation
     * @example
     * // Get one Compareinfomation
     * const compareinfomation = await prisma.compareinfomation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompareinfomationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompareinfomationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompareinfomationClient<$Result.GetResult<Prisma.$CompareinfomationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Compareinfomation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareinfomationFindFirstArgs} args - Arguments to find a Compareinfomation
     * @example
     * // Get one Compareinfomation
     * const compareinfomation = await prisma.compareinfomation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompareinfomationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompareinfomationFindFirstArgs<ExtArgs>>
    ): Prisma__CompareinfomationClient<$Result.GetResult<Prisma.$CompareinfomationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Compareinfomation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareinfomationFindFirstOrThrowArgs} args - Arguments to find a Compareinfomation
     * @example
     * // Get one Compareinfomation
     * const compareinfomation = await prisma.compareinfomation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompareinfomationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompareinfomationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompareinfomationClient<$Result.GetResult<Prisma.$CompareinfomationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Compareinfomations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareinfomationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compareinfomations
     * const compareinfomations = await prisma.compareinfomation.findMany()
     * 
     * // Get first 10 Compareinfomations
     * const compareinfomations = await prisma.compareinfomation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compareinfomationWithIdOnly = await prisma.compareinfomation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompareinfomationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompareinfomationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareinfomationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Compareinfomation.
     * @param {CompareinfomationCreateArgs} args - Arguments to create a Compareinfomation.
     * @example
     * // Create one Compareinfomation
     * const Compareinfomation = await prisma.compareinfomation.create({
     *   data: {
     *     // ... data to create a Compareinfomation
     *   }
     * })
     * 
    **/
    create<T extends CompareinfomationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompareinfomationCreateArgs<ExtArgs>>
    ): Prisma__CompareinfomationClient<$Result.GetResult<Prisma.$CompareinfomationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Compareinfomations.
     *     @param {CompareinfomationCreateManyArgs} args - Arguments to create many Compareinfomations.
     *     @example
     *     // Create many Compareinfomations
     *     const compareinfomation = await prisma.compareinfomation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompareinfomationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompareinfomationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Compareinfomation.
     * @param {CompareinfomationDeleteArgs} args - Arguments to delete one Compareinfomation.
     * @example
     * // Delete one Compareinfomation
     * const Compareinfomation = await prisma.compareinfomation.delete({
     *   where: {
     *     // ... filter to delete one Compareinfomation
     *   }
     * })
     * 
    **/
    delete<T extends CompareinfomationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompareinfomationDeleteArgs<ExtArgs>>
    ): Prisma__CompareinfomationClient<$Result.GetResult<Prisma.$CompareinfomationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Compareinfomation.
     * @param {CompareinfomationUpdateArgs} args - Arguments to update one Compareinfomation.
     * @example
     * // Update one Compareinfomation
     * const compareinfomation = await prisma.compareinfomation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompareinfomationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompareinfomationUpdateArgs<ExtArgs>>
    ): Prisma__CompareinfomationClient<$Result.GetResult<Prisma.$CompareinfomationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Compareinfomations.
     * @param {CompareinfomationDeleteManyArgs} args - Arguments to filter Compareinfomations to delete.
     * @example
     * // Delete a few Compareinfomations
     * const { count } = await prisma.compareinfomation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompareinfomationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompareinfomationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compareinfomations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareinfomationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compareinfomations
     * const compareinfomation = await prisma.compareinfomation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompareinfomationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompareinfomationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Compareinfomation.
     * @param {CompareinfomationUpsertArgs} args - Arguments to update or create a Compareinfomation.
     * @example
     * // Update or create a Compareinfomation
     * const compareinfomation = await prisma.compareinfomation.upsert({
     *   create: {
     *     // ... data to create a Compareinfomation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compareinfomation we want to update
     *   }
     * })
    **/
    upsert<T extends CompareinfomationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompareinfomationUpsertArgs<ExtArgs>>
    ): Prisma__CompareinfomationClient<$Result.GetResult<Prisma.$CompareinfomationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Compareinfomations that matches the filter.
     * @param {CompareinfomationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const compareinfomation = await prisma.compareinfomation.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CompareinfomationFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Compareinfomation.
     * @param {CompareinfomationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const compareinfomation = await prisma.compareinfomation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CompareinfomationAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Compareinfomations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareinfomationCountArgs} args - Arguments to filter Compareinfomations to count.
     * @example
     * // Count the number of Compareinfomations
     * const count = await prisma.compareinfomation.count({
     *   where: {
     *     // ... the filter for the Compareinfomations we want to count
     *   }
     * })
    **/
    count<T extends CompareinfomationCountArgs>(
      args?: Subset<T, CompareinfomationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompareinfomationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compareinfomation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareinfomationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompareinfomationAggregateArgs>(args: Subset<T, CompareinfomationAggregateArgs>): Prisma.PrismaPromise<GetCompareinfomationAggregateType<T>>

    /**
     * Group by Compareinfomation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareinfomationGroupByArgs} args - Group by arguments.
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
      T extends CompareinfomationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompareinfomationGroupByArgs['orderBy'] }
        : { orderBy?: CompareinfomationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompareinfomationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompareinfomationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Compareinfomation model
   */
  readonly fields: CompareinfomationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compareinfomation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompareinfomationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Compareinfomation model
   */ 
  interface CompareinfomationFieldRefs {
    readonly id: FieldRef<"Compareinfomation", 'String'>
    readonly fundType: FieldRef<"Compareinfomation", 'String'>
    readonly risk_spectrum: FieldRef<"Compareinfomation", 'String'>
    readonly Feeder_Fund: FieldRef<"Compareinfomation", 'String'>
    readonly Currency_policy: FieldRef<"Compareinfomation", 'String'>
    readonly Dividend_payment_policy: FieldRef<"Compareinfomation", 'String'>
    readonly Sales_fees: FieldRef<"Compareinfomation", 'String'>
    readonly Buyback_fee: FieldRef<"Compareinfomation", 'String'>
    readonly Mutual_fund_expenses: FieldRef<"Compareinfomation", 'String'>
    readonly Minimum_initial_investment: FieldRef<"Compareinfomation", 'String'>
    readonly Minimum_next_investment: FieldRef<"Compareinfomation", 'String'>
    readonly Investment_registration_date: FieldRef<"Compareinfomation", 'String'>
    readonly Net_asset_value: FieldRef<"Compareinfomation", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Compareinfomation findUnique
   */
  export type CompareinfomationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compareinfomation
     */
    select?: CompareinfomationSelect<ExtArgs> | null
    /**
     * Filter, which Compareinfomation to fetch.
     */
    where: CompareinfomationWhereUniqueInput
  }


  /**
   * Compareinfomation findUniqueOrThrow
   */
  export type CompareinfomationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compareinfomation
     */
    select?: CompareinfomationSelect<ExtArgs> | null
    /**
     * Filter, which Compareinfomation to fetch.
     */
    where: CompareinfomationWhereUniqueInput
  }


  /**
   * Compareinfomation findFirst
   */
  export type CompareinfomationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compareinfomation
     */
    select?: CompareinfomationSelect<ExtArgs> | null
    /**
     * Filter, which Compareinfomation to fetch.
     */
    where?: CompareinfomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compareinfomations to fetch.
     */
    orderBy?: CompareinfomationOrderByWithRelationInput | CompareinfomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compareinfomations.
     */
    cursor?: CompareinfomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compareinfomations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compareinfomations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compareinfomations.
     */
    distinct?: CompareinfomationScalarFieldEnum | CompareinfomationScalarFieldEnum[]
  }


  /**
   * Compareinfomation findFirstOrThrow
   */
  export type CompareinfomationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compareinfomation
     */
    select?: CompareinfomationSelect<ExtArgs> | null
    /**
     * Filter, which Compareinfomation to fetch.
     */
    where?: CompareinfomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compareinfomations to fetch.
     */
    orderBy?: CompareinfomationOrderByWithRelationInput | CompareinfomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compareinfomations.
     */
    cursor?: CompareinfomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compareinfomations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compareinfomations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compareinfomations.
     */
    distinct?: CompareinfomationScalarFieldEnum | CompareinfomationScalarFieldEnum[]
  }


  /**
   * Compareinfomation findMany
   */
  export type CompareinfomationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compareinfomation
     */
    select?: CompareinfomationSelect<ExtArgs> | null
    /**
     * Filter, which Compareinfomations to fetch.
     */
    where?: CompareinfomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compareinfomations to fetch.
     */
    orderBy?: CompareinfomationOrderByWithRelationInput | CompareinfomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Compareinfomations.
     */
    cursor?: CompareinfomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compareinfomations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compareinfomations.
     */
    skip?: number
    distinct?: CompareinfomationScalarFieldEnum | CompareinfomationScalarFieldEnum[]
  }


  /**
   * Compareinfomation create
   */
  export type CompareinfomationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compareinfomation
     */
    select?: CompareinfomationSelect<ExtArgs> | null
    /**
     * The data needed to create a Compareinfomation.
     */
    data: XOR<CompareinfomationCreateInput, CompareinfomationUncheckedCreateInput>
  }


  /**
   * Compareinfomation createMany
   */
  export type CompareinfomationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Compareinfomations.
     */
    data: CompareinfomationCreateManyInput | CompareinfomationCreateManyInput[]
  }


  /**
   * Compareinfomation update
   */
  export type CompareinfomationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compareinfomation
     */
    select?: CompareinfomationSelect<ExtArgs> | null
    /**
     * The data needed to update a Compareinfomation.
     */
    data: XOR<CompareinfomationUpdateInput, CompareinfomationUncheckedUpdateInput>
    /**
     * Choose, which Compareinfomation to update.
     */
    where: CompareinfomationWhereUniqueInput
  }


  /**
   * Compareinfomation updateMany
   */
  export type CompareinfomationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Compareinfomations.
     */
    data: XOR<CompareinfomationUpdateManyMutationInput, CompareinfomationUncheckedUpdateManyInput>
    /**
     * Filter which Compareinfomations to update
     */
    where?: CompareinfomationWhereInput
  }


  /**
   * Compareinfomation upsert
   */
  export type CompareinfomationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compareinfomation
     */
    select?: CompareinfomationSelect<ExtArgs> | null
    /**
     * The filter to search for the Compareinfomation to update in case it exists.
     */
    where: CompareinfomationWhereUniqueInput
    /**
     * In case the Compareinfomation found by the `where` argument doesn't exist, create a new Compareinfomation with this data.
     */
    create: XOR<CompareinfomationCreateInput, CompareinfomationUncheckedCreateInput>
    /**
     * In case the Compareinfomation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompareinfomationUpdateInput, CompareinfomationUncheckedUpdateInput>
  }


  /**
   * Compareinfomation delete
   */
  export type CompareinfomationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compareinfomation
     */
    select?: CompareinfomationSelect<ExtArgs> | null
    /**
     * Filter which Compareinfomation to delete.
     */
    where: CompareinfomationWhereUniqueInput
  }


  /**
   * Compareinfomation deleteMany
   */
  export type CompareinfomationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compareinfomations to delete
     */
    where?: CompareinfomationWhereInput
  }


  /**
   * Compareinfomation findRaw
   */
  export type CompareinfomationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Compareinfomation aggregateRaw
   */
  export type CompareinfomationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Compareinfomation without action
   */
  export type CompareinfomationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compareinfomation
     */
    select?: CompareinfomationSelect<ExtArgs> | null
  }



  /**
   * Model Type_assets_invested
   */

  export type AggregateType_assets_invested = {
    _count: Type_assets_investedCountAggregateOutputType | null
    _min: Type_assets_investedMinAggregateOutputType | null
    _max: Type_assets_investedMaxAggregateOutputType | null
  }

  export type Type_assets_investedMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
  }

  export type Type_assets_investedMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
  }

  export type Type_assets_investedCountAggregateOutputType = {
    id: number
    proj_id: number
    data: number
    _all: number
  }


  export type Type_assets_investedMinAggregateInputType = {
    id?: true
    proj_id?: true
  }

  export type Type_assets_investedMaxAggregateInputType = {
    id?: true
    proj_id?: true
  }

  export type Type_assets_investedCountAggregateInputType = {
    id?: true
    proj_id?: true
    data?: true
    _all?: true
  }

  export type Type_assets_investedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type_assets_invested to aggregate.
     */
    where?: Type_assets_investedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Type_assets_investeds to fetch.
     */
    orderBy?: Type_assets_investedOrderByWithRelationInput | Type_assets_investedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Type_assets_investedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Type_assets_investeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Type_assets_investeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Type_assets_investeds
    **/
    _count?: true | Type_assets_investedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Type_assets_investedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Type_assets_investedMaxAggregateInputType
  }

  export type GetType_assets_investedAggregateType<T extends Type_assets_investedAggregateArgs> = {
        [P in keyof T & keyof AggregateType_assets_invested]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType_assets_invested[P]>
      : GetScalarType<T[P], AggregateType_assets_invested[P]>
  }




  export type Type_assets_investedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Type_assets_investedWhereInput
    orderBy?: Type_assets_investedOrderByWithAggregationInput | Type_assets_investedOrderByWithAggregationInput[]
    by: Type_assets_investedScalarFieldEnum[] | Type_assets_investedScalarFieldEnum
    having?: Type_assets_investedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Type_assets_investedCountAggregateInputType | true
    _min?: Type_assets_investedMinAggregateInputType
    _max?: Type_assets_investedMaxAggregateInputType
  }

  export type Type_assets_investedGroupByOutputType = {
    id: string
    proj_id: string
    data: JsonValue
    _count: Type_assets_investedCountAggregateOutputType | null
    _min: Type_assets_investedMinAggregateOutputType | null
    _max: Type_assets_investedMaxAggregateOutputType | null
  }

  type GetType_assets_investedGroupByPayload<T extends Type_assets_investedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Type_assets_investedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Type_assets_investedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Type_assets_investedGroupByOutputType[P]>
            : GetScalarType<T[P], Type_assets_investedGroupByOutputType[P]>
        }
      >
    >


  export type Type_assets_investedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    data?: boolean
  }, ExtArgs["result"]["type_assets_invested"]>

  export type Type_assets_investedSelectScalar = {
    id?: boolean
    proj_id?: boolean
    data?: boolean
  }


  export type $Type_assets_investedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Type_assets_invested"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      data: Prisma.JsonValue
    }, ExtArgs["result"]["type_assets_invested"]>
    composites: {}
  }


  type Type_assets_investedGetPayload<S extends boolean | null | undefined | Type_assets_investedDefaultArgs> = $Result.GetResult<Prisma.$Type_assets_investedPayload, S>

  type Type_assets_investedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Type_assets_investedFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Type_assets_investedCountAggregateInputType | true
    }

  export interface Type_assets_investedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type_assets_invested'], meta: { name: 'Type_assets_invested' } }
    /**
     * Find zero or one Type_assets_invested that matches the filter.
     * @param {Type_assets_investedFindUniqueArgs} args - Arguments to find a Type_assets_invested
     * @example
     * // Get one Type_assets_invested
     * const type_assets_invested = await prisma.type_assets_invested.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Type_assets_investedFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Type_assets_investedFindUniqueArgs<ExtArgs>>
    ): Prisma__Type_assets_investedClient<$Result.GetResult<Prisma.$Type_assets_investedPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Type_assets_invested that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Type_assets_investedFindUniqueOrThrowArgs} args - Arguments to find a Type_assets_invested
     * @example
     * // Get one Type_assets_invested
     * const type_assets_invested = await prisma.type_assets_invested.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Type_assets_investedFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Type_assets_investedFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Type_assets_investedClient<$Result.GetResult<Prisma.$Type_assets_investedPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Type_assets_invested that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_assets_investedFindFirstArgs} args - Arguments to find a Type_assets_invested
     * @example
     * // Get one Type_assets_invested
     * const type_assets_invested = await prisma.type_assets_invested.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Type_assets_investedFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Type_assets_investedFindFirstArgs<ExtArgs>>
    ): Prisma__Type_assets_investedClient<$Result.GetResult<Prisma.$Type_assets_investedPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Type_assets_invested that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_assets_investedFindFirstOrThrowArgs} args - Arguments to find a Type_assets_invested
     * @example
     * // Get one Type_assets_invested
     * const type_assets_invested = await prisma.type_assets_invested.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Type_assets_investedFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Type_assets_investedFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Type_assets_investedClient<$Result.GetResult<Prisma.$Type_assets_investedPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Type_assets_investeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_assets_investedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Type_assets_investeds
     * const type_assets_investeds = await prisma.type_assets_invested.findMany()
     * 
     * // Get first 10 Type_assets_investeds
     * const type_assets_investeds = await prisma.type_assets_invested.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const type_assets_investedWithIdOnly = await prisma.type_assets_invested.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Type_assets_investedFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Type_assets_investedFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Type_assets_investedPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Type_assets_invested.
     * @param {Type_assets_investedCreateArgs} args - Arguments to create a Type_assets_invested.
     * @example
     * // Create one Type_assets_invested
     * const Type_assets_invested = await prisma.type_assets_invested.create({
     *   data: {
     *     // ... data to create a Type_assets_invested
     *   }
     * })
     * 
    **/
    create<T extends Type_assets_investedCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Type_assets_investedCreateArgs<ExtArgs>>
    ): Prisma__Type_assets_investedClient<$Result.GetResult<Prisma.$Type_assets_investedPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Type_assets_investeds.
     *     @param {Type_assets_investedCreateManyArgs} args - Arguments to create many Type_assets_investeds.
     *     @example
     *     // Create many Type_assets_investeds
     *     const type_assets_invested = await prisma.type_assets_invested.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Type_assets_investedCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Type_assets_investedCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Type_assets_invested.
     * @param {Type_assets_investedDeleteArgs} args - Arguments to delete one Type_assets_invested.
     * @example
     * // Delete one Type_assets_invested
     * const Type_assets_invested = await prisma.type_assets_invested.delete({
     *   where: {
     *     // ... filter to delete one Type_assets_invested
     *   }
     * })
     * 
    **/
    delete<T extends Type_assets_investedDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Type_assets_investedDeleteArgs<ExtArgs>>
    ): Prisma__Type_assets_investedClient<$Result.GetResult<Prisma.$Type_assets_investedPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Type_assets_invested.
     * @param {Type_assets_investedUpdateArgs} args - Arguments to update one Type_assets_invested.
     * @example
     * // Update one Type_assets_invested
     * const type_assets_invested = await prisma.type_assets_invested.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Type_assets_investedUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Type_assets_investedUpdateArgs<ExtArgs>>
    ): Prisma__Type_assets_investedClient<$Result.GetResult<Prisma.$Type_assets_investedPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Type_assets_investeds.
     * @param {Type_assets_investedDeleteManyArgs} args - Arguments to filter Type_assets_investeds to delete.
     * @example
     * // Delete a few Type_assets_investeds
     * const { count } = await prisma.type_assets_invested.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Type_assets_investedDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Type_assets_investedDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Type_assets_investeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_assets_investedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Type_assets_investeds
     * const type_assets_invested = await prisma.type_assets_invested.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Type_assets_investedUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Type_assets_investedUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Type_assets_invested.
     * @param {Type_assets_investedUpsertArgs} args - Arguments to update or create a Type_assets_invested.
     * @example
     * // Update or create a Type_assets_invested
     * const type_assets_invested = await prisma.type_assets_invested.upsert({
     *   create: {
     *     // ... data to create a Type_assets_invested
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type_assets_invested we want to update
     *   }
     * })
    **/
    upsert<T extends Type_assets_investedUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Type_assets_investedUpsertArgs<ExtArgs>>
    ): Prisma__Type_assets_investedClient<$Result.GetResult<Prisma.$Type_assets_investedPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Type_assets_investeds that matches the filter.
     * @param {Type_assets_investedFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const type_assets_invested = await prisma.type_assets_invested.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Type_assets_investedFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Type_assets_invested.
     * @param {Type_assets_investedAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const type_assets_invested = await prisma.type_assets_invested.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Type_assets_investedAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Type_assets_investeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_assets_investedCountArgs} args - Arguments to filter Type_assets_investeds to count.
     * @example
     * // Count the number of Type_assets_investeds
     * const count = await prisma.type_assets_invested.count({
     *   where: {
     *     // ... the filter for the Type_assets_investeds we want to count
     *   }
     * })
    **/
    count<T extends Type_assets_investedCountArgs>(
      args?: Subset<T, Type_assets_investedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Type_assets_investedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type_assets_invested.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_assets_investedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Type_assets_investedAggregateArgs>(args: Subset<T, Type_assets_investedAggregateArgs>): Prisma.PrismaPromise<GetType_assets_investedAggregateType<T>>

    /**
     * Group by Type_assets_invested.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_assets_investedGroupByArgs} args - Group by arguments.
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
      T extends Type_assets_investedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Type_assets_investedGroupByArgs['orderBy'] }
        : { orderBy?: Type_assets_investedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Type_assets_investedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetType_assets_investedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Type_assets_invested model
   */
  readonly fields: Type_assets_investedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Type_assets_invested.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Type_assets_investedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Type_assets_invested model
   */ 
  interface Type_assets_investedFieldRefs {
    readonly id: FieldRef<"Type_assets_invested", 'String'>
    readonly proj_id: FieldRef<"Type_assets_invested", 'String'>
    readonly data: FieldRef<"Type_assets_invested", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Type_assets_invested findUnique
   */
  export type Type_assets_investedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_assets_invested
     */
    select?: Type_assets_investedSelect<ExtArgs> | null
    /**
     * Filter, which Type_assets_invested to fetch.
     */
    where: Type_assets_investedWhereUniqueInput
  }


  /**
   * Type_assets_invested findUniqueOrThrow
   */
  export type Type_assets_investedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_assets_invested
     */
    select?: Type_assets_investedSelect<ExtArgs> | null
    /**
     * Filter, which Type_assets_invested to fetch.
     */
    where: Type_assets_investedWhereUniqueInput
  }


  /**
   * Type_assets_invested findFirst
   */
  export type Type_assets_investedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_assets_invested
     */
    select?: Type_assets_investedSelect<ExtArgs> | null
    /**
     * Filter, which Type_assets_invested to fetch.
     */
    where?: Type_assets_investedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Type_assets_investeds to fetch.
     */
    orderBy?: Type_assets_investedOrderByWithRelationInput | Type_assets_investedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Type_assets_investeds.
     */
    cursor?: Type_assets_investedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Type_assets_investeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Type_assets_investeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Type_assets_investeds.
     */
    distinct?: Type_assets_investedScalarFieldEnum | Type_assets_investedScalarFieldEnum[]
  }


  /**
   * Type_assets_invested findFirstOrThrow
   */
  export type Type_assets_investedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_assets_invested
     */
    select?: Type_assets_investedSelect<ExtArgs> | null
    /**
     * Filter, which Type_assets_invested to fetch.
     */
    where?: Type_assets_investedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Type_assets_investeds to fetch.
     */
    orderBy?: Type_assets_investedOrderByWithRelationInput | Type_assets_investedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Type_assets_investeds.
     */
    cursor?: Type_assets_investedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Type_assets_investeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Type_assets_investeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Type_assets_investeds.
     */
    distinct?: Type_assets_investedScalarFieldEnum | Type_assets_investedScalarFieldEnum[]
  }


  /**
   * Type_assets_invested findMany
   */
  export type Type_assets_investedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_assets_invested
     */
    select?: Type_assets_investedSelect<ExtArgs> | null
    /**
     * Filter, which Type_assets_investeds to fetch.
     */
    where?: Type_assets_investedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Type_assets_investeds to fetch.
     */
    orderBy?: Type_assets_investedOrderByWithRelationInput | Type_assets_investedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Type_assets_investeds.
     */
    cursor?: Type_assets_investedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Type_assets_investeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Type_assets_investeds.
     */
    skip?: number
    distinct?: Type_assets_investedScalarFieldEnum | Type_assets_investedScalarFieldEnum[]
  }


  /**
   * Type_assets_invested create
   */
  export type Type_assets_investedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_assets_invested
     */
    select?: Type_assets_investedSelect<ExtArgs> | null
    /**
     * The data needed to create a Type_assets_invested.
     */
    data: XOR<Type_assets_investedCreateInput, Type_assets_investedUncheckedCreateInput>
  }


  /**
   * Type_assets_invested createMany
   */
  export type Type_assets_investedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Type_assets_investeds.
     */
    data: Type_assets_investedCreateManyInput | Type_assets_investedCreateManyInput[]
  }


  /**
   * Type_assets_invested update
   */
  export type Type_assets_investedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_assets_invested
     */
    select?: Type_assets_investedSelect<ExtArgs> | null
    /**
     * The data needed to update a Type_assets_invested.
     */
    data: XOR<Type_assets_investedUpdateInput, Type_assets_investedUncheckedUpdateInput>
    /**
     * Choose, which Type_assets_invested to update.
     */
    where: Type_assets_investedWhereUniqueInput
  }


  /**
   * Type_assets_invested updateMany
   */
  export type Type_assets_investedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Type_assets_investeds.
     */
    data: XOR<Type_assets_investedUpdateManyMutationInput, Type_assets_investedUncheckedUpdateManyInput>
    /**
     * Filter which Type_assets_investeds to update
     */
    where?: Type_assets_investedWhereInput
  }


  /**
   * Type_assets_invested upsert
   */
  export type Type_assets_investedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_assets_invested
     */
    select?: Type_assets_investedSelect<ExtArgs> | null
    /**
     * The filter to search for the Type_assets_invested to update in case it exists.
     */
    where: Type_assets_investedWhereUniqueInput
    /**
     * In case the Type_assets_invested found by the `where` argument doesn't exist, create a new Type_assets_invested with this data.
     */
    create: XOR<Type_assets_investedCreateInput, Type_assets_investedUncheckedCreateInput>
    /**
     * In case the Type_assets_invested was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Type_assets_investedUpdateInput, Type_assets_investedUncheckedUpdateInput>
  }


  /**
   * Type_assets_invested delete
   */
  export type Type_assets_investedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_assets_invested
     */
    select?: Type_assets_investedSelect<ExtArgs> | null
    /**
     * Filter which Type_assets_invested to delete.
     */
    where: Type_assets_investedWhereUniqueInput
  }


  /**
   * Type_assets_invested deleteMany
   */
  export type Type_assets_investedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type_assets_investeds to delete
     */
    where?: Type_assets_investedWhereInput
  }


  /**
   * Type_assets_invested findRaw
   */
  export type Type_assets_investedFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Type_assets_invested aggregateRaw
   */
  export type Type_assets_investedAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Type_assets_invested without action
   */
  export type Type_assets_investedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_assets_invested
     */
    select?: Type_assets_investedSelect<ExtArgs> | null
  }



  /**
   * Model Top_five_investment_assets
   */

  export type AggregateTop_five_investment_assets = {
    _count: Top_five_investment_assetsCountAggregateOutputType | null
    _min: Top_five_investment_assetsMinAggregateOutputType | null
    _max: Top_five_investment_assetsMaxAggregateOutputType | null
  }

  export type Top_five_investment_assetsMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
  }

  export type Top_five_investment_assetsMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
  }

  export type Top_five_investment_assetsCountAggregateOutputType = {
    id: number
    proj_id: number
    data: number
    _all: number
  }


  export type Top_five_investment_assetsMinAggregateInputType = {
    id?: true
    proj_id?: true
  }

  export type Top_five_investment_assetsMaxAggregateInputType = {
    id?: true
    proj_id?: true
  }

  export type Top_five_investment_assetsCountAggregateInputType = {
    id?: true
    proj_id?: true
    data?: true
    _all?: true
  }

  export type Top_five_investment_assetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Top_five_investment_assets to aggregate.
     */
    where?: Top_five_investment_assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Top_five_investment_assets to fetch.
     */
    orderBy?: Top_five_investment_assetsOrderByWithRelationInput | Top_five_investment_assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Top_five_investment_assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Top_five_investment_assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Top_five_investment_assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Top_five_investment_assets
    **/
    _count?: true | Top_five_investment_assetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Top_five_investment_assetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Top_five_investment_assetsMaxAggregateInputType
  }

  export type GetTop_five_investment_assetsAggregateType<T extends Top_five_investment_assetsAggregateArgs> = {
        [P in keyof T & keyof AggregateTop_five_investment_assets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTop_five_investment_assets[P]>
      : GetScalarType<T[P], AggregateTop_five_investment_assets[P]>
  }




  export type Top_five_investment_assetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Top_five_investment_assetsWhereInput
    orderBy?: Top_five_investment_assetsOrderByWithAggregationInput | Top_five_investment_assetsOrderByWithAggregationInput[]
    by: Top_five_investment_assetsScalarFieldEnum[] | Top_five_investment_assetsScalarFieldEnum
    having?: Top_five_investment_assetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Top_five_investment_assetsCountAggregateInputType | true
    _min?: Top_five_investment_assetsMinAggregateInputType
    _max?: Top_five_investment_assetsMaxAggregateInputType
  }

  export type Top_five_investment_assetsGroupByOutputType = {
    id: string
    proj_id: string
    data: JsonValue
    _count: Top_five_investment_assetsCountAggregateOutputType | null
    _min: Top_five_investment_assetsMinAggregateOutputType | null
    _max: Top_five_investment_assetsMaxAggregateOutputType | null
  }

  type GetTop_five_investment_assetsGroupByPayload<T extends Top_five_investment_assetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Top_five_investment_assetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Top_five_investment_assetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Top_five_investment_assetsGroupByOutputType[P]>
            : GetScalarType<T[P], Top_five_investment_assetsGroupByOutputType[P]>
        }
      >
    >


  export type Top_five_investment_assetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    data?: boolean
  }, ExtArgs["result"]["top_five_investment_assets"]>

  export type Top_five_investment_assetsSelectScalar = {
    id?: boolean
    proj_id?: boolean
    data?: boolean
  }


  export type $Top_five_investment_assetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Top_five_investment_assets"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      data: Prisma.JsonValue
    }, ExtArgs["result"]["top_five_investment_assets"]>
    composites: {}
  }


  type Top_five_investment_assetsGetPayload<S extends boolean | null | undefined | Top_five_investment_assetsDefaultArgs> = $Result.GetResult<Prisma.$Top_five_investment_assetsPayload, S>

  type Top_five_investment_assetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Top_five_investment_assetsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Top_five_investment_assetsCountAggregateInputType | true
    }

  export interface Top_five_investment_assetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Top_five_investment_assets'], meta: { name: 'Top_five_investment_assets' } }
    /**
     * Find zero or one Top_five_investment_assets that matches the filter.
     * @param {Top_five_investment_assetsFindUniqueArgs} args - Arguments to find a Top_five_investment_assets
     * @example
     * // Get one Top_five_investment_assets
     * const top_five_investment_assets = await prisma.top_five_investment_assets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Top_five_investment_assetsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Top_five_investment_assetsFindUniqueArgs<ExtArgs>>
    ): Prisma__Top_five_investment_assetsClient<$Result.GetResult<Prisma.$Top_five_investment_assetsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Top_five_investment_assets that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Top_five_investment_assetsFindUniqueOrThrowArgs} args - Arguments to find a Top_five_investment_assets
     * @example
     * // Get one Top_five_investment_assets
     * const top_five_investment_assets = await prisma.top_five_investment_assets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Top_five_investment_assetsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Top_five_investment_assetsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Top_five_investment_assetsClient<$Result.GetResult<Prisma.$Top_five_investment_assetsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Top_five_investment_assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Top_five_investment_assetsFindFirstArgs} args - Arguments to find a Top_five_investment_assets
     * @example
     * // Get one Top_five_investment_assets
     * const top_five_investment_assets = await prisma.top_five_investment_assets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Top_five_investment_assetsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Top_five_investment_assetsFindFirstArgs<ExtArgs>>
    ): Prisma__Top_five_investment_assetsClient<$Result.GetResult<Prisma.$Top_five_investment_assetsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Top_five_investment_assets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Top_five_investment_assetsFindFirstOrThrowArgs} args - Arguments to find a Top_five_investment_assets
     * @example
     * // Get one Top_five_investment_assets
     * const top_five_investment_assets = await prisma.top_five_investment_assets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Top_five_investment_assetsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Top_five_investment_assetsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Top_five_investment_assetsClient<$Result.GetResult<Prisma.$Top_five_investment_assetsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Top_five_investment_assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Top_five_investment_assetsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Top_five_investment_assets
     * const top_five_investment_assets = await prisma.top_five_investment_assets.findMany()
     * 
     * // Get first 10 Top_five_investment_assets
     * const top_five_investment_assets = await prisma.top_five_investment_assets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const top_five_investment_assetsWithIdOnly = await prisma.top_five_investment_assets.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Top_five_investment_assetsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Top_five_investment_assetsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Top_five_investment_assetsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Top_five_investment_assets.
     * @param {Top_five_investment_assetsCreateArgs} args - Arguments to create a Top_five_investment_assets.
     * @example
     * // Create one Top_five_investment_assets
     * const Top_five_investment_assets = await prisma.top_five_investment_assets.create({
     *   data: {
     *     // ... data to create a Top_five_investment_assets
     *   }
     * })
     * 
    **/
    create<T extends Top_five_investment_assetsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Top_five_investment_assetsCreateArgs<ExtArgs>>
    ): Prisma__Top_five_investment_assetsClient<$Result.GetResult<Prisma.$Top_five_investment_assetsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Top_five_investment_assets.
     *     @param {Top_five_investment_assetsCreateManyArgs} args - Arguments to create many Top_five_investment_assets.
     *     @example
     *     // Create many Top_five_investment_assets
     *     const top_five_investment_assets = await prisma.top_five_investment_assets.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Top_five_investment_assetsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Top_five_investment_assetsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Top_five_investment_assets.
     * @param {Top_five_investment_assetsDeleteArgs} args - Arguments to delete one Top_five_investment_assets.
     * @example
     * // Delete one Top_five_investment_assets
     * const Top_five_investment_assets = await prisma.top_five_investment_assets.delete({
     *   where: {
     *     // ... filter to delete one Top_five_investment_assets
     *   }
     * })
     * 
    **/
    delete<T extends Top_five_investment_assetsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Top_five_investment_assetsDeleteArgs<ExtArgs>>
    ): Prisma__Top_five_investment_assetsClient<$Result.GetResult<Prisma.$Top_five_investment_assetsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Top_five_investment_assets.
     * @param {Top_five_investment_assetsUpdateArgs} args - Arguments to update one Top_five_investment_assets.
     * @example
     * // Update one Top_five_investment_assets
     * const top_five_investment_assets = await prisma.top_five_investment_assets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Top_five_investment_assetsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Top_five_investment_assetsUpdateArgs<ExtArgs>>
    ): Prisma__Top_five_investment_assetsClient<$Result.GetResult<Prisma.$Top_five_investment_assetsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Top_five_investment_assets.
     * @param {Top_five_investment_assetsDeleteManyArgs} args - Arguments to filter Top_five_investment_assets to delete.
     * @example
     * // Delete a few Top_five_investment_assets
     * const { count } = await prisma.top_five_investment_assets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Top_five_investment_assetsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Top_five_investment_assetsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Top_five_investment_assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Top_five_investment_assetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Top_five_investment_assets
     * const top_five_investment_assets = await prisma.top_five_investment_assets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Top_five_investment_assetsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Top_five_investment_assetsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Top_five_investment_assets.
     * @param {Top_five_investment_assetsUpsertArgs} args - Arguments to update or create a Top_five_investment_assets.
     * @example
     * // Update or create a Top_five_investment_assets
     * const top_five_investment_assets = await prisma.top_five_investment_assets.upsert({
     *   create: {
     *     // ... data to create a Top_five_investment_assets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Top_five_investment_assets we want to update
     *   }
     * })
    **/
    upsert<T extends Top_five_investment_assetsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Top_five_investment_assetsUpsertArgs<ExtArgs>>
    ): Prisma__Top_five_investment_assetsClient<$Result.GetResult<Prisma.$Top_five_investment_assetsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Top_five_investment_assets that matches the filter.
     * @param {Top_five_investment_assetsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const top_five_investment_assets = await prisma.top_five_investment_assets.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Top_five_investment_assetsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Top_five_investment_assets.
     * @param {Top_five_investment_assetsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const top_five_investment_assets = await prisma.top_five_investment_assets.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Top_five_investment_assetsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Top_five_investment_assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Top_five_investment_assetsCountArgs} args - Arguments to filter Top_five_investment_assets to count.
     * @example
     * // Count the number of Top_five_investment_assets
     * const count = await prisma.top_five_investment_assets.count({
     *   where: {
     *     // ... the filter for the Top_five_investment_assets we want to count
     *   }
     * })
    **/
    count<T extends Top_five_investment_assetsCountArgs>(
      args?: Subset<T, Top_five_investment_assetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Top_five_investment_assetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Top_five_investment_assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Top_five_investment_assetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Top_five_investment_assetsAggregateArgs>(args: Subset<T, Top_five_investment_assetsAggregateArgs>): Prisma.PrismaPromise<GetTop_five_investment_assetsAggregateType<T>>

    /**
     * Group by Top_five_investment_assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Top_five_investment_assetsGroupByArgs} args - Group by arguments.
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
      T extends Top_five_investment_assetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Top_five_investment_assetsGroupByArgs['orderBy'] }
        : { orderBy?: Top_five_investment_assetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Top_five_investment_assetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTop_five_investment_assetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Top_five_investment_assets model
   */
  readonly fields: Top_five_investment_assetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Top_five_investment_assets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Top_five_investment_assetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Top_five_investment_assets model
   */ 
  interface Top_five_investment_assetsFieldRefs {
    readonly id: FieldRef<"Top_five_investment_assets", 'String'>
    readonly proj_id: FieldRef<"Top_five_investment_assets", 'String'>
    readonly data: FieldRef<"Top_five_investment_assets", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Top_five_investment_assets findUnique
   */
  export type Top_five_investment_assetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Top_five_investment_assets
     */
    select?: Top_five_investment_assetsSelect<ExtArgs> | null
    /**
     * Filter, which Top_five_investment_assets to fetch.
     */
    where: Top_five_investment_assetsWhereUniqueInput
  }


  /**
   * Top_five_investment_assets findUniqueOrThrow
   */
  export type Top_five_investment_assetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Top_five_investment_assets
     */
    select?: Top_five_investment_assetsSelect<ExtArgs> | null
    /**
     * Filter, which Top_five_investment_assets to fetch.
     */
    where: Top_five_investment_assetsWhereUniqueInput
  }


  /**
   * Top_five_investment_assets findFirst
   */
  export type Top_five_investment_assetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Top_five_investment_assets
     */
    select?: Top_five_investment_assetsSelect<ExtArgs> | null
    /**
     * Filter, which Top_five_investment_assets to fetch.
     */
    where?: Top_five_investment_assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Top_five_investment_assets to fetch.
     */
    orderBy?: Top_five_investment_assetsOrderByWithRelationInput | Top_five_investment_assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Top_five_investment_assets.
     */
    cursor?: Top_five_investment_assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Top_five_investment_assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Top_five_investment_assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Top_five_investment_assets.
     */
    distinct?: Top_five_investment_assetsScalarFieldEnum | Top_five_investment_assetsScalarFieldEnum[]
  }


  /**
   * Top_five_investment_assets findFirstOrThrow
   */
  export type Top_five_investment_assetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Top_five_investment_assets
     */
    select?: Top_five_investment_assetsSelect<ExtArgs> | null
    /**
     * Filter, which Top_five_investment_assets to fetch.
     */
    where?: Top_five_investment_assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Top_five_investment_assets to fetch.
     */
    orderBy?: Top_five_investment_assetsOrderByWithRelationInput | Top_five_investment_assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Top_five_investment_assets.
     */
    cursor?: Top_five_investment_assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Top_five_investment_assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Top_five_investment_assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Top_five_investment_assets.
     */
    distinct?: Top_five_investment_assetsScalarFieldEnum | Top_five_investment_assetsScalarFieldEnum[]
  }


  /**
   * Top_five_investment_assets findMany
   */
  export type Top_five_investment_assetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Top_five_investment_assets
     */
    select?: Top_five_investment_assetsSelect<ExtArgs> | null
    /**
     * Filter, which Top_five_investment_assets to fetch.
     */
    where?: Top_five_investment_assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Top_five_investment_assets to fetch.
     */
    orderBy?: Top_five_investment_assetsOrderByWithRelationInput | Top_five_investment_assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Top_five_investment_assets.
     */
    cursor?: Top_five_investment_assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Top_five_investment_assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Top_five_investment_assets.
     */
    skip?: number
    distinct?: Top_five_investment_assetsScalarFieldEnum | Top_five_investment_assetsScalarFieldEnum[]
  }


  /**
   * Top_five_investment_assets create
   */
  export type Top_five_investment_assetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Top_five_investment_assets
     */
    select?: Top_five_investment_assetsSelect<ExtArgs> | null
    /**
     * The data needed to create a Top_five_investment_assets.
     */
    data: XOR<Top_five_investment_assetsCreateInput, Top_five_investment_assetsUncheckedCreateInput>
  }


  /**
   * Top_five_investment_assets createMany
   */
  export type Top_five_investment_assetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Top_five_investment_assets.
     */
    data: Top_five_investment_assetsCreateManyInput | Top_five_investment_assetsCreateManyInput[]
  }


  /**
   * Top_five_investment_assets update
   */
  export type Top_five_investment_assetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Top_five_investment_assets
     */
    select?: Top_five_investment_assetsSelect<ExtArgs> | null
    /**
     * The data needed to update a Top_five_investment_assets.
     */
    data: XOR<Top_five_investment_assetsUpdateInput, Top_five_investment_assetsUncheckedUpdateInput>
    /**
     * Choose, which Top_five_investment_assets to update.
     */
    where: Top_five_investment_assetsWhereUniqueInput
  }


  /**
   * Top_five_investment_assets updateMany
   */
  export type Top_five_investment_assetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Top_five_investment_assets.
     */
    data: XOR<Top_five_investment_assetsUpdateManyMutationInput, Top_five_investment_assetsUncheckedUpdateManyInput>
    /**
     * Filter which Top_five_investment_assets to update
     */
    where?: Top_five_investment_assetsWhereInput
  }


  /**
   * Top_five_investment_assets upsert
   */
  export type Top_five_investment_assetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Top_five_investment_assets
     */
    select?: Top_five_investment_assetsSelect<ExtArgs> | null
    /**
     * The filter to search for the Top_five_investment_assets to update in case it exists.
     */
    where: Top_five_investment_assetsWhereUniqueInput
    /**
     * In case the Top_five_investment_assets found by the `where` argument doesn't exist, create a new Top_five_investment_assets with this data.
     */
    create: XOR<Top_five_investment_assetsCreateInput, Top_five_investment_assetsUncheckedCreateInput>
    /**
     * In case the Top_five_investment_assets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Top_five_investment_assetsUpdateInput, Top_five_investment_assetsUncheckedUpdateInput>
  }


  /**
   * Top_five_investment_assets delete
   */
  export type Top_five_investment_assetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Top_five_investment_assets
     */
    select?: Top_five_investment_assetsSelect<ExtArgs> | null
    /**
     * Filter which Top_five_investment_assets to delete.
     */
    where: Top_five_investment_assetsWhereUniqueInput
  }


  /**
   * Top_five_investment_assets deleteMany
   */
  export type Top_five_investment_assetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Top_five_investment_assets to delete
     */
    where?: Top_five_investment_assetsWhereInput
  }


  /**
   * Top_five_investment_assets findRaw
   */
  export type Top_five_investment_assetsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Top_five_investment_assets aggregateRaw
   */
  export type Top_five_investment_assetsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Top_five_investment_assets without action
   */
  export type Top_five_investment_assetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Top_five_investment_assets
     */
    select?: Top_five_investment_assetsSelect<ExtArgs> | null
  }



  /**
   * Model Fees_charged_by_mutual_funds
   */

  export type AggregateFees_charged_by_mutual_funds = {
    _count: Fees_charged_by_mutual_fundsCountAggregateOutputType | null
    _min: Fees_charged_by_mutual_fundsMinAggregateOutputType | null
    _max: Fees_charged_by_mutual_fundsMaxAggregateOutputType | null
  }

  export type Fees_charged_by_mutual_fundsMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
  }

  export type Fees_charged_by_mutual_fundsMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
  }

  export type Fees_charged_by_mutual_fundsCountAggregateOutputType = {
    id: number
    proj_id: number
    data: number
    _all: number
  }


  export type Fees_charged_by_mutual_fundsMinAggregateInputType = {
    id?: true
    proj_id?: true
  }

  export type Fees_charged_by_mutual_fundsMaxAggregateInputType = {
    id?: true
    proj_id?: true
  }

  export type Fees_charged_by_mutual_fundsCountAggregateInputType = {
    id?: true
    proj_id?: true
    data?: true
    _all?: true
  }

  export type Fees_charged_by_mutual_fundsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fees_charged_by_mutual_funds to aggregate.
     */
    where?: Fees_charged_by_mutual_fundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees_charged_by_mutual_funds to fetch.
     */
    orderBy?: Fees_charged_by_mutual_fundsOrderByWithRelationInput | Fees_charged_by_mutual_fundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Fees_charged_by_mutual_fundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees_charged_by_mutual_funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees_charged_by_mutual_funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fees_charged_by_mutual_funds
    **/
    _count?: true | Fees_charged_by_mutual_fundsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fees_charged_by_mutual_fundsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fees_charged_by_mutual_fundsMaxAggregateInputType
  }

  export type GetFees_charged_by_mutual_fundsAggregateType<T extends Fees_charged_by_mutual_fundsAggregateArgs> = {
        [P in keyof T & keyof AggregateFees_charged_by_mutual_funds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFees_charged_by_mutual_funds[P]>
      : GetScalarType<T[P], AggregateFees_charged_by_mutual_funds[P]>
  }




  export type Fees_charged_by_mutual_fundsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Fees_charged_by_mutual_fundsWhereInput
    orderBy?: Fees_charged_by_mutual_fundsOrderByWithAggregationInput | Fees_charged_by_mutual_fundsOrderByWithAggregationInput[]
    by: Fees_charged_by_mutual_fundsScalarFieldEnum[] | Fees_charged_by_mutual_fundsScalarFieldEnum
    having?: Fees_charged_by_mutual_fundsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fees_charged_by_mutual_fundsCountAggregateInputType | true
    _min?: Fees_charged_by_mutual_fundsMinAggregateInputType
    _max?: Fees_charged_by_mutual_fundsMaxAggregateInputType
  }

  export type Fees_charged_by_mutual_fundsGroupByOutputType = {
    id: string
    proj_id: string
    data: JsonValue
    _count: Fees_charged_by_mutual_fundsCountAggregateOutputType | null
    _min: Fees_charged_by_mutual_fundsMinAggregateOutputType | null
    _max: Fees_charged_by_mutual_fundsMaxAggregateOutputType | null
  }

  type GetFees_charged_by_mutual_fundsGroupByPayload<T extends Fees_charged_by_mutual_fundsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fees_charged_by_mutual_fundsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fees_charged_by_mutual_fundsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fees_charged_by_mutual_fundsGroupByOutputType[P]>
            : GetScalarType<T[P], Fees_charged_by_mutual_fundsGroupByOutputType[P]>
        }
      >
    >


  export type Fees_charged_by_mutual_fundsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    data?: boolean
  }, ExtArgs["result"]["fees_charged_by_mutual_funds"]>

  export type Fees_charged_by_mutual_fundsSelectScalar = {
    id?: boolean
    proj_id?: boolean
    data?: boolean
  }


  export type $Fees_charged_by_mutual_fundsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fees_charged_by_mutual_funds"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      data: Prisma.JsonValue
    }, ExtArgs["result"]["fees_charged_by_mutual_funds"]>
    composites: {}
  }


  type Fees_charged_by_mutual_fundsGetPayload<S extends boolean | null | undefined | Fees_charged_by_mutual_fundsDefaultArgs> = $Result.GetResult<Prisma.$Fees_charged_by_mutual_fundsPayload, S>

  type Fees_charged_by_mutual_fundsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Fees_charged_by_mutual_fundsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Fees_charged_by_mutual_fundsCountAggregateInputType | true
    }

  export interface Fees_charged_by_mutual_fundsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fees_charged_by_mutual_funds'], meta: { name: 'Fees_charged_by_mutual_funds' } }
    /**
     * Find zero or one Fees_charged_by_mutual_funds that matches the filter.
     * @param {Fees_charged_by_mutual_fundsFindUniqueArgs} args - Arguments to find a Fees_charged_by_mutual_funds
     * @example
     * // Get one Fees_charged_by_mutual_funds
     * const fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Fees_charged_by_mutual_fundsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Fees_charged_by_mutual_fundsFindUniqueArgs<ExtArgs>>
    ): Prisma__Fees_charged_by_mutual_fundsClient<$Result.GetResult<Prisma.$Fees_charged_by_mutual_fundsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fees_charged_by_mutual_funds that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Fees_charged_by_mutual_fundsFindUniqueOrThrowArgs} args - Arguments to find a Fees_charged_by_mutual_funds
     * @example
     * // Get one Fees_charged_by_mutual_funds
     * const fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Fees_charged_by_mutual_fundsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Fees_charged_by_mutual_fundsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Fees_charged_by_mutual_fundsClient<$Result.GetResult<Prisma.$Fees_charged_by_mutual_fundsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fees_charged_by_mutual_funds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fees_charged_by_mutual_fundsFindFirstArgs} args - Arguments to find a Fees_charged_by_mutual_funds
     * @example
     * // Get one Fees_charged_by_mutual_funds
     * const fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Fees_charged_by_mutual_fundsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Fees_charged_by_mutual_fundsFindFirstArgs<ExtArgs>>
    ): Prisma__Fees_charged_by_mutual_fundsClient<$Result.GetResult<Prisma.$Fees_charged_by_mutual_fundsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fees_charged_by_mutual_funds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fees_charged_by_mutual_fundsFindFirstOrThrowArgs} args - Arguments to find a Fees_charged_by_mutual_funds
     * @example
     * // Get one Fees_charged_by_mutual_funds
     * const fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Fees_charged_by_mutual_fundsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Fees_charged_by_mutual_fundsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Fees_charged_by_mutual_fundsClient<$Result.GetResult<Prisma.$Fees_charged_by_mutual_fundsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fees_charged_by_mutual_funds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fees_charged_by_mutual_fundsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fees_charged_by_mutual_funds
     * const fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.findMany()
     * 
     * // Get first 10 Fees_charged_by_mutual_funds
     * const fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fees_charged_by_mutual_fundsWithIdOnly = await prisma.fees_charged_by_mutual_funds.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Fees_charged_by_mutual_fundsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Fees_charged_by_mutual_fundsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Fees_charged_by_mutual_fundsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fees_charged_by_mutual_funds.
     * @param {Fees_charged_by_mutual_fundsCreateArgs} args - Arguments to create a Fees_charged_by_mutual_funds.
     * @example
     * // Create one Fees_charged_by_mutual_funds
     * const Fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.create({
     *   data: {
     *     // ... data to create a Fees_charged_by_mutual_funds
     *   }
     * })
     * 
    **/
    create<T extends Fees_charged_by_mutual_fundsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Fees_charged_by_mutual_fundsCreateArgs<ExtArgs>>
    ): Prisma__Fees_charged_by_mutual_fundsClient<$Result.GetResult<Prisma.$Fees_charged_by_mutual_fundsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fees_charged_by_mutual_funds.
     *     @param {Fees_charged_by_mutual_fundsCreateManyArgs} args - Arguments to create many Fees_charged_by_mutual_funds.
     *     @example
     *     // Create many Fees_charged_by_mutual_funds
     *     const fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Fees_charged_by_mutual_fundsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Fees_charged_by_mutual_fundsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fees_charged_by_mutual_funds.
     * @param {Fees_charged_by_mutual_fundsDeleteArgs} args - Arguments to delete one Fees_charged_by_mutual_funds.
     * @example
     * // Delete one Fees_charged_by_mutual_funds
     * const Fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.delete({
     *   where: {
     *     // ... filter to delete one Fees_charged_by_mutual_funds
     *   }
     * })
     * 
    **/
    delete<T extends Fees_charged_by_mutual_fundsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Fees_charged_by_mutual_fundsDeleteArgs<ExtArgs>>
    ): Prisma__Fees_charged_by_mutual_fundsClient<$Result.GetResult<Prisma.$Fees_charged_by_mutual_fundsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fees_charged_by_mutual_funds.
     * @param {Fees_charged_by_mutual_fundsUpdateArgs} args - Arguments to update one Fees_charged_by_mutual_funds.
     * @example
     * // Update one Fees_charged_by_mutual_funds
     * const fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Fees_charged_by_mutual_fundsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Fees_charged_by_mutual_fundsUpdateArgs<ExtArgs>>
    ): Prisma__Fees_charged_by_mutual_fundsClient<$Result.GetResult<Prisma.$Fees_charged_by_mutual_fundsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fees_charged_by_mutual_funds.
     * @param {Fees_charged_by_mutual_fundsDeleteManyArgs} args - Arguments to filter Fees_charged_by_mutual_funds to delete.
     * @example
     * // Delete a few Fees_charged_by_mutual_funds
     * const { count } = await prisma.fees_charged_by_mutual_funds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Fees_charged_by_mutual_fundsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Fees_charged_by_mutual_fundsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fees_charged_by_mutual_funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fees_charged_by_mutual_fundsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fees_charged_by_mutual_funds
     * const fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Fees_charged_by_mutual_fundsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Fees_charged_by_mutual_fundsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fees_charged_by_mutual_funds.
     * @param {Fees_charged_by_mutual_fundsUpsertArgs} args - Arguments to update or create a Fees_charged_by_mutual_funds.
     * @example
     * // Update or create a Fees_charged_by_mutual_funds
     * const fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.upsert({
     *   create: {
     *     // ... data to create a Fees_charged_by_mutual_funds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fees_charged_by_mutual_funds we want to update
     *   }
     * })
    **/
    upsert<T extends Fees_charged_by_mutual_fundsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Fees_charged_by_mutual_fundsUpsertArgs<ExtArgs>>
    ): Prisma__Fees_charged_by_mutual_fundsClient<$Result.GetResult<Prisma.$Fees_charged_by_mutual_fundsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Fees_charged_by_mutual_funds that matches the filter.
     * @param {Fees_charged_by_mutual_fundsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Fees_charged_by_mutual_fundsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Fees_charged_by_mutual_funds.
     * @param {Fees_charged_by_mutual_fundsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const fees_charged_by_mutual_funds = await prisma.fees_charged_by_mutual_funds.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Fees_charged_by_mutual_fundsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Fees_charged_by_mutual_funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fees_charged_by_mutual_fundsCountArgs} args - Arguments to filter Fees_charged_by_mutual_funds to count.
     * @example
     * // Count the number of Fees_charged_by_mutual_funds
     * const count = await prisma.fees_charged_by_mutual_funds.count({
     *   where: {
     *     // ... the filter for the Fees_charged_by_mutual_funds we want to count
     *   }
     * })
    **/
    count<T extends Fees_charged_by_mutual_fundsCountArgs>(
      args?: Subset<T, Fees_charged_by_mutual_fundsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fees_charged_by_mutual_fundsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fees_charged_by_mutual_funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fees_charged_by_mutual_fundsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Fees_charged_by_mutual_fundsAggregateArgs>(args: Subset<T, Fees_charged_by_mutual_fundsAggregateArgs>): Prisma.PrismaPromise<GetFees_charged_by_mutual_fundsAggregateType<T>>

    /**
     * Group by Fees_charged_by_mutual_funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fees_charged_by_mutual_fundsGroupByArgs} args - Group by arguments.
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
      T extends Fees_charged_by_mutual_fundsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Fees_charged_by_mutual_fundsGroupByArgs['orderBy'] }
        : { orderBy?: Fees_charged_by_mutual_fundsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Fees_charged_by_mutual_fundsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFees_charged_by_mutual_fundsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fees_charged_by_mutual_funds model
   */
  readonly fields: Fees_charged_by_mutual_fundsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fees_charged_by_mutual_funds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Fees_charged_by_mutual_fundsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Fees_charged_by_mutual_funds model
   */ 
  interface Fees_charged_by_mutual_fundsFieldRefs {
    readonly id: FieldRef<"Fees_charged_by_mutual_funds", 'String'>
    readonly proj_id: FieldRef<"Fees_charged_by_mutual_funds", 'String'>
    readonly data: FieldRef<"Fees_charged_by_mutual_funds", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Fees_charged_by_mutual_funds findUnique
   */
  export type Fees_charged_by_mutual_fundsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_by_mutual_funds
     */
    select?: Fees_charged_by_mutual_fundsSelect<ExtArgs> | null
    /**
     * Filter, which Fees_charged_by_mutual_funds to fetch.
     */
    where: Fees_charged_by_mutual_fundsWhereUniqueInput
  }


  /**
   * Fees_charged_by_mutual_funds findUniqueOrThrow
   */
  export type Fees_charged_by_mutual_fundsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_by_mutual_funds
     */
    select?: Fees_charged_by_mutual_fundsSelect<ExtArgs> | null
    /**
     * Filter, which Fees_charged_by_mutual_funds to fetch.
     */
    where: Fees_charged_by_mutual_fundsWhereUniqueInput
  }


  /**
   * Fees_charged_by_mutual_funds findFirst
   */
  export type Fees_charged_by_mutual_fundsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_by_mutual_funds
     */
    select?: Fees_charged_by_mutual_fundsSelect<ExtArgs> | null
    /**
     * Filter, which Fees_charged_by_mutual_funds to fetch.
     */
    where?: Fees_charged_by_mutual_fundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees_charged_by_mutual_funds to fetch.
     */
    orderBy?: Fees_charged_by_mutual_fundsOrderByWithRelationInput | Fees_charged_by_mutual_fundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fees_charged_by_mutual_funds.
     */
    cursor?: Fees_charged_by_mutual_fundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees_charged_by_mutual_funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees_charged_by_mutual_funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fees_charged_by_mutual_funds.
     */
    distinct?: Fees_charged_by_mutual_fundsScalarFieldEnum | Fees_charged_by_mutual_fundsScalarFieldEnum[]
  }


  /**
   * Fees_charged_by_mutual_funds findFirstOrThrow
   */
  export type Fees_charged_by_mutual_fundsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_by_mutual_funds
     */
    select?: Fees_charged_by_mutual_fundsSelect<ExtArgs> | null
    /**
     * Filter, which Fees_charged_by_mutual_funds to fetch.
     */
    where?: Fees_charged_by_mutual_fundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees_charged_by_mutual_funds to fetch.
     */
    orderBy?: Fees_charged_by_mutual_fundsOrderByWithRelationInput | Fees_charged_by_mutual_fundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fees_charged_by_mutual_funds.
     */
    cursor?: Fees_charged_by_mutual_fundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees_charged_by_mutual_funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees_charged_by_mutual_funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fees_charged_by_mutual_funds.
     */
    distinct?: Fees_charged_by_mutual_fundsScalarFieldEnum | Fees_charged_by_mutual_fundsScalarFieldEnum[]
  }


  /**
   * Fees_charged_by_mutual_funds findMany
   */
  export type Fees_charged_by_mutual_fundsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_by_mutual_funds
     */
    select?: Fees_charged_by_mutual_fundsSelect<ExtArgs> | null
    /**
     * Filter, which Fees_charged_by_mutual_funds to fetch.
     */
    where?: Fees_charged_by_mutual_fundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees_charged_by_mutual_funds to fetch.
     */
    orderBy?: Fees_charged_by_mutual_fundsOrderByWithRelationInput | Fees_charged_by_mutual_fundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fees_charged_by_mutual_funds.
     */
    cursor?: Fees_charged_by_mutual_fundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees_charged_by_mutual_funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees_charged_by_mutual_funds.
     */
    skip?: number
    distinct?: Fees_charged_by_mutual_fundsScalarFieldEnum | Fees_charged_by_mutual_fundsScalarFieldEnum[]
  }


  /**
   * Fees_charged_by_mutual_funds create
   */
  export type Fees_charged_by_mutual_fundsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_by_mutual_funds
     */
    select?: Fees_charged_by_mutual_fundsSelect<ExtArgs> | null
    /**
     * The data needed to create a Fees_charged_by_mutual_funds.
     */
    data: XOR<Fees_charged_by_mutual_fundsCreateInput, Fees_charged_by_mutual_fundsUncheckedCreateInput>
  }


  /**
   * Fees_charged_by_mutual_funds createMany
   */
  export type Fees_charged_by_mutual_fundsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fees_charged_by_mutual_funds.
     */
    data: Fees_charged_by_mutual_fundsCreateManyInput | Fees_charged_by_mutual_fundsCreateManyInput[]
  }


  /**
   * Fees_charged_by_mutual_funds update
   */
  export type Fees_charged_by_mutual_fundsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_by_mutual_funds
     */
    select?: Fees_charged_by_mutual_fundsSelect<ExtArgs> | null
    /**
     * The data needed to update a Fees_charged_by_mutual_funds.
     */
    data: XOR<Fees_charged_by_mutual_fundsUpdateInput, Fees_charged_by_mutual_fundsUncheckedUpdateInput>
    /**
     * Choose, which Fees_charged_by_mutual_funds to update.
     */
    where: Fees_charged_by_mutual_fundsWhereUniqueInput
  }


  /**
   * Fees_charged_by_mutual_funds updateMany
   */
  export type Fees_charged_by_mutual_fundsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fees_charged_by_mutual_funds.
     */
    data: XOR<Fees_charged_by_mutual_fundsUpdateManyMutationInput, Fees_charged_by_mutual_fundsUncheckedUpdateManyInput>
    /**
     * Filter which Fees_charged_by_mutual_funds to update
     */
    where?: Fees_charged_by_mutual_fundsWhereInput
  }


  /**
   * Fees_charged_by_mutual_funds upsert
   */
  export type Fees_charged_by_mutual_fundsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_by_mutual_funds
     */
    select?: Fees_charged_by_mutual_fundsSelect<ExtArgs> | null
    /**
     * The filter to search for the Fees_charged_by_mutual_funds to update in case it exists.
     */
    where: Fees_charged_by_mutual_fundsWhereUniqueInput
    /**
     * In case the Fees_charged_by_mutual_funds found by the `where` argument doesn't exist, create a new Fees_charged_by_mutual_funds with this data.
     */
    create: XOR<Fees_charged_by_mutual_fundsCreateInput, Fees_charged_by_mutual_fundsUncheckedCreateInput>
    /**
     * In case the Fees_charged_by_mutual_funds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Fees_charged_by_mutual_fundsUpdateInput, Fees_charged_by_mutual_fundsUncheckedUpdateInput>
  }


  /**
   * Fees_charged_by_mutual_funds delete
   */
  export type Fees_charged_by_mutual_fundsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_by_mutual_funds
     */
    select?: Fees_charged_by_mutual_fundsSelect<ExtArgs> | null
    /**
     * Filter which Fees_charged_by_mutual_funds to delete.
     */
    where: Fees_charged_by_mutual_fundsWhereUniqueInput
  }


  /**
   * Fees_charged_by_mutual_funds deleteMany
   */
  export type Fees_charged_by_mutual_fundsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fees_charged_by_mutual_funds to delete
     */
    where?: Fees_charged_by_mutual_fundsWhereInput
  }


  /**
   * Fees_charged_by_mutual_funds findRaw
   */
  export type Fees_charged_by_mutual_fundsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Fees_charged_by_mutual_funds aggregateRaw
   */
  export type Fees_charged_by_mutual_fundsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Fees_charged_by_mutual_funds without action
   */
  export type Fees_charged_by_mutual_fundsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_by_mutual_funds
     */
    select?: Fees_charged_by_mutual_fundsSelect<ExtArgs> | null
  }



  /**
   * Model Fees_charged_to_unitholders
   */

  export type AggregateFees_charged_to_unitholders = {
    _count: Fees_charged_to_unitholdersCountAggregateOutputType | null
    _min: Fees_charged_to_unitholdersMinAggregateOutputType | null
    _max: Fees_charged_to_unitholdersMaxAggregateOutputType | null
  }

  export type Fees_charged_to_unitholdersMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
  }

  export type Fees_charged_to_unitholdersMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
  }

  export type Fees_charged_to_unitholdersCountAggregateOutputType = {
    id: number
    proj_id: number
    data: number
    _all: number
  }


  export type Fees_charged_to_unitholdersMinAggregateInputType = {
    id?: true
    proj_id?: true
  }

  export type Fees_charged_to_unitholdersMaxAggregateInputType = {
    id?: true
    proj_id?: true
  }

  export type Fees_charged_to_unitholdersCountAggregateInputType = {
    id?: true
    proj_id?: true
    data?: true
    _all?: true
  }

  export type Fees_charged_to_unitholdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fees_charged_to_unitholders to aggregate.
     */
    where?: Fees_charged_to_unitholdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees_charged_to_unitholders to fetch.
     */
    orderBy?: Fees_charged_to_unitholdersOrderByWithRelationInput | Fees_charged_to_unitholdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Fees_charged_to_unitholdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees_charged_to_unitholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees_charged_to_unitholders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fees_charged_to_unitholders
    **/
    _count?: true | Fees_charged_to_unitholdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fees_charged_to_unitholdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fees_charged_to_unitholdersMaxAggregateInputType
  }

  export type GetFees_charged_to_unitholdersAggregateType<T extends Fees_charged_to_unitholdersAggregateArgs> = {
        [P in keyof T & keyof AggregateFees_charged_to_unitholders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFees_charged_to_unitholders[P]>
      : GetScalarType<T[P], AggregateFees_charged_to_unitholders[P]>
  }




  export type Fees_charged_to_unitholdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Fees_charged_to_unitholdersWhereInput
    orderBy?: Fees_charged_to_unitholdersOrderByWithAggregationInput | Fees_charged_to_unitholdersOrderByWithAggregationInput[]
    by: Fees_charged_to_unitholdersScalarFieldEnum[] | Fees_charged_to_unitholdersScalarFieldEnum
    having?: Fees_charged_to_unitholdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fees_charged_to_unitholdersCountAggregateInputType | true
    _min?: Fees_charged_to_unitholdersMinAggregateInputType
    _max?: Fees_charged_to_unitholdersMaxAggregateInputType
  }

  export type Fees_charged_to_unitholdersGroupByOutputType = {
    id: string
    proj_id: string
    data: JsonValue
    _count: Fees_charged_to_unitholdersCountAggregateOutputType | null
    _min: Fees_charged_to_unitholdersMinAggregateOutputType | null
    _max: Fees_charged_to_unitholdersMaxAggregateOutputType | null
  }

  type GetFees_charged_to_unitholdersGroupByPayload<T extends Fees_charged_to_unitholdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fees_charged_to_unitholdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fees_charged_to_unitholdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fees_charged_to_unitholdersGroupByOutputType[P]>
            : GetScalarType<T[P], Fees_charged_to_unitholdersGroupByOutputType[P]>
        }
      >
    >


  export type Fees_charged_to_unitholdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    data?: boolean
  }, ExtArgs["result"]["fees_charged_to_unitholders"]>

  export type Fees_charged_to_unitholdersSelectScalar = {
    id?: boolean
    proj_id?: boolean
    data?: boolean
  }


  export type $Fees_charged_to_unitholdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fees_charged_to_unitholders"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      data: Prisma.JsonValue
    }, ExtArgs["result"]["fees_charged_to_unitholders"]>
    composites: {}
  }


  type Fees_charged_to_unitholdersGetPayload<S extends boolean | null | undefined | Fees_charged_to_unitholdersDefaultArgs> = $Result.GetResult<Prisma.$Fees_charged_to_unitholdersPayload, S>

  type Fees_charged_to_unitholdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Fees_charged_to_unitholdersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Fees_charged_to_unitholdersCountAggregateInputType | true
    }

  export interface Fees_charged_to_unitholdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fees_charged_to_unitholders'], meta: { name: 'Fees_charged_to_unitholders' } }
    /**
     * Find zero or one Fees_charged_to_unitholders that matches the filter.
     * @param {Fees_charged_to_unitholdersFindUniqueArgs} args - Arguments to find a Fees_charged_to_unitholders
     * @example
     * // Get one Fees_charged_to_unitholders
     * const fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Fees_charged_to_unitholdersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Fees_charged_to_unitholdersFindUniqueArgs<ExtArgs>>
    ): Prisma__Fees_charged_to_unitholdersClient<$Result.GetResult<Prisma.$Fees_charged_to_unitholdersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fees_charged_to_unitholders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Fees_charged_to_unitholdersFindUniqueOrThrowArgs} args - Arguments to find a Fees_charged_to_unitholders
     * @example
     * // Get one Fees_charged_to_unitholders
     * const fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Fees_charged_to_unitholdersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Fees_charged_to_unitholdersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Fees_charged_to_unitholdersClient<$Result.GetResult<Prisma.$Fees_charged_to_unitholdersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fees_charged_to_unitholders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fees_charged_to_unitholdersFindFirstArgs} args - Arguments to find a Fees_charged_to_unitholders
     * @example
     * // Get one Fees_charged_to_unitholders
     * const fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Fees_charged_to_unitholdersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Fees_charged_to_unitholdersFindFirstArgs<ExtArgs>>
    ): Prisma__Fees_charged_to_unitholdersClient<$Result.GetResult<Prisma.$Fees_charged_to_unitholdersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fees_charged_to_unitholders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fees_charged_to_unitholdersFindFirstOrThrowArgs} args - Arguments to find a Fees_charged_to_unitholders
     * @example
     * // Get one Fees_charged_to_unitholders
     * const fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Fees_charged_to_unitholdersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Fees_charged_to_unitholdersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Fees_charged_to_unitholdersClient<$Result.GetResult<Prisma.$Fees_charged_to_unitholdersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fees_charged_to_unitholders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fees_charged_to_unitholdersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fees_charged_to_unitholders
     * const fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.findMany()
     * 
     * // Get first 10 Fees_charged_to_unitholders
     * const fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fees_charged_to_unitholdersWithIdOnly = await prisma.fees_charged_to_unitholders.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Fees_charged_to_unitholdersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Fees_charged_to_unitholdersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Fees_charged_to_unitholdersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fees_charged_to_unitholders.
     * @param {Fees_charged_to_unitholdersCreateArgs} args - Arguments to create a Fees_charged_to_unitholders.
     * @example
     * // Create one Fees_charged_to_unitholders
     * const Fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.create({
     *   data: {
     *     // ... data to create a Fees_charged_to_unitholders
     *   }
     * })
     * 
    **/
    create<T extends Fees_charged_to_unitholdersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Fees_charged_to_unitholdersCreateArgs<ExtArgs>>
    ): Prisma__Fees_charged_to_unitholdersClient<$Result.GetResult<Prisma.$Fees_charged_to_unitholdersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fees_charged_to_unitholders.
     *     @param {Fees_charged_to_unitholdersCreateManyArgs} args - Arguments to create many Fees_charged_to_unitholders.
     *     @example
     *     // Create many Fees_charged_to_unitholders
     *     const fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Fees_charged_to_unitholdersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Fees_charged_to_unitholdersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fees_charged_to_unitholders.
     * @param {Fees_charged_to_unitholdersDeleteArgs} args - Arguments to delete one Fees_charged_to_unitholders.
     * @example
     * // Delete one Fees_charged_to_unitholders
     * const Fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.delete({
     *   where: {
     *     // ... filter to delete one Fees_charged_to_unitholders
     *   }
     * })
     * 
    **/
    delete<T extends Fees_charged_to_unitholdersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Fees_charged_to_unitholdersDeleteArgs<ExtArgs>>
    ): Prisma__Fees_charged_to_unitholdersClient<$Result.GetResult<Prisma.$Fees_charged_to_unitholdersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fees_charged_to_unitholders.
     * @param {Fees_charged_to_unitholdersUpdateArgs} args - Arguments to update one Fees_charged_to_unitholders.
     * @example
     * // Update one Fees_charged_to_unitholders
     * const fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Fees_charged_to_unitholdersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Fees_charged_to_unitholdersUpdateArgs<ExtArgs>>
    ): Prisma__Fees_charged_to_unitholdersClient<$Result.GetResult<Prisma.$Fees_charged_to_unitholdersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fees_charged_to_unitholders.
     * @param {Fees_charged_to_unitholdersDeleteManyArgs} args - Arguments to filter Fees_charged_to_unitholders to delete.
     * @example
     * // Delete a few Fees_charged_to_unitholders
     * const { count } = await prisma.fees_charged_to_unitholders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Fees_charged_to_unitholdersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Fees_charged_to_unitholdersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fees_charged_to_unitholders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fees_charged_to_unitholdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fees_charged_to_unitholders
     * const fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Fees_charged_to_unitholdersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Fees_charged_to_unitholdersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fees_charged_to_unitholders.
     * @param {Fees_charged_to_unitholdersUpsertArgs} args - Arguments to update or create a Fees_charged_to_unitholders.
     * @example
     * // Update or create a Fees_charged_to_unitholders
     * const fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.upsert({
     *   create: {
     *     // ... data to create a Fees_charged_to_unitholders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fees_charged_to_unitholders we want to update
     *   }
     * })
    **/
    upsert<T extends Fees_charged_to_unitholdersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Fees_charged_to_unitholdersUpsertArgs<ExtArgs>>
    ): Prisma__Fees_charged_to_unitholdersClient<$Result.GetResult<Prisma.$Fees_charged_to_unitholdersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Fees_charged_to_unitholders that matches the filter.
     * @param {Fees_charged_to_unitholdersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Fees_charged_to_unitholdersFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Fees_charged_to_unitholders.
     * @param {Fees_charged_to_unitholdersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const fees_charged_to_unitholders = await prisma.fees_charged_to_unitholders.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Fees_charged_to_unitholdersAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Fees_charged_to_unitholders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fees_charged_to_unitholdersCountArgs} args - Arguments to filter Fees_charged_to_unitholders to count.
     * @example
     * // Count the number of Fees_charged_to_unitholders
     * const count = await prisma.fees_charged_to_unitholders.count({
     *   where: {
     *     // ... the filter for the Fees_charged_to_unitholders we want to count
     *   }
     * })
    **/
    count<T extends Fees_charged_to_unitholdersCountArgs>(
      args?: Subset<T, Fees_charged_to_unitholdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fees_charged_to_unitholdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fees_charged_to_unitholders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fees_charged_to_unitholdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Fees_charged_to_unitholdersAggregateArgs>(args: Subset<T, Fees_charged_to_unitholdersAggregateArgs>): Prisma.PrismaPromise<GetFees_charged_to_unitholdersAggregateType<T>>

    /**
     * Group by Fees_charged_to_unitholders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fees_charged_to_unitholdersGroupByArgs} args - Group by arguments.
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
      T extends Fees_charged_to_unitholdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Fees_charged_to_unitholdersGroupByArgs['orderBy'] }
        : { orderBy?: Fees_charged_to_unitholdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Fees_charged_to_unitholdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFees_charged_to_unitholdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fees_charged_to_unitholders model
   */
  readonly fields: Fees_charged_to_unitholdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fees_charged_to_unitholders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Fees_charged_to_unitholdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Fees_charged_to_unitholders model
   */ 
  interface Fees_charged_to_unitholdersFieldRefs {
    readonly id: FieldRef<"Fees_charged_to_unitholders", 'String'>
    readonly proj_id: FieldRef<"Fees_charged_to_unitholders", 'String'>
    readonly data: FieldRef<"Fees_charged_to_unitholders", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Fees_charged_to_unitholders findUnique
   */
  export type Fees_charged_to_unitholdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_to_unitholders
     */
    select?: Fees_charged_to_unitholdersSelect<ExtArgs> | null
    /**
     * Filter, which Fees_charged_to_unitholders to fetch.
     */
    where: Fees_charged_to_unitholdersWhereUniqueInput
  }


  /**
   * Fees_charged_to_unitholders findUniqueOrThrow
   */
  export type Fees_charged_to_unitholdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_to_unitholders
     */
    select?: Fees_charged_to_unitholdersSelect<ExtArgs> | null
    /**
     * Filter, which Fees_charged_to_unitholders to fetch.
     */
    where: Fees_charged_to_unitholdersWhereUniqueInput
  }


  /**
   * Fees_charged_to_unitholders findFirst
   */
  export type Fees_charged_to_unitholdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_to_unitholders
     */
    select?: Fees_charged_to_unitholdersSelect<ExtArgs> | null
    /**
     * Filter, which Fees_charged_to_unitholders to fetch.
     */
    where?: Fees_charged_to_unitholdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees_charged_to_unitholders to fetch.
     */
    orderBy?: Fees_charged_to_unitholdersOrderByWithRelationInput | Fees_charged_to_unitholdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fees_charged_to_unitholders.
     */
    cursor?: Fees_charged_to_unitholdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees_charged_to_unitholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees_charged_to_unitholders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fees_charged_to_unitholders.
     */
    distinct?: Fees_charged_to_unitholdersScalarFieldEnum | Fees_charged_to_unitholdersScalarFieldEnum[]
  }


  /**
   * Fees_charged_to_unitholders findFirstOrThrow
   */
  export type Fees_charged_to_unitholdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_to_unitholders
     */
    select?: Fees_charged_to_unitholdersSelect<ExtArgs> | null
    /**
     * Filter, which Fees_charged_to_unitholders to fetch.
     */
    where?: Fees_charged_to_unitholdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees_charged_to_unitholders to fetch.
     */
    orderBy?: Fees_charged_to_unitholdersOrderByWithRelationInput | Fees_charged_to_unitholdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fees_charged_to_unitholders.
     */
    cursor?: Fees_charged_to_unitholdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees_charged_to_unitholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees_charged_to_unitholders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fees_charged_to_unitholders.
     */
    distinct?: Fees_charged_to_unitholdersScalarFieldEnum | Fees_charged_to_unitholdersScalarFieldEnum[]
  }


  /**
   * Fees_charged_to_unitholders findMany
   */
  export type Fees_charged_to_unitholdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_to_unitholders
     */
    select?: Fees_charged_to_unitholdersSelect<ExtArgs> | null
    /**
     * Filter, which Fees_charged_to_unitholders to fetch.
     */
    where?: Fees_charged_to_unitholdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees_charged_to_unitholders to fetch.
     */
    orderBy?: Fees_charged_to_unitholdersOrderByWithRelationInput | Fees_charged_to_unitholdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fees_charged_to_unitholders.
     */
    cursor?: Fees_charged_to_unitholdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees_charged_to_unitholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees_charged_to_unitholders.
     */
    skip?: number
    distinct?: Fees_charged_to_unitholdersScalarFieldEnum | Fees_charged_to_unitholdersScalarFieldEnum[]
  }


  /**
   * Fees_charged_to_unitholders create
   */
  export type Fees_charged_to_unitholdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_to_unitholders
     */
    select?: Fees_charged_to_unitholdersSelect<ExtArgs> | null
    /**
     * The data needed to create a Fees_charged_to_unitholders.
     */
    data: XOR<Fees_charged_to_unitholdersCreateInput, Fees_charged_to_unitholdersUncheckedCreateInput>
  }


  /**
   * Fees_charged_to_unitholders createMany
   */
  export type Fees_charged_to_unitholdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fees_charged_to_unitholders.
     */
    data: Fees_charged_to_unitholdersCreateManyInput | Fees_charged_to_unitholdersCreateManyInput[]
  }


  /**
   * Fees_charged_to_unitholders update
   */
  export type Fees_charged_to_unitholdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_to_unitholders
     */
    select?: Fees_charged_to_unitholdersSelect<ExtArgs> | null
    /**
     * The data needed to update a Fees_charged_to_unitholders.
     */
    data: XOR<Fees_charged_to_unitholdersUpdateInput, Fees_charged_to_unitholdersUncheckedUpdateInput>
    /**
     * Choose, which Fees_charged_to_unitholders to update.
     */
    where: Fees_charged_to_unitholdersWhereUniqueInput
  }


  /**
   * Fees_charged_to_unitholders updateMany
   */
  export type Fees_charged_to_unitholdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fees_charged_to_unitholders.
     */
    data: XOR<Fees_charged_to_unitholdersUpdateManyMutationInput, Fees_charged_to_unitholdersUncheckedUpdateManyInput>
    /**
     * Filter which Fees_charged_to_unitholders to update
     */
    where?: Fees_charged_to_unitholdersWhereInput
  }


  /**
   * Fees_charged_to_unitholders upsert
   */
  export type Fees_charged_to_unitholdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_to_unitholders
     */
    select?: Fees_charged_to_unitholdersSelect<ExtArgs> | null
    /**
     * The filter to search for the Fees_charged_to_unitholders to update in case it exists.
     */
    where: Fees_charged_to_unitholdersWhereUniqueInput
    /**
     * In case the Fees_charged_to_unitholders found by the `where` argument doesn't exist, create a new Fees_charged_to_unitholders with this data.
     */
    create: XOR<Fees_charged_to_unitholdersCreateInput, Fees_charged_to_unitholdersUncheckedCreateInput>
    /**
     * In case the Fees_charged_to_unitholders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Fees_charged_to_unitholdersUpdateInput, Fees_charged_to_unitholdersUncheckedUpdateInput>
  }


  /**
   * Fees_charged_to_unitholders delete
   */
  export type Fees_charged_to_unitholdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_to_unitholders
     */
    select?: Fees_charged_to_unitholdersSelect<ExtArgs> | null
    /**
     * Filter which Fees_charged_to_unitholders to delete.
     */
    where: Fees_charged_to_unitholdersWhereUniqueInput
  }


  /**
   * Fees_charged_to_unitholders deleteMany
   */
  export type Fees_charged_to_unitholdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fees_charged_to_unitholders to delete
     */
    where?: Fees_charged_to_unitholdersWhereInput
  }


  /**
   * Fees_charged_to_unitholders findRaw
   */
  export type Fees_charged_to_unitholdersFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Fees_charged_to_unitholders aggregateRaw
   */
  export type Fees_charged_to_unitholdersAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Fees_charged_to_unitholders without action
   */
  export type Fees_charged_to_unitholdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees_charged_to_unitholders
     */
    select?: Fees_charged_to_unitholdersSelect<ExtArgs> | null
  }



  /**
   * Model Investment_allocation_in_the_top_five_issuers
   */

  export type AggregateInvestment_allocation_in_the_top_five_issuers = {
    _count: Investment_allocation_in_the_top_five_issuersCountAggregateOutputType | null
    _min: Investment_allocation_in_the_top_five_issuersMinAggregateOutputType | null
    _max: Investment_allocation_in_the_top_five_issuersMaxAggregateOutputType | null
  }

  export type Investment_allocation_in_the_top_five_issuersMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
  }

  export type Investment_allocation_in_the_top_five_issuersMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
  }

  export type Investment_allocation_in_the_top_five_issuersCountAggregateOutputType = {
    id: number
    proj_id: number
    data: number
    _all: number
  }


  export type Investment_allocation_in_the_top_five_issuersMinAggregateInputType = {
    id?: true
    proj_id?: true
  }

  export type Investment_allocation_in_the_top_five_issuersMaxAggregateInputType = {
    id?: true
    proj_id?: true
  }

  export type Investment_allocation_in_the_top_five_issuersCountAggregateInputType = {
    id?: true
    proj_id?: true
    data?: true
    _all?: true
  }

  export type Investment_allocation_in_the_top_five_issuersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment_allocation_in_the_top_five_issuers to aggregate.
     */
    where?: Investment_allocation_in_the_top_five_issuersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investment_allocation_in_the_top_five_issuers to fetch.
     */
    orderBy?: Investment_allocation_in_the_top_five_issuersOrderByWithRelationInput | Investment_allocation_in_the_top_five_issuersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Investment_allocation_in_the_top_five_issuersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investment_allocation_in_the_top_five_issuers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investment_allocation_in_the_top_five_issuers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investment_allocation_in_the_top_five_issuers
    **/
    _count?: true | Investment_allocation_in_the_top_five_issuersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Investment_allocation_in_the_top_five_issuersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Investment_allocation_in_the_top_five_issuersMaxAggregateInputType
  }

  export type GetInvestment_allocation_in_the_top_five_issuersAggregateType<T extends Investment_allocation_in_the_top_five_issuersAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment_allocation_in_the_top_five_issuers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment_allocation_in_the_top_five_issuers[P]>
      : GetScalarType<T[P], AggregateInvestment_allocation_in_the_top_five_issuers[P]>
  }




  export type Investment_allocation_in_the_top_five_issuersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Investment_allocation_in_the_top_five_issuersWhereInput
    orderBy?: Investment_allocation_in_the_top_five_issuersOrderByWithAggregationInput | Investment_allocation_in_the_top_five_issuersOrderByWithAggregationInput[]
    by: Investment_allocation_in_the_top_five_issuersScalarFieldEnum[] | Investment_allocation_in_the_top_five_issuersScalarFieldEnum
    having?: Investment_allocation_in_the_top_five_issuersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Investment_allocation_in_the_top_five_issuersCountAggregateInputType | true
    _min?: Investment_allocation_in_the_top_five_issuersMinAggregateInputType
    _max?: Investment_allocation_in_the_top_five_issuersMaxAggregateInputType
  }

  export type Investment_allocation_in_the_top_five_issuersGroupByOutputType = {
    id: string
    proj_id: string
    data: JsonValue
    _count: Investment_allocation_in_the_top_five_issuersCountAggregateOutputType | null
    _min: Investment_allocation_in_the_top_five_issuersMinAggregateOutputType | null
    _max: Investment_allocation_in_the_top_five_issuersMaxAggregateOutputType | null
  }

  type GetInvestment_allocation_in_the_top_five_issuersGroupByPayload<T extends Investment_allocation_in_the_top_five_issuersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Investment_allocation_in_the_top_five_issuersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Investment_allocation_in_the_top_five_issuersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Investment_allocation_in_the_top_five_issuersGroupByOutputType[P]>
            : GetScalarType<T[P], Investment_allocation_in_the_top_five_issuersGroupByOutputType[P]>
        }
      >
    >


  export type Investment_allocation_in_the_top_five_issuersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    data?: boolean
  }, ExtArgs["result"]["investment_allocation_in_the_top_five_issuers"]>

  export type Investment_allocation_in_the_top_five_issuersSelectScalar = {
    id?: boolean
    proj_id?: boolean
    data?: boolean
  }


  export type $Investment_allocation_in_the_top_five_issuersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investment_allocation_in_the_top_five_issuers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      data: Prisma.JsonValue
    }, ExtArgs["result"]["investment_allocation_in_the_top_five_issuers"]>
    composites: {}
  }


  type Investment_allocation_in_the_top_five_issuersGetPayload<S extends boolean | null | undefined | Investment_allocation_in_the_top_five_issuersDefaultArgs> = $Result.GetResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload, S>

  type Investment_allocation_in_the_top_five_issuersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Investment_allocation_in_the_top_five_issuersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Investment_allocation_in_the_top_five_issuersCountAggregateInputType | true
    }

  export interface Investment_allocation_in_the_top_five_issuersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investment_allocation_in_the_top_five_issuers'], meta: { name: 'Investment_allocation_in_the_top_five_issuers' } }
    /**
     * Find zero or one Investment_allocation_in_the_top_five_issuers that matches the filter.
     * @param {Investment_allocation_in_the_top_five_issuersFindUniqueArgs} args - Arguments to find a Investment_allocation_in_the_top_five_issuers
     * @example
     * // Get one Investment_allocation_in_the_top_five_issuers
     * const investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Investment_allocation_in_the_top_five_issuersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_allocation_in_the_top_five_issuersFindUniqueArgs<ExtArgs>>
    ): Prisma__Investment_allocation_in_the_top_five_issuersClient<$Result.GetResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Investment_allocation_in_the_top_five_issuers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Investment_allocation_in_the_top_five_issuersFindUniqueOrThrowArgs} args - Arguments to find a Investment_allocation_in_the_top_five_issuers
     * @example
     * // Get one Investment_allocation_in_the_top_five_issuers
     * const investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Investment_allocation_in_the_top_five_issuersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_allocation_in_the_top_five_issuersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Investment_allocation_in_the_top_five_issuersClient<$Result.GetResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Investment_allocation_in_the_top_five_issuers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_allocation_in_the_top_five_issuersFindFirstArgs} args - Arguments to find a Investment_allocation_in_the_top_five_issuers
     * @example
     * // Get one Investment_allocation_in_the_top_five_issuers
     * const investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Investment_allocation_in_the_top_five_issuersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_allocation_in_the_top_five_issuersFindFirstArgs<ExtArgs>>
    ): Prisma__Investment_allocation_in_the_top_five_issuersClient<$Result.GetResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Investment_allocation_in_the_top_five_issuers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_allocation_in_the_top_five_issuersFindFirstOrThrowArgs} args - Arguments to find a Investment_allocation_in_the_top_five_issuers
     * @example
     * // Get one Investment_allocation_in_the_top_five_issuers
     * const investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Investment_allocation_in_the_top_five_issuersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_allocation_in_the_top_five_issuersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Investment_allocation_in_the_top_five_issuersClient<$Result.GetResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Investment_allocation_in_the_top_five_issuers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_allocation_in_the_top_five_issuersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investment_allocation_in_the_top_five_issuers
     * const investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.findMany()
     * 
     * // Get first 10 Investment_allocation_in_the_top_five_issuers
     * const investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investment_allocation_in_the_top_five_issuersWithIdOnly = await prisma.investment_allocation_in_the_top_five_issuers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Investment_allocation_in_the_top_five_issuersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_allocation_in_the_top_five_issuersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Investment_allocation_in_the_top_five_issuers.
     * @param {Investment_allocation_in_the_top_five_issuersCreateArgs} args - Arguments to create a Investment_allocation_in_the_top_five_issuers.
     * @example
     * // Create one Investment_allocation_in_the_top_five_issuers
     * const Investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.create({
     *   data: {
     *     // ... data to create a Investment_allocation_in_the_top_five_issuers
     *   }
     * })
     * 
    **/
    create<T extends Investment_allocation_in_the_top_five_issuersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_allocation_in_the_top_five_issuersCreateArgs<ExtArgs>>
    ): Prisma__Investment_allocation_in_the_top_five_issuersClient<$Result.GetResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Investment_allocation_in_the_top_five_issuers.
     *     @param {Investment_allocation_in_the_top_five_issuersCreateManyArgs} args - Arguments to create many Investment_allocation_in_the_top_five_issuers.
     *     @example
     *     // Create many Investment_allocation_in_the_top_five_issuers
     *     const investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Investment_allocation_in_the_top_five_issuersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_allocation_in_the_top_five_issuersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Investment_allocation_in_the_top_five_issuers.
     * @param {Investment_allocation_in_the_top_five_issuersDeleteArgs} args - Arguments to delete one Investment_allocation_in_the_top_five_issuers.
     * @example
     * // Delete one Investment_allocation_in_the_top_five_issuers
     * const Investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.delete({
     *   where: {
     *     // ... filter to delete one Investment_allocation_in_the_top_five_issuers
     *   }
     * })
     * 
    **/
    delete<T extends Investment_allocation_in_the_top_five_issuersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_allocation_in_the_top_five_issuersDeleteArgs<ExtArgs>>
    ): Prisma__Investment_allocation_in_the_top_five_issuersClient<$Result.GetResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Investment_allocation_in_the_top_five_issuers.
     * @param {Investment_allocation_in_the_top_five_issuersUpdateArgs} args - Arguments to update one Investment_allocation_in_the_top_five_issuers.
     * @example
     * // Update one Investment_allocation_in_the_top_five_issuers
     * const investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Investment_allocation_in_the_top_five_issuersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_allocation_in_the_top_five_issuersUpdateArgs<ExtArgs>>
    ): Prisma__Investment_allocation_in_the_top_five_issuersClient<$Result.GetResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Investment_allocation_in_the_top_five_issuers.
     * @param {Investment_allocation_in_the_top_five_issuersDeleteManyArgs} args - Arguments to filter Investment_allocation_in_the_top_five_issuers to delete.
     * @example
     * // Delete a few Investment_allocation_in_the_top_five_issuers
     * const { count } = await prisma.investment_allocation_in_the_top_five_issuers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Investment_allocation_in_the_top_five_issuersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_allocation_in_the_top_five_issuersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investment_allocation_in_the_top_five_issuers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_allocation_in_the_top_five_issuersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investment_allocation_in_the_top_five_issuers
     * const investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Investment_allocation_in_the_top_five_issuersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_allocation_in_the_top_five_issuersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Investment_allocation_in_the_top_five_issuers.
     * @param {Investment_allocation_in_the_top_five_issuersUpsertArgs} args - Arguments to update or create a Investment_allocation_in_the_top_five_issuers.
     * @example
     * // Update or create a Investment_allocation_in_the_top_five_issuers
     * const investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.upsert({
     *   create: {
     *     // ... data to create a Investment_allocation_in_the_top_five_issuers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment_allocation_in_the_top_five_issuers we want to update
     *   }
     * })
    **/
    upsert<T extends Investment_allocation_in_the_top_five_issuersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_allocation_in_the_top_five_issuersUpsertArgs<ExtArgs>>
    ): Prisma__Investment_allocation_in_the_top_five_issuersClient<$Result.GetResult<Prisma.$Investment_allocation_in_the_top_five_issuersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Investment_allocation_in_the_top_five_issuers that matches the filter.
     * @param {Investment_allocation_in_the_top_five_issuersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Investment_allocation_in_the_top_five_issuersFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Investment_allocation_in_the_top_five_issuers.
     * @param {Investment_allocation_in_the_top_five_issuersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const investment_allocation_in_the_top_five_issuers = await prisma.investment_allocation_in_the_top_five_issuers.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Investment_allocation_in_the_top_five_issuersAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Investment_allocation_in_the_top_five_issuers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_allocation_in_the_top_five_issuersCountArgs} args - Arguments to filter Investment_allocation_in_the_top_five_issuers to count.
     * @example
     * // Count the number of Investment_allocation_in_the_top_five_issuers
     * const count = await prisma.investment_allocation_in_the_top_five_issuers.count({
     *   where: {
     *     // ... the filter for the Investment_allocation_in_the_top_five_issuers we want to count
     *   }
     * })
    **/
    count<T extends Investment_allocation_in_the_top_five_issuersCountArgs>(
      args?: Subset<T, Investment_allocation_in_the_top_five_issuersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Investment_allocation_in_the_top_five_issuersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment_allocation_in_the_top_five_issuers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_allocation_in_the_top_five_issuersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Investment_allocation_in_the_top_five_issuersAggregateArgs>(args: Subset<T, Investment_allocation_in_the_top_five_issuersAggregateArgs>): Prisma.PrismaPromise<GetInvestment_allocation_in_the_top_five_issuersAggregateType<T>>

    /**
     * Group by Investment_allocation_in_the_top_five_issuers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_allocation_in_the_top_five_issuersGroupByArgs} args - Group by arguments.
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
      T extends Investment_allocation_in_the_top_five_issuersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Investment_allocation_in_the_top_five_issuersGroupByArgs['orderBy'] }
        : { orderBy?: Investment_allocation_in_the_top_five_issuersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Investment_allocation_in_the_top_five_issuersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestment_allocation_in_the_top_five_issuersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investment_allocation_in_the_top_five_issuers model
   */
  readonly fields: Investment_allocation_in_the_top_five_issuersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investment_allocation_in_the_top_five_issuers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Investment_allocation_in_the_top_five_issuersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Investment_allocation_in_the_top_five_issuers model
   */ 
  interface Investment_allocation_in_the_top_five_issuersFieldRefs {
    readonly id: FieldRef<"Investment_allocation_in_the_top_five_issuers", 'String'>
    readonly proj_id: FieldRef<"Investment_allocation_in_the_top_five_issuers", 'String'>
    readonly data: FieldRef<"Investment_allocation_in_the_top_five_issuers", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Investment_allocation_in_the_top_five_issuers findUnique
   */
  export type Investment_allocation_in_the_top_five_issuersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_in_the_top_five_issuers
     */
    select?: Investment_allocation_in_the_top_five_issuersSelect<ExtArgs> | null
    /**
     * Filter, which Investment_allocation_in_the_top_five_issuers to fetch.
     */
    where: Investment_allocation_in_the_top_five_issuersWhereUniqueInput
  }


  /**
   * Investment_allocation_in_the_top_five_issuers findUniqueOrThrow
   */
  export type Investment_allocation_in_the_top_five_issuersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_in_the_top_five_issuers
     */
    select?: Investment_allocation_in_the_top_five_issuersSelect<ExtArgs> | null
    /**
     * Filter, which Investment_allocation_in_the_top_five_issuers to fetch.
     */
    where: Investment_allocation_in_the_top_five_issuersWhereUniqueInput
  }


  /**
   * Investment_allocation_in_the_top_five_issuers findFirst
   */
  export type Investment_allocation_in_the_top_five_issuersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_in_the_top_five_issuers
     */
    select?: Investment_allocation_in_the_top_five_issuersSelect<ExtArgs> | null
    /**
     * Filter, which Investment_allocation_in_the_top_five_issuers to fetch.
     */
    where?: Investment_allocation_in_the_top_five_issuersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investment_allocation_in_the_top_five_issuers to fetch.
     */
    orderBy?: Investment_allocation_in_the_top_five_issuersOrderByWithRelationInput | Investment_allocation_in_the_top_five_issuersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investment_allocation_in_the_top_five_issuers.
     */
    cursor?: Investment_allocation_in_the_top_five_issuersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investment_allocation_in_the_top_five_issuers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investment_allocation_in_the_top_five_issuers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investment_allocation_in_the_top_five_issuers.
     */
    distinct?: Investment_allocation_in_the_top_five_issuersScalarFieldEnum | Investment_allocation_in_the_top_five_issuersScalarFieldEnum[]
  }


  /**
   * Investment_allocation_in_the_top_five_issuers findFirstOrThrow
   */
  export type Investment_allocation_in_the_top_five_issuersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_in_the_top_five_issuers
     */
    select?: Investment_allocation_in_the_top_five_issuersSelect<ExtArgs> | null
    /**
     * Filter, which Investment_allocation_in_the_top_five_issuers to fetch.
     */
    where?: Investment_allocation_in_the_top_five_issuersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investment_allocation_in_the_top_five_issuers to fetch.
     */
    orderBy?: Investment_allocation_in_the_top_five_issuersOrderByWithRelationInput | Investment_allocation_in_the_top_five_issuersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investment_allocation_in_the_top_five_issuers.
     */
    cursor?: Investment_allocation_in_the_top_five_issuersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investment_allocation_in_the_top_five_issuers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investment_allocation_in_the_top_five_issuers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investment_allocation_in_the_top_five_issuers.
     */
    distinct?: Investment_allocation_in_the_top_five_issuersScalarFieldEnum | Investment_allocation_in_the_top_five_issuersScalarFieldEnum[]
  }


  /**
   * Investment_allocation_in_the_top_five_issuers findMany
   */
  export type Investment_allocation_in_the_top_five_issuersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_in_the_top_five_issuers
     */
    select?: Investment_allocation_in_the_top_five_issuersSelect<ExtArgs> | null
    /**
     * Filter, which Investment_allocation_in_the_top_five_issuers to fetch.
     */
    where?: Investment_allocation_in_the_top_five_issuersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investment_allocation_in_the_top_five_issuers to fetch.
     */
    orderBy?: Investment_allocation_in_the_top_five_issuersOrderByWithRelationInput | Investment_allocation_in_the_top_five_issuersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investment_allocation_in_the_top_five_issuers.
     */
    cursor?: Investment_allocation_in_the_top_five_issuersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investment_allocation_in_the_top_five_issuers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investment_allocation_in_the_top_five_issuers.
     */
    skip?: number
    distinct?: Investment_allocation_in_the_top_five_issuersScalarFieldEnum | Investment_allocation_in_the_top_five_issuersScalarFieldEnum[]
  }


  /**
   * Investment_allocation_in_the_top_five_issuers create
   */
  export type Investment_allocation_in_the_top_five_issuersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_in_the_top_five_issuers
     */
    select?: Investment_allocation_in_the_top_five_issuersSelect<ExtArgs> | null
    /**
     * The data needed to create a Investment_allocation_in_the_top_five_issuers.
     */
    data: XOR<Investment_allocation_in_the_top_five_issuersCreateInput, Investment_allocation_in_the_top_five_issuersUncheckedCreateInput>
  }


  /**
   * Investment_allocation_in_the_top_five_issuers createMany
   */
  export type Investment_allocation_in_the_top_five_issuersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investment_allocation_in_the_top_five_issuers.
     */
    data: Investment_allocation_in_the_top_five_issuersCreateManyInput | Investment_allocation_in_the_top_five_issuersCreateManyInput[]
  }


  /**
   * Investment_allocation_in_the_top_five_issuers update
   */
  export type Investment_allocation_in_the_top_five_issuersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_in_the_top_five_issuers
     */
    select?: Investment_allocation_in_the_top_five_issuersSelect<ExtArgs> | null
    /**
     * The data needed to update a Investment_allocation_in_the_top_five_issuers.
     */
    data: XOR<Investment_allocation_in_the_top_five_issuersUpdateInput, Investment_allocation_in_the_top_five_issuersUncheckedUpdateInput>
    /**
     * Choose, which Investment_allocation_in_the_top_five_issuers to update.
     */
    where: Investment_allocation_in_the_top_five_issuersWhereUniqueInput
  }


  /**
   * Investment_allocation_in_the_top_five_issuers updateMany
   */
  export type Investment_allocation_in_the_top_five_issuersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investment_allocation_in_the_top_five_issuers.
     */
    data: XOR<Investment_allocation_in_the_top_five_issuersUpdateManyMutationInput, Investment_allocation_in_the_top_five_issuersUncheckedUpdateManyInput>
    /**
     * Filter which Investment_allocation_in_the_top_five_issuers to update
     */
    where?: Investment_allocation_in_the_top_five_issuersWhereInput
  }


  /**
   * Investment_allocation_in_the_top_five_issuers upsert
   */
  export type Investment_allocation_in_the_top_five_issuersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_in_the_top_five_issuers
     */
    select?: Investment_allocation_in_the_top_five_issuersSelect<ExtArgs> | null
    /**
     * The filter to search for the Investment_allocation_in_the_top_five_issuers to update in case it exists.
     */
    where: Investment_allocation_in_the_top_five_issuersWhereUniqueInput
    /**
     * In case the Investment_allocation_in_the_top_five_issuers found by the `where` argument doesn't exist, create a new Investment_allocation_in_the_top_five_issuers with this data.
     */
    create: XOR<Investment_allocation_in_the_top_five_issuersCreateInput, Investment_allocation_in_the_top_five_issuersUncheckedCreateInput>
    /**
     * In case the Investment_allocation_in_the_top_five_issuers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Investment_allocation_in_the_top_five_issuersUpdateInput, Investment_allocation_in_the_top_five_issuersUncheckedUpdateInput>
  }


  /**
   * Investment_allocation_in_the_top_five_issuers delete
   */
  export type Investment_allocation_in_the_top_five_issuersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_in_the_top_five_issuers
     */
    select?: Investment_allocation_in_the_top_five_issuersSelect<ExtArgs> | null
    /**
     * Filter which Investment_allocation_in_the_top_five_issuers to delete.
     */
    where: Investment_allocation_in_the_top_five_issuersWhereUniqueInput
  }


  /**
   * Investment_allocation_in_the_top_five_issuers deleteMany
   */
  export type Investment_allocation_in_the_top_five_issuersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment_allocation_in_the_top_five_issuers to delete
     */
    where?: Investment_allocation_in_the_top_five_issuersWhereInput
  }


  /**
   * Investment_allocation_in_the_top_five_issuers findRaw
   */
  export type Investment_allocation_in_the_top_five_issuersFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Investment_allocation_in_the_top_five_issuers aggregateRaw
   */
  export type Investment_allocation_in_the_top_five_issuersAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Investment_allocation_in_the_top_five_issuers without action
   */
  export type Investment_allocation_in_the_top_five_issuersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_in_the_top_five_issuers
     */
    select?: Investment_allocation_in_the_top_five_issuersSelect<ExtArgs> | null
  }



  /**
   * Model Investment_allocation_according_to_credit_rating
   */

  export type AggregateInvestment_allocation_according_to_credit_rating = {
    _count: Investment_allocation_according_to_credit_ratingCountAggregateOutputType | null
    _min: Investment_allocation_according_to_credit_ratingMinAggregateOutputType | null
    _max: Investment_allocation_according_to_credit_ratingMaxAggregateOutputType | null
  }

  export type Investment_allocation_according_to_credit_ratingMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
  }

  export type Investment_allocation_according_to_credit_ratingMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
  }

  export type Investment_allocation_according_to_credit_ratingCountAggregateOutputType = {
    id: number
    proj_id: number
    data: number
    _all: number
  }


  export type Investment_allocation_according_to_credit_ratingMinAggregateInputType = {
    id?: true
    proj_id?: true
  }

  export type Investment_allocation_according_to_credit_ratingMaxAggregateInputType = {
    id?: true
    proj_id?: true
  }

  export type Investment_allocation_according_to_credit_ratingCountAggregateInputType = {
    id?: true
    proj_id?: true
    data?: true
    _all?: true
  }

  export type Investment_allocation_according_to_credit_ratingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment_allocation_according_to_credit_rating to aggregate.
     */
    where?: Investment_allocation_according_to_credit_ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investment_allocation_according_to_credit_ratings to fetch.
     */
    orderBy?: Investment_allocation_according_to_credit_ratingOrderByWithRelationInput | Investment_allocation_according_to_credit_ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Investment_allocation_according_to_credit_ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investment_allocation_according_to_credit_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investment_allocation_according_to_credit_ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investment_allocation_according_to_credit_ratings
    **/
    _count?: true | Investment_allocation_according_to_credit_ratingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Investment_allocation_according_to_credit_ratingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Investment_allocation_according_to_credit_ratingMaxAggregateInputType
  }

  export type GetInvestment_allocation_according_to_credit_ratingAggregateType<T extends Investment_allocation_according_to_credit_ratingAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment_allocation_according_to_credit_rating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment_allocation_according_to_credit_rating[P]>
      : GetScalarType<T[P], AggregateInvestment_allocation_according_to_credit_rating[P]>
  }




  export type Investment_allocation_according_to_credit_ratingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Investment_allocation_according_to_credit_ratingWhereInput
    orderBy?: Investment_allocation_according_to_credit_ratingOrderByWithAggregationInput | Investment_allocation_according_to_credit_ratingOrderByWithAggregationInput[]
    by: Investment_allocation_according_to_credit_ratingScalarFieldEnum[] | Investment_allocation_according_to_credit_ratingScalarFieldEnum
    having?: Investment_allocation_according_to_credit_ratingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Investment_allocation_according_to_credit_ratingCountAggregateInputType | true
    _min?: Investment_allocation_according_to_credit_ratingMinAggregateInputType
    _max?: Investment_allocation_according_to_credit_ratingMaxAggregateInputType
  }

  export type Investment_allocation_according_to_credit_ratingGroupByOutputType = {
    id: string
    proj_id: string
    data: JsonValue
    _count: Investment_allocation_according_to_credit_ratingCountAggregateOutputType | null
    _min: Investment_allocation_according_to_credit_ratingMinAggregateOutputType | null
    _max: Investment_allocation_according_to_credit_ratingMaxAggregateOutputType | null
  }

  type GetInvestment_allocation_according_to_credit_ratingGroupByPayload<T extends Investment_allocation_according_to_credit_ratingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Investment_allocation_according_to_credit_ratingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Investment_allocation_according_to_credit_ratingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Investment_allocation_according_to_credit_ratingGroupByOutputType[P]>
            : GetScalarType<T[P], Investment_allocation_according_to_credit_ratingGroupByOutputType[P]>
        }
      >
    >


  export type Investment_allocation_according_to_credit_ratingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    data?: boolean
  }, ExtArgs["result"]["investment_allocation_according_to_credit_rating"]>

  export type Investment_allocation_according_to_credit_ratingSelectScalar = {
    id?: boolean
    proj_id?: boolean
    data?: boolean
  }


  export type $Investment_allocation_according_to_credit_ratingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investment_allocation_according_to_credit_rating"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      data: Prisma.JsonValue
    }, ExtArgs["result"]["investment_allocation_according_to_credit_rating"]>
    composites: {}
  }


  type Investment_allocation_according_to_credit_ratingGetPayload<S extends boolean | null | undefined | Investment_allocation_according_to_credit_ratingDefaultArgs> = $Result.GetResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload, S>

  type Investment_allocation_according_to_credit_ratingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Investment_allocation_according_to_credit_ratingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Investment_allocation_according_to_credit_ratingCountAggregateInputType | true
    }

  export interface Investment_allocation_according_to_credit_ratingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investment_allocation_according_to_credit_rating'], meta: { name: 'Investment_allocation_according_to_credit_rating' } }
    /**
     * Find zero or one Investment_allocation_according_to_credit_rating that matches the filter.
     * @param {Investment_allocation_according_to_credit_ratingFindUniqueArgs} args - Arguments to find a Investment_allocation_according_to_credit_rating
     * @example
     * // Get one Investment_allocation_according_to_credit_rating
     * const investment_allocation_according_to_credit_rating = await prisma.investment_allocation_according_to_credit_rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Investment_allocation_according_to_credit_ratingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_allocation_according_to_credit_ratingFindUniqueArgs<ExtArgs>>
    ): Prisma__Investment_allocation_according_to_credit_ratingClient<$Result.GetResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Investment_allocation_according_to_credit_rating that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Investment_allocation_according_to_credit_ratingFindUniqueOrThrowArgs} args - Arguments to find a Investment_allocation_according_to_credit_rating
     * @example
     * // Get one Investment_allocation_according_to_credit_rating
     * const investment_allocation_according_to_credit_rating = await prisma.investment_allocation_according_to_credit_rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Investment_allocation_according_to_credit_ratingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_allocation_according_to_credit_ratingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Investment_allocation_according_to_credit_ratingClient<$Result.GetResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Investment_allocation_according_to_credit_rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_allocation_according_to_credit_ratingFindFirstArgs} args - Arguments to find a Investment_allocation_according_to_credit_rating
     * @example
     * // Get one Investment_allocation_according_to_credit_rating
     * const investment_allocation_according_to_credit_rating = await prisma.investment_allocation_according_to_credit_rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Investment_allocation_according_to_credit_ratingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_allocation_according_to_credit_ratingFindFirstArgs<ExtArgs>>
    ): Prisma__Investment_allocation_according_to_credit_ratingClient<$Result.GetResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Investment_allocation_according_to_credit_rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_allocation_according_to_credit_ratingFindFirstOrThrowArgs} args - Arguments to find a Investment_allocation_according_to_credit_rating
     * @example
     * // Get one Investment_allocation_according_to_credit_rating
     * const investment_allocation_according_to_credit_rating = await prisma.investment_allocation_according_to_credit_rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Investment_allocation_according_to_credit_ratingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_allocation_according_to_credit_ratingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Investment_allocation_according_to_credit_ratingClient<$Result.GetResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Investment_allocation_according_to_credit_ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_allocation_according_to_credit_ratingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investment_allocation_according_to_credit_ratings
     * const investment_allocation_according_to_credit_ratings = await prisma.investment_allocation_according_to_credit_rating.findMany()
     * 
     * // Get first 10 Investment_allocation_according_to_credit_ratings
     * const investment_allocation_according_to_credit_ratings = await prisma.investment_allocation_according_to_credit_rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investment_allocation_according_to_credit_ratingWithIdOnly = await prisma.investment_allocation_according_to_credit_rating.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Investment_allocation_according_to_credit_ratingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_allocation_according_to_credit_ratingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Investment_allocation_according_to_credit_rating.
     * @param {Investment_allocation_according_to_credit_ratingCreateArgs} args - Arguments to create a Investment_allocation_according_to_credit_rating.
     * @example
     * // Create one Investment_allocation_according_to_credit_rating
     * const Investment_allocation_according_to_credit_rating = await prisma.investment_allocation_according_to_credit_rating.create({
     *   data: {
     *     // ... data to create a Investment_allocation_according_to_credit_rating
     *   }
     * })
     * 
    **/
    create<T extends Investment_allocation_according_to_credit_ratingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_allocation_according_to_credit_ratingCreateArgs<ExtArgs>>
    ): Prisma__Investment_allocation_according_to_credit_ratingClient<$Result.GetResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Investment_allocation_according_to_credit_ratings.
     *     @param {Investment_allocation_according_to_credit_ratingCreateManyArgs} args - Arguments to create many Investment_allocation_according_to_credit_ratings.
     *     @example
     *     // Create many Investment_allocation_according_to_credit_ratings
     *     const investment_allocation_according_to_credit_rating = await prisma.investment_allocation_according_to_credit_rating.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Investment_allocation_according_to_credit_ratingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_allocation_according_to_credit_ratingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Investment_allocation_according_to_credit_rating.
     * @param {Investment_allocation_according_to_credit_ratingDeleteArgs} args - Arguments to delete one Investment_allocation_according_to_credit_rating.
     * @example
     * // Delete one Investment_allocation_according_to_credit_rating
     * const Investment_allocation_according_to_credit_rating = await prisma.investment_allocation_according_to_credit_rating.delete({
     *   where: {
     *     // ... filter to delete one Investment_allocation_according_to_credit_rating
     *   }
     * })
     * 
    **/
    delete<T extends Investment_allocation_according_to_credit_ratingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_allocation_according_to_credit_ratingDeleteArgs<ExtArgs>>
    ): Prisma__Investment_allocation_according_to_credit_ratingClient<$Result.GetResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Investment_allocation_according_to_credit_rating.
     * @param {Investment_allocation_according_to_credit_ratingUpdateArgs} args - Arguments to update one Investment_allocation_according_to_credit_rating.
     * @example
     * // Update one Investment_allocation_according_to_credit_rating
     * const investment_allocation_according_to_credit_rating = await prisma.investment_allocation_according_to_credit_rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Investment_allocation_according_to_credit_ratingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_allocation_according_to_credit_ratingUpdateArgs<ExtArgs>>
    ): Prisma__Investment_allocation_according_to_credit_ratingClient<$Result.GetResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Investment_allocation_according_to_credit_ratings.
     * @param {Investment_allocation_according_to_credit_ratingDeleteManyArgs} args - Arguments to filter Investment_allocation_according_to_credit_ratings to delete.
     * @example
     * // Delete a few Investment_allocation_according_to_credit_ratings
     * const { count } = await prisma.investment_allocation_according_to_credit_rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Investment_allocation_according_to_credit_ratingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_allocation_according_to_credit_ratingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investment_allocation_according_to_credit_ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_allocation_according_to_credit_ratingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investment_allocation_according_to_credit_ratings
     * const investment_allocation_according_to_credit_rating = await prisma.investment_allocation_according_to_credit_rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Investment_allocation_according_to_credit_ratingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_allocation_according_to_credit_ratingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Investment_allocation_according_to_credit_rating.
     * @param {Investment_allocation_according_to_credit_ratingUpsertArgs} args - Arguments to update or create a Investment_allocation_according_to_credit_rating.
     * @example
     * // Update or create a Investment_allocation_according_to_credit_rating
     * const investment_allocation_according_to_credit_rating = await prisma.investment_allocation_according_to_credit_rating.upsert({
     *   create: {
     *     // ... data to create a Investment_allocation_according_to_credit_rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment_allocation_according_to_credit_rating we want to update
     *   }
     * })
    **/
    upsert<T extends Investment_allocation_according_to_credit_ratingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_allocation_according_to_credit_ratingUpsertArgs<ExtArgs>>
    ): Prisma__Investment_allocation_according_to_credit_ratingClient<$Result.GetResult<Prisma.$Investment_allocation_according_to_credit_ratingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Investment_allocation_according_to_credit_ratings that matches the filter.
     * @param {Investment_allocation_according_to_credit_ratingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const investment_allocation_according_to_credit_rating = await prisma.investment_allocation_according_to_credit_rating.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Investment_allocation_according_to_credit_ratingFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Investment_allocation_according_to_credit_rating.
     * @param {Investment_allocation_according_to_credit_ratingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const investment_allocation_according_to_credit_rating = await prisma.investment_allocation_according_to_credit_rating.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Investment_allocation_according_to_credit_ratingAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Investment_allocation_according_to_credit_ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_allocation_according_to_credit_ratingCountArgs} args - Arguments to filter Investment_allocation_according_to_credit_ratings to count.
     * @example
     * // Count the number of Investment_allocation_according_to_credit_ratings
     * const count = await prisma.investment_allocation_according_to_credit_rating.count({
     *   where: {
     *     // ... the filter for the Investment_allocation_according_to_credit_ratings we want to count
     *   }
     * })
    **/
    count<T extends Investment_allocation_according_to_credit_ratingCountArgs>(
      args?: Subset<T, Investment_allocation_according_to_credit_ratingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Investment_allocation_according_to_credit_ratingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment_allocation_according_to_credit_rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_allocation_according_to_credit_ratingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Investment_allocation_according_to_credit_ratingAggregateArgs>(args: Subset<T, Investment_allocation_according_to_credit_ratingAggregateArgs>): Prisma.PrismaPromise<GetInvestment_allocation_according_to_credit_ratingAggregateType<T>>

    /**
     * Group by Investment_allocation_according_to_credit_rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_allocation_according_to_credit_ratingGroupByArgs} args - Group by arguments.
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
      T extends Investment_allocation_according_to_credit_ratingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Investment_allocation_according_to_credit_ratingGroupByArgs['orderBy'] }
        : { orderBy?: Investment_allocation_according_to_credit_ratingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Investment_allocation_according_to_credit_ratingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestment_allocation_according_to_credit_ratingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investment_allocation_according_to_credit_rating model
   */
  readonly fields: Investment_allocation_according_to_credit_ratingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investment_allocation_according_to_credit_rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Investment_allocation_according_to_credit_ratingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Investment_allocation_according_to_credit_rating model
   */ 
  interface Investment_allocation_according_to_credit_ratingFieldRefs {
    readonly id: FieldRef<"Investment_allocation_according_to_credit_rating", 'String'>
    readonly proj_id: FieldRef<"Investment_allocation_according_to_credit_rating", 'String'>
    readonly data: FieldRef<"Investment_allocation_according_to_credit_rating", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Investment_allocation_according_to_credit_rating findUnique
   */
  export type Investment_allocation_according_to_credit_ratingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_according_to_credit_rating
     */
    select?: Investment_allocation_according_to_credit_ratingSelect<ExtArgs> | null
    /**
     * Filter, which Investment_allocation_according_to_credit_rating to fetch.
     */
    where: Investment_allocation_according_to_credit_ratingWhereUniqueInput
  }


  /**
   * Investment_allocation_according_to_credit_rating findUniqueOrThrow
   */
  export type Investment_allocation_according_to_credit_ratingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_according_to_credit_rating
     */
    select?: Investment_allocation_according_to_credit_ratingSelect<ExtArgs> | null
    /**
     * Filter, which Investment_allocation_according_to_credit_rating to fetch.
     */
    where: Investment_allocation_according_to_credit_ratingWhereUniqueInput
  }


  /**
   * Investment_allocation_according_to_credit_rating findFirst
   */
  export type Investment_allocation_according_to_credit_ratingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_according_to_credit_rating
     */
    select?: Investment_allocation_according_to_credit_ratingSelect<ExtArgs> | null
    /**
     * Filter, which Investment_allocation_according_to_credit_rating to fetch.
     */
    where?: Investment_allocation_according_to_credit_ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investment_allocation_according_to_credit_ratings to fetch.
     */
    orderBy?: Investment_allocation_according_to_credit_ratingOrderByWithRelationInput | Investment_allocation_according_to_credit_ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investment_allocation_according_to_credit_ratings.
     */
    cursor?: Investment_allocation_according_to_credit_ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investment_allocation_according_to_credit_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investment_allocation_according_to_credit_ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investment_allocation_according_to_credit_ratings.
     */
    distinct?: Investment_allocation_according_to_credit_ratingScalarFieldEnum | Investment_allocation_according_to_credit_ratingScalarFieldEnum[]
  }


  /**
   * Investment_allocation_according_to_credit_rating findFirstOrThrow
   */
  export type Investment_allocation_according_to_credit_ratingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_according_to_credit_rating
     */
    select?: Investment_allocation_according_to_credit_ratingSelect<ExtArgs> | null
    /**
     * Filter, which Investment_allocation_according_to_credit_rating to fetch.
     */
    where?: Investment_allocation_according_to_credit_ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investment_allocation_according_to_credit_ratings to fetch.
     */
    orderBy?: Investment_allocation_according_to_credit_ratingOrderByWithRelationInput | Investment_allocation_according_to_credit_ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investment_allocation_according_to_credit_ratings.
     */
    cursor?: Investment_allocation_according_to_credit_ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investment_allocation_according_to_credit_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investment_allocation_according_to_credit_ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investment_allocation_according_to_credit_ratings.
     */
    distinct?: Investment_allocation_according_to_credit_ratingScalarFieldEnum | Investment_allocation_according_to_credit_ratingScalarFieldEnum[]
  }


  /**
   * Investment_allocation_according_to_credit_rating findMany
   */
  export type Investment_allocation_according_to_credit_ratingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_according_to_credit_rating
     */
    select?: Investment_allocation_according_to_credit_ratingSelect<ExtArgs> | null
    /**
     * Filter, which Investment_allocation_according_to_credit_ratings to fetch.
     */
    where?: Investment_allocation_according_to_credit_ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investment_allocation_according_to_credit_ratings to fetch.
     */
    orderBy?: Investment_allocation_according_to_credit_ratingOrderByWithRelationInput | Investment_allocation_according_to_credit_ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investment_allocation_according_to_credit_ratings.
     */
    cursor?: Investment_allocation_according_to_credit_ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investment_allocation_according_to_credit_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investment_allocation_according_to_credit_ratings.
     */
    skip?: number
    distinct?: Investment_allocation_according_to_credit_ratingScalarFieldEnum | Investment_allocation_according_to_credit_ratingScalarFieldEnum[]
  }


  /**
   * Investment_allocation_according_to_credit_rating create
   */
  export type Investment_allocation_according_to_credit_ratingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_according_to_credit_rating
     */
    select?: Investment_allocation_according_to_credit_ratingSelect<ExtArgs> | null
    /**
     * The data needed to create a Investment_allocation_according_to_credit_rating.
     */
    data: XOR<Investment_allocation_according_to_credit_ratingCreateInput, Investment_allocation_according_to_credit_ratingUncheckedCreateInput>
  }


  /**
   * Investment_allocation_according_to_credit_rating createMany
   */
  export type Investment_allocation_according_to_credit_ratingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investment_allocation_according_to_credit_ratings.
     */
    data: Investment_allocation_according_to_credit_ratingCreateManyInput | Investment_allocation_according_to_credit_ratingCreateManyInput[]
  }


  /**
   * Investment_allocation_according_to_credit_rating update
   */
  export type Investment_allocation_according_to_credit_ratingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_according_to_credit_rating
     */
    select?: Investment_allocation_according_to_credit_ratingSelect<ExtArgs> | null
    /**
     * The data needed to update a Investment_allocation_according_to_credit_rating.
     */
    data: XOR<Investment_allocation_according_to_credit_ratingUpdateInput, Investment_allocation_according_to_credit_ratingUncheckedUpdateInput>
    /**
     * Choose, which Investment_allocation_according_to_credit_rating to update.
     */
    where: Investment_allocation_according_to_credit_ratingWhereUniqueInput
  }


  /**
   * Investment_allocation_according_to_credit_rating updateMany
   */
  export type Investment_allocation_according_to_credit_ratingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investment_allocation_according_to_credit_ratings.
     */
    data: XOR<Investment_allocation_according_to_credit_ratingUpdateManyMutationInput, Investment_allocation_according_to_credit_ratingUncheckedUpdateManyInput>
    /**
     * Filter which Investment_allocation_according_to_credit_ratings to update
     */
    where?: Investment_allocation_according_to_credit_ratingWhereInput
  }


  /**
   * Investment_allocation_according_to_credit_rating upsert
   */
  export type Investment_allocation_according_to_credit_ratingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_according_to_credit_rating
     */
    select?: Investment_allocation_according_to_credit_ratingSelect<ExtArgs> | null
    /**
     * The filter to search for the Investment_allocation_according_to_credit_rating to update in case it exists.
     */
    where: Investment_allocation_according_to_credit_ratingWhereUniqueInput
    /**
     * In case the Investment_allocation_according_to_credit_rating found by the `where` argument doesn't exist, create a new Investment_allocation_according_to_credit_rating with this data.
     */
    create: XOR<Investment_allocation_according_to_credit_ratingCreateInput, Investment_allocation_according_to_credit_ratingUncheckedCreateInput>
    /**
     * In case the Investment_allocation_according_to_credit_rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Investment_allocation_according_to_credit_ratingUpdateInput, Investment_allocation_according_to_credit_ratingUncheckedUpdateInput>
  }


  /**
   * Investment_allocation_according_to_credit_rating delete
   */
  export type Investment_allocation_according_to_credit_ratingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_according_to_credit_rating
     */
    select?: Investment_allocation_according_to_credit_ratingSelect<ExtArgs> | null
    /**
     * Filter which Investment_allocation_according_to_credit_rating to delete.
     */
    where: Investment_allocation_according_to_credit_ratingWhereUniqueInput
  }


  /**
   * Investment_allocation_according_to_credit_rating deleteMany
   */
  export type Investment_allocation_according_to_credit_ratingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment_allocation_according_to_credit_ratings to delete
     */
    where?: Investment_allocation_according_to_credit_ratingWhereInput
  }


  /**
   * Investment_allocation_according_to_credit_rating findRaw
   */
  export type Investment_allocation_according_to_credit_ratingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Investment_allocation_according_to_credit_rating aggregateRaw
   */
  export type Investment_allocation_according_to_credit_ratingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Investment_allocation_according_to_credit_rating without action
   */
  export type Investment_allocation_according_to_credit_ratingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_allocation_according_to_credit_rating
     */
    select?: Investment_allocation_according_to_credit_ratingSelect<ExtArgs> | null
  }



  /**
   * Model Investment_In_Country
   */

  export type AggregateInvestment_In_Country = {
    _count: Investment_In_CountryCountAggregateOutputType | null
    _min: Investment_In_CountryMinAggregateOutputType | null
    _max: Investment_In_CountryMaxAggregateOutputType | null
  }

  export type Investment_In_CountryMinAggregateOutputType = {
    id: string | null
    proj_id: string | null
  }

  export type Investment_In_CountryMaxAggregateOutputType = {
    id: string | null
    proj_id: string | null
  }

  export type Investment_In_CountryCountAggregateOutputType = {
    id: number
    proj_id: number
    Countrydata: number
    _all: number
  }


  export type Investment_In_CountryMinAggregateInputType = {
    id?: true
    proj_id?: true
  }

  export type Investment_In_CountryMaxAggregateInputType = {
    id?: true
    proj_id?: true
  }

  export type Investment_In_CountryCountAggregateInputType = {
    id?: true
    proj_id?: true
    Countrydata?: true
    _all?: true
  }

  export type Investment_In_CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment_In_Country to aggregate.
     */
    where?: Investment_In_CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investment_In_Countries to fetch.
     */
    orderBy?: Investment_In_CountryOrderByWithRelationInput | Investment_In_CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Investment_In_CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investment_In_Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investment_In_Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investment_In_Countries
    **/
    _count?: true | Investment_In_CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Investment_In_CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Investment_In_CountryMaxAggregateInputType
  }

  export type GetInvestment_In_CountryAggregateType<T extends Investment_In_CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment_In_Country]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment_In_Country[P]>
      : GetScalarType<T[P], AggregateInvestment_In_Country[P]>
  }




  export type Investment_In_CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Investment_In_CountryWhereInput
    orderBy?: Investment_In_CountryOrderByWithAggregationInput | Investment_In_CountryOrderByWithAggregationInput[]
    by: Investment_In_CountryScalarFieldEnum[] | Investment_In_CountryScalarFieldEnum
    having?: Investment_In_CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Investment_In_CountryCountAggregateInputType | true
    _min?: Investment_In_CountryMinAggregateInputType
    _max?: Investment_In_CountryMaxAggregateInputType
  }

  export type Investment_In_CountryGroupByOutputType = {
    id: string
    proj_id: string
    Countrydata: JsonValue
    _count: Investment_In_CountryCountAggregateOutputType | null
    _min: Investment_In_CountryMinAggregateOutputType | null
    _max: Investment_In_CountryMaxAggregateOutputType | null
  }

  type GetInvestment_In_CountryGroupByPayload<T extends Investment_In_CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Investment_In_CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Investment_In_CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Investment_In_CountryGroupByOutputType[P]>
            : GetScalarType<T[P], Investment_In_CountryGroupByOutputType[P]>
        }
      >
    >


  export type Investment_In_CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proj_id?: boolean
    Countrydata?: boolean
  }, ExtArgs["result"]["investment_In_Country"]>

  export type Investment_In_CountrySelectScalar = {
    id?: boolean
    proj_id?: boolean
    Countrydata?: boolean
  }


  export type $Investment_In_CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investment_In_Country"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proj_id: string
      Countrydata: Prisma.JsonValue
    }, ExtArgs["result"]["investment_In_Country"]>
    composites: {}
  }


  type Investment_In_CountryGetPayload<S extends boolean | null | undefined | Investment_In_CountryDefaultArgs> = $Result.GetResult<Prisma.$Investment_In_CountryPayload, S>

  type Investment_In_CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Investment_In_CountryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Investment_In_CountryCountAggregateInputType | true
    }

  export interface Investment_In_CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investment_In_Country'], meta: { name: 'Investment_In_Country' } }
    /**
     * Find zero or one Investment_In_Country that matches the filter.
     * @param {Investment_In_CountryFindUniqueArgs} args - Arguments to find a Investment_In_Country
     * @example
     * // Get one Investment_In_Country
     * const investment_In_Country = await prisma.investment_In_Country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Investment_In_CountryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_In_CountryFindUniqueArgs<ExtArgs>>
    ): Prisma__Investment_In_CountryClient<$Result.GetResult<Prisma.$Investment_In_CountryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Investment_In_Country that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Investment_In_CountryFindUniqueOrThrowArgs} args - Arguments to find a Investment_In_Country
     * @example
     * // Get one Investment_In_Country
     * const investment_In_Country = await prisma.investment_In_Country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Investment_In_CountryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_In_CountryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Investment_In_CountryClient<$Result.GetResult<Prisma.$Investment_In_CountryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Investment_In_Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_In_CountryFindFirstArgs} args - Arguments to find a Investment_In_Country
     * @example
     * // Get one Investment_In_Country
     * const investment_In_Country = await prisma.investment_In_Country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Investment_In_CountryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_In_CountryFindFirstArgs<ExtArgs>>
    ): Prisma__Investment_In_CountryClient<$Result.GetResult<Prisma.$Investment_In_CountryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Investment_In_Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_In_CountryFindFirstOrThrowArgs} args - Arguments to find a Investment_In_Country
     * @example
     * // Get one Investment_In_Country
     * const investment_In_Country = await prisma.investment_In_Country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Investment_In_CountryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_In_CountryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Investment_In_CountryClient<$Result.GetResult<Prisma.$Investment_In_CountryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Investment_In_Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_In_CountryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investment_In_Countries
     * const investment_In_Countries = await prisma.investment_In_Country.findMany()
     * 
     * // Get first 10 Investment_In_Countries
     * const investment_In_Countries = await prisma.investment_In_Country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investment_In_CountryWithIdOnly = await prisma.investment_In_Country.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Investment_In_CountryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_In_CountryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Investment_In_CountryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Investment_In_Country.
     * @param {Investment_In_CountryCreateArgs} args - Arguments to create a Investment_In_Country.
     * @example
     * // Create one Investment_In_Country
     * const Investment_In_Country = await prisma.investment_In_Country.create({
     *   data: {
     *     // ... data to create a Investment_In_Country
     *   }
     * })
     * 
    **/
    create<T extends Investment_In_CountryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_In_CountryCreateArgs<ExtArgs>>
    ): Prisma__Investment_In_CountryClient<$Result.GetResult<Prisma.$Investment_In_CountryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Investment_In_Countries.
     *     @param {Investment_In_CountryCreateManyArgs} args - Arguments to create many Investment_In_Countries.
     *     @example
     *     // Create many Investment_In_Countries
     *     const investment_In_Country = await prisma.investment_In_Country.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Investment_In_CountryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_In_CountryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Investment_In_Country.
     * @param {Investment_In_CountryDeleteArgs} args - Arguments to delete one Investment_In_Country.
     * @example
     * // Delete one Investment_In_Country
     * const Investment_In_Country = await prisma.investment_In_Country.delete({
     *   where: {
     *     // ... filter to delete one Investment_In_Country
     *   }
     * })
     * 
    **/
    delete<T extends Investment_In_CountryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_In_CountryDeleteArgs<ExtArgs>>
    ): Prisma__Investment_In_CountryClient<$Result.GetResult<Prisma.$Investment_In_CountryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Investment_In_Country.
     * @param {Investment_In_CountryUpdateArgs} args - Arguments to update one Investment_In_Country.
     * @example
     * // Update one Investment_In_Country
     * const investment_In_Country = await prisma.investment_In_Country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Investment_In_CountryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_In_CountryUpdateArgs<ExtArgs>>
    ): Prisma__Investment_In_CountryClient<$Result.GetResult<Prisma.$Investment_In_CountryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Investment_In_Countries.
     * @param {Investment_In_CountryDeleteManyArgs} args - Arguments to filter Investment_In_Countries to delete.
     * @example
     * // Delete a few Investment_In_Countries
     * const { count } = await prisma.investment_In_Country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Investment_In_CountryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Investment_In_CountryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investment_In_Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_In_CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investment_In_Countries
     * const investment_In_Country = await prisma.investment_In_Country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Investment_In_CountryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_In_CountryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Investment_In_Country.
     * @param {Investment_In_CountryUpsertArgs} args - Arguments to update or create a Investment_In_Country.
     * @example
     * // Update or create a Investment_In_Country
     * const investment_In_Country = await prisma.investment_In_Country.upsert({
     *   create: {
     *     // ... data to create a Investment_In_Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment_In_Country we want to update
     *   }
     * })
    **/
    upsert<T extends Investment_In_CountryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Investment_In_CountryUpsertArgs<ExtArgs>>
    ): Prisma__Investment_In_CountryClient<$Result.GetResult<Prisma.$Investment_In_CountryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Investment_In_Countries that matches the filter.
     * @param {Investment_In_CountryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const investment_In_Country = await prisma.investment_In_Country.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Investment_In_CountryFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Investment_In_Country.
     * @param {Investment_In_CountryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const investment_In_Country = await prisma.investment_In_Country.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Investment_In_CountryAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Investment_In_Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_In_CountryCountArgs} args - Arguments to filter Investment_In_Countries to count.
     * @example
     * // Count the number of Investment_In_Countries
     * const count = await prisma.investment_In_Country.count({
     *   where: {
     *     // ... the filter for the Investment_In_Countries we want to count
     *   }
     * })
    **/
    count<T extends Investment_In_CountryCountArgs>(
      args?: Subset<T, Investment_In_CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Investment_In_CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment_In_Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_In_CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Investment_In_CountryAggregateArgs>(args: Subset<T, Investment_In_CountryAggregateArgs>): Prisma.PrismaPromise<GetInvestment_In_CountryAggregateType<T>>

    /**
     * Group by Investment_In_Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_In_CountryGroupByArgs} args - Group by arguments.
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
      T extends Investment_In_CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Investment_In_CountryGroupByArgs['orderBy'] }
        : { orderBy?: Investment_In_CountryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Investment_In_CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestment_In_CountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investment_In_Country model
   */
  readonly fields: Investment_In_CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investment_In_Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Investment_In_CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Investment_In_Country model
   */ 
  interface Investment_In_CountryFieldRefs {
    readonly id: FieldRef<"Investment_In_Country", 'String'>
    readonly proj_id: FieldRef<"Investment_In_Country", 'String'>
    readonly Countrydata: FieldRef<"Investment_In_Country", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Investment_In_Country findUnique
   */
  export type Investment_In_CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_In_Country
     */
    select?: Investment_In_CountrySelect<ExtArgs> | null
    /**
     * Filter, which Investment_In_Country to fetch.
     */
    where: Investment_In_CountryWhereUniqueInput
  }


  /**
   * Investment_In_Country findUniqueOrThrow
   */
  export type Investment_In_CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_In_Country
     */
    select?: Investment_In_CountrySelect<ExtArgs> | null
    /**
     * Filter, which Investment_In_Country to fetch.
     */
    where: Investment_In_CountryWhereUniqueInput
  }


  /**
   * Investment_In_Country findFirst
   */
  export type Investment_In_CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_In_Country
     */
    select?: Investment_In_CountrySelect<ExtArgs> | null
    /**
     * Filter, which Investment_In_Country to fetch.
     */
    where?: Investment_In_CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investment_In_Countries to fetch.
     */
    orderBy?: Investment_In_CountryOrderByWithRelationInput | Investment_In_CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investment_In_Countries.
     */
    cursor?: Investment_In_CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investment_In_Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investment_In_Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investment_In_Countries.
     */
    distinct?: Investment_In_CountryScalarFieldEnum | Investment_In_CountryScalarFieldEnum[]
  }


  /**
   * Investment_In_Country findFirstOrThrow
   */
  export type Investment_In_CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_In_Country
     */
    select?: Investment_In_CountrySelect<ExtArgs> | null
    /**
     * Filter, which Investment_In_Country to fetch.
     */
    where?: Investment_In_CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investment_In_Countries to fetch.
     */
    orderBy?: Investment_In_CountryOrderByWithRelationInput | Investment_In_CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investment_In_Countries.
     */
    cursor?: Investment_In_CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investment_In_Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investment_In_Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investment_In_Countries.
     */
    distinct?: Investment_In_CountryScalarFieldEnum | Investment_In_CountryScalarFieldEnum[]
  }


  /**
   * Investment_In_Country findMany
   */
  export type Investment_In_CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_In_Country
     */
    select?: Investment_In_CountrySelect<ExtArgs> | null
    /**
     * Filter, which Investment_In_Countries to fetch.
     */
    where?: Investment_In_CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investment_In_Countries to fetch.
     */
    orderBy?: Investment_In_CountryOrderByWithRelationInput | Investment_In_CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investment_In_Countries.
     */
    cursor?: Investment_In_CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investment_In_Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investment_In_Countries.
     */
    skip?: number
    distinct?: Investment_In_CountryScalarFieldEnum | Investment_In_CountryScalarFieldEnum[]
  }


  /**
   * Investment_In_Country create
   */
  export type Investment_In_CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_In_Country
     */
    select?: Investment_In_CountrySelect<ExtArgs> | null
    /**
     * The data needed to create a Investment_In_Country.
     */
    data: XOR<Investment_In_CountryCreateInput, Investment_In_CountryUncheckedCreateInput>
  }


  /**
   * Investment_In_Country createMany
   */
  export type Investment_In_CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investment_In_Countries.
     */
    data: Investment_In_CountryCreateManyInput | Investment_In_CountryCreateManyInput[]
  }


  /**
   * Investment_In_Country update
   */
  export type Investment_In_CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_In_Country
     */
    select?: Investment_In_CountrySelect<ExtArgs> | null
    /**
     * The data needed to update a Investment_In_Country.
     */
    data: XOR<Investment_In_CountryUpdateInput, Investment_In_CountryUncheckedUpdateInput>
    /**
     * Choose, which Investment_In_Country to update.
     */
    where: Investment_In_CountryWhereUniqueInput
  }


  /**
   * Investment_In_Country updateMany
   */
  export type Investment_In_CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investment_In_Countries.
     */
    data: XOR<Investment_In_CountryUpdateManyMutationInput, Investment_In_CountryUncheckedUpdateManyInput>
    /**
     * Filter which Investment_In_Countries to update
     */
    where?: Investment_In_CountryWhereInput
  }


  /**
   * Investment_In_Country upsert
   */
  export type Investment_In_CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_In_Country
     */
    select?: Investment_In_CountrySelect<ExtArgs> | null
    /**
     * The filter to search for the Investment_In_Country to update in case it exists.
     */
    where: Investment_In_CountryWhereUniqueInput
    /**
     * In case the Investment_In_Country found by the `where` argument doesn't exist, create a new Investment_In_Country with this data.
     */
    create: XOR<Investment_In_CountryCreateInput, Investment_In_CountryUncheckedCreateInput>
    /**
     * In case the Investment_In_Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Investment_In_CountryUpdateInput, Investment_In_CountryUncheckedUpdateInput>
  }


  /**
   * Investment_In_Country delete
   */
  export type Investment_In_CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_In_Country
     */
    select?: Investment_In_CountrySelect<ExtArgs> | null
    /**
     * Filter which Investment_In_Country to delete.
     */
    where: Investment_In_CountryWhereUniqueInput
  }


  /**
   * Investment_In_Country deleteMany
   */
  export type Investment_In_CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment_In_Countries to delete
     */
    where?: Investment_In_CountryWhereInput
  }


  /**
   * Investment_In_Country findRaw
   */
  export type Investment_In_CountryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Investment_In_Country aggregateRaw
   */
  export type Investment_In_CountryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Investment_In_Country without action
   */
  export type Investment_In_CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment_In_Country
     */
    select?: Investment_In_CountrySelect<ExtArgs> | null
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
   * Enums
   */

  export const FundScalarFieldEnum: {
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

  export type FundScalarFieldEnum = (typeof FundScalarFieldEnum)[keyof typeof FundScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    proj_abbr_name: 'proj_abbr_name',
    proj_name_en: 'proj_name_en',
    proj_name_th: 'proj_name_th',
    unique_id: 'unique_id',
    risk_spectrum: 'risk_spectrum'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    favID: 'favID'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const CompareinfomationScalarFieldEnum: {
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

  export type CompareinfomationScalarFieldEnum = (typeof CompareinfomationScalarFieldEnum)[keyof typeof CompareinfomationScalarFieldEnum]


  export const Type_assets_investedScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    data: 'data'
  };

  export type Type_assets_investedScalarFieldEnum = (typeof Type_assets_investedScalarFieldEnum)[keyof typeof Type_assets_investedScalarFieldEnum]


  export const Top_five_investment_assetsScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    data: 'data'
  };

  export type Top_five_investment_assetsScalarFieldEnum = (typeof Top_five_investment_assetsScalarFieldEnum)[keyof typeof Top_five_investment_assetsScalarFieldEnum]


  export const Fees_charged_by_mutual_fundsScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    data: 'data'
  };

  export type Fees_charged_by_mutual_fundsScalarFieldEnum = (typeof Fees_charged_by_mutual_fundsScalarFieldEnum)[keyof typeof Fees_charged_by_mutual_fundsScalarFieldEnum]


  export const Fees_charged_to_unitholdersScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    data: 'data'
  };

  export type Fees_charged_to_unitholdersScalarFieldEnum = (typeof Fees_charged_to_unitholdersScalarFieldEnum)[keyof typeof Fees_charged_to_unitholdersScalarFieldEnum]


  export const Investment_allocation_in_the_top_five_issuersScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    data: 'data'
  };

  export type Investment_allocation_in_the_top_five_issuersScalarFieldEnum = (typeof Investment_allocation_in_the_top_five_issuersScalarFieldEnum)[keyof typeof Investment_allocation_in_the_top_five_issuersScalarFieldEnum]


  export const Investment_allocation_according_to_credit_ratingScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    data: 'data'
  };

  export type Investment_allocation_according_to_credit_ratingScalarFieldEnum = (typeof Investment_allocation_according_to_credit_ratingScalarFieldEnum)[keyof typeof Investment_allocation_according_to_credit_ratingScalarFieldEnum]


  export const Investment_In_CountryScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    Countrydata: 'Countrydata'
  };

  export type Investment_In_CountryScalarFieldEnum = (typeof Investment_In_CountryScalarFieldEnum)[keyof typeof Investment_In_CountryScalarFieldEnum]


  export const AllProductInfoScalarFieldEnum: {
    id: 'id',
    proj_id: 'proj_id',
    proj_abbr_name: 'proj_abbr_name',
    Allinfo: 'Allinfo'
  };

  export type AllProductInfoScalarFieldEnum = (typeof AllProductInfoScalarFieldEnum)[keyof typeof AllProductInfoScalarFieldEnum]


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


  export type FundWhereInput = {
    AND?: FundWhereInput | FundWhereInput[]
    OR?: FundWhereInput[]
    NOT?: FundWhereInput | FundWhereInput[]
    id?: StringFilter<"Fund"> | string
    proj_id?: StringFilter<"Fund"> | string
    regis_id?: StringFilter<"Fund"> | string
    regis_date?: StringFilter<"Fund"> | string
    cancel_date?: StringFilter<"Fund"> | string
    proj_name_th?: StringFilter<"Fund"> | string
    proj_name_en?: StringFilter<"Fund"> | string
    proj_abbr_name?: StringFilter<"Fund"> | string
    fund_status?: StringFilter<"Fund"> | string
    unique_id?: StringFilter<"Fund"> | string
    permit_us_investment?: StringNullableFilter<"Fund"> | string | null
    invest_country_flag?: StringFilter<"Fund"> | string
    last_upd_date?: StringFilter<"Fund"> | string
  }

  export type FundOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    regis_id?: SortOrder
    regis_date?: SortOrder
    cancel_date?: SortOrder
    proj_name_th?: SortOrder
    proj_name_en?: SortOrder
    proj_abbr_name?: SortOrder
    fund_status?: SortOrder
    unique_id?: SortOrder
    permit_us_investment?: SortOrder
    invest_country_flag?: SortOrder
    last_upd_date?: SortOrder
  }

  export type FundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    AND?: FundWhereInput | FundWhereInput[]
    OR?: FundWhereInput[]
    NOT?: FundWhereInput | FundWhereInput[]
    regis_id?: StringFilter<"Fund"> | string
    regis_date?: StringFilter<"Fund"> | string
    cancel_date?: StringFilter<"Fund"> | string
    proj_name_th?: StringFilter<"Fund"> | string
    proj_name_en?: StringFilter<"Fund"> | string
    proj_abbr_name?: StringFilter<"Fund"> | string
    fund_status?: StringFilter<"Fund"> | string
    unique_id?: StringFilter<"Fund"> | string
    permit_us_investment?: StringNullableFilter<"Fund"> | string | null
    invest_country_flag?: StringFilter<"Fund"> | string
    last_upd_date?: StringFilter<"Fund"> | string
  }, "id" | "proj_id">

  export type FundOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    regis_id?: SortOrder
    regis_date?: SortOrder
    cancel_date?: SortOrder
    proj_name_th?: SortOrder
    proj_name_en?: SortOrder
    proj_abbr_name?: SortOrder
    fund_status?: SortOrder
    unique_id?: SortOrder
    permit_us_investment?: SortOrder
    invest_country_flag?: SortOrder
    last_upd_date?: SortOrder
    _count?: FundCountOrderByAggregateInput
    _max?: FundMaxOrderByAggregateInput
    _min?: FundMinOrderByAggregateInput
  }

  export type FundScalarWhereWithAggregatesInput = {
    AND?: FundScalarWhereWithAggregatesInput | FundScalarWhereWithAggregatesInput[]
    OR?: FundScalarWhereWithAggregatesInput[]
    NOT?: FundScalarWhereWithAggregatesInput | FundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fund"> | string
    proj_id?: StringWithAggregatesFilter<"Fund"> | string
    regis_id?: StringWithAggregatesFilter<"Fund"> | string
    regis_date?: StringWithAggregatesFilter<"Fund"> | string
    cancel_date?: StringWithAggregatesFilter<"Fund"> | string
    proj_name_th?: StringWithAggregatesFilter<"Fund"> | string
    proj_name_en?: StringWithAggregatesFilter<"Fund"> | string
    proj_abbr_name?: StringWithAggregatesFilter<"Fund"> | string
    fund_status?: StringWithAggregatesFilter<"Fund"> | string
    unique_id?: StringWithAggregatesFilter<"Fund"> | string
    permit_us_investment?: StringNullableWithAggregatesFilter<"Fund"> | string | null
    invest_country_flag?: StringWithAggregatesFilter<"Fund"> | string
    last_upd_date?: StringWithAggregatesFilter<"Fund"> | string
  }

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
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    proj_abbr_name?: StringFilter<"Product"> | string
    proj_name_en?: StringFilter<"Product"> | string
    proj_name_th?: StringFilter<"Product"> | string
    unique_id?: StringFilter<"Product"> | string
    risk_spectrum?: StringFilter<"Product"> | string
  }, "id" | "proj_id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
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
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    favorites?: FavoriteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    favorites?: FavoriteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    proj_id?: StringFilter<"Favorite"> | string
    favID?: StringFilter<"Favorite"> | string
    fav?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    favID?: SortOrder
    fav?: UserOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    favID?: StringFilter<"Favorite"> | string
    fav?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "proj_id">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    favID?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    proj_id?: StringWithAggregatesFilter<"Favorite"> | string
    favID?: StringWithAggregatesFilter<"Favorite"> | string
  }

  export type CompareinfomationWhereInput = {
    AND?: CompareinfomationWhereInput | CompareinfomationWhereInput[]
    OR?: CompareinfomationWhereInput[]
    NOT?: CompareinfomationWhereInput | CompareinfomationWhereInput[]
    id?: StringFilter<"Compareinfomation"> | string
    fundType?: StringFilter<"Compareinfomation"> | string
    risk_spectrum?: StringFilter<"Compareinfomation"> | string
    Feeder_Fund?: StringFilter<"Compareinfomation"> | string
    Currency_policy?: StringFilter<"Compareinfomation"> | string
    Dividend_payment_policy?: StringFilter<"Compareinfomation"> | string
    Sales_fees?: StringFilter<"Compareinfomation"> | string
    Buyback_fee?: StringFilter<"Compareinfomation"> | string
    Mutual_fund_expenses?: StringFilter<"Compareinfomation"> | string
    Minimum_initial_investment?: StringFilter<"Compareinfomation"> | string
    Minimum_next_investment?: StringFilter<"Compareinfomation"> | string
    Investment_registration_date?: StringFilter<"Compareinfomation"> | string
    Net_asset_value?: StringFilter<"Compareinfomation"> | string
  }

  export type CompareinfomationOrderByWithRelationInput = {
    id?: SortOrder
    fundType?: SortOrder
    risk_spectrum?: SortOrder
    Feeder_Fund?: SortOrder
    Currency_policy?: SortOrder
    Dividend_payment_policy?: SortOrder
    Sales_fees?: SortOrder
    Buyback_fee?: SortOrder
    Mutual_fund_expenses?: SortOrder
    Minimum_initial_investment?: SortOrder
    Minimum_next_investment?: SortOrder
    Investment_registration_date?: SortOrder
    Net_asset_value?: SortOrder
  }

  export type CompareinfomationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompareinfomationWhereInput | CompareinfomationWhereInput[]
    OR?: CompareinfomationWhereInput[]
    NOT?: CompareinfomationWhereInput | CompareinfomationWhereInput[]
    fundType?: StringFilter<"Compareinfomation"> | string
    risk_spectrum?: StringFilter<"Compareinfomation"> | string
    Feeder_Fund?: StringFilter<"Compareinfomation"> | string
    Currency_policy?: StringFilter<"Compareinfomation"> | string
    Dividend_payment_policy?: StringFilter<"Compareinfomation"> | string
    Sales_fees?: StringFilter<"Compareinfomation"> | string
    Buyback_fee?: StringFilter<"Compareinfomation"> | string
    Mutual_fund_expenses?: StringFilter<"Compareinfomation"> | string
    Minimum_initial_investment?: StringFilter<"Compareinfomation"> | string
    Minimum_next_investment?: StringFilter<"Compareinfomation"> | string
    Investment_registration_date?: StringFilter<"Compareinfomation"> | string
    Net_asset_value?: StringFilter<"Compareinfomation"> | string
  }, "id">

  export type CompareinfomationOrderByWithAggregationInput = {
    id?: SortOrder
    fundType?: SortOrder
    risk_spectrum?: SortOrder
    Feeder_Fund?: SortOrder
    Currency_policy?: SortOrder
    Dividend_payment_policy?: SortOrder
    Sales_fees?: SortOrder
    Buyback_fee?: SortOrder
    Mutual_fund_expenses?: SortOrder
    Minimum_initial_investment?: SortOrder
    Minimum_next_investment?: SortOrder
    Investment_registration_date?: SortOrder
    Net_asset_value?: SortOrder
    _count?: CompareinfomationCountOrderByAggregateInput
    _max?: CompareinfomationMaxOrderByAggregateInput
    _min?: CompareinfomationMinOrderByAggregateInput
  }

  export type CompareinfomationScalarWhereWithAggregatesInput = {
    AND?: CompareinfomationScalarWhereWithAggregatesInput | CompareinfomationScalarWhereWithAggregatesInput[]
    OR?: CompareinfomationScalarWhereWithAggregatesInput[]
    NOT?: CompareinfomationScalarWhereWithAggregatesInput | CompareinfomationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Compareinfomation"> | string
    fundType?: StringWithAggregatesFilter<"Compareinfomation"> | string
    risk_spectrum?: StringWithAggregatesFilter<"Compareinfomation"> | string
    Feeder_Fund?: StringWithAggregatesFilter<"Compareinfomation"> | string
    Currency_policy?: StringWithAggregatesFilter<"Compareinfomation"> | string
    Dividend_payment_policy?: StringWithAggregatesFilter<"Compareinfomation"> | string
    Sales_fees?: StringWithAggregatesFilter<"Compareinfomation"> | string
    Buyback_fee?: StringWithAggregatesFilter<"Compareinfomation"> | string
    Mutual_fund_expenses?: StringWithAggregatesFilter<"Compareinfomation"> | string
    Minimum_initial_investment?: StringWithAggregatesFilter<"Compareinfomation"> | string
    Minimum_next_investment?: StringWithAggregatesFilter<"Compareinfomation"> | string
    Investment_registration_date?: StringWithAggregatesFilter<"Compareinfomation"> | string
    Net_asset_value?: StringWithAggregatesFilter<"Compareinfomation"> | string
  }

  export type Type_assets_investedWhereInput = {
    AND?: Type_assets_investedWhereInput | Type_assets_investedWhereInput[]
    OR?: Type_assets_investedWhereInput[]
    NOT?: Type_assets_investedWhereInput | Type_assets_investedWhereInput[]
    id?: StringFilter<"Type_assets_invested"> | string
    proj_id?: StringFilter<"Type_assets_invested"> | string
    data?: JsonFilter<"Type_assets_invested">
  }

  export type Type_assets_investedOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
  }

  export type Type_assets_investedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    AND?: Type_assets_investedWhereInput | Type_assets_investedWhereInput[]
    OR?: Type_assets_investedWhereInput[]
    NOT?: Type_assets_investedWhereInput | Type_assets_investedWhereInput[]
    data?: JsonFilter<"Type_assets_invested">
  }, "id" | "proj_id">

  export type Type_assets_investedOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
    _count?: Type_assets_investedCountOrderByAggregateInput
    _max?: Type_assets_investedMaxOrderByAggregateInput
    _min?: Type_assets_investedMinOrderByAggregateInput
  }

  export type Type_assets_investedScalarWhereWithAggregatesInput = {
    AND?: Type_assets_investedScalarWhereWithAggregatesInput | Type_assets_investedScalarWhereWithAggregatesInput[]
    OR?: Type_assets_investedScalarWhereWithAggregatesInput[]
    NOT?: Type_assets_investedScalarWhereWithAggregatesInput | Type_assets_investedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Type_assets_invested"> | string
    proj_id?: StringWithAggregatesFilter<"Type_assets_invested"> | string
    data?: JsonWithAggregatesFilter<"Type_assets_invested">
  }

  export type Top_five_investment_assetsWhereInput = {
    AND?: Top_five_investment_assetsWhereInput | Top_five_investment_assetsWhereInput[]
    OR?: Top_five_investment_assetsWhereInput[]
    NOT?: Top_five_investment_assetsWhereInput | Top_five_investment_assetsWhereInput[]
    id?: StringFilter<"Top_five_investment_assets"> | string
    proj_id?: StringFilter<"Top_five_investment_assets"> | string
    data?: JsonFilter<"Top_five_investment_assets">
  }

  export type Top_five_investment_assetsOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
  }

  export type Top_five_investment_assetsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    AND?: Top_five_investment_assetsWhereInput | Top_five_investment_assetsWhereInput[]
    OR?: Top_five_investment_assetsWhereInput[]
    NOT?: Top_five_investment_assetsWhereInput | Top_five_investment_assetsWhereInput[]
    data?: JsonFilter<"Top_five_investment_assets">
  }, "id" | "proj_id">

  export type Top_five_investment_assetsOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
    _count?: Top_five_investment_assetsCountOrderByAggregateInput
    _max?: Top_five_investment_assetsMaxOrderByAggregateInput
    _min?: Top_five_investment_assetsMinOrderByAggregateInput
  }

  export type Top_five_investment_assetsScalarWhereWithAggregatesInput = {
    AND?: Top_five_investment_assetsScalarWhereWithAggregatesInput | Top_five_investment_assetsScalarWhereWithAggregatesInput[]
    OR?: Top_five_investment_assetsScalarWhereWithAggregatesInput[]
    NOT?: Top_five_investment_assetsScalarWhereWithAggregatesInput | Top_five_investment_assetsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Top_five_investment_assets"> | string
    proj_id?: StringWithAggregatesFilter<"Top_five_investment_assets"> | string
    data?: JsonWithAggregatesFilter<"Top_five_investment_assets">
  }

  export type Fees_charged_by_mutual_fundsWhereInput = {
    AND?: Fees_charged_by_mutual_fundsWhereInput | Fees_charged_by_mutual_fundsWhereInput[]
    OR?: Fees_charged_by_mutual_fundsWhereInput[]
    NOT?: Fees_charged_by_mutual_fundsWhereInput | Fees_charged_by_mutual_fundsWhereInput[]
    id?: StringFilter<"Fees_charged_by_mutual_funds"> | string
    proj_id?: StringFilter<"Fees_charged_by_mutual_funds"> | string
    data?: JsonFilter<"Fees_charged_by_mutual_funds">
  }

  export type Fees_charged_by_mutual_fundsOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
  }

  export type Fees_charged_by_mutual_fundsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    AND?: Fees_charged_by_mutual_fundsWhereInput | Fees_charged_by_mutual_fundsWhereInput[]
    OR?: Fees_charged_by_mutual_fundsWhereInput[]
    NOT?: Fees_charged_by_mutual_fundsWhereInput | Fees_charged_by_mutual_fundsWhereInput[]
    data?: JsonFilter<"Fees_charged_by_mutual_funds">
  }, "id" | "proj_id">

  export type Fees_charged_by_mutual_fundsOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
    _count?: Fees_charged_by_mutual_fundsCountOrderByAggregateInput
    _max?: Fees_charged_by_mutual_fundsMaxOrderByAggregateInput
    _min?: Fees_charged_by_mutual_fundsMinOrderByAggregateInput
  }

  export type Fees_charged_by_mutual_fundsScalarWhereWithAggregatesInput = {
    AND?: Fees_charged_by_mutual_fundsScalarWhereWithAggregatesInput | Fees_charged_by_mutual_fundsScalarWhereWithAggregatesInput[]
    OR?: Fees_charged_by_mutual_fundsScalarWhereWithAggregatesInput[]
    NOT?: Fees_charged_by_mutual_fundsScalarWhereWithAggregatesInput | Fees_charged_by_mutual_fundsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fees_charged_by_mutual_funds"> | string
    proj_id?: StringWithAggregatesFilter<"Fees_charged_by_mutual_funds"> | string
    data?: JsonWithAggregatesFilter<"Fees_charged_by_mutual_funds">
  }

  export type Fees_charged_to_unitholdersWhereInput = {
    AND?: Fees_charged_to_unitholdersWhereInput | Fees_charged_to_unitholdersWhereInput[]
    OR?: Fees_charged_to_unitholdersWhereInput[]
    NOT?: Fees_charged_to_unitholdersWhereInput | Fees_charged_to_unitholdersWhereInput[]
    id?: StringFilter<"Fees_charged_to_unitholders"> | string
    proj_id?: StringFilter<"Fees_charged_to_unitholders"> | string
    data?: JsonFilter<"Fees_charged_to_unitholders">
  }

  export type Fees_charged_to_unitholdersOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
  }

  export type Fees_charged_to_unitholdersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    AND?: Fees_charged_to_unitholdersWhereInput | Fees_charged_to_unitholdersWhereInput[]
    OR?: Fees_charged_to_unitholdersWhereInput[]
    NOT?: Fees_charged_to_unitholdersWhereInput | Fees_charged_to_unitholdersWhereInput[]
    data?: JsonFilter<"Fees_charged_to_unitholders">
  }, "id" | "proj_id">

  export type Fees_charged_to_unitholdersOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
    _count?: Fees_charged_to_unitholdersCountOrderByAggregateInput
    _max?: Fees_charged_to_unitholdersMaxOrderByAggregateInput
    _min?: Fees_charged_to_unitholdersMinOrderByAggregateInput
  }

  export type Fees_charged_to_unitholdersScalarWhereWithAggregatesInput = {
    AND?: Fees_charged_to_unitholdersScalarWhereWithAggregatesInput | Fees_charged_to_unitholdersScalarWhereWithAggregatesInput[]
    OR?: Fees_charged_to_unitholdersScalarWhereWithAggregatesInput[]
    NOT?: Fees_charged_to_unitholdersScalarWhereWithAggregatesInput | Fees_charged_to_unitholdersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fees_charged_to_unitholders"> | string
    proj_id?: StringWithAggregatesFilter<"Fees_charged_to_unitholders"> | string
    data?: JsonWithAggregatesFilter<"Fees_charged_to_unitholders">
  }

  export type Investment_allocation_in_the_top_five_issuersWhereInput = {
    AND?: Investment_allocation_in_the_top_five_issuersWhereInput | Investment_allocation_in_the_top_five_issuersWhereInput[]
    OR?: Investment_allocation_in_the_top_five_issuersWhereInput[]
    NOT?: Investment_allocation_in_the_top_five_issuersWhereInput | Investment_allocation_in_the_top_five_issuersWhereInput[]
    id?: StringFilter<"Investment_allocation_in_the_top_five_issuers"> | string
    proj_id?: StringFilter<"Investment_allocation_in_the_top_five_issuers"> | string
    data?: JsonFilter<"Investment_allocation_in_the_top_five_issuers">
  }

  export type Investment_allocation_in_the_top_five_issuersOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
  }

  export type Investment_allocation_in_the_top_five_issuersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    AND?: Investment_allocation_in_the_top_five_issuersWhereInput | Investment_allocation_in_the_top_five_issuersWhereInput[]
    OR?: Investment_allocation_in_the_top_five_issuersWhereInput[]
    NOT?: Investment_allocation_in_the_top_five_issuersWhereInput | Investment_allocation_in_the_top_five_issuersWhereInput[]
    data?: JsonFilter<"Investment_allocation_in_the_top_five_issuers">
  }, "id" | "proj_id">

  export type Investment_allocation_in_the_top_five_issuersOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
    _count?: Investment_allocation_in_the_top_five_issuersCountOrderByAggregateInput
    _max?: Investment_allocation_in_the_top_five_issuersMaxOrderByAggregateInput
    _min?: Investment_allocation_in_the_top_five_issuersMinOrderByAggregateInput
  }

  export type Investment_allocation_in_the_top_five_issuersScalarWhereWithAggregatesInput = {
    AND?: Investment_allocation_in_the_top_five_issuersScalarWhereWithAggregatesInput | Investment_allocation_in_the_top_five_issuersScalarWhereWithAggregatesInput[]
    OR?: Investment_allocation_in_the_top_five_issuersScalarWhereWithAggregatesInput[]
    NOT?: Investment_allocation_in_the_top_five_issuersScalarWhereWithAggregatesInput | Investment_allocation_in_the_top_five_issuersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investment_allocation_in_the_top_five_issuers"> | string
    proj_id?: StringWithAggregatesFilter<"Investment_allocation_in_the_top_five_issuers"> | string
    data?: JsonWithAggregatesFilter<"Investment_allocation_in_the_top_five_issuers">
  }

  export type Investment_allocation_according_to_credit_ratingWhereInput = {
    AND?: Investment_allocation_according_to_credit_ratingWhereInput | Investment_allocation_according_to_credit_ratingWhereInput[]
    OR?: Investment_allocation_according_to_credit_ratingWhereInput[]
    NOT?: Investment_allocation_according_to_credit_ratingWhereInput | Investment_allocation_according_to_credit_ratingWhereInput[]
    id?: StringFilter<"Investment_allocation_according_to_credit_rating"> | string
    proj_id?: StringFilter<"Investment_allocation_according_to_credit_rating"> | string
    data?: JsonFilter<"Investment_allocation_according_to_credit_rating">
  }

  export type Investment_allocation_according_to_credit_ratingOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
  }

  export type Investment_allocation_according_to_credit_ratingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    AND?: Investment_allocation_according_to_credit_ratingWhereInput | Investment_allocation_according_to_credit_ratingWhereInput[]
    OR?: Investment_allocation_according_to_credit_ratingWhereInput[]
    NOT?: Investment_allocation_according_to_credit_ratingWhereInput | Investment_allocation_according_to_credit_ratingWhereInput[]
    data?: JsonFilter<"Investment_allocation_according_to_credit_rating">
  }, "id" | "proj_id">

  export type Investment_allocation_according_to_credit_ratingOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
    _count?: Investment_allocation_according_to_credit_ratingCountOrderByAggregateInput
    _max?: Investment_allocation_according_to_credit_ratingMaxOrderByAggregateInput
    _min?: Investment_allocation_according_to_credit_ratingMinOrderByAggregateInput
  }

  export type Investment_allocation_according_to_credit_ratingScalarWhereWithAggregatesInput = {
    AND?: Investment_allocation_according_to_credit_ratingScalarWhereWithAggregatesInput | Investment_allocation_according_to_credit_ratingScalarWhereWithAggregatesInput[]
    OR?: Investment_allocation_according_to_credit_ratingScalarWhereWithAggregatesInput[]
    NOT?: Investment_allocation_according_to_credit_ratingScalarWhereWithAggregatesInput | Investment_allocation_according_to_credit_ratingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investment_allocation_according_to_credit_rating"> | string
    proj_id?: StringWithAggregatesFilter<"Investment_allocation_according_to_credit_rating"> | string
    data?: JsonWithAggregatesFilter<"Investment_allocation_according_to_credit_rating">
  }

  export type Investment_In_CountryWhereInput = {
    AND?: Investment_In_CountryWhereInput | Investment_In_CountryWhereInput[]
    OR?: Investment_In_CountryWhereInput[]
    NOT?: Investment_In_CountryWhereInput | Investment_In_CountryWhereInput[]
    id?: StringFilter<"Investment_In_Country"> | string
    proj_id?: StringFilter<"Investment_In_Country"> | string
    Countrydata?: JsonFilter<"Investment_In_Country">
  }

  export type Investment_In_CountryOrderByWithRelationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    Countrydata?: SortOrder
  }

  export type Investment_In_CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proj_id?: string
    AND?: Investment_In_CountryWhereInput | Investment_In_CountryWhereInput[]
    OR?: Investment_In_CountryWhereInput[]
    NOT?: Investment_In_CountryWhereInput | Investment_In_CountryWhereInput[]
    Countrydata?: JsonFilter<"Investment_In_Country">
  }, "id" | "proj_id">

  export type Investment_In_CountryOrderByWithAggregationInput = {
    id?: SortOrder
    proj_id?: SortOrder
    Countrydata?: SortOrder
    _count?: Investment_In_CountryCountOrderByAggregateInput
    _max?: Investment_In_CountryMaxOrderByAggregateInput
    _min?: Investment_In_CountryMinOrderByAggregateInput
  }

  export type Investment_In_CountryScalarWhereWithAggregatesInput = {
    AND?: Investment_In_CountryScalarWhereWithAggregatesInput | Investment_In_CountryScalarWhereWithAggregatesInput[]
    OR?: Investment_In_CountryScalarWhereWithAggregatesInput[]
    NOT?: Investment_In_CountryScalarWhereWithAggregatesInput | Investment_In_CountryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investment_In_Country"> | string
    proj_id?: StringWithAggregatesFilter<"Investment_In_Country"> | string
    Countrydata?: JsonWithAggregatesFilter<"Investment_In_Country">
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

  export type FundCreateInput = {
    id?: string
    proj_id: string
    regis_id: string
    regis_date: string
    cancel_date: string
    proj_name_th: string
    proj_name_en: string
    proj_abbr_name: string
    fund_status: string
    unique_id: string
    permit_us_investment?: string | null
    invest_country_flag: string
    last_upd_date: string
  }

  export type FundUncheckedCreateInput = {
    id?: string
    proj_id: string
    regis_id: string
    regis_date: string
    cancel_date: string
    proj_name_th: string
    proj_name_en: string
    proj_abbr_name: string
    fund_status: string
    unique_id: string
    permit_us_investment?: string | null
    invest_country_flag: string
    last_upd_date: string
  }

  export type FundUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    regis_id?: StringFieldUpdateOperationsInput | string
    regis_date?: StringFieldUpdateOperationsInput | string
    cancel_date?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    fund_status?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    permit_us_investment?: NullableStringFieldUpdateOperationsInput | string | null
    invest_country_flag?: StringFieldUpdateOperationsInput | string
    last_upd_date?: StringFieldUpdateOperationsInput | string
  }

  export type FundUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    regis_id?: StringFieldUpdateOperationsInput | string
    regis_date?: StringFieldUpdateOperationsInput | string
    cancel_date?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    fund_status?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    permit_us_investment?: NullableStringFieldUpdateOperationsInput | string | null
    invest_country_flag?: StringFieldUpdateOperationsInput | string
    last_upd_date?: StringFieldUpdateOperationsInput | string
  }

  export type FundCreateManyInput = {
    id?: string
    proj_id: string
    regis_id: string
    regis_date: string
    cancel_date: string
    proj_name_th: string
    proj_name_en: string
    proj_abbr_name: string
    fund_status: string
    unique_id: string
    permit_us_investment?: string | null
    invest_country_flag: string
    last_upd_date: string
  }

  export type FundUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    regis_id?: StringFieldUpdateOperationsInput | string
    regis_date?: StringFieldUpdateOperationsInput | string
    cancel_date?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    fund_status?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    permit_us_investment?: NullableStringFieldUpdateOperationsInput | string | null
    invest_country_flag?: StringFieldUpdateOperationsInput | string
    last_upd_date?: StringFieldUpdateOperationsInput | string
  }

  export type FundUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    regis_id?: StringFieldUpdateOperationsInput | string
    regis_date?: StringFieldUpdateOperationsInput | string
    cancel_date?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    fund_status?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    permit_us_investment?: NullableStringFieldUpdateOperationsInput | string | null
    invest_country_flag?: StringFieldUpdateOperationsInput | string
    last_upd_date?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
  }

  export type ProductUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyInput = {
    id?: string
    proj_id: string
    proj_abbr_name: string
    proj_name_en: string
    proj_name_th: string
    unique_id: string
    risk_spectrum: string
  }

  export type ProductUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    proj_abbr_name?: StringFieldUpdateOperationsInput | string
    proj_name_en?: StringFieldUpdateOperationsInput | string
    proj_name_th?: StringFieldUpdateOperationsInput | string
    unique_id?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    favorites?: FavoriteCreateNestedManyWithoutFavInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutFavInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteUpdateManyWithoutFavNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteUncheckedUpdateManyWithoutFavNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCreateInput = {
    id?: string
    proj_id: string
    fav: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    proj_id: string
    favID: string
  }

  export type FavoriteUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    fav?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    favID?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    proj_id: string
    favID: string
  }

  export type FavoriteUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    favID?: StringFieldUpdateOperationsInput | string
  }

  export type CompareinfomationCreateInput = {
    id?: string
    fundType: string
    risk_spectrum: string
    Feeder_Fund: string
    Currency_policy: string
    Dividend_payment_policy: string
    Sales_fees: string
    Buyback_fee: string
    Mutual_fund_expenses: string
    Minimum_initial_investment: string
    Minimum_next_investment: string
    Investment_registration_date: string
    Net_asset_value: string
  }

  export type CompareinfomationUncheckedCreateInput = {
    id?: string
    fundType: string
    risk_spectrum: string
    Feeder_Fund: string
    Currency_policy: string
    Dividend_payment_policy: string
    Sales_fees: string
    Buyback_fee: string
    Mutual_fund_expenses: string
    Minimum_initial_investment: string
    Minimum_next_investment: string
    Investment_registration_date: string
    Net_asset_value: string
  }

  export type CompareinfomationUpdateInput = {
    fundType?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
    Feeder_Fund?: StringFieldUpdateOperationsInput | string
    Currency_policy?: StringFieldUpdateOperationsInput | string
    Dividend_payment_policy?: StringFieldUpdateOperationsInput | string
    Sales_fees?: StringFieldUpdateOperationsInput | string
    Buyback_fee?: StringFieldUpdateOperationsInput | string
    Mutual_fund_expenses?: StringFieldUpdateOperationsInput | string
    Minimum_initial_investment?: StringFieldUpdateOperationsInput | string
    Minimum_next_investment?: StringFieldUpdateOperationsInput | string
    Investment_registration_date?: StringFieldUpdateOperationsInput | string
    Net_asset_value?: StringFieldUpdateOperationsInput | string
  }

  export type CompareinfomationUncheckedUpdateInput = {
    fundType?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
    Feeder_Fund?: StringFieldUpdateOperationsInput | string
    Currency_policy?: StringFieldUpdateOperationsInput | string
    Dividend_payment_policy?: StringFieldUpdateOperationsInput | string
    Sales_fees?: StringFieldUpdateOperationsInput | string
    Buyback_fee?: StringFieldUpdateOperationsInput | string
    Mutual_fund_expenses?: StringFieldUpdateOperationsInput | string
    Minimum_initial_investment?: StringFieldUpdateOperationsInput | string
    Minimum_next_investment?: StringFieldUpdateOperationsInput | string
    Investment_registration_date?: StringFieldUpdateOperationsInput | string
    Net_asset_value?: StringFieldUpdateOperationsInput | string
  }

  export type CompareinfomationCreateManyInput = {
    id?: string
    fundType: string
    risk_spectrum: string
    Feeder_Fund: string
    Currency_policy: string
    Dividend_payment_policy: string
    Sales_fees: string
    Buyback_fee: string
    Mutual_fund_expenses: string
    Minimum_initial_investment: string
    Minimum_next_investment: string
    Investment_registration_date: string
    Net_asset_value: string
  }

  export type CompareinfomationUpdateManyMutationInput = {
    fundType?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
    Feeder_Fund?: StringFieldUpdateOperationsInput | string
    Currency_policy?: StringFieldUpdateOperationsInput | string
    Dividend_payment_policy?: StringFieldUpdateOperationsInput | string
    Sales_fees?: StringFieldUpdateOperationsInput | string
    Buyback_fee?: StringFieldUpdateOperationsInput | string
    Mutual_fund_expenses?: StringFieldUpdateOperationsInput | string
    Minimum_initial_investment?: StringFieldUpdateOperationsInput | string
    Minimum_next_investment?: StringFieldUpdateOperationsInput | string
    Investment_registration_date?: StringFieldUpdateOperationsInput | string
    Net_asset_value?: StringFieldUpdateOperationsInput | string
  }

  export type CompareinfomationUncheckedUpdateManyInput = {
    fundType?: StringFieldUpdateOperationsInput | string
    risk_spectrum?: StringFieldUpdateOperationsInput | string
    Feeder_Fund?: StringFieldUpdateOperationsInput | string
    Currency_policy?: StringFieldUpdateOperationsInput | string
    Dividend_payment_policy?: StringFieldUpdateOperationsInput | string
    Sales_fees?: StringFieldUpdateOperationsInput | string
    Buyback_fee?: StringFieldUpdateOperationsInput | string
    Mutual_fund_expenses?: StringFieldUpdateOperationsInput | string
    Minimum_initial_investment?: StringFieldUpdateOperationsInput | string
    Minimum_next_investment?: StringFieldUpdateOperationsInput | string
    Investment_registration_date?: StringFieldUpdateOperationsInput | string
    Net_asset_value?: StringFieldUpdateOperationsInput | string
  }

  export type Type_assets_investedCreateInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Type_assets_investedUncheckedCreateInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Type_assets_investedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Type_assets_investedUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Type_assets_investedCreateManyInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Type_assets_investedUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Type_assets_investedUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Top_five_investment_assetsCreateInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Top_five_investment_assetsUncheckedCreateInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Top_five_investment_assetsUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Top_five_investment_assetsUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Top_five_investment_assetsCreateManyInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Top_five_investment_assetsUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Top_five_investment_assetsUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Fees_charged_by_mutual_fundsCreateInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Fees_charged_by_mutual_fundsUncheckedCreateInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Fees_charged_by_mutual_fundsUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Fees_charged_by_mutual_fundsUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Fees_charged_by_mutual_fundsCreateManyInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Fees_charged_by_mutual_fundsUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Fees_charged_by_mutual_fundsUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Fees_charged_to_unitholdersCreateInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Fees_charged_to_unitholdersUncheckedCreateInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Fees_charged_to_unitholdersUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Fees_charged_to_unitholdersUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Fees_charged_to_unitholdersCreateManyInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Fees_charged_to_unitholdersUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Fees_charged_to_unitholdersUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Investment_allocation_in_the_top_five_issuersCreateInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Investment_allocation_in_the_top_five_issuersUncheckedCreateInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Investment_allocation_in_the_top_five_issuersUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Investment_allocation_in_the_top_five_issuersUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Investment_allocation_in_the_top_five_issuersCreateManyInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Investment_allocation_in_the_top_five_issuersUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Investment_allocation_in_the_top_five_issuersUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Investment_allocation_according_to_credit_ratingCreateInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Investment_allocation_according_to_credit_ratingUncheckedCreateInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Investment_allocation_according_to_credit_ratingUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Investment_allocation_according_to_credit_ratingUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Investment_allocation_according_to_credit_ratingCreateManyInput = {
    id?: string
    proj_id: string
    data: InputJsonValue
  }

  export type Investment_allocation_according_to_credit_ratingUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Investment_allocation_according_to_credit_ratingUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    data?: InputJsonValue | InputJsonValue
  }

  export type Investment_In_CountryCreateInput = {
    id?: string
    proj_id: string
    Countrydata: InputJsonValue
  }

  export type Investment_In_CountryUncheckedCreateInput = {
    id?: string
    proj_id: string
    Countrydata: InputJsonValue
  }

  export type Investment_In_CountryUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    Countrydata?: InputJsonValue | InputJsonValue
  }

  export type Investment_In_CountryUncheckedUpdateInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    Countrydata?: InputJsonValue | InputJsonValue
  }

  export type Investment_In_CountryCreateManyInput = {
    id?: string
    proj_id: string
    Countrydata: InputJsonValue
  }

  export type Investment_In_CountryUpdateManyMutationInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    Countrydata?: InputJsonValue | InputJsonValue
  }

  export type Investment_In_CountryUncheckedUpdateManyInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
    Countrydata?: InputJsonValue | InputJsonValue
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type FundCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    regis_id?: SortOrder
    regis_date?: SortOrder
    cancel_date?: SortOrder
    proj_name_th?: SortOrder
    proj_name_en?: SortOrder
    proj_abbr_name?: SortOrder
    fund_status?: SortOrder
    unique_id?: SortOrder
    permit_us_investment?: SortOrder
    invest_country_flag?: SortOrder
    last_upd_date?: SortOrder
  }

  export type FundMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    regis_id?: SortOrder
    regis_date?: SortOrder
    cancel_date?: SortOrder
    proj_name_th?: SortOrder
    proj_name_en?: SortOrder
    proj_abbr_name?: SortOrder
    fund_status?: SortOrder
    unique_id?: SortOrder
    permit_us_investment?: SortOrder
    invest_country_flag?: SortOrder
    last_upd_date?: SortOrder
  }

  export type FundMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    regis_id?: SortOrder
    regis_date?: SortOrder
    cancel_date?: SortOrder
    proj_name_th?: SortOrder
    proj_name_en?: SortOrder
    proj_abbr_name?: SortOrder
    fund_status?: SortOrder
    unique_id?: SortOrder
    permit_us_investment?: SortOrder
    invest_country_flag?: SortOrder
    last_upd_date?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    proj_abbr_name?: SortOrder
    proj_name_en?: SortOrder
    proj_name_th?: SortOrder
    unique_id?: SortOrder
    risk_spectrum?: SortOrder
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    favID?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    favID?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    favID?: SortOrder
  }

  export type CompareinfomationCountOrderByAggregateInput = {
    id?: SortOrder
    fundType?: SortOrder
    risk_spectrum?: SortOrder
    Feeder_Fund?: SortOrder
    Currency_policy?: SortOrder
    Dividend_payment_policy?: SortOrder
    Sales_fees?: SortOrder
    Buyback_fee?: SortOrder
    Mutual_fund_expenses?: SortOrder
    Minimum_initial_investment?: SortOrder
    Minimum_next_investment?: SortOrder
    Investment_registration_date?: SortOrder
    Net_asset_value?: SortOrder
  }

  export type CompareinfomationMaxOrderByAggregateInput = {
    id?: SortOrder
    fundType?: SortOrder
    risk_spectrum?: SortOrder
    Feeder_Fund?: SortOrder
    Currency_policy?: SortOrder
    Dividend_payment_policy?: SortOrder
    Sales_fees?: SortOrder
    Buyback_fee?: SortOrder
    Mutual_fund_expenses?: SortOrder
    Minimum_initial_investment?: SortOrder
    Minimum_next_investment?: SortOrder
    Investment_registration_date?: SortOrder
    Net_asset_value?: SortOrder
  }

  export type CompareinfomationMinOrderByAggregateInput = {
    id?: SortOrder
    fundType?: SortOrder
    risk_spectrum?: SortOrder
    Feeder_Fund?: SortOrder
    Currency_policy?: SortOrder
    Dividend_payment_policy?: SortOrder
    Sales_fees?: SortOrder
    Buyback_fee?: SortOrder
    Mutual_fund_expenses?: SortOrder
    Minimum_initial_investment?: SortOrder
    Minimum_next_investment?: SortOrder
    Investment_registration_date?: SortOrder
    Net_asset_value?: SortOrder
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

  export type Type_assets_investedCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
  }

  export type Type_assets_investedMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
  }

  export type Type_assets_investedMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
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

  export type Top_five_investment_assetsCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
  }

  export type Top_five_investment_assetsMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
  }

  export type Top_five_investment_assetsMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
  }

  export type Fees_charged_by_mutual_fundsCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
  }

  export type Fees_charged_by_mutual_fundsMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
  }

  export type Fees_charged_by_mutual_fundsMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
  }

  export type Fees_charged_to_unitholdersCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
  }

  export type Fees_charged_to_unitholdersMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
  }

  export type Fees_charged_to_unitholdersMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
  }

  export type Investment_allocation_in_the_top_five_issuersCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
  }

  export type Investment_allocation_in_the_top_five_issuersMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
  }

  export type Investment_allocation_in_the_top_five_issuersMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
  }

  export type Investment_allocation_according_to_credit_ratingCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    data?: SortOrder
  }

  export type Investment_allocation_according_to_credit_ratingMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
  }

  export type Investment_allocation_according_to_credit_ratingMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
  }

  export type Investment_In_CountryCountOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
    Countrydata?: SortOrder
  }

  export type Investment_In_CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
  }

  export type Investment_In_CountryMinOrderByAggregateInput = {
    id?: SortOrder
    proj_id?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type FavoriteCreateNestedManyWithoutFavInput = {
    create?: XOR<FavoriteCreateWithoutFavInput, FavoriteUncheckedCreateWithoutFavInput> | FavoriteCreateWithoutFavInput[] | FavoriteUncheckedCreateWithoutFavInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutFavInput | FavoriteCreateOrConnectWithoutFavInput[]
    createMany?: FavoriteCreateManyFavInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutFavInput = {
    create?: XOR<FavoriteCreateWithoutFavInput, FavoriteUncheckedCreateWithoutFavInput> | FavoriteCreateWithoutFavInput[] | FavoriteUncheckedCreateWithoutFavInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutFavInput | FavoriteCreateOrConnectWithoutFavInput[]
    createMany?: FavoriteCreateManyFavInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type FavoriteUpdateManyWithoutFavNestedInput = {
    create?: XOR<FavoriteCreateWithoutFavInput, FavoriteUncheckedCreateWithoutFavInput> | FavoriteCreateWithoutFavInput[] | FavoriteUncheckedCreateWithoutFavInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutFavInput | FavoriteCreateOrConnectWithoutFavInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutFavInput | FavoriteUpsertWithWhereUniqueWithoutFavInput[]
    createMany?: FavoriteCreateManyFavInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutFavInput | FavoriteUpdateWithWhereUniqueWithoutFavInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutFavInput | FavoriteUpdateManyWithWhereWithoutFavInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutFavNestedInput = {
    create?: XOR<FavoriteCreateWithoutFavInput, FavoriteUncheckedCreateWithoutFavInput> | FavoriteCreateWithoutFavInput[] | FavoriteUncheckedCreateWithoutFavInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutFavInput | FavoriteCreateOrConnectWithoutFavInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutFavInput | FavoriteUpsertWithWhereUniqueWithoutFavInput[]
    createMany?: FavoriteCreateManyFavInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutFavInput | FavoriteUpdateWithWhereUniqueWithoutFavInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutFavInput | FavoriteUpdateManyWithWhereWithoutFavInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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

  export type FavoriteCreateWithoutFavInput = {
    id?: string
    proj_id: string
  }

  export type FavoriteUncheckedCreateWithoutFavInput = {
    id?: string
    proj_id: string
  }

  export type FavoriteCreateOrConnectWithoutFavInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutFavInput, FavoriteUncheckedCreateWithoutFavInput>
  }

  export type FavoriteCreateManyFavInputEnvelope = {
    data: FavoriteCreateManyFavInput | FavoriteCreateManyFavInput[]
  }

  export type FavoriteUpsertWithWhereUniqueWithoutFavInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutFavInput, FavoriteUncheckedUpdateWithoutFavInput>
    create: XOR<FavoriteCreateWithoutFavInput, FavoriteUncheckedCreateWithoutFavInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutFavInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutFavInput, FavoriteUncheckedUpdateWithoutFavInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutFavInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutFavInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    proj_id?: StringFilter<"Favorite"> | string
    favID?: StringFilter<"Favorite"> | string
  }

  export type UserCreateWithoutFavoritesInput = {
    id?: string
    email: string
    username: string
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string
    email: string
    username: string
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCreateManyFavInput = {
    id?: string
    proj_id: string
  }

  export type FavoriteUpdateWithoutFavInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUncheckedUpdateWithoutFavInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUncheckedUpdateManyWithoutFavInput = {
    proj_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FundDefaultArgs instead
     */
    export type FundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FundDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FavoriteDefaultArgs instead
     */
    export type FavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FavoriteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompareinfomationDefaultArgs instead
     */
    export type CompareinfomationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompareinfomationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Type_assets_investedDefaultArgs instead
     */
    export type Type_assets_investedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Type_assets_investedDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Top_five_investment_assetsDefaultArgs instead
     */
    export type Top_five_investment_assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Top_five_investment_assetsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Fees_charged_by_mutual_fundsDefaultArgs instead
     */
    export type Fees_charged_by_mutual_fundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Fees_charged_by_mutual_fundsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Fees_charged_to_unitholdersDefaultArgs instead
     */
    export type Fees_charged_to_unitholdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Fees_charged_to_unitholdersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Investment_allocation_in_the_top_five_issuersDefaultArgs instead
     */
    export type Investment_allocation_in_the_top_five_issuersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Investment_allocation_in_the_top_five_issuersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Investment_allocation_according_to_credit_ratingDefaultArgs instead
     */
    export type Investment_allocation_according_to_credit_ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Investment_allocation_according_to_credit_ratingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Investment_In_CountryDefaultArgs instead
     */
    export type Investment_In_CountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Investment_In_CountryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AllProductInfoDefaultArgs instead
     */
    export type AllProductInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AllProductInfoDefaultArgs<ExtArgs>

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