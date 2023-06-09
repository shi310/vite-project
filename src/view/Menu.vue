<script setup lang="ts">
import { CloseBold } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const onBack = () => {
    router.back()
}
</script>

<template>
    <div class="column-start-start menu-body">
        <div class="row-between-center menu-header">
            <RouterLink class="router-link row-start-center" to="/index">
                <img class="header-left-img" src="../assets/svg/logo.svg" alt="">
                <span class="header-left-text">Tesla的练习册</span>
            </RouterLink>
            <CloseBold class="icon router-link" @click="onBack"></CloseBold>
        </div>
        <RouterLink class="router-link nav row-start-center" to="/index">首页</RouterLink>
        <RouterLink class="router-link nav row-start-center" to="/train">练习项目</RouterLink>
    </div>
</template>

<style scoped>
.menu-body {
    height: 100vh;
    width: 100%;
    background-color: #303133;
}

.header-left-text {
    margin-left: 1rem;
    color: #409EFF;
}

.menu-header {
    width: 100%;
    height: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
    box-sizing: border-box;
}

.icon {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0;
}

.nav {
    width: 100%;
    height: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
    box-sizing: border-box;
    border-top: 0.1rem solid rgba(255, 255, 255, 0.1);
}

.nav:last-child {
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
}
</style>