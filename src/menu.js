import menuImageOne from "/resources/menu-one.jpg";
import menuImageTwo from "/resources/menu-two.jpg";
import menuImageThree from "/resources/menu-three.jpg";
import menuImageFour from "/resources/menu-four.jpeg";

export function displayMenu() {
    const divContent = document.getElementById("content");

    divContent.innerHTML = "";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    divContent.appendChild(menuContainer);

    const menuOne = document.createElement("div");
    menuOne.classList.add("menu-one");
    menuContainer.appendChild(menuOne);

    const menuImgOne = document.createElement("img");
    menuImgOne.src = menuImageOne;
    menuImgOne.alt = "Kicha Fitfit";
    menuImgOne.classList.add("menu-image");

    const menuTextContainerOne = document.createElement("div");
    menuTextContainerOne.classList.add("menu-text-container");

    const menuHeaderOne = document.createElement("h1");
    menuHeaderOne.innerHTML = "Kicha Fitfit";

    const menuTextOne = document.createElement("p");
    menuTextOne.innerHTML = "A flavorful dish made with torn pieces of Kicha (a type of flatbread), mixed with berbere spice, olive oil, and sometimes accompanied by a hard-boiled egg. It’s a hearty and savory meal often enjoyed as breakfast or a light lunch.";

    menuTextContainerOne.appendChild(menuHeaderOne);
    menuTextContainerOne.appendChild(menuTextOne);

    menuOne.appendChild(menuImgOne);
    menuOne.appendChild(menuTextContainerOne);



    const menuTwo = document.createElement("div");
    menuTwo.classList.add("menu-two");
    menuContainer.appendChild(menuTwo);

    const menuImgTwo = document.createElement("img");
    menuImgTwo.src = menuImageTwo;
    menuImgTwo.alt = "Veggie Injera Platter";
    menuImgTwo.classList.add("menu-image");

    const menuTextContainerTwo = document.createElement("div");
    menuTextContainerTwo.classList.add("menu-text-container");

    const menuHeaderTwo = document.createElement("h1");
    menuHeaderTwo.innerHTML = "Veggie Platter <br>with Injera";

    const menuTextTwo = document.createElement("p");
    menuTextTwo.innerHTML = "A colorful assortment of stewed vegetables such as lentils, carrots, potatoes, and collard greens, served with injera. This dish is a staple for vegetarians, showcasing a variety of mild yet flavorful spices.";

    menuTextContainerTwo.appendChild(menuHeaderTwo);
    menuTextContainerTwo.appendChild(menuTextTwo);

    menuTwo.appendChild(menuImgTwo);
    menuTwo.appendChild(menuTextContainerTwo);


    const menuThree = document.createElement("div");
    menuThree.classList.add("menu-three");
    menuContainer.appendChild(menuThree);

    const menuImgThree = document.createElement("img");
    menuImgThree.src = menuImageThree;
    menuImgThree.alt = "Doro Tsebhi Platter";
    menuImgThree.classList.add("menu-image");

    const menuTextContainerThree = document.createElement("div");
    menuTextContainerThree.classList.add("menu-text-container");

    const menuHeaderThree = document.createElement("h1");
    menuHeaderThree.innerHTML = "Doro Platter <br>with Injera";

    const menuTextThree = document.createElement("p");
    menuTextThree.innerHTML = "A rich and flavorful chicken stew (Doro Tsebhi) made with spicy berbere sauce, hard-boiled eggs, and tender chicken pieces. Served with injera, it’s one of Eritrea’s most beloved dishes, perfect for special occasions.";

    menuTextContainerThree.appendChild(menuHeaderThree);
    menuTextContainerThree.appendChild(menuTextThree);

    menuThree.appendChild(menuImgThree);
    menuThree.appendChild(menuTextContainerThree);


    const menuFour = document.createElement("div");
    menuFour.classList.add("menu-four");
    menuContainer.appendChild(menuFour);

    const menuImgFour = document.createElement("img");
    menuImgFour.src = menuImageFour;
    menuImgFour.alt = "Shiro Platter";
    menuImgFour.classList.add("menu-image");

    const menuTextContainerFour = document.createElement("div");
    menuTextContainerFour.classList.add("menu-text-container");

    const menuHeaderFour = document.createElement("h1");
    menuHeaderFour.innerHTML = "Shiro Platter <br>with Injera";

    const menuTextFour = document.createElement("p");
    menuTextFour.innerHTML = " A smooth, flavorful stew made from ground chickpeas (or beans), cooked with spices and garlic to create a rich, savory base. Served with injera, it’s a comforting and satisfying dish.";


    menuTextContainerFour.appendChild(menuHeaderFour);
    menuTextContainerFour.appendChild(menuTextFour);

    menuFour.appendChild(menuImgFour);
    menuFour.appendChild(menuTextContainerFour);
}