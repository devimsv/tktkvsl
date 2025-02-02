
<script>
    document.getElementById("openPopup").addEventListener("click", function(event) {
        event.preventDefault(); // Impede o link de redirecionar
        document.getElementById("popup").style.display = "flex";
    });

    document.querySelector(".close").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
    });

    // Fecha o popup se clicar fora dele
    window.onclick = function(event) {
        let popup = document.getElementById("popup");
        if (event.target === popup) {
            popup.style.display = "none";
        }
    };
</script>