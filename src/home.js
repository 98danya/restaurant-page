import injeraImg from "/resources/injera-home.jpg";

export function displayHome() {
    
    
    const divContent = document.getElementById("content");

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container"); 
    
    const imageOne = document.createElement("img");
    imageOne.src = injeraImg;
    imageOne.classList.add("home-image");

    const restaurantName = document.createElement("h1");
    restaurantName.innerHTML = "Asmarino <br> – explore east african cuisine.";

    const restaurantInfo = document.createElement("p");
    restaurantInfo.innerHTML = "Come and explore east african cuisine!";


    homeContainer.appendChild(imageOne);
    const textContainer = document.createElement("div"); 
    textContainer.appendChild(restaurantName);
    textContainer.appendChild(restaurantInfo);
    textContainer.classList.add("text-container");
    homeContainer.appendChild(textContainer);


    divContent.appendChild(homeContainer);


}


