const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    const errorModal = document.querySelector('.error-modal');
    const errorMessage = document.querySelector('.error-message');

    // Initially set heart to empty
    heart.textContent = EMPTY_HEART;

    heart.addEventListener('click', () => {
        mimicServerCall()
            .then(() => {
                // On success: change heart to full
                heart.textContent = FULL_HEART;
                heart.classList.add('activated-heart');
            })
            .catch((error) => {
                // On failure: show error modal
                errorModal.classList.remove('hidden');
                errorMessage.textContent = error;

                setTimeout(() => {
                    errorModal.classList.add('hidden');
                }, 3000);
            });
    });

    // Toggle heart state on click
    heart.addEventListener('click', () => {
        if (heart.classList.contains('activated-heart')) {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove('activated-heart');
        }
    });
});