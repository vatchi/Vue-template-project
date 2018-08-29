<template>
  <div class="tetris">
    <h1>Tetris</h1>
    <hr />
    <div class="tetris__gameBoard">
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell activePiece"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell activePiece"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell activePiece"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell activePiece"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
      <div class="row tetris__gridRow">
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
        <div class="col tetris__gridCell"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import JQuery from 'jquery';
  let $ = JQuery;

  export default {

    data: () => ({

    }),

    methods: {

      init() {
        //Calculate height of each cell
        let grid = $('.tetris__gridCell');
        let colWidth = grid.outerWidth() - 2;
        grid.height(colWidth);

        //Set data attribute on each cell
        grid.each(function (index) {
          $(this).attr('data-gridcellid', index);
        });
      },

      eventListeners() {
        let $root = this;

        $(function () {
          $(window).keydown(function (e) {
            switch (e.which) {
              case 37: // left
                $root.moveLeft();
                break;

              case 38: // up
                break;

              case 39: // right
                $root.moveRight();
                break;

              case 40: // down
                $root.moveDown();
                break;

              default: return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
          });
        });
      },

      moveLeft() {
        let currentBlock = $('.activePiece');
        currentBlock.each(function (index) {
          let currentPosition = $(this).data("gridcellid");
          let newPosition = $("[data-gridcellid='" + (currentPosition - 1) + "']");
          $(this).removeClass('activePiece');
          newPosition.addClass('activePiece');
        })
      },

      moveRight() {
        let currentBlock = $('.activePiece');
        currentBlock.each(function (index) {
          let currentPosition = $(this).data("gridcellid");
          let newPosition = $("[data-gridcellid='" + (currentPosition + 1) + "']");
          $(this).removeClass('activePiece');
          newPosition.addClass('activePiece');
        })
      },

      moveDown() {
        let currentBlock = $('.activePiece');
        let topCell = currentBlock.first();
        topCell.removeClass('activePiece');
        let currentPosition = currentBlock.data("gridcellid");
        let newPosition = $("[data-gridcellid='" + (currentPosition + 40) + "']");
        newPosition.addClass('activePiece');
      },
    },

    mounted() {
      this.init();
      this.eventListeners();
    },
  }
</script>

<style scoped>
  .tetris__gridRow {
    margin-right: 70%;
    margin-left: 0;
    flex-wrap: nowrap;
  }

  .tetris__gridCell {
    margin: 1px;
    border: 1px solid lightgrey;
  }

  .activePiece {
    background-color: red;
  }
</style>
