import { auth, signOut } from "@/auth";
import Link from "next/link";
import ProfileCard from "./ProfileCard";
import { Button } from "./Button";
import LangSwithcer from "./LangSwitcher";

async function NavBar({lang} : {lang: string}) {
    const session = await auth()

    return (<nav className="bg-white flex items-center justify-between px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="flex space-x-4">
            <LangSwithcer></LangSwithcer>

            <Link href={"/products?lang=" + lang}>
                <Button className="px-4 py-2 font-extrabold">{lang == 'en' ? "Products" : "პროდუქტები"}</Button>
            </Link>

            <Link href={"/addproduct?lang=" + lang}>
                <Button className="px-4 py-2 font-extrabold">{lang == 'en' ? "Add Product" : "დაამატე პროდუქტი"}</Button>
            </Link>

            <Link href={"/addcategory?lang=" + lang}>
                <Button className="px-4 py-2 font-extrabold">{lang == 'en' ? "Add Category" : "დაამატე კატეგორია"}</Button>
            </Link>

            <Link href={"/contactme?lang=" + lang}>
                <Button className="px-4 py-2 font-extrabold">{lang == 'en' ? "Contact Me" : "დაგვიკავშირდით"}</Button>
            </Link>

            <form action={async () => {
                'use server';
                await signOut();
            }}>
                <Button className="px-4 py-2 font-extrabold" type="submit">{lang == 'en' ? "Sign out" : "გამოსვლა"}</Button>
            </form>
        </div>

        <Link href={"/profile?lang=" + lang}>
            <ProfileCard image={session?.user?.image!} name={session?.user?.email!}></ProfileCard>
        </Link>

    </nav>)
}

export default NavBar;