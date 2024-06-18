'use client'

import { CheckIcon } from "@heroicons/react/24/solid";
import { useFormState } from "react-dom";
import { addProduct } from "../lib/actions";
import { GetAllCategories } from "../lib/data";
import { ServiceType } from "../lib/definitions";

export default function ProductForm({ serviceTypes, lang }: { serviceTypes: ServiceType[], lang: string }) {
    const [errorMessage, dispatch] = useFormState(addProduct, undefined);

    console.log(serviceTypes);

    return (
        <div className="w-full mx-40 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">{lang == 'en' ? "Add Product" : "დაამატე პროდუქტი"}</h2>
            <form action={dispatch} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">{lang == 'en' ? "Name" : "სახელი"} (English)</label>
                    <input
                        id="nameEng"
                        type="text"
                        name="nameEng"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-900"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">{lang == 'en' ? "Name" : "სახელი"} (Georgian)</label>
                    <input
                        id="nameGeo"
                        type="text"
                        name="nameGeo"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-900"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">{lang == 'en' ? "Description" : "აღწერა"} (English)</label>
                    <textarea
                        id="descriptionEng"
                        name="descriptionEng"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-900"
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">{lang == 'en' ? "Description" : "აღწერა"} (Georgian)</label>
                    <textarea
                        id="descriptionGeo"
                        name="descriptionGeo"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-900"
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">{lang == 'en' ? "Price" : "ფასი"}</label>
                    <input
                        id="price"
                        type="number"
                        name="price"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-900"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">{lang == 'en' ? "Image URL" : "ფოტოს მისამართი"}</label>
                    <input
                        id="imageUrl"
                        type="text"
                        name="imageUrl"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-900"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <label className="block text-gray-700 mb-2 mr-2" htmlFor="available">{lang == 'en' ? "Available" : "წვდომა"}</label>
                    <input
                        type="checkbox"
                        id="available"
                        name="available"
                        className="mr-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">{lang == 'en' ? "Service Type" : "სერვისის ტიპი"}</label>
                    <select id="serviceType" name="serviceType" className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-900" >
                        <option key="0" value="" className="text-gray-900">{lang == 'en' ? "Select Service Type" : "აირჩიეთ სერვისის ტიპი"}</option>
                        {
                            serviceTypes.map((type) =>
                            (
                                <option key={type.id} value={type.id} className="text-gray-900"> {lang == 'en' ? type.nameeng : type.namegeo}</option>
                            )
                            )
                        }
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                    >
                        <CheckIcon className="h-5 w-5 mr-2" />
                        {lang == 'en' ? "Add Product" : "დაამატე პროდუქტი"}
                    </button>
                </div>
            </form>
        </div>
    );
};