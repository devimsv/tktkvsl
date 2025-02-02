
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".openPopup").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("customPopup").style.display = "flex";
    });

    document.querySelector(".close").addEventListener("click", function() {
        document.getElementById("customPopup").style.display = "none";
    });

    window.onclick = function(event) {
        let popup = document.getElementById("customPopup");
        if (event.target === popup) {
            popup.style.display = "none";
        }
    };
});
