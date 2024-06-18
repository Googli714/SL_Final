import { GetAllCategories } from '../lib/data'
import ProductForm from '../ui/AddProductForm'
import NavBar from '../ui/NavBar'

export default async function LoginPage({ searchParams }: { searchParams?: { lang?: string } }) {
    const serviceTypes = await GetAllCategories();

    const lang = searchParams?.lang || 'en';

    return (
        <>
            <NavBar lang={lang}></NavBar>
            <div className="flex h-screen items-center justify-center">
                <ProductForm serviceTypes={serviceTypes} lang={lang}></ProductForm>
            </div>
        </>
    )
};