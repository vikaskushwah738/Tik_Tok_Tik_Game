const GameOver = ({winner , onRestart}) => {
  return (
    <div className="bg-[#1C1D1F]  bg-opacity-25">
        <h2 className="text-purple-500 text-5xl font-bold flex justify-center items-center">Game Over!</h2>
         {winner &&  <p className="text-white flex justify-center items-center mt-4 text-xl">{winner} won!</p>}
         {!winner &&  <p className="text-white flex justify-center items-center mt-4 text-xl">It's a drow</p>}
       
        <p className=" flex justify-center items-center mt-8">
        <button onClick={onRestart} className="text-purple-500 text-xl p-2 border-2 rounded-md border-purple-400 ">Rematch</button>
        </p>
    </div>
  )
}

export default GameOver