import React, { useState } from "react";


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <div className="nav-bar">
            <div className="minimalist">
                <h1 className="logo">Minimalist</h1>
            </div>

            <div className={`drop-downs ${isMenuOpen ? "open" : ""}`}>
                <span>Shop</span>
                <span>Best Sellers</span>
                <span>Skin & Body Care</span>
                <span>Baby Care</span>
                <span>Hair Care</span>
                <span>Build Your Routine</span>
                <span>Track Order</span>
            </div>

            <div className="nav-options">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10.5" cy="10.5" r="7.5" stroke="black" strokeWidth="2" style={{ fill: "none" }}></circle>
                    <path d="M17.1213 15.2929L16.4142 14.5858L15 16L15.7071 16.7071L17.1213 15.2929ZM19.2426 20.2426C19.6331 20.6332 20.2663 20.6332 20.6568 20.2426C21.0473 19.8521 21.0473 19.219 20.6568 18.8284L19.2426 20.2426ZM15.7071 16.7071L19.2426 20.2426L20.6568 18.8284L17.1213 15.2929L15.7071 16.7071Z" fill="black" style={{ stroke: "none" }}></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                    <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                    <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
                <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
                <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
            </div>
        </div>
    );
};
