document.addEventListener("DOMContentLoaded", ()=> console.log("CONNECTED!!!"))

function showOneCat(cat){
    let card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <div class="card-header card-image">
    <img src="${cat.img}"/>
    </div>
    <div class="cat-card-body">
    <h2>${cat.name}</h2>
    <div> Breed: ${cat.breed}</div>
    <div> Age: ${cat.age}</div>
    <div> Housetrained: ${cat.housetrained}</div>
    <div> Sex: ${cat.sex}</div>
    <div> Temperament: ${cat.temperment}</div>
    <div> About Me: ${cat.description}</div>
    <div class="card-footer">
    <button class="btn"> Adopt Me </button>
    <button class="btn btn-outline"> Contact Seller</button>
    <button class="like-btn"> 😻 </button>
    </div>
    `
    document.querySelector('.cat-cards-grid').appendChild(card)
}

function loadCats() {
    fetch('http://localhost:3000/catData')
    .then(res=> res.json())
    .then(catData => catData.forEach(cat=> showOneCat(cat)))
}

loadCats();

