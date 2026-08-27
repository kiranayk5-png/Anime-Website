function openVideo(id) {

    
    document.getElementById("videoModal").style.display = "flex";

    
    document.getElementById("videoFrame").src =
        "https://www.youtube.com/embed/" + id;
}


function closeVideo() {

    
    document.getElementById("videoModal").style.display = "none";

  
    document.getElementById("videoFrame").src = "";
}
