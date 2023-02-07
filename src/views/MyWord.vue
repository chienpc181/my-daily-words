<template>
  <div class="row main-view">
    <div class="col-xl-2 col-sm-1 col-0"></div>
    <div class="col-xl-8 col-sm-10 col-12">
      <div class="mt-4 d-flex justify-content-center">
        <h1>{{ word }}</h1>
      </div>
      <div v-if="myWord">
        <WordDefinition />
        <WordExample />
        <WordStory />
      </div>
    </div>
    <div class="col-xl-2 col-sm-1 col-0"></div>
  </div>
</template>

<script>
import { getWordByWord } from "../firebase";
import WordDefinition from "../components/WordDefinition.vue";
import WordExample from "../components/WordExample.vue";
import WordStory from "../components/WordStory.vue";
import { useWordStore } from "../store/useWordStore";

export default {
  components: {
    WordDefinition,
    WordExample,
    WordStory,
  },
  data() {
    return {
      word: this.$route.params.word,
      myWord: null,
    };
  },
  methods: {
    async getWordByWord(word) {
      var result = await getWordByWord(word);
      if (result) {
        return result[0];
      }
    },
  },
  async mounted() {
    this.myWord = await this.getWordByWord(this.word);
    this.store = useWordStore();
    this.store.selectWord(this.myWord);
  },

  unmounted() {
    this.store.selectWord(null);
  },
};
</script>

<style scoped></style>
