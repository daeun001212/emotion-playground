document.querySelector('.back-button').addEventListener('click', () => {
            if (document.referrer) {
                history.back();
            } else {
                window.location.href = 'index.html';
            }
        });