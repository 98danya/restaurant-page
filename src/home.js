import injeraImg from "/resources/injera-home.jpg";
import logoImg from "/resources/logo.png";

export function displayHome() {
    const navHeader = document.getElementById("nav");
    const divContent = document.getElementById("content");

    let existingLogo = navHeader.querySelector(".logo-container");
    if (!existingLogo) {
        const logoContainer = document.createElement("div");
        logoContainer.classList.add("logo-container");

        const logoImage = document.createElement("img");
        logoImage.src = logoImg;
        logoImage.alt = "Asmarino Logo";
        logoImage.classList.add("logo-image");

        logoContainer.appendChild(logoImage);
        navHeader.prepend(logoContainer); 

        const logoHeader = document.createElement("h1");
        logoHeader.innerHTML = "Asmarino";
        logoContainer.appendChild(logoHeader);
    }

    divContent.innerHTML = "";

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    const imageOne = document.createElement("img");
    imageOne.src = injeraImg;
    imageOne.alt = "Injera Image";
    imageOne.classList.add("home-image");

    const restaurantName = document.createElement("h1");
    restaurantName.innerHTML = "ASMARINO <br> – explore east african cuisine.";

    const restaurantInfo = document.createElement("p");
    restaurantInfo.innerHTML = "With a wide range of selections from veggie dishes to very spicy chicken. There's something for everyone.";


    const textContainer = document.createElement("div");
    textContainer.appendChild(restaurantName);
    textContainer.appendChild(restaurantInfo);
    textContainer.classList.add("text-container");

    homeContainer.appendChild(imageOne);
    homeContainer.appendChild(textContainer);

    divContent.appendChild(homeContainer);

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const contactHeader = document.createElement("h1");
    contactHeader.innerHTML = "Need a reservation? <br> Then feel free to contact us."

    const contactForm = document.createElement("div");
    contactForm.classList.add("contact-form");


    const contactName = document.createElement("input");
    contactName.type = "text"; 
    contactName.placeholder = "Enter your name"; 
    contactName.classList.add("contact-input"); 

    const contactEmail = document.createElement("input");
    contactEmail.type = "email"; 
    contactEmail.placeholder = "Enter your e-mail"; 
    contactEmail.classList.add("contact-input"); 

    const contactMessage = document.createElement("input");
    contactMessage.type = "text"; 
    contactMessage.placeholder = "Enter your message"; 
    contactMessage.rows = 10;
    contactMessage.classList.add("contact-message"); 

    const contactSubmit = document.createElement("button");
    contactSubmit.type = "submit";
    contactSubmit.textContent = "Submit";
    contactSubmit.classList.add("contact-submit");

    divContent.appendChild(contactContainer);

    contactContainer.appendChild(contactForm);

    contactForm.appendChild(contactHeader);
    contactForm.appendChild(contactName);
    contactForm.appendChild(contactEmail);
    contactForm.appendChild(contactMessage);
    contactForm.appendChild(contactSubmit);
}