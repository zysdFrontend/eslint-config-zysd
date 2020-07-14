/**
 * @description: 中盈盛达前端项目eslint代码检查规则
 * @author: chenyc
 * @date: 2020-06-06
 */

const config = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        parser: 'babel-eslint'
    },
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:vue/vue3-recommended'
    ],
    plugins: [
        'vue'
    ],
    rules: {
        // 缩进
        'indent': ['error', 4],
        // 引号
        'quotes': ['error', 'single', {
            'allowTemplateLiterals': true
        }],
        // 分号结尾
        'semi': ['error', 'always'],
        // 禁用不必要的分号
        'no-extra-semi': 'error',
        // 对象字面量项尾不能有逗号
        'comma-dangle': [2, 'never'],
        // 一行结束后面不要有空格
        'no-trailing-spaces': 1,
        // 警告console
        'no-console': 'warn',
        // // 警告alert,conirm
        'no-alert': 'warn',
        // 警告debugger
        'no-debugger': 'warn',
        // 禁止属性前有空格，如obj. a
        'no-whitespace-before-property': 'error',
        // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        'no-undef': 'error',
        // 不能有声明后未被使用的变量
        'no-unused-vars': ['off', {
            'vars': 'all',
            'args': 'after-used'
        }],
        // 禁止在逻辑表达式、条件表达式、声明、数组元素、对象属性、序列和函数参数周围使用多个空格
        'no-multi-spaces': 'error',
        // 函数定义时括号前面要不要有空格
        'space-before-function-paren': ['error', 'always'],
        // 语句块之前必须有空格 如 ) {}
        'space-before-blocks': ['error', 'always'],
        // 关键字前后必须有空格 如 } else {
        'keyword-spacing': ['error', {
            'before': true,
            'after': true
        }],
        // 箭头函数的参数要有()包裹
        'arrow-parens': 'off',
        // 定义箭头函数的箭头前后都必须有空格
        'arrow-spacing': ['error', {
            'before': true,
            'after': true
        }],
        // 大括号风格要求
        'brace-style': ['error', '1tbs', {
            'allowSingleLine': true
        }],
        // 强制在逗号周围使用空格
        'comma-spacing': ['error', {
            'before': false,
            'after': true
        }],
        // 逗号风格
        'comma-style': ['error', 'last'],
        // 对象字面量的键和值之间使用一致的空格
        'key-spacing': ['error', {
            'beforeColon': false,
            'afterColon': true
        }],
        // 强制在 switch 的冒号左右有空格
        'switch-colon-spacing': ['error', {
            'before': false,
            'after': true
        }],
        // 要求中缀操作符周围有空格
        'space-infix-ops': ['error', {
            'int32Hint': true
        }],
        // 强制对多行注释使用特定风格
        // 'multiline-comment-style': ['error', 'starred-block'],
        // 强制在注释中 // 或 /* 使用一致的空格
        'spaced-comment': ['error', 'always'],

        // 一行的属性个数
        'vue/max-attributes-per-line': ['error', {
            'singleline': 2,
            'multiline': {
                'max': 1,
                'allowFirstLine': false
            }
        }],
        // vue标签缩进
        'vue/html-indent': ['error', 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true, // 属性垂直对齐
            'ignores': []
        }],
        // 闭合标签是否换行
        'vue/html-closing-bracket-newline': ['warn', {
            'singleline': 'never',
            'multiline': 'never'
        }],
        // 引号
        'vue/html-quotes': ['error', 'double'],
        // 标签闭合
        'vue/html-self-closing': ['error', {
            'html': {
                'void': 'never',
                'normal': 'never',
                'component': 'always'
            },
            'svg': 'always',
            'math': 'always'
        }],
        'vue/no-deprecated-slot-scope-attribute': ['off'],
        'vue/no-deprecated-slot-attribute': ['off'],
        'vue/no-deprecated-v-on-native-modifier': ['off'],
        'vue/custom-event-name-casing': ['off'],
        'vue/no-deprecated-dollar-scopedslots-api': ['off'],
        'vue/no-deprecated-v-bind-sync': ['off'],
        'vue/require-slots-as-functions': ['off'],
        'vue/no-mutating-props': ['off']
    }
};

module.exports = config;