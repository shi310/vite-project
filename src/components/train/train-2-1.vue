<script setup lang="ts">
import { ref } from 'vue'
const message: string = '我是真男人'
const htmlValue: string = "<p>例: --> + {{ message }}</p>"
const flag = ref(1)
const inputText1 = ref('0')
const inputText2 = ref('0')
const translate = 7.02

const changeFlag = () => {
    flag.value = flag.value === 1 ? 0 : 1
    console.log(flag.value)
}

const inputChange1 = () => {
    console.log(inputText1)
    const value = parseFloat(inputText1.value)
    if (inputText1.value === '') {
        inputText2.value = '0'
    } else {
        inputText2.value = (value / translate).toFixed(2)
    }
}

function inputChange2() {
    console.log(inputText2)
    const value = parseFloat(inputText2.value)
    if (inputText2.value === '') {
        inputText1.value = '0'
    } else {
        inputText1.value = (value * translate).toFixed(2)
    }
}


const flag2 = ref(1)

const changeFlag2 = () => {
    flag2.value = flag2.value === 1 ? 0 : 1
    console.log(flag2.value)
}


const boolNumber = ref(1)

const addBoolNumber = () => {
    boolNumber.value++
}

const reduceBoolNumber = () => {
    boolNumber.value--
}


const forNumber = ref([0, 1, 2, 3])
const forNumber2 = ref([0, 1, 2, 3])


const addForNumber = () => {
    forNumber.value.splice(forNumber.value.length, 0, forNumber.value.length)
}

const reduceForNumber = () => {
    forNumber.value.splice(forNumber.value.length - 1, 1)
}

const handleItem = (index: number) => {
    forNumber2.value.splice(index, 1)
}

const addForNumber2 = () => {
    forNumber2.value.push(forNumber2.value.length > 0 ? forNumber2.value[forNumber2.value.length - 1] + 1 : 0)

}

const reduceForNumber2 = () => {
    forNumber2.value.pop()
}


</script>

<template>
    <div>
        <h3>v-text = "message" 等同于 { { message } } </h3>
        <p class="second-text" v-text="'例: --> ' + message"></p>


        <h3>v-html 富文本格式 </h3>
        <p class="second-text" v-html="htmlValue"></p>


        <h3>v-if 控制组件是否渲染, 资源损耗较大</h3>
        <div class="row-between-center flex-box">
            <div>
                <span class="second-text" v-if="flag">例: 我在被控制着显示和隐藏</span>
            </div>
            <el-button @click="changeFlag" type="primary">{{ flag ? '隐藏' : '显示' }}</el-button>
        </div>


        <h3>v-show 控制组件是否隐藏, 资源损耗较小</h3>
        <div class="row-between-center flex-box">
            <div>
                <span class="second-text" v-show="flag2">例: 我在被控制着显示和隐藏</span>
            </div>
            <el-button @click="changeFlag2" type="primary">{{ flag2 ? '隐藏' : '显示' }}</el-button>
        </div>


        <h3>v-else-if 和 v-else 一般和 v-if 配合使用</h3>
        <div class="row-between-center flex-box">
            <div>
                <span class="second-text" v-if="boolNumber == 1">例: 我是 v-if text == 1 , 变量值: {{ boolNumber }} , Dom:
                    1</span>
                <span class="second-text" v-else-if="boolNumber == 2">例: 我是 v-else-if text == 2 , 变量值: {{ boolNumber }} ,
                    Dom:
                    2</span>
                <span class="second-text" v-else-if="boolNumber == 3">例: 我是 v-else-if text == 3 , 变量值: {{ boolNumber }} ,
                    Dom:
                    3</span>
                <span class="second-text" v-else-if="boolNumber == 4">例: 我是 v-else-if text == 4 , 变量值: {{ boolNumber }} ,
                    Dom:
                    4</span>
                <span class="second-text" v-else-if="boolNumber == 5">例: 我是 v-else-if text == 5 , 变量值: {{ boolNumber }} ,
                    Dom:
                    5</span>
                <span class="second-text" v-else-if="boolNumber > 5">例: 我是 v-else-if text > 5 , 变量值: {{ boolNumber }} , Dom:
                    6</span>
                <span class="second-text" v-else>例: 我是 v-else , 变量值: {{ boolNumber }} , Dom: 0</span>
            </div>
            <div class="row-between-center">
                <el-button @click="reduceBoolNumber" type="primary">-</el-button>
                <el-button @click="addBoolNumber" type="primary">+</el-button>
            </div>
        </div>


        <h3>v-on 绑定事件</h3>
        <p class="second-text">v-on:clink = "onTap" 等同于 @click = "onTap"</p>
        <p class="second-text">阻止点击到父级: 在子组件加 @click.stop</p>

        <h3>v-bind 绑定元素的属性</h3>
        <p class="second-text">v-bind 可简写成 : 属性名字一般可以自定义</p>

        <h3>v-for 循环输出组件</h3>
        <span class="second-text">需要注意 :key 的使用(arry.push()表示在数组的最后添加item; arry.pop()表示删除数组最后一个元素)</span>
        <div class="row-between-center flex-box">
            <span class="second-text">请对数组进行操作: </span>
            <div class="row-between-center">
                <el-button @click="reduceForNumber" type="primary">-</el-button>
                <el-button @click="addForNumber" type="primary">+</el-button>
            </div>
        </div>
        <p class="flex-box second-text" :key="item" v-for="item in forNumber">{{ '我是数组的第 ' + (item + 1) + ' 个元素' }}</p>
        <p class="flex-box second-text" v-show="!forNumber.length">{{ '数组里没有子元素了, 点击 “+” 添加' }}</p>

        <h3>虚拟Dom-在v-for循环输出中间插入元素</h3>
        <span class="second-text">splice(index, len, [item])对数组进行增删减的操作: forNumber2.value.splice(index, 1)</span>
        <div class="row-between-center flex-box">

            <span class="second-text">请对数组进行操作: </span>
            <div class="row-between-center">
                <el-button @click="reduceForNumber2" type="primary">-</el-button>
                <el-button @click="addForNumber2" type="primary">+</el-button>
            </div>
        </div>

        <div :key="index" v-for="(item, index) in forNumber2" class="row-between-center flex-box">
            <p class="second-text">{{ '我是数组的第 ' + (index +
                1) + '个元素 -- ' + item }}
            </p>
            <div class="row-between-center">
                <el-button @click="handleItem(index)" type="primary">删除</el-button>
            </div>
        </div>
        <p class="flex-box" v-show="!forNumber2.length">{{ '数组里没有子元素了, 点击 “+” 添加' }}</p>

        <h3>v-modle 绑定表单元素, 双向绑定</h3>
        <span class="second-text">输入人民币数量: </span>
        <el-input type="number" @input="inputChange1" v-model="inputText1" placeholder="Please input" clearable />
        <span class="second-text">输入美元数量: </span>
        <el-input type="number" @input="inputChange2" v-model="inputText2" placeholder="Please input" clearable />
        <span class="second-text">{{ '输入框1的值: ' + inputText1 + '------输入框2的值: ' + inputText2 }}</span>

        <h3>v-once 里面的值只会渲染一次</h3>
        <span v-once class="second-text">这个值只渲染一次: {{ forNumber }}</span>

        <h3>v-momo 一般配合 v-for 使用, 与条件相同的时候不更新, 一般用不到</h3>
        <span v-memo="[]" class="second-text">条件为空的时候和 v-once 的效果是一样的: {{ forNumber }}</span>

    </div>
</template>

<style scoped>
.el-button p {
    background-color: #eee;
    width: 100%;
    padding: 0.4rem;
    box-sizing: border-box;
}

.flex-box {
    margin-top: 0.4rem;
    background-color: #eee;
    width: 100%;
    padding: 0.8rem;
    box-sizing: border-box;
}

p {
    background-color: #eee;
    width: 100%;
    padding: 0.4rem;
    box-sizing: border-box;
}

.el-input {
    margin-top: 0.5rem;
}



.el-input {
    margin-bottom: 1rem;
}
</style>