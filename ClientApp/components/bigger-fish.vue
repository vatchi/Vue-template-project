<template>
  <div class="biggerFish">
    <h1>Bigger Fish</h1>
    <hr />
    <canvas id="biggerFish__canvas" class="biggerFish__canvas" width="1024" height="768"></canvas>
  </div>
</template>

<script>
  import JQuery from 'jquery';
  let $ = JQuery;

  let canvas;
  let ctx;
  let canvasOffset;
  let offsetX;
  let offsetY;
  let keys = [];
  let interval;

  export default {

    data: () => ({
      blobSize: 10,
      blobSpeed: 5,
      currentPositionX: 0,
      currentPositionY: 0,
      targetPositionX: 0,
      targetPositionY: 0,
      enemySize: [],
      enemyPositionX: [],
      enemyPositionY: [],
      numberOfEnemies: 7,
    }),

    methods: {

      init() {
        canvas = document.getElementById("biggerFish__canvas");
        ctx = canvas.getContext("2d");
        canvasOffset = $("#biggerFish__canvas").offset();
        offsetX = canvasOffset.left;
        offsetY = canvasOffset.top;
        let canvasWidth = canvas.clientWidth;
        let canvasHeight = canvas.clientHeight;
        this.currentPositionX = canvasWidth / 2;
        this.currentPositionY = canvasHeight / 2;
        this.drawBlob();
      },

      getCanvasContext(canvas) {
        let ctx = canvas.getContext("2d");
        return ctx;
      },

      drawBlob() {

        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.beginPath();
        ctx.arc(this.currentPositionX, this.currentPositionY, this.blobSize, 0, 2 * Math.PI);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
      },

      createEnemies() {

        for (var index = 0; index < this.numberOfEnemies; index++) {
          this.enemySize[index] = (Math.floor((Math.random() * (this.blobSize + 7)) + (this.blobSize - 7)));
          this.enemyPositionX[index] = (Math.floor((Math.random() * canvas.clientWidth - this.enemySize[index] - 1) + (this.enemySize[index] - 1)));
          this.enemyPositionY[index] = (Math.floor((Math.random() * canvas.clientHeight - this.enemySize[index] - 1) + (this.enemySize[index] - 1)));
        }
      },

      addEnemy() {
        var tempSize = (Math.floor((Math.random() * (this.blobSize + 7)) + (this.blobSize - 7)));
        this.enemySize.push(tempSize);
        this.enemyPositionX.push((Math.floor((Math.random() * canvas.clientWidth - tempSize - 1) + (tempSize - 1))));
        this.enemyPositionY.push((Math.floor((Math.random() * canvas.clientHeight - tempSize - 1) + (tempSize - 1))));
        this.numberOfEnemies++;
        this.drawEnemies();
      },

      drawEnemies() {

        for (var i = 0; i < this.numberOfEnemies; i++) {
          ctx.beginPath();
          ctx.arc(this.enemyPositionX[i], this.enemyPositionY[i], this.enemySize[i], 0, 2 * Math.PI);
          ctx.fillStyle = 'red';
          ctx.fill();
          ctx.lineWidth = 1;
          ctx.strokeStyle = '#330000';
          ctx.stroke();
        }
      },

      checkForCollision() {
        let $root = this;

        $root.enemyPositionX.forEach(function (element, index) {
          if ($root.currentPositionX > (element - $root.enemySize[index] - $root.blobSize / 2) && $root.currentPositionX < (element + $root.enemySize[index] + $root.blobSize / 2)) {
            if ($root.currentPositionY > ($root.enemyPositionY[index] - $root.enemySize[index] - $root.blobSize / 2) && $root.currentPositionY < ($root.enemyPositionY[index] + $root.enemySize[index] + $root.blobSize / 2)) {
              console.log('Hit X & Y, YAAAAAY!');
              $root.blobSize += Math.floor($root.enemySize[index] / 3);
              delete $root.enemyPositionX[index];
              delete $root.enemyPositionY[index];
              $root.addEnemy();
            }
          }
        });
      },

      keysPressed(e) {
        let $root = this;
        keys[e.keyCode] = true;

        // left
        if (keys[37]) {
          if ($root.currentPositionX > $root.blobSize + 1) {
            $root.currentPositionX -= $root.blobSpeed;
          }
          else {
            $root.currentPositionX = $root.blobSize + 1;
          }
        }
        // right
        if (keys[39]) {
          if ($root.currentPositionX < canvas.clientWidth - $root.blobSize - 1) {
            $root.currentPositionX += $root.blobSpeed;
          }
          else {
            $root.currentPositionX = canvas.clientWidth - $root.blobSize - 1;
          }
        }
        // up
        if (keys[38]) {
          if ($root.currentPositionY > $root.blobSize + 1) {
            $root.currentPositionY -= $root.blobSpeed;
          }
          else {
            $root.currentPositionY = $root.blobSize + 1;
          }
        }
        // down
        if (keys[40]) {
          if ($root.currentPositionY < canvas.clientHeight - $root.blobSize - 1) {
            $root.currentPositionY += $root.blobSpeed;
          }
          else {
            $root.currentPositionY = canvas.clientHeight - $root.blobSize - 1;
          }
        }

        e.preventDefault(); // prevent the default action (scroll / move caret)
        $root.drawBlob();
        $root.drawEnemies();
        $root.checkForCollision();
      },

      keysReleased(e) {
        keys[e.keyCode] = false;
      },

      eventListeners() {
        let $root = this;
        window.addEventListener('keydown', this.keysPressed, false);
        window.addEventListener('keyup', this.keysReleased, false);
      },
    },

    mounted() {
      this.init();
      this.eventListeners();
      this.createEnemies();
      this.drawEnemies();
    },
  }
</script>

<style scoped>
  .biggerFish__canvas {
    border: 1px solid black;
  }
</style>
