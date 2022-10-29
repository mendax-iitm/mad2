<template>
    <div class="contact">
    <div v-if="message_sent">
      Thank you for sending message
    </div>
    <div v-else>
      <h1>Contact PAge</h1>
      <p><label for="name">Name</label>:
      <input v-model="name" id="name" placeholder="your name"/></p>
      <p><label for="email">Email</label>:
      <input v-model="email" id="email" placeholder="your email"/></p>
      <p><label for="message">Message</label>:</p>
      <p><textarea v-model="message"  placeholder="add multiple lines" rows="10"></textarea></p>
      <p><button @click="send_message">send it</button></p>
      </div>
    </div>
  </template>
<script>


export default {
  name: 'ContactView',
  data(){
    return{
      name:'your name',
      email: 'your email',
      message: 'your message',
      message_sent:false
    }
  },
  methods:{
    send_message: function(){
      // console.log("Sending message");
      alert(this.name);
      this.message_sent=true
    }
  }
 
}
</script>
  <style type="text/css"></style>