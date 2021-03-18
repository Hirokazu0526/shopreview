<template>
  <div>
    <input type="text" v-model="newMessage" />
    <br /><br />
    <button @click="addMessage">追加</button>
    <button @click="deleteMessage">古い順に削除</button>
    <ul>
      <li v-for="message in messages" :key="message.index">{{ message }}</li>
    </ul>

    <br /><br />
    {{ messages }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      newMessage: '',
      messages: [] as any,
    }
  },
  methods: {
    addMessage() {
      //   messagesにpushしてテキストを追加する
      this.messages.push(this.newMessage)
      this.newMessage = ''
    },
    deleteMessage() {
      if (this.messages.length > 1) {
        this.messages.splice(0, 1)
      }
    },
  },
})
</script>

<style></style>
