<script setup lang='ts'>
import { reactive, ref } from 'vue'
const doman = ref(0)
const dom = ref<HTMLElement>()

// 插入代码块
import { PrismEditor } from "vue-prism-editor";
import prism from "prismjs";

const jsCodeList1: string[] = [
    "//ref的用法",

    "let message = ref<string>('示例')",
    "//知识点: 取值和赋值需要.value",
    "message.value = '赋值'",
    "//知识点: 取值和赋值需要.value",
    "const value = message.value",
]
const jsCode1 = jsCodeList1.join('\n')
const jsCodeLight1 = (code: string) => {
    return prism.highlight(code, prism.languages.javascript, 'javascript');
};

const jsCodeList2: string[] = [
    "//js",
    "const dom = ref<HTMLElement>()",

    "//tempelate",
    "<div ref='dom'>",
    "    <span class='second-text'>",
    "    </span>",
    "    <button @click='read'>",
    "       读取",
    "    </button>",
    "</div>",
]
const jsCode2 = jsCodeList2.join('\n')
const jsCodeLight2 = (code: string) => {
    return prism.highlight(code, prism.languages.javascript, 'javascript');
};

const jsCodeList3: string[] = [
    "// template",
    "<el-button @click='add($event)' type='primary'>",
    "   +",
    "</el-button>",
    "// ts",
    "const add = (e: any) => {",
    "    //把标签里的文本以+号分隔开",
    "    const eString: string[] = e.target.innerText.split('+')",
    "    //取+号后面字符",
    "    const valueString: string = eString[eString.length - 1]",
    "    if (valueString === '清空') {",
    "        doman.value = 0",
    "    } else {",
    "        //字符串转数字 int",
    "        const value: number = parseInt(eString[eString.length - 1])",
    "        doman.value += value",
    "    }",
    "    console.log(dom.value?.innerText)",
    "}",
]
const jsCode3 = jsCodeList3.join('\n')
const jsCodeLight3 = (code: string) => {
    return prism.highlight(code, prism.languages.javascript, 'javascript');
};

const jsCodeList4: string[] = [
    "let form = reactive({})",
    "//取值和赋值可以直接调用属性, 不需要.value",
    "const formCopy = form",
]
const jsCode4 = jsCodeList4.join('\n')
const jsCodeLight4 = (code: string) => {
    return prism.highlight(code, prism.languages.javascript, 'javascript');
};

const add = (e: any) => {
    const eString: string[] = e.target.innerText.split('+')
    const valueString: string = eString[eString.length - 1]
    if (valueString === '清空') {
        doman.value = 0

    } else {
        const value: number = parseInt(eString[eString.length - 1])
        doman.value += value
    }

    console.log(dom.value?.innerText)
}

const read = () => {
    alert(dom.value?.innerText)
}

const reactiveValue = reactive({
    value: 0
})

const reduceValue = () => {
    reactiveValue.value -= 1
}

const addValue = () => {
    reactiveValue.value += 1

}

const changeValue = () => {
    if (reactiveValue.value.toString() === '') { reactiveValue.value = 0 }
    else if
        (reactiveValue.value.toString().includes('e')) { reactiveValue.value = 0 }
    reactiveValue.value = parseInt(reactiveValue.value.toString())
}

const code = 'const name = computed(()=>{\n     return var1.value -- var2.value\n})\n'

</script>
<template>
    <h3>ref()</h3>
    <span class="second-text margin-bottom">ref 可以使数据动态渲染在界面上, 如: const name = ref('') 当改变name.value的时候, 界面上的展示也会跟着改变</span>
    <prism-editor v-model="jsCode1" :highlight="jsCodeLight1" line-numbers></prism-editor>
    <span class="second-text margin-bottom">知识点: 把按钮本身传递给方法 "@click="$event => add($event)"</span>
    <span class="second-text margin-bottom">知识点: 方法内接受值, 并解析</span>
    <span class="second-text">知识点: ref 可以放到标签里直接读取,如果使用的是 elementUI 里的动态标签就可能找不到</span>
    <el-button class="button" @click="read" type="primary">读取</el-button>
    <prism-editor v-model="jsCode2" :highlight="jsCodeLight2" line-numbers></prism-editor>
    <span class="second-text margin-bottom">例子: 请输入你的投注金额: {{ doman }} 元</span>
    <div>
        <el-button @click="add($event)" type="primary">+10</el-button>
        <el-button @click="add($event)" type="primary">+20</el-button>
        <el-button @click="add($event)" type="primary">+50</el-button>
        <el-button @click="add($event)" type="primary">清空</el-button>
    </div>
    <prism-editor v-model="jsCode3" :highlight="jsCodeLight3" line-numbers></prism-editor>
    <h3>reactive()</h3>
    <span class="second-text margin-bottom">reactive 只支持object引用对象, 例如arry map object set等对象</span>
    <span class="second-text margin-bottom">例如: let form = reactive({})</span>
    <prism-editor v-model="jsCode4" :highlight="jsCodeLight4" line-numbers></prism-editor>
    <span class="second-text margin-bottom">知识点: 取值和赋值可以直接调用属性, 不需要.value"</span>
    <div class="row-between-center margin-bottom">
        <span class="second-text">值: {{ reactiveValue.value }}</span>
        <div>
            <el-button @click="reduceValue" type="primary">-</el-button>

            <el-input @input="changeValue" type="number" v-model="reactiveValue.value" placeholder="Please input"
                clearable />
            <el-button @click="addValue" type="primary">+</el-button>
        </div>
    </div>
    <span class="second-text margin-bottom">知识点: proxy 不能直接复制, 否则破坏响应式对象的结构</span>
    <span class="second-text margin-bottom">解决方案: list.push(..arry) ..为数组解构</span>
</template>
<style scoped>
.margin-bottom {
    margin-bottom: 0.5rem;
}

.el-input {
    width: 10rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

code {
    line-height: 1.5rem;
}

.button {
    margin-top: 1rem;
}
</style>