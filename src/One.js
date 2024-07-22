import Three from "./Three";
import Two from "./Two";
import Fourr from "./Fourr";
import Five from "./Five";

function One() {
    const descriptions = {
        atoms: "Innovative",
        watch: "Elegant"
    };

    const reviews = [
        "Review 1: This is a great component!",
        "Trisha 2: It was so beautiful and good Quality!",
    ];

    return (
        <div>
            <h1>This is from a component</h1>
            <img src="/Atoms.png" alt="Atoms" />
            <p>{descriptions.atoms}</p>
            <img src="/watch.png" alt="watch" />
            <p>{descriptions.watch}</p>
            <div>
                <h2>Reviews:</h2>
                <ul>
                    {reviews.map((review, index) => ( <li key={index}>{review}</li>
                    ))}
                </ul>
            </div>
            <Two />
            <Three />
            <Fourr />
            <Five />
        </div>
    );
}

export default One;