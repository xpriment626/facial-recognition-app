import React from "react";
import Tilt from "react-parallax-tilt";
import faceScan from "./faceScan.png";

const Logo = () => (
    <div className="ma4 mt0">
        <Tilt
            className="Tilt br2 shadow-2"
            options={{ max: 55 }}
            style={{ height: 100, width: 100 }}
        >
            <div className="Tilt-inner pa3">
                <img src={faceScan} alt="logo" />
            </div>
        </Tilt>
    </div>
);

export default Logo;
