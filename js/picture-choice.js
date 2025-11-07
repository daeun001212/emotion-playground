document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const galleryButton = document.querySelector(".gallery-button");
    const galleryImage = document.querySelector(".choice-image.gallery"); // 🧡 이미지 영역 추가
    localStorage.removeItem("selectedImage");
    // 파일 선택창 열기 //
    galleryButton.addEventListener("click", (e) => {
        e.preventDefault();
        fileInput.click();
    });

    // 이미지 클릭 시 동일한 파일 선택창 열기 //
    galleryImage.addEventListener("click", (e) => {
        e.preventDefault();
        fileInput.click();
    });

    // 다음 페이지로 이동 //
    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {

                localStorage.setItem("selectedImage", e.target.result);

                window.location.href = "activity-gallery.html";
            };

            reader.readAsDataURL(file);
        }
        fileInput.value = "";
    });
});
