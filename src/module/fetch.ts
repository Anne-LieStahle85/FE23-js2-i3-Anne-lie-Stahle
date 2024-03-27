
export type Products = {
    title: string,
    description: string,
    rating: number,
    stock: number,
    category: string,
    images: string[],
}

function productList(data: { products: any[] }): Products[] {
    return data.products.map((product: any) => ({
        title: product.title,
        description: product.description,
        rating: product.rating,
        stock: product.stock,
        category: product.category,
        images: product.images,
    }));
}

export async function fetchProducts(): Promise<Products[]> {
    const url: string = 'https://dummyjson.com/products';

    const res: Response = await fetch(url);
    const data: { products: any[] } = await res.json();

    return productList(data);
}

export async function searchProducts(searchTerm: string): Promise<Products[]> {
    const url: string = `https://dummyjson.com/products/search?q=${encodeURIComponent(searchTerm)}`;

    const res: Response = await fetch(url);
    const data: { products: any[] } = await res.json();

    return productList(data);
}



