'use client';
import { PropsProduct } from '../../app/products/page';


export default function AddToCartButton({ product }: { product: PropsProduct }) {
  const handleAdd = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((item:PropsProduct) => item.id === product.id);

    if (existing) {
      existing.quantity = (existing.quantity ?? 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produto adicionado ao carrinho!');
  };

  return (
    <div className='flex items-center justify-end h-full'>
    <button
    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    onClick={handleAdd}>
      Adicionar ao Carrinho
    </button>
    </div>
  );
}
