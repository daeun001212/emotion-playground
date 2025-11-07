document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.querySelector(".loading-progress");
    const aiResult = document.getElementById("aiResult");

    // 로딩바 //
    setTimeout(() => {
        progressBar.style.width = "100%";
    }, 300);

    setTimeout(() => {
        aiResult.classList.add("active");
    }, 3300);

    // 다시하기 버튼 //
    document.querySelector(".retry-button").addEventListener("click", () => {
        window.history.back();
    });

    // 감정섬 가기 버튼 //
    const goIslandButton = document.querySelector(".go-island-button");

    if (goIslandButton) {
        goIslandButton.addEventListener("click", () => {
            // 현재 페이지 파일 이름 가져오기
            const currentPage = window.location.pathname.split("/").pop();

            // 페이지별 이동 경로 설정
            let targetPage = "activity-island-choice.html"; // 기본값

            if (currentPage.includes("activity-AI-sad")) {
                targetPage = "activity-island-choice-sad.html";
            } else if (currentPage.includes("activity-AI-angry")) {
                targetPage = "activity-island-choice-angry.html";
            } else if (currentPage.includes("activity-AI-worry")) {
                targetPage = "activity-island-choice-worry.html";
            } else if (currentPage.includes("activity-AI")) {
                targetPage = "activity-island-choice.html";
            }

            // 이동 실행
            window.location.href = targetPage;
        });
    }
});
