<template>
  <h1>User Listページ</h1>

  <p>{{ counter }}</p>
  <button @click="inc">+</button>
</template>

<script setup>
const counter = ref(0)
const inc = () => {
  throw createError({
    statusCode: '400',
    statusMessage: 'Bad Request',
    message: 'エラー発生',
    fatal: true,
  });
  counter.value++
}
</script>