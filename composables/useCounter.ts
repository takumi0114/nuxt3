// export function useCounter(initialValue: number) {
//   const count = ref(initialValue)
//   const inc = () => {
//     count.value +=  1
//   }
//   const dec = () => {
//     count.value -= 1
//   }

//   return {count, inc, dec}
// }

// 全体的に使える関数のようなもの

export function useCounter() {
  return useState(() => 0);
}
