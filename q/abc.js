const questions = [
    {
        question: "Which of the following is a valid declaration in C?",
        options: [
            "1. short int x",
            "2. signed short x",
            "3. short x",
            "4. unsigned short x"
        ],
        choices: [
            "a) 3 and 4",
            "b) 2",
            "c) 1",
            "d) All the declarations are valid"
        ],
        answer: "d) All the declarations are valid"
    },
    {
        question: "Which of the following is true?",
        options: [],
        choices: [
            "a) fgets() can read a string with newline characters but a normal scanf() with %s cannot.",
            "b) fgets() can read a string with spaces but a normal scanf() with %s cannot.",
            "c) fgets() can always replace scanf() without any additional code.",
            "d) None of the listed options"
        ],
        answer: "b) fgets() can read a string with spaces but a normal scanf() with %s cannot."
    },
    {
        question: "Which of the following will be the correct code to print character 'A'?",
        options: [
            `a)
#include <stdio.h>
int main() {
    int ch = 65;
    printf("%c", ch);
    return 0;
}`,
            `b)
#include <stdio.h>
int main() {
    char ch = 'A';
    printf("%c", ch);
    return 0;
}`
        ],
        choices: [
            "a) Both a and b",
            "b) None of the listed options"
        ],
        answer: "a) Both a and b"
    },
    {
        question: "Which of the following function is used to input a single character?",
        options: [],
        choices: [
            "a) getch()",
            "b) Both getchar() and getch()",
            "c) gets()",
            "d) getchar()"
        ],
        answer: "b) Both getchar() and getch()"
    },
    {
        question: `#include <stdio.h>\nmain() {\n int x; \n x = 123;\n printf("[%3d]\\n", x); \n printf("[%4d]\\n", x);\n}`,
        options: [],
        choices: [
            "a) [123] [0123]",
            "b) [123] [123 ]",
            "c) [123] [ 123]",
            "d) [123] [123]"
        ],
        answer: "c) [123] [ 123]"
    },
    {
        question: "Which of the following format specifier can be used to print a number '45'?",
        options: [],
        choices: [
            "a) %i",
            "b) %d",
            "c) %ld",
            "d) All of the mentioned options"
        ],
        answer: "d) All of the mentioned options"
    },
    {
        question: "Which of the following scanf statement is used to scan a maximum of 4 characters from the console?",
        options: [],
        choices: [
            'a) scanf("%4c", str);',
            'b) scanf("%4s", str);',
            'c) scanf("%4c", &str);',
            'd) scanf("%4s", &str);'
        ],
        answer: 'd) scanf("%4s", &str);'
    },
    {
        question: `What will be the output for the given program?\nint main() {\n     int a = 20 * 2 / 2;\n     printf("%d", a);\n}`,
        options: [],
        choices: [
            "a) 10",
            "b) 20",
            "c) 5",
            "d) 40"
        ],
        answer: "b) 20"
    },
    {
        question: "Find the expression(s) which gives the result 46.",
        options: [],
        choices: [
            "a) 10 / 5 * 20",
            "b) 6 * 6 + 10",
            "c) 7 * 6 + 1 % 6",
            "d) 6 % 2 * 7 * 6"
        ],
        answer: "b) 6 * 6 + 10"
    },
    {
        question: `What will be the value of m after execution of the given program?\nint main() {\n       int i = 2, j = 2, k = 0;\n       int m = ++i + j++ * k--;\n       printf("%d", m);\n}`,
        options: [],
        choices: [
            "a) 0",
            "b) 3",
            "c) 6",
            "d) 5"
        ],
        answer: "b) 3"
    }
];

const quizContainer = document.getElementById('quiz');

function loadQuiz() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionTitle = document.createElement('div');
        questionTitle.classList.add('question-title');
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);

        if (q.options.length > 0) {
            const options = document.createElement('pre');
            options.textContent = q.options.join('\n');
            questionDiv.appendChild(options);
        }

        const choicesDiv = document.createElement('div');
        choicesDiv.classList.add('choices');
        q.choices.forEach(choice => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = choice;
            label.appendChild(input);
            label.appendChild(document.createTextNode(choice));
            choicesDiv.appendChild(label);
            choicesDiv.appendChild(document.createElement('br'));
        });
        questionDiv.appendChild(choicesDiv);
        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
    });
    document.getElementById('result').textContent = `You got ${score} out of ${questions.length} correct!`;
}

window.onload = loadQuiz;
