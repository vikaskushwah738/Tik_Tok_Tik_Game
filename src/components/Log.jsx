
const Log = ({ turns }) => {
    return (

        <ol className="flex flex-col items-center justify-center mt-4 text-xl font-normal">
            {turns.map(turn => 
            <li key={`${turn.square.row}${turn.square.col}`}>
                {turn.player} selected
                {turn.square.row}, {turn.square.col}
            </li>
            )}
        </ol>

    )
}

export default Log