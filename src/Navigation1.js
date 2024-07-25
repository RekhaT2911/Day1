import { Link } from "react-router-dom";

function Navigation1(){
return(
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",background:"#e5e5e5",padding:"10px"}}>
        <div style={{display:"flex",gap:"10px",cursor:"pointer"}}>
        <Link to="/" style={{backgroundColor:"black",color:"white",fontSize:"40px",textDecoration:"None",padding:"5px",borderRadius:"7px"}}>Home</Link>&nbsp;
        <Link to="/productList" style={{backgroundColor:"black",color:"white",fontSize:"40px",textDecoration:"None",padding:"5px",borderRadius:"5px"}}>Products</Link>
        </div>
        <div style={{display:"flex",gap:"10px",cursor:"pointer"}}>
        <Link to="/" style={{backgroundColor:"black",color:"white",fontSize:"40px",textDecoration:"None",padding:"5px",borderRadius:"7px"}}>Cart</Link>&nbsp;
        <Link style={{backgroundColor:"black",color:"white",fontSize:"40px",textDecoration:"None",padding:"5px",borderRadius:"5px"}}>Profile</Link>
       
        </div>

    </div>
);
}
export default Navigation1;
