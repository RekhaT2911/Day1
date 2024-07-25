import {useEffect,useState} from "react";
function Eight(){
    //const count=0;
    const [count,setCount]=useState(1);
    useEffect(()=>{
        //setCount(5);
        console.log("Use effect is called");
    });


    const btnUpdateCount=()=>{
        setCount(count+2);
    }
    
    return(
        <div>
            <h1>Count {count}</h1>
            <button className="btn btn-dark" 
            onClick={btnUpdateCount}>Click here</button>

        </div>
    );
}
export default Eight;