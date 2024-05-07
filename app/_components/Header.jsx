'use client'

import Image from "next/image";
import Link from "next/link";
import  { useContext , useState } from "react";
import { CartContext } from "../_context/CartContext";
import { ShoppingCart } from "lucide-react";
import Cart from "./Cart";

function Header() {
  const { cart, setCart } = useContext(CartContext)
  const [openCart, setOpenCart] = useState(false)
  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link href="/">
          <Image width={250} height={110} src="/images/logo1.png" alt="#" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  {" "}
                  <span className="nav-label">
                    коллекции <span className="caret" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                  <Link className="nav-link" href="/products">Шампунь</Link>
                  </li>
                  <li>
                  <Link className="nav-link" href="/products">кондиционер</Link>
                  </li>
                  <li>
                  <Link className="nav-link" href="/products">сирвитка витамин для лица </Link>
                  </li>
                  <li>
                  <Link className="nav-link" href="/products">крем для лица</Link>
                  </li>
                  <li>
                  <Link className="nav-link" href="/products">крем для глаз</Link>
                  </li>
                  <li>
                  <Link className="nav-link" href="/products">парфюм</Link>
                  </li>
                  <li>
                  <Link className="nav-link" href="/products">сирвитка для роста волос</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/products">
                  продукты
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  услуги
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  контакты
                </Link>
              </li>
              <li className="tw-ml-2 ">
								<h2 className='tw-flex tw-gap-1 tw-cursor-pointer '>
									<ShoppingCart className="tw-size-8" onClick={() => setOpenCart(!openCart)} />
									({cart?.length})</h2>
								{openCart && <Cart />}
							</li>
            </ul>
          </div>
        </nav>
      </div>
      
    </header>
  );
}

export default Header;
