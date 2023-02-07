<template>
  <div class="card my-3 example-block">
    <div class="card-header justify-content-between d-flex">
      <span class="fw-bold">Example</span>
      <span class="fw-bold text-primary" role="button" @click="addContent"
        >E+</span
      >
    </div>
    <div v-if="myWord">
      <ul class="m-3">
        <li v-for="exa in myWord.example" :key="exa">
          <div>
            <ContentArea
              :content="exa"
              @save_content="saveContent"
              @delete_content="deleteContent"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ContentArea from "./ContentArea.vue";
import { useWordStore } from "../store/useWordStore";
export default {
  components: {
    ContentArea,
  },
  data() {
    return {
      myWord: null,
    };
  },
  methods: {
    addContent() {
      this.myWord.example.push("add new...");
    },
    saveContent(contentObj) {
      const index = this.myWord.example.indexOf(contentObj.oldContent);
      this.myWord.example[index] = contentObj.newContent;
      this.store.updateWord(this.myWord);
    },
    deleteContent(contentObj) {
      var index = this.myWord.example.indexOf(contentObj.oldContent);
      this.myWord.example.splice(index, 1);
      this.store.updateWord(this.myWord);
    },
  },
  mounted() {
    this.store = useWordStore();
    this.myWord = this.store.selectedWord;
  },
};
</script>

<style scoped></style>
