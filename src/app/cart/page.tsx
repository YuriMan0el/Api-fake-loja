'use client';
import { useEffect, useState } from "react";
import { PropsProduct } from "../products/page";

export default function Cart() {
  const [cart, setcart] = useState<PropsProduct[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart') || '[]';
    setcart(JSON.parse(stored));
  }, []);

  const updadeCart = (newCart: PropsProduct[]) => {
    setcart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  const increase = (id: number) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updadeCart(updated);
  }

  const decrease = (id: number) => {
    const updated = cart.map(item =>
      item.id === id ? {
        ...item,
        quantity: item.quantity > 1 ? item.quantity - 1 : 1
      } : item
    );
    updadeCart(updated);
  }

  const remove = (id: number) => {
    const updated = cart.filter(item => item.id !== id);
    updadeCart(updated);
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mt-8">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Carrinho de Compras</h1>

        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div className="space-y-6">
            {cart.map(product => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row bg-gray-100 rounded-lg p-4 shadow-md"
              >
                <img
                  src={product.image}
                  alt="Imagem do produto"
                  className="w-32 h-32 object-cover rounded-lg mr-4"
                />

                <div className="flex flex-col flex-1">
                  <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                  <p className="text-gray-700 mb-4">{product.description}</p>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-2 mb-2 md:mb-0">
                      <span className="text-gray-600">Quantidade:</span>
                      <button
                        className="bg-gray-300 px-2 py-1 rounded-l"
                        onClick={() => decrease(product.id)}
                      >-</button>
                      <span className="px-2">{product.quantity}</span>
                      <button
                        className="bg-gray-300 px-2 py-1 rounded-r"
                        onClick={() => increase(product.id)}
                      >+</button>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => remove(product.id)}
                        className="text-red-600 hover:underline"
                      >
                        Excluir
                      </button>
                      <span className="text-lg font-bold text-grey-600">
                        R$ {(product.price * product.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <h2 className="text-xl font-bold text-right mt-6">
            Total: R$ {total.toFixed(2)}
          </h2>
        )}
      </div>
    </div>
  );
}
