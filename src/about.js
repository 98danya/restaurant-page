import aboutImageOne from "/resources/about.jpg";
import aboutImageTwo from "/resources/injera.png";

export function displayAbout() {

    const divContent = document.getElementById("content");

    divContent.innerHTML = "";

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    divContent.appendChild(aboutContainer);

    const aboutIntro = document.createElement("div");
    aboutIntro.classList.add("about-intro");
    aboutContainer.appendChild(aboutIntro);

    const aboutIntroHeader = document.createElement("h1");
    aboutIntroHeader.innerHTML = "Welcome to <strong>Asmarino</strong>,";

    const aboutIntroText = document.createElement("p");
    aboutIntroText.innerHTML = "where the vibrant flavors of Eritrea and East Africa come alive. <br>Our mission is to bring the rich culinary heritage of East Africa to your table, <br>sharing not just food but the stories, traditions, and culture behind every dish.";

    aboutIntro.appendChild(aboutIntroHeader);
    aboutIntro.appendChild(aboutIntroText);

    const aboutAsmara = document.createElement("div");
    aboutAsmara.classList.add("about-asmara");

    aboutContainer.appendChild(aboutAsmara);

    const aboutAsmaraHeader = document.createElement("h1");
    aboutAsmaraHeader.innerHTML = "Discover Eritrea: A Land of Diversity and Warmth";

    const aboutAsmaraText = document.createElement("p");
    aboutAsmaraText.innerHTML = "Nestled by the <strong>Red Sea</strong>, Eritrea boasts stunning landscapes and a rich cultural heritage. Its unique cuisine reflects its history and geography, with food serving as a way to connect, celebrate, and create lasting memories.";

    aboutAsmara.appendChild(aboutAsmaraHeader);
    aboutAsmara.appendChild(aboutAsmaraText);

    const aboutImgOne = document.createElement("img");
    aboutImgOne.src = aboutImageOne;
    aboutImgOne.alt = "Asmara";
    aboutImgOne.classList.add("about-image");

    aboutAsmara.appendChild(aboutImgOne);


    const aboutAsmarino = document.createElement("div");
    aboutAsmarino.classList.add("about-asmarino");

    aboutContainer.appendChild(aboutAsmarino);

    const aboutImgTwo = document.createElement("img");
    aboutImgTwo.src = aboutImageTwo;
    aboutImgTwo.alt = "Asmarino";
    aboutImgTwo.classList.add("about-asmarino-image");

    aboutAsmarino.appendChild(aboutImgTwo);

    const aboutTextContainer = document.createElement("div");
    aboutTextContainer.classList.add("about-text-container");

    const aboutAsmarinoHeader = document.createElement("h1");
    aboutAsmarinoHeader.innerHTML = "The Heart of <br>East African Cuisine,";

    const aboutAsmarinoText = document.createElement("p");
    aboutAsmarinoText.innerHTML = "features bold spices, fresh ingredients, and rich traditions. At its heart is injera, a tangy teff flatbread used to enjoy lentil stews, slow-cooked meats, and vibrant vegetables, all seasoned with unique spices like berbere and mitmita. <br> <br>At <strong>Asmarino</strong>, we honor these traditions while offering a menu that caters to diverse tastes. Whether you’re savoring the comforting richness of Shiro or experiencing the fiery zest of Doro Tsebhi, every bite tells a story of resilience, community, and love.";

    aboutTextContainer.appendChild(aboutAsmarinoHeader);
    aboutTextContainer.appendChild(aboutAsmarinoText);
    aboutAsmarino.appendChild(aboutTextContainer);

    






    
}