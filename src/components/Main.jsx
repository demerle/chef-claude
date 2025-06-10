import React from "react"
import Joke from "./Joke"
import Count from "./Count.jsx"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import {getRecipeFromChefClaude} from "../ai.js";
export default function Main() {

    const [ingredients, setIngredients] = React.useState(["Chicken", "Caesar Dressing", "Tortilla", "Romaine Lettuce"])


    const [recipe, setRecipe] = React.useState("")

    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if ((recipeSection !== null) && (recipe !== "")){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }

    }, [recipe])

    function addIngredient(formData){
        const newItem = formData.get("ingredient")
        if (newItem !== "") {
            setIngredients(prevResult => {
                return [...prevResult, newItem]
            })
        }
    }


    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }



    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 ? <IngredientsList
                ref = {recipeSection}
                ingredients = {ingredients}
                getRecipe={getRecipe} />
                : null}


            {recipe && <ClaudeRecipe recipe={recipe}/>}

        </main>
    )



    /*

    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }


    return (
        <main className="container">
            <div className="counter">
                <button
                    className="minus"
                    onClick={subtract}
                    aria-label="Decrease count"
                >-</button>

                <Count count={count}/>

                <button
                    className="plus"
                    onClick={add}
                    aria-label="Increase count"
                >+</button>
            </div>
        </main>
    )
    */

}