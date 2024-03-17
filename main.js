const app = Vue.createApp({
    'template': `    {{ !isHello ? name + age: "" }}
    <!-- solution 1 -->
    <!-- <button v-on:click="onChangeName">Change</button> -->
    <!-- solution 2 short  -->
    <button @click="onChangeName">Change</button>
    <div class="modal" v-if="isModal">
      <h1>Modal content</h1>
    </div>`,
    data(){
        return {
            message: 'Hello Vue!',
            name: "hung",
            age: "15",
            isHello : false,
            isModal:false,
        }
    },
    methods: {
        onChangeName(){
            console.log(this)
            this.name = "name has changed"
            this.age = "age has changed"
            this.isModal = !this.isModal
        }
    },
})

app.mount('#app')