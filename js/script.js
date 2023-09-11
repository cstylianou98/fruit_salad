const fruitForm = document.querySelector("#inputSection form")

const fruitList = document.querySelector("#fruitSection ul" )

const fruitNutrition = document.querySelector("#nutritionSection p")

const fetchFruitData = fruit => {
    fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`) //sends request to url. Once complete and data is back. Fetches a promise from this
    .then(resp => resp.json()) // response object, converted to json format with resp.json()
    .then(data => {
        console.log(data)
        addFruit(data)
    }) // 
    .catch(e => console.error(e)) // if there is an error, program will throw an error and we will catch it here and print it to our console.
}

let totalCal = 0;
let totalCarbs = 0;
let totalFat = 0;
let totalProtein = 0;
let totalSugar = 0;

const addFruit = (fruit) => {

    const li = document.createElement("li");
    li.textContent = fruit.name; // targets the name using .name
    
    // Add a click event listener to remove the fruit item when clicked
    li.addEventListener("click", () => {
        fruitList.removeChild(li);
    });
    
    fruitList.appendChild(li); // basically creates html element and adds the fruit we added and appends to our fruit list

    totalCal += fruit.nutritions.calories;
    totalCarbs += fruit.nutritions.carbohydrates;
    totalFat += fruit.nutritions.fat;
    totalProtein += fruit.nutritions.protein;
    totalSugar += fruit.nutritions.sugar;

    totalCal = totalCal.toFixed(0);
    totalCarbs = totalCarbs.toFixed(1);
    totalFat = totalFat.toFixed(2);
    totalProtein = totalProtein.toFixed(2);
    totalSugar = totalSugar.toFixed(1);

    // Create a string with the desired information
    const nutritionInfo = `Calories = ${totalCal}, Fat = ${totalFat}, Carbs = ${totalCarbs}, Protein = ${totalProtein}, Sugar = ${totalSugar}`;
    fruitNutrition.textContent = nutritionInfo;
}



fruitForm.addEventListener("submit", e => {
    e.preventDefault()// by default it refreshes page when u submit form, so this command stops it.
    fetchFruitData(e.target.fruitInput.value) //This should allow us to add the fruit we submit to the html i.e the list
    e.target.fruitInput.value = ""
}) 






