<template>
  <div>{{ str }}</div>
</template>

<script setup>
import { defineProps } from "vue";

// const props = defineProps([ 'propsData' ])
const props = defineProps({
  multiProps: {
    type: [Number, String]
  },
  str: {
    type: String,
    default: '',
    required: true,
  },
  num: {
    type: Number,
    default: 0
  },
  arr: {
    type: Array,
    default: () => []
  },
  obj: {
    type: Object,
    default: () => ({})
  },
  fun: {
    type: Function,
    default: () => {}
  }
})

</script>

<style lang="scss" scoped>
div {
  background-color: red;
}
</style>
