const harmburgerBtn = document.getElementById("hamburgerBtn");
const mobilemenu = document.getElementById("mobileMenu");
const hamburgericon = document.getElementById("icon open");
const closeicon = document.getElementById("icon close");

let isopen = false;

harmburgerBtn.addEventListener("click", () => {
    isopen = !isopen;

    if(isopen) {
        mobilemenu.classList.remove("translate-x-full");
        mobilemenu.classList.add("translate-x-0");

        hamburgericon.classList.add("hidden");
        closeicon.classList.remove("hidden");

        document.body.style.overflow = "hidden";
    } else{
        mobilemenu.classList.remove("translate-x-0");
        mobilemenu.classList.add("translate-x-full");

        hamburgericon.classList.remove("hidden");
        closeicon.classList.add("hidden");

        document.body.style.overflow = "";
    }
});