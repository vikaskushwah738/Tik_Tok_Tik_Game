import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'
import Header from './components/Header'
import Player from './components/Player'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './winning-combination'
import GameOver from './components/GameOver'

const PLAYERS={
  'X': 'player 1',
  'O':'player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function deriveActivePlayer(gameTurn){
  let currentPlayer= "X";
  if (gameTurn.length > 0 && gameTurn[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}
function deriveGameBoard(gameTurn){
  let gameBoard= [...INITIAL_GAME_BOARD.map(array => [...array])];
  
  for (const turn of gameTurn ){
  const {square, player} =turn;
  const {row , col}=square;

  gameBoard[row][col] =player;
}
return gameBoard;
}
 function deriveWinner(gameBoard, players){
  let winner;
  for (const combination of WINNING_COMBINATIONS){
    const fisrtSqureSymbole =gameBoard[combination[0].row][combination[0].column]
    const secondSqureSymbole=gameBoard[combination[1].row][combination[1].column]
    const thridSqureSymbole=gameBoard[combination[2].row][combination[2].column]
  if(fisrtSqureSymbole && 
    fisrtSqureSymbole === secondSqureSymbole &&
    fisrtSqureSymbole === thridSqureSymbole){
      winner= players[fisrtSqureSymbole];
    }
  }
  return winner;
 }
function App() {
  const [players, setPlayer]=useState(PLAYERS);
  const [gameTurn , setGameTurn]=useState([]);
  
const activePlayer=deriveActivePlayer(gameTurn)   
const gameBoard=deriveGameBoard(gameTurn)
const winner= deriveWinner(gameBoard, players)
const hasDraw=gameTurn.length ===9 && !winner;

  function handleSelectSqure(rowIndex , colIndex){   
    setGameTurn((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);
         const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handleRestart(){
    setGameTurn([]);
  }

  function handlePlayerNmaeChange(symbol, newName){
   setPlayer(prevPlayers =>{
    return {
      ...prevPlayers,
      [symbol]: newName
    }
   });
  }
  return (
    <>
      <main className='bg-purple-400 bg-opacity-75 '>
        <Header />
        <div className='relative p-8 bg-[#1C1D1F] bg-opacity-90  shadow-md
      w-[500px] rounded-md m-auto'>
          <div  className='flex justify-between text-white'>
           <Player 
           initiaName={PLAYERS.X} 
           symbol='X'
           isActive={activePlayer === 'X'} 
           onChangeName={handlePlayerNmaeChange}
           />
           <Player 
           initiaName={PLAYERS.O} 
           symbol='O' 
           isActive={activePlayer === 'O'}
           onChangeName={handlePlayerNmaeChange}
           />
          </div>
          {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}  
          <GameBoard onSelectSqure={handleSelectSqure} board={gameBoard}/>
        </div>
        <Log turns={gameTurn}/>
      </main>
    </>
  )
}

export default App
