class recipeItem extends HTMLElement {
    set recipe(recipe){
        this._recipe = recipe;
        this.render();
    }

    render(){
        this.innerHTML = `
            <article class="card">
                <img src="${this._recipe.strMealThumb}">
                <h3>${this._recipe.strMeal}</h3>
            </article>
        `;
    }
}
customElements.define("recipe-item", recipeItem);