<template>
  <div>
    <h1 class="mb-5">Quiz</h1>
    <div class="mr-20px">
      <table class="table table-bordered">
        <tr>
          <td class="bg-secondary text-white"><small>Timer:</small> {{answerTimer / 1000}} <small>seconds left</small></td>
          <td class="bg-secondary text-white"><small>Tries left:</small> {{numberOfTriesLeft}}</td>
          <td class="bg-secondary text-white"><small>Correct answers:</small> {{numberOfCorrectAnswers}}</td>
        </tr>
      </table>
    </div>
    <div class="gameArea" v-if="currentQuestion !== ''">
      <h2 class="question">{{currentQuestion}}</h2>
      <div class="row">
        <div v-for="question in shuffledAnswersArray" class="col-md-6 col-xs-12 questions-container" v-on:click="checkAnswer($event)">
          <p ref="alternativeRef" class="alternative">{{question}}</p>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-success gameButton" v-if="answerIsCorrect" v-on:click="nextQuestion">Next question</button>
      </div>
    </div>
    <div class="text-center" v-if="!gameIsStarted">
      <button class="btn btn-success gameButton" v-on:click="startGame">Start game!</button>
    </div>
  </div>
</template>

<script>
  const baseUrl = "https://opentdb.com/api.php";
  let interval;

  import axios from 'axios';
  export default {

    data: () => ({
      questions: [],
      currentQuestion: '',
      correctAnswer: '',
      wrongAnswers: [],
      answerIsCorrect: false,
      shuffledAnswersArray: [],
      gameIsStarted: false,
      numberOfTriesLeft: 10,
      numberOfCorrectAnswers: 0,
      answerTimer: 20000,
    }),

    methods: {

      startGame() {
        this.numberOfCorrectAnswers = 0;
        this.numberOfTriesLeft = 10;
        this.gameIsStarted = true;
        this.getQuestions();
      },

      getQuestions() {
        let $root = this;
        let allAnswersArray = [];

        axios.get(baseUrl + '?amount=1&difficulty=easy&type=multiple').then(response => {
          this.questions = response.data.results;
          this.currentQuestion = this.decodeString(this.questions[0].question);
          this.correctAnswer = this.decodeString(this.questions[0].correct_answer);

          this.questions[0].incorrect_answers.forEach(function (element, index) {
            $root.wrongAnswers.push($root.decodeString(element));
            allAnswersArray.push($root.decodeString(element));
          });

          this.wrongAnswers = this.questions[0].incorrect_answers;

          //Push alternatives into one array and randomly shuffle it.
          allAnswersArray.push(this.correctAnswer);
          this.shuffleAnswerArray(allAnswersArray);

          this.startTimer();

        }).catch(error => {
          console.log(error);
        })
      },

      nextQuestion() {
        this.clearGameArea();
        this.getQuestions();
      },

      decodeString(encodedString) {
        var parser = new DOMParser();
        var dom = parser.parseFromString(
          '<!doctype html><body>' + encodedString,
          'text/html');
        var decodedString = dom.body.textContent;

        return decodedString;
      },

      checkAnswer(event) {
        if (event.target.className === 'alternative') {
          if (!this.answerIsCorrect) {
            if (event.target.className === "alternative correctAnswer" || event.target.className === "alternative wrongAnswer") {
              return;
            }
            else {
              let clickedAlternative = this.decodeString(event.target.innerHTML);

              if (clickedAlternative == this.correctAnswer) {
                event.target.className = "alternative correctAnswer"
                this.answerIsCorrect = true;
                clearInterval(interval);
                this.numberOfCorrectAnswers++;
              } else {
                event.target.className = "alternative wrongAnswer"
                this.numberOfTriesLeft--;

                if (this.numberOfTriesLeft < 0) {
                  this.gameOver();
                }
              }
            }
          }
        }
      },

      shuffleAnswerArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        this.shuffledAnswersArray = array;
      },

      clearGameArea() {
        clearInterval(interval);
        this.answerIsCorrect = false;

        let alternatives = this.$refs.alternativeRef;

        if (typeof alternatives !== 'undefined') {
          alternatives.forEach(function (element) {
            element.className = "alternative";
          });
        }
        this.currentQuestion = '';
        this.correctAnswer = '';
        this.wrongAnswers = [];
        this.answerTimer = 20000;
      },

      startTimer() {
        interval = setInterval(this.countDown, 1000);
      },

      countDown() {
        this.answerTimer = this.answerTimer - 1000;

        if (this.answerTimer <= 0) {
          clearInterval(interval);
          this.answerTimer = 0;
          this.numberOfTriesLeft--;
          this.answerIsCorrect = true;
          this.showCorrectAnswer();

          if (this.numberOfTriesLeft < 0) {
            this.gameOver();
          }
        }
      },

      showCorrectAnswer() {
        let $root = this;
        let alternatives = this.$refs.alternativeRef;
        let correctElement = null;

        alternatives.forEach(function (element) {
          if ($root.decodeString(element.innerHTML) === $root.correctAnswer) {
            correctElement = element;
          }
        });

        correctElement.className = "alternative correctAnswer";
      },

      gameOver() {
        this.gameIsStarted = false;
        this.numberOfTriesLeft = '--';
        this.clearGameArea();
      }
    }
  }
</script>

<style scoped>

  .table {
    font-size: 1.3rem;
  }

  .mr-20px {
    margin-right: 20px;
  }

  .gameArea {
    margin-right: 20px;
  }

  .questions-container {
    display: table;
    margin-bottom: 30px;
  }

  .question {
    margin: 40px 0;
  }

  .alternative {
    display: table-cell;
    vertical-align: middle;
    height: 150px;
    text-align: center;
    background-color: #d8e6f3;
    border: 3px solid #76a7d5;
    border-radius: 10px;
    font-size: 18px;
    overflow: auto;
    cursor: pointer;
  }

    .alternative:hover {
      background-color: #b1cde7;
      border: 3px solid #4f8ec9;
    }

    .alternative.correctAnswer {
      background-color: green;
      border: 3px solid #004d00;
    }

    .alternative.wrongAnswer {
      background-color: red;
      border: 3px solid #660000;
      cursor: not-allowed;
    }

  .gameButton {
    width: 50%;
    height: 60px;
    margin-top: 40px;
    font-size: 28px;
  }
</style>
