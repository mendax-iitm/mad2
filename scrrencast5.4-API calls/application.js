Vue.component('message-board', {
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
            this.$emit("add-to-global-total")
        }


    },
    computed: {
        count: function () {
            return this.messages.length;
        }
    },
    beforeCreate:function(){
        console.log("component before create");
        console.log(this.grand_total);
    },
    // now we will be having access to grand_total
    created: function(){
        //fetch data from backend
        console.log("component created");
        console.log(this.grand_total);
    },
    beforeMount:function(){
        console.log("component before mount");
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
        r=await fetch('http://localhost:8000/messages.json')
        data=await r.json();
        this.messages=data;
        
    },
    beforeUpdate:function(){
        console.log("component beforeUpdate");
    },
    updated: function(){
        
        console.log("component updated");
        
    },


})
var app = new Vue({
    el: "#app",
    data:{
        grand_total:0
    },
    methods:{
        add_grand_total:function(){
            console.log("in grand total");
            this.grand_total=this.grand_total+1
        }
    },
    beforeCreate:function(){
        console.log("app before create");
        console.log(this.grand_total);
    },
    // now we will be having access to grand_total
    created: function(){
        //fetch data from backend
        console.log("app created");
        console.log(this.grand_total);
    },
    beforeMount:function(){
        console.log("app before mount");
    },
    mounted: function(){
        //fetch data from backend
        console.log("app mounted");
        console.log(this.$el);
    },
    beforeUpdate:function(){
        console.log("app beforeUpdate");
    },
    updated: function(){
        
        console.log("app updated");
        
    },


})