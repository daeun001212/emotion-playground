const endButton = document.getElementById("endButton");
if (endButton) {
    endButton.addEventListener("click", () => {
        localStorage.setItem("summaryText", "기쁜 노란색 별을 찾아보았어요!");
        localStorage.setItem("emotionName", "기쁨");
        localStorage.setItem("emotionImage", "image/emotion/기쁨.png");
        localStorage.setItem("parentPage", "parent.html");

        window.location.href = "index.html";
    });
}
