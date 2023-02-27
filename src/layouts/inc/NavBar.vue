<template>
  <div>
     <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"
            ><i class="fas fa-bars"></i
          ></a>
        </li>
        
      </ul>

      <ul class="navbar-nav ml-auto">
        
 
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-user"></i>
            <!-- <span class="badge badge-warning navbar-badge">15</span> -->
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
             
            <a href="#" class="dropdown-item">
              <i class="fas fa-user mr-2"></i> My Profile
              <!-- <span class="float-right text-muted text-sm">3 mins</span> -->
            </a>
            <div class="dropdown-divider"></div>
            <a href="/login" class="dropdown-item">
              <i class="fas fa-sign-out-alt mr-2"></i> Logout
              <!-- <span class="float-right text-muted text-sm">12 hours</span> -->
            </a>
            
          </div>
        </li>
        
      </ul>
    </nav>


  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>