import { useState } from "react";
import Ticket from "./Ticket";
export default function Lottery(){
  const [ticket,setTicket] = useState([0,0,0]);

  const generateTicket =()=>{
    const newTicket=[
      Math.floor(Math.random()*10),
      Math.floor(Math.random()*10),
      Math.floor(Math.random()*10),
      
    ];
    setTicket(newTicket);
  };
  const sum = ticket.reduce((acc,curr)=>acc+curr,0);
  const isWinner = sum == 15;
  return (
    <div style={{textAlign:"center"}}>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket}/>
      <br />
      <button style={{backgroundColor:"green"}} onClick={generateTicket}>Generate Ticket</button>

      <h3>sum ={sum}</h3>
      {isWinner ?(
        <h2>Congratulations! You Won!</h2>
      ):(
        <h2>Try Again</h2>

      )}
    </div>
  );
}