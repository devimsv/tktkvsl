document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".openPopup").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            let popupId = this.getAttribute("data-popup-target");
            document.getElementById(popupId).style.display = "flex";
        });
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
