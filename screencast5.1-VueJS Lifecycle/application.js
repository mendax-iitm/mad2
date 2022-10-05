Vue.component('message-board', {
    props:['title'],
    template:`
    <div>
    <h4>{{title}}</h4>
    <p>Your name: <input type="text" v-model="visitor_name"></p>
    <p>Your message: <input type="text" v-model="visitor_message"></p>
   

    <button v-on:click="sayHi">Say Hi</button>

    <ul>
        <li v-for="message in messages">{{message["visitor_name"]}}:{{message["visitor_message"]}}</li>
    </ul>
    </div>
    `,
    data: function () {
        return {
            visitor_name: "",
            visitor_message: "",
            messages: []
        }
    },

    methods: {
        sayHi: function () {

            this.messages.push({
                "visitor_name": this.visitor_name,
                "visitor_message": this.visitor_message
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
    mounted: function(){
        //fetch data from backend
        console.log("component mounted");
        
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