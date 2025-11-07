document.addEventListener("DOMContentLoaded", () => {
    const bookImage = document.getElementById("bookImage");
    const nextButton = document.getElementById("nextButton");
    const prevButton = document.getElementById("prevButton");
    const saveButton = document.getElementById("saveButton");

    const isMobile = window.innerWidth <= 768;

    const totalPages = isMobile ? 12 : 7;

    const pages = Array.from({ length: totalPages }, (_, i) => {
        if (isMobile) {
            // 모바일 //
            return `image/activity/book/동화책 한장${i + 1}.png`;
        } else {
            // PC //
            return `image/activity/book/동화책${i + 1}.PNG`;
        }
    });

    let currentPage = 0;

    function updateBookPage() {
        bookImage.style.opacity = 0;
        bookImage.style.transform = "scale(0.98)";

        setTimeout(() => {
            bookImage.src = pages[currentPage];
            bookImage.style.opacity = 1;
            bookImage.style.transform = "scale(1)";
        }, 200);

        // 표지일 때 이전 버튼 숨김 //
        prevButton.style.display = currentPage === 0 ? "none" : "flex";

        // 마지막 페이지 시 저장 버튼 등장 //
        if (currentPage === totalPages - 1) {
            nextButton.style.display = "none";
            saveButton.style.display = "inline-flex";
        } else {
            nextButton.style.display = "flex";
            saveButton.style.display = "none";
        }
    }

    // 다음 페이지 //
    nextButton.addEventListener("click", () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateBookPage();
        }
    });

    // 이전 페이지 //
    prevButton.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            updateBookPage();
        }
    });

    // 저장하기 버튼 클릭 시 결과 페이지로 이동 //
    saveButton.addEventListener("click", () => {
        window.location.href = "sad-book-result.html";
    });

    updateBookPage();
});
