
const store = new Vuex.Store({
    state:{
        grand_total:0
    },
    mutations:{
        incr_grand_total(state){
            state.grand_total++;
        }
    },
    getters:{
        get_grand_total:function(state){
            return state.grand_total.toLocaleString("en-IN", {
                minimumIntegerDigits: 2,
                useGrouping: false,
            });
        }
    },
    actions:{
        send_first_and_then_incr(context){
            //fetch or ajax call 

            //success you can call commit
            context.commit('incr_grand_total');
            //failure
        }
    }
});
const PrivacyPolicy = Vue.component('privacy-policy',{
    template:`
    <div>
    <h3> Privacy Policy</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia asperiores perspiciatis fugiat quae suscipit sunt velit possimus eum facere, ut modi esse consectetur, atque provident iure beatae sed eius!</p>
        <p>Dolore, libero praesentium consectetur ipsam quidem sed iusto similique, tempora ut dolores eos nam omnis consequuntur culpa quas id, esse error temporibus! Nesciunt neque cumque cum rem repellendus, eveniet ullam.</p>
    </div>
    `
 })
 
 
 const About = Vue.component('about',{
     template:`
     <div>
     <h3> About</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia asperiores perspiciatis fugiat quae suscipit sunt velit possimus eum facere, ut modi esse consectetur, atque provident iure beatae sed eius!</p>
         <p>Dolore, libero praesentium consectetur ipsam quidem sed iusto similique, tempora ut dolores eos nam omnis consequuntur culpa quas id, esse error temporibus! Nesciunt neque cumque cum rem repellendus, eveniet ullam.</p>
     </div>
     `
  })
 
 const MessageBoard =Vue.component('message-board', {
     props:['title'],
     template:`
     <div>
     <h4>{{title}}</h4>
     <p>Your name: <input type="text" v-model="visitor_name"></p>
     <p>Your message: <input type="text" v-model="visitor_message"></p>
     
     
     <button v-on:click="sayHi">Say Hi</button>
     <i class="bi bi-cloud-arrow-up-fill" v-bind:class="savedIconClass"></i>
     <h3> Messages </h3>
     <ul>
         <li v-for="message in messages">{{message["visitor_name"]}}:{{message["visitor_message"]}}</li>
     </ul>
     </div>
     `,
     data: function () {
         return {
             visitor_name: "",
             visitor_message: "",
             savedIconClass:"text-success",
             messages: []
         }
     },
 
     methods: {
         sayHi: function () {
 
             this.messages.push({
                 "visitor_name": this.visitor_name,
                 "visitor_message": this.visitor_message
             });
 
             //Save to backend using API here
             this.savedIconClass="text-warning";
             fetch('https://httpbin.org//post',{
                 method:'POST',
                 headers: {
                     'Content-Type': 'application/json',
                 },
                 body:JSON.stringify({"for":this.title,"visitor_name":this.visitor_name,"visitor_message":this.visitor_message})
             })
             .then(response => response.json())
             .then(data => {
                 console.log('Success',data);
                 this.savedIconClass="text-success"
             })
             .catch((err)=> {
                 console.log('Error',err);
                 this.savedIconClass="text-danger";
             });
 
             this.visitor_name = "";
             this.visitor_message = "";
             //Do it here
            //  this.$emit("add-to-global-total")
            // store.state.grand_total++;
            // store.commit("incr_grand_total")
            store.dispatch('send_first_and_then_incr');

         }
 
 
     },
     computed: {
         count: function () {
             return this.messages.length;
         }
     },
 
     // mounted: function(){
     //     //fetch data from backend
     //     console.log("component mounted");
     //     //get the messages previously sent to Abhishek
     //     this.messages=[{"for":"abhishek","visitor_name":"Rajesh","visitor_message":"Hello world!"}]
         
     // },
     mounted: async function(){
         //fetch data from backend
         console.log("component mounted");
         //get the messages previously sent to Abhishek
         r=await fetch('example-response.json')
         data=await r.json();
         console.log(data)
         this.messages=[{"for":"abhishek","visitor_name":"Rajesh","visitor_message":"Hello world!"}]
         
     },
  
 
 
 })
 
 const routes =[{
     path:'/',
     component: MessageBoard,
     props:{title: 'Abhishek'}
 },{
     path:'/about',
     component: About,
 },{
     path:'/privacy-policy',
     component: PrivacyPolicy,
 }];
 
 const router = new VueRouter({
     routes //short for `routes: routes`
 })
 
 var app = new Vue({
     el: "#app",
     router:router,
     store:store,
    
    computed:{
        grand_total:function(){
            //access using getters
             return store.getters.get_grand_total;
            // return store.state.grand_total;
        }
    }
 
 })