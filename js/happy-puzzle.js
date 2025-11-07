document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".happy-puzzle-section");


    const pieces = document.querySelectorAll(".puzzle-piece");
    const dropZones = document.querySelectorAll(".drop-zone");
    let correctCount = 0;

    pieces.forEach(piece => {
        piece.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain", e.target.dataset.index);
            setTimeout(() => e.target.classList.add("dragging"), 0);
        });
        piece.addEventListener("dragend", e => e.target.classList.remove("dragging"));
    });

    dropZones.forEach(zone => {
        zone.addEventListener("dragover", e => {
            e.preventDefault();
            zone.classList.add("hover");
        });

        zone.addEventListener("dragleave", () => {
            zone.classList.remove("hover");
        });

        zone.addEventListener("drop", e => {
            e.preventDefault();
            zone.classList.remove("hover");

            const draggedIndex = e.dataTransfer.getData("text/plain");
            const correctIndex = zone.dataset.index;

            if (draggedIndex === correctIndex) {
                const draggedPiece = document.querySelector(`.puzzle-piece[data-index='${draggedIndex}']`);
                zone.appendChild(draggedPiece);
                draggedPiece.style.width = "100%";
                draggedPiece.style.height = "100%";
                draggedPiece.draggable = false;
                draggedPiece.classList.add("solved");

                correctCount++;
                if (correctCount === 4) {
                    setTimeout(() => {
                        window.location.href = "happy-puzzle-result.html";
                    }, 1000);
                }
            } else {
                zone.classList.add("shake");
                setTimeout(() => zone.classList.remove("shake"), 300);
            }
        });
    });
});
