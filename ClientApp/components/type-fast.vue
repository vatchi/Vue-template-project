<template>
  <div class="typeFast__container--marginRight">
    <h1>Type fast</h1>
    <hr />
    <div class="row">
      <div class="col-4">
        <p class="typeFast__gameInfo">Tries left: {{numberOfTries}}</p>
      </div>
      <div class="col-4">
        <p class="typeFast__gameInfo">Score: {{score}}</p>
      </div>
      <div class="col-4">
        <p class="typeFast__gameInfo">Level: {{level}}</p>
      </div>
    </div>

    <div class="typeFast__gameArea">
      <div class="typeFast__slideArea">
        <p class="typeFast__word">{{word}}</p>
      </div>     
    </div>
    <input type="text" autofocus class="typeFast__textInput" v-model="inputText" @input="onTextInput"><br>
  </div>
</template>

<script>
  import JQuery from 'jquery';
  let $ = JQuery;

  export default {
    data: () => ({
      score: 0,
      numberOfTries: 5,
      level: 1,
      word: "",
      inputText: "",
    }),

    mounted() {
      this.init();
    },

    methods: {

      init() {
        this.generateWord();
        this.slideWord();
      },

      generateWord() {
        let text = "";
        let possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        for (let i = 0; i < 3; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        this.word = text;
      },

      slideWord() {
        let $root = this;
        $('.typeFast__slideArea').animate({ 'margin-left': '100%' }, 10000, function () {
          $root.timedOut();
        });
      },

      timedOut() {
        if (this.numberOfTries != 0) {
          this.numberOfTries--;
          this.resetWord();
        }
      },

      onTextInput() {
        if (this.inputText === this.word) {
          this.score += (this.word.length * 10);
          $('.typeFast__slideArea').stop();
          this.resetWord();
        }
      },

      resetWord() {
        this.word = "";
        this.generateWord();
        $('.typeFast__slideArea').css('margin-left', '-10%');
        this.inputText = "";
        this.slideWord();
      }
    }
  };

</script>

<style lang="scss">
  @import 'type-fast.scss';
</style>
