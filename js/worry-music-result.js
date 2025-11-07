const endButton = document.getElementById("endButton");
if (endButton) {
    endButton.addEventListener("click", () => {

        localStorage.removeItem("sadBook");

        localStorage.setItem("summaryText", "차분한 음악을 들으며 걱정을 멀리 보내보았어요!");
        localStorage.setItem("emotionName", "걱정");
        localStorage.setItem("emotionImage", "image/emotion/걱정.png");
        localStorage.setItem("parentPage", "parent-worry.html");

        window.location.href = "index.html";
    });
}
