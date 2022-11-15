import React from "react";

function Main(){
    return(
        <div className="main">

            <div className="left-section">
                <div className="first-text">
                    <h1 className="top-text">Rent a <span>Place</span> away from</h1>
                </div>
                <div className="second-text">
                    <h1 className="top-text"> <span>Home</span> in the <span>Metaverse</span></h1>
                </div>
                <div className="text-container">
                    <p> We provide you access to luxury and afordable houses <br />
                        in the metaverse, get a chance to turn your <br />
                        imagination to reality at your comfort zone
                    </p>
                </div>

                <div className="search-button" >
                    <input type="text" placeholder="search for location"/> <button>search</button>
                </div>
            </div>
            
            <div className="right-section">
                <div className="wrap-1">
                    <div className="box1">box 1</div>
                    <div className="box2">box 2</div>
                </div>
                <div className="wrap-2">
                    <div className="box3">box 3</div>
                    <div className="box4">box 4</div>
                </div>
            </div>
        </div>    
    )
}

export default Main;