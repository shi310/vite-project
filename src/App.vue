<script setup lang="ts">
import { onMounted } from 'vue'
import { isPhone, phoneWidth } from "./common/public"


onMounted(() => {
  isPhone.value = window.innerWidth < phoneWidth ? true : false
})
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped></style>
