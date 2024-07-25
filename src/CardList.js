import CardUI from "./Card";

function CardListUI() {
    const name = "ReactJS";
    const college = "SVECW";
    const userObject = {
        Description: "Engine: 6.5L V12, Power: 789 hp @ 8,500 rpm, Torque: 529 lb-ft @ 7,000 rpm, 0-60 mph: 2.9 seconds, Top Speed: 211 mph, Weight: 3,594 lbs",
        Price: "Rs 3,50,00,000"
    };
    const users = ["Ferrari"];
    
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {
                users.map((user, index) => (
                    <CardUI 
                        key={index}
                        program={name}
                        col={college}
                        user={userObject}
                        userFromArray={user} 
                    />
                ))
            }
        </div>
    );
}

export default CardListUI;
