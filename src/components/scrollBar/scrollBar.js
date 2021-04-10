import React from "react"
import * as styleBar from "./scrollBar.module.css"

export default function ScrollBar () {

    window.addEventListener("scroll", () => {
        const top = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight
                        - document.documentElement.clientHeight;
        const totalScrolled = (top / height) * 100;
        document.getElementById("bar").style.width = `${totalScrolled}%`;
    });

    return(
        <div className={styleBar.barBox}>
            <div className={styleBar.bar} id="bar">
            </div>
        </div>
    )
}