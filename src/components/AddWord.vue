<template>
  <div class="addWord">
    <input
      type="text"
      v-model="newWord.word"
      ref="addWord"
      class="form-control"
      placeholder="add new word..."
    />
    <button @click="addWord">Add Word</button>
  </div>
</template>

<script>
import { addWord } from "../firebase";
export default {
  data() {
    return {
      newWord: {
        word: "",
        type: "noun",
        definition: ["definition 1"],
        example: ["example 1"],
        story: ["story 1"],
        createdTime: null,
        modifiedTime: null,
      },
    };
  },
  methods: {
    async addWord() {
      await addWord(this.newWord);
      this.$emit("add_word", this.newWord);
      this.newWord.word = "";
      this.$refs.addWord.focus();
    },
  },
};
</script>

<style scoped lang="scss">
.addWord {
  border-width: 1px;
  border-radius: 10px;
  border-color: orangered;
  padding: 20px;
  border-style: solid;
  text-align: center;
  input {
    height: 36px;
    width: 100%;
    border-radius: 5px;
    border-width: 1px;
  }
  button {
    height: 36px;
    width: 100%;
    margin-top: 50px;
    background: royalblue;
    border-width: 0;
    color: white;
    border-radius: 18px;
    width: 50%;
  }
}
</style>
