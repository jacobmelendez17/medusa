
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
 * Model Level
 * 
 */
export type Level = $Result.DefaultSelection<Prisma.$LevelPayload>
/**
 * Model Vocabulary
 * 
 */
export type Vocabulary = $Result.DefaultSelection<Prisma.$VocabularyPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Levels
 * const levels = await prisma.level.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Levels
   * const levels = await prisma.level.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.level`: Exposes CRUD operations for the **Level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Levels
    * const levels = await prisma.level.findMany()
    * ```
    */
  get level(): Prisma.LevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vocabulary`: Exposes CRUD operations for the **Vocabulary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vocabularies
    * const vocabularies = await prisma.vocabulary.findMany()
    * ```
    */
  get vocabulary(): Prisma.VocabularyDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Level: 'Level',
    Vocabulary: 'Vocabulary'
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
      modelProps: "level" | "vocabulary"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Level: {
        payload: Prisma.$LevelPayload<ExtArgs>
        fields: Prisma.LevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findFirst: {
            args: Prisma.LevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findMany: {
            args: Prisma.LevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          create: {
            args: Prisma.LevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          createMany: {
            args: Prisma.LevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          delete: {
            args: Prisma.LevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          update: {
            args: Prisma.LevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          deleteMany: {
            args: Prisma.LevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          upsert: {
            args: Prisma.LevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          aggregate: {
            args: Prisma.LevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevel>
          }
          groupBy: {
            args: Prisma.LevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelCountArgs<ExtArgs>
            result: $Utils.Optional<LevelCountAggregateOutputType> | number
          }
        }
      }
      Vocabulary: {
        payload: Prisma.$VocabularyPayload<ExtArgs>
        fields: Prisma.VocabularyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VocabularyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VocabularyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          findFirst: {
            args: Prisma.VocabularyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VocabularyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          findMany: {
            args: Prisma.VocabularyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>[]
          }
          create: {
            args: Prisma.VocabularyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          createMany: {
            args: Prisma.VocabularyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VocabularyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>[]
          }
          delete: {
            args: Prisma.VocabularyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          update: {
            args: Prisma.VocabularyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          deleteMany: {
            args: Prisma.VocabularyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VocabularyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VocabularyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>[]
          }
          upsert: {
            args: Prisma.VocabularyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          aggregate: {
            args: Prisma.VocabularyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVocabulary>
          }
          groupBy: {
            args: Prisma.VocabularyGroupByArgs<ExtArgs>
            result: $Utils.Optional<VocabularyGroupByOutputType>[]
          }
          count: {
            args: Prisma.VocabularyCountArgs<ExtArgs>
            result: $Utils.Optional<VocabularyCountAggregateOutputType> | number
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    level?: LevelOmit
    vocabulary?: VocabularyOmit
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
   * Count Type LevelCountOutputType
   */

  export type LevelCountOutputType = {
    vocabulary: number
  }

  export type LevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocabulary?: boolean | LevelCountOutputTypeCountVocabularyArgs
  }

  // Custom InputTypes
  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelCountOutputType
     */
    select?: LevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountVocabularyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Level
   */

  export type AggregateLevel = {
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  export type LevelAvgAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type LevelSumAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type LevelMinAggregateOutputType = {
    id: number | null
    number: number | null
    title: string | null
    description: string | null
  }

  export type LevelMaxAggregateOutputType = {
    id: number | null
    number: number | null
    title: string | null
    description: string | null
  }

  export type LevelCountAggregateOutputType = {
    id: number
    number: number
    title: number
    description: number
    _all: number
  }


  export type LevelAvgAggregateInputType = {
    id?: true
    number?: true
  }

  export type LevelSumAggregateInputType = {
    id?: true
    number?: true
  }

  export type LevelMinAggregateInputType = {
    id?: true
    number?: true
    title?: true
    description?: true
  }

  export type LevelMaxAggregateInputType = {
    id?: true
    number?: true
    title?: true
    description?: true
  }

  export type LevelCountAggregateInputType = {
    id?: true
    number?: true
    title?: true
    description?: true
    _all?: true
  }

  export type LevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Level to aggregate.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Levels
    **/
    _count?: true | LevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelMaxAggregateInputType
  }

  export type GetLevelAggregateType<T extends LevelAggregateArgs> = {
        [P in keyof T & keyof AggregateLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevel[P]>
      : GetScalarType<T[P], AggregateLevel[P]>
  }




  export type LevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelWhereInput
    orderBy?: LevelOrderByWithAggregationInput | LevelOrderByWithAggregationInput[]
    by: LevelScalarFieldEnum[] | LevelScalarFieldEnum
    having?: LevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelCountAggregateInputType | true
    _avg?: LevelAvgAggregateInputType
    _sum?: LevelSumAggregateInputType
    _min?: LevelMinAggregateInputType
    _max?: LevelMaxAggregateInputType
  }

  export type LevelGroupByOutputType = {
    id: number
    number: number
    title: string | null
    description: string | null
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  type GetLevelGroupByPayload<T extends LevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelGroupByOutputType[P]>
            : GetScalarType<T[P], LevelGroupByOutputType[P]>
        }
      >
    >


  export type LevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    title?: boolean
    description?: boolean
    vocabulary?: boolean | Level$vocabularyArgs<ExtArgs>
    _count?: boolean | LevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["level"]>

  export type LevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    title?: boolean
    description?: boolean
  }, ExtArgs["result"]["level"]>

  export type LevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    title?: boolean
    description?: boolean
  }, ExtArgs["result"]["level"]>

  export type LevelSelectScalar = {
    id?: boolean
    number?: boolean
    title?: boolean
    description?: boolean
  }

  export type LevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "title" | "description", ExtArgs["result"]["level"]>
  export type LevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocabulary?: boolean | Level$vocabularyArgs<ExtArgs>
    _count?: boolean | LevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Level"
    objects: {
      vocabulary: Prisma.$VocabularyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: number
      title: string | null
      description: string | null
    }, ExtArgs["result"]["level"]>
    composites: {}
  }

  type LevelGetPayload<S extends boolean | null | undefined | LevelDefaultArgs> = $Result.GetResult<Prisma.$LevelPayload, S>

  type LevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelCountAggregateInputType | true
    }

  export interface LevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Level'], meta: { name: 'Level' } }
    /**
     * Find zero or one Level that matches the filter.
     * @param {LevelFindUniqueArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelFindUniqueArgs>(args: SelectSubset<T, LevelFindUniqueArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Level that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelFindUniqueOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelFindFirstArgs>(args?: SelectSubset<T, LevelFindFirstArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Levels
     * const levels = await prisma.level.findMany()
     * 
     * // Get first 10 Levels
     * const levels = await prisma.level.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelWithIdOnly = await prisma.level.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelFindManyArgs>(args?: SelectSubset<T, LevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Level.
     * @param {LevelCreateArgs} args - Arguments to create a Level.
     * @example
     * // Create one Level
     * const Level = await prisma.level.create({
     *   data: {
     *     // ... data to create a Level
     *   }
     * })
     * 
     */
    create<T extends LevelCreateArgs>(args: SelectSubset<T, LevelCreateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Levels.
     * @param {LevelCreateManyArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelCreateManyArgs>(args?: SelectSubset<T, LevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Levels and returns the data saved in the database.
     * @param {LevelCreateManyAndReturnArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Levels and only return the `id`
     * const levelWithIdOnly = await prisma.level.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LevelCreateManyAndReturnArgs>(args?: SelectSubset<T, LevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Level.
     * @param {LevelDeleteArgs} args - Arguments to delete one Level.
     * @example
     * // Delete one Level
     * const Level = await prisma.level.delete({
     *   where: {
     *     // ... filter to delete one Level
     *   }
     * })
     * 
     */
    delete<T extends LevelDeleteArgs>(args: SelectSubset<T, LevelDeleteArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Level.
     * @param {LevelUpdateArgs} args - Arguments to update one Level.
     * @example
     * // Update one Level
     * const level = await prisma.level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelUpdateArgs>(args: SelectSubset<T, LevelUpdateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Levels.
     * @param {LevelDeleteManyArgs} args - Arguments to filter Levels to delete.
     * @example
     * // Delete a few Levels
     * const { count } = await prisma.level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelDeleteManyArgs>(args?: SelectSubset<T, LevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelUpdateManyArgs>(args: SelectSubset<T, LevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels and returns the data updated in the database.
     * @param {LevelUpdateManyAndReturnArgs} args - Arguments to update many Levels.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Levels and only return the `id`
     * const levelWithIdOnly = await prisma.level.updateManyAndReturn({
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
    updateManyAndReturn<T extends LevelUpdateManyAndReturnArgs>(args: SelectSubset<T, LevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Level.
     * @param {LevelUpsertArgs} args - Arguments to update or create a Level.
     * @example
     * // Update or create a Level
     * const level = await prisma.level.upsert({
     *   create: {
     *     // ... data to create a Level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Level we want to update
     *   }
     * })
     */
    upsert<T extends LevelUpsertArgs>(args: SelectSubset<T, LevelUpsertArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelCountArgs} args - Arguments to filter Levels to count.
     * @example
     * // Count the number of Levels
     * const count = await prisma.level.count({
     *   where: {
     *     // ... the filter for the Levels we want to count
     *   }
     * })
    **/
    count<T extends LevelCountArgs>(
      args?: Subset<T, LevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LevelAggregateArgs>(args: Subset<T, LevelAggregateArgs>): Prisma.PrismaPromise<GetLevelAggregateType<T>>

    /**
     * Group by Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelGroupByArgs} args - Group by arguments.
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
      T extends LevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelGroupByArgs['orderBy'] }
        : { orderBy?: LevelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Level model
   */
  readonly fields: LevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vocabulary<T extends Level$vocabularyArgs<ExtArgs> = {}>(args?: Subset<T, Level$vocabularyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Level model
   */
  interface LevelFieldRefs {
    readonly id: FieldRef<"Level", 'Int'>
    readonly number: FieldRef<"Level", 'Int'>
    readonly title: FieldRef<"Level", 'String'>
    readonly description: FieldRef<"Level", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Level findUnique
   */
  export type LevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findUniqueOrThrow
   */
  export type LevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findFirst
   */
  export type LevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findFirstOrThrow
   */
  export type LevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findMany
   */
  export type LevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Levels to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level create
   */
  export type LevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to create a Level.
     */
    data: XOR<LevelCreateInput, LevelUncheckedCreateInput>
  }

  /**
   * Level createMany
   */
  export type LevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level createManyAndReturn
   */
  export type LevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level update
   */
  export type LevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to update a Level.
     */
    data: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
    /**
     * Choose, which Level to update.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level updateMany
   */
  export type LevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level updateManyAndReturn
   */
  export type LevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level upsert
   */
  export type LevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The filter to search for the Level to update in case it exists.
     */
    where: LevelWhereUniqueInput
    /**
     * In case the Level found by the `where` argument doesn't exist, create a new Level with this data.
     */
    create: XOR<LevelCreateInput, LevelUncheckedCreateInput>
    /**
     * In case the Level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
  }

  /**
   * Level delete
   */
  export type LevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter which Level to delete.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level deleteMany
   */
  export type LevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Levels to delete
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to delete.
     */
    limit?: number
  }

  /**
   * Level.vocabulary
   */
  export type Level$vocabularyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    where?: VocabularyWhereInput
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    cursor?: VocabularyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * Level without action
   */
  export type LevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
  }


  /**
   * Model Vocabulary
   */

  export type AggregateVocabulary = {
    _count: VocabularyCountAggregateOutputType | null
    _avg: VocabularyAvgAggregateOutputType | null
    _sum: VocabularySumAggregateOutputType | null
    _min: VocabularyMinAggregateOutputType | null
    _max: VocabularyMaxAggregateOutputType | null
  }

  export type VocabularyAvgAggregateOutputType = {
    id: number | null
    difficulty: number | null
    level_id: number | null
  }

  export type VocabularySumAggregateOutputType = {
    id: number | null
    difficulty: number | null
    level_id: number | null
  }

  export type VocabularyMinAggregateOutputType = {
    id: number | null
    spanish: string | null
    english: string | null
    part_of_speech: string | null
    difficulty: number | null
    example_sentence: string | null
    level_id: number | null
  }

  export type VocabularyMaxAggregateOutputType = {
    id: number | null
    spanish: string | null
    english: string | null
    part_of_speech: string | null
    difficulty: number | null
    example_sentence: string | null
    level_id: number | null
  }

  export type VocabularyCountAggregateOutputType = {
    id: number
    spanish: number
    english: number
    part_of_speech: number
    difficulty: number
    example_sentence: number
    level_id: number
    _all: number
  }


  export type VocabularyAvgAggregateInputType = {
    id?: true
    difficulty?: true
    level_id?: true
  }

  export type VocabularySumAggregateInputType = {
    id?: true
    difficulty?: true
    level_id?: true
  }

  export type VocabularyMinAggregateInputType = {
    id?: true
    spanish?: true
    english?: true
    part_of_speech?: true
    difficulty?: true
    example_sentence?: true
    level_id?: true
  }

  export type VocabularyMaxAggregateInputType = {
    id?: true
    spanish?: true
    english?: true
    part_of_speech?: true
    difficulty?: true
    example_sentence?: true
    level_id?: true
  }

  export type VocabularyCountAggregateInputType = {
    id?: true
    spanish?: true
    english?: true
    part_of_speech?: true
    difficulty?: true
    example_sentence?: true
    level_id?: true
    _all?: true
  }

  export type VocabularyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vocabulary to aggregate.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vocabularies
    **/
    _count?: true | VocabularyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VocabularyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VocabularySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VocabularyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VocabularyMaxAggregateInputType
  }

  export type GetVocabularyAggregateType<T extends VocabularyAggregateArgs> = {
        [P in keyof T & keyof AggregateVocabulary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocabulary[P]>
      : GetScalarType<T[P], AggregateVocabulary[P]>
  }




  export type VocabularyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyWhereInput
    orderBy?: VocabularyOrderByWithAggregationInput | VocabularyOrderByWithAggregationInput[]
    by: VocabularyScalarFieldEnum[] | VocabularyScalarFieldEnum
    having?: VocabularyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VocabularyCountAggregateInputType | true
    _avg?: VocabularyAvgAggregateInputType
    _sum?: VocabularySumAggregateInputType
    _min?: VocabularyMinAggregateInputType
    _max?: VocabularyMaxAggregateInputType
  }

  export type VocabularyGroupByOutputType = {
    id: number
    spanish: string
    english: string
    part_of_speech: string
    difficulty: number
    example_sentence: string | null
    level_id: number
    _count: VocabularyCountAggregateOutputType | null
    _avg: VocabularyAvgAggregateOutputType | null
    _sum: VocabularySumAggregateOutputType | null
    _min: VocabularyMinAggregateOutputType | null
    _max: VocabularyMaxAggregateOutputType | null
  }

  type GetVocabularyGroupByPayload<T extends VocabularyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VocabularyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VocabularyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VocabularyGroupByOutputType[P]>
            : GetScalarType<T[P], VocabularyGroupByOutputType[P]>
        }
      >
    >


  export type VocabularySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spanish?: boolean
    english?: boolean
    part_of_speech?: boolean
    difficulty?: boolean
    example_sentence?: boolean
    level_id?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabulary"]>

  export type VocabularySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spanish?: boolean
    english?: boolean
    part_of_speech?: boolean
    difficulty?: boolean
    example_sentence?: boolean
    level_id?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabulary"]>

  export type VocabularySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spanish?: boolean
    english?: boolean
    part_of_speech?: boolean
    difficulty?: boolean
    example_sentence?: boolean
    level_id?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabulary"]>

  export type VocabularySelectScalar = {
    id?: boolean
    spanish?: boolean
    english?: boolean
    part_of_speech?: boolean
    difficulty?: boolean
    example_sentence?: boolean
    level_id?: boolean
  }

  export type VocabularyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "spanish" | "english" | "part_of_speech" | "difficulty" | "example_sentence" | "level_id", ExtArgs["result"]["vocabulary"]>
  export type VocabularyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type VocabularyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type VocabularyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }

  export type $VocabularyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vocabulary"
    objects: {
      level: Prisma.$LevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      spanish: string
      english: string
      part_of_speech: string
      difficulty: number
      example_sentence: string | null
      level_id: number
    }, ExtArgs["result"]["vocabulary"]>
    composites: {}
  }

  type VocabularyGetPayload<S extends boolean | null | undefined | VocabularyDefaultArgs> = $Result.GetResult<Prisma.$VocabularyPayload, S>

  type VocabularyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VocabularyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VocabularyCountAggregateInputType | true
    }

  export interface VocabularyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vocabulary'], meta: { name: 'Vocabulary' } }
    /**
     * Find zero or one Vocabulary that matches the filter.
     * @param {VocabularyFindUniqueArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VocabularyFindUniqueArgs>(args: SelectSubset<T, VocabularyFindUniqueArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vocabulary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VocabularyFindUniqueOrThrowArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VocabularyFindUniqueOrThrowArgs>(args: SelectSubset<T, VocabularyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocabulary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyFindFirstArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VocabularyFindFirstArgs>(args?: SelectSubset<T, VocabularyFindFirstArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocabulary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyFindFirstOrThrowArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VocabularyFindFirstOrThrowArgs>(args?: SelectSubset<T, VocabularyFindFirstOrThrowArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vocabularies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vocabularies
     * const vocabularies = await prisma.vocabulary.findMany()
     * 
     * // Get first 10 Vocabularies
     * const vocabularies = await prisma.vocabulary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vocabularyWithIdOnly = await prisma.vocabulary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VocabularyFindManyArgs>(args?: SelectSubset<T, VocabularyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vocabulary.
     * @param {VocabularyCreateArgs} args - Arguments to create a Vocabulary.
     * @example
     * // Create one Vocabulary
     * const Vocabulary = await prisma.vocabulary.create({
     *   data: {
     *     // ... data to create a Vocabulary
     *   }
     * })
     * 
     */
    create<T extends VocabularyCreateArgs>(args: SelectSubset<T, VocabularyCreateArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vocabularies.
     * @param {VocabularyCreateManyArgs} args - Arguments to create many Vocabularies.
     * @example
     * // Create many Vocabularies
     * const vocabulary = await prisma.vocabulary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VocabularyCreateManyArgs>(args?: SelectSubset<T, VocabularyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vocabularies and returns the data saved in the database.
     * @param {VocabularyCreateManyAndReturnArgs} args - Arguments to create many Vocabularies.
     * @example
     * // Create many Vocabularies
     * const vocabulary = await prisma.vocabulary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vocabularies and only return the `id`
     * const vocabularyWithIdOnly = await prisma.vocabulary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VocabularyCreateManyAndReturnArgs>(args?: SelectSubset<T, VocabularyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vocabulary.
     * @param {VocabularyDeleteArgs} args - Arguments to delete one Vocabulary.
     * @example
     * // Delete one Vocabulary
     * const Vocabulary = await prisma.vocabulary.delete({
     *   where: {
     *     // ... filter to delete one Vocabulary
     *   }
     * })
     * 
     */
    delete<T extends VocabularyDeleteArgs>(args: SelectSubset<T, VocabularyDeleteArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vocabulary.
     * @param {VocabularyUpdateArgs} args - Arguments to update one Vocabulary.
     * @example
     * // Update one Vocabulary
     * const vocabulary = await prisma.vocabulary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VocabularyUpdateArgs>(args: SelectSubset<T, VocabularyUpdateArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vocabularies.
     * @param {VocabularyDeleteManyArgs} args - Arguments to filter Vocabularies to delete.
     * @example
     * // Delete a few Vocabularies
     * const { count } = await prisma.vocabulary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VocabularyDeleteManyArgs>(args?: SelectSubset<T, VocabularyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vocabularies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vocabularies
     * const vocabulary = await prisma.vocabulary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VocabularyUpdateManyArgs>(args: SelectSubset<T, VocabularyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vocabularies and returns the data updated in the database.
     * @param {VocabularyUpdateManyAndReturnArgs} args - Arguments to update many Vocabularies.
     * @example
     * // Update many Vocabularies
     * const vocabulary = await prisma.vocabulary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vocabularies and only return the `id`
     * const vocabularyWithIdOnly = await prisma.vocabulary.updateManyAndReturn({
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
    updateManyAndReturn<T extends VocabularyUpdateManyAndReturnArgs>(args: SelectSubset<T, VocabularyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vocabulary.
     * @param {VocabularyUpsertArgs} args - Arguments to update or create a Vocabulary.
     * @example
     * // Update or create a Vocabulary
     * const vocabulary = await prisma.vocabulary.upsert({
     *   create: {
     *     // ... data to create a Vocabulary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vocabulary we want to update
     *   }
     * })
     */
    upsert<T extends VocabularyUpsertArgs>(args: SelectSubset<T, VocabularyUpsertArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vocabularies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyCountArgs} args - Arguments to filter Vocabularies to count.
     * @example
     * // Count the number of Vocabularies
     * const count = await prisma.vocabulary.count({
     *   where: {
     *     // ... the filter for the Vocabularies we want to count
     *   }
     * })
    **/
    count<T extends VocabularyCountArgs>(
      args?: Subset<T, VocabularyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VocabularyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vocabulary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VocabularyAggregateArgs>(args: Subset<T, VocabularyAggregateArgs>): Prisma.PrismaPromise<GetVocabularyAggregateType<T>>

    /**
     * Group by Vocabulary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyGroupByArgs} args - Group by arguments.
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
      T extends VocabularyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VocabularyGroupByArgs['orderBy'] }
        : { orderBy?: VocabularyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VocabularyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocabularyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vocabulary model
   */
  readonly fields: VocabularyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vocabulary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VocabularyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Vocabulary model
   */
  interface VocabularyFieldRefs {
    readonly id: FieldRef<"Vocabulary", 'Int'>
    readonly spanish: FieldRef<"Vocabulary", 'String'>
    readonly english: FieldRef<"Vocabulary", 'String'>
    readonly part_of_speech: FieldRef<"Vocabulary", 'String'>
    readonly difficulty: FieldRef<"Vocabulary", 'Int'>
    readonly example_sentence: FieldRef<"Vocabulary", 'String'>
    readonly level_id: FieldRef<"Vocabulary", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vocabulary findUnique
   */
  export type VocabularyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary findUniqueOrThrow
   */
  export type VocabularyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary findFirst
   */
  export type VocabularyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vocabularies.
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vocabularies.
     */
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * Vocabulary findFirstOrThrow
   */
  export type VocabularyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vocabularies.
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vocabularies.
     */
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * Vocabulary findMany
   */
  export type VocabularyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabularies to fetch.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vocabularies.
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * Vocabulary create
   */
  export type VocabularyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * The data needed to create a Vocabulary.
     */
    data: XOR<VocabularyCreateInput, VocabularyUncheckedCreateInput>
  }

  /**
   * Vocabulary createMany
   */
  export type VocabularyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vocabularies.
     */
    data: VocabularyCreateManyInput | VocabularyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vocabulary createManyAndReturn
   */
  export type VocabularyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * The data used to create many Vocabularies.
     */
    data: VocabularyCreateManyInput | VocabularyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vocabulary update
   */
  export type VocabularyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * The data needed to update a Vocabulary.
     */
    data: XOR<VocabularyUpdateInput, VocabularyUncheckedUpdateInput>
    /**
     * Choose, which Vocabulary to update.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary updateMany
   */
  export type VocabularyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vocabularies.
     */
    data: XOR<VocabularyUpdateManyMutationInput, VocabularyUncheckedUpdateManyInput>
    /**
     * Filter which Vocabularies to update
     */
    where?: VocabularyWhereInput
    /**
     * Limit how many Vocabularies to update.
     */
    limit?: number
  }

  /**
   * Vocabulary updateManyAndReturn
   */
  export type VocabularyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * The data used to update Vocabularies.
     */
    data: XOR<VocabularyUpdateManyMutationInput, VocabularyUncheckedUpdateManyInput>
    /**
     * Filter which Vocabularies to update
     */
    where?: VocabularyWhereInput
    /**
     * Limit how many Vocabularies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vocabulary upsert
   */
  export type VocabularyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * The filter to search for the Vocabulary to update in case it exists.
     */
    where: VocabularyWhereUniqueInput
    /**
     * In case the Vocabulary found by the `where` argument doesn't exist, create a new Vocabulary with this data.
     */
    create: XOR<VocabularyCreateInput, VocabularyUncheckedCreateInput>
    /**
     * In case the Vocabulary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VocabularyUpdateInput, VocabularyUncheckedUpdateInput>
  }

  /**
   * Vocabulary delete
   */
  export type VocabularyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter which Vocabulary to delete.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary deleteMany
   */
  export type VocabularyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vocabularies to delete
     */
    where?: VocabularyWhereInput
    /**
     * Limit how many Vocabularies to delete.
     */
    limit?: number
  }

  /**
   * Vocabulary without action
   */
  export type VocabularyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
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


  export const LevelScalarFieldEnum: {
    id: 'id',
    number: 'number',
    title: 'title',
    description: 'description'
  };

  export type LevelScalarFieldEnum = (typeof LevelScalarFieldEnum)[keyof typeof LevelScalarFieldEnum]


  export const VocabularyScalarFieldEnum: {
    id: 'id',
    spanish: 'spanish',
    english: 'english',
    part_of_speech: 'part_of_speech',
    difficulty: 'difficulty',
    example_sentence: 'example_sentence',
    level_id: 'level_id'
  };

  export type VocabularyScalarFieldEnum = (typeof VocabularyScalarFieldEnum)[keyof typeof VocabularyScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LevelWhereInput = {
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    id?: IntFilter<"Level"> | number
    number?: IntFilter<"Level"> | number
    title?: StringNullableFilter<"Level"> | string | null
    description?: StringNullableFilter<"Level"> | string | null
    vocabulary?: VocabularyListRelationFilter
  }

  export type LevelOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    vocabulary?: VocabularyOrderByRelationAggregateInput
  }

  export type LevelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    number?: number
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    title?: StringNullableFilter<"Level"> | string | null
    description?: StringNullableFilter<"Level"> | string | null
    vocabulary?: VocabularyListRelationFilter
  }, "id" | "number">

  export type LevelOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: LevelCountOrderByAggregateInput
    _avg?: LevelAvgOrderByAggregateInput
    _max?: LevelMaxOrderByAggregateInput
    _min?: LevelMinOrderByAggregateInput
    _sum?: LevelSumOrderByAggregateInput
  }

  export type LevelScalarWhereWithAggregatesInput = {
    AND?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    OR?: LevelScalarWhereWithAggregatesInput[]
    NOT?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Level"> | number
    number?: IntWithAggregatesFilter<"Level"> | number
    title?: StringNullableWithAggregatesFilter<"Level"> | string | null
    description?: StringNullableWithAggregatesFilter<"Level"> | string | null
  }

  export type VocabularyWhereInput = {
    AND?: VocabularyWhereInput | VocabularyWhereInput[]
    OR?: VocabularyWhereInput[]
    NOT?: VocabularyWhereInput | VocabularyWhereInput[]
    id?: IntFilter<"Vocabulary"> | number
    spanish?: StringFilter<"Vocabulary"> | string
    english?: StringFilter<"Vocabulary"> | string
    part_of_speech?: StringFilter<"Vocabulary"> | string
    difficulty?: IntFilter<"Vocabulary"> | number
    example_sentence?: StringNullableFilter<"Vocabulary"> | string | null
    level_id?: IntFilter<"Vocabulary"> | number
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }

  export type VocabularyOrderByWithRelationInput = {
    id?: SortOrder
    spanish?: SortOrder
    english?: SortOrder
    part_of_speech?: SortOrder
    difficulty?: SortOrder
    example_sentence?: SortOrderInput | SortOrder
    level_id?: SortOrder
    level?: LevelOrderByWithRelationInput
  }

  export type VocabularyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VocabularyWhereInput | VocabularyWhereInput[]
    OR?: VocabularyWhereInput[]
    NOT?: VocabularyWhereInput | VocabularyWhereInput[]
    spanish?: StringFilter<"Vocabulary"> | string
    english?: StringFilter<"Vocabulary"> | string
    part_of_speech?: StringFilter<"Vocabulary"> | string
    difficulty?: IntFilter<"Vocabulary"> | number
    example_sentence?: StringNullableFilter<"Vocabulary"> | string | null
    level_id?: IntFilter<"Vocabulary"> | number
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }, "id">

  export type VocabularyOrderByWithAggregationInput = {
    id?: SortOrder
    spanish?: SortOrder
    english?: SortOrder
    part_of_speech?: SortOrder
    difficulty?: SortOrder
    example_sentence?: SortOrderInput | SortOrder
    level_id?: SortOrder
    _count?: VocabularyCountOrderByAggregateInput
    _avg?: VocabularyAvgOrderByAggregateInput
    _max?: VocabularyMaxOrderByAggregateInput
    _min?: VocabularyMinOrderByAggregateInput
    _sum?: VocabularySumOrderByAggregateInput
  }

  export type VocabularyScalarWhereWithAggregatesInput = {
    AND?: VocabularyScalarWhereWithAggregatesInput | VocabularyScalarWhereWithAggregatesInput[]
    OR?: VocabularyScalarWhereWithAggregatesInput[]
    NOT?: VocabularyScalarWhereWithAggregatesInput | VocabularyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vocabulary"> | number
    spanish?: StringWithAggregatesFilter<"Vocabulary"> | string
    english?: StringWithAggregatesFilter<"Vocabulary"> | string
    part_of_speech?: StringWithAggregatesFilter<"Vocabulary"> | string
    difficulty?: IntWithAggregatesFilter<"Vocabulary"> | number
    example_sentence?: StringNullableWithAggregatesFilter<"Vocabulary"> | string | null
    level_id?: IntWithAggregatesFilter<"Vocabulary"> | number
  }

  export type LevelCreateInput = {
    number: number
    title?: string | null
    description?: string | null
    vocabulary?: VocabularyCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateInput = {
    id?: number
    number: number
    title?: string | null
    description?: string | null
    vocabulary?: VocabularyUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    vocabulary?: VocabularyUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    vocabulary?: VocabularyUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type LevelCreateManyInput = {
    id?: number
    number: number
    title?: string | null
    description?: string | null
  }

  export type LevelUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LevelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VocabularyCreateInput = {
    spanish: string
    english: string
    part_of_speech: string
    difficulty: number
    example_sentence?: string | null
    level: LevelCreateNestedOneWithoutVocabularyInput
  }

  export type VocabularyUncheckedCreateInput = {
    id?: number
    spanish: string
    english: string
    part_of_speech: string
    difficulty: number
    example_sentence?: string | null
    level_id: number
  }

  export type VocabularyUpdateInput = {
    spanish?: StringFieldUpdateOperationsInput | string
    english?: StringFieldUpdateOperationsInput | string
    part_of_speech?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    example_sentence?: NullableStringFieldUpdateOperationsInput | string | null
    level?: LevelUpdateOneRequiredWithoutVocabularyNestedInput
  }

  export type VocabularyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    spanish?: StringFieldUpdateOperationsInput | string
    english?: StringFieldUpdateOperationsInput | string
    part_of_speech?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    example_sentence?: NullableStringFieldUpdateOperationsInput | string | null
    level_id?: IntFieldUpdateOperationsInput | number
  }

  export type VocabularyCreateManyInput = {
    id?: number
    spanish: string
    english: string
    part_of_speech: string
    difficulty: number
    example_sentence?: string | null
    level_id: number
  }

  export type VocabularyUpdateManyMutationInput = {
    spanish?: StringFieldUpdateOperationsInput | string
    english?: StringFieldUpdateOperationsInput | string
    part_of_speech?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    example_sentence?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VocabularyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    spanish?: StringFieldUpdateOperationsInput | string
    english?: StringFieldUpdateOperationsInput | string
    part_of_speech?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    example_sentence?: NullableStringFieldUpdateOperationsInput | string | null
    level_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type VocabularyListRelationFilter = {
    every?: VocabularyWhereInput
    some?: VocabularyWhereInput
    none?: VocabularyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VocabularyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LevelCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type LevelAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type LevelMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type LevelMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type LevelSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type LevelScalarRelationFilter = {
    is?: LevelWhereInput
    isNot?: LevelWhereInput
  }

  export type VocabularyCountOrderByAggregateInput = {
    id?: SortOrder
    spanish?: SortOrder
    english?: SortOrder
    part_of_speech?: SortOrder
    difficulty?: SortOrder
    example_sentence?: SortOrder
    level_id?: SortOrder
  }

  export type VocabularyAvgOrderByAggregateInput = {
    id?: SortOrder
    difficulty?: SortOrder
    level_id?: SortOrder
  }

  export type VocabularyMaxOrderByAggregateInput = {
    id?: SortOrder
    spanish?: SortOrder
    english?: SortOrder
    part_of_speech?: SortOrder
    difficulty?: SortOrder
    example_sentence?: SortOrder
    level_id?: SortOrder
  }

  export type VocabularyMinOrderByAggregateInput = {
    id?: SortOrder
    spanish?: SortOrder
    english?: SortOrder
    part_of_speech?: SortOrder
    difficulty?: SortOrder
    example_sentence?: SortOrder
    level_id?: SortOrder
  }

  export type VocabularySumOrderByAggregateInput = {
    id?: SortOrder
    difficulty?: SortOrder
    level_id?: SortOrder
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

  export type VocabularyCreateNestedManyWithoutLevelInput = {
    create?: XOR<VocabularyCreateWithoutLevelInput, VocabularyUncheckedCreateWithoutLevelInput> | VocabularyCreateWithoutLevelInput[] | VocabularyUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutLevelInput | VocabularyCreateOrConnectWithoutLevelInput[]
    createMany?: VocabularyCreateManyLevelInputEnvelope
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
  }

  export type VocabularyUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<VocabularyCreateWithoutLevelInput, VocabularyUncheckedCreateWithoutLevelInput> | VocabularyCreateWithoutLevelInput[] | VocabularyUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutLevelInput | VocabularyCreateOrConnectWithoutLevelInput[]
    createMany?: VocabularyCreateManyLevelInputEnvelope
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VocabularyUpdateManyWithoutLevelNestedInput = {
    create?: XOR<VocabularyCreateWithoutLevelInput, VocabularyUncheckedCreateWithoutLevelInput> | VocabularyCreateWithoutLevelInput[] | VocabularyUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutLevelInput | VocabularyCreateOrConnectWithoutLevelInput[]
    upsert?: VocabularyUpsertWithWhereUniqueWithoutLevelInput | VocabularyUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: VocabularyCreateManyLevelInputEnvelope
    set?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    disconnect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    delete?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    update?: VocabularyUpdateWithWhereUniqueWithoutLevelInput | VocabularyUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: VocabularyUpdateManyWithWhereWithoutLevelInput | VocabularyUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
  }

  export type VocabularyUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<VocabularyCreateWithoutLevelInput, VocabularyUncheckedCreateWithoutLevelInput> | VocabularyCreateWithoutLevelInput[] | VocabularyUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutLevelInput | VocabularyCreateOrConnectWithoutLevelInput[]
    upsert?: VocabularyUpsertWithWhereUniqueWithoutLevelInput | VocabularyUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: VocabularyCreateManyLevelInputEnvelope
    set?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    disconnect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    delete?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    update?: VocabularyUpdateWithWhereUniqueWithoutLevelInput | VocabularyUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: VocabularyUpdateManyWithWhereWithoutLevelInput | VocabularyUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
  }

  export type LevelCreateNestedOneWithoutVocabularyInput = {
    create?: XOR<LevelCreateWithoutVocabularyInput, LevelUncheckedCreateWithoutVocabularyInput>
    connectOrCreate?: LevelCreateOrConnectWithoutVocabularyInput
    connect?: LevelWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type LevelUpdateOneRequiredWithoutVocabularyNestedInput = {
    create?: XOR<LevelCreateWithoutVocabularyInput, LevelUncheckedCreateWithoutVocabularyInput>
    connectOrCreate?: LevelCreateOrConnectWithoutVocabularyInput
    upsert?: LevelUpsertWithoutVocabularyInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutVocabularyInput, LevelUpdateWithoutVocabularyInput>, LevelUncheckedUpdateWithoutVocabularyInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type VocabularyCreateWithoutLevelInput = {
    spanish: string
    english: string
    part_of_speech: string
    difficulty: number
    example_sentence?: string | null
  }

  export type VocabularyUncheckedCreateWithoutLevelInput = {
    id?: number
    spanish: string
    english: string
    part_of_speech: string
    difficulty: number
    example_sentence?: string | null
  }

  export type VocabularyCreateOrConnectWithoutLevelInput = {
    where: VocabularyWhereUniqueInput
    create: XOR<VocabularyCreateWithoutLevelInput, VocabularyUncheckedCreateWithoutLevelInput>
  }

  export type VocabularyCreateManyLevelInputEnvelope = {
    data: VocabularyCreateManyLevelInput | VocabularyCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type VocabularyUpsertWithWhereUniqueWithoutLevelInput = {
    where: VocabularyWhereUniqueInput
    update: XOR<VocabularyUpdateWithoutLevelInput, VocabularyUncheckedUpdateWithoutLevelInput>
    create: XOR<VocabularyCreateWithoutLevelInput, VocabularyUncheckedCreateWithoutLevelInput>
  }

  export type VocabularyUpdateWithWhereUniqueWithoutLevelInput = {
    where: VocabularyWhereUniqueInput
    data: XOR<VocabularyUpdateWithoutLevelInput, VocabularyUncheckedUpdateWithoutLevelInput>
  }

  export type VocabularyUpdateManyWithWhereWithoutLevelInput = {
    where: VocabularyScalarWhereInput
    data: XOR<VocabularyUpdateManyMutationInput, VocabularyUncheckedUpdateManyWithoutLevelInput>
  }

  export type VocabularyScalarWhereInput = {
    AND?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
    OR?: VocabularyScalarWhereInput[]
    NOT?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
    id?: IntFilter<"Vocabulary"> | number
    spanish?: StringFilter<"Vocabulary"> | string
    english?: StringFilter<"Vocabulary"> | string
    part_of_speech?: StringFilter<"Vocabulary"> | string
    difficulty?: IntFilter<"Vocabulary"> | number
    example_sentence?: StringNullableFilter<"Vocabulary"> | string | null
    level_id?: IntFilter<"Vocabulary"> | number
  }

  export type LevelCreateWithoutVocabularyInput = {
    number: number
    title?: string | null
    description?: string | null
  }

  export type LevelUncheckedCreateWithoutVocabularyInput = {
    id?: number
    number: number
    title?: string | null
    description?: string | null
  }

  export type LevelCreateOrConnectWithoutVocabularyInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutVocabularyInput, LevelUncheckedCreateWithoutVocabularyInput>
  }

  export type LevelUpsertWithoutVocabularyInput = {
    update: XOR<LevelUpdateWithoutVocabularyInput, LevelUncheckedUpdateWithoutVocabularyInput>
    create: XOR<LevelCreateWithoutVocabularyInput, LevelUncheckedCreateWithoutVocabularyInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutVocabularyInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutVocabularyInput, LevelUncheckedUpdateWithoutVocabularyInput>
  }

  export type LevelUpdateWithoutVocabularyInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LevelUncheckedUpdateWithoutVocabularyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VocabularyCreateManyLevelInput = {
    id?: number
    spanish: string
    english: string
    part_of_speech: string
    difficulty: number
    example_sentence?: string | null
  }

  export type VocabularyUpdateWithoutLevelInput = {
    spanish?: StringFieldUpdateOperationsInput | string
    english?: StringFieldUpdateOperationsInput | string
    part_of_speech?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    example_sentence?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VocabularyUncheckedUpdateWithoutLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    spanish?: StringFieldUpdateOperationsInput | string
    english?: StringFieldUpdateOperationsInput | string
    part_of_speech?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    example_sentence?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VocabularyUncheckedUpdateManyWithoutLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    spanish?: StringFieldUpdateOperationsInput | string
    english?: StringFieldUpdateOperationsInput | string
    part_of_speech?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    example_sentence?: NullableStringFieldUpdateOperationsInput | string | null
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