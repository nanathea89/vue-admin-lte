<template>
  <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1> <li :class="props.icon" v-if="icon"></li> {{ props.title }} </h1>
            </div>
            
          </div>
        </div>
      </section>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  }
})

</script>

<style lang="scss" scoped>

</style>