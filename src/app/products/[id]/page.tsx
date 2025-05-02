import { notFound } from 'next/navigation';
import { PropsProduct } from '../page';
import AddToCartButton from '@/components/AddToCart/AddCart';



export default async function ProductPage({ params }: { params: { id: string } }) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

    if (!res.ok) return notFound();

    const product: PropsProduct = await res.json();

    return (
        <div className="bg-White">

            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 
                            sm:py-24 lg:max-w-7xl lg:px-8 bg-gray-100">
                <h1 className="flex justify-center mb-10
                 text-4xl font-semibold tracking-tight 
                 text-pretty text-gray-900 sm:text-5xl ">{product.title}</h1>
                <div className="flex items-start gap-4">
                    <img src={product.image} alt={product.title}
                        className="w-[400px] hover:scale-110 duration-500" />
                        <div>
                        <p className="max-w-[600px]"> {product.description}</p>
                        <p className="text-4xl font-bold text-black-600 mb-2 mt-5">Preço: ${product.price}</p>
                        </div>
                </div>
                <AddToCartButton product={product} />
                

            </div>
        </div>
    );
}
