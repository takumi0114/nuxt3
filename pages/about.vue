<script setup>
// const route = useRoute()
// const enableCustomLayout = () => {
//   route.meta.layout = 'custom'
// }

const counter = useCounter()

</script>


<template>
  <div>
    <h1>About Page</h1>
    <!-- <button @click="enableCustomLayout">Update Layout</button> -->
     <p>{{ counter }}</p>
     <button @click="counter++">+</button>
  </div>
</template>
