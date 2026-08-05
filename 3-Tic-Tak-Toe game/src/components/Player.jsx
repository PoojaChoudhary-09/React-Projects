import { useState } from "react"
export default function Player({initialName, symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing]= useState(false);

 function handleEdit(){
   setIsEditing( (editing)=> !isEditing);
   if(isEditing){
 onChangeName(symbol,playerName);
   }
  
 }

function handleChange(event){
    // console.log(event)
    setPlayerName(event.target.value);
}

 let EditPlayerName = <span className="player-name">{playerName}</span>;
//  let btnCaption = 'Edit';
 if(isEditing){
    EditPlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
    // btnCaption ='Save';
 }
  return (
      <li className={isActive ? 'active': undefined}>
            <span className="player">
            {EditPlayerName}
            <span className="player-smybol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
  )
}