module.exports = {
    "root": true,
    // "lintOnSave":false,
    "env": {
        "node": true
    },
    "globals": {
        "_": "readonly", // key是全局变量， value: 是 readonly 与 writable 
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended"
    ],
    "parserOptions": {
        "parser": "@babel/eslint-parser"
    },
    "rules": {
        // off - 0 关闭  warn - 1 警告  error - 2
        // 检查for循环， 防止for 循环陷入死循环
        "for-direction": [2],
        // getters中必须有return , allowImplicit 中值有两个，一 true: 不允许隐式返回undefined, 二：允许
         "getter-return": [2, {"allowImplicit": true }],
         // 禁止在promise的executor(callback)中使用 async 修饰
         "no-async-promise-executor": [2],
         // 循环中禁止使用await
         "no-await-in-loop":[2],
         // 禁止与 -0 进行比较
         "no-compare-neg-zero": [2],

         // 禁止常量表达式出现，即直接 tue: 不允许使用, false：允许使用 等作为判断条件
        "no-constant-condition": [ 2, { "checkLoops": true }],
        // 禁用debugger
        "no-debugger": [2],
        // 禁用函数内出现重复参数
        "no-dupe-args": [2],
        // 禁止出现重复的 case 标签
        "no-duplicate-case": [2],
        // 该规则禁止空语句块出现
        "no-empty": [2],
        // 禁止不规则的空白
        "no-irregular-whitespace": [2, {
            "skipStrings": true, // 允许字符串字面量中出现空白 默认属性
            // "skipComments": true, // 允许注释中出现空白
            // "skipRegExps": true, // 允许正则表达式中出现空白
            // "skipTemplates": true, // 允许模板中出现空白

        }],
        // switch case 中 使用let const , case 必须使用块级作用于{}
        "no-case-declarations": [2],
        // 禁止未使用过的标签
        "no-unused-labels": [0],
        // 组件名字驼峰命名 
        "vue/multi-word-component-names": [
            0,
            {

            }
        ],
        // options 两个值， functions 和 both ，函数体内
        "no-inner-declarations": [
            2,
           "both"
        ],
        "no-unused-vars": [
            0 , { "vars": "all", "args": "after-used", "ignoreRestSiblings": false,}
        ],

        // vars :  两个值  all :  检测所有变量，包括全局环境中的变量。这是默认值
        // local 仅仅检测本作用域中声明的变量是否使用，允许不使用全局环境中的变量。
        // args: 选项有三个值:
        // after-used - 默认值 不检查最后一个使用的参数之前出现的未使用的位置参数，但是检查最后一个使用的参数之后的所有命名参数和所有位置参数。
        // all - 所有命名参数必须使用。
        // none - 不检查参数。
        // ignoreRestSiblings: 两个值, true,  false

        // "no-mixed-spaces-and-tabs": [ 2, "smart-tabs"]
        // "no-mixed-spaces-and-tabs": [2],



    }
}