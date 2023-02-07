<template>
  <div class="full-page">
    <nav class="navbar navbar-dark bg-dark justify-content-center d-flex">
      <div>
        <router-link to="/" class="px-2 text-decoration-none">Home</router-link>
        <!-- <router-link to="/myword" class="px-2 text-decoration-none"
          >My Word</router-link
        > -->
        <router-link to="/addword" class="px-2 text-decoration-none"
          >New Word</router-link
        >
      </div>
    </nav>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {
    // TestPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
.full-page {
  /* overflow: hidden; */
  background: rgb(245, 250, 250);
}
.main-view {
  padding: 0 0.2rem;
  /* max-height: 800px; */
}
.definition-block {
  min-height: 150px;
}
.example-block {
  min-height: 150px;
}

.story-block {
  min-height: 200px;
}
</style>
