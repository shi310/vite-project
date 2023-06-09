<script setup lang='ts'>
// 插入代码块
import { PrismEditor } from "vue-prism-editor";
import prism from "prismjs";

const jsCodeList1: string[] = [
    "//这里是WatchEffect侦听器的用法示例",

    "let message = <string>('示例');",
    "let message2 = <string>('示例');",
    "const watch = watchEffect((oninvalidate) => {",
    "    console.log(message.value)",
    "    console.log(message2.value)",
    "})",
]
const jsCode1 = jsCodeList1.join('\n')
const jsCodeLight1 = (code: string) => {
    return prism.highlight(code, prism.languages.javascript, 'javascript');
};

const jsCodeList2: string[] = [
    "//可以侦听单个数据源",
    "let message = <string>('示例');",
    "const watch = watch(message, (olvValue, newValue) => {",
    "}, {",
    "    //是否开启深度监听",
    "    deep: true",
    "    //是否在变化之前先执行一次",
    "    immeditate: true",
    "    //pre组件更新之前调用 sync同步执行 post组件更新之后执行",
    "    flush: 'pre'",
    "})",

    "//也可以侦听多个数据源",
    "let message = <string>('示例');",
    "let message2 = <string>('示例');",
    "const watch = watch([message, message2], (olvValue, newValue) => {",
    "   //oldVaule 和 newValue就会变成数组",
    "   //...",
    "}, {",
    "   //是否开启深度监听",
    "    deep: true",
    "    //是否在变化之前先执行一次",
    "    immeditate: true",
    "    //pre组件更新之前调用 sync同步执行 post组件更新之后执行",
    "    flush: 'pre'",
    "})",
]
const jsCode2 = jsCodeList2.join('\n')
const jsCodeLight2 = (code: string) => {
    return prism.highlight(code, prism.languages.javascript, 'javascript');
};
</script>
<template>
    <h3>Watch侦听器</h3>
    <p>可以侦听ref 和 reactive的变化</p>
    <prism-editor v-model="jsCode2" :highlight="jsCodeLight2" line-numbers></prism-editor>
    <h3>WatchEffect侦听器</h3>
    <p>属于是全局侦听</p>
    <prism-editor v-model="jsCode1" :highlight="jsCodeLight1" line-numbers></prism-editor>
</template>
<style scoped>
code {
    line-height: 1.5rem;
}
</style>
