import { auth, signOut } from "@/auth";
import Link from "next/link";
import ProfileCard from "./ProfileCard";
import { Button } from "./Button";

async function NavBar() {
    const session = await auth()

    return (<nav className="bg-white flex items-center justify-between px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="flex space-x-4">
            <Link href="/products">
                <Button className="px-4 py-2 font-extrabold">Products</Button>
            </Link>

            <Link href="/addproduct">
                <Button className="px-4 py-2 font-extrabold">Add Product</Button>
            </Link>

            <Link href="/addcategory">
                <Button className="px-4 py-2 font-extrabold">Add Category</Button>
            </Link>

            <Link href="/contactme">
                <Button className="px-4 py-2 font-extrabold">Contact Me</Button>
            </Link>

            <form action={async () => {
                'use server';
                await signOut();
            }}>
                <Button className="px-4 py-2 font-extrabold" type="submit">Sign out</Button>
            </form>
        </div>

        <Link href="/profile">
            <ProfileCard image={session?.user?.image!} name={session?.user?.email!}></ProfileCard>
        </Link>

    </nav>)
}

export default NavBar;