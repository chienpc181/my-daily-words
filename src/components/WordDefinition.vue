<template>
  <div class="card my-3 definition-block">
    <div class="card-header justify-content-between d-flex">
      <span class="fw-bold">Definition</span>
      <span class="fw-bold text-primary" role="button" @click="addContent"
        >D+</span
      >
    </div>
    <div v-if="myWord">
      <ol class="m-3">
        <li v-for="def in myWord.definition" :key="def">
          <div>
            <ContentArea
              :content="def"
              @save_content="saveContent"
              @delete_content="deleteContent"
            />
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import ContentArea from "./ContentArea.vue";
import { useWordStore } from "../store/useWordStore";
// import { storeToRefs } from "pinia";

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
      this.myWord.definition.push("add new...");
    },
    saveContent(contentObj) {
      var index = this.myWord.definition.indexOf(contentObj.oldContent);
      this.myWord.definition[index] = contentObj.newContent;
      this.store.updateWord(this.myWord);
    },
    deleteContent(contentObj) {
      var index = this.myWord.definition.indexOf(contentObj.oldContent);
      this.myWord.definition.splice(index, 1);
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
