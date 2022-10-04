// const comp1 ={
//     template:`<h4>Hello: {{message}}</h4>`,
//     data: {
        
//             message: 'Welcome to IITM'
        
//     },
// }

const players = [
    {name:'Rohit Sharma', role:'Batsman', team:'MI'},
    {name:'Jonathan Burger', role:'Batsman', team:'RCB'},
    {name:'Jaspreet Bumrah', role:'Batsman', team:'MI'},
]
const app = new Vue({
    el:'#app',
    data:{
        players: players,
    },
    // data:{
    //     x:20,
    //     y:40
    // },
    // methods:{
    //     addItem:function(){
    //         items.push('New Item');
    //     }
    // },
    // computed:{
    //     simpleInterest(){
    //         return(this.principal* this.annualInterestRate* this.duration)/100
    //     },
    // },
    // created(){
    //     console.log(this.x)
    // },
})
// let handler=setInterval(() =>{
//     data=appData.pop();
//     app.principal=data[0];
//     app.annualInterestRate=data[1];
//     app.duration=data[2];
//     app.totalPayableAmount +=app.simpleInterest
// },1000)