import React from "react";
import "./App.scss";
import ParallaxBg from "../ParallaxBg/ParallaxBg";
import FullHeightWrapper from "../FullHeightWrapper/FullHeightWrapper";
import Header from "../Header/Header";
import VSheader from "../VSheader/VSheader";
import Navbar from "../Navbar/Navbar";

const App = () => {
    return (
        <div className="main">
            <ParallaxBg />
            <Navbar />
            <FullHeightWrapper>
                <VSheader size="1">Vengel Studio</VSheader>
                <VSheader size="2">Vengel Studio</VSheader>
                <VSheader size="3">Vengel Studio</VSheader>
                <VSheader size="4">Vengel Studio</VSheader>
                <VSheader size="5">Vengel Studio</VSheader>
                <VSheader size="6">Vengel Studio</VSheader>
            </FullHeightWrapper>
            <FullHeightWrapper>
                <Header>test2</Header>
            </FullHeightWrapper>
            <FullHeightWrapper>
                <Header>test3</Header>
            </FullHeightWrapper>
        </div>
    );
};

export default App;
