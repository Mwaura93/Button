document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myBtn');
    const clickCountSpan = document.getElementById('clickCount');
    let clickCount = 0;

    button.addEventListener('click', () => {
        const name = prompt('What is your name?');
        if (name !== null && name.trim() !== "") {
            clickCount++;
            clickCountSpan.textContent = clickCount;
            console.log(`Name: ${name}, Click count: ${clickCount}`);
        } else {
            console.log('Name prompt cancelled or empty input.');
        }
    });
});
