export function displayAbout() {

    const divContent = document.getElementById("content");

    const aboutTextTest = document.createElement("h1");
    aboutTextTest.textContent = "Last but not least: This is another test!"


    divContent.appendChild(aboutTextTest);
}