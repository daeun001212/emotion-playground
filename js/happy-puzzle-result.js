const endButton = document.getElementById("endButton");
if (endButton) {
    endButton.addEventListener("click", () => {
        localStorage.setItem("summaryText", "다양한 감정 퍼즐을 맞춰보았어요!");
        localStorage.setItem("emotionName", "기쁨");
        localStorage.setItem("emotionImage", "image/emotion/기쁨.png");
        localStorage.setItem("parentPage", "parent.html");

        window.location.href = "index.html";
    });
}
