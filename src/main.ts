import * as R from "remeda";

/**
 * 1. 完全に型安全な関数
 */
const SAMPLE_DATA_1 = [1, 2, 3] as const;
const builtin = SAMPLE_DATA_1.map((x) => x.toString()); // string[]
const withRemeda = R.map(SAMPLE_DATA_1, (x) => x.toString()); // [string, string, string]

/**
 * 2. フィルタとグループ化
 * ここで出力されるデータは、フィルタとグループ化の結果です。
 * ```json
 * {
 *   '22': [ { name: 'marry', age: 22, gender: 'f' } ],
 *   '24': [
 *     { name: 'samara', age: 24, gender: 'f' },
 *     { name: 'paula', age: 24, gender: 'f' }
 *   ]
 * }
 * ```
 */
const SAMPLE_DATA_2 = [
  { name: "john", age: 20, gender: "m" },
  { name: "marry", age: 22, gender: "f" },
  { name: "samara", age: 24, gender: "f" },
  { name: "paula", age: 24, gender: "f" },
  { name: "bill", age: 33, gender: "m" },
];
const MODIFIED_SAMPLE_DATA_2 = R.pipe(
  SAMPLE_DATA_2,
  R.filter((x) => x.gender === "f"),
  R.groupBy((x) => x.age)
);
console.log(MODIFIED_SAMPLE_DATA_2);

/**
 * 3. パイプライン
 * 複数の関数をパイプラインでつなげることができます。
 */

const SAMPLE_DATA_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const MODIFIED_SAMPLE_DATA_3 = R.pipe(
  SAMPLE_DATA_3,
  R.map((x) => {
    console.log("map", x);
    return x;
  }),
  R.unique(),
  R.take(3)
);
console.log(MODIFIED_SAMPLE_DATA_3);

/** Functions */

/**
 * allPass
 * すべての関数がtrueを返す場合にtrueを返します。
 */
const allPass_isEven = (x: number) => x % 2 === 0;
const allPass_isPositive = (x: number) => x > 0;
const allPass_fns = [allPass_isEven, allPass_isPositive];

const allPass = R.allPass(allPass_fns);
console.log(allPass(2));
console.log(allPass(3));

/**
 * anyPass
 * いずれかの関数がtrueを返す場合にtrueを返します。
 */
const anyPass_isEven = (x: number) => x % 2 === 0;
const anyPass_isPositive = (x: number) => x > 0;
const anyPass_fns = [anyPass_isEven, anyPass_isPositive];
const anyPass = R.anyPass(anyPass_fns);
console.log(anyPass(2));
console.log(anyPass(3));

/**
 * chunk
 * 配列を指定したサイズで分割します。
 */
const chunk = R.chunk(3);
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**
 * concat
 * 配列を結合します。
 */
const concat = R.concat([1, 2, 3]);
console.log(concat([4, 5, 6]));

/**
 * countBy
 * 配列の要素をカウントします。
 */
const countByResult = R.countBy(
  ["a", "b", "c", "B", "A", "a"],
  R.toLowerCase()
);
console.log(countByResult);

/**
 * difference
 * 2つの配列の差分を取得します。
 */
const differenceResult = R.pipe([1, 2, 3, 4], R.difference([3, 4, 5]));
console.log(differenceResult);

/**
 * drop
 * 配列の先頭から指定した数の要素を削除します。
 */
const dropResult = R.drop([1, 2, 3, 4, 5], 2);
console.log(dropResult);

/**
 * dropFirstBy
 * 条件に一致する最初の要素を削除します。
 */
const dropFirstBy = R.pipe(
  ["a", "aaaa", "aa", "aaa"],
  R.dropFirstBy(2, (x) => x.length)
);
console.log(dropFirstBy);

/**
 * dropLast
 * 配列の末尾から指定した数の要素を削除します。
 */
const dropLast = R.dropLast(2);
console.log(dropLast([1, 2, 3, 4, 5]));

/**
 * dropLastWhile
 * 条件に一致する要素を末尾から削除します。
 */
const dropLastWhile = R.pipe(
  [1, 2, 3, 4, 5],
  R.dropLastWhile((x) => x > 3)
);
console.log(dropLastWhile);
