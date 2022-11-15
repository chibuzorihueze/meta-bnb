import React from "react";

function Nav(){
    return(
        <div className="nav-container">
            <div className="logo-container">
                <div className="logo-text">Metabnb</div>
            </div>
            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>Place to stay</li>
                    <li>NFTs</li>
                    <li>Community</li>
                </ul>
            </div>
            <div className="nav-button">
                <button>Connect wallet</button>
            </div>
        </div>
    )
}

export default Nav;