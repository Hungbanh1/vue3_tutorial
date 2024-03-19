<!-- MyComponent.vue -->

<template>
  <h1>This is component header</h1>
</template>

<script>
export default {
  data() {
    return {
      greeting: "Hello from MyComponent!",
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    onChangeGG() {
      //   this.greeting = "Hello from MyComponent!";
      console.log("onChangeGG Hello from MyComponent!");
    },
  },
};
</script>

<style></style>
