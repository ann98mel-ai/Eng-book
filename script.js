function checkMultipleChoice() {
    let questions = document.querySelectorAll('.question');
    let correctCount = 0;

    questions.forEach(q => {
        let selected = q.querySelector('input[type="radio"]:checked');
        let answer = q.getAttribute('data-correct');
        
        if (selected && selected.value === answer) {
            correctCount++;
            q.style.backgroundColor = '#e8f8f5';
            q.style.borderLeft = '4px solid #2ecc71';
        } else {
            q.style.backgroundColor = '#fadbd8';
            q.style.borderLeft = '4px solid #e74c3c';
        }
    });

    document.getElementById('mc-result').innerText = 
        `Score: ${correctCount} / ${questions.length}`;
}

function checkGaps() {
    let inputs = document.querySelectorAll('input[type="text"]');
    let correctCount = 0;

    inputs.forEach(input => {
        let expected = input.getAttribute('data-answer').trim().toLowerCase();
        let userAns = input.value.trim().toLowerCase();

        if (userAns === expected) {
            correctCount++;
            input.style.borderColor = '#2ecc71';
            input.style.backgroundColor = '#e8f8f5';
        } else {
            input.style.borderColor = '#e74c3c';
            input.style.backgroundColor = '#fadbd8';
        }
    });

    document.getElementById('gap-result').innerText = 
        `Score: ${correctCount} / ${inputs.length}`;
}
