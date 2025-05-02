import { faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {

    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-2xl font-bold">Loja A Loja</div>
            <div className="flex items-center">
            <nav className="size-12 w-25 mx-2 my-2 p-2 bg-gray-800 rounded-md  flex gap-4">
                <Link href="/products" className="hover:text-gray-400 size-10"> <FontAwesomeIcon icon={faHouse} /></Link>
                <Link href="/cart" className="hover:text-gray-400 size-10"><FontAwesomeIcon icon={faCartShopping} /></Link>
            </nav>
            </div>
        </header>
    )
}