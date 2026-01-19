
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
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model ProjectCategory
 * 
 */
export type ProjectCategory = $Result.DefaultSelection<Prisma.$ProjectCategoryPayload>
/**
 * Model ProjectTag
 * 
 */
export type ProjectTag = $Result.DefaultSelection<Prisma.$ProjectTagPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model PostCatalog
 * 
 */
export type PostCatalog = $Result.DefaultSelection<Prisma.$PostCatalogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tags
 * const tags = await prisma.tag.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Tags
   * const tags = await prisma.tag.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectCategory`: Exposes CRUD operations for the **ProjectCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectCategories
    * const projectCategories = await prisma.projectCategory.findMany()
    * ```
    */
  get projectCategory(): Prisma.ProjectCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectTag`: Exposes CRUD operations for the **ProjectTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTags
    * const projectTags = await prisma.projectTag.findMany()
    * ```
    */
  get projectTag(): Prisma.ProjectTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postCatalog`: Exposes CRUD operations for the **PostCatalog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostCatalogs
    * const postCatalogs = await prisma.postCatalog.findMany()
    * ```
    */
  get postCatalog(): Prisma.PostCatalogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Tag: 'Tag',
    Project: 'Project',
    Category: 'Category',
    ProjectCategory: 'ProjectCategory',
    ProjectTag: 'ProjectTag',
    Post: 'Post',
    Author: 'Author',
    PostCatalog: 'PostCatalog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tag" | "project" | "category" | "projectCategory" | "projectTag" | "post" | "author" | "postCatalog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ProjectCategory: {
        payload: Prisma.$ProjectCategoryPayload<ExtArgs>
        fields: Prisma.ProjectCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProjectCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          findMany: {
            args: Prisma.ProjectCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>[]
          }
          create: {
            args: Prisma.ProjectCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          createMany: {
            args: Prisma.ProjectCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>[]
          }
          delete: {
            args: Prisma.ProjectCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          update: {
            args: Prisma.ProjectCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProjectCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ProjectCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProjectCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectCategory>
          }
          groupBy: {
            args: Prisma.ProjectCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCategoryCountAggregateOutputType> | number
          }
        }
      }
      ProjectTag: {
        payload: Prisma.$ProjectTagPayload<ExtArgs>
        fields: Prisma.ProjectTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          findFirst: {
            args: Prisma.ProjectTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          findMany: {
            args: Prisma.ProjectTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>[]
          }
          create: {
            args: Prisma.ProjectTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          createMany: {
            args: Prisma.ProjectTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>[]
          }
          delete: {
            args: Prisma.ProjectTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          update: {
            args: Prisma.ProjectTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          deleteMany: {
            args: Prisma.ProjectTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>[]
          }
          upsert: {
            args: Prisma.ProjectTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          aggregate: {
            args: Prisma.ProjectTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectTag>
          }
          groupBy: {
            args: Prisma.ProjectTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTagCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTagCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      PostCatalog: {
        payload: Prisma.$PostCatalogPayload<ExtArgs>
        fields: Prisma.PostCatalogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostCatalogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCatalogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostCatalogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCatalogPayload>
          }
          findFirst: {
            args: Prisma.PostCatalogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCatalogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostCatalogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCatalogPayload>
          }
          findMany: {
            args: Prisma.PostCatalogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCatalogPayload>[]
          }
          create: {
            args: Prisma.PostCatalogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCatalogPayload>
          }
          createMany: {
            args: Prisma.PostCatalogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCatalogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCatalogPayload>[]
          }
          delete: {
            args: Prisma.PostCatalogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCatalogPayload>
          }
          update: {
            args: Prisma.PostCatalogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCatalogPayload>
          }
          deleteMany: {
            args: Prisma.PostCatalogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostCatalogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostCatalogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCatalogPayload>[]
          }
          upsert: {
            args: Prisma.PostCatalogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCatalogPayload>
          }
          aggregate: {
            args: Prisma.PostCatalogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostCatalog>
          }
          groupBy: {
            args: Prisma.PostCatalogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostCatalogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCatalogCountArgs<ExtArgs>
            result: $Utils.Optional<PostCatalogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tag?: TagOmit
    project?: ProjectOmit
    category?: CategoryOmit
    projectCategory?: ProjectCategoryOmit
    projectTag?: ProjectTagOmit
    post?: PostOmit
    author?: AuthorOmit
    postCatalog?: PostCatalogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    projectTags: number
    posts: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectTags?: boolean | TagCountOutputTypeCountProjectTagsArgs
    posts?: boolean | TagCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountProjectTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTagWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    projectCategories: number
    projectTags: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectCategories?: boolean | ProjectCountOutputTypeCountProjectCategoriesArgs
    projectTags?: boolean | ProjectCountOutputTypeCountProjectTagsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCategoryWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTagWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    projectCategories: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectCategories?: boolean | CategoryCountOutputTypeCountProjectCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProjectCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCategoryWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    tags: number
    catalogs: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | PostCountOutputTypeCountTagsArgs
    catalogs?: boolean | PostCountOutputTypeCountCatalogsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCatalogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCatalogWhereInput
  }


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    posts: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | AuthorCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type PostCatalogCountOutputType
   */

  export type PostCatalogCountOutputType = {
    posts: number
  }

  export type PostCatalogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | PostCatalogCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * PostCatalogCountOutputType without action
   */
  export type PostCatalogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCatalogCountOutputType
     */
    select?: PostCatalogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCatalogCountOutputType without action
   */
  export type PostCatalogCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    code: string | null
    displayName: string | null
    hexColor: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    code: string | null
    displayName: string | null
    hexColor: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    code: number
    displayName: number
    hexColor: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    code?: true
    displayName?: true
    hexColor?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    code?: true
    displayName?: true
    hexColor?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    code?: true
    displayName?: true
    hexColor?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    code: string
    displayName: string
    hexColor: string | null
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    displayName?: boolean
    hexColor?: boolean
    projectTags?: boolean | Tag$projectTagsArgs<ExtArgs>
    posts?: boolean | Tag$postsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    displayName?: boolean
    hexColor?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    displayName?: boolean
    hexColor?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    code?: boolean
    displayName?: boolean
    hexColor?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "displayName" | "hexColor", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectTags?: boolean | Tag$projectTagsArgs<ExtArgs>
    posts?: boolean | Tag$postsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      projectTags: Prisma.$ProjectTagPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      displayName: string
      hexColor: string | null
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectTags<T extends Tag$projectTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$projectTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Tag$postsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly code: FieldRef<"Tag", 'String'>
    readonly displayName: FieldRef<"Tag", 'String'>
    readonly hexColor: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.projectTags
   */
  export type Tag$projectTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    where?: ProjectTagWhereInput
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    cursor?: ProjectTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * Tag.posts
   */
  export type Tag$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    role: string | null
    client: string | null
    platform: string | null
    description: string | null
    longDescription: string | null
    challenge: string | null
    solution: string | null
    content: string | null
    features: string | null
    thumbnailUrl: string | null
    deployUrl: string | null
    repositoryUrl: string | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    role: string | null
    client: string | null
    platform: string | null
    description: string | null
    longDescription: string | null
    challenge: string | null
    solution: string | null
    content: string | null
    features: string | null
    thumbnailUrl: string | null
    deployUrl: string | null
    repositoryUrl: string | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    role: number
    client: number
    platform: number
    description: number
    longDescription: number
    challenge: number
    solution: number
    content: number
    features: number
    thumbnailUrl: number
    deployUrl: number
    repositoryUrl: number
    services: number
    screenshotUrls: number
    startedAt: number
    endedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    role?: true
    client?: true
    platform?: true
    description?: true
    longDescription?: true
    challenge?: true
    solution?: true
    content?: true
    features?: true
    thumbnailUrl?: true
    deployUrl?: true
    repositoryUrl?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    role?: true
    client?: true
    platform?: true
    description?: true
    longDescription?: true
    challenge?: true
    solution?: true
    content?: true
    features?: true
    thumbnailUrl?: true
    deployUrl?: true
    repositoryUrl?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    role?: true
    client?: true
    platform?: true
    description?: true
    longDescription?: true
    challenge?: true
    solution?: true
    content?: true
    features?: true
    thumbnailUrl?: true
    deployUrl?: true
    repositoryUrl?: true
    services?: true
    screenshotUrls?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    slug: string
    title: string
    role: string | null
    client: string | null
    platform: string | null
    description: string | null
    longDescription: string | null
    challenge: string | null
    solution: string | null
    content: string | null
    features: string | null
    thumbnailUrl: string | null
    deployUrl: string | null
    repositoryUrl: string | null
    services: string[]
    screenshotUrls: string[]
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    role?: boolean
    client?: boolean
    platform?: boolean
    description?: boolean
    longDescription?: boolean
    challenge?: boolean
    solution?: boolean
    content?: boolean
    features?: boolean
    thumbnailUrl?: boolean
    deployUrl?: boolean
    repositoryUrl?: boolean
    services?: boolean
    screenshotUrls?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectCategories?: boolean | Project$projectCategoriesArgs<ExtArgs>
    projectTags?: boolean | Project$projectTagsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    role?: boolean
    client?: boolean
    platform?: boolean
    description?: boolean
    longDescription?: boolean
    challenge?: boolean
    solution?: boolean
    content?: boolean
    features?: boolean
    thumbnailUrl?: boolean
    deployUrl?: boolean
    repositoryUrl?: boolean
    services?: boolean
    screenshotUrls?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    role?: boolean
    client?: boolean
    platform?: boolean
    description?: boolean
    longDescription?: boolean
    challenge?: boolean
    solution?: boolean
    content?: boolean
    features?: boolean
    thumbnailUrl?: boolean
    deployUrl?: boolean
    repositoryUrl?: boolean
    services?: boolean
    screenshotUrls?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    role?: boolean
    client?: boolean
    platform?: boolean
    description?: boolean
    longDescription?: boolean
    challenge?: boolean
    solution?: boolean
    content?: boolean
    features?: boolean
    thumbnailUrl?: boolean
    deployUrl?: boolean
    repositoryUrl?: boolean
    services?: boolean
    screenshotUrls?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "role" | "client" | "platform" | "description" | "longDescription" | "challenge" | "solution" | "content" | "features" | "thumbnailUrl" | "deployUrl" | "repositoryUrl" | "services" | "screenshotUrls" | "startedAt" | "endedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectCategories?: boolean | Project$projectCategoriesArgs<ExtArgs>
    projectTags?: boolean | Project$projectTagsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      projectCategories: Prisma.$ProjectCategoryPayload<ExtArgs>[]
      projectTags: Prisma.$ProjectTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      role: string | null
      client: string | null
      platform: string | null
      description: string | null
      longDescription: string | null
      challenge: string | null
      solution: string | null
      content: string | null
      features: string | null
      thumbnailUrl: string | null
      deployUrl: string | null
      repositoryUrl: string | null
      services: string[]
      screenshotUrls: string[]
      startedAt: Date | null
      endedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectCategories<T extends Project$projectCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectTags<T extends Project$projectTagsArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly slug: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly role: FieldRef<"Project", 'String'>
    readonly client: FieldRef<"Project", 'String'>
    readonly platform: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly longDescription: FieldRef<"Project", 'String'>
    readonly challenge: FieldRef<"Project", 'String'>
    readonly solution: FieldRef<"Project", 'String'>
    readonly content: FieldRef<"Project", 'String'>
    readonly features: FieldRef<"Project", 'String'>
    readonly thumbnailUrl: FieldRef<"Project", 'String'>
    readonly deployUrl: FieldRef<"Project", 'String'>
    readonly repositoryUrl: FieldRef<"Project", 'String'>
    readonly services: FieldRef<"Project", 'String[]'>
    readonly screenshotUrls: FieldRef<"Project", 'String[]'>
    readonly startedAt: FieldRef<"Project", 'DateTime'>
    readonly endedAt: FieldRef<"Project", 'DateTime'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.projectCategories
   */
  export type Project$projectCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    where?: ProjectCategoryWhereInput
    orderBy?: ProjectCategoryOrderByWithRelationInput | ProjectCategoryOrderByWithRelationInput[]
    cursor?: ProjectCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectCategoryScalarFieldEnum | ProjectCategoryScalarFieldEnum[]
  }

  /**
   * Project.projectTags
   */
  export type Project$projectTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    where?: ProjectTagWhereInput
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    cursor?: ProjectTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    code: string | null
    displayName: string | null
    description: string | null
    hexColor: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    code: string | null
    displayName: string | null
    description: string | null
    hexColor: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    code: number
    displayName: number
    description: number
    hexColor: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    code?: true
    displayName?: true
    description?: true
    hexColor?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    code?: true
    displayName?: true
    description?: true
    hexColor?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    code?: true
    displayName?: true
    description?: true
    hexColor?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    code: string
    displayName: string
    description: string | null
    hexColor: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    displayName?: boolean
    description?: boolean
    hexColor?: boolean
    projectCategories?: boolean | Category$projectCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    displayName?: boolean
    description?: boolean
    hexColor?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    displayName?: boolean
    description?: boolean
    hexColor?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    code?: boolean
    displayName?: boolean
    description?: boolean
    hexColor?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "displayName" | "description" | "hexColor", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectCategories?: boolean | Category$projectCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      projectCategories: Prisma.$ProjectCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      displayName: string
      description: string | null
      hexColor: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectCategories<T extends Category$projectCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$projectCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly code: FieldRef<"Category", 'String'>
    readonly displayName: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly hexColor: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.projectCategories
   */
  export type Category$projectCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    where?: ProjectCategoryWhereInput
    orderBy?: ProjectCategoryOrderByWithRelationInput | ProjectCategoryOrderByWithRelationInput[]
    cursor?: ProjectCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectCategoryScalarFieldEnum | ProjectCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model ProjectCategory
   */

  export type AggregateProjectCategory = {
    _count: ProjectCategoryCountAggregateOutputType | null
    _min: ProjectCategoryMinAggregateOutputType | null
    _max: ProjectCategoryMaxAggregateOutputType | null
  }

  export type ProjectCategoryMinAggregateOutputType = {
    projectId: string | null
    categoryId: string | null
  }

  export type ProjectCategoryMaxAggregateOutputType = {
    projectId: string | null
    categoryId: string | null
  }

  export type ProjectCategoryCountAggregateOutputType = {
    projectId: number
    categoryId: number
    _all: number
  }


  export type ProjectCategoryMinAggregateInputType = {
    projectId?: true
    categoryId?: true
  }

  export type ProjectCategoryMaxAggregateInputType = {
    projectId?: true
    categoryId?: true
  }

  export type ProjectCategoryCountAggregateInputType = {
    projectId?: true
    categoryId?: true
    _all?: true
  }

  export type ProjectCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectCategory to aggregate.
     */
    where?: ProjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCategories to fetch.
     */
    orderBy?: ProjectCategoryOrderByWithRelationInput | ProjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectCategories
    **/
    _count?: true | ProjectCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectCategoryMaxAggregateInputType
  }

  export type GetProjectCategoryAggregateType<T extends ProjectCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectCategory[P]>
      : GetScalarType<T[P], AggregateProjectCategory[P]>
  }




  export type ProjectCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCategoryWhereInput
    orderBy?: ProjectCategoryOrderByWithAggregationInput | ProjectCategoryOrderByWithAggregationInput[]
    by: ProjectCategoryScalarFieldEnum[] | ProjectCategoryScalarFieldEnum
    having?: ProjectCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCategoryCountAggregateInputType | true
    _min?: ProjectCategoryMinAggregateInputType
    _max?: ProjectCategoryMaxAggregateInputType
  }

  export type ProjectCategoryGroupByOutputType = {
    projectId: string
    categoryId: string
    _count: ProjectCategoryCountAggregateOutputType | null
    _min: ProjectCategoryMinAggregateOutputType | null
    _max: ProjectCategoryMaxAggregateOutputType | null
  }

  type GetProjectCategoryGroupByPayload<T extends ProjectCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProjectCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    categoryId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCategory"]>

  export type ProjectCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    categoryId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCategory"]>

  export type ProjectCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    categoryId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCategory"]>

  export type ProjectCategorySelectScalar = {
    projectId?: boolean
    categoryId?: boolean
  }

  export type ProjectCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectId" | "categoryId", ExtArgs["result"]["projectCategory"]>
  export type ProjectCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProjectCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProjectCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProjectCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectCategory"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projectId: string
      categoryId: string
    }, ExtArgs["result"]["projectCategory"]>
    composites: {}
  }

  type ProjectCategoryGetPayload<S extends boolean | null | undefined | ProjectCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProjectCategoryPayload, S>

  type ProjectCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCategoryCountAggregateInputType | true
    }

  export interface ProjectCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectCategory'], meta: { name: 'ProjectCategory' } }
    /**
     * Find zero or one ProjectCategory that matches the filter.
     * @param {ProjectCategoryFindUniqueArgs} args - Arguments to find a ProjectCategory
     * @example
     * // Get one ProjectCategory
     * const projectCategory = await prisma.projectCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectCategoryFindUniqueArgs>(args: SelectSubset<T, ProjectCategoryFindUniqueArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProjectCategory
     * @example
     * // Get one ProjectCategory
     * const projectCategory = await prisma.projectCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryFindFirstArgs} args - Arguments to find a ProjectCategory
     * @example
     * // Get one ProjectCategory
     * const projectCategory = await prisma.projectCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectCategoryFindFirstArgs>(args?: SelectSubset<T, ProjectCategoryFindFirstArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryFindFirstOrThrowArgs} args - Arguments to find a ProjectCategory
     * @example
     * // Get one ProjectCategory
     * const projectCategory = await prisma.projectCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectCategories
     * const projectCategories = await prisma.projectCategory.findMany()
     * 
     * // Get first 10 ProjectCategories
     * const projectCategories = await prisma.projectCategory.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectCategoryWithProjectIdOnly = await prisma.projectCategory.findMany({ select: { projectId: true } })
     * 
     */
    findMany<T extends ProjectCategoryFindManyArgs>(args?: SelectSubset<T, ProjectCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectCategory.
     * @param {ProjectCategoryCreateArgs} args - Arguments to create a ProjectCategory.
     * @example
     * // Create one ProjectCategory
     * const ProjectCategory = await prisma.projectCategory.create({
     *   data: {
     *     // ... data to create a ProjectCategory
     *   }
     * })
     * 
     */
    create<T extends ProjectCategoryCreateArgs>(args: SelectSubset<T, ProjectCategoryCreateArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectCategories.
     * @param {ProjectCategoryCreateManyArgs} args - Arguments to create many ProjectCategories.
     * @example
     * // Create many ProjectCategories
     * const projectCategory = await prisma.projectCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCategoryCreateManyArgs>(args?: SelectSubset<T, ProjectCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectCategories and returns the data saved in the database.
     * @param {ProjectCategoryCreateManyAndReturnArgs} args - Arguments to create many ProjectCategories.
     * @example
     * // Create many ProjectCategories
     * const projectCategory = await prisma.projectCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectCategories and only return the `projectId`
     * const projectCategoryWithProjectIdOnly = await prisma.projectCategory.createManyAndReturn({
     *   select: { projectId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectCategory.
     * @param {ProjectCategoryDeleteArgs} args - Arguments to delete one ProjectCategory.
     * @example
     * // Delete one ProjectCategory
     * const ProjectCategory = await prisma.projectCategory.delete({
     *   where: {
     *     // ... filter to delete one ProjectCategory
     *   }
     * })
     * 
     */
    delete<T extends ProjectCategoryDeleteArgs>(args: SelectSubset<T, ProjectCategoryDeleteArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectCategory.
     * @param {ProjectCategoryUpdateArgs} args - Arguments to update one ProjectCategory.
     * @example
     * // Update one ProjectCategory
     * const projectCategory = await prisma.projectCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectCategoryUpdateArgs>(args: SelectSubset<T, ProjectCategoryUpdateArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectCategories.
     * @param {ProjectCategoryDeleteManyArgs} args - Arguments to filter ProjectCategories to delete.
     * @example
     * // Delete a few ProjectCategories
     * const { count } = await prisma.projectCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectCategoryDeleteManyArgs>(args?: SelectSubset<T, ProjectCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectCategories
     * const projectCategory = await prisma.projectCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectCategoryUpdateManyArgs>(args: SelectSubset<T, ProjectCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectCategories and returns the data updated in the database.
     * @param {ProjectCategoryUpdateManyAndReturnArgs} args - Arguments to update many ProjectCategories.
     * @example
     * // Update many ProjectCategories
     * const projectCategory = await prisma.projectCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectCategories and only return the `projectId`
     * const projectCategoryWithProjectIdOnly = await prisma.projectCategory.updateManyAndReturn({
     *   select: { projectId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectCategory.
     * @param {ProjectCategoryUpsertArgs} args - Arguments to update or create a ProjectCategory.
     * @example
     * // Update or create a ProjectCategory
     * const projectCategory = await prisma.projectCategory.upsert({
     *   create: {
     *     // ... data to create a ProjectCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectCategory we want to update
     *   }
     * })
     */
    upsert<T extends ProjectCategoryUpsertArgs>(args: SelectSubset<T, ProjectCategoryUpsertArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryCountArgs} args - Arguments to filter ProjectCategories to count.
     * @example
     * // Count the number of ProjectCategories
     * const count = await prisma.projectCategory.count({
     *   where: {
     *     // ... the filter for the ProjectCategories we want to count
     *   }
     * })
    **/
    count<T extends ProjectCategoryCountArgs>(
      args?: Subset<T, ProjectCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectCategoryAggregateArgs>(args: Subset<T, ProjectCategoryAggregateArgs>): Prisma.PrismaPromise<GetProjectCategoryAggregateType<T>>

    /**
     * Group by ProjectCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryGroupByArgs} args - Group by arguments.
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
      T extends ProjectCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProjectCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectCategory model
   */
  readonly fields: ProjectCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectCategory model
   */
  interface ProjectCategoryFieldRefs {
    readonly projectId: FieldRef<"ProjectCategory", 'String'>
    readonly categoryId: FieldRef<"ProjectCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectCategory findUnique
   */
  export type ProjectCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategory to fetch.
     */
    where: ProjectCategoryWhereUniqueInput
  }

  /**
   * ProjectCategory findUniqueOrThrow
   */
  export type ProjectCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategory to fetch.
     */
    where: ProjectCategoryWhereUniqueInput
  }

  /**
   * ProjectCategory findFirst
   */
  export type ProjectCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategory to fetch.
     */
    where?: ProjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCategories to fetch.
     */
    orderBy?: ProjectCategoryOrderByWithRelationInput | ProjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectCategories.
     */
    cursor?: ProjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectCategories.
     */
    distinct?: ProjectCategoryScalarFieldEnum | ProjectCategoryScalarFieldEnum[]
  }

  /**
   * ProjectCategory findFirstOrThrow
   */
  export type ProjectCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategory to fetch.
     */
    where?: ProjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCategories to fetch.
     */
    orderBy?: ProjectCategoryOrderByWithRelationInput | ProjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectCategories.
     */
    cursor?: ProjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectCategories.
     */
    distinct?: ProjectCategoryScalarFieldEnum | ProjectCategoryScalarFieldEnum[]
  }

  /**
   * ProjectCategory findMany
   */
  export type ProjectCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategories to fetch.
     */
    where?: ProjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCategories to fetch.
     */
    orderBy?: ProjectCategoryOrderByWithRelationInput | ProjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectCategories.
     */
    cursor?: ProjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCategories.
     */
    skip?: number
    distinct?: ProjectCategoryScalarFieldEnum | ProjectCategoryScalarFieldEnum[]
  }

  /**
   * ProjectCategory create
   */
  export type ProjectCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectCategory.
     */
    data: XOR<ProjectCategoryCreateInput, ProjectCategoryUncheckedCreateInput>
  }

  /**
   * ProjectCategory createMany
   */
  export type ProjectCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectCategories.
     */
    data: ProjectCategoryCreateManyInput | ProjectCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectCategory createManyAndReturn
   */
  export type ProjectCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectCategories.
     */
    data: ProjectCategoryCreateManyInput | ProjectCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectCategory update
   */
  export type ProjectCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectCategory.
     */
    data: XOR<ProjectCategoryUpdateInput, ProjectCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProjectCategory to update.
     */
    where: ProjectCategoryWhereUniqueInput
  }

  /**
   * ProjectCategory updateMany
   */
  export type ProjectCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectCategories.
     */
    data: XOR<ProjectCategoryUpdateManyMutationInput, ProjectCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProjectCategories to update
     */
    where?: ProjectCategoryWhereInput
    /**
     * Limit how many ProjectCategories to update.
     */
    limit?: number
  }

  /**
   * ProjectCategory updateManyAndReturn
   */
  export type ProjectCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ProjectCategories.
     */
    data: XOR<ProjectCategoryUpdateManyMutationInput, ProjectCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProjectCategories to update
     */
    where?: ProjectCategoryWhereInput
    /**
     * Limit how many ProjectCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectCategory upsert
   */
  export type ProjectCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectCategory to update in case it exists.
     */
    where: ProjectCategoryWhereUniqueInput
    /**
     * In case the ProjectCategory found by the `where` argument doesn't exist, create a new ProjectCategory with this data.
     */
    create: XOR<ProjectCategoryCreateInput, ProjectCategoryUncheckedCreateInput>
    /**
     * In case the ProjectCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectCategoryUpdateInput, ProjectCategoryUncheckedUpdateInput>
  }

  /**
   * ProjectCategory delete
   */
  export type ProjectCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProjectCategory to delete.
     */
    where: ProjectCategoryWhereUniqueInput
  }

  /**
   * ProjectCategory deleteMany
   */
  export type ProjectCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectCategories to delete
     */
    where?: ProjectCategoryWhereInput
    /**
     * Limit how many ProjectCategories to delete.
     */
    limit?: number
  }

  /**
   * ProjectCategory without action
   */
  export type ProjectCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ProjectTag
   */

  export type AggregateProjectTag = {
    _count: ProjectTagCountAggregateOutputType | null
    _min: ProjectTagMinAggregateOutputType | null
    _max: ProjectTagMaxAggregateOutputType | null
  }

  export type ProjectTagMinAggregateOutputType = {
    projectId: string | null
    tagId: string | null
  }

  export type ProjectTagMaxAggregateOutputType = {
    projectId: string | null
    tagId: string | null
  }

  export type ProjectTagCountAggregateOutputType = {
    projectId: number
    tagId: number
    _all: number
  }


  export type ProjectTagMinAggregateInputType = {
    projectId?: true
    tagId?: true
  }

  export type ProjectTagMaxAggregateInputType = {
    projectId?: true
    tagId?: true
  }

  export type ProjectTagCountAggregateInputType = {
    projectId?: true
    tagId?: true
    _all?: true
  }

  export type ProjectTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTag to aggregate.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectTags
    **/
    _count?: true | ProjectTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTagMaxAggregateInputType
  }

  export type GetProjectTagAggregateType<T extends ProjectTagAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectTag[P]>
      : GetScalarType<T[P], AggregateProjectTag[P]>
  }




  export type ProjectTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTagWhereInput
    orderBy?: ProjectTagOrderByWithAggregationInput | ProjectTagOrderByWithAggregationInput[]
    by: ProjectTagScalarFieldEnum[] | ProjectTagScalarFieldEnum
    having?: ProjectTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTagCountAggregateInputType | true
    _min?: ProjectTagMinAggregateInputType
    _max?: ProjectTagMaxAggregateInputType
  }

  export type ProjectTagGroupByOutputType = {
    projectId: string
    tagId: string
    _count: ProjectTagCountAggregateOutputType | null
    _min: ProjectTagMinAggregateOutputType | null
    _max: ProjectTagMaxAggregateOutputType | null
  }

  type GetProjectTagGroupByPayload<T extends ProjectTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTagGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTagGroupByOutputType[P]>
        }
      >
    >


  export type ProjectTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    tagId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTag"]>

  export type ProjectTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    tagId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTag"]>

  export type ProjectTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    tagId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTag"]>

  export type ProjectTagSelectScalar = {
    projectId?: boolean
    tagId?: boolean
  }

  export type ProjectTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectId" | "tagId", ExtArgs["result"]["projectTag"]>
  export type ProjectTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type ProjectTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type ProjectTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $ProjectTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectTag"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projectId: string
      tagId: string
    }, ExtArgs["result"]["projectTag"]>
    composites: {}
  }

  type ProjectTagGetPayload<S extends boolean | null | undefined | ProjectTagDefaultArgs> = $Result.GetResult<Prisma.$ProjectTagPayload, S>

  type ProjectTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectTagCountAggregateInputType | true
    }

  export interface ProjectTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectTag'], meta: { name: 'ProjectTag' } }
    /**
     * Find zero or one ProjectTag that matches the filter.
     * @param {ProjectTagFindUniqueArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTagFindUniqueArgs>(args: SelectSubset<T, ProjectTagFindUniqueArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectTagFindUniqueOrThrowArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagFindFirstArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTagFindFirstArgs>(args?: SelectSubset<T, ProjectTagFindFirstArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagFindFirstOrThrowArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTags
     * const projectTags = await prisma.projectTag.findMany()
     * 
     * // Get first 10 ProjectTags
     * const projectTags = await prisma.projectTag.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectTagWithProjectIdOnly = await prisma.projectTag.findMany({ select: { projectId: true } })
     * 
     */
    findMany<T extends ProjectTagFindManyArgs>(args?: SelectSubset<T, ProjectTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectTag.
     * @param {ProjectTagCreateArgs} args - Arguments to create a ProjectTag.
     * @example
     * // Create one ProjectTag
     * const ProjectTag = await prisma.projectTag.create({
     *   data: {
     *     // ... data to create a ProjectTag
     *   }
     * })
     * 
     */
    create<T extends ProjectTagCreateArgs>(args: SelectSubset<T, ProjectTagCreateArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectTags.
     * @param {ProjectTagCreateManyArgs} args - Arguments to create many ProjectTags.
     * @example
     * // Create many ProjectTags
     * const projectTag = await prisma.projectTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectTagCreateManyArgs>(args?: SelectSubset<T, ProjectTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectTags and returns the data saved in the database.
     * @param {ProjectTagCreateManyAndReturnArgs} args - Arguments to create many ProjectTags.
     * @example
     * // Create many ProjectTags
     * const projectTag = await prisma.projectTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectTags and only return the `projectId`
     * const projectTagWithProjectIdOnly = await prisma.projectTag.createManyAndReturn({
     *   select: { projectId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectTag.
     * @param {ProjectTagDeleteArgs} args - Arguments to delete one ProjectTag.
     * @example
     * // Delete one ProjectTag
     * const ProjectTag = await prisma.projectTag.delete({
     *   where: {
     *     // ... filter to delete one ProjectTag
     *   }
     * })
     * 
     */
    delete<T extends ProjectTagDeleteArgs>(args: SelectSubset<T, ProjectTagDeleteArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectTag.
     * @param {ProjectTagUpdateArgs} args - Arguments to update one ProjectTag.
     * @example
     * // Update one ProjectTag
     * const projectTag = await prisma.projectTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectTagUpdateArgs>(args: SelectSubset<T, ProjectTagUpdateArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectTags.
     * @param {ProjectTagDeleteManyArgs} args - Arguments to filter ProjectTags to delete.
     * @example
     * // Delete a few ProjectTags
     * const { count } = await prisma.projectTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectTagDeleteManyArgs>(args?: SelectSubset<T, ProjectTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTags
     * const projectTag = await prisma.projectTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectTagUpdateManyArgs>(args: SelectSubset<T, ProjectTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTags and returns the data updated in the database.
     * @param {ProjectTagUpdateManyAndReturnArgs} args - Arguments to update many ProjectTags.
     * @example
     * // Update many ProjectTags
     * const projectTag = await prisma.projectTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectTags and only return the `projectId`
     * const projectTagWithProjectIdOnly = await prisma.projectTag.updateManyAndReturn({
     *   select: { projectId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectTagUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectTag.
     * @param {ProjectTagUpsertArgs} args - Arguments to update or create a ProjectTag.
     * @example
     * // Update or create a ProjectTag
     * const projectTag = await prisma.projectTag.upsert({
     *   create: {
     *     // ... data to create a ProjectTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectTag we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTagUpsertArgs>(args: SelectSubset<T, ProjectTagUpsertArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagCountArgs} args - Arguments to filter ProjectTags to count.
     * @example
     * // Count the number of ProjectTags
     * const count = await prisma.projectTag.count({
     *   where: {
     *     // ... the filter for the ProjectTags we want to count
     *   }
     * })
    **/
    count<T extends ProjectTagCountArgs>(
      args?: Subset<T, ProjectTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectTagAggregateArgs>(args: Subset<T, ProjectTagAggregateArgs>): Prisma.PrismaPromise<GetProjectTagAggregateType<T>>

    /**
     * Group by ProjectTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagGroupByArgs} args - Group by arguments.
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
      T extends ProjectTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTagGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectTag model
   */
  readonly fields: ProjectTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectTag model
   */
  interface ProjectTagFieldRefs {
    readonly projectId: FieldRef<"ProjectTag", 'String'>
    readonly tagId: FieldRef<"ProjectTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectTag findUnique
   */
  export type ProjectTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag findUniqueOrThrow
   */
  export type ProjectTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag findFirst
   */
  export type ProjectTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTags.
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTags.
     */
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * ProjectTag findFirstOrThrow
   */
  export type ProjectTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTags.
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTags.
     */
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * ProjectTag findMany
   */
  export type ProjectTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTags to fetch.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectTags.
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * ProjectTag create
   */
  export type ProjectTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectTag.
     */
    data: XOR<ProjectTagCreateInput, ProjectTagUncheckedCreateInput>
  }

  /**
   * ProjectTag createMany
   */
  export type ProjectTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectTags.
     */
    data: ProjectTagCreateManyInput | ProjectTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectTag createManyAndReturn
   */
  export type ProjectTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectTags.
     */
    data: ProjectTagCreateManyInput | ProjectTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTag update
   */
  export type ProjectTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectTag.
     */
    data: XOR<ProjectTagUpdateInput, ProjectTagUncheckedUpdateInput>
    /**
     * Choose, which ProjectTag to update.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag updateMany
   */
  export type ProjectTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectTags.
     */
    data: XOR<ProjectTagUpdateManyMutationInput, ProjectTagUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTags to update
     */
    where?: ProjectTagWhereInput
    /**
     * Limit how many ProjectTags to update.
     */
    limit?: number
  }

  /**
   * ProjectTag updateManyAndReturn
   */
  export type ProjectTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * The data used to update ProjectTags.
     */
    data: XOR<ProjectTagUpdateManyMutationInput, ProjectTagUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTags to update
     */
    where?: ProjectTagWhereInput
    /**
     * Limit how many ProjectTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTag upsert
   */
  export type ProjectTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectTag to update in case it exists.
     */
    where: ProjectTagWhereUniqueInput
    /**
     * In case the ProjectTag found by the `where` argument doesn't exist, create a new ProjectTag with this data.
     */
    create: XOR<ProjectTagCreateInput, ProjectTagUncheckedCreateInput>
    /**
     * In case the ProjectTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTagUpdateInput, ProjectTagUncheckedUpdateInput>
  }

  /**
   * ProjectTag delete
   */
  export type ProjectTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter which ProjectTag to delete.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag deleteMany
   */
  export type ProjectTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTags to delete
     */
    where?: ProjectTagWhereInput
    /**
     * Limit how many ProjectTags to delete.
     */
    limit?: number
  }

  /**
   * ProjectTag without action
   */
  export type ProjectTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTag
     */
    omit?: ProjectTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    excerpt: string | null
    content: string | null
    thumbnailUrl: string | null
    publishedAt: Date | null
    isPublished: boolean | null
    readingTime: string | null
    featured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    excerpt: string | null
    content: string | null
    thumbnailUrl: string | null
    publishedAt: Date | null
    isPublished: boolean | null
    readingTime: string | null
    featured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    excerpt: number
    content: number
    thumbnailUrl: number
    publishedAt: number
    isPublished: number
    readingTime: number
    featured: number
    createdAt: number
    updatedAt: number
    authorId: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    excerpt?: true
    content?: true
    thumbnailUrl?: true
    publishedAt?: true
    isPublished?: true
    readingTime?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    excerpt?: true
    content?: true
    thumbnailUrl?: true
    publishedAt?: true
    isPublished?: true
    readingTime?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    excerpt?: true
    content?: true
    thumbnailUrl?: true
    publishedAt?: true
    isPublished?: true
    readingTime?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    slug: string
    title: string
    excerpt: string
    content: string
    thumbnailUrl: string | null
    publishedAt: Date
    isPublished: boolean
    readingTime: string | null
    featured: boolean
    createdAt: Date
    updatedAt: Date
    authorId: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    content?: boolean
    thumbnailUrl?: boolean
    publishedAt?: boolean
    isPublished?: boolean
    readingTime?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    tags?: boolean | Post$tagsArgs<ExtArgs>
    catalogs?: boolean | Post$catalogsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    content?: boolean
    thumbnailUrl?: boolean
    publishedAt?: boolean
    isPublished?: boolean
    readingTime?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    content?: boolean
    thumbnailUrl?: boolean
    publishedAt?: boolean
    isPublished?: boolean
    readingTime?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    content?: boolean
    thumbnailUrl?: boolean
    publishedAt?: boolean
    isPublished?: boolean
    readingTime?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "excerpt" | "content" | "thumbnailUrl" | "publishedAt" | "isPublished" | "readingTime" | "featured" | "createdAt" | "updatedAt" | "authorId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    tags?: boolean | Post$tagsArgs<ExtArgs>
    catalogs?: boolean | Post$catalogsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$AuthorPayload<ExtArgs>
      tags: Prisma.$TagPayload<ExtArgs>[]
      catalogs: Prisma.$PostCatalogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      excerpt: string
      content: string
      thumbnailUrl: string | null
      publishedAt: Date
      isPublished: boolean
      readingTime: string | null
      featured: boolean
      createdAt: Date
      updatedAt: Date
      authorId: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Post$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    catalogs<T extends Post$catalogsArgs<ExtArgs> = {}>(args?: Subset<T, Post$catalogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCatalogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly slug: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly excerpt: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly thumbnailUrl: FieldRef<"Post", 'String'>
    readonly publishedAt: FieldRef<"Post", 'DateTime'>
    readonly isPublished: FieldRef<"Post", 'Boolean'>
    readonly readingTime: FieldRef<"Post", 'String'>
    readonly featured: FieldRef<"Post", 'Boolean'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly authorId: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.tags
   */
  export type Post$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Post.catalogs
   */
  export type Post$catalogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCatalog
     */
    select?: PostCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCatalog
     */
    omit?: PostCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCatalogInclude<ExtArgs> | null
    where?: PostCatalogWhereInput
    orderBy?: PostCatalogOrderByWithRelationInput | PostCatalogOrderByWithRelationInput[]
    cursor?: PostCatalogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCatalogScalarFieldEnum | PostCatalogScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorMinAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    avatarUrl: string | null
    bio: string | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    avatarUrl: string | null
    bio: string | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    name: number
    role: number
    avatarUrl: number
    bio: number
    _all: number
  }


  export type AuthorMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    avatarUrl?: true
    bio?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    avatarUrl?: true
    bio?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    avatarUrl?: true
    bio?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: string
    name: string
    role: string | null
    avatarUrl: string | null
    bio: string | null
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    avatarUrl?: boolean
    bio?: boolean
    posts?: boolean | Author$postsArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    avatarUrl?: boolean
    bio?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    avatarUrl?: boolean
    bio?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    avatarUrl?: boolean
    bio?: boolean
  }

  export type AuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "avatarUrl" | "bio", ExtArgs["result"]["author"]>
  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Author$postsArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      role: string | null
      avatarUrl: string | null
      bio: string | null
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
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
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Author$postsArgs<ExtArgs> = {}>(args?: Subset<T, Author$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Author model
   */
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'String'>
    readonly name: FieldRef<"Author", 'String'>
    readonly role: FieldRef<"Author", 'String'>
    readonly avatarUrl: FieldRef<"Author", 'String'>
    readonly bio: FieldRef<"Author", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to delete.
     */
    limit?: number
  }

  /**
   * Author.posts
   */
  export type Author$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Model PostCatalog
   */

  export type AggregatePostCatalog = {
    _count: PostCatalogCountAggregateOutputType | null
    _min: PostCatalogMinAggregateOutputType | null
    _max: PostCatalogMaxAggregateOutputType | null
  }

  export type PostCatalogMinAggregateOutputType = {
    id: string | null
    name: string | null
    displayName: string | null
    description: string | null
  }

  export type PostCatalogMaxAggregateOutputType = {
    id: string | null
    name: string | null
    displayName: string | null
    description: string | null
  }

  export type PostCatalogCountAggregateOutputType = {
    id: number
    name: number
    displayName: number
    description: number
    _all: number
  }


  export type PostCatalogMinAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    description?: true
  }

  export type PostCatalogMaxAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    description?: true
  }

  export type PostCatalogCountAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    description?: true
    _all?: true
  }

  export type PostCatalogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostCatalog to aggregate.
     */
    where?: PostCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCatalogs to fetch.
     */
    orderBy?: PostCatalogOrderByWithRelationInput | PostCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostCatalogs
    **/
    _count?: true | PostCatalogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostCatalogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostCatalogMaxAggregateInputType
  }

  export type GetPostCatalogAggregateType<T extends PostCatalogAggregateArgs> = {
        [P in keyof T & keyof AggregatePostCatalog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostCatalog[P]>
      : GetScalarType<T[P], AggregatePostCatalog[P]>
  }




  export type PostCatalogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCatalogWhereInput
    orderBy?: PostCatalogOrderByWithAggregationInput | PostCatalogOrderByWithAggregationInput[]
    by: PostCatalogScalarFieldEnum[] | PostCatalogScalarFieldEnum
    having?: PostCatalogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCatalogCountAggregateInputType | true
    _min?: PostCatalogMinAggregateInputType
    _max?: PostCatalogMaxAggregateInputType
  }

  export type PostCatalogGroupByOutputType = {
    id: string
    name: string
    displayName: string
    description: string | null
    _count: PostCatalogCountAggregateOutputType | null
    _min: PostCatalogMinAggregateOutputType | null
    _max: PostCatalogMaxAggregateOutputType | null
  }

  type GetPostCatalogGroupByPayload<T extends PostCatalogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostCatalogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostCatalogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostCatalogGroupByOutputType[P]>
            : GetScalarType<T[P], PostCatalogGroupByOutputType[P]>
        }
      >
    >


  export type PostCatalogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    description?: boolean
    posts?: boolean | PostCatalog$postsArgs<ExtArgs>
    _count?: boolean | PostCatalogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postCatalog"]>

  export type PostCatalogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    description?: boolean
  }, ExtArgs["result"]["postCatalog"]>

  export type PostCatalogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    description?: boolean
  }, ExtArgs["result"]["postCatalog"]>

  export type PostCatalogSelectScalar = {
    id?: boolean
    name?: boolean
    displayName?: boolean
    description?: boolean
  }

  export type PostCatalogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "displayName" | "description", ExtArgs["result"]["postCatalog"]>
  export type PostCatalogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | PostCatalog$postsArgs<ExtArgs>
    _count?: boolean | PostCatalogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostCatalogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PostCatalogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostCatalogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostCatalog"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      displayName: string
      description: string | null
    }, ExtArgs["result"]["postCatalog"]>
    composites: {}
  }

  type PostCatalogGetPayload<S extends boolean | null | undefined | PostCatalogDefaultArgs> = $Result.GetResult<Prisma.$PostCatalogPayload, S>

  type PostCatalogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostCatalogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCatalogCountAggregateInputType | true
    }

  export interface PostCatalogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostCatalog'], meta: { name: 'PostCatalog' } }
    /**
     * Find zero or one PostCatalog that matches the filter.
     * @param {PostCatalogFindUniqueArgs} args - Arguments to find a PostCatalog
     * @example
     * // Get one PostCatalog
     * const postCatalog = await prisma.postCatalog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostCatalogFindUniqueArgs>(args: SelectSubset<T, PostCatalogFindUniqueArgs<ExtArgs>>): Prisma__PostCatalogClient<$Result.GetResult<Prisma.$PostCatalogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostCatalog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostCatalogFindUniqueOrThrowArgs} args - Arguments to find a PostCatalog
     * @example
     * // Get one PostCatalog
     * const postCatalog = await prisma.postCatalog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostCatalogFindUniqueOrThrowArgs>(args: SelectSubset<T, PostCatalogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostCatalogClient<$Result.GetResult<Prisma.$PostCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostCatalog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCatalogFindFirstArgs} args - Arguments to find a PostCatalog
     * @example
     * // Get one PostCatalog
     * const postCatalog = await prisma.postCatalog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostCatalogFindFirstArgs>(args?: SelectSubset<T, PostCatalogFindFirstArgs<ExtArgs>>): Prisma__PostCatalogClient<$Result.GetResult<Prisma.$PostCatalogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostCatalog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCatalogFindFirstOrThrowArgs} args - Arguments to find a PostCatalog
     * @example
     * // Get one PostCatalog
     * const postCatalog = await prisma.postCatalog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostCatalogFindFirstOrThrowArgs>(args?: SelectSubset<T, PostCatalogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostCatalogClient<$Result.GetResult<Prisma.$PostCatalogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostCatalogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCatalogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostCatalogs
     * const postCatalogs = await prisma.postCatalog.findMany()
     * 
     * // Get first 10 PostCatalogs
     * const postCatalogs = await prisma.postCatalog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postCatalogWithIdOnly = await prisma.postCatalog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostCatalogFindManyArgs>(args?: SelectSubset<T, PostCatalogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCatalogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostCatalog.
     * @param {PostCatalogCreateArgs} args - Arguments to create a PostCatalog.
     * @example
     * // Create one PostCatalog
     * const PostCatalog = await prisma.postCatalog.create({
     *   data: {
     *     // ... data to create a PostCatalog
     *   }
     * })
     * 
     */
    create<T extends PostCatalogCreateArgs>(args: SelectSubset<T, PostCatalogCreateArgs<ExtArgs>>): Prisma__PostCatalogClient<$Result.GetResult<Prisma.$PostCatalogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostCatalogs.
     * @param {PostCatalogCreateManyArgs} args - Arguments to create many PostCatalogs.
     * @example
     * // Create many PostCatalogs
     * const postCatalog = await prisma.postCatalog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCatalogCreateManyArgs>(args?: SelectSubset<T, PostCatalogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostCatalogs and returns the data saved in the database.
     * @param {PostCatalogCreateManyAndReturnArgs} args - Arguments to create many PostCatalogs.
     * @example
     * // Create many PostCatalogs
     * const postCatalog = await prisma.postCatalog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostCatalogs and only return the `id`
     * const postCatalogWithIdOnly = await prisma.postCatalog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCatalogCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCatalogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCatalogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostCatalog.
     * @param {PostCatalogDeleteArgs} args - Arguments to delete one PostCatalog.
     * @example
     * // Delete one PostCatalog
     * const PostCatalog = await prisma.postCatalog.delete({
     *   where: {
     *     // ... filter to delete one PostCatalog
     *   }
     * })
     * 
     */
    delete<T extends PostCatalogDeleteArgs>(args: SelectSubset<T, PostCatalogDeleteArgs<ExtArgs>>): Prisma__PostCatalogClient<$Result.GetResult<Prisma.$PostCatalogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostCatalog.
     * @param {PostCatalogUpdateArgs} args - Arguments to update one PostCatalog.
     * @example
     * // Update one PostCatalog
     * const postCatalog = await prisma.postCatalog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostCatalogUpdateArgs>(args: SelectSubset<T, PostCatalogUpdateArgs<ExtArgs>>): Prisma__PostCatalogClient<$Result.GetResult<Prisma.$PostCatalogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostCatalogs.
     * @param {PostCatalogDeleteManyArgs} args - Arguments to filter PostCatalogs to delete.
     * @example
     * // Delete a few PostCatalogs
     * const { count } = await prisma.postCatalog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostCatalogDeleteManyArgs>(args?: SelectSubset<T, PostCatalogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostCatalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCatalogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostCatalogs
     * const postCatalog = await prisma.postCatalog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostCatalogUpdateManyArgs>(args: SelectSubset<T, PostCatalogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostCatalogs and returns the data updated in the database.
     * @param {PostCatalogUpdateManyAndReturnArgs} args - Arguments to update many PostCatalogs.
     * @example
     * // Update many PostCatalogs
     * const postCatalog = await prisma.postCatalog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostCatalogs and only return the `id`
     * const postCatalogWithIdOnly = await prisma.postCatalog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostCatalogUpdateManyAndReturnArgs>(args: SelectSubset<T, PostCatalogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCatalogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostCatalog.
     * @param {PostCatalogUpsertArgs} args - Arguments to update or create a PostCatalog.
     * @example
     * // Update or create a PostCatalog
     * const postCatalog = await prisma.postCatalog.upsert({
     *   create: {
     *     // ... data to create a PostCatalog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostCatalog we want to update
     *   }
     * })
     */
    upsert<T extends PostCatalogUpsertArgs>(args: SelectSubset<T, PostCatalogUpsertArgs<ExtArgs>>): Prisma__PostCatalogClient<$Result.GetResult<Prisma.$PostCatalogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostCatalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCatalogCountArgs} args - Arguments to filter PostCatalogs to count.
     * @example
     * // Count the number of PostCatalogs
     * const count = await prisma.postCatalog.count({
     *   where: {
     *     // ... the filter for the PostCatalogs we want to count
     *   }
     * })
    **/
    count<T extends PostCatalogCountArgs>(
      args?: Subset<T, PostCatalogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCatalogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostCatalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCatalogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostCatalogAggregateArgs>(args: Subset<T, PostCatalogAggregateArgs>): Prisma.PrismaPromise<GetPostCatalogAggregateType<T>>

    /**
     * Group by PostCatalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCatalogGroupByArgs} args - Group by arguments.
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
      T extends PostCatalogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostCatalogGroupByArgs['orderBy'] }
        : { orderBy?: PostCatalogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostCatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostCatalogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostCatalog model
   */
  readonly fields: PostCatalogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostCatalog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostCatalogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends PostCatalog$postsArgs<ExtArgs> = {}>(args?: Subset<T, PostCatalog$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostCatalog model
   */
  interface PostCatalogFieldRefs {
    readonly id: FieldRef<"PostCatalog", 'String'>
    readonly name: FieldRef<"PostCatalog", 'String'>
    readonly displayName: FieldRef<"PostCatalog", 'String'>
    readonly description: FieldRef<"PostCatalog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostCatalog findUnique
   */
  export type PostCatalogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCatalog
     */
    select?: PostCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCatalog
     */
    omit?: PostCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCatalogInclude<ExtArgs> | null
    /**
     * Filter, which PostCatalog to fetch.
     */
    where: PostCatalogWhereUniqueInput
  }

  /**
   * PostCatalog findUniqueOrThrow
   */
  export type PostCatalogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCatalog
     */
    select?: PostCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCatalog
     */
    omit?: PostCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCatalogInclude<ExtArgs> | null
    /**
     * Filter, which PostCatalog to fetch.
     */
    where: PostCatalogWhereUniqueInput
  }

  /**
   * PostCatalog findFirst
   */
  export type PostCatalogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCatalog
     */
    select?: PostCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCatalog
     */
    omit?: PostCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCatalogInclude<ExtArgs> | null
    /**
     * Filter, which PostCatalog to fetch.
     */
    where?: PostCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCatalogs to fetch.
     */
    orderBy?: PostCatalogOrderByWithRelationInput | PostCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostCatalogs.
     */
    cursor?: PostCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostCatalogs.
     */
    distinct?: PostCatalogScalarFieldEnum | PostCatalogScalarFieldEnum[]
  }

  /**
   * PostCatalog findFirstOrThrow
   */
  export type PostCatalogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCatalog
     */
    select?: PostCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCatalog
     */
    omit?: PostCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCatalogInclude<ExtArgs> | null
    /**
     * Filter, which PostCatalog to fetch.
     */
    where?: PostCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCatalogs to fetch.
     */
    orderBy?: PostCatalogOrderByWithRelationInput | PostCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostCatalogs.
     */
    cursor?: PostCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostCatalogs.
     */
    distinct?: PostCatalogScalarFieldEnum | PostCatalogScalarFieldEnum[]
  }

  /**
   * PostCatalog findMany
   */
  export type PostCatalogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCatalog
     */
    select?: PostCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCatalog
     */
    omit?: PostCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCatalogInclude<ExtArgs> | null
    /**
     * Filter, which PostCatalogs to fetch.
     */
    where?: PostCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCatalogs to fetch.
     */
    orderBy?: PostCatalogOrderByWithRelationInput | PostCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostCatalogs.
     */
    cursor?: PostCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCatalogs.
     */
    skip?: number
    distinct?: PostCatalogScalarFieldEnum | PostCatalogScalarFieldEnum[]
  }

  /**
   * PostCatalog create
   */
  export type PostCatalogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCatalog
     */
    select?: PostCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCatalog
     */
    omit?: PostCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCatalogInclude<ExtArgs> | null
    /**
     * The data needed to create a PostCatalog.
     */
    data: XOR<PostCatalogCreateInput, PostCatalogUncheckedCreateInput>
  }

  /**
   * PostCatalog createMany
   */
  export type PostCatalogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostCatalogs.
     */
    data: PostCatalogCreateManyInput | PostCatalogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostCatalog createManyAndReturn
   */
  export type PostCatalogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCatalog
     */
    select?: PostCatalogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostCatalog
     */
    omit?: PostCatalogOmit<ExtArgs> | null
    /**
     * The data used to create many PostCatalogs.
     */
    data: PostCatalogCreateManyInput | PostCatalogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostCatalog update
   */
  export type PostCatalogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCatalog
     */
    select?: PostCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCatalog
     */
    omit?: PostCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCatalogInclude<ExtArgs> | null
    /**
     * The data needed to update a PostCatalog.
     */
    data: XOR<PostCatalogUpdateInput, PostCatalogUncheckedUpdateInput>
    /**
     * Choose, which PostCatalog to update.
     */
    where: PostCatalogWhereUniqueInput
  }

  /**
   * PostCatalog updateMany
   */
  export type PostCatalogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostCatalogs.
     */
    data: XOR<PostCatalogUpdateManyMutationInput, PostCatalogUncheckedUpdateManyInput>
    /**
     * Filter which PostCatalogs to update
     */
    where?: PostCatalogWhereInput
    /**
     * Limit how many PostCatalogs to update.
     */
    limit?: number
  }

  /**
   * PostCatalog updateManyAndReturn
   */
  export type PostCatalogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCatalog
     */
    select?: PostCatalogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostCatalog
     */
    omit?: PostCatalogOmit<ExtArgs> | null
    /**
     * The data used to update PostCatalogs.
     */
    data: XOR<PostCatalogUpdateManyMutationInput, PostCatalogUncheckedUpdateManyInput>
    /**
     * Filter which PostCatalogs to update
     */
    where?: PostCatalogWhereInput
    /**
     * Limit how many PostCatalogs to update.
     */
    limit?: number
  }

  /**
   * PostCatalog upsert
   */
  export type PostCatalogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCatalog
     */
    select?: PostCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCatalog
     */
    omit?: PostCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCatalogInclude<ExtArgs> | null
    /**
     * The filter to search for the PostCatalog to update in case it exists.
     */
    where: PostCatalogWhereUniqueInput
    /**
     * In case the PostCatalog found by the `where` argument doesn't exist, create a new PostCatalog with this data.
     */
    create: XOR<PostCatalogCreateInput, PostCatalogUncheckedCreateInput>
    /**
     * In case the PostCatalog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostCatalogUpdateInput, PostCatalogUncheckedUpdateInput>
  }

  /**
   * PostCatalog delete
   */
  export type PostCatalogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCatalog
     */
    select?: PostCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCatalog
     */
    omit?: PostCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCatalogInclude<ExtArgs> | null
    /**
     * Filter which PostCatalog to delete.
     */
    where: PostCatalogWhereUniqueInput
  }

  /**
   * PostCatalog deleteMany
   */
  export type PostCatalogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostCatalogs to delete
     */
    where?: PostCatalogWhereInput
    /**
     * Limit how many PostCatalogs to delete.
     */
    limit?: number
  }

  /**
   * PostCatalog.posts
   */
  export type PostCatalog$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * PostCatalog without action
   */
  export type PostCatalogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCatalog
     */
    select?: PostCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCatalog
     */
    omit?: PostCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCatalogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TagScalarFieldEnum: {
    id: 'id',
    code: 'code',
    displayName: 'displayName',
    hexColor: 'hexColor'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    role: 'role',
    client: 'client',
    platform: 'platform',
    description: 'description',
    longDescription: 'longDescription',
    challenge: 'challenge',
    solution: 'solution',
    content: 'content',
    features: 'features',
    thumbnailUrl: 'thumbnailUrl',
    deployUrl: 'deployUrl',
    repositoryUrl: 'repositoryUrl',
    services: 'services',
    screenshotUrls: 'screenshotUrls',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    code: 'code',
    displayName: 'displayName',
    description: 'description',
    hexColor: 'hexColor'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProjectCategoryScalarFieldEnum: {
    projectId: 'projectId',
    categoryId: 'categoryId'
  };

  export type ProjectCategoryScalarFieldEnum = (typeof ProjectCategoryScalarFieldEnum)[keyof typeof ProjectCategoryScalarFieldEnum]


  export const ProjectTagScalarFieldEnum: {
    projectId: 'projectId',
    tagId: 'tagId'
  };

  export type ProjectTagScalarFieldEnum = (typeof ProjectTagScalarFieldEnum)[keyof typeof ProjectTagScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    excerpt: 'excerpt',
    content: 'content',
    thumbnailUrl: 'thumbnailUrl',
    publishedAt: 'publishedAt',
    isPublished: 'isPublished',
    readingTime: 'readingTime',
    featured: 'featured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    avatarUrl: 'avatarUrl',
    bio: 'bio'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const PostCatalogScalarFieldEnum: {
    id: 'id',
    name: 'name',
    displayName: 'displayName',
    description: 'description'
  };

  export type PostCatalogScalarFieldEnum = (typeof PostCatalogScalarFieldEnum)[keyof typeof PostCatalogScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    code?: StringFilter<"Tag"> | string
    displayName?: StringFilter<"Tag"> | string
    hexColor?: StringNullableFilter<"Tag"> | string | null
    projectTags?: ProjectTagListRelationFilter
    posts?: PostListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    hexColor?: SortOrderInput | SortOrder
    projectTags?: ProjectTagOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    displayName?: StringFilter<"Tag"> | string
    hexColor?: StringNullableFilter<"Tag"> | string | null
    projectTags?: ProjectTagListRelationFilter
    posts?: PostListRelationFilter
  }, "id" | "code">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    hexColor?: SortOrderInput | SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    code?: StringWithAggregatesFilter<"Tag"> | string
    displayName?: StringWithAggregatesFilter<"Tag"> | string
    hexColor?: StringNullableWithAggregatesFilter<"Tag"> | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    role?: StringNullableFilter<"Project"> | string | null
    client?: StringNullableFilter<"Project"> | string | null
    platform?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    longDescription?: StringNullableFilter<"Project"> | string | null
    challenge?: StringNullableFilter<"Project"> | string | null
    solution?: StringNullableFilter<"Project"> | string | null
    content?: StringNullableFilter<"Project"> | string | null
    features?: StringNullableFilter<"Project"> | string | null
    thumbnailUrl?: StringNullableFilter<"Project"> | string | null
    deployUrl?: StringNullableFilter<"Project"> | string | null
    repositoryUrl?: StringNullableFilter<"Project"> | string | null
    services?: StringNullableListFilter<"Project">
    screenshotUrls?: StringNullableListFilter<"Project">
    startedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    projectCategories?: ProjectCategoryListRelationFilter
    projectTags?: ProjectTagListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    role?: SortOrderInput | SortOrder
    client?: SortOrderInput | SortOrder
    platform?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    longDescription?: SortOrderInput | SortOrder
    challenge?: SortOrderInput | SortOrder
    solution?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    deployUrl?: SortOrderInput | SortOrder
    repositoryUrl?: SortOrderInput | SortOrder
    services?: SortOrder
    screenshotUrls?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectCategories?: ProjectCategoryOrderByRelationAggregateInput
    projectTags?: ProjectTagOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    role?: StringNullableFilter<"Project"> | string | null
    client?: StringNullableFilter<"Project"> | string | null
    platform?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    longDescription?: StringNullableFilter<"Project"> | string | null
    challenge?: StringNullableFilter<"Project"> | string | null
    solution?: StringNullableFilter<"Project"> | string | null
    content?: StringNullableFilter<"Project"> | string | null
    features?: StringNullableFilter<"Project"> | string | null
    thumbnailUrl?: StringNullableFilter<"Project"> | string | null
    deployUrl?: StringNullableFilter<"Project"> | string | null
    repositoryUrl?: StringNullableFilter<"Project"> | string | null
    services?: StringNullableListFilter<"Project">
    screenshotUrls?: StringNullableListFilter<"Project">
    startedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    projectCategories?: ProjectCategoryListRelationFilter
    projectTags?: ProjectTagListRelationFilter
  }, "id" | "slug">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    role?: SortOrderInput | SortOrder
    client?: SortOrderInput | SortOrder
    platform?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    longDescription?: SortOrderInput | SortOrder
    challenge?: SortOrderInput | SortOrder
    solution?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    deployUrl?: SortOrderInput | SortOrder
    repositoryUrl?: SortOrderInput | SortOrder
    services?: SortOrder
    screenshotUrls?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    slug?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    role?: StringNullableWithAggregatesFilter<"Project"> | string | null
    client?: StringNullableWithAggregatesFilter<"Project"> | string | null
    platform?: StringNullableWithAggregatesFilter<"Project"> | string | null
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    longDescription?: StringNullableWithAggregatesFilter<"Project"> | string | null
    challenge?: StringNullableWithAggregatesFilter<"Project"> | string | null
    solution?: StringNullableWithAggregatesFilter<"Project"> | string | null
    content?: StringNullableWithAggregatesFilter<"Project"> | string | null
    features?: StringNullableWithAggregatesFilter<"Project"> | string | null
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    deployUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    repositoryUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    services?: StringNullableListFilter<"Project">
    screenshotUrls?: StringNullableListFilter<"Project">
    startedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    code?: StringFilter<"Category"> | string
    displayName?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    hexColor?: StringNullableFilter<"Category"> | string | null
    projectCategories?: ProjectCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    description?: SortOrderInput | SortOrder
    hexColor?: SortOrderInput | SortOrder
    projectCategories?: ProjectCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    displayName?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    hexColor?: StringNullableFilter<"Category"> | string | null
    projectCategories?: ProjectCategoryListRelationFilter
  }, "id" | "code">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    description?: SortOrderInput | SortOrder
    hexColor?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    code?: StringWithAggregatesFilter<"Category"> | string
    displayName?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    hexColor?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type ProjectCategoryWhereInput = {
    AND?: ProjectCategoryWhereInput | ProjectCategoryWhereInput[]
    OR?: ProjectCategoryWhereInput[]
    NOT?: ProjectCategoryWhereInput | ProjectCategoryWhereInput[]
    projectId?: StringFilter<"ProjectCategory"> | string
    categoryId?: StringFilter<"ProjectCategory"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type ProjectCategoryOrderByWithRelationInput = {
    projectId?: SortOrder
    categoryId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type ProjectCategoryWhereUniqueInput = Prisma.AtLeast<{
    projectId_categoryId?: ProjectCategoryProjectIdCategoryIdCompoundUniqueInput
    AND?: ProjectCategoryWhereInput | ProjectCategoryWhereInput[]
    OR?: ProjectCategoryWhereInput[]
    NOT?: ProjectCategoryWhereInput | ProjectCategoryWhereInput[]
    projectId?: StringFilter<"ProjectCategory"> | string
    categoryId?: StringFilter<"ProjectCategory"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "projectId_categoryId">

  export type ProjectCategoryOrderByWithAggregationInput = {
    projectId?: SortOrder
    categoryId?: SortOrder
    _count?: ProjectCategoryCountOrderByAggregateInput
    _max?: ProjectCategoryMaxOrderByAggregateInput
    _min?: ProjectCategoryMinOrderByAggregateInput
  }

  export type ProjectCategoryScalarWhereWithAggregatesInput = {
    AND?: ProjectCategoryScalarWhereWithAggregatesInput | ProjectCategoryScalarWhereWithAggregatesInput[]
    OR?: ProjectCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProjectCategoryScalarWhereWithAggregatesInput | ProjectCategoryScalarWhereWithAggregatesInput[]
    projectId?: StringWithAggregatesFilter<"ProjectCategory"> | string
    categoryId?: StringWithAggregatesFilter<"ProjectCategory"> | string
  }

  export type ProjectTagWhereInput = {
    AND?: ProjectTagWhereInput | ProjectTagWhereInput[]
    OR?: ProjectTagWhereInput[]
    NOT?: ProjectTagWhereInput | ProjectTagWhereInput[]
    projectId?: StringFilter<"ProjectTag"> | string
    tagId?: StringFilter<"ProjectTag"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type ProjectTagOrderByWithRelationInput = {
    projectId?: SortOrder
    tagId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type ProjectTagWhereUniqueInput = Prisma.AtLeast<{
    projectId_tagId?: ProjectTagProjectIdTagIdCompoundUniqueInput
    AND?: ProjectTagWhereInput | ProjectTagWhereInput[]
    OR?: ProjectTagWhereInput[]
    NOT?: ProjectTagWhereInput | ProjectTagWhereInput[]
    projectId?: StringFilter<"ProjectTag"> | string
    tagId?: StringFilter<"ProjectTag"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "projectId_tagId">

  export type ProjectTagOrderByWithAggregationInput = {
    projectId?: SortOrder
    tagId?: SortOrder
    _count?: ProjectTagCountOrderByAggregateInput
    _max?: ProjectTagMaxOrderByAggregateInput
    _min?: ProjectTagMinOrderByAggregateInput
  }

  export type ProjectTagScalarWhereWithAggregatesInput = {
    AND?: ProjectTagScalarWhereWithAggregatesInput | ProjectTagScalarWhereWithAggregatesInput[]
    OR?: ProjectTagScalarWhereWithAggregatesInput[]
    NOT?: ProjectTagScalarWhereWithAggregatesInput | ProjectTagScalarWhereWithAggregatesInput[]
    projectId?: StringWithAggregatesFilter<"ProjectTag"> | string
    tagId?: StringWithAggregatesFilter<"ProjectTag"> | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    excerpt?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    thumbnailUrl?: StringNullableFilter<"Post"> | string | null
    publishedAt?: DateTimeFilter<"Post"> | Date | string
    isPublished?: BoolFilter<"Post"> | boolean
    readingTime?: StringNullableFilter<"Post"> | string | null
    featured?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    authorId?: StringFilter<"Post"> | string
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    tags?: TagListRelationFilter
    catalogs?: PostCatalogListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    isPublished?: SortOrder
    readingTime?: SortOrderInput | SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    author?: AuthorOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
    catalogs?: PostCatalogOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    excerpt?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    thumbnailUrl?: StringNullableFilter<"Post"> | string | null
    publishedAt?: DateTimeFilter<"Post"> | Date | string
    isPublished?: BoolFilter<"Post"> | boolean
    readingTime?: StringNullableFilter<"Post"> | string | null
    featured?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    authorId?: StringFilter<"Post"> | string
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    tags?: TagListRelationFilter
    catalogs?: PostCatalogListRelationFilter
  }, "id" | "slug">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    isPublished?: SortOrder
    readingTime?: SortOrderInput | SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    slug?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    excerpt?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    publishedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    isPublished?: BoolWithAggregatesFilter<"Post"> | boolean
    readingTime?: StringNullableWithAggregatesFilter<"Post"> | string | null
    featured?: BoolWithAggregatesFilter<"Post"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    authorId?: StringWithAggregatesFilter<"Post"> | string
  }

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: StringFilter<"Author"> | string
    name?: StringFilter<"Author"> | string
    role?: StringNullableFilter<"Author"> | string | null
    avatarUrl?: StringNullableFilter<"Author"> | string | null
    bio?: StringNullableFilter<"Author"> | string | null
    posts?: PostListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    name?: StringFilter<"Author"> | string
    role?: StringNullableFilter<"Author"> | string | null
    avatarUrl?: StringNullableFilter<"Author"> | string | null
    bio?: StringNullableFilter<"Author"> | string | null
    posts?: PostListRelationFilter
  }, "id">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Author"> | string
    name?: StringWithAggregatesFilter<"Author"> | string
    role?: StringNullableWithAggregatesFilter<"Author"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Author"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Author"> | string | null
  }

  export type PostCatalogWhereInput = {
    AND?: PostCatalogWhereInput | PostCatalogWhereInput[]
    OR?: PostCatalogWhereInput[]
    NOT?: PostCatalogWhereInput | PostCatalogWhereInput[]
    id?: StringFilter<"PostCatalog"> | string
    name?: StringFilter<"PostCatalog"> | string
    displayName?: StringFilter<"PostCatalog"> | string
    description?: StringNullableFilter<"PostCatalog"> | string | null
    posts?: PostListRelationFilter
  }

  export type PostCatalogOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
  }

  export type PostCatalogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PostCatalogWhereInput | PostCatalogWhereInput[]
    OR?: PostCatalogWhereInput[]
    NOT?: PostCatalogWhereInput | PostCatalogWhereInput[]
    displayName?: StringFilter<"PostCatalog"> | string
    description?: StringNullableFilter<"PostCatalog"> | string | null
    posts?: PostListRelationFilter
  }, "id" | "name">

  export type PostCatalogOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: PostCatalogCountOrderByAggregateInput
    _max?: PostCatalogMaxOrderByAggregateInput
    _min?: PostCatalogMinOrderByAggregateInput
  }

  export type PostCatalogScalarWhereWithAggregatesInput = {
    AND?: PostCatalogScalarWhereWithAggregatesInput | PostCatalogScalarWhereWithAggregatesInput[]
    OR?: PostCatalogScalarWhereWithAggregatesInput[]
    NOT?: PostCatalogScalarWhereWithAggregatesInput | PostCatalogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostCatalog"> | string
    name?: StringWithAggregatesFilter<"PostCatalog"> | string
    displayName?: StringWithAggregatesFilter<"PostCatalog"> | string
    description?: StringNullableWithAggregatesFilter<"PostCatalog"> | string | null
  }

  export type TagCreateInput = {
    id?: string
    code: string
    displayName: string
    hexColor?: string | null
    projectTags?: ProjectTagCreateNestedManyWithoutTagInput
    posts?: PostCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    code: string
    displayName: string
    hexColor?: string | null
    projectTags?: ProjectTagUncheckedCreateNestedManyWithoutTagInput
    posts?: PostUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    projectTags?: ProjectTagUpdateManyWithoutTagNestedInput
    posts?: PostUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    projectTags?: ProjectTagUncheckedUpdateManyWithoutTagNestedInput
    posts?: PostUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    code: string
    displayName: string
    hexColor?: string | null
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateInput = {
    id?: string
    slug: string
    title: string
    role?: string | null
    client?: string | null
    platform?: string | null
    description?: string | null
    longDescription?: string | null
    challenge?: string | null
    solution?: string | null
    content?: string | null
    features?: string | null
    thumbnailUrl?: string | null
    deployUrl?: string | null
    repositoryUrl?: string | null
    services?: ProjectCreateservicesInput | string[]
    screenshotUrls?: ProjectCreatescreenshotUrlsInput | string[]
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectCategories?: ProjectCategoryCreateNestedManyWithoutProjectInput
    projectTags?: ProjectTagCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    role?: string | null
    client?: string | null
    platform?: string | null
    description?: string | null
    longDescription?: string | null
    challenge?: string | null
    solution?: string | null
    content?: string | null
    features?: string | null
    thumbnailUrl?: string | null
    deployUrl?: string | null
    repositoryUrl?: string | null
    services?: ProjectCreateservicesInput | string[]
    screenshotUrls?: ProjectCreatescreenshotUrlsInput | string[]
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectCategories?: ProjectCategoryUncheckedCreateNestedManyWithoutProjectInput
    projectTags?: ProjectTagUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    challenge?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ProjectUpdateservicesInput | string[]
    screenshotUrls?: ProjectUpdatescreenshotUrlsInput | string[]
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectCategories?: ProjectCategoryUpdateManyWithoutProjectNestedInput
    projectTags?: ProjectTagUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    challenge?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ProjectUpdateservicesInput | string[]
    screenshotUrls?: ProjectUpdatescreenshotUrlsInput | string[]
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectCategories?: ProjectCategoryUncheckedUpdateManyWithoutProjectNestedInput
    projectTags?: ProjectTagUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    slug: string
    title: string
    role?: string | null
    client?: string | null
    platform?: string | null
    description?: string | null
    longDescription?: string | null
    challenge?: string | null
    solution?: string | null
    content?: string | null
    features?: string | null
    thumbnailUrl?: string | null
    deployUrl?: string | null
    repositoryUrl?: string | null
    services?: ProjectCreateservicesInput | string[]
    screenshotUrls?: ProjectCreatescreenshotUrlsInput | string[]
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    challenge?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ProjectUpdateservicesInput | string[]
    screenshotUrls?: ProjectUpdatescreenshotUrlsInput | string[]
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    challenge?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ProjectUpdateservicesInput | string[]
    screenshotUrls?: ProjectUpdatescreenshotUrlsInput | string[]
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    code: string
    displayName: string
    description?: string | null
    hexColor?: string | null
    projectCategories?: ProjectCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    code: string
    displayName: string
    description?: string | null
    hexColor?: string | null
    projectCategories?: ProjectCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    projectCategories?: ProjectCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    projectCategories?: ProjectCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    code: string
    displayName: string
    description?: string | null
    hexColor?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCategoryCreateInput = {
    project: ProjectCreateNestedOneWithoutProjectCategoriesInput
    category: CategoryCreateNestedOneWithoutProjectCategoriesInput
  }

  export type ProjectCategoryUncheckedCreateInput = {
    projectId: string
    categoryId: string
  }

  export type ProjectCategoryUpdateInput = {
    project?: ProjectUpdateOneRequiredWithoutProjectCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutProjectCategoriesNestedInput
  }

  export type ProjectCategoryUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCategoryCreateManyInput = {
    projectId: string
    categoryId: string
  }

  export type ProjectCategoryUpdateManyMutationInput = {

  }

  export type ProjectCategoryUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTagCreateInput = {
    project: ProjectCreateNestedOneWithoutProjectTagsInput
    tag: TagCreateNestedOneWithoutProjectTagsInput
  }

  export type ProjectTagUncheckedCreateInput = {
    projectId: string
    tagId: string
  }

  export type ProjectTagUpdateInput = {
    project?: ProjectUpdateOneRequiredWithoutProjectTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutProjectTagsNestedInput
  }

  export type ProjectTagUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTagCreateManyInput = {
    projectId: string
    tagId: string
  }

  export type ProjectTagUpdateManyMutationInput = {

  }

  export type ProjectTagUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    thumbnailUrl?: string | null
    publishedAt?: Date | string
    isPublished?: boolean
    readingTime?: string | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AuthorCreateNestedOneWithoutPostsInput
    tags?: TagCreateNestedManyWithoutPostsInput
    catalogs?: PostCatalogCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    thumbnailUrl?: string | null
    publishedAt?: Date | string
    isPublished?: boolean
    readingTime?: string | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    tags?: TagUncheckedCreateNestedManyWithoutPostsInput
    catalogs?: PostCatalogUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readingTime?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutPostsNestedInput
    tags?: TagUpdateManyWithoutPostsNestedInput
    catalogs?: PostCatalogUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readingTime?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    tags?: TagUncheckedUpdateManyWithoutPostsNestedInput
    catalogs?: PostCatalogUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    thumbnailUrl?: string | null
    publishedAt?: Date | string
    isPublished?: boolean
    readingTime?: string | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readingTime?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readingTime?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorCreateInput = {
    id?: string
    name: string
    role?: string | null
    avatarUrl?: string | null
    bio?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: string
    name: string
    role?: string | null
    avatarUrl?: string | null
    bio?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: string
    name: string
    role?: string | null
    avatarUrl?: string | null
    bio?: string | null
  }

  export type AuthorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCatalogCreateInput = {
    id?: string
    name: string
    displayName: string
    description?: string | null
    posts?: PostCreateNestedManyWithoutCatalogsInput
  }

  export type PostCatalogUncheckedCreateInput = {
    id?: string
    name: string
    displayName: string
    description?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutCatalogsInput
  }

  export type PostCatalogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutCatalogsNestedInput
  }

  export type PostCatalogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutCatalogsNestedInput
  }

  export type PostCatalogCreateManyInput = {
    id?: string
    name: string
    displayName: string
    description?: string | null
  }

  export type PostCatalogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCatalogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
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
  }

  export type ProjectTagListRelationFilter = {
    every?: ProjectTagWhereInput
    some?: ProjectTagWhereInput
    none?: ProjectTagWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    hexColor?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    hexColor?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    hexColor?: SortOrder
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
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectCategoryListRelationFilter = {
    every?: ProjectCategoryWhereInput
    some?: ProjectCategoryWhereInput
    none?: ProjectCategoryWhereInput
  }

  export type ProjectCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    role?: SortOrder
    client?: SortOrder
    platform?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    challenge?: SortOrder
    solution?: SortOrder
    content?: SortOrder
    features?: SortOrder
    thumbnailUrl?: SortOrder
    deployUrl?: SortOrder
    repositoryUrl?: SortOrder
    services?: SortOrder
    screenshotUrls?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    role?: SortOrder
    client?: SortOrder
    platform?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    challenge?: SortOrder
    solution?: SortOrder
    content?: SortOrder
    features?: SortOrder
    thumbnailUrl?: SortOrder
    deployUrl?: SortOrder
    repositoryUrl?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    role?: SortOrder
    client?: SortOrder
    platform?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    challenge?: SortOrder
    solution?: SortOrder
    content?: SortOrder
    features?: SortOrder
    thumbnailUrl?: SortOrder
    deployUrl?: SortOrder
    repositoryUrl?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    hexColor?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    hexColor?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    hexColor?: SortOrder
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProjectCategoryProjectIdCategoryIdCompoundUniqueInput = {
    projectId: string
    categoryId: string
  }

  export type ProjectCategoryCountOrderByAggregateInput = {
    projectId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProjectCategoryMaxOrderByAggregateInput = {
    projectId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProjectCategoryMinOrderByAggregateInput = {
    projectId?: SortOrder
    categoryId?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type ProjectTagProjectIdTagIdCompoundUniqueInput = {
    projectId: string
    tagId: string
  }

  export type ProjectTagCountOrderByAggregateInput = {
    projectId?: SortOrder
    tagId?: SortOrder
  }

  export type ProjectTagMaxOrderByAggregateInput = {
    projectId?: SortOrder
    tagId?: SortOrder
  }

  export type ProjectTagMinOrderByAggregateInput = {
    projectId?: SortOrder
    tagId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AuthorScalarRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type PostCatalogListRelationFilter = {
    every?: PostCatalogWhereInput
    some?: PostCatalogWhereInput
    none?: PostCatalogWhereInput
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCatalogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    thumbnailUrl?: SortOrder
    publishedAt?: SortOrder
    isPublished?: SortOrder
    readingTime?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    thumbnailUrl?: SortOrder
    publishedAt?: SortOrder
    isPublished?: SortOrder
    readingTime?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    thumbnailUrl?: SortOrder
    publishedAt?: SortOrder
    isPublished?: SortOrder
    readingTime?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
  }

  export type PostCatalogCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
  }

  export type PostCatalogMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
  }

  export type PostCatalogMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
  }

  export type ProjectTagCreateNestedManyWithoutTagInput = {
    create?: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput> | ProjectTagCreateWithoutTagInput[] | ProjectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutTagInput | ProjectTagCreateOrConnectWithoutTagInput[]
    createMany?: ProjectTagCreateManyTagInputEnvelope
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput> | PostCreateWithoutTagsInput[] | PostUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput | PostCreateOrConnectWithoutTagsInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ProjectTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput> | ProjectTagCreateWithoutTagInput[] | ProjectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutTagInput | ProjectTagCreateOrConnectWithoutTagInput[]
    createMany?: ProjectTagCreateManyTagInputEnvelope
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput> | PostCreateWithoutTagsInput[] | PostUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput | PostCreateOrConnectWithoutTagsInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput> | ProjectTagCreateWithoutTagInput[] | ProjectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutTagInput | ProjectTagCreateOrConnectWithoutTagInput[]
    upsert?: ProjectTagUpsertWithWhereUniqueWithoutTagInput | ProjectTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ProjectTagCreateManyTagInputEnvelope
    set?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    disconnect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    delete?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    update?: ProjectTagUpdateWithWhereUniqueWithoutTagInput | ProjectTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ProjectTagUpdateManyWithWhereWithoutTagInput | ProjectTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
  }

  export type PostUpdateManyWithoutTagsNestedInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput> | PostCreateWithoutTagsInput[] | PostUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput | PostCreateOrConnectWithoutTagsInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutTagsInput | PostUpsertWithWhereUniqueWithoutTagsInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutTagsInput | PostUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: PostUpdateManyWithWhereWithoutTagsInput | PostUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ProjectTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput> | ProjectTagCreateWithoutTagInput[] | ProjectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutTagInput | ProjectTagCreateOrConnectWithoutTagInput[]
    upsert?: ProjectTagUpsertWithWhereUniqueWithoutTagInput | ProjectTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ProjectTagCreateManyTagInputEnvelope
    set?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    disconnect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    delete?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    update?: ProjectTagUpdateWithWhereUniqueWithoutTagInput | ProjectTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ProjectTagUpdateManyWithWhereWithoutTagInput | ProjectTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput> | PostCreateWithoutTagsInput[] | PostUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput | PostCreateOrConnectWithoutTagsInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutTagsInput | PostUpsertWithWhereUniqueWithoutTagsInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutTagsInput | PostUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: PostUpdateManyWithWhereWithoutTagsInput | PostUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ProjectCreateservicesInput = {
    set: string[]
  }

  export type ProjectCreatescreenshotUrlsInput = {
    set: string[]
  }

  export type ProjectCategoryCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectCategoryCreateWithoutProjectInput, ProjectCategoryUncheckedCreateWithoutProjectInput> | ProjectCategoryCreateWithoutProjectInput[] | ProjectCategoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCategoryCreateOrConnectWithoutProjectInput | ProjectCategoryCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectCategoryCreateManyProjectInputEnvelope
    connect?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
  }

  export type ProjectTagCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
  }

  export type ProjectCategoryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectCategoryCreateWithoutProjectInput, ProjectCategoryUncheckedCreateWithoutProjectInput> | ProjectCategoryCreateWithoutProjectInput[] | ProjectCategoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCategoryCreateOrConnectWithoutProjectInput | ProjectCategoryCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectCategoryCreateManyProjectInputEnvelope
    connect?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
  }

  export type ProjectTagUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
  }

  export type ProjectUpdateservicesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectUpdatescreenshotUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectCategoryUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectCategoryCreateWithoutProjectInput, ProjectCategoryUncheckedCreateWithoutProjectInput> | ProjectCategoryCreateWithoutProjectInput[] | ProjectCategoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCategoryCreateOrConnectWithoutProjectInput | ProjectCategoryCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectCategoryUpsertWithWhereUniqueWithoutProjectInput | ProjectCategoryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectCategoryCreateManyProjectInputEnvelope
    set?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    disconnect?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    delete?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    connect?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    update?: ProjectCategoryUpdateWithWhereUniqueWithoutProjectInput | ProjectCategoryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectCategoryUpdateManyWithWhereWithoutProjectInput | ProjectCategoryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectCategoryScalarWhereInput | ProjectCategoryScalarWhereInput[]
  }

  export type ProjectTagUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTagUpsertWithWhereUniqueWithoutProjectInput | ProjectTagUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    set?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    disconnect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    delete?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    update?: ProjectTagUpdateWithWhereUniqueWithoutProjectInput | ProjectTagUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTagUpdateManyWithWhereWithoutProjectInput | ProjectTagUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
  }

  export type ProjectCategoryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectCategoryCreateWithoutProjectInput, ProjectCategoryUncheckedCreateWithoutProjectInput> | ProjectCategoryCreateWithoutProjectInput[] | ProjectCategoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCategoryCreateOrConnectWithoutProjectInput | ProjectCategoryCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectCategoryUpsertWithWhereUniqueWithoutProjectInput | ProjectCategoryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectCategoryCreateManyProjectInputEnvelope
    set?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    disconnect?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    delete?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    connect?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    update?: ProjectCategoryUpdateWithWhereUniqueWithoutProjectInput | ProjectCategoryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectCategoryUpdateManyWithWhereWithoutProjectInput | ProjectCategoryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectCategoryScalarWhereInput | ProjectCategoryScalarWhereInput[]
  }

  export type ProjectTagUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTagUpsertWithWhereUniqueWithoutProjectInput | ProjectTagUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    set?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    disconnect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    delete?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    update?: ProjectTagUpdateWithWhereUniqueWithoutProjectInput | ProjectTagUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTagUpdateManyWithWhereWithoutProjectInput | ProjectTagUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
  }

  export type ProjectCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProjectCategoryCreateWithoutCategoryInput, ProjectCategoryUncheckedCreateWithoutCategoryInput> | ProjectCategoryCreateWithoutCategoryInput[] | ProjectCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectCategoryCreateOrConnectWithoutCategoryInput | ProjectCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: ProjectCategoryCreateManyCategoryInputEnvelope
    connect?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
  }

  export type ProjectCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProjectCategoryCreateWithoutCategoryInput, ProjectCategoryUncheckedCreateWithoutCategoryInput> | ProjectCategoryCreateWithoutCategoryInput[] | ProjectCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectCategoryCreateOrConnectWithoutCategoryInput | ProjectCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: ProjectCategoryCreateManyCategoryInputEnvelope
    connect?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
  }

  export type ProjectCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProjectCategoryCreateWithoutCategoryInput, ProjectCategoryUncheckedCreateWithoutCategoryInput> | ProjectCategoryCreateWithoutCategoryInput[] | ProjectCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectCategoryCreateOrConnectWithoutCategoryInput | ProjectCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ProjectCategoryUpsertWithWhereUniqueWithoutCategoryInput | ProjectCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProjectCategoryCreateManyCategoryInputEnvelope
    set?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    disconnect?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    delete?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    connect?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    update?: ProjectCategoryUpdateWithWhereUniqueWithoutCategoryInput | ProjectCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProjectCategoryUpdateManyWithWhereWithoutCategoryInput | ProjectCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProjectCategoryScalarWhereInput | ProjectCategoryScalarWhereInput[]
  }

  export type ProjectCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProjectCategoryCreateWithoutCategoryInput, ProjectCategoryUncheckedCreateWithoutCategoryInput> | ProjectCategoryCreateWithoutCategoryInput[] | ProjectCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectCategoryCreateOrConnectWithoutCategoryInput | ProjectCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ProjectCategoryUpsertWithWhereUniqueWithoutCategoryInput | ProjectCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProjectCategoryCreateManyCategoryInputEnvelope
    set?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    disconnect?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    delete?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    connect?: ProjectCategoryWhereUniqueInput | ProjectCategoryWhereUniqueInput[]
    update?: ProjectCategoryUpdateWithWhereUniqueWithoutCategoryInput | ProjectCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProjectCategoryUpdateManyWithWhereWithoutCategoryInput | ProjectCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProjectCategoryScalarWhereInput | ProjectCategoryScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutProjectCategoriesInput = {
    create?: XOR<ProjectCreateWithoutProjectCategoriesInput, ProjectUncheckedCreateWithoutProjectCategoriesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectCategoriesInput
    connect?: ProjectWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProjectCategoriesInput = {
    create?: XOR<CategoryCreateWithoutProjectCategoriesInput, CategoryUncheckedCreateWithoutProjectCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProjectCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutProjectCategoriesNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectCategoriesInput, ProjectUncheckedCreateWithoutProjectCategoriesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectCategoriesInput
    upsert?: ProjectUpsertWithoutProjectCategoriesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectCategoriesInput, ProjectUpdateWithoutProjectCategoriesInput>, ProjectUncheckedUpdateWithoutProjectCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutProjectCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutProjectCategoriesInput, CategoryUncheckedCreateWithoutProjectCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProjectCategoriesInput
    upsert?: CategoryUpsertWithoutProjectCategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProjectCategoriesInput, CategoryUpdateWithoutProjectCategoriesInput>, CategoryUncheckedUpdateWithoutProjectCategoriesInput>
  }

  export type ProjectCreateNestedOneWithoutProjectTagsInput = {
    create?: XOR<ProjectCreateWithoutProjectTagsInput, ProjectUncheckedCreateWithoutProjectTagsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectTagsInput
    connect?: ProjectWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutProjectTagsInput = {
    create?: XOR<TagCreateWithoutProjectTagsInput, TagUncheckedCreateWithoutProjectTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutProjectTagsInput
    connect?: TagWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutProjectTagsNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectTagsInput, ProjectUncheckedCreateWithoutProjectTagsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectTagsInput
    upsert?: ProjectUpsertWithoutProjectTagsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectTagsInput, ProjectUpdateWithoutProjectTagsInput>, ProjectUncheckedUpdateWithoutProjectTagsInput>
  }

  export type TagUpdateOneRequiredWithoutProjectTagsNestedInput = {
    create?: XOR<TagCreateWithoutProjectTagsInput, TagUncheckedCreateWithoutProjectTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutProjectTagsInput
    upsert?: TagUpsertWithoutProjectTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutProjectTagsInput, TagUpdateWithoutProjectTagsInput>, TagUncheckedUpdateWithoutProjectTagsInput>
  }

  export type AuthorCreateNestedOneWithoutPostsInput = {
    create?: XOR<AuthorCreateWithoutPostsInput, AuthorUncheckedCreateWithoutPostsInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutPostsInput
    connect?: AuthorWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutPostsInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput> | TagCreateWithoutPostsInput[] | TagUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput | TagCreateOrConnectWithoutPostsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type PostCatalogCreateNestedManyWithoutPostsInput = {
    create?: XOR<PostCatalogCreateWithoutPostsInput, PostCatalogUncheckedCreateWithoutPostsInput> | PostCatalogCreateWithoutPostsInput[] | PostCatalogUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: PostCatalogCreateOrConnectWithoutPostsInput | PostCatalogCreateOrConnectWithoutPostsInput[]
    connect?: PostCatalogWhereUniqueInput | PostCatalogWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput> | TagCreateWithoutPostsInput[] | TagUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput | TagCreateOrConnectWithoutPostsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type PostCatalogUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<PostCatalogCreateWithoutPostsInput, PostCatalogUncheckedCreateWithoutPostsInput> | PostCatalogCreateWithoutPostsInput[] | PostCatalogUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: PostCatalogCreateOrConnectWithoutPostsInput | PostCatalogCreateOrConnectWithoutPostsInput[]
    connect?: PostCatalogWhereUniqueInput | PostCatalogWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AuthorUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<AuthorCreateWithoutPostsInput, AuthorUncheckedCreateWithoutPostsInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutPostsInput
    upsert?: AuthorUpsertWithoutPostsInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutPostsInput, AuthorUpdateWithoutPostsInput>, AuthorUncheckedUpdateWithoutPostsInput>
  }

  export type TagUpdateManyWithoutPostsNestedInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput> | TagCreateWithoutPostsInput[] | TagUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput | TagCreateOrConnectWithoutPostsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutPostsInput | TagUpsertWithWhereUniqueWithoutPostsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutPostsInput | TagUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutPostsInput | TagUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type PostCatalogUpdateManyWithoutPostsNestedInput = {
    create?: XOR<PostCatalogCreateWithoutPostsInput, PostCatalogUncheckedCreateWithoutPostsInput> | PostCatalogCreateWithoutPostsInput[] | PostCatalogUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: PostCatalogCreateOrConnectWithoutPostsInput | PostCatalogCreateOrConnectWithoutPostsInput[]
    upsert?: PostCatalogUpsertWithWhereUniqueWithoutPostsInput | PostCatalogUpsertWithWhereUniqueWithoutPostsInput[]
    set?: PostCatalogWhereUniqueInput | PostCatalogWhereUniqueInput[]
    disconnect?: PostCatalogWhereUniqueInput | PostCatalogWhereUniqueInput[]
    delete?: PostCatalogWhereUniqueInput | PostCatalogWhereUniqueInput[]
    connect?: PostCatalogWhereUniqueInput | PostCatalogWhereUniqueInput[]
    update?: PostCatalogUpdateWithWhereUniqueWithoutPostsInput | PostCatalogUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: PostCatalogUpdateManyWithWhereWithoutPostsInput | PostCatalogUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: PostCatalogScalarWhereInput | PostCatalogScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput> | TagCreateWithoutPostsInput[] | TagUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput | TagCreateOrConnectWithoutPostsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutPostsInput | TagUpsertWithWhereUniqueWithoutPostsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutPostsInput | TagUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutPostsInput | TagUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type PostCatalogUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<PostCatalogCreateWithoutPostsInput, PostCatalogUncheckedCreateWithoutPostsInput> | PostCatalogCreateWithoutPostsInput[] | PostCatalogUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: PostCatalogCreateOrConnectWithoutPostsInput | PostCatalogCreateOrConnectWithoutPostsInput[]
    upsert?: PostCatalogUpsertWithWhereUniqueWithoutPostsInput | PostCatalogUpsertWithWhereUniqueWithoutPostsInput[]
    set?: PostCatalogWhereUniqueInput | PostCatalogWhereUniqueInput[]
    disconnect?: PostCatalogWhereUniqueInput | PostCatalogWhereUniqueInput[]
    delete?: PostCatalogWhereUniqueInput | PostCatalogWhereUniqueInput[]
    connect?: PostCatalogWhereUniqueInput | PostCatalogWhereUniqueInput[]
    update?: PostCatalogUpdateWithWhereUniqueWithoutPostsInput | PostCatalogUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: PostCatalogUpdateManyWithWhereWithoutPostsInput | PostCatalogUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: PostCatalogScalarWhereInput | PostCatalogScalarWhereInput[]
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostCreateNestedManyWithoutCatalogsInput = {
    create?: XOR<PostCreateWithoutCatalogsInput, PostUncheckedCreateWithoutCatalogsInput> | PostCreateWithoutCatalogsInput[] | PostUncheckedCreateWithoutCatalogsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCatalogsInput | PostCreateOrConnectWithoutCatalogsInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCatalogsInput = {
    create?: XOR<PostCreateWithoutCatalogsInput, PostUncheckedCreateWithoutCatalogsInput> | PostCreateWithoutCatalogsInput[] | PostUncheckedCreateWithoutCatalogsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCatalogsInput | PostCreateOrConnectWithoutCatalogsInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutCatalogsNestedInput = {
    create?: XOR<PostCreateWithoutCatalogsInput, PostUncheckedCreateWithoutCatalogsInput> | PostCreateWithoutCatalogsInput[] | PostUncheckedCreateWithoutCatalogsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCatalogsInput | PostCreateOrConnectWithoutCatalogsInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCatalogsInput | PostUpsertWithWhereUniqueWithoutCatalogsInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCatalogsInput | PostUpdateWithWhereUniqueWithoutCatalogsInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCatalogsInput | PostUpdateManyWithWhereWithoutCatalogsInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCatalogsNestedInput = {
    create?: XOR<PostCreateWithoutCatalogsInput, PostUncheckedCreateWithoutCatalogsInput> | PostCreateWithoutCatalogsInput[] | PostUncheckedCreateWithoutCatalogsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCatalogsInput | PostCreateOrConnectWithoutCatalogsInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCatalogsInput | PostUpsertWithWhereUniqueWithoutCatalogsInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCatalogsInput | PostUpdateWithWhereUniqueWithoutCatalogsInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCatalogsInput | PostUpdateManyWithWhereWithoutCatalogsInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
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
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectTagCreateWithoutTagInput = {
    project: ProjectCreateNestedOneWithoutProjectTagsInput
  }

  export type ProjectTagUncheckedCreateWithoutTagInput = {
    projectId: string
  }

  export type ProjectTagCreateOrConnectWithoutTagInput = {
    where: ProjectTagWhereUniqueInput
    create: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput>
  }

  export type ProjectTagCreateManyTagInputEnvelope = {
    data: ProjectTagCreateManyTagInput | ProjectTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutTagsInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    thumbnailUrl?: string | null
    publishedAt?: Date | string
    isPublished?: boolean
    readingTime?: string | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AuthorCreateNestedOneWithoutPostsInput
    catalogs?: PostCatalogCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutTagsInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    thumbnailUrl?: string | null
    publishedAt?: Date | string
    isPublished?: boolean
    readingTime?: string | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    catalogs?: PostCatalogUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutTagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
  }

  export type ProjectTagUpsertWithWhereUniqueWithoutTagInput = {
    where: ProjectTagWhereUniqueInput
    update: XOR<ProjectTagUpdateWithoutTagInput, ProjectTagUncheckedUpdateWithoutTagInput>
    create: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput>
  }

  export type ProjectTagUpdateWithWhereUniqueWithoutTagInput = {
    where: ProjectTagWhereUniqueInput
    data: XOR<ProjectTagUpdateWithoutTagInput, ProjectTagUncheckedUpdateWithoutTagInput>
  }

  export type ProjectTagUpdateManyWithWhereWithoutTagInput = {
    where: ProjectTagScalarWhereInput
    data: XOR<ProjectTagUpdateManyMutationInput, ProjectTagUncheckedUpdateManyWithoutTagInput>
  }

  export type ProjectTagScalarWhereInput = {
    AND?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
    OR?: ProjectTagScalarWhereInput[]
    NOT?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
    projectId?: StringFilter<"ProjectTag"> | string
    tagId?: StringFilter<"ProjectTag"> | string
  }

  export type PostUpsertWithWhereUniqueWithoutTagsInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
  }

  export type PostUpdateWithWhereUniqueWithoutTagsInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
  }

  export type PostUpdateManyWithWhereWithoutTagsInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutTagsInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    excerpt?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    thumbnailUrl?: StringNullableFilter<"Post"> | string | null
    publishedAt?: DateTimeFilter<"Post"> | Date | string
    isPublished?: BoolFilter<"Post"> | boolean
    readingTime?: StringNullableFilter<"Post"> | string | null
    featured?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    authorId?: StringFilter<"Post"> | string
  }

  export type ProjectCategoryCreateWithoutProjectInput = {
    category: CategoryCreateNestedOneWithoutProjectCategoriesInput
  }

  export type ProjectCategoryUncheckedCreateWithoutProjectInput = {
    categoryId: string
  }

  export type ProjectCategoryCreateOrConnectWithoutProjectInput = {
    where: ProjectCategoryWhereUniqueInput
    create: XOR<ProjectCategoryCreateWithoutProjectInput, ProjectCategoryUncheckedCreateWithoutProjectInput>
  }

  export type ProjectCategoryCreateManyProjectInputEnvelope = {
    data: ProjectCategoryCreateManyProjectInput | ProjectCategoryCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectTagCreateWithoutProjectInput = {
    tag: TagCreateNestedOneWithoutProjectTagsInput
  }

  export type ProjectTagUncheckedCreateWithoutProjectInput = {
    tagId: string
  }

  export type ProjectTagCreateOrConnectWithoutProjectInput = {
    where: ProjectTagWhereUniqueInput
    create: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTagCreateManyProjectInputEnvelope = {
    data: ProjectTagCreateManyProjectInput | ProjectTagCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCategoryUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectCategoryWhereUniqueInput
    update: XOR<ProjectCategoryUpdateWithoutProjectInput, ProjectCategoryUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectCategoryCreateWithoutProjectInput, ProjectCategoryUncheckedCreateWithoutProjectInput>
  }

  export type ProjectCategoryUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectCategoryWhereUniqueInput
    data: XOR<ProjectCategoryUpdateWithoutProjectInput, ProjectCategoryUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCategoryUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectCategoryScalarWhereInput
    data: XOR<ProjectCategoryUpdateManyMutationInput, ProjectCategoryUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCategoryScalarWhereInput = {
    AND?: ProjectCategoryScalarWhereInput | ProjectCategoryScalarWhereInput[]
    OR?: ProjectCategoryScalarWhereInput[]
    NOT?: ProjectCategoryScalarWhereInput | ProjectCategoryScalarWhereInput[]
    projectId?: StringFilter<"ProjectCategory"> | string
    categoryId?: StringFilter<"ProjectCategory"> | string
  }

  export type ProjectTagUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectTagWhereUniqueInput
    update: XOR<ProjectTagUpdateWithoutProjectInput, ProjectTagUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTagUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectTagWhereUniqueInput
    data: XOR<ProjectTagUpdateWithoutProjectInput, ProjectTagUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectTagUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectTagScalarWhereInput
    data: XOR<ProjectTagUpdateManyMutationInput, ProjectTagUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCategoryCreateWithoutCategoryInput = {
    project: ProjectCreateNestedOneWithoutProjectCategoriesInput
  }

  export type ProjectCategoryUncheckedCreateWithoutCategoryInput = {
    projectId: string
  }

  export type ProjectCategoryCreateOrConnectWithoutCategoryInput = {
    where: ProjectCategoryWhereUniqueInput
    create: XOR<ProjectCategoryCreateWithoutCategoryInput, ProjectCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ProjectCategoryCreateManyCategoryInputEnvelope = {
    data: ProjectCategoryCreateManyCategoryInput | ProjectCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProjectCategoryWhereUniqueInput
    update: XOR<ProjectCategoryUpdateWithoutCategoryInput, ProjectCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProjectCategoryCreateWithoutCategoryInput, ProjectCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ProjectCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProjectCategoryWhereUniqueInput
    data: XOR<ProjectCategoryUpdateWithoutCategoryInput, ProjectCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type ProjectCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: ProjectCategoryScalarWhereInput
    data: XOR<ProjectCategoryUpdateManyMutationInput, ProjectCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProjectCreateWithoutProjectCategoriesInput = {
    id?: string
    slug: string
    title: string
    role?: string | null
    client?: string | null
    platform?: string | null
    description?: string | null
    longDescription?: string | null
    challenge?: string | null
    solution?: string | null
    content?: string | null
    features?: string | null
    thumbnailUrl?: string | null
    deployUrl?: string | null
    repositoryUrl?: string | null
    services?: ProjectCreateservicesInput | string[]
    screenshotUrls?: ProjectCreatescreenshotUrlsInput | string[]
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectTags?: ProjectTagCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectCategoriesInput = {
    id?: string
    slug: string
    title: string
    role?: string | null
    client?: string | null
    platform?: string | null
    description?: string | null
    longDescription?: string | null
    challenge?: string | null
    solution?: string | null
    content?: string | null
    features?: string | null
    thumbnailUrl?: string | null
    deployUrl?: string | null
    repositoryUrl?: string | null
    services?: ProjectCreateservicesInput | string[]
    screenshotUrls?: ProjectCreatescreenshotUrlsInput | string[]
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectTags?: ProjectTagUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectCategoriesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectCategoriesInput, ProjectUncheckedCreateWithoutProjectCategoriesInput>
  }

  export type CategoryCreateWithoutProjectCategoriesInput = {
    id?: string
    code: string
    displayName: string
    description?: string | null
    hexColor?: string | null
  }

  export type CategoryUncheckedCreateWithoutProjectCategoriesInput = {
    id?: string
    code: string
    displayName: string
    description?: string | null
    hexColor?: string | null
  }

  export type CategoryCreateOrConnectWithoutProjectCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProjectCategoriesInput, CategoryUncheckedCreateWithoutProjectCategoriesInput>
  }

  export type ProjectUpsertWithoutProjectCategoriesInput = {
    update: XOR<ProjectUpdateWithoutProjectCategoriesInput, ProjectUncheckedUpdateWithoutProjectCategoriesInput>
    create: XOR<ProjectCreateWithoutProjectCategoriesInput, ProjectUncheckedCreateWithoutProjectCategoriesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectCategoriesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectCategoriesInput, ProjectUncheckedUpdateWithoutProjectCategoriesInput>
  }

  export type ProjectUpdateWithoutProjectCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    challenge?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ProjectUpdateservicesInput | string[]
    screenshotUrls?: ProjectUpdatescreenshotUrlsInput | string[]
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectTags?: ProjectTagUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    challenge?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ProjectUpdateservicesInput | string[]
    screenshotUrls?: ProjectUpdatescreenshotUrlsInput | string[]
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectTags?: ProjectTagUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type CategoryUpsertWithoutProjectCategoriesInput = {
    update: XOR<CategoryUpdateWithoutProjectCategoriesInput, CategoryUncheckedUpdateWithoutProjectCategoriesInput>
    create: XOR<CategoryCreateWithoutProjectCategoriesInput, CategoryUncheckedCreateWithoutProjectCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProjectCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProjectCategoriesInput, CategoryUncheckedUpdateWithoutProjectCategoriesInput>
  }

  export type CategoryUpdateWithoutProjectCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateWithoutProjectCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateWithoutProjectTagsInput = {
    id?: string
    slug: string
    title: string
    role?: string | null
    client?: string | null
    platform?: string | null
    description?: string | null
    longDescription?: string | null
    challenge?: string | null
    solution?: string | null
    content?: string | null
    features?: string | null
    thumbnailUrl?: string | null
    deployUrl?: string | null
    repositoryUrl?: string | null
    services?: ProjectCreateservicesInput | string[]
    screenshotUrls?: ProjectCreatescreenshotUrlsInput | string[]
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectCategories?: ProjectCategoryCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectTagsInput = {
    id?: string
    slug: string
    title: string
    role?: string | null
    client?: string | null
    platform?: string | null
    description?: string | null
    longDescription?: string | null
    challenge?: string | null
    solution?: string | null
    content?: string | null
    features?: string | null
    thumbnailUrl?: string | null
    deployUrl?: string | null
    repositoryUrl?: string | null
    services?: ProjectCreateservicesInput | string[]
    screenshotUrls?: ProjectCreatescreenshotUrlsInput | string[]
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectCategories?: ProjectCategoryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectTagsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectTagsInput, ProjectUncheckedCreateWithoutProjectTagsInput>
  }

  export type TagCreateWithoutProjectTagsInput = {
    id?: string
    code: string
    displayName: string
    hexColor?: string | null
    posts?: PostCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutProjectTagsInput = {
    id?: string
    code: string
    displayName: string
    hexColor?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutProjectTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutProjectTagsInput, TagUncheckedCreateWithoutProjectTagsInput>
  }

  export type ProjectUpsertWithoutProjectTagsInput = {
    update: XOR<ProjectUpdateWithoutProjectTagsInput, ProjectUncheckedUpdateWithoutProjectTagsInput>
    create: XOR<ProjectCreateWithoutProjectTagsInput, ProjectUncheckedCreateWithoutProjectTagsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectTagsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectTagsInput, ProjectUncheckedUpdateWithoutProjectTagsInput>
  }

  export type ProjectUpdateWithoutProjectTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    challenge?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ProjectUpdateservicesInput | string[]
    screenshotUrls?: ProjectUpdatescreenshotUrlsInput | string[]
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectCategories?: ProjectCategoryUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    challenge?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ProjectUpdateservicesInput | string[]
    screenshotUrls?: ProjectUpdatescreenshotUrlsInput | string[]
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectCategories?: ProjectCategoryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TagUpsertWithoutProjectTagsInput = {
    update: XOR<TagUpdateWithoutProjectTagsInput, TagUncheckedUpdateWithoutProjectTagsInput>
    create: XOR<TagCreateWithoutProjectTagsInput, TagUncheckedCreateWithoutProjectTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutProjectTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutProjectTagsInput, TagUncheckedUpdateWithoutProjectTagsInput>
  }

  export type TagUpdateWithoutProjectTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutProjectTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type AuthorCreateWithoutPostsInput = {
    id?: string
    name: string
    role?: string | null
    avatarUrl?: string | null
    bio?: string | null
  }

  export type AuthorUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    role?: string | null
    avatarUrl?: string | null
    bio?: string | null
  }

  export type AuthorCreateOrConnectWithoutPostsInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutPostsInput, AuthorUncheckedCreateWithoutPostsInput>
  }

  export type TagCreateWithoutPostsInput = {
    id?: string
    code: string
    displayName: string
    hexColor?: string | null
    projectTags?: ProjectTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutPostsInput = {
    id?: string
    code: string
    displayName: string
    hexColor?: string | null
    projectTags?: ProjectTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutPostsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
  }

  export type PostCatalogCreateWithoutPostsInput = {
    id?: string
    name: string
    displayName: string
    description?: string | null
  }

  export type PostCatalogUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    displayName: string
    description?: string | null
  }

  export type PostCatalogCreateOrConnectWithoutPostsInput = {
    where: PostCatalogWhereUniqueInput
    create: XOR<PostCatalogCreateWithoutPostsInput, PostCatalogUncheckedCreateWithoutPostsInput>
  }

  export type AuthorUpsertWithoutPostsInput = {
    update: XOR<AuthorUpdateWithoutPostsInput, AuthorUncheckedUpdateWithoutPostsInput>
    create: XOR<AuthorCreateWithoutPostsInput, AuthorUncheckedCreateWithoutPostsInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutPostsInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutPostsInput, AuthorUncheckedUpdateWithoutPostsInput>
  }

  export type AuthorUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthorUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUpsertWithWhereUniqueWithoutPostsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutPostsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
  }

  export type TagUpdateManyWithWhereWithoutPostsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutPostsInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    code?: StringFilter<"Tag"> | string
    displayName?: StringFilter<"Tag"> | string
    hexColor?: StringNullableFilter<"Tag"> | string | null
  }

  export type PostCatalogUpsertWithWhereUniqueWithoutPostsInput = {
    where: PostCatalogWhereUniqueInput
    update: XOR<PostCatalogUpdateWithoutPostsInput, PostCatalogUncheckedUpdateWithoutPostsInput>
    create: XOR<PostCatalogCreateWithoutPostsInput, PostCatalogUncheckedCreateWithoutPostsInput>
  }

  export type PostCatalogUpdateWithWhereUniqueWithoutPostsInput = {
    where: PostCatalogWhereUniqueInput
    data: XOR<PostCatalogUpdateWithoutPostsInput, PostCatalogUncheckedUpdateWithoutPostsInput>
  }

  export type PostCatalogUpdateManyWithWhereWithoutPostsInput = {
    where: PostCatalogScalarWhereInput
    data: XOR<PostCatalogUpdateManyMutationInput, PostCatalogUncheckedUpdateManyWithoutPostsInput>
  }

  export type PostCatalogScalarWhereInput = {
    AND?: PostCatalogScalarWhereInput | PostCatalogScalarWhereInput[]
    OR?: PostCatalogScalarWhereInput[]
    NOT?: PostCatalogScalarWhereInput | PostCatalogScalarWhereInput[]
    id?: StringFilter<"PostCatalog"> | string
    name?: StringFilter<"PostCatalog"> | string
    displayName?: StringFilter<"PostCatalog"> | string
    description?: StringNullableFilter<"PostCatalog"> | string | null
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    thumbnailUrl?: string | null
    publishedAt?: Date | string
    isPublished?: boolean
    readingTime?: string | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutPostsInput
    catalogs?: PostCatalogCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    thumbnailUrl?: string | null
    publishedAt?: Date | string
    isPublished?: boolean
    readingTime?: string | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutPostsInput
    catalogs?: PostCatalogUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostCreateWithoutCatalogsInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    thumbnailUrl?: string | null
    publishedAt?: Date | string
    isPublished?: boolean
    readingTime?: string | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AuthorCreateNestedOneWithoutPostsInput
    tags?: TagCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCatalogsInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    thumbnailUrl?: string | null
    publishedAt?: Date | string
    isPublished?: boolean
    readingTime?: string | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    tags?: TagUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutCatalogsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCatalogsInput, PostUncheckedCreateWithoutCatalogsInput>
  }

  export type PostUpsertWithWhereUniqueWithoutCatalogsInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCatalogsInput, PostUncheckedUpdateWithoutCatalogsInput>
    create: XOR<PostCreateWithoutCatalogsInput, PostUncheckedCreateWithoutCatalogsInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCatalogsInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCatalogsInput, PostUncheckedUpdateWithoutCatalogsInput>
  }

  export type PostUpdateManyWithWhereWithoutCatalogsInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCatalogsInput>
  }

  export type ProjectTagCreateManyTagInput = {
    projectId: string
  }

  export type ProjectTagUpdateWithoutTagInput = {
    project?: ProjectUpdateOneRequiredWithoutProjectTagsNestedInput
  }

  export type ProjectTagUncheckedUpdateWithoutTagInput = {
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTagUncheckedUpdateManyWithoutTagInput = {
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readingTime?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutPostsNestedInput
    catalogs?: PostCatalogUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readingTime?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    catalogs?: PostCatalogUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readingTime?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCategoryCreateManyProjectInput = {
    categoryId: string
  }

  export type ProjectTagCreateManyProjectInput = {
    tagId: string
  }

  export type ProjectCategoryUpdateWithoutProjectInput = {
    category?: CategoryUpdateOneRequiredWithoutProjectCategoriesNestedInput
  }

  export type ProjectCategoryUncheckedUpdateWithoutProjectInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCategoryUncheckedUpdateManyWithoutProjectInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTagUpdateWithoutProjectInput = {
    tag?: TagUpdateOneRequiredWithoutProjectTagsNestedInput
  }

  export type ProjectTagUncheckedUpdateWithoutProjectInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTagUncheckedUpdateManyWithoutProjectInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCategoryCreateManyCategoryInput = {
    projectId: string
  }

  export type ProjectCategoryUpdateWithoutCategoryInput = {
    project?: ProjectUpdateOneRequiredWithoutProjectCategoriesNestedInput
  }

  export type ProjectCategoryUncheckedUpdateWithoutCategoryInput = {
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCategoryUncheckedUpdateManyWithoutCategoryInput = {
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type TagUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    projectTags?: ProjectTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
    projectTags?: ProjectTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    hexColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCatalogUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCatalogUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCatalogUncheckedUpdateManyWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    thumbnailUrl?: string | null
    publishedAt?: Date | string
    isPublished?: boolean
    readingTime?: string | null
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readingTime?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutPostsNestedInput
    catalogs?: PostCatalogUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readingTime?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutPostsNestedInput
    catalogs?: PostCatalogUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readingTime?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCatalogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readingTime?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutPostsNestedInput
    tags?: TagUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutCatalogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readingTime?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    tags?: TagUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateManyWithoutCatalogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readingTime?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }



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