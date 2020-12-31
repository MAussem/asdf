import React from 'react';
import './content.css'

import { SRLWrapper } from "simple-react-lightbox";



const theme = {
    settings: {
        overlayColor: "#0C0032",
        autoplaySpeed: 1500,
        transitionSpeed: 900,
    },
    buttons: {
        backgroundColor: "#190061",
        iconColor: "rgba(126, 172, 139, 0.8)",
    },
    caption: {
        captionColor: "#a6cfa5",
        captionFontFamily: "Raleway, sans-serif",
        captionFontWeight: "300",
        captionTextTransform: "uppercase",
    }
};


function Content() {
    return (
        <SRLWrapper options={theme}>

            <div className="bgColor">

                <div className="wrapper">
                    <div className="one-third">
                        <a href="/1.JPG">
                            <img src="/1.JPG" alt="Max and Cam" />
                        </a>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="one-third">
                        <a href="/2.JPG">
                            <img src="/2.JPG" alt="Max Cam B" />
                        </a>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="one-third">
                        <a href="/3.JPG">
                            <img src="/3.JPG" alt="Max Cam B Sab Nat" />
                        </a>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="one-third">
                        <a href="/4.JPG">
                            <img src="/4.JPG" alt="The Man" />
                        </a>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="one-third">
                        <a href="/5.JPG">
                            <img src="/5.JPG" alt="Max Cam Alex Dom" />
                        </a>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="one-third">
                        <a href="/6.JPG">
                            <img src="/6.JPG" alt="Max and Dad" />
                        </a>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="one-third">
                        <a href="/7.JPG">
                            <img src="/7.JPG" alt="Max and Cam" />
                        </a>
                    </div>
                </div>
            </div>

        </SRLWrapper>
    );
}

export default Content;