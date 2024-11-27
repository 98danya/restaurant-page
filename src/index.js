import "./styles.css";

import { displayHome } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayAbout } from "./about.js";

export const contentDiv = document.getElementById("content");

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

displayHome();

function wipeContent() {
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

homeBtn.addEventListener("mousedown", () => {
    wipeContent();
    displayHome();
});


menuBtn.addEventListener("mousedown", () => {
    wipeContent();
    displayMenu();
});


aboutBtn.addEventListener("mousedown", () => {
    wipeContent();
    displayAbout();
});
