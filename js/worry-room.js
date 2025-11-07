document.addEventListener("DOMContentLoaded", () => {
    const room = document.getElementById("room");
    const furnitures = document.querySelectorAll(".furniture");
    const saveButton = document.getElementById("saveRoom");

    // html2canvas 라이브러리 누락되지 않게 함 //
    if (typeof html2canvas === "undefined") {
        console.error("⚠️ html2canvas 라이브러리가 로드되지 않았습니다. worry-room.html에 CDN을 추가해주세요.");
        return;
    }

    let offsetX, offsetY;

    // 가구 드래그 //
    furnitures.forEach((furniture) => {
        furniture.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("src", furniture.src);
        });
    });

    room.addEventListener("dragover", (e) => e.preventDefault());

    room.addEventListener("drop", (e) => {
        e.preventDefault();
        const src = e.dataTransfer.getData("src");
        if (!src) return;

        const newItem = document.createElement("img");
        newItem.src = src;
        newItem.classList.add("placed-furniture");
        newItem.style.position = "absolute";
        newItem.style.left = `${e.offsetX - 40}px`;
        newItem.style.top = `${e.offsetY - 40}px`;
        newItem.style.width = "80px";
        newItem.style.cursor = "grab";
        newItem.draggable = false;

        newItem.addEventListener("mousedown", (ev) => startDrag(ev, newItem));

        // 두 번 클릭 시 삭제 //
        newItem.addEventListener("dblclick", () => newItem.remove());

        room.appendChild(newItem);
    });

    function startDrag(e, target) {
        e.preventDefault();
        offsetX = e.offsetX;
        offsetY = e.offsetY;

        function moveAt(ev) {
            const rect = room.getBoundingClientRect();
            const x = ev.clientX - rect.left - offsetX;
            const y = ev.clientY - rect.top - offsetY;

            if (x >= 0 && x <= rect.width - target.offsetWidth) {
                target.style.left = `${x}px`;
            }
            if (y >= 0 && y <= rect.height - target.offsetHeight) {
                target.style.top = `${y}px`;
            }
        }

        function stopDrag() {
            room.removeEventListener("mousemove", moveAt);
            room.removeEventListener("mouseup", stopDrag);
        }

        room.addEventListener("mousemove", moveAt);
        room.addEventListener("mouseup", stopDrag);
    }

    // 저장하기 버튼 클릭 시 결과 페이지로 이동 //
    musicDrawSaveButton.addEventListener("click", () => {

        // 방 비어 있으면 경고 모달창 띄우기 //
        if (!room.querySelector("img")) {
            alert("방을 꾸민 뒤 저장해주세요!");
            return;
        }

        // 꾸민 방 이미지 저장 //
        html2canvas(room, { useCORS: true, allowTaint: true })
            .then((canvas) => {
                const roomImage = canvas.toDataURL("image/png");
                localStorage.setItem("worryRoomImage", roomImage);
                window.location.href = "worry-room-result.html";
            })
            .catch((error) => {
                console.error("html2canvas 오류:", error);
                alert("이미지를 저장하는 중 문제가 발생했어요 😢");
            });
    });
});
