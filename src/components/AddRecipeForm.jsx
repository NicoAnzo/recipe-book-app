import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function AddRecipeForm (props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipeDetails = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        props.callbackToCreate(recipeDetails);

        setName("");
        setImage("");
        setCalories("");
        setServings("");
        
        navigate("/");
    }

    return (
        <section className="AddRecipeForm">
            <div className="add-recipe-div">
                <h2>Add a Recipe:</h2>

                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Spaghetti Carbonara"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </label>

                    <label>
                        Image URL:
                        <input
                            type="url"
                            name="image"
                            placeholder="https://example..."
                            value={image}
                            onChange={(e) => { setImage(e.target.value) }}
                        />
                    </label>

                    <label>
                        Calories:
                        <input
                            type="number"
                            name="calories"
                            placeholder="500"
                            min={100}
                            max={5000}
                            value={calories}
                            onChange={(e) => { setCalories(e.target.value) }}
                        />
                    </label>

                    <label>
                        Servings:
                        <input
                            type="number"
                            name="servings"
                            placeholder="3"
                            min={1}
                            max={10}
                            value={servings}
                            onChange={(e) => { setServings(e.target.value) }}
                        />
                    </label>

                    <p>
                        <button>Add</button>
                    </p>
                </form>
             </div>
         </section>
    )
}

