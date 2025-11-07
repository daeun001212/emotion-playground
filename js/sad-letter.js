document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("letterCanvas");
    const ctx = canvas.getContext("2d");
    const pencil = document.getElementById("pencil");
    const eraser = document.getElementById("eraser");
    const saveButton = document.getElementById("saveButton");

    let drawing = false;
    let tool = "pencil";

    // 편지지 //
    canvas.width = 500;
    canvas.height = 400;

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#000";

    // 그리기 기능 //
    canvas.addEventListener("mousedown", (e) => {
        drawing = true;
        draw(e);
    });
    canvas.addEventListener("mouseup", () => {
        drawing = false;
        ctx.beginPath();
    });
    canvas.addEventListener("mousemove", draw);

    function draw(e) {
        if (!drawing) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (tool === "pencil") {
            ctx.globalCompositeOperation = "source-over";
            ctx.strokeStyle = "#000";
            ctx.lineWidth = 4;
        } else if (tool === "eraser") {
            ctx.globalCompositeOperation = "destination-out";
            ctx.lineWidth = 20;
        }

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    // 도구 선택 //
    pencil.addEventListener("click", () => {
        tool = "pencil";
        pencil.classList.add("active");
        eraser.classList.remove("active");
    });

    eraser.addEventListener("click", () => {
        tool = "eraser";
        eraser.classList.add("active");
        pencil.classList.remove("active");
    });

    // 저장 + 결과 페이지로 이동 //
    musicDrawSaveButton.addEventListener("click", () => {
        const image = canvas.toDataURL("image/png");
        localStorage.setItem("sadLetterDrawing", image);

        const link = document.createElement("a");
        link.download = "sad_letter.png";
        link.href = image;
        link.click();

        setTimeout(() => {
            window.location.href = "sad-letter-result.html";
        }, 1000);
    });
});
