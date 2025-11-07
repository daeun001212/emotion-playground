//폼 못 찾으면 종료//
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-box form");
    if (!form) return;

    //로그인 버튼 클릭 시 홈 화면으로 이동//
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        window.location.href = "index.html";
    });
});