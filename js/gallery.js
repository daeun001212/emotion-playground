document.addEventListener("DOMContentLoaded", () => {
    const galleryImage = document.querySelector(".gallery-image");
    let selectButton = null;

    // 이미지 불러오기 //
    const savedImage = localStorage.getItem("selectedImage");

    if (savedImage) {
        // 배경 이미지로 표시 //
        galleryImage.style.backgroundImage = `
            linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)),
            url(${savedImage}),
            url('../image/background/그림선택배경.png')
        `;
        galleryImage.style.backgroundSize = "contain";
        galleryImage.style.backgroundPosition = "center";
        galleryImage.style.backgroundRepeat = "no-repeat";

        // 선택하기 버튼 //
        selectButton = document.createElement("button");
        selectButton.classList.add("select-button");
        selectButton.innerHTML = `
            선택하기
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z" />
            </svg>
        `;

        galleryImage.insertAdjacentElement("afterend", selectButton);

        setTimeout(() => selectButton.classList.add("show"), 150);

        // 버튼 클릭 시 랜덤 페이지로 이동 //
        const pages = [
            "activity-AI.html",
            "activity-AI-sad.html",
            "activity-AI-angry.html",
            "activity-AI-worry.html"
        ];

        selectButton.addEventListener("click", () => {
            selectButton.disabled = true;
            setTimeout(() => {
                const randomPage = pages[Math.floor(Math.random() * pages.length)];
                window.location.href = randomPage;
            }, 300);
        });
    }
});
