import { GetAllCategories } from '../lib/data'
import ProductForm from '../ui/AddProductForm'
import NavBar from '../ui/NavBar'

export default async function LoginPage() {
    const serviceTypes = await GetAllCategories();

    return (
        <>
            <NavBar></NavBar>
            <div className="flex h-screen items-center justify-center">
                <ProductForm serviceTypes={serviceTypes}></ProductForm>
            </div>
        </>
    )
};