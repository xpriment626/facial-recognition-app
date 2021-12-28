import React from "react";
import "./image-form.styles.css";

const ImageForm = () => (
    <div>
        <p className="f3">{"Simple Facial Recognition Software"}</p>
        <div className="center">
            <div className=" center form pa4 br1 shadow-5">
                <input className="f4 pa2 w-70 center" type="text" />
                <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-blue">
                    DETECT
                </button>
            </div>
        </div>
    </div>
);

export default ImageForm;
