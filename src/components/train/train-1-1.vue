<script setup lang='ts'>
import { ref } from 'vue'

// 插入代码块
import { PrismEditor } from "vue-prism-editor";
import { jsCodeLight } from "../../common/public"


const jsCode1 = "npm -v"
const jsCode2 = "npm init vite@latest"
const jsCode3 = <string>[
    "// 启动本地",
    "npm run dev",
    "",
    "// 启动本地 + 服务器",
    "npm run dev -- --host",
].join('\n')

const message: string = '我是真男人'
const boolNumber = ref(0)
const changeBoolNumber = () => {
    boolNumber.value = boolNumber.value === 0 ? 1 : 0
}

const addBoolNumber = () => {
    boolNumber.value++
}

const reduceBoolNumber = () => {
    boolNumber.value--
}


</script>

<template>
    <div class="install">
        <h3>安装Node.js: 建议安装稳定版</h3>
        <a class="install-a" href="http://nodejs.cn/download/current/">
            下载 | Node.js 中文网
        </a>
        <p class="second-text">
            装完之后会有一个命令叫 npm
        </p>
        <p class="second-text">
            可以在终端输入npm -v 来检查是否安装成功
        </p>
        <prism-editor :highlight="() => jsCodeLight(jsCode1)" line-numbers></prism-editor>
    </div>

    <div class="build">
        <h3>构建 vite 项目</h3>
        <p class="second-text">
            <span>官方文档: </span>
            <a href="https://vitejs.cn/guide/#overview">Vite中文网</a>
        </p>

        <p class="second-text">vite 的优势</p>

        <p class="second-text">
            <span>采用冷服务，默认的构建目标浏览器是能 </span>
            <a href="https://caniuse.com/es6-module">在 script 标签上支持原生 ESM</a>
            <span> 和 </span>
            <a href="https://caniuse.com/es6-module-dynamic-import">原生 ESM 动态导入</a>
        </p>

        <p class="second-text">
            <span> HMR 速度快到惊人的</span>
            <a href="https://vitejs.cn/guide/features.html#hot-module-replacement">模块热更新 HMR</a>
            <span> 和 </span>
            <a href="https://caniuse.com/es6-module-dynamic-import">原生 ESM 动态导入</a>
        </p>

        <p class="second-text">
            <span>它使用 </span>
            <a href="https://rollupjs.org/">Rollup</a>
            <span> 打包你的代码，并且它是预配置的 并且支持大部分 rollup 插件 </span>
        </p>

        <p class="second-text">
            使用vite初始化一个项目
        </p>

        <span class="build-npm"> npm </span>

        <prism-editor v-model="jsCode2" :highlight="() => jsCodeLight(jsCode2)" line-numbers></prism-editor>
    </div>

    <div class="run">
        <h3>启动项目</h3>
        <span>npm run dev 启动 </span>
        <prism-editor v-model="jsCode3" :highlight="() => jsCodeLight(jsCode3)" line-numbers></prism-editor>
    </div>

    <div class="start">
        <h3>简单的练习</h3>
        <p class="second-text">{{ '插入变量: ' + message.split('').map(v => '*' + v) }}</p>
        <div class="row-between-center boolNumber">
            <span class="second-text">{{ boolNumber ? '非 0 全部代表 ”真“' : '数字 0 代表 ”假“' }}</span>
            <el-button @click="changeBoolNumber" type="primary">更改状态</el-button>
        </div>

        <div class="row-between-center boolNumber">
            <span class="second-text">{{ boolNumber }}</span>
            <div class="row-between-center">
                <el-button @click="reduceBoolNumber" type="primary">-</el-button>
                <el-button @click="addBoolNumber" type="primary">+</el-button>
            </div>
        </div>

    </div>
</template>

<style lang="less" scoped>
.install {
    a {
        display: inline-block;
        margin-bottom: 1rem;
    }
}

.build {
    a {
        display: inline-block;
        margin-bottom: 1rem;
    }

    &-npm {
        display: inline-block;
        margin-top: 1rem;
    }

}

.start {

    .boolNumber {
        box-sizing: border-box;
        padding: 0.8rem;
        background-color: #2d2d2d;
    }
}

p {
    background-color: #eee;
    width: 100%;
    padding: 0.4rem;
    box-sizing: border-box;
}
</style>