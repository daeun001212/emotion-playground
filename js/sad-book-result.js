const endButton = document.getElementById("endButton");
if (endButton) {
    endButton.addEventListener("click", () => {

        localStorage.setItem("summaryText", "기분이 좋아지는 감정 그림책을 읽어보았어요!");
        localStorage.setItem("emotionName", "슬픔");
        localStorage.setItem("emotionImage", "image/emotion/슬픔.png");
        localStorage.setItem("parentPage", "parent-sad.html");

        window.location.href = "index.html";
    });
}
