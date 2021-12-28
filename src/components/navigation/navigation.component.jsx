import React from "react";

const Navigation = () => (
    <nav
        style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "50px",
            paddingTop: "5px",
        }}
    >
        <p className="f3 link dim black underline pa3 pointer">Sign Out</p>
    </nav>
);

export default Navigation;
