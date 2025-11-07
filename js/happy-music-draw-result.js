// 그림 //
document.addEventListener("DOMContentLoaded", () => {
    const resultPicture = document.querySelector(".result-picture");
    const savedDrawing = localStorage.getItem("savedDrawing");

    if (savedDrawing && resultPicture) {
        resultPicture.style.backgroundImage = `url(${savedDrawing})`;
        resultPicture.style.backgroundSize = "contain";
        resultPicture.style.backgroundRepeat = "no-repeat";
        resultPicture.style.backgroundPosition = "center";
        resultPicture.style.width = "500px";
        resultPicture.style.height = "500px";
    } else if (resultPicture) {
        resultPicture.style.backgroundSize = "contain";
        resultPicture.style.backgroundRepeat = "no-repeat";
        resultPicture.style.backgroundPosition = "center";
        resultPicture.style.width = "500px";
        resultPicture.style.height = "500px";
    }

    // 끝내기 버튼 //
    const endButton = document.getElementById("endButton");
    if (endButton) {
        endButton.addEventListener("click", () => {

            localStorage.removeItem("savedDrawing");

            localStorage.setItem("summaryText", "신나는 음악을 들으며 떠오르는 모습을 그려보았어요!");
            localStorage.setItem("emotionName", "기쁨");
            localStorage.setItem("emotionImage", "image/emotion/기쁨.png");
            localStorage.setItem("parentPage", "parent.html");

            window.location.href = "index.html";
        });
    }
});

