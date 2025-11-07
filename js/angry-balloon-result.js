const endButton = document.getElementById("endButton");
if (endButton) {
    endButton.addEventListener("click", () => {
        localStorage.setItem("summaryText", "화난 빨간색 풍선을 눌러서 터뜨려 보았어요!");
        localStorage.setItem("emotionName", "화남");
        localStorage.setItem("emotionImage", "image/emotion/분노.png");
        localStorage.setItem("parentPage", "parent-angry.html");

        window.location.href = "index.html";
    });
}
