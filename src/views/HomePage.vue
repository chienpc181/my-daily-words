<template>
  <div class="row main-view">
    <div class="col-lg-3 col-sm-2 col-0"></div>
    <div class="col-lg-6 col-sm-8 col-12">
      <div class="searchBar">
        <SearchWord />
      </div>
      <div>
        <ListWords />
      </div>
    </div>
    <div class="col-lg-3 col-sm-2 col-0"></div>
  </div>
</template>

<script>
import SearchWord from "../components/SearchWord.vue";
import ListWords from "../components/ListWords.vue";
export default {
  name: "TestPage",
  components: {
    SearchWord,
    ListWords,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.searchBar {
  margin: 20px 0;
}
</style>
