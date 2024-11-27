import injeraImg from "/resources/injera.png";

export function displayHome() {
    
    const divContent = document.getElementById("content");
    const imageOne = document.createElement("img");
    imageOne.src = injeraImg;

    divContent.appendChild(imageOne);

    const restaurantName = document.createElement("h1");
    restaurantName.innerHTML = "Asmarino";

    divContent.appendChild(restaurantName);

    const restaurantInfo = document.createElement("p");
    restaurantInfo.innerHTML = "Come and explore east african cuisine!";

    divContent.appendChild(restaurantInfo);


}


