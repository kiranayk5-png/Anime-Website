

function openVideo(id) {

    const modal = document.getElementById("videoModal");

    const videoFrame = document.getElementById("videoFrame");

    modal.style.display = "flex";

    videoFrame.src =
        "https://www.youtube.com/embed/" + id + "?autoplay=1";
}



function closeVideo() {

    const modal = document.getElementById("videoModal");

    const videoFrame = document.getElementById("videoFrame");

    modal.style.display = "none";

    // Stop video
    videoFrame.src = "";
}




function scrollToPopular() {

    document
        .getElementById("popular")
        .scrollIntoView({
            behavior: "smooth"
        });
}



function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const successMessage =
        document.getElementById("successMessage");

    successMessage.innerText =
        "Thank you " + name + "! Your message has been received 💖";

    // Clear form
    document.querySelector("form").reset();
}


window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("videoModal");

    if (event.target === modal) {

        closeVideo();

    }

});
