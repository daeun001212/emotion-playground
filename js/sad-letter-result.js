// 편지 //
document.addEventListener("DOMContentLoaded", () => {
    const resultPicture = document.querySelector(".result-picture");
    const savedDrawing = localStorage.getItem("sadLetterDrawing");

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

            localStorage.removeItem("sadLetterDrawing");

            localStorage.setItem("summaryText", "스스로의 슬픈 마음을 위로해주는 편지를 써보았어요!");
            localStorage.setItem("emotionName", "슬픔");
            localStorage.setItem("emotionImage", "image/emotion/슬픔.png");
            localStorage.setItem("parentPage", "parent-sad.html");

            window.location.href = "index.html";
        });
    }
});
