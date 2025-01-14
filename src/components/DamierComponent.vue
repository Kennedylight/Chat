<template>
    <div class="flex h-screen items-center justify-center bg-gray-900">
      <div class="grid-rows-8 grid grid-cols-8 gap-0">
        <div
          v-for="(square, index) in board"
          :key="index"
          :class="[
            'w-16 h-16 flex justify-center items-center cursor-pointer',
            getSquareColor(index),
          ]"
          @click="selectSquare(index)"
        >
          <div v-if="square" :class="['text-4xl', getPieceStyle(square)]">
            {{ square.piece }}
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        board: [],
        selectedPiece: null,
        currentPlayer: 'white',
      };
    },
    mounted() {
      this.setupBoard();
    },
    methods: {
      setupBoard() {
        const initialSetup = [
          ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
          Array(8).fill('P'),
          ...Array(4).fill(Array(8).fill(null)),
          Array(8).fill('p'),
          ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ];
        
        this.board = initialSetup.flatMap((row, rowIndex) => 
          row.map((piece) => piece ? {
            piece,
            color: rowIndex < 2 ? 'white' : 'black'
           
          } : null)
        );
      },
      getSquareColor(index) {
        return (Math.floor(index / 8) + (index % 8)) % 2 === 0
          ? 'bg-gray-300'
          : 'bg-gray-700';
      },
      getPieceStyle(square) {
        return square.color === 'white' ? 'text-white' : 'text-black';
      },
      selectSquare(index) {
        const square = this.board[index];
        if (this.selectedPiece !== null) {
          if (this.isValidMove(index)) {
            this.movePiece(index);
          } else {
            this.selectedPiece = null;
          }
        } else if (square && square.color === this.currentPlayer) {
          this.selectedPiece = index;
        }
      },
      movePiece(index) {
        this.board[index] = this.board[this.selectedPiece];
        this.board[this.selectedPiece] = null;
        this.selectedPiece = null;
        this.currentPlayer = this.currentPlayer === 'white' ? 'black' : 'white';
      },
      isValidMove(index) {
        const targetSquare = this.board[index];
        if (targetSquare && targetSquare.color === this.currentPlayer) {
          return false; // Ne pas capturer ses propres pièces
        }
        // Ajouter plus de validation pour les mouvements spécifiques des pièces ici
        return true;
      },
    },
  };
  </script>
    