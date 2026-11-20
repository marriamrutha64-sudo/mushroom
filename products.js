// Search Products

const search = document.getElementById("searchBox");
const cards = document.querySelectorAll(".product-card");

search.addEventListener("keyup", function(){

let value = search.value.toLowerCase();

cards.forEach(card=>{

let text = card.innerText.toLowerCase();

card.style.display = text.includes(value) ? "block" : "none";

});

});

// Filter Buttons

const buttons = document.querySelectorAll(".filter-buttons button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter = button.dataset.filter;

cards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}
else{

card.style.display = card.classList.contains(filter) ? "block":"none";

}

});

});

});

// Scroll Animation

cards.forEach(card=>{

card.classList.add("fade");

});

function reveal(){

cards.forEach(card=>{

let top = card.getBoundingClientRect().top;

if(top < window.innerHeight-80){

card.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

// Buy Button

document.querySelectorAll(".product-card button").forEach(button=>{

button.addEventListener("click",()=>{

alert("Thank you for choosing Amrutha Mushroom World!");

});

});