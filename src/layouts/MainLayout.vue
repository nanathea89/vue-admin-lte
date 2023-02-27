<template>
  <div class="wrapper">
   <navbar-layout></navbar-layout>
   <sidebar-layout></sidebar-layout>
   

    <div class="content-wrapper">
      
      <RouterView></RouterView>
    </div>

    <footer class="main-footer">
      <div class="float-right d-none d-sm-block"><b>Version</b> 3.2.0</div>
      <strong
        >Copyright &copy; 2014-2021
        <a href="https://adminlte.io">AdminLTE.io</a>.</strong
      >
      All rights reserved.
    </footer>

    <aside class="control-sidebar control-sidebar-dark"></aside>
  </div>
</template>


<script setup>
import NavbarLayout from './inc/NavBar.vue'
import SidebarLayout from './inc/SideBarLayout.vue'
</script>

<style lang="scss" scoped>

</style>