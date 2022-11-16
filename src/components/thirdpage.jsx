import React from "react";
import metaverseImg from "../image/Frame.png";

function Thirdsection(){
    return(
        <div className="thirdpage-container">
            <div className="thirdpage-header">
                <div className="thirdpage-left">
                    <h1>Metabnb NFTs</h1>
                    <p>
                        Discover our NFT gift cards collection. Loyal <br />
                        customers gets amazing gift cards which are <br />
                        traded as NFTs. These NFTs gives our customer <br />
                        access to loads of our exclusive services.
                    </p>
                    <button>Learn more</button>
                </div>
            
                <div className="thirdpage-right">
                    <img src={metaverseImg} alt="frame"/>
                </div>
            </div>
        </div>
    )
}

export default Thirdsection;