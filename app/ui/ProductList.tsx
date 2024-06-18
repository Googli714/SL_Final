'use client'

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product, ServiceType } from "../lib/definitions";

const ProductList = ({ products, servicetypes, lang }: { products: Product[], servicetypes: ServiceType[], lang: string }) => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortKey, setSortKey] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const [filterType, setFilterType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [filterAvailable, setFilterAvailable] = useState('');

    useEffect(() => {
        let tempProducts = [...products];

        if (filterType) {
            tempProducts = tempProducts.filter(product => product.servicetypeid === parseInt(filterType));
        }

        if (searchTerm) {
            if (lang == 'en') {
                tempProducts = tempProducts.filter(product =>
                    product.nameeng.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }
            else if (lang == 'ge') {
                tempProducts = tempProducts.filter(product =>
                    product.namegeo.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }


        }

        if (minPrice) {
            tempProducts = tempProducts.filter(product => product.price >= parseFloat(minPrice));
        }
        if (maxPrice) {
            tempProducts = tempProducts.filter(product => product.price <= parseFloat(maxPrice));
        }

        if (filterAvailable) {
            tempProducts = tempProducts.filter(product => product.available === (filterAvailable === 'available'));
        }

        if (sortKey) {
            tempProducts.sort((a, b) => {
                if (sortKey === 'price') {
                    return sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
                }
                else if (lang == 'en') {
                    if (sortKey === 'name') {
                        return sortDirection === 'asc'
                            ? a.nameeng.localeCompare(b.nameeng)
                            : b.nameeng.localeCompare(a.nameeng);
                    }
                }
                else if (lang == 'ge') {
                    if (sortKey === 'name') {
                        return sortDirection === 'asc'
                            ? a.namegeo.localeCompare(b.namegeo)
                            : b.namegeo.localeCompare(a.namegeo);
                    }

                }
                return 0;
            }
            );
        }
        setFilteredProducts(tempProducts);
    }, [products, searchTerm, sortKey, filterType, sortDirection, maxPrice, minPrice, filterAvailable]
    );

    return (
        <div className="container mx-auto p-4">
            <div className="flex mb-4 justify-center">
                <input
                    type="text"
                    placeholder={lang == 'en' ? "Search by name" : "სახელით ძებნა"}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded w-full max-w-xs text-gray-900"
                />
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="border p-2 rounded ml-4 text-gray-900"
                >
                    <option key="0" value="" className="text-gray-900">{lang == 'en' ? "Select a service type" : "აირჩიეთ სერვისის ტიპი"}</option>
                    {
                        servicetypes.map((type) =>
                        (
                            <option key={type.id} value={type.id} className="text-gray-900"> {lang == 'en' ? type.nameeng : type.namegeo}</option>
                        )
                        )
                    }
                </select>
                <select
                    value={sortKey}
                    onChange={(e) => setSortKey(e.target.value)}
                    className="border p-2 rounded ml-4  text-gray-900"
                >
                    <option value="">{lang == 'en' ? "Sort By" : "დალაგება"}</option>
                    <option value="price">{lang == 'en' ? "Price" : "ფასი"}</option>
                    <option value="name">{lang == 'en' ? "Name" : "სახელი"}</option>
                </select>
                <select
                    value={sortDirection}
                    onChange={(e) => setSortDirection(e.target.value)}
                    className="border p-2 rounded ml-4 text-gray-900 mb-4 md:mb-0"
                >
                    <option value="asc">{lang == 'en' ? "Ascending" : "ზრდადობით"}</option>
                    <option value="desc">{lang == 'en' ? "Descending" : "კლდებადობით"}</option>
                </select>
                <input
                    type="number"
                    placeholder={lang == 'en' ? "Min Price" : "მინიმალური ფასი"}
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="border p-2 rounded w-40 max-w-xs mb-4 md:mb-0 ml-4 text-gray-900"
                />
                <input
                    type="number"
                    placeholder={lang == 'en' ? "Max Price" : "მაქსიმალური ფასი"}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="border p-2 rounded w-40 max-w-xs mb-4 md:mb-0 ml-4 text-gray-900"
                />
                <select
                    value={filterAvailable}
                    onChange={(e) => setFilterAvailable(e.target.value)}
                    className="border p-2 rounded w-full max-w-xs mb-4 md:mb-0 ml-4 text-gray-900"
                >
                    <option value="">{lang == 'en' ? "Filter by Availability" : "ფილტვრა მხედველობით"}</option>
                    <option value="available">{lang == 'en' ? "Available" : "მიწვდომადი"}</option>
                    <option value="notavailable">{lang == 'en' ? "Not Available" : "მიუწვდომელი"}</option>
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} image={product.imageurl} name={lang == 'en' ? product.nameeng : product.namegeo} price={product.price} link={`/products/${product.id}?lang=` + lang} available={product.available} lang={lang} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;