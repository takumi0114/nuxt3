<script setup>
// useHead({
//   title: "sample",
//   link: [
//     {
//       href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
//       rel: "stylesheet",
//       integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
//       crossorigin: "anonymous"
//     }
//   ],
//   script: [
//     {
//       src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
//       integrity:"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
//       crossorigin: "anonymous"
//     }

//   ]
// })

const { count, inc, dec } = useCounter(100);
// $helloとは
const { $hello } = useNuxtApp();

const data1 = useFetch("/api/hello");

const task = ref("");
const { data: tasks } = useFetch("/api/task.get.ts");
console.log(tasks);

const addTask = () => {
  const { data } = useFetch("/api/task.post.ts", {
    method: "post",
    body: { task: task.value },
  });
  refresh();
  task.value = "";
};
</script>

<template>
  <Head>
    <Meta name="description" content="全ページ共通" />
  </Head>
  <div class="container mt-5">
    <h1>Main Page</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.task }}</li>
    </ul>

    <form @submit.prevent="addTask">
      <div>
        <p>{{ task }}</p>
        <input v-model="task" />
        <button type="submit">登録</button>
      </div>
    </form>
  </div>
</template>
