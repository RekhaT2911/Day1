import { useEffect,useState} from "react";
function Nine(){
    const [count,setCount]=useState(1);
    useEffect(()=>{
        console.log("Use effect is called");
    },[]);
    const btnUpdateCount=()=>{
        setCount(count-1);
    }
    const btnUpdateCount2=()=>{
        setCount(count+1);
    }
    return(
        <div style={{display:'flex'}}>
            <button className="btn btn-outline-dark" onClick={btnUpdateCount}>-</button>
            <h3 style={{margin:'10px'}}>{count}</h3>
            <button className="btn btn-outline-dark" onClick={btnUpdateCount2}>+</button>

        </div>
    )
}
export default Nine;