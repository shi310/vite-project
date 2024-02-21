<script setup lang="ts">
import { Document } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
import { isPhone } from '../../common/public'




useRouter().push('/train/1-1')


const handleOpen = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
}


</script>



<template>
    <div class="train-body" :class="!isPhone ? 'row-start-center train-body-pc' : 'column-start-center train-body-phone'">
        <div class="shadow" :class="!isPhone ? 'train-body-left' : 'train-body-top'">
            <el-menu :router="true" active-text-color="#409EFF" background-color="#303133" menu-trigger="click"
                :class="!isPhone ? 'el-menu-vertical-demo' : 'el-menu-demo'" :mode="!isPhone ? 'vertical' : 'horizontal'"
                default-active="1-1" text-color="#fff" @open="handleOpen" @close="handleClose">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>搭建</span>
                    </template>
                    <el-menu-item index="1-1">1-1: 环境搭建</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <Document />
                        </el-icon>
                        <p>Vue指令</p>
                    </template>
                    <el-menu-item index="2-1">2-1: vue指令</el-menu-item>
                    <el-menu-item index="2-2">2-2: 论坛审核</el-menu-item>
                    <el-menu-item index="2-3">2-3: Ref全家桶</el-menu-item>
                    <el-menu-item index="2-4">2-4: Computed计算</el-menu-item>
                    <el-menu-item index="2-5">2-5: Watch侦听器</el-menu-item>

                </el-sub-menu>
            </el-menu>
        </div>
        <el-scrollbar class="shadow" :class="[!isPhone ? 'train-body-right' : 'train-body-bottom']">
            <RouterView></RouterView>
        </el-scrollbar>
    </div>
</template>

<style scoped>
.el-menu-vertical-demo {
    width: 20rem;
    border-right: none;
    height: calc(100vh - 4rem - 4rem);
}

.train-body {
    height: calc(100vh - 4rem);
    width: 100%;
    max-width: 100rem;
    box-sizing: border-box;
}

.train-body-pc {
    padding: 2rem;
}

.train-body-phone {
    padding: 0.5rem;

}



.shadow {
    background-color: white;
    border-radius: 0.4rem;
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
    overflow-y: scroll;
    overflow-x: hidden;
    box-sizing: border-box;
}

.shadow::-webkit-scrollbar {
    display: none;
}



.train-body-left {
    width: 20rem;
    height: 100%;
}

.train-body-top {
    width: 100%;
    height: 3.6rem;
    border-radius: 0rem;
}

.train-body-right {
    width: calc(100% - 20rem - 2rem);
    height: 100%;
    margin-left: 2rem;
    padding: 2rem;
}

.train-body-bottom {
    height: calc(100% - 2rem);
    width: 100%;
    border-radius: 0rem;
    padding: 1rem;

}
</style>