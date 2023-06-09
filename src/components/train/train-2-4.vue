<script setup lang='ts'>
import { reactive, computed } from 'vue'

// 插入代码块
import { PrismEditor } from "vue-prism-editor";
import prism from "prismjs";

type Shop = {
    name: string,
    num: number,
    price: number,
    sum: number,
}

const data = reactive<Shop[]>([
    {
        name: '裤子',
        num: 1,
        price: 100,
        sum: 100,
    },
    {
        name: '衣服',
        num: 3,
        price: 200,
        sum: 600,

    },
    {
        name: '鞋子',
        num: 4,
        price: 400,
        sum: 1600,

    }
])

const htmlCodeList: string[] = [
    "//el-table的用法",
    "<el-table show-summary sum-text='合计' :data='data'>",
    "    <el-table-column fixed prop='name' label='名称' />",
    "    <el-table-column align='right'>",
    "        <template #default='scope'>",
    "            <el-button @click='sub(scope)' type='primary'>-</el-button>",
    "        </template>",
    "    </el-table-column>",
    "    <el-table-column prop='num' label='数量' align='center' width='60' />",
    "    <el-table-column align='left'>",
    "        <template #default='scope'>",
    "            <el-button @click='add(scope)' type='primary'>+</el-button>",
    "        </template>",
    "    </el-table-column>",
    "    <el-table-column prop='price' label='单价' />",
    "    <el-table-column prop='sum' label='价格' />",
    "    <el-table-column fixed='right' label='操作' align='right'>",
    "        <template #default='scope'>",
    "            <el-button @click='del(scope)' type='primary'>删除</el-button>",
    "        </template>",
    "    </el-table-column>",
    "</el-table>",
]
const htmlCode = htmlCodeList.join('\n')
const htmlCodeLight = (code: string) => {
    return prism.highlight(code, prism.languages.html, 'html');
};

const jsCodeList: string[] = [
    "//computed的用法示例:",
    "import { reactive, computed } from 'vue'",
    "type Shop = {",
    "    name: string,",
    "    num: number,",
    "    price: number,",
    "    sum: number,",
    "}",
    "const data = reactive<Shop[]>([",
    "    {",
    "        name: '裤子',",
    "        num: 1,",
    "        price: 100,",
    "        sum: 100,",
    "    },",
    "    {",
    "        name: '衣服',",
    "        num: 3,",
    "        price: 200,",
    "        sum: 600,",
    "    },",
    "    {",
    "        name: '鞋子',",
    "        num: 4,",
    "        price: 400,",
    "        sum: 1600,",
    "    }",
    "])",
    "",
    "//计算",
    "const total = computed(() => {",
    "    // 方法一: ",
    "    // let _total = 0",
    "    // for (let i = 0; i < data.length; i++) {",
    "    //     _total += data[i].num * data[i].price",
    "    // }",
    "    // return _total",

    "    // 方法二: ",
    "    return data.reduce((prve, next) => {",
    "        return prve + next.num * next.price",
    "    }, 0)",
    "})",
]
const jsCode = jsCodeList.join('\n')
const jsCodeLight = (code: string) => {
    return prism.highlight(code, prism.languages.javascript, 'javascript');
};

const del = (item: any) => {
    data.splice(item.row, 1)
}

const add = (item: any) => {
    if (item.row.num < 99) {
        item.row.num++
        item.row.sum = item.row.num * item.row.price
    }
}
const sub = (item: any) => {
    if (item.row.num > 1) {
        item.row.num--
        item.row.sum = item.row.num * item.row.price
    }
}

const total = computed(() => {
    // 方法一: 
    // let _total = 0
    // for (let i = 0; i < data.length; i++) {
    //     _total += data[i].num * data[i].price
    // }
    // return _total

    // 方法二: 
    return data.reduce((prve, next) => {
        return prve + next.num * next.price
    }, 0)
})



</script>
<template>
    <h3>computed 计算属性</h3>
    <el-table show-summary sum-text="合计" :data="data">
        <el-table-column fixed prop="name" label="名称" />
        <el-table-column align="right">
            <template #default="scope">
                <el-button @click="sub(scope)" type="primary">-</el-button>
            </template>
        </el-table-column>
        <el-table-column prop="num" label="数量" align="center" width="60" />
        <el-table-column align="left">
            <template #default="scope">
                <el-button @click="add(scope)" type="primary">+</el-button>
            </template>
        </el-table-column>
        <el-table-column prop="price" label="单价" />
        <el-table-column prop="sum" label="价格" />
        <el-table-column fixed="right" label="操作" align="right">
            <template #default="scope">
                <el-button @click="del(scope)" type="primary">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="total row-between-center">
        <p>今日订单总额: </p>
        <p>{{ total }}</p>
    </div>
    <prism-editor v-model="jsCode" :highlight="jsCodeLight" line-numbers></prism-editor>
    <prism-editor v-model="htmlCode" :highlight="htmlCodeLight" line-numbers></prism-editor>
</template>
<style scoped>
.total {
    background-color: #2d2d2d;
    color: white;
    padding: 1rem;
}

td,
th {
    padding: 1rem 0.6rem;
    text-align: center;
}

th {
    background-color: #bde2ff;
    font-weight: bold;
}

table {
    border: solid 0.05rem #000;
}

code {
    line-height: 1.5rem;
}

.row-between-center {
    border: none
}
</style>