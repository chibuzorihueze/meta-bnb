import React from "react";

function Main(){
    return(
        <div className="main">

            <div className="right-section">
                <div className="first-text">
                    <h1>Rent a Place away from</h1>
                </div>
                <div className="second-text">
                    <h1>Home in the Metaverse</h1>
                </div>
                <div>
                    <p> We provide you access to luxury and afordable houses <br />
                        in the metaverse, get a chance to turn your <br />
                        your imagination to reality at your comfort zone
                    </p>
                </div>

                <div>
                    <input type="text" placeholder="search for location"/> <button>search</button>
                </div>
            </div>
            
            <div className="left-section">
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