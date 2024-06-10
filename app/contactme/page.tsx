import ContactMeForm from '../ui/AddContactMe'
import NavBar from '../ui/NavBar'

export default async function LoginPage() {
    return (
        <>
            <NavBar></NavBar>
            <div className="flex h-screen items-center justify-center">
                <ContactMeForm></ContactMeForm>
            </div>
        </>
    )
};