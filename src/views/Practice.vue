<template>
  <div>
    <PropsChildren
      :str="str"
      :multiProps="123"
    >
    </PropsChildren>
    <EmitsChildren></EmitsChildren>
  </div>
</template>

<script setup>
import PropsChildren from "@/components/practice/Props";
import EmitsChildren from "@/components/practice/Emits";

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
