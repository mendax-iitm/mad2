const app= new Vue({
    el:'#app',
    data:{
        message:'Hello, world!',
        seen:true,
    },
    methods:{
        toggleSeen(){
            this.seen=!this.seen
        },
    },
})