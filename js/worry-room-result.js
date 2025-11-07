document.addEventListener("DOMContentLoaded", () => {
    const resultRoom = document.getElementById("resultRoom");
    const savedRoom = localStorage.getItem("worryRoomImage");

    // 꾸민 방 이미지 표시 //
    if (savedRoom && resultRoom) {
        const roomImage = document.createElement("img");
        roomImage.src = savedRoom;
        roomImage.alt = "꾸민 방 이미지";
        roomImage.classList.add("decorated-room");
        resultRoom.appendChild(roomImage);
    } else {
        // 저장된 이미지 없을 시 기본 방 표시 //
        const defaultImage = document.createElement("img");
        defaultImage.src = "image/activity/room/방.jpg";
        defaultImage.alt = "기본 방 이미지";
        resultRoom.appendChild(defaultImage);
    }

    // 끝내기 버튼 //
    const endButton = document.getElementById("endButton");
    if (endButton) {
        endButton.addEventListener("click", () => {

            localStorage.removeItem("worryRoomImage");

            localStorage.setItem("summaryText", "걱정이 사라지는 편안한 나만의 방을 꾸며보았어요!");
            localStorage.setItem("emotionName", "걱정");
            localStorage.setItem("emotionImage", "image/emotion/걱정.png");
            localStorage.setItem("parentPage", "parent-worry.html");

            window.location.href = "index.html";
        });
    }
});
