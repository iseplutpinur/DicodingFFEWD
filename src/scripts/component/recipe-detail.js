class recipeDetail extends HTMLElement {
    set recipe(recipe){
        this._recipe = recipe[0];
        this.render();
    }

    render(){
        let tbody = "";
        for(let i = 1; i <= 20; i++){
            if (this._recipe[`strIngredient${i}`] != "" && this._recipe[`strIngredient${i}`] != null && this._recipe[`strIngredient${i}`] != undefined) {
                const ingredient = this._recipe[`strIngredient${i}`];
                const measure = this._recipe[`strMeasure${i}`];
                tbody += `
                    <tr>
                        <td>${ingredient}</td>
                        <td>${measure}</td>
                    </tr>
                `;
            }
        }
        this.innerHTML = `
            <header><button>Back</button><h2>${this._recipe.strMeal}</h2></header>
            <div class="clear"></div>
            <section>
                <figure>
                    <img src="${this._recipe.strMealThumb}">
                    <figcaption>
                        <h3>Instructions</h3><p>${this._recipe.strInstructions}</p>
                    </figcaption>
                </figure>
                <div class="clear"></div>
            </section>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tbody}
                    </tbody>
                </table>
            </section>
            `;
    }
}
customElements.define("recipe-detail", recipeDetail);