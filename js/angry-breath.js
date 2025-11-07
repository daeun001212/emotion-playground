document.addEventListener("DOMContentLoaded", () => {
    const fireCenter = document.getElementById("fireCenter");
    const fireLeft = document.getElementById("fireLeft");
    const fireRight = document.getElementById("fireRight");

    const fires = [fireCenter, fireLeft, fireRight];

    fires.forEach((fire, index) => {
        // 가운데 불 20초 뒤, 다른 불 10초 간격으로 꺼짐 //
        const delay = index === 0 ? 12000 : 12000 + (index * 10000);

        setTimeout(() => {
            if (fire) {
                fire.classList.add("fade-out");
            }

            // 결과 페이지로 이동 //
            if (index === fires.length - 1) {
                setTimeout(() => {
                    window.location.href = "angry-breath-result.html";
                }, 2000);
            }
        }, delay);
    });
});
