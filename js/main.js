// 메뉴 토글 (모바일 반응형) //
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');

    // 아이콘 변경 (☰ ↔ ✕) //
    if (menuToggle.textContent.trim() === '☰') {
        menuToggle.textContent = '✕';
    } else {
        menuToggle.textContent = '☰';
    }
});


//  감정 카드 변경 //
document.addEventListener("DOMContentLoaded", () => {

    const savedText = localStorage.getItem("summaryText");
    const savedEmotionImage = localStorage.getItem("emotionImage");
    const savedEmotionName = localStorage.getItem("emotionName");

    const summaryParagraph = document.querySelector(".section:nth-of-type(2) .card p");
    const emotionImage = document.querySelector(".section:nth-of-type(1) .card img");
    const emotionName = document.querySelector(".section:nth-of-type(1) .card p");

    if (savedText && summaryParagraph) summaryParagraph.textContent = savedText;
    if (savedEmotionImage && emotionImage) emotionImage.src = savedEmotionImage;
    if (savedEmotionName && emotionName) emotionName.textContent = savedEmotionName;

    // 부모페이지 변경 //
    const parentLink = document.querySelector('nav ul li a[href="parent.html"]');
    const parentPage = localStorage.getItem("parentPage");

    if (parentLink) {
        if (parentPage) {
            parentLink.setAttribute("href", parentPage);

        } else {
            parentLink.setAttribute("href", "parent.html");
        }
    }
});
