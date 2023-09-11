const fruitForm = document.querySelector("#inputSection form")

const fruitList = document.querySelector("#fruitSection ul" )

const addFruit = (fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    
    // Add a click event listener to remove the fruit item when clicked
    li.addEventListener("click", () => {
        fruitList.removeChild(li);
    });
    
    fruitList.appendChild(li); // basically creates html element and adds the fruit we added and appends to our fruit list
}



fruitForm.addEventListener("submit", e => {
    e.preventDefault()// by default it refreshes page when u submit form, so this command stops it.
    addFruit(e.target.fruitInput.value) //This should allow us to add the fruit we submit to the html i.e the list
    e.target.fruitInput.value = ""
}) 






