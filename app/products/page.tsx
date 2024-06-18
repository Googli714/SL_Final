import { GetAllCategories, GetAllProducts } from "../lib/data";
import NavBar from "../ui/NavBar";
import ProductList from "../ui/ProductList";

export default async function ProductsPage({ searchParams }: { searchParams?: { lang?: string } }) {
    const products = await GetAllProducts();
    const servicetypes = await GetAllCategories();

    const lang = searchParams?.lang || 'en';

    return (<>
        <NavBar lang={lang}></NavBar>
        <ProductList products={products} servicetypes={servicetypes} lang={lang}></ProductList>
    </>)
}