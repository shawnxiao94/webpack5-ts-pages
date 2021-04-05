/*
 * @Author: shawnxiao
 * @Date: 2021-02-27 17:31:34
 * @LastEditTime: 2021-03-21 13:08:57
 * @FilePath: /vue3-antdv-pages/prettier.config.js
 */
module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 代码尾部不添加分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 末尾不需要逗号，'es5'=>加逗号
  trailingComma: 'none',
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: true,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'ignore', // strict, ignore
  vueIndentScriptAndStyle: true,
  endOfLine: 'lf',
  rangeStart: 0
}
