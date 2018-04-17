<template>
  <div class="post-wall">
    <h1>Post wall</h1>
    <input v-model="search" placeholder="Enter search terms">
    <p class="searchText">Displaying {{ filteredPosts.length }} posts, filtered by <strong>{{ search }}</strong></p>
    <ul>
      <li v-for="post in filteredPosts">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';

  const baseUrl = "http://jsonplaceholder.typicode.com";

  export default {
    data: () => ({
      posts: [],
      search: "",
      pageNumber: 0,
    }),

    mounted() {
      this.getPosts();
    },

    computed: {

      filteredPosts() {
        return this.posts.filter(post => {
          return post.title.includes(this.search);
        })
      }
    },

    methods: {

      getPosts() {
        axios.get(baseUrl + '/posts').then(response => {
          this.posts = response.data;
        }).catch(error => {
          console.log(error);
        })
      }
    }
  };

</script>

<style scoped>

  input {
    font-size: 18px;
    padding: 10px 20px;
    width: 400px;
    margin-top: 2em;
    margin-bottom: 0.3em;
    border: 3px solid #87b2f8;
    border-radius: 20px;
  }
    input:focus {
      outline: none;
      border: 3px solid #4286f4;
    }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.5em;
  }

  .searchText {
    margin-left: 10px;
    opacity: 0.7;
  }
</style>
