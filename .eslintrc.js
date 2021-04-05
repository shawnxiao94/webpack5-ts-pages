module.exports = {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    parserOptions: {
      "ecmaVersion": 2019,
      "sourceType": "module"
    },
    env: {
      node: true,
      browser: true,
      commonjs: true,
      es6: true
    },
    parser: '@typescript-eslint/parser',
    plugins: [
      "@typescript-eslint",
      "react-hooks"
    ],
    globals: {
      // 这里填入你的项目需要的全局变量
      // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
      // React: false,
      // ReactDOM: false
    },
    settings: {
      react: {
          pragma: "React",
          version: "detect"
      }
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        /**
         * 最佳实践
         */
        eqeqeq: 2, // 强制使用 === 和 !==
        'default-case': 1, // 要求 switch 语句中有 default 分支
        'no-else-return': 1, // 禁止 if 语句中 return 语句之后有 else 块
        'no-empty-function': 0, // 禁止出现空函数
        'no-multi-spaces': 1, // 禁止使用多个空格
        radix: 1, // 强制在parseInt()使用基数参数
        'no-unused-vars': 'warn', // 把该条提示信息转换成警告信息
        /**
         * 变量声明
         */
        'init-declarations': ['error', 'always'], // 声明变量必须赋值
        // 'array-bracket-spacing': ['error', 'always'], // 数组方括号内必须空格
        'array-bracket-spacing': 0, // 数组方括号内必须空格
        // 双峰驼命名格式
        camelcase: 2,
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号
        'comma-dangle': [2, 'never'],
        // 控制逗号前后的空格
        'comma-spacing': [2, { before: false, after: true }],
        'comma-style': [2, 'last'], // 逗号风格，换行时在行首还是行尾
        'eol-last': 2, // 要求文件末尾存在空行
        // 对象冒号前禁止空格，冒号后必须空格
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        // 关键字（if、else等）前后必须有空格
        'keyword-spacing': ['error', { before: true, after: true }],
        // 禁止出现多行空行
        'no-multiple-empty-lines': ['error', { max: 1 }],
        semi: ['error', 'never'], // 禁止末尾分号
        quotes: ['error', 'single'], // 单引号
        'space-infix-ops': 2, // 操作符周围必须有空格
        'spaced-comment': ['error', 'always'], // 注释后面必须跟随至少一个空白
        /**
         * ECMAScript6
         */
        'arrow-spacing': ['error', { before: true, after: true }], // 强制箭头函数的箭头前后使用空格
        'no-var': 2, // 禁止使用 var 声明变量
        'object-shorthand': 2, // 要求使用对象方法名和属性名简写
        'prefer-arrow-callback': 2, // 要求回调函数使用箭头函数
        'prefer-const': 2, // 使用 const 声明那些声明后不再被修改的变量
        'prefer-rest-params': 2, // 要求使用剩余参数而不是 arguments
        /**
         * vue
         */
        'vue/valid-v-model': 0
    }
  }
  