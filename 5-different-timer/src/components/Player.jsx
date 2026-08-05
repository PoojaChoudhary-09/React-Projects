import {useState,useRef} from 'react'
export default function Player() {

  const playersName = useRef();
 const[playername, setPlayerName] = useState(null);

 function handleClick(){
  setPlayerName(playersName.current.value);
  playersName.current.value ="";
 }
  return (
    <section id="player">
      <h2>Welcome {playername ? playername : 'unknow entity'}</h2>
  
   {/* another of writting : ternary operator <h2>Welcome {playername ?? 'unknow entity'}</h2> */}

      <p>
        <input ref={playersName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
