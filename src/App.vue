<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld ref="hello" msg="Welcome to Your Vue.js App" /> -->
  <!-- <HeaderComponent ref="header" /> -->
  <!-- <button @click="onChange">Change me</button> -->
  <!-- <Modal
    v-if="isShowModal"
    title="this is a title from component"
    content="this is content modal"
    theme="example"
    @close-modal="onToggleModal"
  > -->
  <!-- close modal này click ra ngoai se tat di -->
  <!-- teleport dich chuyen ra ngang cap voi app -->
  <teleport to="body">
    <Modal
      v-if="isShowModal"
      title="this is a title from component"
      content="this is content modal"
      theme="example"
    >
      <!-- <template> -->
      <div>This is a body content</div>
      <!-- </template> -->
      <template v-slot:header>
        <div>
          <h1>This is a header</h1>
        </div>
      </template>
      <template v-slot:footer>
        <button @click="onToggleModal">Cancel</button>
      </template>
    </Modal>
  </teleport>
  <!-- <Modal
    v-if="isShowModal"
    title="this is a title from component"
    content="this is content modal"
    theme="example"
  >
    <div>This is a body content</div>
    <template v-slot:header>
      <div>
        <h1>This is a header</h1>
      </div>
    </template>
    <template v-slot:footer>
      <button @click="onToggleModal">Cancel</button>
    </template>
  </Modal> -->
  <button class="buttonToggle" @click="onToggleModal">Toggle Modal</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HeaderComponent,
    Modal,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    onChange() {
      // this.$emit("change");
      console.log("ok");
      console.log(this.$refs.hello);
      this.$refs.hello.onChangeTesting();
      this.$refs.header.onChangeGG();
    },
    onToggleModal() {
      console.log("running onToggleModal ");
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>

<style></style>
