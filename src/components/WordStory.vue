<template>
  <div class="card my-3 story-block">
    <div class="card-header justify-content-between d-flex">
      <span class="fw-bold">Story</span>
      <span class="fw-bold text-primary" role="button" @click="addContent"
        >S+</span
      >
    </div>
    <div v-if="myWord">
      <ol class="m-3 list-group list-group-flush">
        <li
          v-for="story in myWord.story"
          :key="story"
          class="list-group-item pe-0"
        >
          <div class="fw-bold">
            <ContentArea
              :content="story.title"
              @save_content="saveTitle"
              @delete_content="deleteContent"
            />
          </div>
          <div class="storyContent">
            <ContentArea :content="story.content" @save_content="saveContent" />
          </div>
        </li>
      </ol>
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
      var newStory = {
        title: "A new story",
        content: "Loren is a stupid sheep",
      };
      this.myWord.story.push(newStory);
    },
    saveTitle(contentObj) {
      var index = this.myWord.story
        .map((x) => x.title)
        .indexOf(contentObj.oldContent);
      this.myWord.story[index].title = contentObj.newContent;
      this.store.updateWord(this.myWord);
    },
    saveContent(contentObj) {
      var index = this.myWord.story
        .map((x) => x.content)
        .indexOf(contentObj.oldContent);
      this.myWord.story[index].content = contentObj.newContent;
      this.store.updateWord(this.myWord);
    },
    deleteContent(contentObj) {
      var index = this.myWord.story
        .map((x) => x.content)
        .indexOf(contentObj.oldContent);
      this.myWord.story.splice(index, 1);
      this.store.updateWord(this.myWord);
    },
  },
  mounted() {
    this.store = useWordStore();
    this.myWord = this.store.selectedWord;
  },
};
</script>

<style scoped>
.storyContent {
  padding-left: 10px;
}
</style>
