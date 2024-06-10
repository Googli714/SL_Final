'use server'

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { useRouter, redirect } from 'next/navigation';
import { auth, signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { GetAllCategories, GetUserByEmail } from './data';
import bcrypt from "bcrypt"


export async function signUp(
  prevState: string | undefined,
  formData: FormData,
) {
  const email = formData.get("email")?.toString()!;
  const password = formData.get("password")?.toString()!;
  const imageurl = formData.get("imageurl")?.toString()!;

  if (await GetUserByEmail(email) != null) {
    return 'A user already has this username.';
  }

  const passwordHash = await bcrypt.hash(password, 10);

  try {
    await sql`
              INSERT INTO users (email, password, imageurl)
              VALUES (${email}, ${passwordHash}, ${imageurl})
            `;
  } catch (error) {
    console.log(error);
    return 'Database Error: Failed to Create Invoice.';
  }

  redirect("/login");
}

export async function logIn(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  }
  catch (error) {
    console.log(error)
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }

  //redirect("")
}

export async function logOut(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signOut();
    return "Logged out"
  }
  catch (error) {
    console.log(error)
    throw error;
  }

  //redirect("")
}

export async function addProduct(
  prevState: string | undefined,
  formData: FormData,
) {
  const nameEng = formData.get("nameEng")?.toString();
  const nameGeo = formData.get("nameGeo")?.toString();
  const descriptionEng = formData.get("descriptionEng")?.toString();
  const descriptionGeo = formData.get("descriptionGeo")?.toString();
  const price = parseInt(formData.get("price")?.toString()!);
  const imageUrl = formData.get("imageUrl")?.toString();
  const serviceType = parseInt(formData.get("serviceType")?.toString()!);

  const categories = await GetAllCategories();

  if (!categories.map((a) => a.id).includes(serviceType)) {
    console.log("pizdeeec")
    return "That service type doesnt exist"
  }

  try {
    await sql`
                INSERT INTO products (nameeng, namegeo, descriptioneng, descriptiongeo, price, imageurl, servicetypeid)
                VALUES (${nameEng}, ${nameGeo}, ${descriptionEng}, ${descriptionGeo}, ${price}, ${imageUrl}, ${serviceType})
              `;
  } catch (error) {
    console.log(error);
    return 'Database Error: Failed to Create Invoice.';
  }

  revalidatePath("/products")
  redirect("/products")
}

export async function addCategory(
  prevState: string | undefined,
  formData: FormData,
) {
  const nameEng = formData.get("nameEng")?.toString();
  const nameGeo = formData.get("nameGeo")?.toString();

  console.log(nameEng);

  try {
    await sql`
                INSERT INTO categories (nameeng, namegeo)
                VALUES (${nameEng}, ${nameGeo})
              `;
  } catch (error) {
    console.log(error);
    return 'Database Error: Failed to Create Invoice.';
  }

  redirect("/products")
}

export async function addContactMe(
  prevState: string | undefined,
  formData: FormData,
) {

  const session = await auth();
  const user = await GetUserByEmail(session?.user?.email!);

  const userid = user?.id
  const message = formData.get("message")?.toString();

  console.log(user);

  try {
    await sql`
                INSERT INTO contactmes (userid, message)
                VALUES (${userid}, ${message})
              `;
  } catch (error) {
    console.log(error);
    return 'Database Error: Failed to Create Invoice.';
  }

  redirect("/products")
}