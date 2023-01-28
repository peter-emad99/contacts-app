<template>
  <SideBar />
  <div id="detail">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
</script>

<style scoped></style>
