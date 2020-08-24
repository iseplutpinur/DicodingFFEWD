import DataSource from "./data/data-source";
import './component/recipe-item.js';
import './component/recipe-detail.js';

function main() {
	const searchButton = document.querySelector("#searchButton");
	const searchInput = document.querySelector("#searchInput");
	const recipeList = document.querySelector(".recipe-list");
    const recipeDetail = document.querySelector(".recipe-details");

    const visibility = (show = 0) => {
        const views = ['.loading', '.recipe-list', '.recipe-details'];``
        for (let i = 0; i < views.length; i++) {
            if (i == show) document.querySelector(views[i]).removeAttribute("style");
            else document.querySelector(views[i]).setAttribute("style","display: none;");
        }
    }

    const assignCategories = async () => {
        visibility(0);
        try {
           const result = await DataSource.getCategories();
           const categories = result;
           // web costum html categories
           getRecipeByCategorie(categories[Math.floor(Math.random() * (categories.length-1))].strCategory)
        } catch (message) {
            alert(message);
        }
    };

    const getRecipeByCategorie = async (categorie) => {
        visibility(0);
        try {
           const result = await DataSource.getByCategorie(categorie);
            renderListRecipeItem(result);
            visibility(1);
        } catch (message) {
            visibility(1);
            renderError(message);
        }
    };

    const getRecipeByName = async () => {
        visibility(0);
        try {
           const result = await DataSource.searchByName(searchInput.value);
            renderListRecipeItem(result);
            visibility(1);
        } catch (message) {
            visibility(1);
            renderError(message);
        }
    };

    const renderListRecipeItem = result => {
        recipeList.innerHTML = "";
    	result.forEach((element, index) =>{
            const recipeItemElement = document.createElement("recipe-item");
            recipeItemElement.recipe = element;
            recipeList.appendChild(recipeItemElement);
            if ((result.length-1) == index) {
                const clearBoth = document.createElement("div");
                clearBoth.setAttribute("class", "clear");
                recipeList.appendChild(clearBoth);
            }
            recipeItemElement.addEventListener("click", () => {getDetailRecipe(element.idMeal)});
    	});
    }

    const getDetailRecipe = async id => {
        visibility(0);
        try {
           const result = await DataSource.getById(id);
            renderDetailRecipeItem(result);
            visibility(2);
        } catch (message) {
            visibility(1);
            renderError(message);
        }
    }

    const renderDetailRecipeItem = result => {
        recipeDetail.innerHTML = "";
        const recipeDetailElement = document.createElement("recipe-detail");
        const clearBoth = document.createElement("div");
        clearBoth.setAttribute("class", "clear");
        recipeDetailElement.recipe = result;
        recipeDetail.appendChild(recipeDetailElement);
        recipeDetail.appendChild(clearBoth);
        document.querySelector("recipe-detail button").addEventListener("click",() => {visibility(1)});
    }

    const renderError = message => {
        recipeList.innerHTML = `<h1>${message} is not found</h1>`;
    }
    searchButton.addEventListener("click", getRecipeByName);

    const autoLoad = () =>{
        assignCategories();
    }
    autoLoad();
}
export default main;

// https://www.themealdb.com/api.php