document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.getElementById('text');
    const speakBtn = document.getElementById('speak-btn');

    // Check for browser compatibility
    if (!('speechSynthesis' in window)) {
        alert('Your browser does not support speech synthesis. Please try a different browser.');
        return;
    }

    speakBtn.addEventListener('click', () => {
        const text = textArea.value;
        if (text.trim() !== '') {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            speechSynthesis.speak(utterance);
        } else {
            alert('Please enter some text to speak.');
        }
    });
});
