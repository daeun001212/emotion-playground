document.addEventListener("DOMContentLoaded", () => {
    const monster = document.getElementById("monster");
    const wand = document.getElementById("wand");

    let clickCount = 0;
    let currentScale = 1;

    if (wand && monster) {
        wand.addEventListener("click", () => {
            clickCount++;
            currentScale -= 0.02; // 점점 작아짐 (50회면 약 절반 크기)
            if (currentScale < 0) currentScale = 0;

            // 괴물 흔들림 효과
            monster.classList.add("shake");
            setTimeout(() => monster.classList.remove("shake"), 300);

            // 크기 줄이기
            monster.style.transform = `scale(${currentScale})`;

            // 30번 클릭하면 결과 페이지로 이동
            if (clickCount >= 30) {
                monster.style.opacity = "0";
                setTimeout(() => {
                    window.location.href = "angry-monster-result.html";
                }, 700);
            }
        });
    }
});
