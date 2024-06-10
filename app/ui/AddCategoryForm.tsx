'use client';

import { CheckIcon } from "@heroicons/react/24/solid";
import { useFormState } from "react-dom";
import { addCategory } from "../lib/actions";

export default function CategoryForm () {

    const [errorMessage, dispatch] = useFormState(addCategory, undefined);

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Create Category</h2>
            <form action={dispatch} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name (English)</label>
                    <input
                        id="nameEng"
                        type="text"
                        name="nameEng"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-900"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name (Georgian)</label>
                    <input
                        id="nameGeo"
                        type="text"
                        name="nameGeo"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-900"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                    >
                        <CheckIcon className="h-5 w-5 mr-2" />
                        Create Category
                    </button>
                </div>
            </form>
        </div>
    );
};