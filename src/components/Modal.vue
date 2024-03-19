<template>
  <!-- Button trigger modal -->
  <!-- <div class="modal fade" @click.self="onCloseModal"> -->
  <div class="modal fade">
    <div class="modal-dialog">
      <div
        class="modal-content"
        v-bind:class="{ 'bg-purple ': theme === 'contact' }"
      >
        <div class="modal-header">
          <!-- <h2>{{ title }}</h2> -->
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer"><slot name="footer"></slot></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //props
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      // enum: ["example", "sales", "contacts"],
      default: "example",
      validator(value) {
        return ["example", "sales", "contacts"].includes(value);
      },
    },
  },
  data() {
    return {
      // title: "This is title",
      greeting: "Hello from MyComponent!",
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    onCloseModal() {
      console.log("running onCloseModal");
      this.$emit("close-modal"); // th con gui thang cha lang nghe
    },
  },
};
</script>

<style lang="css">
/* Customize modal fade in animation */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.fade {
  transition: opacity 0.15s linear;
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}
.modal.show .modal-dialog {
  transform: none;
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}
/* .btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent
    url(
      data:image/svg + xml,
      %3csvgxmlns="http://www.w3.org/2000/svg"viewBox="0 0 16 16"fill="%23000"%3e%3cpathd="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"/%3e%3c/svg%3e
    )
    center / 1em auto no-repeat;
  border: 0;
  border-radius: 0.25rem;
  opacity: 0.5;
} */
.modal-header .btn-close {
  padding: 0.5rem 0.5rem;
  margin: -0.5rem -0.5rem -0.5rem auto;
}
.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}
.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
</style>
