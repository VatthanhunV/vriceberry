<template>
  <el-container>
    <el-header>
      <HeaderTitle />
    </el-header>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>
    <el-main
      ><br /><br /><br /><br />
      <slot />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script lang="ts" setup></script>

<style></style>
