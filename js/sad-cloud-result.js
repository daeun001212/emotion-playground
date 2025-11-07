document.addEventListener("DOMContentLoaded", () => {
    const resultCloud = document.getElementById("resultCloud");
    const savedEmotions = JSON.parse(localStorage.getItem("placedEmotions")) || [];

    // 저장된 감정 이미지 //
    savedEmotions.forEach(item => {
        const img = document.createElement("img");
        img.src = item.src;
        img.classList.add("emotion");
        img.style.left = `${item.x}px`;
        img.style.top = `${item.y}px`;
        resultCloud.appendChild(img);
    });

    //  끝내기 버튼 //
    const endButton = document.getElementById("endButton");
    if (endButton) {
        endButton.addEventListener("click", () => {
            localStorage.removeItem("placedEmotions");
            localStorage.setItem("summaryText", "슬픈 감정을 구름에 띄워 멀리 보냈어요!");
            localStorage.setItem("parentPage", "parent-sad.html");
            
            window.location.href = "index.html";
        });
    }
});
