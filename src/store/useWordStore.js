import { defineStore } from "pinia";
import { updateWord, searchWord } from "../firebase";

export const useWordStore = defineStore("listWord", {
  state: () => ({
    isDefinitionEditing: false,
    selectedWord: null,
    searchWord_Input: null,
    listWord: [],
  }),
  actions: {
    editDefinition(isEditing) {
      this.isDefinitionEditing = isEditing;
    },
    updateWord(myWord) {
      updateWord(myWord);
    },
    selectWord(myWord) {
      this.selectedWord = myWord;
    },
    async searchWord(word) {
      this.searchWord_Input = word;
      this.listWord = await searchWord(word);
    },
  },
});
