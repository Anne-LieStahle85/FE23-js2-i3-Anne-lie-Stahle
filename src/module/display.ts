import { Products } from "./fetch.ts"; 

export function displayProducts(products: Products[]): void { 
    const productCardContainer = document.getElementById('productCard'); 
    if (!productCardContainer) return;

    if (products.length === 0) {
        const errorMessage = document.createElement('h3');
        errorMessage.textContent = "No product found, try again";
        errorMessage.classList.add('error-message');
        productCardContainer.appendChild(errorMessage);
        return;
    }

    products.forEach((product: Products) => { 
        const card: HTMLElement = createProductCard(product); 
        productCardContainer.appendChild(card);
    });
}

function createProductCard(product: Products): HTMLElement { 
    const card: HTMLElement = document.createElement('div');
    card.classList.add('product-card');

    if (product.images && product.images.length > 0) {
        const imgContainer: HTMLDivElement = document.createElement('div'); 
        imgContainer.classList.add('imgContainer');

        const image: HTMLImageElement = document.createElement('img'); 
        image.src = product.images[0];
        image.alt = product.title;
        imgContainer.appendChild(image);

        card.appendChild(imgContainer);
    }

    const title: HTMLHeadingElement = document.createElement('h2'); 
    title.textContent = product.title;

    const description: HTMLParagraphElement = document.createElement('p'); 
    description.innerHTML = `<b>Description:</b> ${product.description}`;

    const rating: HTMLParagraphElement = document.createElement('p'); 
    rating.innerHTML = `<b>Rating:</b> ${product.rating}`;

    const stock: HTMLParagraphElement = document.createElement('p');
    stock.innerHTML = `<b>Stock:</b> ${product.stock}`;
    if (product.stock < 10) {
        stock.style.color = 'red';
        stock.innerHTML = `<b>Few in Stock:</b> ${product.stock}`;
    }

    const category: HTMLParagraphElement = document.createElement('p'); 
    category.innerHTML = `<b>Category:</b> ${product.category}`;

    const cartBtn: HTMLButtonElement = document.createElement('button'); 
    cartBtn.textContent = 'Add to Cart +';

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(rating);
    card.appendChild(stock);
    card.appendChild(category);
    card.appendChild(cartBtn);

    return card;
}














// import {Products} from "./fetch.ts"

// export function displayProducts(products: Products[]): void {
//     const productCardContainer = document.getElementById('productCard');
//     if (!productCardContainer) return;

//     products.forEach(product =>{
//         const card = createProductCard(product);
//         productCardContainer.appendChild(card);
//     })
// }

// function createProductCard(product: Products): HTMLElement {
//     const card = document.createElement('div');
//     card.classList.add('product-card');

//     if (product.images && product.images.length > 0){
//         const imgContainer = document.createElement('div');
//         imgContainer.classList.add('imgContainer');

//             const image = document.createElement('img');
//             image.src = product.images[0];
//             image.alt = product.title;
//             imgContainer.appendChild(image);

//         card.appendChild(imgContainer);
//     }

//     const title = document.createElement('h2');
//     title.textContent = product.title;

//     const description = document.createElement('p');
//     description.innerHTML = `<b>Description:</b> ${product.description}`;

//     const rating = document.createElement('p');
//     rating.innerHTML = `<b>Rating:</b> ${product.rating}`;

//     const stock = document.createElement('p');
//     stock.innerHTML = `<b>Stock:</b> ${product.stock}`;
//     if(product.stock < 10){
//         stock.style.color = 'red';
//         stock.innerHTML = `<b>Few in Stock:</b> ${product.stock}`;
//     }

//     const category = document.createElement('p');
//     category.innerHTML = `<b>Category:</b> ${product.category}`;

//     const cartBtn = document.createElement('button');
//     cartBtn.textContent = 'Add to Cart +';
    

//     card.appendChild(title);
//     card.appendChild(description);
//     card.appendChild(rating);
//     card.appendChild(stock);
//     card.appendChild(category);
//     card.appendChild(cartBtn)

//     return card;
// }