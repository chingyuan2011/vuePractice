<template>
  <div>
    <PropsChildren
      :str="str"
      :multiProps="123"
    >
    </PropsChildren>
  </div>
</template>

<script setup>
import PropsChildren from "@/components/practice/Props";
import { ref } from "vue";

const str = ref('props test')

</script>

<style>
.Practice {
  color: red;
}
div {
  color: #fff;
}
</style>
