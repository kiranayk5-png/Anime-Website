```javascript
/* =========================================
   NAVIGATION MENU
========================================= */

function toggleMenu() {

    const navbar =
        document.getElementById("navbar");

    navbar.classList.toggle("show");
}


/* =========================================
   SMOOTH SCROLL
========================================= */

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   ANIME TRAILER
========================================= */

function openVideo(id) {

    const modal =
        document.getElementById("videoModal");

    const videoFrame =
        document.getElementById("videoFrame");

    modal.style.display = "flex";

    videoFrame.src =
        "https://www.youtube.com/embed/"
        + id
        + "?autoplay=1";
}


/* =========================================
   CLOSE VIDEO
========================================= */

function closeVideo() {

    const modal =
        document.getElementById("videoModal");

    const videoFrame =
        document.getElementById("videoFrame");

    modal.style.display = "none";

    // Stop video
    videoFrame.src = "";
}


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("videoModal");

    if (event.target === modal) {

        closeVideo();

    }

});


/* =========================================
   SEARCH ANIME
========================================= */

function searchAnime() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    const cards =
        document.querySelectorAll(".card");


    let found = 0;


    cards.forEach(function(card) {

        const name =
            card
            .getAttribute("data-name")
            .toLowerCase();


        if (name.includes(input)) {

            card.style.display = "block";

            found++;

        }

        else {

            card.style.display = "none";

        }

    });


    const noResults =
        document.getElementById("noResults");


    if (found === 0) {

        noResults.style.display = "block";

    }

    else {

        noResults.style.display = "none";

    }

}


/* =========================================
   GENRE FILTER
========================================= */

function filterGenre(genre) {

    const cards =
        document.querySelectorAll(".card");


    let found = 0;


    cards.forEach(function(card) {

        const genres =
            card
            .getAttribute("data-genre")
            .toLowerCase();


        if (genres.includes(genre)) {

            card.style.display = "block";

            found++;

        }

        else {

            card.style.display = "none";

        }

    });


    const noResults =
        document.getElementById("noResults");


    if (found === 0) {

        noResults.innerText =
            "😢 No anime available for this genre yet.";

        noResults.style.display = "block";

    }

    else {

        noResults.style.display = "none";

    }


    // Go to Popular section
    scrollToSection("popular");


    // Clear search
    document.getElementById("searchInput").value = "";

}


/* =========================================
   CONTACT FORM
========================================= */

function sendMessage(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    const successMessage =
        document.getElementById("successMessage");


    successMessage.innerText =
        "✨ Thank you "
        + name
        + "! Your message has been received 💖";


    // Clear form
    document
        .querySelector("#contact form")
        .reset();

}


/* =========================================
   NAVIGATION ACTIVE STATE
========================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", function() {

    let current = "";


    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
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

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document
    .querySelectorAll(".nav-link")
    .forEach(function(link) {

        link.addEventListener("click", function() {

            document
                .getElementById("navbar")
                .classList.remove("show");

        });

    });
```
