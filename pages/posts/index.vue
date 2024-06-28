<script setup>


const { data: links, error, refresh } = await useFetch('https://jsonplaceholder.typicode.com/posts/')
const data = await useFetch('https://jsonplaceholder.typicode.com/posts/')



</script>

<template>
  <h1>Posts一覧</h1>
  <button @click="refresh()">再取得</button>
  <ul>
    <li v-for="post in links">{{ post.title }}</li>
  </ul>
</template>