<script setup lang="ts">
// type TaskType = {
//   id: number
//   task: string
//   status: string
// }

// const TaskList = useState<TaskType[]>("taskList")
const counter = useCounterStore()
console.log("comp: ", counter.count)
</script>

<template>
  <h2>Comp1.vue</h2>
  <p>{{ counter.count }}</p>
</template>