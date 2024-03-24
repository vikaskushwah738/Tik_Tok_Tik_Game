import {useState} from 'react'

const Player = ({initiaName="Player", symbol="X", isActive , onChangeName}) => {
const[playerName, setPlayerName]=useState(initiaName);    
const [isEditing, setEditing]=useState(false);
function handleEditClick(){
    // setEditing(!isEditing);
    // setEditing(!isEditing); react not good this type
    setEditing((editing) => !editing);
    if(isEditing){
        onChangeName(symbol, playerName)
    }
    
}
function handleChange(event){
    console.log(event)
    setPlayerName(event.target.value)
}
let editPlayerName=<span className=''>{playerName}</span>;
//let btnCaption='Edit'
if(isEditing){
    editPlayerName= <input type='text' required 
    onChange={handleChange} value={playerName}
     className='w-24 rounded-sm bg-slate-400 
      text-black text-center'/>
   // btnCaption='Save';
}
return (
        <>
            <ol className={`flex space-x-9 ${isActive ? "border p-0.5" : ""} `}>
                <li>{editPlayerName}</li>
                <li><span className=''>{symbol}</span></li>
                <li className='text-purple-400'><button 
                onClick={handleEditClick}>{isEditing ? 'Save' : "Edit"}</button></li>
            </ol>
        </>
    )
}

export default Player