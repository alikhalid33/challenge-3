document.addEventListener('DOMContentLoaded', () => {
    const ratingButtons = document.querySelectorAll('.rating-btn');
    let selectedRating = null;

    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('selected')) {
                button.classList.remove('selected');
                selectedRating = null;
            } else {
                ratingButtons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                selectedRating = button.textContent;
            }
        });
    });

    const submitButton = document.querySelector('.submit-btn');
    submitButton.addEventListener('click', () => {
        if (selectedRating) {
            alert(`You rated us: ${selectedRating}`);
        } else {
            alert('Please select a rating.');
        }
    });
});

