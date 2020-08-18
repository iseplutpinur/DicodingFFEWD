class DataSource {
	static searchByName(keyword) {
		return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
		.then(response => {
			return response.json();
		})
		.then(responseJson => {
           if(responseJson.meals) {
               return Promise.resolve(responseJson.meals);
           } else {
               return Promise.reject(`${keyword} is not found`);
           }
		})
	}

	static getById(id) {
		return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
		.then(response => {
			return response.json();
		})
		.then(responseJson => {
           if(responseJson.meals) {
               return Promise.resolve(responseJson.meals);
           } else {
               return Promise.reject(`${id} is not found`);
           }
		})
	}

	static getCategories(){
		return fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
		.then(response => {
			return response.json();
		})
		.then(responseJson => {
           if(responseJson.categories) {
               return Promise.resolve(responseJson.categories);
           } else {
               return Promise.reject(`Error`);
           }
		})
	}

	static getByCategorie(categorie) {
		return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
		.then(response => {
			return response.json();
		})
		.then(responseJson => {
           if(responseJson.meals) {
               return Promise.resolve(responseJson.meals);
           } else {
               return Promise.reject(`${categorie} is not found`);
           }
		})
	}

}
 
export default DataSource;