'use server'

import { GetAllCategories, GetProductById } from "@/app/lib/data"
import { Button } from "@/app/ui/Button";
import { DownloadButton } from "@/app/ui/DownloadButton";
import NavBar from "@/app/ui/NavBar";

export default async function Page({ params }: { params: { slug: number } }) {
    const product = await GetProductById(params.slug);
    const servicetypes = await GetAllCategories();

    return (
        <>
            <NavBar></NavBar>
            <div className="flex items-center justify-center flex-wrap">
                <div className="flex flex-col items-center">
                    <div className="mx-auto p-6">
                        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                            <img className="w-full h-96 object-cover" src={product.imageurl} alt={product.nameeng} />
                            <div className="p-6">
                                <h1 className="text-3xl font-bold mb-4 text-gray-900">{product.nameeng}</h1>
                                <h2 className="text-xl text-gray-500 mb-4">{product.namegeo}</h2>
                                <p className="text-gray-700 mb-4">{product.descriptioneng}</p>
                                <p className="text-gray-700 mb-4">{product.descriptiongeo}</p>
                                <p className="text-xl font-semibold text-gray-800 mb-4">${product.price}</p>
                                <div className="text-gray-600">
                                    <span className="font-bold">Service Type:</span> {servicetypes.find((s) => s.id == product.servicetypeid)?.nameeng} | {servicetypes.find((s) => s.id == product.servicetypeid)?.namegeo}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div id="productRoot" className="max-w-3xl bg-white shadow-md rounded-lg overflow-hidden p-6 mb-4">
                        <p className="text-gray-900">{`ID: ${product.id}`}</p>
                        <p className="text-gray-900">{`Name ENG: ${product.nameeng}`}</p>
                        <p className="text-gray-900">{`Name GEO: ${product.namegeo}`}</p>
                        <p className="text-gray-900">{`Description ENG: ${product.descriptioneng}`}</p>
                        <p className="text-gray-900">{`Description GEO: ${product.descriptiongeo}`}</p>
                        <p className="text-gray-900">{`Price$: ${product.price}\nImage URL: ${product.imageurl}`}</p>
                        <p className="text-gray-900">{`Service Type ID: ${product.servicetypeid}`}</p>
                        <p className="text-gray-900">{`Service Type ENG: ${servicetypes.find(s => s.id == product.servicetypeid)?.nameeng}`}</p>
                        <p className="text-gray-900">{`Service Type GEO: ${servicetypes.find(s => s.id == product.servicetypeid)?.namegeo}`}</p>
                    </div>
                    <DownloadButton></DownloadButton>
                </div>

            </div>
        </>
    )
}