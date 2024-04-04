window.addEventListener('DOMContentLoaded', getapi)

window.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none"
})

function getapi (){
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> data.forEach(element => createproducts(element)))

}

function createproducts(product){
    const cardproduct = document.createElement('button')
    cardproduct.classList.add('card-products')

    const containercard = document.createElement('div')
    containercard.classList.add('cards')

    const imgcard = document.createElement('img')
    imgcard.src = product.image
    imgcard.alt = product.title

    const titlecard = document.createElement('h2')
    titlecard.textContent = product.title

    cardproduct.appendChild(containercard)
    containercard.appendChild(imgcard)
    containercard.appendChild(titlecard)

    document.querySelector('.card-products').appendChild(cardproduct)

    containercard.addEventListener("click", () => {
        const modal = document.getElementById("modal");
        modal.querySelector("img").src = product.image;
        modal.querySelector("h2").textContent = product.title;
        modal.querySelector("p").textContent = product.description;
        modal.querySelector("h3").textContent = `Categoría: ${product.category}`;
        modal.querySelector("h4").textContent = `Precio: ${product.price}`;
        modal.style.display = "block";
      });
    
      const closeModalButton = document.getElementById("close-modal");
    
      closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
      });
}