import CategoryForm from '../ui/AddCategoryForm'
import NavBar from '../ui/NavBar'

export default function LoginPage() {
    return (
        <>
            <NavBar></NavBar>
            <div className="flex h-screen items-center justify-center">
                <CategoryForm></CategoryForm>
            </div>
        </>
    )
};