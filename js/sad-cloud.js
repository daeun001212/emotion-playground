document.addEventListener("DOMContentLoaded", () => {
    const emotions = document.querySelectorAll(".emotion");
    const cloudArea = document.getElementById("cloudArea");
    const saveButton = document.getElementById("saveButton");
    const placedEmotions = [];

    // 감정 드래그 //
    emotions.forEach(emotion => {
        emotion.addEventListener("dragstart", dragStart);
    });

    cloudArea.addEventListener("dragover", dragOver);
    cloudArea.addEventListener("drop", drop);

    function dragStart(e) {
        e.dataTransfer.setData("text/plain", e.target.dataset.name);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const emotionName = e.dataTransfer.getData("text/plain");
        const draggedEmotion = [...emotions].find(em => em.dataset.name === emotionName);
        if (!draggedEmotion) return;

        const rect = cloudArea.getBoundingClientRect();
        const x = e.clientX - rect.left - 30;
        const y = e.clientY - rect.top - 30;

        const clone = draggedEmotion.cloneNode(true);
        clone.style.left = `${x}px`;
        clone.style.top = `${y}px`;
        clone.draggable = false;
        cloudArea.appendChild(clone);

        placedEmotions.push({ name: emotionName, src: draggedEmotion.src, x, y });
    }

    // 저장하기 버튼 클릭 시 결과 페이지로 이동 //
    musicDrawSaveButton.addEventListener("click", () => {
        localStorage.setItem("placedEmotions", JSON.stringify(placedEmotions));
        window.location.href = "sad-cloud-result.html";
    });
});
