const searchFood = () => {
    const input = document.getElementById('search-field');
    const inputText = input.value;

    //console.log(inputText);
    input.value = '';
    if (inputText == '') {
        // please write somethingto display
    }

    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
        // console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => displaySearchResult(data.meals));
    }
}
const displaySearchResult = (data) => {
    const motherDiv = document.getElementById('search-result');
    motherDiv.innerHTML = '';
    if (data.length == 0) {

        // show no result found
    }

    for (const meal of data) {
        //console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick ="loadMealDetail(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
        </div>
    </div>
        `;
        motherDiv.appendChild(div);
    }
}
const loadMealDetail = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayMealDetail(data.meals[0]));
}
const displayMealDetail = (meal) => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;

    mealDetails.appendChild(div);

}