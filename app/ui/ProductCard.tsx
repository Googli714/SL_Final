interface IProductCard {
    image: string;
    name: string;
    price: number;
    link: string;
    available: boolean;
    lang: string;
}

function ProductCard({ image, name, price, link, available, lang }: IProductCard) {
    console.log(lang)

    return (
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <a href={link}>
                <img className="w-full h-48 object-cover transition-transform duration-200 hover:scale-110" src={image} alt={name} />
            </a>
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                <p className="text-gray-800 font-semibold text-gray-900">${price}</p>

                {lang == 'en' ? <p className="text-gray-800 font-semibold text-gray-900">Available: {available ? "Yes" : "No"}</p>
                    : <p className="text-gray-800 font-semibold text-gray-900">მიწვდომადი: {available ? "კი" : "არა"}</p>}
            </div>
        </div>
    );
}

export default ProductCard;
