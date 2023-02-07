<template>
  <div class="listWords">
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between"
        v-for="word in allWords"
        :key="word.word"
      >
        <div role="button" @click="openWord(word)">
          <router-link
            :to="{ name: 'MyWord', params: { word: word.word } }"
            class="text-decoration-none"
          >
            <p class="word user-select-none fw-bold my-0">
              {{ word.word }}
            </p>
            <p class="wordType user-select-none fst-italic fw-lighter my-0">
              {{ word.type }}
            </p>
          </router-link>
        </div>
        <span
          @click="deleteWord(word)"
          class="text-danger fw-bold"
          role="button"
          >x</span
        >
      </li>
    </ul>
  </div>
  <div class="d-flex justify-content-end my-2 mx-2">
    <span style="font-weight: bold">{{ count }}</span>
    <p class="px-1">words</p>
  </div>
</template>

<script>
import { deleteWord } from "../firebase";
import { useWordStore } from "../store/useWordStore";
import { storeToRefs } from "pinia";
export default {
  data() {
    return {
      count: 0,
      store: null,
      allWords: [],
    };
  },
  props: {},
  methods: {
    async deleteWord(word) {
      await deleteWord(word);
      await this.store.searchWord(null);
    },
    async openWord(word) {
      this.store.selectWord(word);
      this.$router.push({ path: word.word });
    },
  },
  updated() {
    this.count = this.allWords.length;
  },
  mounted() {
    this.store = useWordStore();
    this.allWords = storeToRefs(this.store).listWord;
  },
};
</script>

<style scoped lang="scss">
.listWords {
  max-height: 550px;
  overflow-y: auto;
  .word {
    font-weight: bold;
    color: royalblue;
  }
  .wordType {
    font-weight: lighter;
    font-style: oblique;
    color: rosybrown;
    font-size: 12px;
  }
}
.deleteButton {
  cursor: pointer;
  color: red;
}
/* width */
::-webkit-scrollbar {
  width: 0.5rem;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 0.25rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: royalblue;
  border-radius: 0.25rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}
</style>
