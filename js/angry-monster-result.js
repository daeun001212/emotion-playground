const endButton = document.getElementById("endButton");
if (endButton) {
    endButton.addEventListener("click", () => {
        localStorage.setItem("summaryText", "요술봉으로 분노 괴물을 물리쳐보았어요!");
        localStorage.setItem("emotionName", "화남");
        localStorage.setItem("emotionImage", "image/emotion/분노.png");
        localStorage.setItem("parentPage", "parent-angry.html");

        window.location.href = "index.html";
    });
}
