// main.js
const app = Vue.createApp({
    data() {
      return {
        message: 'Hello Vue!',
        x: 0,
        y: 0,
        products: [
            {id: 1, name: 'Product 1',img:'./assets/vue1.png',price:100,isCart:false},
            {id: 2, name: 'Product 2',img:'./assets/vue2.jfif',price:120,isCart:false},
            {id: 3, name: 'Product 3',img:'./assets/vue3.jfif',price:300,isCart:true}
        ]
      }
    },
    methods: {
      onLogEvent(event,newX,newY) {
        console.log("running event")
        this.x =newX
        this.y = newY
      },
      onMouseMoveEvent(event) {
        console.log("running mouse move event ...", event);
        this.x = event.offsetX
        this.y = event.offsetY
      },
      onToggleCart(event,product){
        product.isCart =!product.isCart

      }
    },
    computed:{
        productsComputed(){
            // return "string";
            return this.products.filter((product) => product.price < 130);
        }
    }
  })
  
  app.mount('#app')
  