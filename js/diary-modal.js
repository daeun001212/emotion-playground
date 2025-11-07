document.addEventListener("DOMContentLoaded", function () {
    const diaryModal = document.getElementById("diaryModal");
    const diaryModalImg = document.getElementById("diaryModalImage");
    const closeBtn = document.querySelector(".diary-close");
    const diaryImages = document.querySelectorAll(".diary-item img");

    // 이미지 클릭 시 모달 열기 //
    diaryImages.forEach(img => {
        img.addEventListener("click", () => {
            diaryModal.style.display = "flex";
            diaryModalImg.src = img.src;
        });
    });

    // 닫기 버튼 클릭 //
    closeBtn.addEventListener("click", () => {
        diaryModal.style.display = "none";
    });
});
