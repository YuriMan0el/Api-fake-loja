
'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export interface PropsProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
}

export default function Home() {
    const [products, setProducts] = useState<PropsProduct[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((data: PropsProduct[]) => setProducts(data));
    }, []);
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-gray-100">
                <h1 className="flex justify-center mb-10 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl ">Produtos Disponiveis</h1>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="group block"
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                        />
                        <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                      </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}



