<template>
  <div>
  <el-row :gutter="20">
    <el-col :span="6">
      <NuxtLink to="/">Home</NuxtLink>
    </el-col>
    <el-col :span="6">
      <NuxtLink to="/income">Income</NuxtLink>
    </el-col>
    <el-col :span="6">
      <NuxtLink to="/contact">Contact</NuxtLink> <br />
    </el-col>
    <el-col :span="6">
      <NuxtLink to="/blog">Blog</NuxtLink>
    </el-col>
  </el-row>
</div>
</template>
