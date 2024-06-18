import CategoryForm from '../ui/AddCategoryForm'
import NavBar from '../ui/NavBar'

export default function LoginPage({ searchParams }: { searchParams?: { lang?: string } }) {
    const lang = searchParams?.lang || 'en';

    return (
        <>
            <NavBar lang={lang}></NavBar>
            <div className="flex h-screen items-center justify-center">
                <CategoryForm lang={lang}></CategoryForm>
            </div>
        </>
    )
};