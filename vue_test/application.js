const namedSlot={
    template:`
    <div>
    <slot name ="header" :user="currentUser"></slot>
    </div>`,
    data(){
    return {
    users: [{
    user_id:1,
    name:'Narendra',
    dist:'Ballia',
    },
    {
    user_id:2,
    name:'Abhishek',
    dist:'Delhi',
    },
    ],
    currentUser:null,
    }
    },
    props:['current_user_id'],
    created(){
    current_user=sessionStorage.getItem('userId')
    current_user_id=current_user ? current_user:2
    this.currentUser = this.users.find(
    (user) => user.user_id == current_user_id
    )
    sessionStorage.setItem('userId',current_user=1?2:1)
    },
    }
    
    const app=new Vue({
    el:'#cards',
    data:{
        players:['player2','player1','player3','player4'],
        cards:{
            player1:null,
            player2:null,
            player3:null,
            player4:null,
        },
        currentPlayer:null,
        previousPlayer:null,
        error:null,
    },
    methods:{
        validate(){
            card=event.target.value.split('-')[0]
            this.cards[this.currentPlayer]=card
            this.error=null
            if(this.cards[this.currentPlayer] == this.cards[this.previousPlayer]){
                this.error='You cannot pick this cards'
                this.cards[this.currentPlayer]=null
            }else{
                this.previousPlayer=this.currentPlayer
                this.currentPlayer=this.players.pop()
            }
        },
    },
    created(){
        this.currentPlayer=this.players.pop()
        this.previousPlayer=this.players[0]
    },
    })