<template>
  <el-container>
    <el-header>
      <HeaderTitle />
      <HeaderBar />
    </el-header>
    <el-main>
      <slot />
    </el-main>
    <el-footer>
      <AppFooter />
    </el-footer>
  </el-container>
</template>
