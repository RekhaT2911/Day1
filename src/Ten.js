function Ten(){
    const inputValueChange=(event)=>{
        console.log("Input Changed");
        console.log(event.target.value);
    }
    const addReview=()=>{
        console.log("Adding review......");
    }
    return (
        <div>
            <input type="text" placeholder="Enter a Review" onChange={inputValueChange}/>
            <button className="btn btn-dark btn-sm" onClick={addReview}>Add review</button>
        </div>
    );
}
export default Ten;