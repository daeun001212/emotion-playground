// 스케치북 //
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas?.getContext("2d");
const doll = document.querySelector(".doll");

if (canvas && ctx && doll) {
    function resizeCanvas() {
        const rect = doll.getBoundingClientRect();

        const paddingTop = rect.height * 0.18;
        const paddingLeft = rect.width * 0.04;
        const paddingRight = rect.width * 0.02;
        const paddingBottom = rect.height * 0.1;

        const canvasWidth = rect.width - (paddingLeft + paddingRight);
        const canvasHeight = rect.height - (paddingTop + paddingBottom);

        canvas.style.top = `${paddingTop}px`;
        canvas.style.left = `${paddingLeft}px`;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let painting = false;
    let brushColor = "#000000";
    let brushSize = 5;
    let tool = "pencil";

    // 색상 선택 //
    document.querySelectorAll(".color").forEach(color => {
        color.addEventListener("click", () => {
            document.querySelectorAll(".color").forEach(c => c.classList.remove("active"));
            color.classList.add("active");
            brushColor = color.style.backgroundColor;
        });
    });

    // 도구 선택 //
    document.querySelectorAll(".tool").forEach(t => {
        t.addEventListener("click", () => {
            document.querySelectorAll(".tool").forEach(tt => tt.classList.remove("active"));
            t.classList.add("active");
            tool = t.dataset.tool;
        });
    });

    // 굵기 선택 //
    document.querySelectorAll(".size").forEach(s => {
        s.addEventListener("click", () => {
            document.querySelectorAll(".size").forEach(ss => ss.classList.remove("active"));
            s.classList.add("active");
            brushSize = parseInt(s.dataset.size);
        });
    });

    // 그림 그리기 기능 //
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        const x = e.offsetX;
        const y = e.offsetY;

        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = brushColor;

        switch (tool) {
            case "pencil":
                ctx.globalAlpha = 1.0;
                ctx.shadowBlur = 0;
                ctx.lineWidth = brushSize;
                break;

            case "crayon":
                ctx.globalAlpha = 0.3;
                ctx.shadowBlur = 0;
                ctx.lineWidth = brushSize * 1.5;
                for (let i = 0; i < 6; i++) {
                    const offsetX = (Math.random() - 0.5) * brushSize * 2;
                    const offsetY = (Math.random() - 0.5) * brushSize * 2;
                    ctx.beginPath();
                    ctx.arc(x + offsetX, y + offsetY, Math.random() * 2 + 0.5, 0, Math.PI * 2);
                    ctx.fillStyle = brushColor;
                    ctx.fill();
                }
                return;

            case "brush":
                ctx.globalAlpha = 0.7;
                ctx.shadowBlur = 12;
                ctx.shadowColor = brushColor;
                ctx.lineWidth = brushSize * 2.5;
                break;

            case "eraser":
                ctx.globalAlpha = 1.0;
                ctx.shadowBlur = 0;
                ctx.strokeStyle = "#ffffff";
                ctx.lineWidth = 25;
                break;
        }

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    //  전체 지우기 //
    const trashcan = document.getElementById("trashcan");
    if (trashcan) {
        trashcan.addEventListener("click", () => {
            if (confirm("정말 모든 그림을 지울까요?")) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        });
    }

    //  저장 + 페이지 이동 //
    const saveButton = document.getElementById("musicDrawSaveButton");
    if (saveButton) {
        saveButton.addEventListener("click", () => {
            const drawingData = canvas.toDataURL("image/png");

            localStorage.setItem("savedDrawing", drawingData);

            const link = document.createElement("a");
            link.download = "my_drawing.png";
            link.href = drawingData;
            link.click();

            setTimeout(() => {
                window.location.href = "worry-doll-result.html";
            }, 1000);
        });
    }
}
