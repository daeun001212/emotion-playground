const endButton = document.getElementById("endButton");
if (endButton) {
    endButton.addEventListener("click", () => {
        localStorage.setItem("summaryText", "화난 마음을 담아 깊게 숨을 쉬면서 케이크의 촛불을 꺼보았어요!");
        localStorage.setItem("emotionName", "화남");
        localStorage.setItem("emotionImage", "image/emotion/분노.png");
        localStorage.setItem("parentPage", "parent-angry.html");

        window.location.href = "index.html";
    });
}
