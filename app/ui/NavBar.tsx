

import { auth, signOut } from "@/auth";
import Link from "next/link";
import ProfileCard from "./ProfileCard";

async function NavBar() {
    const session = await auth()

    return (<nav className="bg-white flex items-center justify-between px-4 py-2">
        <div className="flex space-x-4">
            <Link href="/products">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md font-bold">Products</button>
            </Link>

            <Link href="/addproduct">
                <button className="bg-white text-gray-700 px-4 py-2 rounded-md font-bold">Add Product</button>
            </Link>

            <Link href="/addcategory">
                <button className="bg-white text-gray-700 px-4 py-2 rounded-md font-bold">Add Category</button>
            </Link>

            <Link href="/contactme">
                <button className="bg-white text-gray-700 px-4 py-2 rounded-md font-bold">Contact Me</button>
            </Link>

            <form action={async () => {
                'use server';
                await signOut();
            }}>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-md font-bold" type="submit">Sign out</button>
            </form>
        </div>

        <Link href="/profile">
            <ProfileCard image={session?.user?.image!} name={session?.user?.email!}></ProfileCard>
        </Link>

    </nav>)
}

export default NavBar;