/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const navbar =
        document.getElementById("navbar");

    const menuButton =
        document.querySelector(".menu-btn");


    navbar.classList.toggle("show");


    if (navbar.classList.contains("show")) {

        menuButton.innerHTML = "✕";

    } else {

        menuButton.innerHTML = "☰";

    }

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

function closeMobileMenu() {

    const navbar =
        document.getElementById("navbar");

    const menuButton =
        document.querySelector(".menu-btn");


    navbar.classList.remove("show");

    menuButton.innerHTML = "☰";

}


/* =========================================
   NAVIGATION LINKS
========================================= */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        closeMobileMenu();

    });

});


/* =========================================
   VIDEO PLAYER
========================================= */

function openVideo(id) {

    const modal =
        document.getElementById("videoModal");

    const frame =
        document.getElementById("videoFrame");


    modal.style.display = "flex";


    document.body.style.overflow = "hidden";


    frame.src =
        "https://www.youtube.com/embed/"
        + id
        + "?autoplay=1&rel=0";

}


/* =========================================
   CLOSE VIDEO
========================================= */

function closeVideo() {

    const modal =
        document.getElementById("videoModal");

    const frame =
        document.getElementById("videoFrame");


    modal.style.display = "none";


    frame.src = "";


    document.body.style.overflow = "";

}


/* =========================================
   CLICK OUTSIDE VIDEO
========================================= */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("videoModal");


    if (event.target === modal) {

        closeVideo();

    }

});


/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeVideo();

        closeMobileMenu();

    }

});


/* =========================================
   SEARCH ANIME
========================================= */

function searchAnime() {

    const searchInput =
        document.getElementById("searchInput");


    const searchText =
        searchInput.value
        .toLowerCase()
        .trim();


    const cards =
        document.querySelectorAll(".card");


    const noResults =
        document.getElementById("noResults");


    let found = 0;


    cards.forEach(function(card) {

        const animeName =
            card
            .getAttribute("data-name")
            .toLowerCase();


        if (
            animeName.includes(searchText)
        ) {

            card.style.display = "";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    if (found === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


/* =========================================
   FILTER BY GENRE
========================================= */

function filterGenre(genre) {

    const cards =
        document.querySelectorAll(".card");


    const noResults =
        document.getElementById("noResults");


    const searchInput =
        document.getElementById("searchInput");


    let found = 0;


    cards.forEach(function(card) {

        const cardGenres =
            card
            .getAttribute("data-genre")
            .toLowerCase();


        if (
            cardGenres.includes(
                genre.toLowerCase()
            )
        ) {

            card.style.display = "";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    searchInput.value = "";


    if (found === 0) {

        noResults.innerHTML =
            "😢 No anime found in this genre.";

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }


    /* Go to Popular Anime */

    document
        .getElementById("popular")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   SHOW ALL ANIME
========================================= */

function showAllAnime() {

    const cards =
        document.querySelectorAll(".card");


    const noResults =
        document.getElementById("noResults");


    const searchInput =
        document.getElementById("searchInput");


    cards.forEach(function(card) {

        card.style.display = "";

    });


    searchInput.value = "";


    noResults.style.display = "none";


    document
        .getElementById("popular")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   CONTACT FORM
========================================= */

function sendMessage(event) {

    event.preventDefault();


    const name =
        document
        .getElementById("name")
        .value
        .trim();


    const email =
        document
        .getElementById("email")
        .value
        .trim();


    const message =
        document
        .getElementById("message")
        .value
        .trim();


    const success =
        document
        .getElementById("successMessage");


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        success.innerHTML =
            "⚠️ Please fill all fields.";

        success.style.color = "#ff8b8b";

        return;

    }


    success.innerHTML =
        "✨ Thank you "
        + name
        + "! Your message has been received 💖";


    success.style.color = "#8effc5";


    document
        .querySelector("#contact form")
        .reset();

}


/* =========================================
   ACTIVE NAVIGATION WHILE SCROLLING
========================================= */

const sections =
    document.querySelectorAll("section");


window.addEventListener(
    "scroll",
    function() {

        let current = "";


        sections.forEach(function(section) {

            const sectionTop =
                section.offsetTop - 120;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function(link) {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }
);


/* =========================================
   CLOSE MENU WHEN RESIZING
========================================= */

window.addEventListener(
    "resize",
    function() {

        if (window.innerWidth > 700) {

            closeMobileMenu();

            document.body.style.overflow = "";

        }

    }
);
