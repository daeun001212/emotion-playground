document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".balloon-grid");
    let poppedRedCount = 0;
    const totalRedBalloons = 3;

    const balloonOrder = [
        ...Array(3).fill("yellow"),
        ...Array(3).fill("blue"),
        ...Array(3).fill("red")
    ].sort(() => Math.random() - 0.5);

    balloonOrder.forEach(color => {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon", color);
        balloon.dataset.color = color;
        grid.appendChild(balloon);
    });

    const balloons = document.querySelectorAll(".balloon");

    balloons.forEach(balloon => {
        let clickCount = 0;
        let popped = false;

        balloon.addEventListener("click", () => {
            if (popped) return;

            const color = balloon.dataset.color;

            // 틀린 풍선 흔들기 //
            if (color === "yellow" || color === "blue") {
                balloon.classList.add("shake");
                setTimeout(() => balloon.classList.remove("shake"), 300);
            }

            //  빨간 풍선 커짐 //
            if (color === "red") {
                clickCount++;
                balloon.style.transform = `scale(${1 + clickCount * 0.05})`;

                if (clickCount >= 10) {
                    popped = true;
                    balloon.classList.add("pop-hide");

                    setTimeout(() => {
                        balloon.style.visibility = "hidden";
                    }, 500);

                    poppedRedCount++;

                    if (poppedRedCount === totalRedBalloons) {
                        setTimeout(() => {
                            window.location.href = "angry-balloon-result.html";
                        }, 800);
                    }
                }
            }
        });
    });
});
