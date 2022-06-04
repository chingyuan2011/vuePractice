<template>
  <div></div>
</template>

<script setup>
import { defineEmits, ref, onMounted } from 'vue'
const num = ref(0)

const emits = defineEmits({
  Callback: (num) =>{
    if(num.value === 0){
      return true
    } else {
      // 驗證失敗
      return false
    }
  }
})

onMounted(()=>{
  emits('Callback', num)
})


</script>

<style>

</style>