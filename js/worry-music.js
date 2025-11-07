document.addEventListener("DOMContentLoaded", () => {
    // 음악 플레이어 //
    const audio = new Audio("../music/솜사탕_동요.mp3");
    const progressBar = document.querySelector(".music-progress");
    const playPauseButton = document.getElementById("playPauseButton");
    const rewindButton = document.getElementById("rewindButton");
    const forwardButton = document.getElementById("forwardButton");

    let playing = false;

    playPauseButton.addEventListener("click", () => {
        if (!playing) {
            audio.play();
            playPauseButton.style.backgroundImage = "url('../image/button/일시정지버튼.png')";
            playing = true;
        } else {
            audio.pause();
            playPauseButton.style.backgroundImage = "url('../image/button/재생버튼.png')";
            playing = false;
        }
    });

    // 로딩바 //
    audio.addEventListener("timeupdate", () => {
        if (audio.duration) {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
        }
    });

    // 음악 이전 버튼 //
    rewindButton.addEventListener("click", () => {
        audio.currentTime = Math.max(0, audio.currentTime - 5);
    });

    // 음악 다음 버튼 //
    forwardButton.addEventListener("click", () => {
        audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
    });

    // 음악 종료 시 결과 페이지로 이동 //
    audio.addEventListener("ended", () => {
        playPauseButton.style.backgroundImage = "url('../image/button/재생버튼.png')";
        playing = false;
        progressBar.style.width = "0%";

        setTimeout(() => {
            window.location.href = "worry-music-result.html";
        }, 1300);
    });
});
