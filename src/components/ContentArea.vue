<template>
  <div class="row">
    <div class="col-10">
      <div v-if="!isEditing">
        <p>{{ content }}</p>
      </div>
      <div v-if="isEditing">
        <textarea
          class="form-control textArea"
          name="abc"
          id=""
          cols="30"
          rows="10"
          v-model="contentObj.newContent"
        ></textarea>
      </div>
    </div>
    <div class="col-2 d-flex justify-content-end fw-normal pe-0">
      <div v-if="!isEditing && !isEditingGlobal">
        <span
          role="button"
          @click="speech(contentObj.newContent)"
          class="text-info"
        >
          <font-awesome-icon icon="fa-solid fa-headphones" />
        </span>
        <span role="button" @click="editContent" class="text-warning ps-2">
          <font-awesome-icon icon="fa-solid fa-pen-to-square" />
        </span>
      </div>
      <div v-if="isEditing" class="justify-content-between d-flex flex-column">
        <div>
          <div>
            <span role="button" @click="saveContent" class="text-primary"
              >Save</span
            >
          </div>
          <div>
            <span role="button" @click="cancelEditing" class="text-secondary"
              >Cancel</span
            >
          </div>
        </div>
        <div>
          <span role="button" @click="deleteContent" class="text-danger"
            >Delete</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useWordStore } from "../store/useWordStore";
import { storeToRefs } from "pinia";
export default {
  data() {
    return {
      isEditing: false,
      isEditingGlobal: false,
      contentObj: {
        oldContent: "",
        newContent: "",
      },
    };
  },
  props: {
    content: String,
  },
  methods: {
    editContent() {
      this.isEditing = true;
      this.store.editDefinition(true);
    },
    saveContent() {
      this.isEditing = false;
      this.store.editDefinition(false);
      this.$emit("save_content", this.contentObj);
    },
    cancelEditing() {
      this.isEditing = false;
      this.store.editDefinition(false);
    },
    deleteContent() {
      this.$emit("delete_content", this.contentObj);
    },
    speech(m) {
      var msg = new SpeechSynthesisUtterance();
      var voices = window.speechSynthesis.getVoices();
      msg.voice = voices[10];
      msg.voiceURI = "native";
      msg.volume = 1;
      msg.rate = 0.8;
      msg.pitch = 0.8;
      msg.text = m;
      msg.lang = "en-US";
      speechSynthesis.speak(msg);
    },
  },
  mounted() {
    this.store = useWordStore();
    this.isEditingGlobal = storeToRefs(this.store).isDefinitionEditing;
    this.contentObj.oldContent = this.content;
    this.contentObj.newContent = this.content;
  },
  unmounted() {
    this.store.editDefinition(false);
  },
};
</script>

<style scoped>
.textArea {
  height: 100px;
}
</style>
