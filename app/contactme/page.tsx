import ContactMeForm from '../ui/AddContactMe'
import NavBar from '../ui/NavBar'

export default async function LoginPage({ searchParams }: { searchParams?: { lang?: string } }) {
    const lang = searchParams?.lang || 'en';

    return (
        <>
            <NavBar lang={lang}></NavBar>
            <div className="flex h-screen items-center justify-center">
                <ContactMeForm lang={lang}></ContactMeForm>
            </div>
        </>
    )
};