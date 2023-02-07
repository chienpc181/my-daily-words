<template>
  <div class="searchBar d-flex">
    <input
      type="search"
      class="form-control"
      placeholder="search your word..."
      v-model="searchWord"
      @input="searchEmpty"
    />
  </div>
</template>

<script>
import { useWordStore } from "../store/useWordStore";
export default {
  data() {
    return {
      searchWord: "",
      store: null,
    };
  },
  methods: {
    async searchEmpty() {
      if (this.searchWord) {
        await this.store.searchWord(this.searchWord);
      } else {
        await this.store.searchWord(null);
      }
    },
  },
  async mounted() {
    this.store = useWordStore();
    if (!this.searchWord) {
      await this.store.searchWord(null);
    }
  },
};
</script>

<style scoped lang="scss">
.searchBar {
  input {
    width: 100%;
  }
}
</style>
