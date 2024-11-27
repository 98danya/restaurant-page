export function displayMenu() {

    const divContent = document.getElementById("content");

    const menuTextTest = document.createElement("h1");
    menuTextTest.textContent = "This is only a test!"


    divContent.appendChild(menuTextTest);
}