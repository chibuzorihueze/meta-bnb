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
                    <div className="box1">
                        <img src={require ("../image/image 4.png")} alt="metaverse"/>
                    </div>
                    <div className="box2">
                        <img src={require ("../image/image 6.png")} alt="metaverse"/>
                    </div>
                </div>
                <div className="wrap-2">
                    <div className="box3">
                    <img src={require ("../image/image 3.png")} alt="metaverse"/>
                    </div>
                    <div className="box4">
                    <img src={require ("../image/image 5.png")} alt="metaverse"/>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Main;