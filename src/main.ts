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
