import { useState } from "react";
import Button from 'react-bootstrap/Button';

const App=()=>{
 const  [cnt,setcnt]=useState(0);
 const inc=()=>{
  setcnt(cnt+1);
 }
 const dec=()=>{
  if(cnt<1)
  {
    alert="error";
  }
  else
  setcnt(cnt-1);
 }
  return(
    <>
    <div className="cnt">
      <Button variant="dark" onClick={inc}>Inc</Button>
      <h1>Count:{cnt}</h1>
      <Button variant="dark" onClick={dec}>Dec</Button>
      <Button variant="danger" onClick={()=>{setcnt(0)}}>Reset</Button>
      </div>
    </>
  ) 
}
export default App;