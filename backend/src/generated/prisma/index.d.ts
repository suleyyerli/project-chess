
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model friends
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type friends = $Result.DefaultSelection<Prisma.$friendsPayload>
/**
 * Model match_players
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type match_players = $Result.DefaultSelection<Prisma.$match_playersPayload>
/**
 * Model matches
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type matches = $Result.DefaultSelection<Prisma.$matchesPayload>
/**
 * Model puzzles
 * 
 */
export type puzzles = $Result.DefaultSelection<Prisma.$puzzlesPayload>
/**
 * Model reports
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type reports = $Result.DefaultSelection<Prisma.$reportsPayload>
/**
 * Model users
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model challenges
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type challenges = $Result.DefaultSelection<Prisma.$challengesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Friends
 * const friends = await prisma.friends.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Friends
   * const friends = await prisma.friends.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.friends`: Exposes CRUD operations for the **friends** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friends.findMany()
    * ```
    */
  get friends(): Prisma.friendsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match_players`: Exposes CRUD operations for the **match_players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Match_players
    * const match_players = await prisma.match_players.findMany()
    * ```
    */
  get match_players(): Prisma.match_playersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matches`: Exposes CRUD operations for the **matches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.matches.findMany()
    * ```
    */
  get matches(): Prisma.matchesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.puzzles`: Exposes CRUD operations for the **puzzles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Puzzles
    * const puzzles = await prisma.puzzles.findMany()
    * ```
    */
  get puzzles(): Prisma.puzzlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reports`: Exposes CRUD operations for the **reports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.reports.findMany()
    * ```
    */
  get reports(): Prisma.reportsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challenges`: Exposes CRUD operations for the **challenges** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenges.findMany()
    * ```
    */
  get challenges(): Prisma.challengesDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    friends: 'friends',
    match_players: 'match_players',
    matches: 'matches',
    puzzles: 'puzzles',
    reports: 'reports',
    users: 'users',
    challenges: 'challenges'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "friends" | "match_players" | "matches" | "puzzles" | "reports" | "users" | "challenges"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      friends: {
        payload: Prisma.$friendsPayload<ExtArgs>
        fields: Prisma.friendsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.friendsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.friendsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          findFirst: {
            args: Prisma.friendsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.friendsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          findMany: {
            args: Prisma.friendsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>[]
          }
          create: {
            args: Prisma.friendsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          createMany: {
            args: Prisma.friendsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.friendsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>[]
          }
          delete: {
            args: Prisma.friendsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          update: {
            args: Prisma.friendsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          deleteMany: {
            args: Prisma.friendsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.friendsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.friendsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>[]
          }
          upsert: {
            args: Prisma.friendsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          aggregate: {
            args: Prisma.FriendsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriends>
          }
          groupBy: {
            args: Prisma.friendsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendsGroupByOutputType>[]
          }
          count: {
            args: Prisma.friendsCountArgs<ExtArgs>
            result: $Utils.Optional<FriendsCountAggregateOutputType> | number
          }
        }
      }
      match_players: {
        payload: Prisma.$match_playersPayload<ExtArgs>
        fields: Prisma.match_playersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.match_playersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.match_playersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playersPayload>
          }
          findFirst: {
            args: Prisma.match_playersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.match_playersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playersPayload>
          }
          findMany: {
            args: Prisma.match_playersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playersPayload>[]
          }
          create: {
            args: Prisma.match_playersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playersPayload>
          }
          createMany: {
            args: Prisma.match_playersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.match_playersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playersPayload>[]
          }
          delete: {
            args: Prisma.match_playersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playersPayload>
          }
          update: {
            args: Prisma.match_playersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playersPayload>
          }
          deleteMany: {
            args: Prisma.match_playersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.match_playersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.match_playersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playersPayload>[]
          }
          upsert: {
            args: Prisma.match_playersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playersPayload>
          }
          aggregate: {
            args: Prisma.Match_playersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch_players>
          }
          groupBy: {
            args: Prisma.match_playersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Match_playersGroupByOutputType>[]
          }
          count: {
            args: Prisma.match_playersCountArgs<ExtArgs>
            result: $Utils.Optional<Match_playersCountAggregateOutputType> | number
          }
        }
      }
      matches: {
        payload: Prisma.$matchesPayload<ExtArgs>
        fields: Prisma.matchesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.matchesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.matchesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          findFirst: {
            args: Prisma.matchesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.matchesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          findMany: {
            args: Prisma.matchesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>[]
          }
          create: {
            args: Prisma.matchesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          createMany: {
            args: Prisma.matchesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.matchesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>[]
          }
          delete: {
            args: Prisma.matchesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          update: {
            args: Prisma.matchesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          deleteMany: {
            args: Prisma.matchesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.matchesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.matchesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>[]
          }
          upsert: {
            args: Prisma.matchesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchesPayload>
          }
          aggregate: {
            args: Prisma.MatchesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatches>
          }
          groupBy: {
            args: Prisma.matchesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchesGroupByOutputType>[]
          }
          count: {
            args: Prisma.matchesCountArgs<ExtArgs>
            result: $Utils.Optional<MatchesCountAggregateOutputType> | number
          }
        }
      }
      puzzles: {
        payload: Prisma.$puzzlesPayload<ExtArgs>
        fields: Prisma.puzzlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.puzzlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puzzlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.puzzlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puzzlesPayload>
          }
          findFirst: {
            args: Prisma.puzzlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puzzlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.puzzlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puzzlesPayload>
          }
          findMany: {
            args: Prisma.puzzlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puzzlesPayload>[]
          }
          create: {
            args: Prisma.puzzlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puzzlesPayload>
          }
          createMany: {
            args: Prisma.puzzlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.puzzlesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puzzlesPayload>[]
          }
          delete: {
            args: Prisma.puzzlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puzzlesPayload>
          }
          update: {
            args: Prisma.puzzlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puzzlesPayload>
          }
          deleteMany: {
            args: Prisma.puzzlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.puzzlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.puzzlesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puzzlesPayload>[]
          }
          upsert: {
            args: Prisma.puzzlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$puzzlesPayload>
          }
          aggregate: {
            args: Prisma.PuzzlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePuzzles>
          }
          groupBy: {
            args: Prisma.puzzlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PuzzlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.puzzlesCountArgs<ExtArgs>
            result: $Utils.Optional<PuzzlesCountAggregateOutputType> | number
          }
        }
      }
      reports: {
        payload: Prisma.$reportsPayload<ExtArgs>
        fields: Prisma.reportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          findFirst: {
            args: Prisma.reportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          findMany: {
            args: Prisma.reportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>[]
          }
          create: {
            args: Prisma.reportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          createMany: {
            args: Prisma.reportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reportsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>[]
          }
          delete: {
            args: Prisma.reportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          update: {
            args: Prisma.reportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          deleteMany: {
            args: Prisma.reportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reportsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>[]
          }
          upsert: {
            args: Prisma.reportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          aggregate: {
            args: Prisma.ReportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReports>
          }
          groupBy: {
            args: Prisma.reportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reportsCountArgs<ExtArgs>
            result: $Utils.Optional<ReportsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      challenges: {
        payload: Prisma.$challengesPayload<ExtArgs>
        fields: Prisma.challengesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.challengesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.challengesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>
          }
          findFirst: {
            args: Prisma.challengesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.challengesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>
          }
          findMany: {
            args: Prisma.challengesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>[]
          }
          create: {
            args: Prisma.challengesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>
          }
          createMany: {
            args: Prisma.challengesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.challengesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>[]
          }
          delete: {
            args: Prisma.challengesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>
          }
          update: {
            args: Prisma.challengesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>
          }
          deleteMany: {
            args: Prisma.challengesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.challengesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.challengesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>[]
          }
          upsert: {
            args: Prisma.challengesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>
          }
          aggregate: {
            args: Prisma.ChallengesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenges>
          }
          groupBy: {
            args: Prisma.challengesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengesGroupByOutputType>[]
          }
          count: {
            args: Prisma.challengesCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengesCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    friends?: friendsOmit
    match_players?: match_playersOmit
    matches?: matchesOmit
    puzzles?: puzzlesOmit
    reports?: reportsOmit
    users?: usersOmit
    challenges?: challengesOmit
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
   * Count Type MatchesCountOutputType
   */

  export type MatchesCountOutputType = {
    match_players: number
  }

  export type MatchesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match_players?: boolean | MatchesCountOutputTypeCountMatch_playersArgs
  }

  // Custom InputTypes
  /**
   * MatchesCountOutputType without action
   */
  export type MatchesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchesCountOutputType
     */
    select?: MatchesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchesCountOutputType without action
   */
  export type MatchesCountOutputTypeCountMatch_playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: match_playersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    challenges_challenges_from_user_idTousers: number
    challenges_challenges_to_user_idTousers: number
    friends_friends_receiver_idTousers: number
    friends_friends_requester_idTousers: number
    match_players: number
    reports_reports_reported_idTousers: number
    reports_reports_reporter_idTousers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges_challenges_from_user_idTousers?: boolean | UsersCountOutputTypeCountChallenges_challenges_from_user_idTousersArgs
    challenges_challenges_to_user_idTousers?: boolean | UsersCountOutputTypeCountChallenges_challenges_to_user_idTousersArgs
    friends_friends_receiver_idTousers?: boolean | UsersCountOutputTypeCountFriends_friends_receiver_idTousersArgs
    friends_friends_requester_idTousers?: boolean | UsersCountOutputTypeCountFriends_friends_requester_idTousersArgs
    match_players?: boolean | UsersCountOutputTypeCountMatch_playersArgs
    reports_reports_reported_idTousers?: boolean | UsersCountOutputTypeCountReports_reports_reported_idTousersArgs
    reports_reports_reporter_idTousers?: boolean | UsersCountOutputTypeCountReports_reports_reporter_idTousersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChallenges_challenges_from_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challengesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChallenges_challenges_to_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challengesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFriends_friends_receiver_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFriends_friends_requester_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMatch_playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: match_playersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReports_reports_reported_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReports_reports_reporter_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model friends
   */

  export type AggregateFriends = {
    _count: FriendsCountAggregateOutputType | null
    _avg: FriendsAvgAggregateOutputType | null
    _sum: FriendsSumAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  export type FriendsAvgAggregateOutputType = {
    id: number | null
    requester_id: number | null
    receiver_id: number | null
  }

  export type FriendsSumAggregateOutputType = {
    id: number | null
    requester_id: number | null
    receiver_id: number | null
  }

  export type FriendsMinAggregateOutputType = {
    id: number | null
    requester_id: number | null
    receiver_id: number | null
    status: string | null
    created_at: Date | null
  }

  export type FriendsMaxAggregateOutputType = {
    id: number | null
    requester_id: number | null
    receiver_id: number | null
    status: string | null
    created_at: Date | null
  }

  export type FriendsCountAggregateOutputType = {
    id: number
    requester_id: number
    receiver_id: number
    status: number
    created_at: number
    _all: number
  }


  export type FriendsAvgAggregateInputType = {
    id?: true
    requester_id?: true
    receiver_id?: true
  }

  export type FriendsSumAggregateInputType = {
    id?: true
    requester_id?: true
    receiver_id?: true
  }

  export type FriendsMinAggregateInputType = {
    id?: true
    requester_id?: true
    receiver_id?: true
    status?: true
    created_at?: true
  }

  export type FriendsMaxAggregateInputType = {
    id?: true
    requester_id?: true
    receiver_id?: true
    status?: true
    created_at?: true
  }

  export type FriendsCountAggregateInputType = {
    id?: true
    requester_id?: true
    receiver_id?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type FriendsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friends to aggregate.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned friends
    **/
    _count?: true | FriendsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendsMaxAggregateInputType
  }

  export type GetFriendsAggregateType<T extends FriendsAggregateArgs> = {
        [P in keyof T & keyof AggregateFriends]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriends[P]>
      : GetScalarType<T[P], AggregateFriends[P]>
  }




  export type friendsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithAggregationInput | friendsOrderByWithAggregationInput[]
    by: FriendsScalarFieldEnum[] | FriendsScalarFieldEnum
    having?: friendsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendsCountAggregateInputType | true
    _avg?: FriendsAvgAggregateInputType
    _sum?: FriendsSumAggregateInputType
    _min?: FriendsMinAggregateInputType
    _max?: FriendsMaxAggregateInputType
  }

  export type FriendsGroupByOutputType = {
    id: number
    requester_id: number
    receiver_id: number
    status: string
    created_at: Date
    _count: FriendsCountAggregateOutputType | null
    _avg: FriendsAvgAggregateOutputType | null
    _sum: FriendsSumAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  type GetFriendsGroupByPayload<T extends friendsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendsGroupByOutputType[P]>
            : GetScalarType<T[P], FriendsGroupByOutputType[P]>
        }
      >
    >


  export type friendsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requester_id?: boolean
    receiver_id?: boolean
    status?: boolean
    created_at?: boolean
    users_friends_receiver_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_friends_requester_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type friendsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requester_id?: boolean
    receiver_id?: boolean
    status?: boolean
    created_at?: boolean
    users_friends_receiver_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_friends_requester_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type friendsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requester_id?: boolean
    receiver_id?: boolean
    status?: boolean
    created_at?: boolean
    users_friends_receiver_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_friends_requester_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type friendsSelectScalar = {
    id?: boolean
    requester_id?: boolean
    receiver_id?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type friendsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requester_id" | "receiver_id" | "status" | "created_at", ExtArgs["result"]["friends"]>
  export type friendsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_friends_receiver_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_friends_requester_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type friendsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_friends_receiver_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_friends_requester_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type friendsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_friends_receiver_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_friends_requester_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $friendsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "friends"
    objects: {
      users_friends_receiver_idTousers: Prisma.$usersPayload<ExtArgs>
      users_friends_requester_idTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      requester_id: number
      receiver_id: number
      status: string
      created_at: Date
    }, ExtArgs["result"]["friends"]>
    composites: {}
  }

  type friendsGetPayload<S extends boolean | null | undefined | friendsDefaultArgs> = $Result.GetResult<Prisma.$friendsPayload, S>

  type friendsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<friendsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendsCountAggregateInputType | true
    }

  export interface friendsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['friends'], meta: { name: 'friends' } }
    /**
     * Find zero or one Friends that matches the filter.
     * @param {friendsFindUniqueArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends friendsFindUniqueArgs>(args: SelectSubset<T, friendsFindUniqueArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friends that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {friendsFindUniqueOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends friendsFindUniqueOrThrowArgs>(args: SelectSubset<T, friendsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindFirstArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends friendsFindFirstArgs>(args?: SelectSubset<T, friendsFindFirstArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friends that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindFirstOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends friendsFindFirstOrThrowArgs>(args?: SelectSubset<T, friendsFindFirstOrThrowArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friends.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friends.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendsWithIdOnly = await prisma.friends.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends friendsFindManyArgs>(args?: SelectSubset<T, friendsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friends.
     * @param {friendsCreateArgs} args - Arguments to create a Friends.
     * @example
     * // Create one Friends
     * const Friends = await prisma.friends.create({
     *   data: {
     *     // ... data to create a Friends
     *   }
     * })
     * 
     */
    create<T extends friendsCreateArgs>(args: SelectSubset<T, friendsCreateArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friends.
     * @param {friendsCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friends = await prisma.friends.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends friendsCreateManyArgs>(args?: SelectSubset<T, friendsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friends and returns the data saved in the database.
     * @param {friendsCreateManyAndReturnArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friends = await prisma.friends.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friends and only return the `id`
     * const friendsWithIdOnly = await prisma.friends.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends friendsCreateManyAndReturnArgs>(args?: SelectSubset<T, friendsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friends.
     * @param {friendsDeleteArgs} args - Arguments to delete one Friends.
     * @example
     * // Delete one Friends
     * const Friends = await prisma.friends.delete({
     *   where: {
     *     // ... filter to delete one Friends
     *   }
     * })
     * 
     */
    delete<T extends friendsDeleteArgs>(args: SelectSubset<T, friendsDeleteArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friends.
     * @param {friendsUpdateArgs} args - Arguments to update one Friends.
     * @example
     * // Update one Friends
     * const friends = await prisma.friends.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends friendsUpdateArgs>(args: SelectSubset<T, friendsUpdateArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friends.
     * @param {friendsDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friends.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends friendsDeleteManyArgs>(args?: SelectSubset<T, friendsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friends = await prisma.friends.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends friendsUpdateManyArgs>(args: SelectSubset<T, friendsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends and returns the data updated in the database.
     * @param {friendsUpdateManyAndReturnArgs} args - Arguments to update many Friends.
     * @example
     * // Update many Friends
     * const friends = await prisma.friends.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friends and only return the `id`
     * const friendsWithIdOnly = await prisma.friends.updateManyAndReturn({
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
    updateManyAndReturn<T extends friendsUpdateManyAndReturnArgs>(args: SelectSubset<T, friendsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friends.
     * @param {friendsUpsertArgs} args - Arguments to update or create a Friends.
     * @example
     * // Update or create a Friends
     * const friends = await prisma.friends.upsert({
     *   create: {
     *     // ... data to create a Friends
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friends we want to update
     *   }
     * })
     */
    upsert<T extends friendsUpsertArgs>(args: SelectSubset<T, friendsUpsertArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friends.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends friendsCountArgs>(
      args?: Subset<T, friendsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendsAggregateArgs>(args: Subset<T, FriendsAggregateArgs>): Prisma.PrismaPromise<GetFriendsAggregateType<T>>

    /**
     * Group by Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsGroupByArgs} args - Group by arguments.
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
      T extends friendsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: friendsGroupByArgs['orderBy'] }
        : { orderBy?: friendsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, friendsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the friends model
   */
  readonly fields: friendsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for friends.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__friendsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_friends_receiver_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_friends_requester_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the friends model
   */
  interface friendsFieldRefs {
    readonly id: FieldRef<"friends", 'Int'>
    readonly requester_id: FieldRef<"friends", 'Int'>
    readonly receiver_id: FieldRef<"friends", 'Int'>
    readonly status: FieldRef<"friends", 'String'>
    readonly created_at: FieldRef<"friends", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * friends findUnique
   */
  export type friendsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where: friendsWhereUniqueInput
  }

  /**
   * friends findUniqueOrThrow
   */
  export type friendsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where: friendsWhereUniqueInput
  }

  /**
   * friends findFirst
   */
  export type friendsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * friends findFirstOrThrow
   */
  export type friendsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * friends findMany
   */
  export type friendsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * friends create
   */
  export type friendsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The data needed to create a friends.
     */
    data: XOR<friendsCreateInput, friendsUncheckedCreateInput>
  }

  /**
   * friends createMany
   */
  export type friendsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many friends.
     */
    data: friendsCreateManyInput | friendsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * friends createManyAndReturn
   */
  export type friendsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * The data used to create many friends.
     */
    data: friendsCreateManyInput | friendsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * friends update
   */
  export type friendsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The data needed to update a friends.
     */
    data: XOR<friendsUpdateInput, friendsUncheckedUpdateInput>
    /**
     * Choose, which friends to update.
     */
    where: friendsWhereUniqueInput
  }

  /**
   * friends updateMany
   */
  export type friendsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update friends.
     */
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyInput>
    /**
     * Filter which friends to update
     */
    where?: friendsWhereInput
    /**
     * Limit how many friends to update.
     */
    limit?: number
  }

  /**
   * friends updateManyAndReturn
   */
  export type friendsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * The data used to update friends.
     */
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyInput>
    /**
     * Filter which friends to update
     */
    where?: friendsWhereInput
    /**
     * Limit how many friends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * friends upsert
   */
  export type friendsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The filter to search for the friends to update in case it exists.
     */
    where: friendsWhereUniqueInput
    /**
     * In case the friends found by the `where` argument doesn't exist, create a new friends with this data.
     */
    create: XOR<friendsCreateInput, friendsUncheckedCreateInput>
    /**
     * In case the friends was found with the provided `where` argument, update it with this data.
     */
    update: XOR<friendsUpdateInput, friendsUncheckedUpdateInput>
  }

  /**
   * friends delete
   */
  export type friendsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter which friends to delete.
     */
    where: friendsWhereUniqueInput
  }

  /**
   * friends deleteMany
   */
  export type friendsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friends to delete
     */
    where?: friendsWhereInput
    /**
     * Limit how many friends to delete.
     */
    limit?: number
  }

  /**
   * friends without action
   */
  export type friendsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
  }


  /**
   * Model match_players
   */

  export type AggregateMatch_players = {
    _count: Match_playersCountAggregateOutputType | null
    _avg: Match_playersAvgAggregateOutputType | null
    _sum: Match_playersSumAggregateOutputType | null
    _min: Match_playersMinAggregateOutputType | null
    _max: Match_playersMaxAggregateOutputType | null
  }

  export type Match_playersAvgAggregateOutputType = {
    id: number | null
    match_id: number | null
    user_id: number | null
    puzzles_solved: number | null
    trophies_delta: number | null
  }

  export type Match_playersSumAggregateOutputType = {
    id: number | null
    match_id: number | null
    user_id: number | null
    puzzles_solved: number | null
    trophies_delta: number | null
  }

  export type Match_playersMinAggregateOutputType = {
    id: number | null
    match_id: number | null
    user_id: number | null
    is_winner: boolean | null
    puzzles_solved: number | null
    trophies_delta: number | null
  }

  export type Match_playersMaxAggregateOutputType = {
    id: number | null
    match_id: number | null
    user_id: number | null
    is_winner: boolean | null
    puzzles_solved: number | null
    trophies_delta: number | null
  }

  export type Match_playersCountAggregateOutputType = {
    id: number
    match_id: number
    user_id: number
    is_winner: number
    puzzles_solved: number
    trophies_delta: number
    _all: number
  }


  export type Match_playersAvgAggregateInputType = {
    id?: true
    match_id?: true
    user_id?: true
    puzzles_solved?: true
    trophies_delta?: true
  }

  export type Match_playersSumAggregateInputType = {
    id?: true
    match_id?: true
    user_id?: true
    puzzles_solved?: true
    trophies_delta?: true
  }

  export type Match_playersMinAggregateInputType = {
    id?: true
    match_id?: true
    user_id?: true
    is_winner?: true
    puzzles_solved?: true
    trophies_delta?: true
  }

  export type Match_playersMaxAggregateInputType = {
    id?: true
    match_id?: true
    user_id?: true
    is_winner?: true
    puzzles_solved?: true
    trophies_delta?: true
  }

  export type Match_playersCountAggregateInputType = {
    id?: true
    match_id?: true
    user_id?: true
    is_winner?: true
    puzzles_solved?: true
    trophies_delta?: true
    _all?: true
  }

  export type Match_playersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which match_players to aggregate.
     */
    where?: match_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_players to fetch.
     */
    orderBy?: match_playersOrderByWithRelationInput | match_playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: match_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned match_players
    **/
    _count?: true | Match_playersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Match_playersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Match_playersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Match_playersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Match_playersMaxAggregateInputType
  }

  export type GetMatch_playersAggregateType<T extends Match_playersAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch_players]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch_players[P]>
      : GetScalarType<T[P], AggregateMatch_players[P]>
  }




  export type match_playersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: match_playersWhereInput
    orderBy?: match_playersOrderByWithAggregationInput | match_playersOrderByWithAggregationInput[]
    by: Match_playersScalarFieldEnum[] | Match_playersScalarFieldEnum
    having?: match_playersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Match_playersCountAggregateInputType | true
    _avg?: Match_playersAvgAggregateInputType
    _sum?: Match_playersSumAggregateInputType
    _min?: Match_playersMinAggregateInputType
    _max?: Match_playersMaxAggregateInputType
  }

  export type Match_playersGroupByOutputType = {
    id: number
    match_id: number
    user_id: number
    is_winner: boolean
    puzzles_solved: number
    trophies_delta: number
    _count: Match_playersCountAggregateOutputType | null
    _avg: Match_playersAvgAggregateOutputType | null
    _sum: Match_playersSumAggregateOutputType | null
    _min: Match_playersMinAggregateOutputType | null
    _max: Match_playersMaxAggregateOutputType | null
  }

  type GetMatch_playersGroupByPayload<T extends match_playersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Match_playersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Match_playersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Match_playersGroupByOutputType[P]>
            : GetScalarType<T[P], Match_playersGroupByOutputType[P]>
        }
      >
    >


  export type match_playersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    match_id?: boolean
    user_id?: boolean
    is_winner?: boolean
    puzzles_solved?: boolean
    trophies_delta?: boolean
    matches?: boolean | matchesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match_players"]>

  export type match_playersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    match_id?: boolean
    user_id?: boolean
    is_winner?: boolean
    puzzles_solved?: boolean
    trophies_delta?: boolean
    matches?: boolean | matchesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match_players"]>

  export type match_playersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    match_id?: boolean
    user_id?: boolean
    is_winner?: boolean
    puzzles_solved?: boolean
    trophies_delta?: boolean
    matches?: boolean | matchesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match_players"]>

  export type match_playersSelectScalar = {
    id?: boolean
    match_id?: boolean
    user_id?: boolean
    is_winner?: boolean
    puzzles_solved?: boolean
    trophies_delta?: boolean
  }

  export type match_playersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "match_id" | "user_id" | "is_winner" | "puzzles_solved" | "trophies_delta", ExtArgs["result"]["match_players"]>
  export type match_playersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | matchesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type match_playersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | matchesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type match_playersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | matchesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $match_playersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "match_players"
    objects: {
      matches: Prisma.$matchesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      match_id: number
      user_id: number
      is_winner: boolean
      puzzles_solved: number
      trophies_delta: number
    }, ExtArgs["result"]["match_players"]>
    composites: {}
  }

  type match_playersGetPayload<S extends boolean | null | undefined | match_playersDefaultArgs> = $Result.GetResult<Prisma.$match_playersPayload, S>

  type match_playersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<match_playersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Match_playersCountAggregateInputType | true
    }

  export interface match_playersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['match_players'], meta: { name: 'match_players' } }
    /**
     * Find zero or one Match_players that matches the filter.
     * @param {match_playersFindUniqueArgs} args - Arguments to find a Match_players
     * @example
     * // Get one Match_players
     * const match_players = await prisma.match_players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends match_playersFindUniqueArgs>(args: SelectSubset<T, match_playersFindUniqueArgs<ExtArgs>>): Prisma__match_playersClient<$Result.GetResult<Prisma.$match_playersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match_players that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {match_playersFindUniqueOrThrowArgs} args - Arguments to find a Match_players
     * @example
     * // Get one Match_players
     * const match_players = await prisma.match_players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends match_playersFindUniqueOrThrowArgs>(args: SelectSubset<T, match_playersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__match_playersClient<$Result.GetResult<Prisma.$match_playersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match_players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_playersFindFirstArgs} args - Arguments to find a Match_players
     * @example
     * // Get one Match_players
     * const match_players = await prisma.match_players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends match_playersFindFirstArgs>(args?: SelectSubset<T, match_playersFindFirstArgs<ExtArgs>>): Prisma__match_playersClient<$Result.GetResult<Prisma.$match_playersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match_players that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_playersFindFirstOrThrowArgs} args - Arguments to find a Match_players
     * @example
     * // Get one Match_players
     * const match_players = await prisma.match_players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends match_playersFindFirstOrThrowArgs>(args?: SelectSubset<T, match_playersFindFirstOrThrowArgs<ExtArgs>>): Prisma__match_playersClient<$Result.GetResult<Prisma.$match_playersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Match_players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_playersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Match_players
     * const match_players = await prisma.match_players.findMany()
     * 
     * // Get first 10 Match_players
     * const match_players = await prisma.match_players.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const match_playersWithIdOnly = await prisma.match_players.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends match_playersFindManyArgs>(args?: SelectSubset<T, match_playersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_playersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match_players.
     * @param {match_playersCreateArgs} args - Arguments to create a Match_players.
     * @example
     * // Create one Match_players
     * const Match_players = await prisma.match_players.create({
     *   data: {
     *     // ... data to create a Match_players
     *   }
     * })
     * 
     */
    create<T extends match_playersCreateArgs>(args: SelectSubset<T, match_playersCreateArgs<ExtArgs>>): Prisma__match_playersClient<$Result.GetResult<Prisma.$match_playersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Match_players.
     * @param {match_playersCreateManyArgs} args - Arguments to create many Match_players.
     * @example
     * // Create many Match_players
     * const match_players = await prisma.match_players.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends match_playersCreateManyArgs>(args?: SelectSubset<T, match_playersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Match_players and returns the data saved in the database.
     * @param {match_playersCreateManyAndReturnArgs} args - Arguments to create many Match_players.
     * @example
     * // Create many Match_players
     * const match_players = await prisma.match_players.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Match_players and only return the `id`
     * const match_playersWithIdOnly = await prisma.match_players.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends match_playersCreateManyAndReturnArgs>(args?: SelectSubset<T, match_playersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_playersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match_players.
     * @param {match_playersDeleteArgs} args - Arguments to delete one Match_players.
     * @example
     * // Delete one Match_players
     * const Match_players = await prisma.match_players.delete({
     *   where: {
     *     // ... filter to delete one Match_players
     *   }
     * })
     * 
     */
    delete<T extends match_playersDeleteArgs>(args: SelectSubset<T, match_playersDeleteArgs<ExtArgs>>): Prisma__match_playersClient<$Result.GetResult<Prisma.$match_playersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match_players.
     * @param {match_playersUpdateArgs} args - Arguments to update one Match_players.
     * @example
     * // Update one Match_players
     * const match_players = await prisma.match_players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends match_playersUpdateArgs>(args: SelectSubset<T, match_playersUpdateArgs<ExtArgs>>): Prisma__match_playersClient<$Result.GetResult<Prisma.$match_playersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Match_players.
     * @param {match_playersDeleteManyArgs} args - Arguments to filter Match_players to delete.
     * @example
     * // Delete a few Match_players
     * const { count } = await prisma.match_players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends match_playersDeleteManyArgs>(args?: SelectSubset<T, match_playersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Match_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_playersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Match_players
     * const match_players = await prisma.match_players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends match_playersUpdateManyArgs>(args: SelectSubset<T, match_playersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Match_players and returns the data updated in the database.
     * @param {match_playersUpdateManyAndReturnArgs} args - Arguments to update many Match_players.
     * @example
     * // Update many Match_players
     * const match_players = await prisma.match_players.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Match_players and only return the `id`
     * const match_playersWithIdOnly = await prisma.match_players.updateManyAndReturn({
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
    updateManyAndReturn<T extends match_playersUpdateManyAndReturnArgs>(args: SelectSubset<T, match_playersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_playersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match_players.
     * @param {match_playersUpsertArgs} args - Arguments to update or create a Match_players.
     * @example
     * // Update or create a Match_players
     * const match_players = await prisma.match_players.upsert({
     *   create: {
     *     // ... data to create a Match_players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match_players we want to update
     *   }
     * })
     */
    upsert<T extends match_playersUpsertArgs>(args: SelectSubset<T, match_playersUpsertArgs<ExtArgs>>): Prisma__match_playersClient<$Result.GetResult<Prisma.$match_playersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Match_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_playersCountArgs} args - Arguments to filter Match_players to count.
     * @example
     * // Count the number of Match_players
     * const count = await prisma.match_players.count({
     *   where: {
     *     // ... the filter for the Match_players we want to count
     *   }
     * })
    **/
    count<T extends match_playersCountArgs>(
      args?: Subset<T, match_playersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Match_playersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Match_playersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Match_playersAggregateArgs>(args: Subset<T, Match_playersAggregateArgs>): Prisma.PrismaPromise<GetMatch_playersAggregateType<T>>

    /**
     * Group by Match_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_playersGroupByArgs} args - Group by arguments.
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
      T extends match_playersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: match_playersGroupByArgs['orderBy'] }
        : { orderBy?: match_playersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, match_playersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatch_playersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the match_players model
   */
  readonly fields: match_playersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for match_players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__match_playersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matches<T extends matchesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, matchesDefaultArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the match_players model
   */
  interface match_playersFieldRefs {
    readonly id: FieldRef<"match_players", 'Int'>
    readonly match_id: FieldRef<"match_players", 'Int'>
    readonly user_id: FieldRef<"match_players", 'Int'>
    readonly is_winner: FieldRef<"match_players", 'Boolean'>
    readonly puzzles_solved: FieldRef<"match_players", 'Int'>
    readonly trophies_delta: FieldRef<"match_players", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * match_players findUnique
   */
  export type match_playersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_players
     */
    select?: match_playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_players
     */
    omit?: match_playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playersInclude<ExtArgs> | null
    /**
     * Filter, which match_players to fetch.
     */
    where: match_playersWhereUniqueInput
  }

  /**
   * match_players findUniqueOrThrow
   */
  export type match_playersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_players
     */
    select?: match_playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_players
     */
    omit?: match_playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playersInclude<ExtArgs> | null
    /**
     * Filter, which match_players to fetch.
     */
    where: match_playersWhereUniqueInput
  }

  /**
   * match_players findFirst
   */
  export type match_playersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_players
     */
    select?: match_playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_players
     */
    omit?: match_playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playersInclude<ExtArgs> | null
    /**
     * Filter, which match_players to fetch.
     */
    where?: match_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_players to fetch.
     */
    orderBy?: match_playersOrderByWithRelationInput | match_playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for match_players.
     */
    cursor?: match_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of match_players.
     */
    distinct?: Match_playersScalarFieldEnum | Match_playersScalarFieldEnum[]
  }

  /**
   * match_players findFirstOrThrow
   */
  export type match_playersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_players
     */
    select?: match_playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_players
     */
    omit?: match_playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playersInclude<ExtArgs> | null
    /**
     * Filter, which match_players to fetch.
     */
    where?: match_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_players to fetch.
     */
    orderBy?: match_playersOrderByWithRelationInput | match_playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for match_players.
     */
    cursor?: match_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of match_players.
     */
    distinct?: Match_playersScalarFieldEnum | Match_playersScalarFieldEnum[]
  }

  /**
   * match_players findMany
   */
  export type match_playersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_players
     */
    select?: match_playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_players
     */
    omit?: match_playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playersInclude<ExtArgs> | null
    /**
     * Filter, which match_players to fetch.
     */
    where?: match_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_players to fetch.
     */
    orderBy?: match_playersOrderByWithRelationInput | match_playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing match_players.
     */
    cursor?: match_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_players.
     */
    skip?: number
    distinct?: Match_playersScalarFieldEnum | Match_playersScalarFieldEnum[]
  }

  /**
   * match_players create
   */
  export type match_playersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_players
     */
    select?: match_playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_players
     */
    omit?: match_playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playersInclude<ExtArgs> | null
    /**
     * The data needed to create a match_players.
     */
    data: XOR<match_playersCreateInput, match_playersUncheckedCreateInput>
  }

  /**
   * match_players createMany
   */
  export type match_playersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many match_players.
     */
    data: match_playersCreateManyInput | match_playersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * match_players createManyAndReturn
   */
  export type match_playersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_players
     */
    select?: match_playersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the match_players
     */
    omit?: match_playersOmit<ExtArgs> | null
    /**
     * The data used to create many match_players.
     */
    data: match_playersCreateManyInput | match_playersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * match_players update
   */
  export type match_playersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_players
     */
    select?: match_playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_players
     */
    omit?: match_playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playersInclude<ExtArgs> | null
    /**
     * The data needed to update a match_players.
     */
    data: XOR<match_playersUpdateInput, match_playersUncheckedUpdateInput>
    /**
     * Choose, which match_players to update.
     */
    where: match_playersWhereUniqueInput
  }

  /**
   * match_players updateMany
   */
  export type match_playersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update match_players.
     */
    data: XOR<match_playersUpdateManyMutationInput, match_playersUncheckedUpdateManyInput>
    /**
     * Filter which match_players to update
     */
    where?: match_playersWhereInput
    /**
     * Limit how many match_players to update.
     */
    limit?: number
  }

  /**
   * match_players updateManyAndReturn
   */
  export type match_playersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_players
     */
    select?: match_playersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the match_players
     */
    omit?: match_playersOmit<ExtArgs> | null
    /**
     * The data used to update match_players.
     */
    data: XOR<match_playersUpdateManyMutationInput, match_playersUncheckedUpdateManyInput>
    /**
     * Filter which match_players to update
     */
    where?: match_playersWhereInput
    /**
     * Limit how many match_players to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * match_players upsert
   */
  export type match_playersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_players
     */
    select?: match_playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_players
     */
    omit?: match_playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playersInclude<ExtArgs> | null
    /**
     * The filter to search for the match_players to update in case it exists.
     */
    where: match_playersWhereUniqueInput
    /**
     * In case the match_players found by the `where` argument doesn't exist, create a new match_players with this data.
     */
    create: XOR<match_playersCreateInput, match_playersUncheckedCreateInput>
    /**
     * In case the match_players was found with the provided `where` argument, update it with this data.
     */
    update: XOR<match_playersUpdateInput, match_playersUncheckedUpdateInput>
  }

  /**
   * match_players delete
   */
  export type match_playersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_players
     */
    select?: match_playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_players
     */
    omit?: match_playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playersInclude<ExtArgs> | null
    /**
     * Filter which match_players to delete.
     */
    where: match_playersWhereUniqueInput
  }

  /**
   * match_players deleteMany
   */
  export type match_playersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which match_players to delete
     */
    where?: match_playersWhereInput
    /**
     * Limit how many match_players to delete.
     */
    limit?: number
  }

  /**
   * match_players without action
   */
  export type match_playersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_players
     */
    select?: match_playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_players
     */
    omit?: match_playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playersInclude<ExtArgs> | null
  }


  /**
   * Model matches
   */

  export type AggregateMatches = {
    _count: MatchesCountAggregateOutputType | null
    _avg: MatchesAvgAggregateOutputType | null
    _sum: MatchesSumAggregateOutputType | null
    _min: MatchesMinAggregateOutputType | null
    _max: MatchesMaxAggregateOutputType | null
  }

  export type MatchesAvgAggregateOutputType = {
    id: number | null
  }

  export type MatchesSumAggregateOutputType = {
    id: number | null
  }

  export type MatchesMinAggregateOutputType = {
    id: number | null
    mode: string | null
    finished_at: Date | null
  }

  export type MatchesMaxAggregateOutputType = {
    id: number | null
    mode: string | null
    finished_at: Date | null
  }

  export type MatchesCountAggregateOutputType = {
    id: number
    mode: number
    finished_at: number
    state: number
    _all: number
  }


  export type MatchesAvgAggregateInputType = {
    id?: true
  }

  export type MatchesSumAggregateInputType = {
    id?: true
  }

  export type MatchesMinAggregateInputType = {
    id?: true
    mode?: true
    finished_at?: true
  }

  export type MatchesMaxAggregateInputType = {
    id?: true
    mode?: true
    finished_at?: true
  }

  export type MatchesCountAggregateInputType = {
    id?: true
    mode?: true
    finished_at?: true
    state?: true
    _all?: true
  }

  export type MatchesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which matches to aggregate.
     */
    where?: matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned matches
    **/
    _count?: true | MatchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchesMaxAggregateInputType
  }

  export type GetMatchesAggregateType<T extends MatchesAggregateArgs> = {
        [P in keyof T & keyof AggregateMatches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatches[P]>
      : GetScalarType<T[P], AggregateMatches[P]>
  }




  export type matchesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matchesWhereInput
    orderBy?: matchesOrderByWithAggregationInput | matchesOrderByWithAggregationInput[]
    by: MatchesScalarFieldEnum[] | MatchesScalarFieldEnum
    having?: matchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchesCountAggregateInputType | true
    _avg?: MatchesAvgAggregateInputType
    _sum?: MatchesSumAggregateInputType
    _min?: MatchesMinAggregateInputType
    _max?: MatchesMaxAggregateInputType
  }

  export type MatchesGroupByOutputType = {
    id: number
    mode: string
    finished_at: Date | null
    state: JsonValue | null
    _count: MatchesCountAggregateOutputType | null
    _avg: MatchesAvgAggregateOutputType | null
    _sum: MatchesSumAggregateOutputType | null
    _min: MatchesMinAggregateOutputType | null
    _max: MatchesMaxAggregateOutputType | null
  }

  type GetMatchesGroupByPayload<T extends matchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchesGroupByOutputType[P]>
            : GetScalarType<T[P], MatchesGroupByOutputType[P]>
        }
      >
    >


  export type matchesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mode?: boolean
    finished_at?: boolean
    state?: boolean
    match_players?: boolean | matches$match_playersArgs<ExtArgs>
    _count?: boolean | MatchesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matches"]>

  export type matchesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mode?: boolean
    finished_at?: boolean
    state?: boolean
  }, ExtArgs["result"]["matches"]>

  export type matchesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mode?: boolean
    finished_at?: boolean
    state?: boolean
  }, ExtArgs["result"]["matches"]>

  export type matchesSelectScalar = {
    id?: boolean
    mode?: boolean
    finished_at?: boolean
    state?: boolean
  }

  export type matchesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mode" | "finished_at" | "state", ExtArgs["result"]["matches"]>
  export type matchesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match_players?: boolean | matches$match_playersArgs<ExtArgs>
    _count?: boolean | MatchesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type matchesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type matchesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $matchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "matches"
    objects: {
      match_players: Prisma.$match_playersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mode: string
      finished_at: Date | null
      state: Prisma.JsonValue | null
    }, ExtArgs["result"]["matches"]>
    composites: {}
  }

  type matchesGetPayload<S extends boolean | null | undefined | matchesDefaultArgs> = $Result.GetResult<Prisma.$matchesPayload, S>

  type matchesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<matchesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchesCountAggregateInputType | true
    }

  export interface matchesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['matches'], meta: { name: 'matches' } }
    /**
     * Find zero or one Matches that matches the filter.
     * @param {matchesFindUniqueArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends matchesFindUniqueArgs>(args: SelectSubset<T, matchesFindUniqueArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matches that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {matchesFindUniqueOrThrowArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends matchesFindUniqueOrThrowArgs>(args: SelectSubset<T, matchesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesFindFirstArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends matchesFindFirstArgs>(args?: SelectSubset<T, matchesFindFirstArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesFindFirstOrThrowArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends matchesFindFirstOrThrowArgs>(args?: SelectSubset<T, matchesFindFirstOrThrowArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.matches.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.matches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchesWithIdOnly = await prisma.matches.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends matchesFindManyArgs>(args?: SelectSubset<T, matchesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matches.
     * @param {matchesCreateArgs} args - Arguments to create a Matches.
     * @example
     * // Create one Matches
     * const Matches = await prisma.matches.create({
     *   data: {
     *     // ... data to create a Matches
     *   }
     * })
     * 
     */
    create<T extends matchesCreateArgs>(args: SelectSubset<T, matchesCreateArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {matchesCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const matches = await prisma.matches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends matchesCreateManyArgs>(args?: SelectSubset<T, matchesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {matchesCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const matches = await prisma.matches.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchesWithIdOnly = await prisma.matches.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends matchesCreateManyAndReturnArgs>(args?: SelectSubset<T, matchesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Matches.
     * @param {matchesDeleteArgs} args - Arguments to delete one Matches.
     * @example
     * // Delete one Matches
     * const Matches = await prisma.matches.delete({
     *   where: {
     *     // ... filter to delete one Matches
     *   }
     * })
     * 
     */
    delete<T extends matchesDeleteArgs>(args: SelectSubset<T, matchesDeleteArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matches.
     * @param {matchesUpdateArgs} args - Arguments to update one Matches.
     * @example
     * // Update one Matches
     * const matches = await prisma.matches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends matchesUpdateArgs>(args: SelectSubset<T, matchesUpdateArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {matchesDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.matches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends matchesDeleteManyArgs>(args?: SelectSubset<T, matchesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const matches = await prisma.matches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends matchesUpdateManyArgs>(args: SelectSubset<T, matchesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {matchesUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const matches = await prisma.matches.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchesWithIdOnly = await prisma.matches.updateManyAndReturn({
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
    updateManyAndReturn<T extends matchesUpdateManyAndReturnArgs>(args: SelectSubset<T, matchesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Matches.
     * @param {matchesUpsertArgs} args - Arguments to update or create a Matches.
     * @example
     * // Update or create a Matches
     * const matches = await prisma.matches.upsert({
     *   create: {
     *     // ... data to create a Matches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matches we want to update
     *   }
     * })
     */
    upsert<T extends matchesUpsertArgs>(args: SelectSubset<T, matchesUpsertArgs<ExtArgs>>): Prisma__matchesClient<$Result.GetResult<Prisma.$matchesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.matches.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends matchesCountArgs>(
      args?: Subset<T, matchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchesAggregateArgs>(args: Subset<T, MatchesAggregateArgs>): Prisma.PrismaPromise<GetMatchesAggregateType<T>>

    /**
     * Group by Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchesGroupByArgs} args - Group by arguments.
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
      T extends matchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: matchesGroupByArgs['orderBy'] }
        : { orderBy?: matchesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, matchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the matches model
   */
  readonly fields: matchesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for matches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__matchesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match_players<T extends matches$match_playersArgs<ExtArgs> = {}>(args?: Subset<T, matches$match_playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_playersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the matches model
   */
  interface matchesFieldRefs {
    readonly id: FieldRef<"matches", 'Int'>
    readonly mode: FieldRef<"matches", 'String'>
    readonly finished_at: FieldRef<"matches", 'DateTime'>
    readonly state: FieldRef<"matches", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * matches findUnique
   */
  export type matchesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where: matchesWhereUniqueInput
  }

  /**
   * matches findUniqueOrThrow
   */
  export type matchesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where: matchesWhereUniqueInput
  }

  /**
   * matches findFirst
   */
  export type matchesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where?: matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matches.
     */
    cursor?: matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matches.
     */
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * matches findFirstOrThrow
   */
  export type matchesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where?: matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matches.
     */
    cursor?: matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matches.
     */
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * matches findMany
   */
  export type matchesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where?: matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchesOrderByWithRelationInput | matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing matches.
     */
    cursor?: matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * matches create
   */
  export type matchesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * The data needed to create a matches.
     */
    data: XOR<matchesCreateInput, matchesUncheckedCreateInput>
  }

  /**
   * matches createMany
   */
  export type matchesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many matches.
     */
    data: matchesCreateManyInput | matchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * matches createManyAndReturn
   */
  export type matchesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * The data used to create many matches.
     */
    data: matchesCreateManyInput | matchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * matches update
   */
  export type matchesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * The data needed to update a matches.
     */
    data: XOR<matchesUpdateInput, matchesUncheckedUpdateInput>
    /**
     * Choose, which matches to update.
     */
    where: matchesWhereUniqueInput
  }

  /**
   * matches updateMany
   */
  export type matchesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update matches.
     */
    data: XOR<matchesUpdateManyMutationInput, matchesUncheckedUpdateManyInput>
    /**
     * Filter which matches to update
     */
    where?: matchesWhereInput
    /**
     * Limit how many matches to update.
     */
    limit?: number
  }

  /**
   * matches updateManyAndReturn
   */
  export type matchesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * The data used to update matches.
     */
    data: XOR<matchesUpdateManyMutationInput, matchesUncheckedUpdateManyInput>
    /**
     * Filter which matches to update
     */
    where?: matchesWhereInput
    /**
     * Limit how many matches to update.
     */
    limit?: number
  }

  /**
   * matches upsert
   */
  export type matchesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * The filter to search for the matches to update in case it exists.
     */
    where: matchesWhereUniqueInput
    /**
     * In case the matches found by the `where` argument doesn't exist, create a new matches with this data.
     */
    create: XOR<matchesCreateInput, matchesUncheckedCreateInput>
    /**
     * In case the matches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<matchesUpdateInput, matchesUncheckedUpdateInput>
  }

  /**
   * matches delete
   */
  export type matchesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
    /**
     * Filter which matches to delete.
     */
    where: matchesWhereUniqueInput
  }

  /**
   * matches deleteMany
   */
  export type matchesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which matches to delete
     */
    where?: matchesWhereInput
    /**
     * Limit how many matches to delete.
     */
    limit?: number
  }

  /**
   * matches.match_players
   */
  export type matches$match_playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_players
     */
    select?: match_playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_players
     */
    omit?: match_playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playersInclude<ExtArgs> | null
    where?: match_playersWhereInput
    orderBy?: match_playersOrderByWithRelationInput | match_playersOrderByWithRelationInput[]
    cursor?: match_playersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Match_playersScalarFieldEnum | Match_playersScalarFieldEnum[]
  }

  /**
   * matches without action
   */
  export type matchesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matches
     */
    select?: matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matches
     */
    omit?: matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchesInclude<ExtArgs> | null
  }


  /**
   * Model puzzles
   */

  export type AggregatePuzzles = {
    _count: PuzzlesCountAggregateOutputType | null
    _avg: PuzzlesAvgAggregateOutputType | null
    _sum: PuzzlesSumAggregateOutputType | null
    _min: PuzzlesMinAggregateOutputType | null
    _max: PuzzlesMaxAggregateOutputType | null
  }

  export type PuzzlesAvgAggregateOutputType = {
    id: number | null
    elo: number | null
  }

  export type PuzzlesSumAggregateOutputType = {
    id: number | null
    elo: number | null
  }

  export type PuzzlesMinAggregateOutputType = {
    id: number | null
    fen: string | null
    elo: number | null
  }

  export type PuzzlesMaxAggregateOutputType = {
    id: number | null
    fen: string | null
    elo: number | null
  }

  export type PuzzlesCountAggregateOutputType = {
    id: number
    fen: number
    solution: number
    elo: number
    themes: number
    _all: number
  }


  export type PuzzlesAvgAggregateInputType = {
    id?: true
    elo?: true
  }

  export type PuzzlesSumAggregateInputType = {
    id?: true
    elo?: true
  }

  export type PuzzlesMinAggregateInputType = {
    id?: true
    fen?: true
    elo?: true
  }

  export type PuzzlesMaxAggregateInputType = {
    id?: true
    fen?: true
    elo?: true
  }

  export type PuzzlesCountAggregateInputType = {
    id?: true
    fen?: true
    solution?: true
    elo?: true
    themes?: true
    _all?: true
  }

  export type PuzzlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which puzzles to aggregate.
     */
    where?: puzzlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of puzzles to fetch.
     */
    orderBy?: puzzlesOrderByWithRelationInput | puzzlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: puzzlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` puzzles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` puzzles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned puzzles
    **/
    _count?: true | PuzzlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PuzzlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PuzzlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PuzzlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PuzzlesMaxAggregateInputType
  }

  export type GetPuzzlesAggregateType<T extends PuzzlesAggregateArgs> = {
        [P in keyof T & keyof AggregatePuzzles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePuzzles[P]>
      : GetScalarType<T[P], AggregatePuzzles[P]>
  }




  export type puzzlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: puzzlesWhereInput
    orderBy?: puzzlesOrderByWithAggregationInput | puzzlesOrderByWithAggregationInput[]
    by: PuzzlesScalarFieldEnum[] | PuzzlesScalarFieldEnum
    having?: puzzlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PuzzlesCountAggregateInputType | true
    _avg?: PuzzlesAvgAggregateInputType
    _sum?: PuzzlesSumAggregateInputType
    _min?: PuzzlesMinAggregateInputType
    _max?: PuzzlesMaxAggregateInputType
  }

  export type PuzzlesGroupByOutputType = {
    id: number
    fen: string
    solution: JsonValue
    elo: number
    themes: string[]
    _count: PuzzlesCountAggregateOutputType | null
    _avg: PuzzlesAvgAggregateOutputType | null
    _sum: PuzzlesSumAggregateOutputType | null
    _min: PuzzlesMinAggregateOutputType | null
    _max: PuzzlesMaxAggregateOutputType | null
  }

  type GetPuzzlesGroupByPayload<T extends puzzlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PuzzlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PuzzlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PuzzlesGroupByOutputType[P]>
            : GetScalarType<T[P], PuzzlesGroupByOutputType[P]>
        }
      >
    >


  export type puzzlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fen?: boolean
    solution?: boolean
    elo?: boolean
    themes?: boolean
  }, ExtArgs["result"]["puzzles"]>

  export type puzzlesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fen?: boolean
    solution?: boolean
    elo?: boolean
    themes?: boolean
  }, ExtArgs["result"]["puzzles"]>

  export type puzzlesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fen?: boolean
    solution?: boolean
    elo?: boolean
    themes?: boolean
  }, ExtArgs["result"]["puzzles"]>

  export type puzzlesSelectScalar = {
    id?: boolean
    fen?: boolean
    solution?: boolean
    elo?: boolean
    themes?: boolean
  }

  export type puzzlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fen" | "solution" | "elo" | "themes", ExtArgs["result"]["puzzles"]>

  export type $puzzlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "puzzles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fen: string
      solution: Prisma.JsonValue
      elo: number
      themes: string[]
    }, ExtArgs["result"]["puzzles"]>
    composites: {}
  }

  type puzzlesGetPayload<S extends boolean | null | undefined | puzzlesDefaultArgs> = $Result.GetResult<Prisma.$puzzlesPayload, S>

  type puzzlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<puzzlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PuzzlesCountAggregateInputType | true
    }

  export interface puzzlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['puzzles'], meta: { name: 'puzzles' } }
    /**
     * Find zero or one Puzzles that matches the filter.
     * @param {puzzlesFindUniqueArgs} args - Arguments to find a Puzzles
     * @example
     * // Get one Puzzles
     * const puzzles = await prisma.puzzles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends puzzlesFindUniqueArgs>(args: SelectSubset<T, puzzlesFindUniqueArgs<ExtArgs>>): Prisma__puzzlesClient<$Result.GetResult<Prisma.$puzzlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Puzzles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {puzzlesFindUniqueOrThrowArgs} args - Arguments to find a Puzzles
     * @example
     * // Get one Puzzles
     * const puzzles = await prisma.puzzles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends puzzlesFindUniqueOrThrowArgs>(args: SelectSubset<T, puzzlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__puzzlesClient<$Result.GetResult<Prisma.$puzzlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Puzzles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {puzzlesFindFirstArgs} args - Arguments to find a Puzzles
     * @example
     * // Get one Puzzles
     * const puzzles = await prisma.puzzles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends puzzlesFindFirstArgs>(args?: SelectSubset<T, puzzlesFindFirstArgs<ExtArgs>>): Prisma__puzzlesClient<$Result.GetResult<Prisma.$puzzlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Puzzles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {puzzlesFindFirstOrThrowArgs} args - Arguments to find a Puzzles
     * @example
     * // Get one Puzzles
     * const puzzles = await prisma.puzzles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends puzzlesFindFirstOrThrowArgs>(args?: SelectSubset<T, puzzlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__puzzlesClient<$Result.GetResult<Prisma.$puzzlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Puzzles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {puzzlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Puzzles
     * const puzzles = await prisma.puzzles.findMany()
     * 
     * // Get first 10 Puzzles
     * const puzzles = await prisma.puzzles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const puzzlesWithIdOnly = await prisma.puzzles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends puzzlesFindManyArgs>(args?: SelectSubset<T, puzzlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$puzzlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Puzzles.
     * @param {puzzlesCreateArgs} args - Arguments to create a Puzzles.
     * @example
     * // Create one Puzzles
     * const Puzzles = await prisma.puzzles.create({
     *   data: {
     *     // ... data to create a Puzzles
     *   }
     * })
     * 
     */
    create<T extends puzzlesCreateArgs>(args: SelectSubset<T, puzzlesCreateArgs<ExtArgs>>): Prisma__puzzlesClient<$Result.GetResult<Prisma.$puzzlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Puzzles.
     * @param {puzzlesCreateManyArgs} args - Arguments to create many Puzzles.
     * @example
     * // Create many Puzzles
     * const puzzles = await prisma.puzzles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends puzzlesCreateManyArgs>(args?: SelectSubset<T, puzzlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Puzzles and returns the data saved in the database.
     * @param {puzzlesCreateManyAndReturnArgs} args - Arguments to create many Puzzles.
     * @example
     * // Create many Puzzles
     * const puzzles = await prisma.puzzles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Puzzles and only return the `id`
     * const puzzlesWithIdOnly = await prisma.puzzles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends puzzlesCreateManyAndReturnArgs>(args?: SelectSubset<T, puzzlesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$puzzlesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Puzzles.
     * @param {puzzlesDeleteArgs} args - Arguments to delete one Puzzles.
     * @example
     * // Delete one Puzzles
     * const Puzzles = await prisma.puzzles.delete({
     *   where: {
     *     // ... filter to delete one Puzzles
     *   }
     * })
     * 
     */
    delete<T extends puzzlesDeleteArgs>(args: SelectSubset<T, puzzlesDeleteArgs<ExtArgs>>): Prisma__puzzlesClient<$Result.GetResult<Prisma.$puzzlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Puzzles.
     * @param {puzzlesUpdateArgs} args - Arguments to update one Puzzles.
     * @example
     * // Update one Puzzles
     * const puzzles = await prisma.puzzles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends puzzlesUpdateArgs>(args: SelectSubset<T, puzzlesUpdateArgs<ExtArgs>>): Prisma__puzzlesClient<$Result.GetResult<Prisma.$puzzlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Puzzles.
     * @param {puzzlesDeleteManyArgs} args - Arguments to filter Puzzles to delete.
     * @example
     * // Delete a few Puzzles
     * const { count } = await prisma.puzzles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends puzzlesDeleteManyArgs>(args?: SelectSubset<T, puzzlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Puzzles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {puzzlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Puzzles
     * const puzzles = await prisma.puzzles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends puzzlesUpdateManyArgs>(args: SelectSubset<T, puzzlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Puzzles and returns the data updated in the database.
     * @param {puzzlesUpdateManyAndReturnArgs} args - Arguments to update many Puzzles.
     * @example
     * // Update many Puzzles
     * const puzzles = await prisma.puzzles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Puzzles and only return the `id`
     * const puzzlesWithIdOnly = await prisma.puzzles.updateManyAndReturn({
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
    updateManyAndReturn<T extends puzzlesUpdateManyAndReturnArgs>(args: SelectSubset<T, puzzlesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$puzzlesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Puzzles.
     * @param {puzzlesUpsertArgs} args - Arguments to update or create a Puzzles.
     * @example
     * // Update or create a Puzzles
     * const puzzles = await prisma.puzzles.upsert({
     *   create: {
     *     // ... data to create a Puzzles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Puzzles we want to update
     *   }
     * })
     */
    upsert<T extends puzzlesUpsertArgs>(args: SelectSubset<T, puzzlesUpsertArgs<ExtArgs>>): Prisma__puzzlesClient<$Result.GetResult<Prisma.$puzzlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Puzzles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {puzzlesCountArgs} args - Arguments to filter Puzzles to count.
     * @example
     * // Count the number of Puzzles
     * const count = await prisma.puzzles.count({
     *   where: {
     *     // ... the filter for the Puzzles we want to count
     *   }
     * })
    **/
    count<T extends puzzlesCountArgs>(
      args?: Subset<T, puzzlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PuzzlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Puzzles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuzzlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PuzzlesAggregateArgs>(args: Subset<T, PuzzlesAggregateArgs>): Prisma.PrismaPromise<GetPuzzlesAggregateType<T>>

    /**
     * Group by Puzzles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {puzzlesGroupByArgs} args - Group by arguments.
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
      T extends puzzlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: puzzlesGroupByArgs['orderBy'] }
        : { orderBy?: puzzlesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, puzzlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPuzzlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the puzzles model
   */
  readonly fields: puzzlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for puzzles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__puzzlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the puzzles model
   */
  interface puzzlesFieldRefs {
    readonly id: FieldRef<"puzzles", 'Int'>
    readonly fen: FieldRef<"puzzles", 'String'>
    readonly solution: FieldRef<"puzzles", 'Json'>
    readonly elo: FieldRef<"puzzles", 'Int'>
    readonly themes: FieldRef<"puzzles", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * puzzles findUnique
   */
  export type puzzlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puzzles
     */
    select?: puzzlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puzzles
     */
    omit?: puzzlesOmit<ExtArgs> | null
    /**
     * Filter, which puzzles to fetch.
     */
    where: puzzlesWhereUniqueInput
  }

  /**
   * puzzles findUniqueOrThrow
   */
  export type puzzlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puzzles
     */
    select?: puzzlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puzzles
     */
    omit?: puzzlesOmit<ExtArgs> | null
    /**
     * Filter, which puzzles to fetch.
     */
    where: puzzlesWhereUniqueInput
  }

  /**
   * puzzles findFirst
   */
  export type puzzlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puzzles
     */
    select?: puzzlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puzzles
     */
    omit?: puzzlesOmit<ExtArgs> | null
    /**
     * Filter, which puzzles to fetch.
     */
    where?: puzzlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of puzzles to fetch.
     */
    orderBy?: puzzlesOrderByWithRelationInput | puzzlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for puzzles.
     */
    cursor?: puzzlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` puzzles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` puzzles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of puzzles.
     */
    distinct?: PuzzlesScalarFieldEnum | PuzzlesScalarFieldEnum[]
  }

  /**
   * puzzles findFirstOrThrow
   */
  export type puzzlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puzzles
     */
    select?: puzzlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puzzles
     */
    omit?: puzzlesOmit<ExtArgs> | null
    /**
     * Filter, which puzzles to fetch.
     */
    where?: puzzlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of puzzles to fetch.
     */
    orderBy?: puzzlesOrderByWithRelationInput | puzzlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for puzzles.
     */
    cursor?: puzzlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` puzzles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` puzzles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of puzzles.
     */
    distinct?: PuzzlesScalarFieldEnum | PuzzlesScalarFieldEnum[]
  }

  /**
   * puzzles findMany
   */
  export type puzzlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puzzles
     */
    select?: puzzlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puzzles
     */
    omit?: puzzlesOmit<ExtArgs> | null
    /**
     * Filter, which puzzles to fetch.
     */
    where?: puzzlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of puzzles to fetch.
     */
    orderBy?: puzzlesOrderByWithRelationInput | puzzlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing puzzles.
     */
    cursor?: puzzlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` puzzles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` puzzles.
     */
    skip?: number
    distinct?: PuzzlesScalarFieldEnum | PuzzlesScalarFieldEnum[]
  }

  /**
   * puzzles create
   */
  export type puzzlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puzzles
     */
    select?: puzzlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puzzles
     */
    omit?: puzzlesOmit<ExtArgs> | null
    /**
     * The data needed to create a puzzles.
     */
    data: XOR<puzzlesCreateInput, puzzlesUncheckedCreateInput>
  }

  /**
   * puzzles createMany
   */
  export type puzzlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many puzzles.
     */
    data: puzzlesCreateManyInput | puzzlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * puzzles createManyAndReturn
   */
  export type puzzlesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puzzles
     */
    select?: puzzlesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the puzzles
     */
    omit?: puzzlesOmit<ExtArgs> | null
    /**
     * The data used to create many puzzles.
     */
    data: puzzlesCreateManyInput | puzzlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * puzzles update
   */
  export type puzzlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puzzles
     */
    select?: puzzlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puzzles
     */
    omit?: puzzlesOmit<ExtArgs> | null
    /**
     * The data needed to update a puzzles.
     */
    data: XOR<puzzlesUpdateInput, puzzlesUncheckedUpdateInput>
    /**
     * Choose, which puzzles to update.
     */
    where: puzzlesWhereUniqueInput
  }

  /**
   * puzzles updateMany
   */
  export type puzzlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update puzzles.
     */
    data: XOR<puzzlesUpdateManyMutationInput, puzzlesUncheckedUpdateManyInput>
    /**
     * Filter which puzzles to update
     */
    where?: puzzlesWhereInput
    /**
     * Limit how many puzzles to update.
     */
    limit?: number
  }

  /**
   * puzzles updateManyAndReturn
   */
  export type puzzlesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puzzles
     */
    select?: puzzlesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the puzzles
     */
    omit?: puzzlesOmit<ExtArgs> | null
    /**
     * The data used to update puzzles.
     */
    data: XOR<puzzlesUpdateManyMutationInput, puzzlesUncheckedUpdateManyInput>
    /**
     * Filter which puzzles to update
     */
    where?: puzzlesWhereInput
    /**
     * Limit how many puzzles to update.
     */
    limit?: number
  }

  /**
   * puzzles upsert
   */
  export type puzzlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puzzles
     */
    select?: puzzlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puzzles
     */
    omit?: puzzlesOmit<ExtArgs> | null
    /**
     * The filter to search for the puzzles to update in case it exists.
     */
    where: puzzlesWhereUniqueInput
    /**
     * In case the puzzles found by the `where` argument doesn't exist, create a new puzzles with this data.
     */
    create: XOR<puzzlesCreateInput, puzzlesUncheckedCreateInput>
    /**
     * In case the puzzles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<puzzlesUpdateInput, puzzlesUncheckedUpdateInput>
  }

  /**
   * puzzles delete
   */
  export type puzzlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puzzles
     */
    select?: puzzlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puzzles
     */
    omit?: puzzlesOmit<ExtArgs> | null
    /**
     * Filter which puzzles to delete.
     */
    where: puzzlesWhereUniqueInput
  }

  /**
   * puzzles deleteMany
   */
  export type puzzlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which puzzles to delete
     */
    where?: puzzlesWhereInput
    /**
     * Limit how many puzzles to delete.
     */
    limit?: number
  }

  /**
   * puzzles without action
   */
  export type puzzlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puzzles
     */
    select?: puzzlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puzzles
     */
    omit?: puzzlesOmit<ExtArgs> | null
  }


  /**
   * Model reports
   */

  export type AggregateReports = {
    _count: ReportsCountAggregateOutputType | null
    _avg: ReportsAvgAggregateOutputType | null
    _sum: ReportsSumAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  export type ReportsAvgAggregateOutputType = {
    id: number | null
    reporter_id: number | null
    reported_id: number | null
  }

  export type ReportsSumAggregateOutputType = {
    id: number | null
    reporter_id: number | null
    reported_id: number | null
  }

  export type ReportsMinAggregateOutputType = {
    id: number | null
    reporter_id: number | null
    reported_id: number | null
    reason: string | null
    created_at: Date | null
    status: string | null
  }

  export type ReportsMaxAggregateOutputType = {
    id: number | null
    reporter_id: number | null
    reported_id: number | null
    reason: string | null
    created_at: Date | null
    status: string | null
  }

  export type ReportsCountAggregateOutputType = {
    id: number
    reporter_id: number
    reported_id: number
    reason: number
    created_at: number
    status: number
    _all: number
  }


  export type ReportsAvgAggregateInputType = {
    id?: true
    reporter_id?: true
    reported_id?: true
  }

  export type ReportsSumAggregateInputType = {
    id?: true
    reporter_id?: true
    reported_id?: true
  }

  export type ReportsMinAggregateInputType = {
    id?: true
    reporter_id?: true
    reported_id?: true
    reason?: true
    created_at?: true
    status?: true
  }

  export type ReportsMaxAggregateInputType = {
    id?: true
    reporter_id?: true
    reported_id?: true
    reason?: true
    created_at?: true
    status?: true
  }

  export type ReportsCountAggregateInputType = {
    id?: true
    reporter_id?: true
    reported_id?: true
    reason?: true
    created_at?: true
    status?: true
    _all?: true
  }

  export type ReportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reports to aggregate.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reports
    **/
    _count?: true | ReportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportsMaxAggregateInputType
  }

  export type GetReportsAggregateType<T extends ReportsAggregateArgs> = {
        [P in keyof T & keyof AggregateReports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReports[P]>
      : GetScalarType<T[P], AggregateReports[P]>
  }




  export type reportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportsWhereInput
    orderBy?: reportsOrderByWithAggregationInput | reportsOrderByWithAggregationInput[]
    by: ReportsScalarFieldEnum[] | ReportsScalarFieldEnum
    having?: reportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportsCountAggregateInputType | true
    _avg?: ReportsAvgAggregateInputType
    _sum?: ReportsSumAggregateInputType
    _min?: ReportsMinAggregateInputType
    _max?: ReportsMaxAggregateInputType
  }

  export type ReportsGroupByOutputType = {
    id: number
    reporter_id: number
    reported_id: number
    reason: string
    created_at: Date
    status: string
    _count: ReportsCountAggregateOutputType | null
    _avg: ReportsAvgAggregateOutputType | null
    _sum: ReportsSumAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  type GetReportsGroupByPayload<T extends reportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportsGroupByOutputType[P]>
            : GetScalarType<T[P], ReportsGroupByOutputType[P]>
        }
      >
    >


  export type reportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporter_id?: boolean
    reported_id?: boolean
    reason?: boolean
    created_at?: boolean
    status?: boolean
    users_reports_reported_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_reports_reporter_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reports"]>

  export type reportsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporter_id?: boolean
    reported_id?: boolean
    reason?: boolean
    created_at?: boolean
    status?: boolean
    users_reports_reported_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_reports_reporter_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reports"]>

  export type reportsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporter_id?: boolean
    reported_id?: boolean
    reason?: boolean
    created_at?: boolean
    status?: boolean
    users_reports_reported_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_reports_reporter_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reports"]>

  export type reportsSelectScalar = {
    id?: boolean
    reporter_id?: boolean
    reported_id?: boolean
    reason?: boolean
    created_at?: boolean
    status?: boolean
  }

  export type reportsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reporter_id" | "reported_id" | "reason" | "created_at" | "status", ExtArgs["result"]["reports"]>
  export type reportsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_reports_reported_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_reports_reporter_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type reportsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_reports_reported_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_reports_reporter_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type reportsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_reports_reported_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_reports_reporter_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $reportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reports"
    objects: {
      users_reports_reported_idTousers: Prisma.$usersPayload<ExtArgs>
      users_reports_reporter_idTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reporter_id: number
      reported_id: number
      reason: string
      created_at: Date
      status: string
    }, ExtArgs["result"]["reports"]>
    composites: {}
  }

  type reportsGetPayload<S extends boolean | null | undefined | reportsDefaultArgs> = $Result.GetResult<Prisma.$reportsPayload, S>

  type reportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reportsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportsCountAggregateInputType | true
    }

  export interface reportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reports'], meta: { name: 'reports' } }
    /**
     * Find zero or one Reports that matches the filter.
     * @param {reportsFindUniqueArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reportsFindUniqueArgs>(args: SelectSubset<T, reportsFindUniqueArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reportsFindUniqueOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reportsFindUniqueOrThrowArgs>(args: SelectSubset<T, reportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsFindFirstArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reportsFindFirstArgs>(args?: SelectSubset<T, reportsFindFirstArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsFindFirstOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reportsFindFirstOrThrowArgs>(args?: SelectSubset<T, reportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.reports.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.reports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportsWithIdOnly = await prisma.reports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reportsFindManyArgs>(args?: SelectSubset<T, reportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reports.
     * @param {reportsCreateArgs} args - Arguments to create a Reports.
     * @example
     * // Create one Reports
     * const Reports = await prisma.reports.create({
     *   data: {
     *     // ... data to create a Reports
     *   }
     * })
     * 
     */
    create<T extends reportsCreateArgs>(args: SelectSubset<T, reportsCreateArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {reportsCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const reports = await prisma.reports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reportsCreateManyArgs>(args?: SelectSubset<T, reportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {reportsCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const reports = await prisma.reports.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportsWithIdOnly = await prisma.reports.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reportsCreateManyAndReturnArgs>(args?: SelectSubset<T, reportsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reports.
     * @param {reportsDeleteArgs} args - Arguments to delete one Reports.
     * @example
     * // Delete one Reports
     * const Reports = await prisma.reports.delete({
     *   where: {
     *     // ... filter to delete one Reports
     *   }
     * })
     * 
     */
    delete<T extends reportsDeleteArgs>(args: SelectSubset<T, reportsDeleteArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reports.
     * @param {reportsUpdateArgs} args - Arguments to update one Reports.
     * @example
     * // Update one Reports
     * const reports = await prisma.reports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reportsUpdateArgs>(args: SelectSubset<T, reportsUpdateArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {reportsDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.reports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reportsDeleteManyArgs>(args?: SelectSubset<T, reportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const reports = await prisma.reports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reportsUpdateManyArgs>(args: SelectSubset<T, reportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {reportsUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const reports = await prisma.reports.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportsWithIdOnly = await prisma.reports.updateManyAndReturn({
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
    updateManyAndReturn<T extends reportsUpdateManyAndReturnArgs>(args: SelectSubset<T, reportsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reports.
     * @param {reportsUpsertArgs} args - Arguments to update or create a Reports.
     * @example
     * // Update or create a Reports
     * const reports = await prisma.reports.upsert({
     *   create: {
     *     // ... data to create a Reports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reports we want to update
     *   }
     * })
     */
    upsert<T extends reportsUpsertArgs>(args: SelectSubset<T, reportsUpsertArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.reports.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends reportsCountArgs>(
      args?: Subset<T, reportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportsAggregateArgs>(args: Subset<T, ReportsAggregateArgs>): Prisma.PrismaPromise<GetReportsAggregateType<T>>

    /**
     * Group by Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsGroupByArgs} args - Group by arguments.
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
      T extends reportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reportsGroupByArgs['orderBy'] }
        : { orderBy?: reportsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reports model
   */
  readonly fields: reportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_reports_reported_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_reports_reporter_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the reports model
   */
  interface reportsFieldRefs {
    readonly id: FieldRef<"reports", 'Int'>
    readonly reporter_id: FieldRef<"reports", 'Int'>
    readonly reported_id: FieldRef<"reports", 'Int'>
    readonly reason: FieldRef<"reports", 'String'>
    readonly created_at: FieldRef<"reports", 'DateTime'>
    readonly status: FieldRef<"reports", 'String'>
  }
    

  // Custom InputTypes
  /**
   * reports findUnique
   */
  export type reportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports findUniqueOrThrow
   */
  export type reportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports findFirst
   */
  export type reportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * reports findFirstOrThrow
   */
  export type reportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * reports findMany
   */
  export type reportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reports.
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * reports create
   */
  export type reportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * The data needed to create a reports.
     */
    data: XOR<reportsCreateInput, reportsUncheckedCreateInput>
  }

  /**
   * reports createMany
   */
  export type reportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reports.
     */
    data: reportsCreateManyInput | reportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reports createManyAndReturn
   */
  export type reportsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * The data used to create many reports.
     */
    data: reportsCreateManyInput | reportsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reports update
   */
  export type reportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * The data needed to update a reports.
     */
    data: XOR<reportsUpdateInput, reportsUncheckedUpdateInput>
    /**
     * Choose, which reports to update.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports updateMany
   */
  export type reportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reports.
     */
    data: XOR<reportsUpdateManyMutationInput, reportsUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportsWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
  }

  /**
   * reports updateManyAndReturn
   */
  export type reportsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * The data used to update reports.
     */
    data: XOR<reportsUpdateManyMutationInput, reportsUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportsWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reports upsert
   */
  export type reportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * The filter to search for the reports to update in case it exists.
     */
    where: reportsWhereUniqueInput
    /**
     * In case the reports found by the `where` argument doesn't exist, create a new reports with this data.
     */
    create: XOR<reportsCreateInput, reportsUncheckedCreateInput>
    /**
     * In case the reports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reportsUpdateInput, reportsUncheckedUpdateInput>
  }

  /**
   * reports delete
   */
  export type reportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter which reports to delete.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports deleteMany
   */
  export type reportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reports to delete
     */
    where?: reportsWhereInput
    /**
     * Limit how many reports to delete.
     */
    limit?: number
  }

  /**
   * reports without action
   */
  export type reportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    trophy: number | null
    nbgame: number | null
    nbwin: number | null
    nblose: number | null
    nbdraw: number | null
    nbreport: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    trophy: number | null
    nbgame: number | null
    nbwin: number | null
    nblose: number | null
    nbdraw: number | null
    nbreport: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    pseudo: string | null
    avatar: Bytes | null
    banner: string | null
    emblem: string | null
    trophy: number | null
    nbgame: number | null
    nbwin: number | null
    nblose: number | null
    nbdraw: number | null
    bio: string | null
    joined_at: Date | null
    role: string | null
    is_active: boolean | null
    nbreport: number | null
    is_banned: boolean | null
    ban_reason: string | null
    last_seen: Date | null
    reset_password_token: string | null
    reset_password_expires: Date | null
    ban_label: string | null
    banned_until: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    pseudo: string | null
    avatar: Bytes | null
    banner: string | null
    emblem: string | null
    trophy: number | null
    nbgame: number | null
    nbwin: number | null
    nblose: number | null
    nbdraw: number | null
    bio: string | null
    joined_at: Date | null
    role: string | null
    is_active: boolean | null
    nbreport: number | null
    is_banned: boolean | null
    ban_reason: string | null
    last_seen: Date | null
    reset_password_token: string | null
    reset_password_expires: Date | null
    ban_label: string | null
    banned_until: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    pseudo: number
    avatar: number
    banner: number
    emblem: number
    trophy: number
    nbgame: number
    nbwin: number
    nblose: number
    nbdraw: number
    bio: number
    joined_at: number
    role: number
    is_active: number
    nbreport: number
    is_banned: number
    ban_reason: number
    last_seen: number
    reset_password_token: number
    reset_password_expires: number
    ban_label: number
    banned_until: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    trophy?: true
    nbgame?: true
    nbwin?: true
    nblose?: true
    nbdraw?: true
    nbreport?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    trophy?: true
    nbgame?: true
    nbwin?: true
    nblose?: true
    nbdraw?: true
    nbreport?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    pseudo?: true
    avatar?: true
    banner?: true
    emblem?: true
    trophy?: true
    nbgame?: true
    nbwin?: true
    nblose?: true
    nbdraw?: true
    bio?: true
    joined_at?: true
    role?: true
    is_active?: true
    nbreport?: true
    is_banned?: true
    ban_reason?: true
    last_seen?: true
    reset_password_token?: true
    reset_password_expires?: true
    ban_label?: true
    banned_until?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    pseudo?: true
    avatar?: true
    banner?: true
    emblem?: true
    trophy?: true
    nbgame?: true
    nbwin?: true
    nblose?: true
    nbdraw?: true
    bio?: true
    joined_at?: true
    role?: true
    is_active?: true
    nbreport?: true
    is_banned?: true
    ban_reason?: true
    last_seen?: true
    reset_password_token?: true
    reset_password_expires?: true
    ban_label?: true
    banned_until?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    pseudo?: true
    avatar?: true
    banner?: true
    emblem?: true
    trophy?: true
    nbgame?: true
    nbwin?: true
    nblose?: true
    nbdraw?: true
    bio?: true
    joined_at?: true
    role?: true
    is_active?: true
    nbreport?: true
    is_banned?: true
    ban_reason?: true
    last_seen?: true
    reset_password_token?: true
    reset_password_expires?: true
    ban_label?: true
    banned_until?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    pseudo: string
    avatar: Bytes | null
    banner: string | null
    emblem: string | null
    trophy: number
    nbgame: number
    nbwin: number
    nblose: number
    nbdraw: number
    bio: string | null
    joined_at: Date
    role: string
    is_active: boolean
    nbreport: number
    is_banned: boolean
    ban_reason: string | null
    last_seen: Date | null
    reset_password_token: string | null
    reset_password_expires: Date | null
    ban_label: string | null
    banned_until: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    pseudo?: boolean
    avatar?: boolean
    banner?: boolean
    emblem?: boolean
    trophy?: boolean
    nbgame?: boolean
    nbwin?: boolean
    nblose?: boolean
    nbdraw?: boolean
    bio?: boolean
    joined_at?: boolean
    role?: boolean
    is_active?: boolean
    nbreport?: boolean
    is_banned?: boolean
    ban_reason?: boolean
    last_seen?: boolean
    reset_password_token?: boolean
    reset_password_expires?: boolean
    ban_label?: boolean
    banned_until?: boolean
    challenges_challenges_from_user_idTousers?: boolean | users$challenges_challenges_from_user_idTousersArgs<ExtArgs>
    challenges_challenges_to_user_idTousers?: boolean | users$challenges_challenges_to_user_idTousersArgs<ExtArgs>
    friends_friends_receiver_idTousers?: boolean | users$friends_friends_receiver_idTousersArgs<ExtArgs>
    friends_friends_requester_idTousers?: boolean | users$friends_friends_requester_idTousersArgs<ExtArgs>
    match_players?: boolean | users$match_playersArgs<ExtArgs>
    reports_reports_reported_idTousers?: boolean | users$reports_reports_reported_idTousersArgs<ExtArgs>
    reports_reports_reporter_idTousers?: boolean | users$reports_reports_reporter_idTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    pseudo?: boolean
    avatar?: boolean
    banner?: boolean
    emblem?: boolean
    trophy?: boolean
    nbgame?: boolean
    nbwin?: boolean
    nblose?: boolean
    nbdraw?: boolean
    bio?: boolean
    joined_at?: boolean
    role?: boolean
    is_active?: boolean
    nbreport?: boolean
    is_banned?: boolean
    ban_reason?: boolean
    last_seen?: boolean
    reset_password_token?: boolean
    reset_password_expires?: boolean
    ban_label?: boolean
    banned_until?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    pseudo?: boolean
    avatar?: boolean
    banner?: boolean
    emblem?: boolean
    trophy?: boolean
    nbgame?: boolean
    nbwin?: boolean
    nblose?: boolean
    nbdraw?: boolean
    bio?: boolean
    joined_at?: boolean
    role?: boolean
    is_active?: boolean
    nbreport?: boolean
    is_banned?: boolean
    ban_reason?: boolean
    last_seen?: boolean
    reset_password_token?: boolean
    reset_password_expires?: boolean
    ban_label?: boolean
    banned_until?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    pseudo?: boolean
    avatar?: boolean
    banner?: boolean
    emblem?: boolean
    trophy?: boolean
    nbgame?: boolean
    nbwin?: boolean
    nblose?: boolean
    nbdraw?: boolean
    bio?: boolean
    joined_at?: boolean
    role?: boolean
    is_active?: boolean
    nbreport?: boolean
    is_banned?: boolean
    ban_reason?: boolean
    last_seen?: boolean
    reset_password_token?: boolean
    reset_password_expires?: boolean
    ban_label?: boolean
    banned_until?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "pseudo" | "avatar" | "banner" | "emblem" | "trophy" | "nbgame" | "nbwin" | "nblose" | "nbdraw" | "bio" | "joined_at" | "role" | "is_active" | "nbreport" | "is_banned" | "ban_reason" | "last_seen" | "reset_password_token" | "reset_password_expires" | "ban_label" | "banned_until", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges_challenges_from_user_idTousers?: boolean | users$challenges_challenges_from_user_idTousersArgs<ExtArgs>
    challenges_challenges_to_user_idTousers?: boolean | users$challenges_challenges_to_user_idTousersArgs<ExtArgs>
    friends_friends_receiver_idTousers?: boolean | users$friends_friends_receiver_idTousersArgs<ExtArgs>
    friends_friends_requester_idTousers?: boolean | users$friends_friends_requester_idTousersArgs<ExtArgs>
    match_players?: boolean | users$match_playersArgs<ExtArgs>
    reports_reports_reported_idTousers?: boolean | users$reports_reports_reported_idTousersArgs<ExtArgs>
    reports_reports_reporter_idTousers?: boolean | users$reports_reports_reporter_idTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      challenges_challenges_from_user_idTousers: Prisma.$challengesPayload<ExtArgs>[]
      challenges_challenges_to_user_idTousers: Prisma.$challengesPayload<ExtArgs>[]
      friends_friends_receiver_idTousers: Prisma.$friendsPayload<ExtArgs>[]
      friends_friends_requester_idTousers: Prisma.$friendsPayload<ExtArgs>[]
      match_players: Prisma.$match_playersPayload<ExtArgs>[]
      reports_reports_reported_idTousers: Prisma.$reportsPayload<ExtArgs>[]
      reports_reports_reporter_idTousers: Prisma.$reportsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      pseudo: string
      avatar: Prisma.Bytes | null
      banner: string | null
      emblem: string | null
      trophy: number
      nbgame: number
      nbwin: number
      nblose: number
      nbdraw: number
      bio: string | null
      joined_at: Date
      role: string
      is_active: boolean
      nbreport: number
      is_banned: boolean
      ban_reason: string | null
      last_seen: Date | null
      reset_password_token: string | null
      reset_password_expires: Date | null
      ban_label: string | null
      banned_until: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenges_challenges_from_user_idTousers<T extends users$challenges_challenges_from_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$challenges_challenges_from_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    challenges_challenges_to_user_idTousers<T extends users$challenges_challenges_to_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$challenges_challenges_to_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friends_friends_receiver_idTousers<T extends users$friends_friends_receiver_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$friends_friends_receiver_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friends_friends_requester_idTousers<T extends users$friends_friends_requester_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$friends_friends_requester_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    match_players<T extends users$match_playersArgs<ExtArgs> = {}>(args?: Subset<T, users$match_playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_playersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports_reports_reported_idTousers<T extends users$reports_reports_reported_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$reports_reports_reported_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports_reports_reporter_idTousers<T extends users$reports_reports_reporter_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$reports_reports_reporter_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly pseudo: FieldRef<"users", 'String'>
    readonly avatar: FieldRef<"users", 'Bytes'>
    readonly banner: FieldRef<"users", 'String'>
    readonly emblem: FieldRef<"users", 'String'>
    readonly trophy: FieldRef<"users", 'Int'>
    readonly nbgame: FieldRef<"users", 'Int'>
    readonly nbwin: FieldRef<"users", 'Int'>
    readonly nblose: FieldRef<"users", 'Int'>
    readonly nbdraw: FieldRef<"users", 'Int'>
    readonly bio: FieldRef<"users", 'String'>
    readonly joined_at: FieldRef<"users", 'DateTime'>
    readonly role: FieldRef<"users", 'String'>
    readonly is_active: FieldRef<"users", 'Boolean'>
    readonly nbreport: FieldRef<"users", 'Int'>
    readonly is_banned: FieldRef<"users", 'Boolean'>
    readonly ban_reason: FieldRef<"users", 'String'>
    readonly last_seen: FieldRef<"users", 'DateTime'>
    readonly reset_password_token: FieldRef<"users", 'String'>
    readonly reset_password_expires: FieldRef<"users", 'DateTime'>
    readonly ban_label: FieldRef<"users", 'String'>
    readonly banned_until: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.challenges_challenges_from_user_idTousers
   */
  export type users$challenges_challenges_from_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    where?: challengesWhereInput
    orderBy?: challengesOrderByWithRelationInput | challengesOrderByWithRelationInput[]
    cursor?: challengesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengesScalarFieldEnum | ChallengesScalarFieldEnum[]
  }

  /**
   * users.challenges_challenges_to_user_idTousers
   */
  export type users$challenges_challenges_to_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    where?: challengesWhereInput
    orderBy?: challengesOrderByWithRelationInput | challengesOrderByWithRelationInput[]
    cursor?: challengesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengesScalarFieldEnum | ChallengesScalarFieldEnum[]
  }

  /**
   * users.friends_friends_receiver_idTousers
   */
  export type users$friends_friends_receiver_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    cursor?: friendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * users.friends_friends_requester_idTousers
   */
  export type users$friends_friends_requester_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    cursor?: friendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * users.match_players
   */
  export type users$match_playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_players
     */
    select?: match_playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_players
     */
    omit?: match_playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playersInclude<ExtArgs> | null
    where?: match_playersWhereInput
    orderBy?: match_playersOrderByWithRelationInput | match_playersOrderByWithRelationInput[]
    cursor?: match_playersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Match_playersScalarFieldEnum | Match_playersScalarFieldEnum[]
  }

  /**
   * users.reports_reports_reported_idTousers
   */
  export type users$reports_reports_reported_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    where?: reportsWhereInput
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    cursor?: reportsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * users.reports_reports_reporter_idTousers
   */
  export type users$reports_reports_reporter_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    where?: reportsWhereInput
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    cursor?: reportsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model challenges
   */

  export type AggregateChallenges = {
    _count: ChallengesCountAggregateOutputType | null
    _avg: ChallengesAvgAggregateOutputType | null
    _sum: ChallengesSumAggregateOutputType | null
    _min: ChallengesMinAggregateOutputType | null
    _max: ChallengesMaxAggregateOutputType | null
  }

  export type ChallengesAvgAggregateOutputType = {
    id: number | null
    from_user_id: number | null
    to_user_id: number | null
  }

  export type ChallengesSumAggregateOutputType = {
    id: number | null
    from_user_id: number | null
    to_user_id: number | null
  }

  export type ChallengesMinAggregateOutputType = {
    id: number | null
    from_user_id: number | null
    to_user_id: number | null
    status: string | null
    created_at: Date | null
  }

  export type ChallengesMaxAggregateOutputType = {
    id: number | null
    from_user_id: number | null
    to_user_id: number | null
    status: string | null
    created_at: Date | null
  }

  export type ChallengesCountAggregateOutputType = {
    id: number
    from_user_id: number
    to_user_id: number
    status: number
    created_at: number
    _all: number
  }


  export type ChallengesAvgAggregateInputType = {
    id?: true
    from_user_id?: true
    to_user_id?: true
  }

  export type ChallengesSumAggregateInputType = {
    id?: true
    from_user_id?: true
    to_user_id?: true
  }

  export type ChallengesMinAggregateInputType = {
    id?: true
    from_user_id?: true
    to_user_id?: true
    status?: true
    created_at?: true
  }

  export type ChallengesMaxAggregateInputType = {
    id?: true
    from_user_id?: true
    to_user_id?: true
    status?: true
    created_at?: true
  }

  export type ChallengesCountAggregateInputType = {
    id?: true
    from_user_id?: true
    to_user_id?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type ChallengesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challenges to aggregate.
     */
    where?: challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengesOrderByWithRelationInput | challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned challenges
    **/
    _count?: true | ChallengesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengesMaxAggregateInputType
  }

  export type GetChallengesAggregateType<T extends ChallengesAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenges]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenges[P]>
      : GetScalarType<T[P], AggregateChallenges[P]>
  }




  export type challengesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challengesWhereInput
    orderBy?: challengesOrderByWithAggregationInput | challengesOrderByWithAggregationInput[]
    by: ChallengesScalarFieldEnum[] | ChallengesScalarFieldEnum
    having?: challengesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengesCountAggregateInputType | true
    _avg?: ChallengesAvgAggregateInputType
    _sum?: ChallengesSumAggregateInputType
    _min?: ChallengesMinAggregateInputType
    _max?: ChallengesMaxAggregateInputType
  }

  export type ChallengesGroupByOutputType = {
    id: number
    from_user_id: number
    to_user_id: number
    status: string
    created_at: Date
    _count: ChallengesCountAggregateOutputType | null
    _avg: ChallengesAvgAggregateOutputType | null
    _sum: ChallengesSumAggregateOutputType | null
    _min: ChallengesMinAggregateOutputType | null
    _max: ChallengesMaxAggregateOutputType | null
  }

  type GetChallengesGroupByPayload<T extends challengesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengesGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengesGroupByOutputType[P]>
        }
      >
    >


  export type challengesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from_user_id?: boolean
    to_user_id?: boolean
    status?: boolean
    created_at?: boolean
    users_challenges_from_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_challenges_to_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenges"]>

  export type challengesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from_user_id?: boolean
    to_user_id?: boolean
    status?: boolean
    created_at?: boolean
    users_challenges_from_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_challenges_to_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenges"]>

  export type challengesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from_user_id?: boolean
    to_user_id?: boolean
    status?: boolean
    created_at?: boolean
    users_challenges_from_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_challenges_to_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenges"]>

  export type challengesSelectScalar = {
    id?: boolean
    from_user_id?: boolean
    to_user_id?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type challengesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "from_user_id" | "to_user_id" | "status" | "created_at", ExtArgs["result"]["challenges"]>
  export type challengesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_challenges_from_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_challenges_to_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type challengesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_challenges_from_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_challenges_to_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type challengesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_challenges_from_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_challenges_to_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $challengesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "challenges"
    objects: {
      users_challenges_from_user_idTousers: Prisma.$usersPayload<ExtArgs>
      users_challenges_to_user_idTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      from_user_id: number
      to_user_id: number
      status: string
      created_at: Date
    }, ExtArgs["result"]["challenges"]>
    composites: {}
  }

  type challengesGetPayload<S extends boolean | null | undefined | challengesDefaultArgs> = $Result.GetResult<Prisma.$challengesPayload, S>

  type challengesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<challengesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengesCountAggregateInputType | true
    }

  export interface challengesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['challenges'], meta: { name: 'challenges' } }
    /**
     * Find zero or one Challenges that matches the filter.
     * @param {challengesFindUniqueArgs} args - Arguments to find a Challenges
     * @example
     * // Get one Challenges
     * const challenges = await prisma.challenges.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends challengesFindUniqueArgs>(args: SelectSubset<T, challengesFindUniqueArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenges that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {challengesFindUniqueOrThrowArgs} args - Arguments to find a Challenges
     * @example
     * // Get one Challenges
     * const challenges = await prisma.challenges.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends challengesFindUniqueOrThrowArgs>(args: SelectSubset<T, challengesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengesFindFirstArgs} args - Arguments to find a Challenges
     * @example
     * // Get one Challenges
     * const challenges = await prisma.challenges.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends challengesFindFirstArgs>(args?: SelectSubset<T, challengesFindFirstArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenges that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengesFindFirstOrThrowArgs} args - Arguments to find a Challenges
     * @example
     * // Get one Challenges
     * const challenges = await prisma.challenges.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends challengesFindFirstOrThrowArgs>(args?: SelectSubset<T, challengesFindFirstOrThrowArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenges.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenges.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengesWithIdOnly = await prisma.challenges.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends challengesFindManyArgs>(args?: SelectSubset<T, challengesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenges.
     * @param {challengesCreateArgs} args - Arguments to create a Challenges.
     * @example
     * // Create one Challenges
     * const Challenges = await prisma.challenges.create({
     *   data: {
     *     // ... data to create a Challenges
     *   }
     * })
     * 
     */
    create<T extends challengesCreateArgs>(args: SelectSubset<T, challengesCreateArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {challengesCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenges = await prisma.challenges.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends challengesCreateManyArgs>(args?: SelectSubset<T, challengesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenges and returns the data saved in the database.
     * @param {challengesCreateManyAndReturnArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenges = await prisma.challenges.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenges and only return the `id`
     * const challengesWithIdOnly = await prisma.challenges.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends challengesCreateManyAndReturnArgs>(args?: SelectSubset<T, challengesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenges.
     * @param {challengesDeleteArgs} args - Arguments to delete one Challenges.
     * @example
     * // Delete one Challenges
     * const Challenges = await prisma.challenges.delete({
     *   where: {
     *     // ... filter to delete one Challenges
     *   }
     * })
     * 
     */
    delete<T extends challengesDeleteArgs>(args: SelectSubset<T, challengesDeleteArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenges.
     * @param {challengesUpdateArgs} args - Arguments to update one Challenges.
     * @example
     * // Update one Challenges
     * const challenges = await prisma.challenges.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends challengesUpdateArgs>(args: SelectSubset<T, challengesUpdateArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {challengesDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenges.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends challengesDeleteManyArgs>(args?: SelectSubset<T, challengesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenges = await prisma.challenges.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends challengesUpdateManyArgs>(args: SelectSubset<T, challengesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges and returns the data updated in the database.
     * @param {challengesUpdateManyAndReturnArgs} args - Arguments to update many Challenges.
     * @example
     * // Update many Challenges
     * const challenges = await prisma.challenges.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenges and only return the `id`
     * const challengesWithIdOnly = await prisma.challenges.updateManyAndReturn({
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
    updateManyAndReturn<T extends challengesUpdateManyAndReturnArgs>(args: SelectSubset<T, challengesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenges.
     * @param {challengesUpsertArgs} args - Arguments to update or create a Challenges.
     * @example
     * // Update or create a Challenges
     * const challenges = await prisma.challenges.upsert({
     *   create: {
     *     // ... data to create a Challenges
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenges we want to update
     *   }
     * })
     */
    upsert<T extends challengesUpsertArgs>(args: SelectSubset<T, challengesUpsertArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengesCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenges.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends challengesCountArgs>(
      args?: Subset<T, challengesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengesAggregateArgs>(args: Subset<T, ChallengesAggregateArgs>): Prisma.PrismaPromise<GetChallengesAggregateType<T>>

    /**
     * Group by Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengesGroupByArgs} args - Group by arguments.
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
      T extends challengesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: challengesGroupByArgs['orderBy'] }
        : { orderBy?: challengesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, challengesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the challenges model
   */
  readonly fields: challengesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for challenges.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__challengesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_challenges_from_user_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_challenges_to_user_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the challenges model
   */
  interface challengesFieldRefs {
    readonly id: FieldRef<"challenges", 'Int'>
    readonly from_user_id: FieldRef<"challenges", 'Int'>
    readonly to_user_id: FieldRef<"challenges", 'Int'>
    readonly status: FieldRef<"challenges", 'String'>
    readonly created_at: FieldRef<"challenges", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * challenges findUnique
   */
  export type challengesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * Filter, which challenges to fetch.
     */
    where: challengesWhereUniqueInput
  }

  /**
   * challenges findUniqueOrThrow
   */
  export type challengesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * Filter, which challenges to fetch.
     */
    where: challengesWhereUniqueInput
  }

  /**
   * challenges findFirst
   */
  export type challengesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * Filter, which challenges to fetch.
     */
    where?: challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengesOrderByWithRelationInput | challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challenges.
     */
    cursor?: challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challenges.
     */
    distinct?: ChallengesScalarFieldEnum | ChallengesScalarFieldEnum[]
  }

  /**
   * challenges findFirstOrThrow
   */
  export type challengesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * Filter, which challenges to fetch.
     */
    where?: challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengesOrderByWithRelationInput | challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challenges.
     */
    cursor?: challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challenges.
     */
    distinct?: ChallengesScalarFieldEnum | ChallengesScalarFieldEnum[]
  }

  /**
   * challenges findMany
   */
  export type challengesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * Filter, which challenges to fetch.
     */
    where?: challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengesOrderByWithRelationInput | challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing challenges.
     */
    cursor?: challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    distinct?: ChallengesScalarFieldEnum | ChallengesScalarFieldEnum[]
  }

  /**
   * challenges create
   */
  export type challengesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * The data needed to create a challenges.
     */
    data: XOR<challengesCreateInput, challengesUncheckedCreateInput>
  }

  /**
   * challenges createMany
   */
  export type challengesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many challenges.
     */
    data: challengesCreateManyInput | challengesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * challenges createManyAndReturn
   */
  export type challengesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * The data used to create many challenges.
     */
    data: challengesCreateManyInput | challengesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * challenges update
   */
  export type challengesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * The data needed to update a challenges.
     */
    data: XOR<challengesUpdateInput, challengesUncheckedUpdateInput>
    /**
     * Choose, which challenges to update.
     */
    where: challengesWhereUniqueInput
  }

  /**
   * challenges updateMany
   */
  export type challengesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update challenges.
     */
    data: XOR<challengesUpdateManyMutationInput, challengesUncheckedUpdateManyInput>
    /**
     * Filter which challenges to update
     */
    where?: challengesWhereInput
    /**
     * Limit how many challenges to update.
     */
    limit?: number
  }

  /**
   * challenges updateManyAndReturn
   */
  export type challengesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * The data used to update challenges.
     */
    data: XOR<challengesUpdateManyMutationInput, challengesUncheckedUpdateManyInput>
    /**
     * Filter which challenges to update
     */
    where?: challengesWhereInput
    /**
     * Limit how many challenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * challenges upsert
   */
  export type challengesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * The filter to search for the challenges to update in case it exists.
     */
    where: challengesWhereUniqueInput
    /**
     * In case the challenges found by the `where` argument doesn't exist, create a new challenges with this data.
     */
    create: XOR<challengesCreateInput, challengesUncheckedCreateInput>
    /**
     * In case the challenges was found with the provided `where` argument, update it with this data.
     */
    update: XOR<challengesUpdateInput, challengesUncheckedUpdateInput>
  }

  /**
   * challenges delete
   */
  export type challengesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * Filter which challenges to delete.
     */
    where: challengesWhereUniqueInput
  }

  /**
   * challenges deleteMany
   */
  export type challengesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challenges to delete
     */
    where?: challengesWhereInput
    /**
     * Limit how many challenges to delete.
     */
    limit?: number
  }

  /**
   * challenges without action
   */
  export type challengesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
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


  export const FriendsScalarFieldEnum: {
    id: 'id',
    requester_id: 'requester_id',
    receiver_id: 'receiver_id',
    status: 'status',
    created_at: 'created_at'
  };

  export type FriendsScalarFieldEnum = (typeof FriendsScalarFieldEnum)[keyof typeof FriendsScalarFieldEnum]


  export const Match_playersScalarFieldEnum: {
    id: 'id',
    match_id: 'match_id',
    user_id: 'user_id',
    is_winner: 'is_winner',
    puzzles_solved: 'puzzles_solved',
    trophies_delta: 'trophies_delta'
  };

  export type Match_playersScalarFieldEnum = (typeof Match_playersScalarFieldEnum)[keyof typeof Match_playersScalarFieldEnum]


  export const MatchesScalarFieldEnum: {
    id: 'id',
    mode: 'mode',
    finished_at: 'finished_at',
    state: 'state'
  };

  export type MatchesScalarFieldEnum = (typeof MatchesScalarFieldEnum)[keyof typeof MatchesScalarFieldEnum]


  export const PuzzlesScalarFieldEnum: {
    id: 'id',
    fen: 'fen',
    solution: 'solution',
    elo: 'elo',
    themes: 'themes'
  };

  export type PuzzlesScalarFieldEnum = (typeof PuzzlesScalarFieldEnum)[keyof typeof PuzzlesScalarFieldEnum]


  export const ReportsScalarFieldEnum: {
    id: 'id',
    reporter_id: 'reporter_id',
    reported_id: 'reported_id',
    reason: 'reason',
    created_at: 'created_at',
    status: 'status'
  };

  export type ReportsScalarFieldEnum = (typeof ReportsScalarFieldEnum)[keyof typeof ReportsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    pseudo: 'pseudo',
    avatar: 'avatar',
    banner: 'banner',
    emblem: 'emblem',
    trophy: 'trophy',
    nbgame: 'nbgame',
    nbwin: 'nbwin',
    nblose: 'nblose',
    nbdraw: 'nbdraw',
    bio: 'bio',
    joined_at: 'joined_at',
    role: 'role',
    is_active: 'is_active',
    nbreport: 'nbreport',
    is_banned: 'is_banned',
    ban_reason: 'ban_reason',
    last_seen: 'last_seen',
    reset_password_token: 'reset_password_token',
    reset_password_expires: 'reset_password_expires',
    ban_label: 'ban_label',
    banned_until: 'banned_until'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ChallengesScalarFieldEnum: {
    id: 'id',
    from_user_id: 'from_user_id',
    to_user_id: 'to_user_id',
    status: 'status',
    created_at: 'created_at'
  };

  export type ChallengesScalarFieldEnum = (typeof ChallengesScalarFieldEnum)[keyof typeof ChallengesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


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


  export type friendsWhereInput = {
    AND?: friendsWhereInput | friendsWhereInput[]
    OR?: friendsWhereInput[]
    NOT?: friendsWhereInput | friendsWhereInput[]
    id?: IntFilter<"friends"> | number
    requester_id?: IntFilter<"friends"> | number
    receiver_id?: IntFilter<"friends"> | number
    status?: StringFilter<"friends"> | string
    created_at?: DateTimeFilter<"friends"> | Date | string
    users_friends_receiver_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_friends_requester_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type friendsOrderByWithRelationInput = {
    id?: SortOrder
    requester_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    users_friends_receiver_idTousers?: usersOrderByWithRelationInput
    users_friends_requester_idTousers?: usersOrderByWithRelationInput
  }

  export type friendsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    requester_id_receiver_id?: friendsRequester_idReceiver_idCompoundUniqueInput
    AND?: friendsWhereInput | friendsWhereInput[]
    OR?: friendsWhereInput[]
    NOT?: friendsWhereInput | friendsWhereInput[]
    requester_id?: IntFilter<"friends"> | number
    receiver_id?: IntFilter<"friends"> | number
    status?: StringFilter<"friends"> | string
    created_at?: DateTimeFilter<"friends"> | Date | string
    users_friends_receiver_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_friends_requester_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "requester_id_receiver_id">

  export type friendsOrderByWithAggregationInput = {
    id?: SortOrder
    requester_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: friendsCountOrderByAggregateInput
    _avg?: friendsAvgOrderByAggregateInput
    _max?: friendsMaxOrderByAggregateInput
    _min?: friendsMinOrderByAggregateInput
    _sum?: friendsSumOrderByAggregateInput
  }

  export type friendsScalarWhereWithAggregatesInput = {
    AND?: friendsScalarWhereWithAggregatesInput | friendsScalarWhereWithAggregatesInput[]
    OR?: friendsScalarWhereWithAggregatesInput[]
    NOT?: friendsScalarWhereWithAggregatesInput | friendsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"friends"> | number
    requester_id?: IntWithAggregatesFilter<"friends"> | number
    receiver_id?: IntWithAggregatesFilter<"friends"> | number
    status?: StringWithAggregatesFilter<"friends"> | string
    created_at?: DateTimeWithAggregatesFilter<"friends"> | Date | string
  }

  export type match_playersWhereInput = {
    AND?: match_playersWhereInput | match_playersWhereInput[]
    OR?: match_playersWhereInput[]
    NOT?: match_playersWhereInput | match_playersWhereInput[]
    id?: IntFilter<"match_players"> | number
    match_id?: IntFilter<"match_players"> | number
    user_id?: IntFilter<"match_players"> | number
    is_winner?: BoolFilter<"match_players"> | boolean
    puzzles_solved?: IntFilter<"match_players"> | number
    trophies_delta?: IntFilter<"match_players"> | number
    matches?: XOR<MatchesScalarRelationFilter, matchesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type match_playersOrderByWithRelationInput = {
    id?: SortOrder
    match_id?: SortOrder
    user_id?: SortOrder
    is_winner?: SortOrder
    puzzles_solved?: SortOrder
    trophies_delta?: SortOrder
    matches?: matchesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type match_playersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    match_id_user_id?: match_playersMatch_idUser_idCompoundUniqueInput
    AND?: match_playersWhereInput | match_playersWhereInput[]
    OR?: match_playersWhereInput[]
    NOT?: match_playersWhereInput | match_playersWhereInput[]
    match_id?: IntFilter<"match_players"> | number
    user_id?: IntFilter<"match_players"> | number
    is_winner?: BoolFilter<"match_players"> | boolean
    puzzles_solved?: IntFilter<"match_players"> | number
    trophies_delta?: IntFilter<"match_players"> | number
    matches?: XOR<MatchesScalarRelationFilter, matchesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "match_id_user_id">

  export type match_playersOrderByWithAggregationInput = {
    id?: SortOrder
    match_id?: SortOrder
    user_id?: SortOrder
    is_winner?: SortOrder
    puzzles_solved?: SortOrder
    trophies_delta?: SortOrder
    _count?: match_playersCountOrderByAggregateInput
    _avg?: match_playersAvgOrderByAggregateInput
    _max?: match_playersMaxOrderByAggregateInput
    _min?: match_playersMinOrderByAggregateInput
    _sum?: match_playersSumOrderByAggregateInput
  }

  export type match_playersScalarWhereWithAggregatesInput = {
    AND?: match_playersScalarWhereWithAggregatesInput | match_playersScalarWhereWithAggregatesInput[]
    OR?: match_playersScalarWhereWithAggregatesInput[]
    NOT?: match_playersScalarWhereWithAggregatesInput | match_playersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"match_players"> | number
    match_id?: IntWithAggregatesFilter<"match_players"> | number
    user_id?: IntWithAggregatesFilter<"match_players"> | number
    is_winner?: BoolWithAggregatesFilter<"match_players"> | boolean
    puzzles_solved?: IntWithAggregatesFilter<"match_players"> | number
    trophies_delta?: IntWithAggregatesFilter<"match_players"> | number
  }

  export type matchesWhereInput = {
    AND?: matchesWhereInput | matchesWhereInput[]
    OR?: matchesWhereInput[]
    NOT?: matchesWhereInput | matchesWhereInput[]
    id?: IntFilter<"matches"> | number
    mode?: StringFilter<"matches"> | string
    finished_at?: DateTimeNullableFilter<"matches"> | Date | string | null
    state?: JsonNullableFilter<"matches">
    match_players?: Match_playersListRelationFilter
  }

  export type matchesOrderByWithRelationInput = {
    id?: SortOrder
    mode?: SortOrder
    finished_at?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    match_players?: match_playersOrderByRelationAggregateInput
  }

  export type matchesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: matchesWhereInput | matchesWhereInput[]
    OR?: matchesWhereInput[]
    NOT?: matchesWhereInput | matchesWhereInput[]
    mode?: StringFilter<"matches"> | string
    finished_at?: DateTimeNullableFilter<"matches"> | Date | string | null
    state?: JsonNullableFilter<"matches">
    match_players?: Match_playersListRelationFilter
  }, "id">

  export type matchesOrderByWithAggregationInput = {
    id?: SortOrder
    mode?: SortOrder
    finished_at?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    _count?: matchesCountOrderByAggregateInput
    _avg?: matchesAvgOrderByAggregateInput
    _max?: matchesMaxOrderByAggregateInput
    _min?: matchesMinOrderByAggregateInput
    _sum?: matchesSumOrderByAggregateInput
  }

  export type matchesScalarWhereWithAggregatesInput = {
    AND?: matchesScalarWhereWithAggregatesInput | matchesScalarWhereWithAggregatesInput[]
    OR?: matchesScalarWhereWithAggregatesInput[]
    NOT?: matchesScalarWhereWithAggregatesInput | matchesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"matches"> | number
    mode?: StringWithAggregatesFilter<"matches"> | string
    finished_at?: DateTimeNullableWithAggregatesFilter<"matches"> | Date | string | null
    state?: JsonNullableWithAggregatesFilter<"matches">
  }

  export type puzzlesWhereInput = {
    AND?: puzzlesWhereInput | puzzlesWhereInput[]
    OR?: puzzlesWhereInput[]
    NOT?: puzzlesWhereInput | puzzlesWhereInput[]
    id?: IntFilter<"puzzles"> | number
    fen?: StringFilter<"puzzles"> | string
    solution?: JsonFilter<"puzzles">
    elo?: IntFilter<"puzzles"> | number
    themes?: StringNullableListFilter<"puzzles">
  }

  export type puzzlesOrderByWithRelationInput = {
    id?: SortOrder
    fen?: SortOrder
    solution?: SortOrder
    elo?: SortOrder
    themes?: SortOrder
  }

  export type puzzlesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: puzzlesWhereInput | puzzlesWhereInput[]
    OR?: puzzlesWhereInput[]
    NOT?: puzzlesWhereInput | puzzlesWhereInput[]
    fen?: StringFilter<"puzzles"> | string
    solution?: JsonFilter<"puzzles">
    elo?: IntFilter<"puzzles"> | number
    themes?: StringNullableListFilter<"puzzles">
  }, "id">

  export type puzzlesOrderByWithAggregationInput = {
    id?: SortOrder
    fen?: SortOrder
    solution?: SortOrder
    elo?: SortOrder
    themes?: SortOrder
    _count?: puzzlesCountOrderByAggregateInput
    _avg?: puzzlesAvgOrderByAggregateInput
    _max?: puzzlesMaxOrderByAggregateInput
    _min?: puzzlesMinOrderByAggregateInput
    _sum?: puzzlesSumOrderByAggregateInput
  }

  export type puzzlesScalarWhereWithAggregatesInput = {
    AND?: puzzlesScalarWhereWithAggregatesInput | puzzlesScalarWhereWithAggregatesInput[]
    OR?: puzzlesScalarWhereWithAggregatesInput[]
    NOT?: puzzlesScalarWhereWithAggregatesInput | puzzlesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"puzzles"> | number
    fen?: StringWithAggregatesFilter<"puzzles"> | string
    solution?: JsonWithAggregatesFilter<"puzzles">
    elo?: IntWithAggregatesFilter<"puzzles"> | number
    themes?: StringNullableListFilter<"puzzles">
  }

  export type reportsWhereInput = {
    AND?: reportsWhereInput | reportsWhereInput[]
    OR?: reportsWhereInput[]
    NOT?: reportsWhereInput | reportsWhereInput[]
    id?: IntFilter<"reports"> | number
    reporter_id?: IntFilter<"reports"> | number
    reported_id?: IntFilter<"reports"> | number
    reason?: StringFilter<"reports"> | string
    created_at?: DateTimeFilter<"reports"> | Date | string
    status?: StringFilter<"reports"> | string
    users_reports_reported_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_reports_reporter_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type reportsOrderByWithRelationInput = {
    id?: SortOrder
    reporter_id?: SortOrder
    reported_id?: SortOrder
    reason?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
    users_reports_reported_idTousers?: usersOrderByWithRelationInput
    users_reports_reporter_idTousers?: usersOrderByWithRelationInput
  }

  export type reportsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reportsWhereInput | reportsWhereInput[]
    OR?: reportsWhereInput[]
    NOT?: reportsWhereInput | reportsWhereInput[]
    reporter_id?: IntFilter<"reports"> | number
    reported_id?: IntFilter<"reports"> | number
    reason?: StringFilter<"reports"> | string
    created_at?: DateTimeFilter<"reports"> | Date | string
    status?: StringFilter<"reports"> | string
    users_reports_reported_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_reports_reporter_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type reportsOrderByWithAggregationInput = {
    id?: SortOrder
    reporter_id?: SortOrder
    reported_id?: SortOrder
    reason?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
    _count?: reportsCountOrderByAggregateInput
    _avg?: reportsAvgOrderByAggregateInput
    _max?: reportsMaxOrderByAggregateInput
    _min?: reportsMinOrderByAggregateInput
    _sum?: reportsSumOrderByAggregateInput
  }

  export type reportsScalarWhereWithAggregatesInput = {
    AND?: reportsScalarWhereWithAggregatesInput | reportsScalarWhereWithAggregatesInput[]
    OR?: reportsScalarWhereWithAggregatesInput[]
    NOT?: reportsScalarWhereWithAggregatesInput | reportsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reports"> | number
    reporter_id?: IntWithAggregatesFilter<"reports"> | number
    reported_id?: IntWithAggregatesFilter<"reports"> | number
    reason?: StringWithAggregatesFilter<"reports"> | string
    created_at?: DateTimeWithAggregatesFilter<"reports"> | Date | string
    status?: StringWithAggregatesFilter<"reports"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    pseudo?: StringFilter<"users"> | string
    avatar?: BytesNullableFilter<"users"> | Bytes | null
    banner?: StringNullableFilter<"users"> | string | null
    emblem?: StringNullableFilter<"users"> | string | null
    trophy?: IntFilter<"users"> | number
    nbgame?: IntFilter<"users"> | number
    nbwin?: IntFilter<"users"> | number
    nblose?: IntFilter<"users"> | number
    nbdraw?: IntFilter<"users"> | number
    bio?: StringNullableFilter<"users"> | string | null
    joined_at?: DateTimeFilter<"users"> | Date | string
    role?: StringFilter<"users"> | string
    is_active?: BoolFilter<"users"> | boolean
    nbreport?: IntFilter<"users"> | number
    is_banned?: BoolFilter<"users"> | boolean
    ban_reason?: StringNullableFilter<"users"> | string | null
    last_seen?: DateTimeNullableFilter<"users"> | Date | string | null
    reset_password_token?: StringNullableFilter<"users"> | string | null
    reset_password_expires?: DateTimeNullableFilter<"users"> | Date | string | null
    ban_label?: StringNullableFilter<"users"> | string | null
    banned_until?: DateTimeNullableFilter<"users"> | Date | string | null
    challenges_challenges_from_user_idTousers?: ChallengesListRelationFilter
    challenges_challenges_to_user_idTousers?: ChallengesListRelationFilter
    friends_friends_receiver_idTousers?: FriendsListRelationFilter
    friends_friends_requester_idTousers?: FriendsListRelationFilter
    match_players?: Match_playersListRelationFilter
    reports_reports_reported_idTousers?: ReportsListRelationFilter
    reports_reports_reporter_idTousers?: ReportsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pseudo?: SortOrder
    avatar?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    emblem?: SortOrderInput | SortOrder
    trophy?: SortOrder
    nbgame?: SortOrder
    nbwin?: SortOrder
    nblose?: SortOrder
    nbdraw?: SortOrder
    bio?: SortOrderInput | SortOrder
    joined_at?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    nbreport?: SortOrder
    is_banned?: SortOrder
    ban_reason?: SortOrderInput | SortOrder
    last_seen?: SortOrderInput | SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    reset_password_expires?: SortOrderInput | SortOrder
    ban_label?: SortOrderInput | SortOrder
    banned_until?: SortOrderInput | SortOrder
    challenges_challenges_from_user_idTousers?: challengesOrderByRelationAggregateInput
    challenges_challenges_to_user_idTousers?: challengesOrderByRelationAggregateInput
    friends_friends_receiver_idTousers?: friendsOrderByRelationAggregateInput
    friends_friends_requester_idTousers?: friendsOrderByRelationAggregateInput
    match_players?: match_playersOrderByRelationAggregateInput
    reports_reports_reported_idTousers?: reportsOrderByRelationAggregateInput
    reports_reports_reporter_idTousers?: reportsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    pseudo?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    avatar?: BytesNullableFilter<"users"> | Bytes | null
    banner?: StringNullableFilter<"users"> | string | null
    emblem?: StringNullableFilter<"users"> | string | null
    trophy?: IntFilter<"users"> | number
    nbgame?: IntFilter<"users"> | number
    nbwin?: IntFilter<"users"> | number
    nblose?: IntFilter<"users"> | number
    nbdraw?: IntFilter<"users"> | number
    bio?: StringNullableFilter<"users"> | string | null
    joined_at?: DateTimeFilter<"users"> | Date | string
    role?: StringFilter<"users"> | string
    is_active?: BoolFilter<"users"> | boolean
    nbreport?: IntFilter<"users"> | number
    is_banned?: BoolFilter<"users"> | boolean
    ban_reason?: StringNullableFilter<"users"> | string | null
    last_seen?: DateTimeNullableFilter<"users"> | Date | string | null
    reset_password_token?: StringNullableFilter<"users"> | string | null
    reset_password_expires?: DateTimeNullableFilter<"users"> | Date | string | null
    ban_label?: StringNullableFilter<"users"> | string | null
    banned_until?: DateTimeNullableFilter<"users"> | Date | string | null
    challenges_challenges_from_user_idTousers?: ChallengesListRelationFilter
    challenges_challenges_to_user_idTousers?: ChallengesListRelationFilter
    friends_friends_receiver_idTousers?: FriendsListRelationFilter
    friends_friends_requester_idTousers?: FriendsListRelationFilter
    match_players?: Match_playersListRelationFilter
    reports_reports_reported_idTousers?: ReportsListRelationFilter
    reports_reports_reporter_idTousers?: ReportsListRelationFilter
  }, "id" | "email" | "pseudo">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pseudo?: SortOrder
    avatar?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    emblem?: SortOrderInput | SortOrder
    trophy?: SortOrder
    nbgame?: SortOrder
    nbwin?: SortOrder
    nblose?: SortOrder
    nbdraw?: SortOrder
    bio?: SortOrderInput | SortOrder
    joined_at?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    nbreport?: SortOrder
    is_banned?: SortOrder
    ban_reason?: SortOrderInput | SortOrder
    last_seen?: SortOrderInput | SortOrder
    reset_password_token?: SortOrderInput | SortOrder
    reset_password_expires?: SortOrderInput | SortOrder
    ban_label?: SortOrderInput | SortOrder
    banned_until?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    pseudo?: StringWithAggregatesFilter<"users"> | string
    avatar?: BytesNullableWithAggregatesFilter<"users"> | Bytes | null
    banner?: StringNullableWithAggregatesFilter<"users"> | string | null
    emblem?: StringNullableWithAggregatesFilter<"users"> | string | null
    trophy?: IntWithAggregatesFilter<"users"> | number
    nbgame?: IntWithAggregatesFilter<"users"> | number
    nbwin?: IntWithAggregatesFilter<"users"> | number
    nblose?: IntWithAggregatesFilter<"users"> | number
    nbdraw?: IntWithAggregatesFilter<"users"> | number
    bio?: StringNullableWithAggregatesFilter<"users"> | string | null
    joined_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    role?: StringWithAggregatesFilter<"users"> | string
    is_active?: BoolWithAggregatesFilter<"users"> | boolean
    nbreport?: IntWithAggregatesFilter<"users"> | number
    is_banned?: BoolWithAggregatesFilter<"users"> | boolean
    ban_reason?: StringNullableWithAggregatesFilter<"users"> | string | null
    last_seen?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    reset_password_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    reset_password_expires?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    ban_label?: StringNullableWithAggregatesFilter<"users"> | string | null
    banned_until?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type challengesWhereInput = {
    AND?: challengesWhereInput | challengesWhereInput[]
    OR?: challengesWhereInput[]
    NOT?: challengesWhereInput | challengesWhereInput[]
    id?: IntFilter<"challenges"> | number
    from_user_id?: IntFilter<"challenges"> | number
    to_user_id?: IntFilter<"challenges"> | number
    status?: StringFilter<"challenges"> | string
    created_at?: DateTimeFilter<"challenges"> | Date | string
    users_challenges_from_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_challenges_to_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type challengesOrderByWithRelationInput = {
    id?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    users_challenges_from_user_idTousers?: usersOrderByWithRelationInput
    users_challenges_to_user_idTousers?: usersOrderByWithRelationInput
  }

  export type challengesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: challengesWhereInput | challengesWhereInput[]
    OR?: challengesWhereInput[]
    NOT?: challengesWhereInput | challengesWhereInput[]
    from_user_id?: IntFilter<"challenges"> | number
    to_user_id?: IntFilter<"challenges"> | number
    status?: StringFilter<"challenges"> | string
    created_at?: DateTimeFilter<"challenges"> | Date | string
    users_challenges_from_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_challenges_to_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type challengesOrderByWithAggregationInput = {
    id?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: challengesCountOrderByAggregateInput
    _avg?: challengesAvgOrderByAggregateInput
    _max?: challengesMaxOrderByAggregateInput
    _min?: challengesMinOrderByAggregateInput
    _sum?: challengesSumOrderByAggregateInput
  }

  export type challengesScalarWhereWithAggregatesInput = {
    AND?: challengesScalarWhereWithAggregatesInput | challengesScalarWhereWithAggregatesInput[]
    OR?: challengesScalarWhereWithAggregatesInput[]
    NOT?: challengesScalarWhereWithAggregatesInput | challengesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"challenges"> | number
    from_user_id?: IntWithAggregatesFilter<"challenges"> | number
    to_user_id?: IntWithAggregatesFilter<"challenges"> | number
    status?: StringWithAggregatesFilter<"challenges"> | string
    created_at?: DateTimeWithAggregatesFilter<"challenges"> | Date | string
  }

  export type friendsCreateInput = {
    status?: string
    created_at?: Date | string
    users_friends_receiver_idTousers: usersCreateNestedOneWithoutFriends_friends_receiver_idTousersInput
    users_friends_requester_idTousers: usersCreateNestedOneWithoutFriends_friends_requester_idTousersInput
  }

  export type friendsUncheckedCreateInput = {
    id?: number
    requester_id: number
    receiver_id: number
    status?: string
    created_at?: Date | string
  }

  export type friendsUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_friends_receiver_idTousers?: usersUpdateOneRequiredWithoutFriends_friends_receiver_idTousersNestedInput
    users_friends_requester_idTousers?: usersUpdateOneRequiredWithoutFriends_friends_requester_idTousersNestedInput
  }

  export type friendsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    requester_id?: IntFieldUpdateOperationsInput | number
    receiver_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsCreateManyInput = {
    id?: number
    requester_id: number
    receiver_id: number
    status?: string
    created_at?: Date | string
  }

  export type friendsUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    requester_id?: IntFieldUpdateOperationsInput | number
    receiver_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type match_playersCreateInput = {
    is_winner?: boolean
    puzzles_solved?: number
    trophies_delta?: number
    matches: matchesCreateNestedOneWithoutMatch_playersInput
    users: usersCreateNestedOneWithoutMatch_playersInput
  }

  export type match_playersUncheckedCreateInput = {
    id?: number
    match_id: number
    user_id: number
    is_winner?: boolean
    puzzles_solved?: number
    trophies_delta?: number
  }

  export type match_playersUpdateInput = {
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    puzzles_solved?: IntFieldUpdateOperationsInput | number
    trophies_delta?: IntFieldUpdateOperationsInput | number
    matches?: matchesUpdateOneRequiredWithoutMatch_playersNestedInput
    users?: usersUpdateOneRequiredWithoutMatch_playersNestedInput
  }

  export type match_playersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    match_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    puzzles_solved?: IntFieldUpdateOperationsInput | number
    trophies_delta?: IntFieldUpdateOperationsInput | number
  }

  export type match_playersCreateManyInput = {
    id?: number
    match_id: number
    user_id: number
    is_winner?: boolean
    puzzles_solved?: number
    trophies_delta?: number
  }

  export type match_playersUpdateManyMutationInput = {
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    puzzles_solved?: IntFieldUpdateOperationsInput | number
    trophies_delta?: IntFieldUpdateOperationsInput | number
  }

  export type match_playersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    match_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    puzzles_solved?: IntFieldUpdateOperationsInput | number
    trophies_delta?: IntFieldUpdateOperationsInput | number
  }

  export type matchesCreateInput = {
    mode: string
    finished_at?: Date | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
    match_players?: match_playersCreateNestedManyWithoutMatchesInput
  }

  export type matchesUncheckedCreateInput = {
    id?: number
    mode: string
    finished_at?: Date | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
    match_players?: match_playersUncheckedCreateNestedManyWithoutMatchesInput
  }

  export type matchesUpdateInput = {
    mode?: StringFieldUpdateOperationsInput | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
    match_players?: match_playersUpdateManyWithoutMatchesNestedInput
  }

  export type matchesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
    match_players?: match_playersUncheckedUpdateManyWithoutMatchesNestedInput
  }

  export type matchesCreateManyInput = {
    id?: number
    mode: string
    finished_at?: Date | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
  }

  export type matchesUpdateManyMutationInput = {
    mode?: StringFieldUpdateOperationsInput | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
  }

  export type matchesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
  }

  export type puzzlesCreateInput = {
    fen: string
    solution: JsonNullValueInput | InputJsonValue
    elo: number
    themes?: puzzlesCreatethemesInput | string[]
  }

  export type puzzlesUncheckedCreateInput = {
    id?: number
    fen: string
    solution: JsonNullValueInput | InputJsonValue
    elo: number
    themes?: puzzlesCreatethemesInput | string[]
  }

  export type puzzlesUpdateInput = {
    fen?: StringFieldUpdateOperationsInput | string
    solution?: JsonNullValueInput | InputJsonValue
    elo?: IntFieldUpdateOperationsInput | number
    themes?: puzzlesUpdatethemesInput | string[]
  }

  export type puzzlesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fen?: StringFieldUpdateOperationsInput | string
    solution?: JsonNullValueInput | InputJsonValue
    elo?: IntFieldUpdateOperationsInput | number
    themes?: puzzlesUpdatethemesInput | string[]
  }

  export type puzzlesCreateManyInput = {
    id?: number
    fen: string
    solution: JsonNullValueInput | InputJsonValue
    elo: number
    themes?: puzzlesCreatethemesInput | string[]
  }

  export type puzzlesUpdateManyMutationInput = {
    fen?: StringFieldUpdateOperationsInput | string
    solution?: JsonNullValueInput | InputJsonValue
    elo?: IntFieldUpdateOperationsInput | number
    themes?: puzzlesUpdatethemesInput | string[]
  }

  export type puzzlesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fen?: StringFieldUpdateOperationsInput | string
    solution?: JsonNullValueInput | InputJsonValue
    elo?: IntFieldUpdateOperationsInput | number
    themes?: puzzlesUpdatethemesInput | string[]
  }

  export type reportsCreateInput = {
    reason: string
    created_at?: Date | string
    status?: string
    users_reports_reported_idTousers: usersCreateNestedOneWithoutReports_reports_reported_idTousersInput
    users_reports_reporter_idTousers: usersCreateNestedOneWithoutReports_reports_reporter_idTousersInput
  }

  export type reportsUncheckedCreateInput = {
    id?: number
    reporter_id: number
    reported_id: number
    reason: string
    created_at?: Date | string
    status?: string
  }

  export type reportsUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    users_reports_reported_idTousers?: usersUpdateOneRequiredWithoutReports_reports_reported_idTousersNestedInput
    users_reports_reporter_idTousers?: usersUpdateOneRequiredWithoutReports_reports_reporter_idTousersNestedInput
  }

  export type reportsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporter_id?: IntFieldUpdateOperationsInput | number
    reported_id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type reportsCreateManyInput = {
    id?: number
    reporter_id: number
    reported_id: number
    reason: string
    created_at?: Date | string
    status?: string
  }

  export type reportsUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type reportsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporter_id?: IntFieldUpdateOperationsInput | number
    reported_id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_from_user_idTousers?: challengesCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput
    challenges_challenges_to_user_idTousers?: challengesCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput
    friends_friends_receiver_idTousers?: friendsCreateNestedManyWithoutUsers_friends_receiver_idTousersInput
    friends_friends_requester_idTousers?: friendsCreateNestedManyWithoutUsers_friends_requester_idTousersInput
    match_players?: match_playersCreateNestedManyWithoutUsersInput
    reports_reports_reported_idTousers?: reportsCreateNestedManyWithoutUsers_reports_reported_idTousersInput
    reports_reports_reporter_idTousers?: reportsCreateNestedManyWithoutUsers_reports_reporter_idTousersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUncheckedCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput
    challenges_challenges_to_user_idTousers?: challengesUncheckedCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput
    friends_friends_receiver_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_receiver_idTousersInput
    friends_friends_requester_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_requester_idTousersInput
    match_players?: match_playersUncheckedCreateNestedManyWithoutUsersInput
    reports_reports_reported_idTousers?: reportsUncheckedCreateNestedManyWithoutUsers_reports_reported_idTousersInput
    reports_reports_reporter_idTousers?: reportsUncheckedCreateNestedManyWithoutUsers_reports_reporter_idTousersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput
    challenges_challenges_to_user_idTousers?: challengesUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput
    friends_friends_receiver_idTousers?: friendsUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput
    friends_friends_requester_idTousers?: friendsUpdateManyWithoutUsers_friends_requester_idTousersNestedInput
    match_players?: match_playersUpdateManyWithoutUsersNestedInput
    reports_reports_reported_idTousers?: reportsUpdateManyWithoutUsers_reports_reported_idTousersNestedInput
    reports_reports_reporter_idTousers?: reportsUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUncheckedUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput
    challenges_challenges_to_user_idTousers?: challengesUncheckedUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput
    friends_friends_receiver_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput
    friends_friends_requester_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_requester_idTousersNestedInput
    match_players?: match_playersUncheckedUpdateManyWithoutUsersNestedInput
    reports_reports_reported_idTousers?: reportsUncheckedUpdateManyWithoutUsers_reports_reported_idTousersNestedInput
    reports_reports_reporter_idTousers?: reportsUncheckedUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type challengesCreateInput = {
    status?: string
    created_at?: Date | string
    users_challenges_from_user_idTousers: usersCreateNestedOneWithoutChallenges_challenges_from_user_idTousersInput
    users_challenges_to_user_idTousers: usersCreateNestedOneWithoutChallenges_challenges_to_user_idTousersInput
  }

  export type challengesUncheckedCreateInput = {
    id?: number
    from_user_id: number
    to_user_id: number
    status?: string
    created_at?: Date | string
  }

  export type challengesUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_challenges_from_user_idTousers?: usersUpdateOneRequiredWithoutChallenges_challenges_from_user_idTousersNestedInput
    users_challenges_to_user_idTousers?: usersUpdateOneRequiredWithoutChallenges_challenges_to_user_idTousersNestedInput
  }

  export type challengesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    from_user_id?: IntFieldUpdateOperationsInput | number
    to_user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengesCreateManyInput = {
    id?: number
    from_user_id: number
    to_user_id: number
    status?: string
    created_at?: Date | string
  }

  export type challengesUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    from_user_id?: IntFieldUpdateOperationsInput | number
    to_user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type friendsRequester_idReceiver_idCompoundUniqueInput = {
    requester_id: number
    receiver_id: number
  }

  export type friendsCountOrderByAggregateInput = {
    id?: SortOrder
    requester_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type friendsAvgOrderByAggregateInput = {
    id?: SortOrder
    requester_id?: SortOrder
    receiver_id?: SortOrder
  }

  export type friendsMaxOrderByAggregateInput = {
    id?: SortOrder
    requester_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type friendsMinOrderByAggregateInput = {
    id?: SortOrder
    requester_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type friendsSumOrderByAggregateInput = {
    id?: SortOrder
    requester_id?: SortOrder
    receiver_id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MatchesScalarRelationFilter = {
    is?: matchesWhereInput
    isNot?: matchesWhereInput
  }

  export type match_playersMatch_idUser_idCompoundUniqueInput = {
    match_id: number
    user_id: number
  }

  export type match_playersCountOrderByAggregateInput = {
    id?: SortOrder
    match_id?: SortOrder
    user_id?: SortOrder
    is_winner?: SortOrder
    puzzles_solved?: SortOrder
    trophies_delta?: SortOrder
  }

  export type match_playersAvgOrderByAggregateInput = {
    id?: SortOrder
    match_id?: SortOrder
    user_id?: SortOrder
    puzzles_solved?: SortOrder
    trophies_delta?: SortOrder
  }

  export type match_playersMaxOrderByAggregateInput = {
    id?: SortOrder
    match_id?: SortOrder
    user_id?: SortOrder
    is_winner?: SortOrder
    puzzles_solved?: SortOrder
    trophies_delta?: SortOrder
  }

  export type match_playersMinOrderByAggregateInput = {
    id?: SortOrder
    match_id?: SortOrder
    user_id?: SortOrder
    is_winner?: SortOrder
    puzzles_solved?: SortOrder
    trophies_delta?: SortOrder
  }

  export type match_playersSumOrderByAggregateInput = {
    id?: SortOrder
    match_id?: SortOrder
    user_id?: SortOrder
    puzzles_solved?: SortOrder
    trophies_delta?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type Match_playersListRelationFilter = {
    every?: match_playersWhereInput
    some?: match_playersWhereInput
    none?: match_playersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type match_playersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type matchesCountOrderByAggregateInput = {
    id?: SortOrder
    mode?: SortOrder
    finished_at?: SortOrder
    state?: SortOrder
  }

  export type matchesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type matchesMaxOrderByAggregateInput = {
    id?: SortOrder
    mode?: SortOrder
    finished_at?: SortOrder
  }

  export type matchesMinOrderByAggregateInput = {
    id?: SortOrder
    mode?: SortOrder
    finished_at?: SortOrder
  }

  export type matchesSumOrderByAggregateInput = {
    id?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type puzzlesCountOrderByAggregateInput = {
    id?: SortOrder
    fen?: SortOrder
    solution?: SortOrder
    elo?: SortOrder
    themes?: SortOrder
  }

  export type puzzlesAvgOrderByAggregateInput = {
    id?: SortOrder
    elo?: SortOrder
  }

  export type puzzlesMaxOrderByAggregateInput = {
    id?: SortOrder
    fen?: SortOrder
    elo?: SortOrder
  }

  export type puzzlesMinOrderByAggregateInput = {
    id?: SortOrder
    fen?: SortOrder
    elo?: SortOrder
  }

  export type puzzlesSumOrderByAggregateInput = {
    id?: SortOrder
    elo?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type reportsCountOrderByAggregateInput = {
    id?: SortOrder
    reporter_id?: SortOrder
    reported_id?: SortOrder
    reason?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type reportsAvgOrderByAggregateInput = {
    id?: SortOrder
    reporter_id?: SortOrder
    reported_id?: SortOrder
  }

  export type reportsMaxOrderByAggregateInput = {
    id?: SortOrder
    reporter_id?: SortOrder
    reported_id?: SortOrder
    reason?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type reportsMinOrderByAggregateInput = {
    id?: SortOrder
    reporter_id?: SortOrder
    reported_id?: SortOrder
    reason?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type reportsSumOrderByAggregateInput = {
    id?: SortOrder
    reporter_id?: SortOrder
    reported_id?: SortOrder
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
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

  export type ChallengesListRelationFilter = {
    every?: challengesWhereInput
    some?: challengesWhereInput
    none?: challengesWhereInput
  }

  export type FriendsListRelationFilter = {
    every?: friendsWhereInput
    some?: friendsWhereInput
    none?: friendsWhereInput
  }

  export type ReportsListRelationFilter = {
    every?: reportsWhereInput
    some?: reportsWhereInput
    none?: reportsWhereInput
  }

  export type challengesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type friendsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reportsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pseudo?: SortOrder
    avatar?: SortOrder
    banner?: SortOrder
    emblem?: SortOrder
    trophy?: SortOrder
    nbgame?: SortOrder
    nbwin?: SortOrder
    nblose?: SortOrder
    nbdraw?: SortOrder
    bio?: SortOrder
    joined_at?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    nbreport?: SortOrder
    is_banned?: SortOrder
    ban_reason?: SortOrder
    last_seen?: SortOrder
    reset_password_token?: SortOrder
    reset_password_expires?: SortOrder
    ban_label?: SortOrder
    banned_until?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    trophy?: SortOrder
    nbgame?: SortOrder
    nbwin?: SortOrder
    nblose?: SortOrder
    nbdraw?: SortOrder
    nbreport?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pseudo?: SortOrder
    avatar?: SortOrder
    banner?: SortOrder
    emblem?: SortOrder
    trophy?: SortOrder
    nbgame?: SortOrder
    nbwin?: SortOrder
    nblose?: SortOrder
    nbdraw?: SortOrder
    bio?: SortOrder
    joined_at?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    nbreport?: SortOrder
    is_banned?: SortOrder
    ban_reason?: SortOrder
    last_seen?: SortOrder
    reset_password_token?: SortOrder
    reset_password_expires?: SortOrder
    ban_label?: SortOrder
    banned_until?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pseudo?: SortOrder
    avatar?: SortOrder
    banner?: SortOrder
    emblem?: SortOrder
    trophy?: SortOrder
    nbgame?: SortOrder
    nbwin?: SortOrder
    nblose?: SortOrder
    nbdraw?: SortOrder
    bio?: SortOrder
    joined_at?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    nbreport?: SortOrder
    is_banned?: SortOrder
    ban_reason?: SortOrder
    last_seen?: SortOrder
    reset_password_token?: SortOrder
    reset_password_expires?: SortOrder
    ban_label?: SortOrder
    banned_until?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    trophy?: SortOrder
    nbgame?: SortOrder
    nbwin?: SortOrder
    nblose?: SortOrder
    nbdraw?: SortOrder
    nbreport?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
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

  export type challengesCountOrderByAggregateInput = {
    id?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type challengesAvgOrderByAggregateInput = {
    id?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
  }

  export type challengesMaxOrderByAggregateInput = {
    id?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type challengesMinOrderByAggregateInput = {
    id?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type challengesSumOrderByAggregateInput = {
    id?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
  }

  export type usersCreateNestedOneWithoutFriends_friends_receiver_idTousersInput = {
    create?: XOR<usersCreateWithoutFriends_friends_receiver_idTousersInput, usersUncheckedCreateWithoutFriends_friends_receiver_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFriends_friends_receiver_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutFriends_friends_requester_idTousersInput = {
    create?: XOR<usersCreateWithoutFriends_friends_requester_idTousersInput, usersUncheckedCreateWithoutFriends_friends_requester_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFriends_friends_requester_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutFriends_friends_receiver_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutFriends_friends_receiver_idTousersInput, usersUncheckedCreateWithoutFriends_friends_receiver_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFriends_friends_receiver_idTousersInput
    upsert?: usersUpsertWithoutFriends_friends_receiver_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFriends_friends_receiver_idTousersInput, usersUpdateWithoutFriends_friends_receiver_idTousersInput>, usersUncheckedUpdateWithoutFriends_friends_receiver_idTousersInput>
  }

  export type usersUpdateOneRequiredWithoutFriends_friends_requester_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutFriends_friends_requester_idTousersInput, usersUncheckedCreateWithoutFriends_friends_requester_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFriends_friends_requester_idTousersInput
    upsert?: usersUpsertWithoutFriends_friends_requester_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFriends_friends_requester_idTousersInput, usersUpdateWithoutFriends_friends_requester_idTousersInput>, usersUncheckedUpdateWithoutFriends_friends_requester_idTousersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type matchesCreateNestedOneWithoutMatch_playersInput = {
    create?: XOR<matchesCreateWithoutMatch_playersInput, matchesUncheckedCreateWithoutMatch_playersInput>
    connectOrCreate?: matchesCreateOrConnectWithoutMatch_playersInput
    connect?: matchesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutMatch_playersInput = {
    create?: XOR<usersCreateWithoutMatch_playersInput, usersUncheckedCreateWithoutMatch_playersInput>
    connectOrCreate?: usersCreateOrConnectWithoutMatch_playersInput
    connect?: usersWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type matchesUpdateOneRequiredWithoutMatch_playersNestedInput = {
    create?: XOR<matchesCreateWithoutMatch_playersInput, matchesUncheckedCreateWithoutMatch_playersInput>
    connectOrCreate?: matchesCreateOrConnectWithoutMatch_playersInput
    upsert?: matchesUpsertWithoutMatch_playersInput
    connect?: matchesWhereUniqueInput
    update?: XOR<XOR<matchesUpdateToOneWithWhereWithoutMatch_playersInput, matchesUpdateWithoutMatch_playersInput>, matchesUncheckedUpdateWithoutMatch_playersInput>
  }

  export type usersUpdateOneRequiredWithoutMatch_playersNestedInput = {
    create?: XOR<usersCreateWithoutMatch_playersInput, usersUncheckedCreateWithoutMatch_playersInput>
    connectOrCreate?: usersCreateOrConnectWithoutMatch_playersInput
    upsert?: usersUpsertWithoutMatch_playersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMatch_playersInput, usersUpdateWithoutMatch_playersInput>, usersUncheckedUpdateWithoutMatch_playersInput>
  }

  export type match_playersCreateNestedManyWithoutMatchesInput = {
    create?: XOR<match_playersCreateWithoutMatchesInput, match_playersUncheckedCreateWithoutMatchesInput> | match_playersCreateWithoutMatchesInput[] | match_playersUncheckedCreateWithoutMatchesInput[]
    connectOrCreate?: match_playersCreateOrConnectWithoutMatchesInput | match_playersCreateOrConnectWithoutMatchesInput[]
    createMany?: match_playersCreateManyMatchesInputEnvelope
    connect?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
  }

  export type match_playersUncheckedCreateNestedManyWithoutMatchesInput = {
    create?: XOR<match_playersCreateWithoutMatchesInput, match_playersUncheckedCreateWithoutMatchesInput> | match_playersCreateWithoutMatchesInput[] | match_playersUncheckedCreateWithoutMatchesInput[]
    connectOrCreate?: match_playersCreateOrConnectWithoutMatchesInput | match_playersCreateOrConnectWithoutMatchesInput[]
    createMany?: match_playersCreateManyMatchesInputEnvelope
    connect?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type match_playersUpdateManyWithoutMatchesNestedInput = {
    create?: XOR<match_playersCreateWithoutMatchesInput, match_playersUncheckedCreateWithoutMatchesInput> | match_playersCreateWithoutMatchesInput[] | match_playersUncheckedCreateWithoutMatchesInput[]
    connectOrCreate?: match_playersCreateOrConnectWithoutMatchesInput | match_playersCreateOrConnectWithoutMatchesInput[]
    upsert?: match_playersUpsertWithWhereUniqueWithoutMatchesInput | match_playersUpsertWithWhereUniqueWithoutMatchesInput[]
    createMany?: match_playersCreateManyMatchesInputEnvelope
    set?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    disconnect?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    delete?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    connect?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    update?: match_playersUpdateWithWhereUniqueWithoutMatchesInput | match_playersUpdateWithWhereUniqueWithoutMatchesInput[]
    updateMany?: match_playersUpdateManyWithWhereWithoutMatchesInput | match_playersUpdateManyWithWhereWithoutMatchesInput[]
    deleteMany?: match_playersScalarWhereInput | match_playersScalarWhereInput[]
  }

  export type match_playersUncheckedUpdateManyWithoutMatchesNestedInput = {
    create?: XOR<match_playersCreateWithoutMatchesInput, match_playersUncheckedCreateWithoutMatchesInput> | match_playersCreateWithoutMatchesInput[] | match_playersUncheckedCreateWithoutMatchesInput[]
    connectOrCreate?: match_playersCreateOrConnectWithoutMatchesInput | match_playersCreateOrConnectWithoutMatchesInput[]
    upsert?: match_playersUpsertWithWhereUniqueWithoutMatchesInput | match_playersUpsertWithWhereUniqueWithoutMatchesInput[]
    createMany?: match_playersCreateManyMatchesInputEnvelope
    set?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    disconnect?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    delete?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    connect?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    update?: match_playersUpdateWithWhereUniqueWithoutMatchesInput | match_playersUpdateWithWhereUniqueWithoutMatchesInput[]
    updateMany?: match_playersUpdateManyWithWhereWithoutMatchesInput | match_playersUpdateManyWithWhereWithoutMatchesInput[]
    deleteMany?: match_playersScalarWhereInput | match_playersScalarWhereInput[]
  }

  export type puzzlesCreatethemesInput = {
    set: string[]
  }

  export type puzzlesUpdatethemesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type usersCreateNestedOneWithoutReports_reports_reported_idTousersInput = {
    create?: XOR<usersCreateWithoutReports_reports_reported_idTousersInput, usersUncheckedCreateWithoutReports_reports_reported_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutReports_reports_reported_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReports_reports_reporter_idTousersInput = {
    create?: XOR<usersCreateWithoutReports_reports_reporter_idTousersInput, usersUncheckedCreateWithoutReports_reports_reporter_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutReports_reports_reporter_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutReports_reports_reported_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutReports_reports_reported_idTousersInput, usersUncheckedCreateWithoutReports_reports_reported_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutReports_reports_reported_idTousersInput
    upsert?: usersUpsertWithoutReports_reports_reported_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReports_reports_reported_idTousersInput, usersUpdateWithoutReports_reports_reported_idTousersInput>, usersUncheckedUpdateWithoutReports_reports_reported_idTousersInput>
  }

  export type usersUpdateOneRequiredWithoutReports_reports_reporter_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutReports_reports_reporter_idTousersInput, usersUncheckedCreateWithoutReports_reports_reporter_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutReports_reports_reporter_idTousersInput
    upsert?: usersUpsertWithoutReports_reports_reporter_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReports_reports_reporter_idTousersInput, usersUpdateWithoutReports_reports_reporter_idTousersInput>, usersUncheckedUpdateWithoutReports_reports_reporter_idTousersInput>
  }

  export type challengesCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput = {
    create?: XOR<challengesCreateWithoutUsers_challenges_from_user_idTousersInput, challengesUncheckedCreateWithoutUsers_challenges_from_user_idTousersInput> | challengesCreateWithoutUsers_challenges_from_user_idTousersInput[] | challengesUncheckedCreateWithoutUsers_challenges_from_user_idTousersInput[]
    connectOrCreate?: challengesCreateOrConnectWithoutUsers_challenges_from_user_idTousersInput | challengesCreateOrConnectWithoutUsers_challenges_from_user_idTousersInput[]
    createMany?: challengesCreateManyUsers_challenges_from_user_idTousersInputEnvelope
    connect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
  }

  export type challengesCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput = {
    create?: XOR<challengesCreateWithoutUsers_challenges_to_user_idTousersInput, challengesUncheckedCreateWithoutUsers_challenges_to_user_idTousersInput> | challengesCreateWithoutUsers_challenges_to_user_idTousersInput[] | challengesUncheckedCreateWithoutUsers_challenges_to_user_idTousersInput[]
    connectOrCreate?: challengesCreateOrConnectWithoutUsers_challenges_to_user_idTousersInput | challengesCreateOrConnectWithoutUsers_challenges_to_user_idTousersInput[]
    createMany?: challengesCreateManyUsers_challenges_to_user_idTousersInputEnvelope
    connect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
  }

  export type friendsCreateNestedManyWithoutUsers_friends_receiver_idTousersInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_receiver_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_receiver_idTousersInput> | friendsCreateWithoutUsers_friends_receiver_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_receiver_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_receiver_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_receiver_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_receiver_idTousersInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type friendsCreateNestedManyWithoutUsers_friends_requester_idTousersInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_requester_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_requester_idTousersInput> | friendsCreateWithoutUsers_friends_requester_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_requester_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_requester_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_requester_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_requester_idTousersInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type match_playersCreateNestedManyWithoutUsersInput = {
    create?: XOR<match_playersCreateWithoutUsersInput, match_playersUncheckedCreateWithoutUsersInput> | match_playersCreateWithoutUsersInput[] | match_playersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: match_playersCreateOrConnectWithoutUsersInput | match_playersCreateOrConnectWithoutUsersInput[]
    createMany?: match_playersCreateManyUsersInputEnvelope
    connect?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
  }

  export type reportsCreateNestedManyWithoutUsers_reports_reported_idTousersInput = {
    create?: XOR<reportsCreateWithoutUsers_reports_reported_idTousersInput, reportsUncheckedCreateWithoutUsers_reports_reported_idTousersInput> | reportsCreateWithoutUsers_reports_reported_idTousersInput[] | reportsUncheckedCreateWithoutUsers_reports_reported_idTousersInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUsers_reports_reported_idTousersInput | reportsCreateOrConnectWithoutUsers_reports_reported_idTousersInput[]
    createMany?: reportsCreateManyUsers_reports_reported_idTousersInputEnvelope
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
  }

  export type reportsCreateNestedManyWithoutUsers_reports_reporter_idTousersInput = {
    create?: XOR<reportsCreateWithoutUsers_reports_reporter_idTousersInput, reportsUncheckedCreateWithoutUsers_reports_reporter_idTousersInput> | reportsCreateWithoutUsers_reports_reporter_idTousersInput[] | reportsUncheckedCreateWithoutUsers_reports_reporter_idTousersInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUsers_reports_reporter_idTousersInput | reportsCreateOrConnectWithoutUsers_reports_reporter_idTousersInput[]
    createMany?: reportsCreateManyUsers_reports_reporter_idTousersInputEnvelope
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
  }

  export type challengesUncheckedCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput = {
    create?: XOR<challengesCreateWithoutUsers_challenges_from_user_idTousersInput, challengesUncheckedCreateWithoutUsers_challenges_from_user_idTousersInput> | challengesCreateWithoutUsers_challenges_from_user_idTousersInput[] | challengesUncheckedCreateWithoutUsers_challenges_from_user_idTousersInput[]
    connectOrCreate?: challengesCreateOrConnectWithoutUsers_challenges_from_user_idTousersInput | challengesCreateOrConnectWithoutUsers_challenges_from_user_idTousersInput[]
    createMany?: challengesCreateManyUsers_challenges_from_user_idTousersInputEnvelope
    connect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
  }

  export type challengesUncheckedCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput = {
    create?: XOR<challengesCreateWithoutUsers_challenges_to_user_idTousersInput, challengesUncheckedCreateWithoutUsers_challenges_to_user_idTousersInput> | challengesCreateWithoutUsers_challenges_to_user_idTousersInput[] | challengesUncheckedCreateWithoutUsers_challenges_to_user_idTousersInput[]
    connectOrCreate?: challengesCreateOrConnectWithoutUsers_challenges_to_user_idTousersInput | challengesCreateOrConnectWithoutUsers_challenges_to_user_idTousersInput[]
    createMany?: challengesCreateManyUsers_challenges_to_user_idTousersInputEnvelope
    connect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
  }

  export type friendsUncheckedCreateNestedManyWithoutUsers_friends_receiver_idTousersInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_receiver_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_receiver_idTousersInput> | friendsCreateWithoutUsers_friends_receiver_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_receiver_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_receiver_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_receiver_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_receiver_idTousersInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type friendsUncheckedCreateNestedManyWithoutUsers_friends_requester_idTousersInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_requester_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_requester_idTousersInput> | friendsCreateWithoutUsers_friends_requester_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_requester_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_requester_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_requester_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_requester_idTousersInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type match_playersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<match_playersCreateWithoutUsersInput, match_playersUncheckedCreateWithoutUsersInput> | match_playersCreateWithoutUsersInput[] | match_playersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: match_playersCreateOrConnectWithoutUsersInput | match_playersCreateOrConnectWithoutUsersInput[]
    createMany?: match_playersCreateManyUsersInputEnvelope
    connect?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
  }

  export type reportsUncheckedCreateNestedManyWithoutUsers_reports_reported_idTousersInput = {
    create?: XOR<reportsCreateWithoutUsers_reports_reported_idTousersInput, reportsUncheckedCreateWithoutUsers_reports_reported_idTousersInput> | reportsCreateWithoutUsers_reports_reported_idTousersInput[] | reportsUncheckedCreateWithoutUsers_reports_reported_idTousersInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUsers_reports_reported_idTousersInput | reportsCreateOrConnectWithoutUsers_reports_reported_idTousersInput[]
    createMany?: reportsCreateManyUsers_reports_reported_idTousersInputEnvelope
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
  }

  export type reportsUncheckedCreateNestedManyWithoutUsers_reports_reporter_idTousersInput = {
    create?: XOR<reportsCreateWithoutUsers_reports_reporter_idTousersInput, reportsUncheckedCreateWithoutUsers_reports_reporter_idTousersInput> | reportsCreateWithoutUsers_reports_reporter_idTousersInput[] | reportsUncheckedCreateWithoutUsers_reports_reporter_idTousersInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUsers_reports_reporter_idTousersInput | reportsCreateOrConnectWithoutUsers_reports_reporter_idTousersInput[]
    createMany?: reportsCreateManyUsers_reports_reporter_idTousersInputEnvelope
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Bytes | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type challengesUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput = {
    create?: XOR<challengesCreateWithoutUsers_challenges_from_user_idTousersInput, challengesUncheckedCreateWithoutUsers_challenges_from_user_idTousersInput> | challengesCreateWithoutUsers_challenges_from_user_idTousersInput[] | challengesUncheckedCreateWithoutUsers_challenges_from_user_idTousersInput[]
    connectOrCreate?: challengesCreateOrConnectWithoutUsers_challenges_from_user_idTousersInput | challengesCreateOrConnectWithoutUsers_challenges_from_user_idTousersInput[]
    upsert?: challengesUpsertWithWhereUniqueWithoutUsers_challenges_from_user_idTousersInput | challengesUpsertWithWhereUniqueWithoutUsers_challenges_from_user_idTousersInput[]
    createMany?: challengesCreateManyUsers_challenges_from_user_idTousersInputEnvelope
    set?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    disconnect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    delete?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    connect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    update?: challengesUpdateWithWhereUniqueWithoutUsers_challenges_from_user_idTousersInput | challengesUpdateWithWhereUniqueWithoutUsers_challenges_from_user_idTousersInput[]
    updateMany?: challengesUpdateManyWithWhereWithoutUsers_challenges_from_user_idTousersInput | challengesUpdateManyWithWhereWithoutUsers_challenges_from_user_idTousersInput[]
    deleteMany?: challengesScalarWhereInput | challengesScalarWhereInput[]
  }

  export type challengesUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput = {
    create?: XOR<challengesCreateWithoutUsers_challenges_to_user_idTousersInput, challengesUncheckedCreateWithoutUsers_challenges_to_user_idTousersInput> | challengesCreateWithoutUsers_challenges_to_user_idTousersInput[] | challengesUncheckedCreateWithoutUsers_challenges_to_user_idTousersInput[]
    connectOrCreate?: challengesCreateOrConnectWithoutUsers_challenges_to_user_idTousersInput | challengesCreateOrConnectWithoutUsers_challenges_to_user_idTousersInput[]
    upsert?: challengesUpsertWithWhereUniqueWithoutUsers_challenges_to_user_idTousersInput | challengesUpsertWithWhereUniqueWithoutUsers_challenges_to_user_idTousersInput[]
    createMany?: challengesCreateManyUsers_challenges_to_user_idTousersInputEnvelope
    set?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    disconnect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    delete?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    connect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    update?: challengesUpdateWithWhereUniqueWithoutUsers_challenges_to_user_idTousersInput | challengesUpdateWithWhereUniqueWithoutUsers_challenges_to_user_idTousersInput[]
    updateMany?: challengesUpdateManyWithWhereWithoutUsers_challenges_to_user_idTousersInput | challengesUpdateManyWithWhereWithoutUsers_challenges_to_user_idTousersInput[]
    deleteMany?: challengesScalarWhereInput | challengesScalarWhereInput[]
  }

  export type friendsUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_receiver_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_receiver_idTousersInput> | friendsCreateWithoutUsers_friends_receiver_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_receiver_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_receiver_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_receiver_idTousersInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUsers_friends_receiver_idTousersInput | friendsUpsertWithWhereUniqueWithoutUsers_friends_receiver_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_receiver_idTousersInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUsers_friends_receiver_idTousersInput | friendsUpdateWithWhereUniqueWithoutUsers_friends_receiver_idTousersInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutUsers_friends_receiver_idTousersInput | friendsUpdateManyWithWhereWithoutUsers_friends_receiver_idTousersInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type friendsUpdateManyWithoutUsers_friends_requester_idTousersNestedInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_requester_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_requester_idTousersInput> | friendsCreateWithoutUsers_friends_requester_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_requester_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_requester_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_requester_idTousersInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUsers_friends_requester_idTousersInput | friendsUpsertWithWhereUniqueWithoutUsers_friends_requester_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_requester_idTousersInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUsers_friends_requester_idTousersInput | friendsUpdateWithWhereUniqueWithoutUsers_friends_requester_idTousersInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutUsers_friends_requester_idTousersInput | friendsUpdateManyWithWhereWithoutUsers_friends_requester_idTousersInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type match_playersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<match_playersCreateWithoutUsersInput, match_playersUncheckedCreateWithoutUsersInput> | match_playersCreateWithoutUsersInput[] | match_playersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: match_playersCreateOrConnectWithoutUsersInput | match_playersCreateOrConnectWithoutUsersInput[]
    upsert?: match_playersUpsertWithWhereUniqueWithoutUsersInput | match_playersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: match_playersCreateManyUsersInputEnvelope
    set?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    disconnect?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    delete?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    connect?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    update?: match_playersUpdateWithWhereUniqueWithoutUsersInput | match_playersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: match_playersUpdateManyWithWhereWithoutUsersInput | match_playersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: match_playersScalarWhereInput | match_playersScalarWhereInput[]
  }

  export type reportsUpdateManyWithoutUsers_reports_reported_idTousersNestedInput = {
    create?: XOR<reportsCreateWithoutUsers_reports_reported_idTousersInput, reportsUncheckedCreateWithoutUsers_reports_reported_idTousersInput> | reportsCreateWithoutUsers_reports_reported_idTousersInput[] | reportsUncheckedCreateWithoutUsers_reports_reported_idTousersInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUsers_reports_reported_idTousersInput | reportsCreateOrConnectWithoutUsers_reports_reported_idTousersInput[]
    upsert?: reportsUpsertWithWhereUniqueWithoutUsers_reports_reported_idTousersInput | reportsUpsertWithWhereUniqueWithoutUsers_reports_reported_idTousersInput[]
    createMany?: reportsCreateManyUsers_reports_reported_idTousersInputEnvelope
    set?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    disconnect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    delete?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    update?: reportsUpdateWithWhereUniqueWithoutUsers_reports_reported_idTousersInput | reportsUpdateWithWhereUniqueWithoutUsers_reports_reported_idTousersInput[]
    updateMany?: reportsUpdateManyWithWhereWithoutUsers_reports_reported_idTousersInput | reportsUpdateManyWithWhereWithoutUsers_reports_reported_idTousersInput[]
    deleteMany?: reportsScalarWhereInput | reportsScalarWhereInput[]
  }

  export type reportsUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput = {
    create?: XOR<reportsCreateWithoutUsers_reports_reporter_idTousersInput, reportsUncheckedCreateWithoutUsers_reports_reporter_idTousersInput> | reportsCreateWithoutUsers_reports_reporter_idTousersInput[] | reportsUncheckedCreateWithoutUsers_reports_reporter_idTousersInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUsers_reports_reporter_idTousersInput | reportsCreateOrConnectWithoutUsers_reports_reporter_idTousersInput[]
    upsert?: reportsUpsertWithWhereUniqueWithoutUsers_reports_reporter_idTousersInput | reportsUpsertWithWhereUniqueWithoutUsers_reports_reporter_idTousersInput[]
    createMany?: reportsCreateManyUsers_reports_reporter_idTousersInputEnvelope
    set?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    disconnect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    delete?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    update?: reportsUpdateWithWhereUniqueWithoutUsers_reports_reporter_idTousersInput | reportsUpdateWithWhereUniqueWithoutUsers_reports_reporter_idTousersInput[]
    updateMany?: reportsUpdateManyWithWhereWithoutUsers_reports_reporter_idTousersInput | reportsUpdateManyWithWhereWithoutUsers_reports_reporter_idTousersInput[]
    deleteMany?: reportsScalarWhereInput | reportsScalarWhereInput[]
  }

  export type challengesUncheckedUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput = {
    create?: XOR<challengesCreateWithoutUsers_challenges_from_user_idTousersInput, challengesUncheckedCreateWithoutUsers_challenges_from_user_idTousersInput> | challengesCreateWithoutUsers_challenges_from_user_idTousersInput[] | challengesUncheckedCreateWithoutUsers_challenges_from_user_idTousersInput[]
    connectOrCreate?: challengesCreateOrConnectWithoutUsers_challenges_from_user_idTousersInput | challengesCreateOrConnectWithoutUsers_challenges_from_user_idTousersInput[]
    upsert?: challengesUpsertWithWhereUniqueWithoutUsers_challenges_from_user_idTousersInput | challengesUpsertWithWhereUniqueWithoutUsers_challenges_from_user_idTousersInput[]
    createMany?: challengesCreateManyUsers_challenges_from_user_idTousersInputEnvelope
    set?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    disconnect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    delete?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    connect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    update?: challengesUpdateWithWhereUniqueWithoutUsers_challenges_from_user_idTousersInput | challengesUpdateWithWhereUniqueWithoutUsers_challenges_from_user_idTousersInput[]
    updateMany?: challengesUpdateManyWithWhereWithoutUsers_challenges_from_user_idTousersInput | challengesUpdateManyWithWhereWithoutUsers_challenges_from_user_idTousersInput[]
    deleteMany?: challengesScalarWhereInput | challengesScalarWhereInput[]
  }

  export type challengesUncheckedUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput = {
    create?: XOR<challengesCreateWithoutUsers_challenges_to_user_idTousersInput, challengesUncheckedCreateWithoutUsers_challenges_to_user_idTousersInput> | challengesCreateWithoutUsers_challenges_to_user_idTousersInput[] | challengesUncheckedCreateWithoutUsers_challenges_to_user_idTousersInput[]
    connectOrCreate?: challengesCreateOrConnectWithoutUsers_challenges_to_user_idTousersInput | challengesCreateOrConnectWithoutUsers_challenges_to_user_idTousersInput[]
    upsert?: challengesUpsertWithWhereUniqueWithoutUsers_challenges_to_user_idTousersInput | challengesUpsertWithWhereUniqueWithoutUsers_challenges_to_user_idTousersInput[]
    createMany?: challengesCreateManyUsers_challenges_to_user_idTousersInputEnvelope
    set?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    disconnect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    delete?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    connect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    update?: challengesUpdateWithWhereUniqueWithoutUsers_challenges_to_user_idTousersInput | challengesUpdateWithWhereUniqueWithoutUsers_challenges_to_user_idTousersInput[]
    updateMany?: challengesUpdateManyWithWhereWithoutUsers_challenges_to_user_idTousersInput | challengesUpdateManyWithWhereWithoutUsers_challenges_to_user_idTousersInput[]
    deleteMany?: challengesScalarWhereInput | challengesScalarWhereInput[]
  }

  export type friendsUncheckedUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_receiver_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_receiver_idTousersInput> | friendsCreateWithoutUsers_friends_receiver_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_receiver_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_receiver_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_receiver_idTousersInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUsers_friends_receiver_idTousersInput | friendsUpsertWithWhereUniqueWithoutUsers_friends_receiver_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_receiver_idTousersInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUsers_friends_receiver_idTousersInput | friendsUpdateWithWhereUniqueWithoutUsers_friends_receiver_idTousersInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutUsers_friends_receiver_idTousersInput | friendsUpdateManyWithWhereWithoutUsers_friends_receiver_idTousersInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type friendsUncheckedUpdateManyWithoutUsers_friends_requester_idTousersNestedInput = {
    create?: XOR<friendsCreateWithoutUsers_friends_requester_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_requester_idTousersInput> | friendsCreateWithoutUsers_friends_requester_idTousersInput[] | friendsUncheckedCreateWithoutUsers_friends_requester_idTousersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsers_friends_requester_idTousersInput | friendsCreateOrConnectWithoutUsers_friends_requester_idTousersInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUsers_friends_requester_idTousersInput | friendsUpsertWithWhereUniqueWithoutUsers_friends_requester_idTousersInput[]
    createMany?: friendsCreateManyUsers_friends_requester_idTousersInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUsers_friends_requester_idTousersInput | friendsUpdateWithWhereUniqueWithoutUsers_friends_requester_idTousersInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutUsers_friends_requester_idTousersInput | friendsUpdateManyWithWhereWithoutUsers_friends_requester_idTousersInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type match_playersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<match_playersCreateWithoutUsersInput, match_playersUncheckedCreateWithoutUsersInput> | match_playersCreateWithoutUsersInput[] | match_playersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: match_playersCreateOrConnectWithoutUsersInput | match_playersCreateOrConnectWithoutUsersInput[]
    upsert?: match_playersUpsertWithWhereUniqueWithoutUsersInput | match_playersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: match_playersCreateManyUsersInputEnvelope
    set?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    disconnect?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    delete?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    connect?: match_playersWhereUniqueInput | match_playersWhereUniqueInput[]
    update?: match_playersUpdateWithWhereUniqueWithoutUsersInput | match_playersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: match_playersUpdateManyWithWhereWithoutUsersInput | match_playersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: match_playersScalarWhereInput | match_playersScalarWhereInput[]
  }

  export type reportsUncheckedUpdateManyWithoutUsers_reports_reported_idTousersNestedInput = {
    create?: XOR<reportsCreateWithoutUsers_reports_reported_idTousersInput, reportsUncheckedCreateWithoutUsers_reports_reported_idTousersInput> | reportsCreateWithoutUsers_reports_reported_idTousersInput[] | reportsUncheckedCreateWithoutUsers_reports_reported_idTousersInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUsers_reports_reported_idTousersInput | reportsCreateOrConnectWithoutUsers_reports_reported_idTousersInput[]
    upsert?: reportsUpsertWithWhereUniqueWithoutUsers_reports_reported_idTousersInput | reportsUpsertWithWhereUniqueWithoutUsers_reports_reported_idTousersInput[]
    createMany?: reportsCreateManyUsers_reports_reported_idTousersInputEnvelope
    set?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    disconnect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    delete?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    update?: reportsUpdateWithWhereUniqueWithoutUsers_reports_reported_idTousersInput | reportsUpdateWithWhereUniqueWithoutUsers_reports_reported_idTousersInput[]
    updateMany?: reportsUpdateManyWithWhereWithoutUsers_reports_reported_idTousersInput | reportsUpdateManyWithWhereWithoutUsers_reports_reported_idTousersInput[]
    deleteMany?: reportsScalarWhereInput | reportsScalarWhereInput[]
  }

  export type reportsUncheckedUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput = {
    create?: XOR<reportsCreateWithoutUsers_reports_reporter_idTousersInput, reportsUncheckedCreateWithoutUsers_reports_reporter_idTousersInput> | reportsCreateWithoutUsers_reports_reporter_idTousersInput[] | reportsUncheckedCreateWithoutUsers_reports_reporter_idTousersInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUsers_reports_reporter_idTousersInput | reportsCreateOrConnectWithoutUsers_reports_reporter_idTousersInput[]
    upsert?: reportsUpsertWithWhereUniqueWithoutUsers_reports_reporter_idTousersInput | reportsUpsertWithWhereUniqueWithoutUsers_reports_reporter_idTousersInput[]
    createMany?: reportsCreateManyUsers_reports_reporter_idTousersInputEnvelope
    set?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    disconnect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    delete?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    update?: reportsUpdateWithWhereUniqueWithoutUsers_reports_reporter_idTousersInput | reportsUpdateWithWhereUniqueWithoutUsers_reports_reporter_idTousersInput[]
    updateMany?: reportsUpdateManyWithWhereWithoutUsers_reports_reporter_idTousersInput | reportsUpdateManyWithWhereWithoutUsers_reports_reporter_idTousersInput[]
    deleteMany?: reportsScalarWhereInput | reportsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutChallenges_challenges_from_user_idTousersInput = {
    create?: XOR<usersCreateWithoutChallenges_challenges_from_user_idTousersInput, usersUncheckedCreateWithoutChallenges_challenges_from_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutChallenges_challenges_from_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutChallenges_challenges_to_user_idTousersInput = {
    create?: XOR<usersCreateWithoutChallenges_challenges_to_user_idTousersInput, usersUncheckedCreateWithoutChallenges_challenges_to_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutChallenges_challenges_to_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutChallenges_challenges_from_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutChallenges_challenges_from_user_idTousersInput, usersUncheckedCreateWithoutChallenges_challenges_from_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutChallenges_challenges_from_user_idTousersInput
    upsert?: usersUpsertWithoutChallenges_challenges_from_user_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutChallenges_challenges_from_user_idTousersInput, usersUpdateWithoutChallenges_challenges_from_user_idTousersInput>, usersUncheckedUpdateWithoutChallenges_challenges_from_user_idTousersInput>
  }

  export type usersUpdateOneRequiredWithoutChallenges_challenges_to_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutChallenges_challenges_to_user_idTousersInput, usersUncheckedCreateWithoutChallenges_challenges_to_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutChallenges_challenges_to_user_idTousersInput
    upsert?: usersUpsertWithoutChallenges_challenges_to_user_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutChallenges_challenges_to_user_idTousersInput, usersUpdateWithoutChallenges_challenges_to_user_idTousersInput>, usersUncheckedUpdateWithoutChallenges_challenges_to_user_idTousersInput>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
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

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
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

  export type usersCreateWithoutFriends_friends_receiver_idTousersInput = {
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_from_user_idTousers?: challengesCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput
    challenges_challenges_to_user_idTousers?: challengesCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput
    friends_friends_requester_idTousers?: friendsCreateNestedManyWithoutUsers_friends_requester_idTousersInput
    match_players?: match_playersCreateNestedManyWithoutUsersInput
    reports_reports_reported_idTousers?: reportsCreateNestedManyWithoutUsers_reports_reported_idTousersInput
    reports_reports_reporter_idTousers?: reportsCreateNestedManyWithoutUsers_reports_reporter_idTousersInput
  }

  export type usersUncheckedCreateWithoutFriends_friends_receiver_idTousersInput = {
    id?: number
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUncheckedCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput
    challenges_challenges_to_user_idTousers?: challengesUncheckedCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput
    friends_friends_requester_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_requester_idTousersInput
    match_players?: match_playersUncheckedCreateNestedManyWithoutUsersInput
    reports_reports_reported_idTousers?: reportsUncheckedCreateNestedManyWithoutUsers_reports_reported_idTousersInput
    reports_reports_reporter_idTousers?: reportsUncheckedCreateNestedManyWithoutUsers_reports_reporter_idTousersInput
  }

  export type usersCreateOrConnectWithoutFriends_friends_receiver_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFriends_friends_receiver_idTousersInput, usersUncheckedCreateWithoutFriends_friends_receiver_idTousersInput>
  }

  export type usersCreateWithoutFriends_friends_requester_idTousersInput = {
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_from_user_idTousers?: challengesCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput
    challenges_challenges_to_user_idTousers?: challengesCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput
    friends_friends_receiver_idTousers?: friendsCreateNestedManyWithoutUsers_friends_receiver_idTousersInput
    match_players?: match_playersCreateNestedManyWithoutUsersInput
    reports_reports_reported_idTousers?: reportsCreateNestedManyWithoutUsers_reports_reported_idTousersInput
    reports_reports_reporter_idTousers?: reportsCreateNestedManyWithoutUsers_reports_reporter_idTousersInput
  }

  export type usersUncheckedCreateWithoutFriends_friends_requester_idTousersInput = {
    id?: number
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUncheckedCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput
    challenges_challenges_to_user_idTousers?: challengesUncheckedCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput
    friends_friends_receiver_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_receiver_idTousersInput
    match_players?: match_playersUncheckedCreateNestedManyWithoutUsersInput
    reports_reports_reported_idTousers?: reportsUncheckedCreateNestedManyWithoutUsers_reports_reported_idTousersInput
    reports_reports_reporter_idTousers?: reportsUncheckedCreateNestedManyWithoutUsers_reports_reporter_idTousersInput
  }

  export type usersCreateOrConnectWithoutFriends_friends_requester_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFriends_friends_requester_idTousersInput, usersUncheckedCreateWithoutFriends_friends_requester_idTousersInput>
  }

  export type usersUpsertWithoutFriends_friends_receiver_idTousersInput = {
    update: XOR<usersUpdateWithoutFriends_friends_receiver_idTousersInput, usersUncheckedUpdateWithoutFriends_friends_receiver_idTousersInput>
    create: XOR<usersCreateWithoutFriends_friends_receiver_idTousersInput, usersUncheckedCreateWithoutFriends_friends_receiver_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFriends_friends_receiver_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFriends_friends_receiver_idTousersInput, usersUncheckedUpdateWithoutFriends_friends_receiver_idTousersInput>
  }

  export type usersUpdateWithoutFriends_friends_receiver_idTousersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput
    challenges_challenges_to_user_idTousers?: challengesUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput
    friends_friends_requester_idTousers?: friendsUpdateManyWithoutUsers_friends_requester_idTousersNestedInput
    match_players?: match_playersUpdateManyWithoutUsersNestedInput
    reports_reports_reported_idTousers?: reportsUpdateManyWithoutUsers_reports_reported_idTousersNestedInput
    reports_reports_reporter_idTousers?: reportsUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutFriends_friends_receiver_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUncheckedUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput
    challenges_challenges_to_user_idTousers?: challengesUncheckedUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput
    friends_friends_requester_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_requester_idTousersNestedInput
    match_players?: match_playersUncheckedUpdateManyWithoutUsersNestedInput
    reports_reports_reported_idTousers?: reportsUncheckedUpdateManyWithoutUsers_reports_reported_idTousersNestedInput
    reports_reports_reporter_idTousers?: reportsUncheckedUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput
  }

  export type usersUpsertWithoutFriends_friends_requester_idTousersInput = {
    update: XOR<usersUpdateWithoutFriends_friends_requester_idTousersInput, usersUncheckedUpdateWithoutFriends_friends_requester_idTousersInput>
    create: XOR<usersCreateWithoutFriends_friends_requester_idTousersInput, usersUncheckedCreateWithoutFriends_friends_requester_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFriends_friends_requester_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFriends_friends_requester_idTousersInput, usersUncheckedUpdateWithoutFriends_friends_requester_idTousersInput>
  }

  export type usersUpdateWithoutFriends_friends_requester_idTousersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput
    challenges_challenges_to_user_idTousers?: challengesUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput
    friends_friends_receiver_idTousers?: friendsUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput
    match_players?: match_playersUpdateManyWithoutUsersNestedInput
    reports_reports_reported_idTousers?: reportsUpdateManyWithoutUsers_reports_reported_idTousersNestedInput
    reports_reports_reporter_idTousers?: reportsUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutFriends_friends_requester_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUncheckedUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput
    challenges_challenges_to_user_idTousers?: challengesUncheckedUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput
    friends_friends_receiver_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput
    match_players?: match_playersUncheckedUpdateManyWithoutUsersNestedInput
    reports_reports_reported_idTousers?: reportsUncheckedUpdateManyWithoutUsers_reports_reported_idTousersNestedInput
    reports_reports_reporter_idTousers?: reportsUncheckedUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput
  }

  export type matchesCreateWithoutMatch_playersInput = {
    mode: string
    finished_at?: Date | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
  }

  export type matchesUncheckedCreateWithoutMatch_playersInput = {
    id?: number
    mode: string
    finished_at?: Date | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
  }

  export type matchesCreateOrConnectWithoutMatch_playersInput = {
    where: matchesWhereUniqueInput
    create: XOR<matchesCreateWithoutMatch_playersInput, matchesUncheckedCreateWithoutMatch_playersInput>
  }

  export type usersCreateWithoutMatch_playersInput = {
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_from_user_idTousers?: challengesCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput
    challenges_challenges_to_user_idTousers?: challengesCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput
    friends_friends_receiver_idTousers?: friendsCreateNestedManyWithoutUsers_friends_receiver_idTousersInput
    friends_friends_requester_idTousers?: friendsCreateNestedManyWithoutUsers_friends_requester_idTousersInput
    reports_reports_reported_idTousers?: reportsCreateNestedManyWithoutUsers_reports_reported_idTousersInput
    reports_reports_reporter_idTousers?: reportsCreateNestedManyWithoutUsers_reports_reporter_idTousersInput
  }

  export type usersUncheckedCreateWithoutMatch_playersInput = {
    id?: number
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUncheckedCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput
    challenges_challenges_to_user_idTousers?: challengesUncheckedCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput
    friends_friends_receiver_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_receiver_idTousersInput
    friends_friends_requester_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_requester_idTousersInput
    reports_reports_reported_idTousers?: reportsUncheckedCreateNestedManyWithoutUsers_reports_reported_idTousersInput
    reports_reports_reporter_idTousers?: reportsUncheckedCreateNestedManyWithoutUsers_reports_reporter_idTousersInput
  }

  export type usersCreateOrConnectWithoutMatch_playersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMatch_playersInput, usersUncheckedCreateWithoutMatch_playersInput>
  }

  export type matchesUpsertWithoutMatch_playersInput = {
    update: XOR<matchesUpdateWithoutMatch_playersInput, matchesUncheckedUpdateWithoutMatch_playersInput>
    create: XOR<matchesCreateWithoutMatch_playersInput, matchesUncheckedCreateWithoutMatch_playersInput>
    where?: matchesWhereInput
  }

  export type matchesUpdateToOneWithWhereWithoutMatch_playersInput = {
    where?: matchesWhereInput
    data: XOR<matchesUpdateWithoutMatch_playersInput, matchesUncheckedUpdateWithoutMatch_playersInput>
  }

  export type matchesUpdateWithoutMatch_playersInput = {
    mode?: StringFieldUpdateOperationsInput | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
  }

  export type matchesUncheckedUpdateWithoutMatch_playersInput = {
    id?: IntFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
  }

  export type usersUpsertWithoutMatch_playersInput = {
    update: XOR<usersUpdateWithoutMatch_playersInput, usersUncheckedUpdateWithoutMatch_playersInput>
    create: XOR<usersCreateWithoutMatch_playersInput, usersUncheckedCreateWithoutMatch_playersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMatch_playersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMatch_playersInput, usersUncheckedUpdateWithoutMatch_playersInput>
  }

  export type usersUpdateWithoutMatch_playersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput
    challenges_challenges_to_user_idTousers?: challengesUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput
    friends_friends_receiver_idTousers?: friendsUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput
    friends_friends_requester_idTousers?: friendsUpdateManyWithoutUsers_friends_requester_idTousersNestedInput
    reports_reports_reported_idTousers?: reportsUpdateManyWithoutUsers_reports_reported_idTousersNestedInput
    reports_reports_reporter_idTousers?: reportsUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutMatch_playersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUncheckedUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput
    challenges_challenges_to_user_idTousers?: challengesUncheckedUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput
    friends_friends_receiver_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput
    friends_friends_requester_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_requester_idTousersNestedInput
    reports_reports_reported_idTousers?: reportsUncheckedUpdateManyWithoutUsers_reports_reported_idTousersNestedInput
    reports_reports_reporter_idTousers?: reportsUncheckedUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput
  }

  export type match_playersCreateWithoutMatchesInput = {
    is_winner?: boolean
    puzzles_solved?: number
    trophies_delta?: number
    users: usersCreateNestedOneWithoutMatch_playersInput
  }

  export type match_playersUncheckedCreateWithoutMatchesInput = {
    id?: number
    user_id: number
    is_winner?: boolean
    puzzles_solved?: number
    trophies_delta?: number
  }

  export type match_playersCreateOrConnectWithoutMatchesInput = {
    where: match_playersWhereUniqueInput
    create: XOR<match_playersCreateWithoutMatchesInput, match_playersUncheckedCreateWithoutMatchesInput>
  }

  export type match_playersCreateManyMatchesInputEnvelope = {
    data: match_playersCreateManyMatchesInput | match_playersCreateManyMatchesInput[]
    skipDuplicates?: boolean
  }

  export type match_playersUpsertWithWhereUniqueWithoutMatchesInput = {
    where: match_playersWhereUniqueInput
    update: XOR<match_playersUpdateWithoutMatchesInput, match_playersUncheckedUpdateWithoutMatchesInput>
    create: XOR<match_playersCreateWithoutMatchesInput, match_playersUncheckedCreateWithoutMatchesInput>
  }

  export type match_playersUpdateWithWhereUniqueWithoutMatchesInput = {
    where: match_playersWhereUniqueInput
    data: XOR<match_playersUpdateWithoutMatchesInput, match_playersUncheckedUpdateWithoutMatchesInput>
  }

  export type match_playersUpdateManyWithWhereWithoutMatchesInput = {
    where: match_playersScalarWhereInput
    data: XOR<match_playersUpdateManyMutationInput, match_playersUncheckedUpdateManyWithoutMatchesInput>
  }

  export type match_playersScalarWhereInput = {
    AND?: match_playersScalarWhereInput | match_playersScalarWhereInput[]
    OR?: match_playersScalarWhereInput[]
    NOT?: match_playersScalarWhereInput | match_playersScalarWhereInput[]
    id?: IntFilter<"match_players"> | number
    match_id?: IntFilter<"match_players"> | number
    user_id?: IntFilter<"match_players"> | number
    is_winner?: BoolFilter<"match_players"> | boolean
    puzzles_solved?: IntFilter<"match_players"> | number
    trophies_delta?: IntFilter<"match_players"> | number
  }

  export type usersCreateWithoutReports_reports_reported_idTousersInput = {
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_from_user_idTousers?: challengesCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput
    challenges_challenges_to_user_idTousers?: challengesCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput
    friends_friends_receiver_idTousers?: friendsCreateNestedManyWithoutUsers_friends_receiver_idTousersInput
    friends_friends_requester_idTousers?: friendsCreateNestedManyWithoutUsers_friends_requester_idTousersInput
    match_players?: match_playersCreateNestedManyWithoutUsersInput
    reports_reports_reporter_idTousers?: reportsCreateNestedManyWithoutUsers_reports_reporter_idTousersInput
  }

  export type usersUncheckedCreateWithoutReports_reports_reported_idTousersInput = {
    id?: number
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUncheckedCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput
    challenges_challenges_to_user_idTousers?: challengesUncheckedCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput
    friends_friends_receiver_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_receiver_idTousersInput
    friends_friends_requester_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_requester_idTousersInput
    match_players?: match_playersUncheckedCreateNestedManyWithoutUsersInput
    reports_reports_reporter_idTousers?: reportsUncheckedCreateNestedManyWithoutUsers_reports_reporter_idTousersInput
  }

  export type usersCreateOrConnectWithoutReports_reports_reported_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReports_reports_reported_idTousersInput, usersUncheckedCreateWithoutReports_reports_reported_idTousersInput>
  }

  export type usersCreateWithoutReports_reports_reporter_idTousersInput = {
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_from_user_idTousers?: challengesCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput
    challenges_challenges_to_user_idTousers?: challengesCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput
    friends_friends_receiver_idTousers?: friendsCreateNestedManyWithoutUsers_friends_receiver_idTousersInput
    friends_friends_requester_idTousers?: friendsCreateNestedManyWithoutUsers_friends_requester_idTousersInput
    match_players?: match_playersCreateNestedManyWithoutUsersInput
    reports_reports_reported_idTousers?: reportsCreateNestedManyWithoutUsers_reports_reported_idTousersInput
  }

  export type usersUncheckedCreateWithoutReports_reports_reporter_idTousersInput = {
    id?: number
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUncheckedCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput
    challenges_challenges_to_user_idTousers?: challengesUncheckedCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput
    friends_friends_receiver_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_receiver_idTousersInput
    friends_friends_requester_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_requester_idTousersInput
    match_players?: match_playersUncheckedCreateNestedManyWithoutUsersInput
    reports_reports_reported_idTousers?: reportsUncheckedCreateNestedManyWithoutUsers_reports_reported_idTousersInput
  }

  export type usersCreateOrConnectWithoutReports_reports_reporter_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReports_reports_reporter_idTousersInput, usersUncheckedCreateWithoutReports_reports_reporter_idTousersInput>
  }

  export type usersUpsertWithoutReports_reports_reported_idTousersInput = {
    update: XOR<usersUpdateWithoutReports_reports_reported_idTousersInput, usersUncheckedUpdateWithoutReports_reports_reported_idTousersInput>
    create: XOR<usersCreateWithoutReports_reports_reported_idTousersInput, usersUncheckedCreateWithoutReports_reports_reported_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReports_reports_reported_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReports_reports_reported_idTousersInput, usersUncheckedUpdateWithoutReports_reports_reported_idTousersInput>
  }

  export type usersUpdateWithoutReports_reports_reported_idTousersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput
    challenges_challenges_to_user_idTousers?: challengesUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput
    friends_friends_receiver_idTousers?: friendsUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput
    friends_friends_requester_idTousers?: friendsUpdateManyWithoutUsers_friends_requester_idTousersNestedInput
    match_players?: match_playersUpdateManyWithoutUsersNestedInput
    reports_reports_reporter_idTousers?: reportsUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutReports_reports_reported_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUncheckedUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput
    challenges_challenges_to_user_idTousers?: challengesUncheckedUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput
    friends_friends_receiver_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput
    friends_friends_requester_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_requester_idTousersNestedInput
    match_players?: match_playersUncheckedUpdateManyWithoutUsersNestedInput
    reports_reports_reporter_idTousers?: reportsUncheckedUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput
  }

  export type usersUpsertWithoutReports_reports_reporter_idTousersInput = {
    update: XOR<usersUpdateWithoutReports_reports_reporter_idTousersInput, usersUncheckedUpdateWithoutReports_reports_reporter_idTousersInput>
    create: XOR<usersCreateWithoutReports_reports_reporter_idTousersInput, usersUncheckedCreateWithoutReports_reports_reporter_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReports_reports_reporter_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReports_reports_reporter_idTousersInput, usersUncheckedUpdateWithoutReports_reports_reporter_idTousersInput>
  }

  export type usersUpdateWithoutReports_reports_reporter_idTousersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput
    challenges_challenges_to_user_idTousers?: challengesUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput
    friends_friends_receiver_idTousers?: friendsUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput
    friends_friends_requester_idTousers?: friendsUpdateManyWithoutUsers_friends_requester_idTousersNestedInput
    match_players?: match_playersUpdateManyWithoutUsersNestedInput
    reports_reports_reported_idTousers?: reportsUpdateManyWithoutUsers_reports_reported_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutReports_reports_reporter_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUncheckedUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput
    challenges_challenges_to_user_idTousers?: challengesUncheckedUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput
    friends_friends_receiver_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput
    friends_friends_requester_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_requester_idTousersNestedInput
    match_players?: match_playersUncheckedUpdateManyWithoutUsersNestedInput
    reports_reports_reported_idTousers?: reportsUncheckedUpdateManyWithoutUsers_reports_reported_idTousersNestedInput
  }

  export type challengesCreateWithoutUsers_challenges_from_user_idTousersInput = {
    status?: string
    created_at?: Date | string
    users_challenges_to_user_idTousers: usersCreateNestedOneWithoutChallenges_challenges_to_user_idTousersInput
  }

  export type challengesUncheckedCreateWithoutUsers_challenges_from_user_idTousersInput = {
    id?: number
    to_user_id: number
    status?: string
    created_at?: Date | string
  }

  export type challengesCreateOrConnectWithoutUsers_challenges_from_user_idTousersInput = {
    where: challengesWhereUniqueInput
    create: XOR<challengesCreateWithoutUsers_challenges_from_user_idTousersInput, challengesUncheckedCreateWithoutUsers_challenges_from_user_idTousersInput>
  }

  export type challengesCreateManyUsers_challenges_from_user_idTousersInputEnvelope = {
    data: challengesCreateManyUsers_challenges_from_user_idTousersInput | challengesCreateManyUsers_challenges_from_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type challengesCreateWithoutUsers_challenges_to_user_idTousersInput = {
    status?: string
    created_at?: Date | string
    users_challenges_from_user_idTousers: usersCreateNestedOneWithoutChallenges_challenges_from_user_idTousersInput
  }

  export type challengesUncheckedCreateWithoutUsers_challenges_to_user_idTousersInput = {
    id?: number
    from_user_id: number
    status?: string
    created_at?: Date | string
  }

  export type challengesCreateOrConnectWithoutUsers_challenges_to_user_idTousersInput = {
    where: challengesWhereUniqueInput
    create: XOR<challengesCreateWithoutUsers_challenges_to_user_idTousersInput, challengesUncheckedCreateWithoutUsers_challenges_to_user_idTousersInput>
  }

  export type challengesCreateManyUsers_challenges_to_user_idTousersInputEnvelope = {
    data: challengesCreateManyUsers_challenges_to_user_idTousersInput | challengesCreateManyUsers_challenges_to_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type friendsCreateWithoutUsers_friends_receiver_idTousersInput = {
    status?: string
    created_at?: Date | string
    users_friends_requester_idTousers: usersCreateNestedOneWithoutFriends_friends_requester_idTousersInput
  }

  export type friendsUncheckedCreateWithoutUsers_friends_receiver_idTousersInput = {
    id?: number
    requester_id: number
    status?: string
    created_at?: Date | string
  }

  export type friendsCreateOrConnectWithoutUsers_friends_receiver_idTousersInput = {
    where: friendsWhereUniqueInput
    create: XOR<friendsCreateWithoutUsers_friends_receiver_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_receiver_idTousersInput>
  }

  export type friendsCreateManyUsers_friends_receiver_idTousersInputEnvelope = {
    data: friendsCreateManyUsers_friends_receiver_idTousersInput | friendsCreateManyUsers_friends_receiver_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type friendsCreateWithoutUsers_friends_requester_idTousersInput = {
    status?: string
    created_at?: Date | string
    users_friends_receiver_idTousers: usersCreateNestedOneWithoutFriends_friends_receiver_idTousersInput
  }

  export type friendsUncheckedCreateWithoutUsers_friends_requester_idTousersInput = {
    id?: number
    receiver_id: number
    status?: string
    created_at?: Date | string
  }

  export type friendsCreateOrConnectWithoutUsers_friends_requester_idTousersInput = {
    where: friendsWhereUniqueInput
    create: XOR<friendsCreateWithoutUsers_friends_requester_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_requester_idTousersInput>
  }

  export type friendsCreateManyUsers_friends_requester_idTousersInputEnvelope = {
    data: friendsCreateManyUsers_friends_requester_idTousersInput | friendsCreateManyUsers_friends_requester_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type match_playersCreateWithoutUsersInput = {
    is_winner?: boolean
    puzzles_solved?: number
    trophies_delta?: number
    matches: matchesCreateNestedOneWithoutMatch_playersInput
  }

  export type match_playersUncheckedCreateWithoutUsersInput = {
    id?: number
    match_id: number
    is_winner?: boolean
    puzzles_solved?: number
    trophies_delta?: number
  }

  export type match_playersCreateOrConnectWithoutUsersInput = {
    where: match_playersWhereUniqueInput
    create: XOR<match_playersCreateWithoutUsersInput, match_playersUncheckedCreateWithoutUsersInput>
  }

  export type match_playersCreateManyUsersInputEnvelope = {
    data: match_playersCreateManyUsersInput | match_playersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type reportsCreateWithoutUsers_reports_reported_idTousersInput = {
    reason: string
    created_at?: Date | string
    status?: string
    users_reports_reporter_idTousers: usersCreateNestedOneWithoutReports_reports_reporter_idTousersInput
  }

  export type reportsUncheckedCreateWithoutUsers_reports_reported_idTousersInput = {
    id?: number
    reporter_id: number
    reason: string
    created_at?: Date | string
    status?: string
  }

  export type reportsCreateOrConnectWithoutUsers_reports_reported_idTousersInput = {
    where: reportsWhereUniqueInput
    create: XOR<reportsCreateWithoutUsers_reports_reported_idTousersInput, reportsUncheckedCreateWithoutUsers_reports_reported_idTousersInput>
  }

  export type reportsCreateManyUsers_reports_reported_idTousersInputEnvelope = {
    data: reportsCreateManyUsers_reports_reported_idTousersInput | reportsCreateManyUsers_reports_reported_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type reportsCreateWithoutUsers_reports_reporter_idTousersInput = {
    reason: string
    created_at?: Date | string
    status?: string
    users_reports_reported_idTousers: usersCreateNestedOneWithoutReports_reports_reported_idTousersInput
  }

  export type reportsUncheckedCreateWithoutUsers_reports_reporter_idTousersInput = {
    id?: number
    reported_id: number
    reason: string
    created_at?: Date | string
    status?: string
  }

  export type reportsCreateOrConnectWithoutUsers_reports_reporter_idTousersInput = {
    where: reportsWhereUniqueInput
    create: XOR<reportsCreateWithoutUsers_reports_reporter_idTousersInput, reportsUncheckedCreateWithoutUsers_reports_reporter_idTousersInput>
  }

  export type reportsCreateManyUsers_reports_reporter_idTousersInputEnvelope = {
    data: reportsCreateManyUsers_reports_reporter_idTousersInput | reportsCreateManyUsers_reports_reporter_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type challengesUpsertWithWhereUniqueWithoutUsers_challenges_from_user_idTousersInput = {
    where: challengesWhereUniqueInput
    update: XOR<challengesUpdateWithoutUsers_challenges_from_user_idTousersInput, challengesUncheckedUpdateWithoutUsers_challenges_from_user_idTousersInput>
    create: XOR<challengesCreateWithoutUsers_challenges_from_user_idTousersInput, challengesUncheckedCreateWithoutUsers_challenges_from_user_idTousersInput>
  }

  export type challengesUpdateWithWhereUniqueWithoutUsers_challenges_from_user_idTousersInput = {
    where: challengesWhereUniqueInput
    data: XOR<challengesUpdateWithoutUsers_challenges_from_user_idTousersInput, challengesUncheckedUpdateWithoutUsers_challenges_from_user_idTousersInput>
  }

  export type challengesUpdateManyWithWhereWithoutUsers_challenges_from_user_idTousersInput = {
    where: challengesScalarWhereInput
    data: XOR<challengesUpdateManyMutationInput, challengesUncheckedUpdateManyWithoutUsers_challenges_from_user_idTousersInput>
  }

  export type challengesScalarWhereInput = {
    AND?: challengesScalarWhereInput | challengesScalarWhereInput[]
    OR?: challengesScalarWhereInput[]
    NOT?: challengesScalarWhereInput | challengesScalarWhereInput[]
    id?: IntFilter<"challenges"> | number
    from_user_id?: IntFilter<"challenges"> | number
    to_user_id?: IntFilter<"challenges"> | number
    status?: StringFilter<"challenges"> | string
    created_at?: DateTimeFilter<"challenges"> | Date | string
  }

  export type challengesUpsertWithWhereUniqueWithoutUsers_challenges_to_user_idTousersInput = {
    where: challengesWhereUniqueInput
    update: XOR<challengesUpdateWithoutUsers_challenges_to_user_idTousersInput, challengesUncheckedUpdateWithoutUsers_challenges_to_user_idTousersInput>
    create: XOR<challengesCreateWithoutUsers_challenges_to_user_idTousersInput, challengesUncheckedCreateWithoutUsers_challenges_to_user_idTousersInput>
  }

  export type challengesUpdateWithWhereUniqueWithoutUsers_challenges_to_user_idTousersInput = {
    where: challengesWhereUniqueInput
    data: XOR<challengesUpdateWithoutUsers_challenges_to_user_idTousersInput, challengesUncheckedUpdateWithoutUsers_challenges_to_user_idTousersInput>
  }

  export type challengesUpdateManyWithWhereWithoutUsers_challenges_to_user_idTousersInput = {
    where: challengesScalarWhereInput
    data: XOR<challengesUpdateManyMutationInput, challengesUncheckedUpdateManyWithoutUsers_challenges_to_user_idTousersInput>
  }

  export type friendsUpsertWithWhereUniqueWithoutUsers_friends_receiver_idTousersInput = {
    where: friendsWhereUniqueInput
    update: XOR<friendsUpdateWithoutUsers_friends_receiver_idTousersInput, friendsUncheckedUpdateWithoutUsers_friends_receiver_idTousersInput>
    create: XOR<friendsCreateWithoutUsers_friends_receiver_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_receiver_idTousersInput>
  }

  export type friendsUpdateWithWhereUniqueWithoutUsers_friends_receiver_idTousersInput = {
    where: friendsWhereUniqueInput
    data: XOR<friendsUpdateWithoutUsers_friends_receiver_idTousersInput, friendsUncheckedUpdateWithoutUsers_friends_receiver_idTousersInput>
  }

  export type friendsUpdateManyWithWhereWithoutUsers_friends_receiver_idTousersInput = {
    where: friendsScalarWhereInput
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyWithoutUsers_friends_receiver_idTousersInput>
  }

  export type friendsScalarWhereInput = {
    AND?: friendsScalarWhereInput | friendsScalarWhereInput[]
    OR?: friendsScalarWhereInput[]
    NOT?: friendsScalarWhereInput | friendsScalarWhereInput[]
    id?: IntFilter<"friends"> | number
    requester_id?: IntFilter<"friends"> | number
    receiver_id?: IntFilter<"friends"> | number
    status?: StringFilter<"friends"> | string
    created_at?: DateTimeFilter<"friends"> | Date | string
  }

  export type friendsUpsertWithWhereUniqueWithoutUsers_friends_requester_idTousersInput = {
    where: friendsWhereUniqueInput
    update: XOR<friendsUpdateWithoutUsers_friends_requester_idTousersInput, friendsUncheckedUpdateWithoutUsers_friends_requester_idTousersInput>
    create: XOR<friendsCreateWithoutUsers_friends_requester_idTousersInput, friendsUncheckedCreateWithoutUsers_friends_requester_idTousersInput>
  }

  export type friendsUpdateWithWhereUniqueWithoutUsers_friends_requester_idTousersInput = {
    where: friendsWhereUniqueInput
    data: XOR<friendsUpdateWithoutUsers_friends_requester_idTousersInput, friendsUncheckedUpdateWithoutUsers_friends_requester_idTousersInput>
  }

  export type friendsUpdateManyWithWhereWithoutUsers_friends_requester_idTousersInput = {
    where: friendsScalarWhereInput
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyWithoutUsers_friends_requester_idTousersInput>
  }

  export type match_playersUpsertWithWhereUniqueWithoutUsersInput = {
    where: match_playersWhereUniqueInput
    update: XOR<match_playersUpdateWithoutUsersInput, match_playersUncheckedUpdateWithoutUsersInput>
    create: XOR<match_playersCreateWithoutUsersInput, match_playersUncheckedCreateWithoutUsersInput>
  }

  export type match_playersUpdateWithWhereUniqueWithoutUsersInput = {
    where: match_playersWhereUniqueInput
    data: XOR<match_playersUpdateWithoutUsersInput, match_playersUncheckedUpdateWithoutUsersInput>
  }

  export type match_playersUpdateManyWithWhereWithoutUsersInput = {
    where: match_playersScalarWhereInput
    data: XOR<match_playersUpdateManyMutationInput, match_playersUncheckedUpdateManyWithoutUsersInput>
  }

  export type reportsUpsertWithWhereUniqueWithoutUsers_reports_reported_idTousersInput = {
    where: reportsWhereUniqueInput
    update: XOR<reportsUpdateWithoutUsers_reports_reported_idTousersInput, reportsUncheckedUpdateWithoutUsers_reports_reported_idTousersInput>
    create: XOR<reportsCreateWithoutUsers_reports_reported_idTousersInput, reportsUncheckedCreateWithoutUsers_reports_reported_idTousersInput>
  }

  export type reportsUpdateWithWhereUniqueWithoutUsers_reports_reported_idTousersInput = {
    where: reportsWhereUniqueInput
    data: XOR<reportsUpdateWithoutUsers_reports_reported_idTousersInput, reportsUncheckedUpdateWithoutUsers_reports_reported_idTousersInput>
  }

  export type reportsUpdateManyWithWhereWithoutUsers_reports_reported_idTousersInput = {
    where: reportsScalarWhereInput
    data: XOR<reportsUpdateManyMutationInput, reportsUncheckedUpdateManyWithoutUsers_reports_reported_idTousersInput>
  }

  export type reportsScalarWhereInput = {
    AND?: reportsScalarWhereInput | reportsScalarWhereInput[]
    OR?: reportsScalarWhereInput[]
    NOT?: reportsScalarWhereInput | reportsScalarWhereInput[]
    id?: IntFilter<"reports"> | number
    reporter_id?: IntFilter<"reports"> | number
    reported_id?: IntFilter<"reports"> | number
    reason?: StringFilter<"reports"> | string
    created_at?: DateTimeFilter<"reports"> | Date | string
    status?: StringFilter<"reports"> | string
  }

  export type reportsUpsertWithWhereUniqueWithoutUsers_reports_reporter_idTousersInput = {
    where: reportsWhereUniqueInput
    update: XOR<reportsUpdateWithoutUsers_reports_reporter_idTousersInput, reportsUncheckedUpdateWithoutUsers_reports_reporter_idTousersInput>
    create: XOR<reportsCreateWithoutUsers_reports_reporter_idTousersInput, reportsUncheckedCreateWithoutUsers_reports_reporter_idTousersInput>
  }

  export type reportsUpdateWithWhereUniqueWithoutUsers_reports_reporter_idTousersInput = {
    where: reportsWhereUniqueInput
    data: XOR<reportsUpdateWithoutUsers_reports_reporter_idTousersInput, reportsUncheckedUpdateWithoutUsers_reports_reporter_idTousersInput>
  }

  export type reportsUpdateManyWithWhereWithoutUsers_reports_reporter_idTousersInput = {
    where: reportsScalarWhereInput
    data: XOR<reportsUpdateManyMutationInput, reportsUncheckedUpdateManyWithoutUsers_reports_reporter_idTousersInput>
  }

  export type usersCreateWithoutChallenges_challenges_from_user_idTousersInput = {
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_to_user_idTousers?: challengesCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput
    friends_friends_receiver_idTousers?: friendsCreateNestedManyWithoutUsers_friends_receiver_idTousersInput
    friends_friends_requester_idTousers?: friendsCreateNestedManyWithoutUsers_friends_requester_idTousersInput
    match_players?: match_playersCreateNestedManyWithoutUsersInput
    reports_reports_reported_idTousers?: reportsCreateNestedManyWithoutUsers_reports_reported_idTousersInput
    reports_reports_reporter_idTousers?: reportsCreateNestedManyWithoutUsers_reports_reporter_idTousersInput
  }

  export type usersUncheckedCreateWithoutChallenges_challenges_from_user_idTousersInput = {
    id?: number
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_to_user_idTousers?: challengesUncheckedCreateNestedManyWithoutUsers_challenges_to_user_idTousersInput
    friends_friends_receiver_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_receiver_idTousersInput
    friends_friends_requester_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_requester_idTousersInput
    match_players?: match_playersUncheckedCreateNestedManyWithoutUsersInput
    reports_reports_reported_idTousers?: reportsUncheckedCreateNestedManyWithoutUsers_reports_reported_idTousersInput
    reports_reports_reporter_idTousers?: reportsUncheckedCreateNestedManyWithoutUsers_reports_reporter_idTousersInput
  }

  export type usersCreateOrConnectWithoutChallenges_challenges_from_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutChallenges_challenges_from_user_idTousersInput, usersUncheckedCreateWithoutChallenges_challenges_from_user_idTousersInput>
  }

  export type usersCreateWithoutChallenges_challenges_to_user_idTousersInput = {
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_from_user_idTousers?: challengesCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput
    friends_friends_receiver_idTousers?: friendsCreateNestedManyWithoutUsers_friends_receiver_idTousersInput
    friends_friends_requester_idTousers?: friendsCreateNestedManyWithoutUsers_friends_requester_idTousersInput
    match_players?: match_playersCreateNestedManyWithoutUsersInput
    reports_reports_reported_idTousers?: reportsCreateNestedManyWithoutUsers_reports_reported_idTousersInput
    reports_reports_reporter_idTousers?: reportsCreateNestedManyWithoutUsers_reports_reporter_idTousersInput
  }

  export type usersUncheckedCreateWithoutChallenges_challenges_to_user_idTousersInput = {
    id?: number
    email: string
    password: string
    pseudo: string
    avatar?: Bytes | null
    banner?: string | null
    emblem?: string | null
    trophy?: number
    nbgame?: number
    nbwin?: number
    nblose?: number
    nbdraw?: number
    bio?: string | null
    joined_at?: Date | string
    role?: string
    is_active?: boolean
    nbreport?: number
    is_banned?: boolean
    ban_reason?: string | null
    last_seen?: Date | string | null
    reset_password_token?: string | null
    reset_password_expires?: Date | string | null
    ban_label?: string | null
    banned_until?: Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUncheckedCreateNestedManyWithoutUsers_challenges_from_user_idTousersInput
    friends_friends_receiver_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_receiver_idTousersInput
    friends_friends_requester_idTousers?: friendsUncheckedCreateNestedManyWithoutUsers_friends_requester_idTousersInput
    match_players?: match_playersUncheckedCreateNestedManyWithoutUsersInput
    reports_reports_reported_idTousers?: reportsUncheckedCreateNestedManyWithoutUsers_reports_reported_idTousersInput
    reports_reports_reporter_idTousers?: reportsUncheckedCreateNestedManyWithoutUsers_reports_reporter_idTousersInput
  }

  export type usersCreateOrConnectWithoutChallenges_challenges_to_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutChallenges_challenges_to_user_idTousersInput, usersUncheckedCreateWithoutChallenges_challenges_to_user_idTousersInput>
  }

  export type usersUpsertWithoutChallenges_challenges_from_user_idTousersInput = {
    update: XOR<usersUpdateWithoutChallenges_challenges_from_user_idTousersInput, usersUncheckedUpdateWithoutChallenges_challenges_from_user_idTousersInput>
    create: XOR<usersCreateWithoutChallenges_challenges_from_user_idTousersInput, usersUncheckedCreateWithoutChallenges_challenges_from_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutChallenges_challenges_from_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutChallenges_challenges_from_user_idTousersInput, usersUncheckedUpdateWithoutChallenges_challenges_from_user_idTousersInput>
  }

  export type usersUpdateWithoutChallenges_challenges_from_user_idTousersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_to_user_idTousers?: challengesUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput
    friends_friends_receiver_idTousers?: friendsUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput
    friends_friends_requester_idTousers?: friendsUpdateManyWithoutUsers_friends_requester_idTousersNestedInput
    match_players?: match_playersUpdateManyWithoutUsersNestedInput
    reports_reports_reported_idTousers?: reportsUpdateManyWithoutUsers_reports_reported_idTousersNestedInput
    reports_reports_reporter_idTousers?: reportsUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutChallenges_challenges_from_user_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_to_user_idTousers?: challengesUncheckedUpdateManyWithoutUsers_challenges_to_user_idTousersNestedInput
    friends_friends_receiver_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput
    friends_friends_requester_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_requester_idTousersNestedInput
    match_players?: match_playersUncheckedUpdateManyWithoutUsersNestedInput
    reports_reports_reported_idTousers?: reportsUncheckedUpdateManyWithoutUsers_reports_reported_idTousersNestedInput
    reports_reports_reporter_idTousers?: reportsUncheckedUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput
  }

  export type usersUpsertWithoutChallenges_challenges_to_user_idTousersInput = {
    update: XOR<usersUpdateWithoutChallenges_challenges_to_user_idTousersInput, usersUncheckedUpdateWithoutChallenges_challenges_to_user_idTousersInput>
    create: XOR<usersCreateWithoutChallenges_challenges_to_user_idTousersInput, usersUncheckedCreateWithoutChallenges_challenges_to_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutChallenges_challenges_to_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutChallenges_challenges_to_user_idTousersInput, usersUncheckedUpdateWithoutChallenges_challenges_to_user_idTousersInput>
  }

  export type usersUpdateWithoutChallenges_challenges_to_user_idTousersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput
    friends_friends_receiver_idTousers?: friendsUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput
    friends_friends_requester_idTousers?: friendsUpdateManyWithoutUsers_friends_requester_idTousersNestedInput
    match_players?: match_playersUpdateManyWithoutUsersNestedInput
    reports_reports_reported_idTousers?: reportsUpdateManyWithoutUsers_reports_reported_idTousersNestedInput
    reports_reports_reporter_idTousers?: reportsUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutChallenges_challenges_to_user_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pseudo?: StringFieldUpdateOperationsInput | string
    avatar?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    emblem?: NullableStringFieldUpdateOperationsInput | string | null
    trophy?: IntFieldUpdateOperationsInput | number
    nbgame?: IntFieldUpdateOperationsInput | number
    nbwin?: IntFieldUpdateOperationsInput | number
    nblose?: IntFieldUpdateOperationsInput | number
    nbdraw?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    nbreport?: IntFieldUpdateOperationsInput | number
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reset_password_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_password_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ban_label?: NullableStringFieldUpdateOperationsInput | string | null
    banned_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenges_challenges_from_user_idTousers?: challengesUncheckedUpdateManyWithoutUsers_challenges_from_user_idTousersNestedInput
    friends_friends_receiver_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_receiver_idTousersNestedInput
    friends_friends_requester_idTousers?: friendsUncheckedUpdateManyWithoutUsers_friends_requester_idTousersNestedInput
    match_players?: match_playersUncheckedUpdateManyWithoutUsersNestedInput
    reports_reports_reported_idTousers?: reportsUncheckedUpdateManyWithoutUsers_reports_reported_idTousersNestedInput
    reports_reports_reporter_idTousers?: reportsUncheckedUpdateManyWithoutUsers_reports_reporter_idTousersNestedInput
  }

  export type match_playersCreateManyMatchesInput = {
    id?: number
    user_id: number
    is_winner?: boolean
    puzzles_solved?: number
    trophies_delta?: number
  }

  export type match_playersUpdateWithoutMatchesInput = {
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    puzzles_solved?: IntFieldUpdateOperationsInput | number
    trophies_delta?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutMatch_playersNestedInput
  }

  export type match_playersUncheckedUpdateWithoutMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    puzzles_solved?: IntFieldUpdateOperationsInput | number
    trophies_delta?: IntFieldUpdateOperationsInput | number
  }

  export type match_playersUncheckedUpdateManyWithoutMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    puzzles_solved?: IntFieldUpdateOperationsInput | number
    trophies_delta?: IntFieldUpdateOperationsInput | number
  }

  export type challengesCreateManyUsers_challenges_from_user_idTousersInput = {
    id?: number
    to_user_id: number
    status?: string
    created_at?: Date | string
  }

  export type challengesCreateManyUsers_challenges_to_user_idTousersInput = {
    id?: number
    from_user_id: number
    status?: string
    created_at?: Date | string
  }

  export type friendsCreateManyUsers_friends_receiver_idTousersInput = {
    id?: number
    requester_id: number
    status?: string
    created_at?: Date | string
  }

  export type friendsCreateManyUsers_friends_requester_idTousersInput = {
    id?: number
    receiver_id: number
    status?: string
    created_at?: Date | string
  }

  export type match_playersCreateManyUsersInput = {
    id?: number
    match_id: number
    is_winner?: boolean
    puzzles_solved?: number
    trophies_delta?: number
  }

  export type reportsCreateManyUsers_reports_reported_idTousersInput = {
    id?: number
    reporter_id: number
    reason: string
    created_at?: Date | string
    status?: string
  }

  export type reportsCreateManyUsers_reports_reporter_idTousersInput = {
    id?: number
    reported_id: number
    reason: string
    created_at?: Date | string
    status?: string
  }

  export type challengesUpdateWithoutUsers_challenges_from_user_idTousersInput = {
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_challenges_to_user_idTousers?: usersUpdateOneRequiredWithoutChallenges_challenges_to_user_idTousersNestedInput
  }

  export type challengesUncheckedUpdateWithoutUsers_challenges_from_user_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    to_user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengesUncheckedUpdateManyWithoutUsers_challenges_from_user_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    to_user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengesUpdateWithoutUsers_challenges_to_user_idTousersInput = {
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_challenges_from_user_idTousers?: usersUpdateOneRequiredWithoutChallenges_challenges_from_user_idTousersNestedInput
  }

  export type challengesUncheckedUpdateWithoutUsers_challenges_to_user_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    from_user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengesUncheckedUpdateManyWithoutUsers_challenges_to_user_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    from_user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsUpdateWithoutUsers_friends_receiver_idTousersInput = {
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_friends_requester_idTousers?: usersUpdateOneRequiredWithoutFriends_friends_requester_idTousersNestedInput
  }

  export type friendsUncheckedUpdateWithoutUsers_friends_receiver_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    requester_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsUncheckedUpdateManyWithoutUsers_friends_receiver_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    requester_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsUpdateWithoutUsers_friends_requester_idTousersInput = {
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users_friends_receiver_idTousers?: usersUpdateOneRequiredWithoutFriends_friends_receiver_idTousersNestedInput
  }

  export type friendsUncheckedUpdateWithoutUsers_friends_requester_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiver_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsUncheckedUpdateManyWithoutUsers_friends_requester_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiver_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type match_playersUpdateWithoutUsersInput = {
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    puzzles_solved?: IntFieldUpdateOperationsInput | number
    trophies_delta?: IntFieldUpdateOperationsInput | number
    matches?: matchesUpdateOneRequiredWithoutMatch_playersNestedInput
  }

  export type match_playersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    match_id?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    puzzles_solved?: IntFieldUpdateOperationsInput | number
    trophies_delta?: IntFieldUpdateOperationsInput | number
  }

  export type match_playersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    match_id?: IntFieldUpdateOperationsInput | number
    is_winner?: BoolFieldUpdateOperationsInput | boolean
    puzzles_solved?: IntFieldUpdateOperationsInput | number
    trophies_delta?: IntFieldUpdateOperationsInput | number
  }

  export type reportsUpdateWithoutUsers_reports_reported_idTousersInput = {
    reason?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    users_reports_reporter_idTousers?: usersUpdateOneRequiredWithoutReports_reports_reporter_idTousersNestedInput
  }

  export type reportsUncheckedUpdateWithoutUsers_reports_reported_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporter_id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type reportsUncheckedUpdateManyWithoutUsers_reports_reported_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporter_id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type reportsUpdateWithoutUsers_reports_reporter_idTousersInput = {
    reason?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    users_reports_reported_idTousers?: usersUpdateOneRequiredWithoutReports_reports_reported_idTousersNestedInput
  }

  export type reportsUncheckedUpdateWithoutUsers_reports_reporter_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    reported_id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type reportsUncheckedUpdateManyWithoutUsers_reports_reporter_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    reported_id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
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