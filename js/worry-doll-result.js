document.addEventListener("DOMContentLoaded", () => {
    const resultDoll = document.querySelector(".result-doll");
    const savedDrawing = localStorage.getItem("savedDrawing"); // worry-doll.js에서 저장한 이름과 동일하게 맞춤

    // 저장된 그림이 있으면 인형 위에 표시
    if (savedDrawing && resultDoll) {
        const overlay = document.createElement("div");
        overlay.classList.add("drawing-overlay");
        overlay.style.position = "absolute";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundImage = `url(${savedDrawing})`;
        overlay.style.backgroundSize = "contain";
        overlay.style.backgroundRepeat = "no-repeat";
        overlay.style.backgroundPosition = "center";
        overlay.style.zIndex = "3";
        resultDoll.appendChild(overlay);
    }

    // 끝내기 버튼
    const endButton = document.getElementById("endButton");
    if (endButton) {
        endButton.addEventListener("click", () => {
            // worry-doll.js에서 저장한 그림 삭제
            localStorage.removeItem("savedDrawing");

            // index.html 카드 업데이트용 데이터 저장
            localStorage.setItem("summaryText", "걱정을 가져가는 나만의 인형을 꾸며보았어요!");
            localStorage.setItem("emotionName", "걱정");
            localStorage.setItem("emotionImage", "image/emotion/걱정.png");
            localStorage.setItem("parentPage", "parent-worry.html");

            // 메인으로 이동
            window.location.href = "index.html";
        });
    }
});
