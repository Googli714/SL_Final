import { sql } from '@vercel/postgres';
import {
    Product,
    ServiceType,
    User
} from './definitions';

export async function GetUserByEmail(email: string) {
    try {
        const data = await sql<User>`SELECT * FROM users WHERE email = ${email}`;

        if (data.rows.length == 0) {
            return null;
        }

        return data.rows[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch user data.');
    }
}

export async function GetAllProducts() {
    try {
        const data = await sql<Product>`SELECT * FROM products`;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch products data.');
    }
}

export async function GetProductById(id: number) {
    try {
        const data = await sql<Product>`SELECT * FROM products WHERE id=${id}`;

        return data.rows[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch products data.');
    }
}

export async function GetAllCategories() {
    try {
        const data = await sql<ServiceType>`SELECT * FROM categories`;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch products data.');
    }
}