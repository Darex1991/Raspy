<template>
  <div class="loading-component">
    <div class="loading-wrapper">
      <Loader v-if="this.condition" :height="this.height" :width="this.width" />
    </div>
    <slot v-if="!this.condition"></slot>
  </div>
</template>

<script>
import Loader from 'vue-spinner/src/ScaleLoader.vue'

export default {
  name: 'Loading',
  props: {
      'condition': {},
      'height': {
        value: '35px',
      },
      'width': {
        value: '4px',
      }
  },
  components: { Loader }
}
</script>

<style scoped src="@/components/Common/Loading/loading.css">
</style>
