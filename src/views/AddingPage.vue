<template>
  <div class="row main-view">
    <div class="col-lg-3 col-sm-2 col-0"></div>
    <div class="col-lg-6 col-sm-8 col-12">
      <div class="addWord">
        <input
          type="text"
          v-model="newWord.word"
          ref="addWord"
          class="form-control"
          placeholder="add new word..."
        />
        <div class="checkType">
          <div>
            <input
              type="checkbox"
              class="form-check-input"
              value="noun"
              id="noun"
              v-model="newWord.type"
            />
            <label for="noun" class="form-check-label ps-2">Noun</label>
          </div>
          <div>
            <input
              type="checkbox"
              class="form-check-input"
              value="verb"
              id="verb"
              v-model="newWord.type"
            />
            <label for="verb" class="form-check-label ps-2">Verb</label>
          </div>
          <div>
            <input
              type="checkbox"
              class="form-check-input"
              value="adj"
              id="adj"
              v-model="newWord.type"
            />
            <label for="adj" class="form-check-label ps-2">Adjective</label>
          </div>
          <div>
            <input
              type="checkbox"
              class="form-check-input"
              value="adv"
              id="adv"
              v-model="newWord.type"
            />
            <label for="adv" class="form-check-label ps-2">Adverb</label>
          </div>
          <div>
            <input
              type="checkbox"
              class="form-check-input"
              value="preposition"
              id="preposition"
              v-model="newWord.type"
            />
            <label for="preposition" class="form-check-label ps-2"
              >Preposition</label
            >
          </div>
          <div>
            <input
              type="checkbox"
              class="form-check-input"
              value="conjunction"
              id="conjunction"
              v-model="newWord.type"
            />
            <label for="conjunction" class="form-check-label ps-2"
              >Conjunction</label
            >
          </div>
          <div>
            <input
              type="checkbox"
              class="form-check-input"
              value="others"
              id="others"
              v-model="newWord.type"
            />
            <label for="others" class="form-check-label ps-2">Others</label>
          </div>
        </div>

        <button @click="addWord">Add Word</button>
      </div>
    </div>
    <div class="col-lg-3 col-sm-2 col-0"></div>
  </div>
</template>

<script>
import { addWord } from "../firebase";
export default {
  data() {
    return {
      newWord: {
        word: "",
        type: [],
        definition: ["definition 1"],
        example: ["example 1"],
        story: [{ title: "A new story", content: "Loren is a stupid sheep" }],
        createdTime: null,
        modifiedTime: null,
      },
    };
  },
  methods: {
    async addWord() {
      await addWord(this.newWord);
      this.newWord.word = "";
      this.newWord.type = [];
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
  margin-top: 50px;
  input[type="text"] {
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
  .checkType {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: start;
    div {
      width: 140px;
      margin-top: 10px;
      justify-content: start;
      display: flex;
    }
  }
}
</style>
