
const GameBoard = ( {onSelectSqure, board}) => {
  
    return (
        <ol className="m-2">
            {board.map((row, rowIndex) => <li key={rowIndex} className="mb-5">
                <ol className="flex space-x-20 mt-5">
                    {row.map((playerSymbole, colIndex) =>
                        <li key={colIndex} >
                            <button className="bg-slate-400 text-white text-2xl items-center justify-center flex
             font-bold px-10 py-6 rounded" style={{ width: "80px", height: "80px" }} onClick={() => onSelectSqure(rowIndex, colIndex)}
             disabled={playerSymbole !== null}>
                                {playerSymbole}</button>
                        </li>
                    )}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard