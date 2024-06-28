<script setup>
const router = useRoute()
</script>

<template>
  <p>ユーザID: {{ router.params.id }}</p>
  
</template>