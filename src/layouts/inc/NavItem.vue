<template>
  <li class="nav-item">
    
    <router-link class="nav-link"  :to="props.link" >
      <i class="nav-icon"  :class="props.icon"></i>
      <slot/>
    </router-link>
  </li>
</template>

<script setup>
// props: {
//   propName: {
//     type: Number,
//     default: 
//   },
// },
import { defineProps } from 'vue'
const props = defineProps({
  icon:{
    type: String,
    default: null
  },
  link:{
    type: [String, Object],
    default: null
  }
})
 

</script>

<style lang="scss" scoped>

</style>