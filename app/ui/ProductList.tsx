'use client'

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product, ServiceType } from "../lib/definitions";

const ProductList = ({ products, servicetypes }: { products: Product[], servicetypes: ServiceType[] }) => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortKey, setSortKey] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const [filterType, setFilterType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        let tempProducts = [...products];

        if (filterType) {
            tempProducts = tempProducts.filter(product => product.servicetypeid === parseInt(filterType));
        }

        if (searchTerm) {
            tempProducts = tempProducts.filter(product =>
                product.nameeng.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (minPrice) {
            tempProducts = tempProducts.filter(product => product.price >= parseFloat(minPrice));
        }
        if (maxPrice) {
            tempProducts = tempProducts.filter(product => product.price <= parseFloat(maxPrice));
        }

        if (sortKey) {
            tempProducts.sort((a, b) => {
                if (sortKey === 'price') {
                    return sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
                } else if (sortKey === 'name') {
                    return sortDirection === 'asc'
                        ? a.nameeng.localeCompare(b.nameeng)
                        : b.nameeng.localeCompare(a.nameeng);
                }
                return 0;
            });
        }

        setFilteredProducts(tempProducts);
    }, [products, searchTerm, sortKey, filterType, sortDirection, maxPrice, minPrice]);

    return (
        <div className="container mx-auto p-4">
            <div className="flex mb-4 justify-center">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded w-full max-w-xs text-gray-900"
                />
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="border p-2 rounded ml-4 text-gray-900"
                >
                    <option key="0" value="" className="text-gray-900">Select a service type</option>
                    {
                        servicetypes.map((type) =>
                        (
                            <option key={type.id} value={type.id} className="text-gray-900"> {type.nameeng} </option>
                        )
                        )
                    }
                </select>
                <select
                    value={sortKey}
                    onChange={(e) => setSortKey(e.target.value)}
                    className="border p-2 rounded ml-4  text-gray-900"
                >
                    <option value="">Sort By</option>
                    <option value="price">Price</option>
                    <option value="name">Name</option>
                </select>
                <select
                    value={sortDirection}
                    onChange={(e) => setSortDirection(e.target.value)}
                    className="border p-2 rounded ml-4 text-gray-900 mb-4 md:mb-0"
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="border p-2 rounded w-full max-w-xs mb-4 md:mb-0 ml-4 text-gray-900"
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="border p-2 rounded w-full max-w-xs mb-4 md:mb-0 ml-4 text-gray-900"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} image={product.imageurl} name={product.nameeng} price={product.price} link={`/products/${product.id}`} available={product.available} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;