// Check Radio Button Questions
function checkChoiceQuestions() {
    let items = document.querySelectorAll('.question-item');
    let correct = 0;

    items.forEach(item => {
        let selected = item.querySelector('input[type="radio"]:checked');
        let answer = item.getAttribute('data-correct');

        if (selected && selected.value === answer) {
            correct++;
            item.style.backgroundColor = 'var(--correct-bg)';
            item.style.borderColor = 'var(--correct-border)';
        } else {
            item.style.backgroundColor = 'var(--wrong-bg)';
            item.style.borderColor = 'var(--wrong-border)';
        }
    });

    document.getElementById('mc-score').innerText = 
        `Your Result: ${correct} / ${items.length}`;
}

// Check Fill-in Text Questions
function checkGapQuestions() {
    let inputs = document.querySelectorAll('.gap-item input[type="text"]');
    let correct = 0;

    inputs.forEach(input => {
        let expected = input.getAttribute('data-answer').trim().toLowerCase();
        let userAns = input.value.trim().toLowerCase();

        if (userAns === expected) {
            correct++;
            input.style.borderColor = 'var(--correct-border)';
            input.style.backgroundColor = 'var(--correct-bg)';
        } else {
            input.style.borderColor = 'var(--wrong-border)';
            input.style.backgroundColor = 'var(--wrong-bg)';
        }
    });

    document.getElementById('gap-score').innerText = 
        `Your Result: ${correct} / ${inputs.length}`;
}

// Toggle Official Answers
function toggleAnswers() {
    let box = document.getElementById('answers-toggle');
    box.classList.toggle('hidden');
}
