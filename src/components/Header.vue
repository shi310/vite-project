<script setup lang="ts">
import { Menu } from '@element-plus/icons-vue'
import { isPhone } from "../common/public"
</script>

<template>
  <div class="header row-between-center" :class="isPhone ? 'header-phone' : 'header-pc'">

    <RouterLink class="router-link row-start-center" to="/index">
      <img class="header-left-img" src="../assets/svg/logo.svg" alt="">
      <span class="header-left-text">Tesla的练习册</span>
    </RouterLink>

    <div v-show="!isPhone" class="header-right row-end-center">
      <RouterLink class="router-link nav row-start-center" to="/index">首页</RouterLink>
      <RouterLink class="router-link nav row-start-center" to="/train">练习项目</RouterLink>
    </div>

    <RouterLink v-show="isPhone" to="/menu" class="header-right row-center-center router-link">
      <Menu class="icon"></Menu>
    </RouterLink>




    <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#303133"
                    text-color="#fff" active-text-color="#409EFF" :ellipsis="false">
                    <el-menu-item @click="onIndex" index="/index">首页</el-menu-item>
                    <el-menu-item @click="onTrain" index="/train">练习</el-menu-item>
                  </el-menu> -->
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 4rem;
  box-sizing: border-box;
  background-color: #303133;
}

.header-phone {
  padding-left: 1rem;
  padding-right: 1rem;
}

.header-pc {
  padding-left: 2rem;
  padding-right: 2rem;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0;
}


.header-left-img {
  padding-right: 1rem;
  color: #409EFF;
  box-sizing: border-box;
}

.header-left-text {
  color: #409EFF;
}

.nav {
  height: 100%;
}

.nav:first-child {
  margin-right: 4rem;
}

.header-right {
  box-sizing: border-box;
  height: 100%;
}
</style>
