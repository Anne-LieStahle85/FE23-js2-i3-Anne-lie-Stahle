import { fetchProducts, searchProducts } from "./module/fetch.ts";
import { displayProducts } from "./module/display.ts";

async function loadProducts(){
    const products = await fetchProducts();
    displayProducts(products);
}

async function searchAndUpdate(event: Event){
    event.preventDefault();

    const searchTerm: string = (document.getElementById('searchProduct') as HTMLInputElement).value;
    const searchResults = await searchProducts(searchTerm);

    const productsContainer: HTMLElement = document.getElementById('productCard')!;
    productsContainer.innerHTML = '';
    displayProducts(searchResults);

    const searchInput: HTMLInputElement | null = document.getElementById('searchProduct') as HTMLInputElement;
    if(searchInput) {
        searchInput.value = '';
    }
}

document.getElementById('searchForm')?.addEventListener('submit', searchAndUpdate);

document.querySelector('h1')?.addEventListener('click', async () =>{
    location.reload();
})

loadProducts();


