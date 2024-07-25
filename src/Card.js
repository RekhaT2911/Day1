import Eleven from "./Eleven";

function CardUI(props) {
    const width = 350;
    const height = 300;
    return (
        <div className="card" style={{ width: '2050px', height: '950', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h1><b>Ferrari</b></h1>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img 
                    src="ferrari.png" 
                    width={width} 
                    height={height} 
                    alt="Ferrari" 
                    style={{ border: '1px solid #FF0000', borderRadius: '10px', marginRight: '20px' }} 
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1>{props.userFromArray}</h1>
                    <h3 style={{fontSize:'18px'}}>Description<br />{props.user.Description}</h3>
                    <h3>Price: {props.user.Price}</h3>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{ width: '100px', height: '40px', fontSize: '14px' }}
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h3>Product Specifications:</h3>
                <ul>
                    <li>Engine: 6.5L V12</li>
                    <li>Power: 789 hp @ 8,500 rpm</li>
                    <li>Torque: 529 lb-ft @ 7,000 rpm</li>
                    <li>0-60 mph: 2.9 seconds</li>
                    <li>Top Speed: 211 mph</li>
                    <li>Weight: 3,594 lbs</li>
                </ul>
            </div>
            <div>
                <hr style={{ margin: '20px 0' }} />
                <h1>Reviews</h1>
                <Eleven />
            </div>
        </div>
    );
}

export default CardUI;
