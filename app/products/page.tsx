import { GetAllCategories, GetAllProducts } from "../lib/data";
import NavBar from "../ui/NavBar";
import ProductList from "../ui/ProductList";

export default async function ProductsPage() {
    const products = await GetAllProducts();
    const servicetypes = await GetAllCategories();

    return (<>
        <NavBar></NavBar>
        <ProductList products={products} servicetypes={servicetypes}></ProductList>
    </>)
}