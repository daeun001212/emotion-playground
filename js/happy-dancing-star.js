document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".star-grid");
    const endButton = document.getElementById("endButton");

    // 별 //
    const colors = [
        "red", "yellow", "red", "blue",
        "green", "red", "green", "yellow",
        "green", "blue", "blue", "yellow"
    ];

    colors.forEach(color => {
        const star = document.createElement("div");
        star.classList.add("star", color, "floating");

        let imagePath = "";

        switch (color) {
            case "yellow":
                imagePath = "../image/activity/star/노란별.png";
                break;
            case "red":
                imagePath = "../image/activity/star/빨간별.png";
                break;
            case "blue":
                imagePath = "../image/activity/star/파란별.png";
                break;
            case "green":
                imagePath = "../image/activity/star/초록별.png";
                break;
            default:
                imagePath = "../image/activity/star/노란별.png";
        }

        star.style.backgroundImage = `url('${imagePath}')`;
        star.style.backgroundSize = "contain";
        star.style.backgroundRepeat = "no-repeat";
        star.style.backgroundPosition = "center";

        grid.appendChild(star);
    });

    const stars = document.querySelectorAll(".star");
    const yellowStars = Array.from(stars).filter(star => star.classList.contains("yellow"));
    let correctCount = 0;

    // 별 클릭 //
    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.classList.contains("yellow")) {
                star.classList.remove("floating");
                star.classList.add("correct");
                correctCount++;

                if (correctCount === yellowStars.length) {
                    setTimeout(() => {
                        window.location.href = "happy-dancing-star-result.html";
                    }, 800);
                }
            } else {
                star.classList.add("wrong");
                star.style.visibility = "hidden";
            }
        });
    });
});
