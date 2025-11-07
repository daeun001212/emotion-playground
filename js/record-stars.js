const starsData = [
    {
        className: 'happy-stars',
        img: '노란 보석.png',
        desktop: [[32, 18], [32, 23], [32, 28], [32, 33], [32, 38]],
        mobile: [[32, 18], [32, 23], [32, 28], [32, 33], [32, 38]]
    },
    {
        className: 'sad-stars',
        img: '파란 보석.png',
        desktop: [[52, 54], [52, 59], [52, 64]],
        mobile: [[51, 56], [51, 61], [51, 66]]
    },
    {
        className: 'angry-stars',
        img: '빨간 보석.png',
        desktop: [[70, 12], [70, 17]],
        mobile: [[70, 13], [70, 18]]
    },
    {
        className: 'worry-stars',
        img: '초록 보석.png',
        desktop: [[90, 54], [90, 59], [90, 64]],
        mobile: [[89, 55], [89, 60], [89, 65]]
    },
];

const container = document.querySelector('.stars');
const mql = window.matchMedia('(max-width: 768px)');

function renderStars() {
    container.innerHTML = '';
    const isMobile = mql.matches;

    starsData.forEach(starType => {
        const positions = isMobile ? starType.mobile : starType.desktop;

        positions.forEach(([top, left]) => {
            const star = document.createElement('div');
            star.classList.add(starType.className);
            star.style.position = 'absolute';
            star.style.aspectRatio = '1/1';
            star.style.backgroundImage = `url('image/record/${starType.img}')`;
            star.style.backgroundSize = 'contain';
            star.style.backgroundRepeat = 'no-repeat';
            star.style.top = `${top}%`;
            star.style.left = `${left}%`;
            star.style.animation = 'twinkle 1.5s infinite ease-in-out alternate';
            if (isMobile) {
                star.style.width = 'clamp(24px, 4vw, 32px)';
            } else {
                star.style.width = 'clamp(40px, 3vw, 50px)';
            }

            container.appendChild(star);
        });
    });
}

renderStars();
mql.addEventListener('change', renderStars);
