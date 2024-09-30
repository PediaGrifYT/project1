// Prevent right-click menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Reload page if user leaves the tab or window
window.addEventListener('blur', reloadPage);
document.addEventListener('mouseleave', reloadPage);

// Open fullscreen on page load
function openFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}
window.onload = function() {
    openFullscreen();
    shuffleQuestions();
    checkAnswers(); // Ensure submit button visibility on page load
};

// Disable specific keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 't' || e.key === 'n') || e.key === 'F11') {
        e.preventDefault();
    }
});

// Prompt user before leaving the page
window.onbeforeunload = function() {
    return "Are you sure you want to leave this page?";
};

// Function to handle the submit button
function submitAnswers() {
    const answers = [];
    const questions = document.querySelectorAll('.question');

    questions.forEach((question, index) => {
        const questionText = question.querySelector('p').innerText;
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        const answerText = selectedOption ? selectedOption.nextElementSibling.innerText : 'No answer';

        answers.push({
            Question: questionText,
            Answer: answerText
        });
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(answers);
    XLSX.utils.book_append_sheet(wb, ws, "Responses");
    XLSX.writeFile(wb, "responses.xlsx");

    alert("Your answers have been saved as an Excel file.");
}

// Function to check if all questions are answered
function checkAnswers() {
    const questions = document.querySelectorAll('.question');
    let allAnswered = true;

    questions.forEach((question) => {
        const radios = question.querySelectorAll('input[type="radio"]');
        const isChecked = Array.from(radios).some(radio => radio.checked);
        if (!isChecked) {
            allAnswered = false;
        }
    });

    const submitButton = document.getElementById('submit-btn');
    if (allAnswered) {
        submitButton.style.display = 'block';
    } else {
        submitButton.style.display = 'none';
    }
}

// Add event listeners to each radio button to check answers on change
document.addEventListener('change', function(e) {
    if (e.target.type === 'radio') {
        checkAnswers();
    }
});

// Shuffle questions and display them
function shuffleQuestions() {
    const container = document.getElementById('questions-container');
    const questions = [
       
                {
                    question: "Which clause is used to filter records in a SQL query?",
                    options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"]
                },
                {
                    question: "Which of the following indexing techniques is used to index an entire row rather than a single column?",
                    options: ["B-tree", "hash", "B-Tree", "Composite"]
                },
                {
                    question: "Which operator is used to get the address of a variable in C?",
                    options: ["*", "&", "%", "@"]
                },
                {
                    question: "What is the size of an empty struct in C?",
                    options: ["0 bytes", "1 byte", "2 bytes", "Undefined"]
                },
                {
                    question: "Which header file should be included to use the malloc function in C?",
                    options: ["stdio.h", "stdlib.h", "string.h", "malloc.h"]
                },
                {
                    question: "Which of the following statements is used to exit a loop prematurely?",
                    options: ["exit", "break", "continue", "return"]
                },
        {
                    question: "Which of the following is not a valid storage class in C?",
                    options: ["auto", "register", "dynamic", "static"]
                },
        {
                    question: "Which of the following is a correct way to declare an object of a class in C++?",
                    options: ["class obj;", "obj class;", "class obj();", "ClassName obj;"]
                },
        {
                    question: "Which operator is used to access members of a structure through a pointer in C++?",
                    options: [".", "&", "->", "*"]
                },
        {
                    question: "Which of the following is the correct syntax to declare a constant variable in C?",
                    options: ["constant int x = 10;", "int x const = 10;", "const int x = 10;", "int const = 10;"]
                },
                {
                    question: "Which loop guarantees at least one iteration?",
                    options: ["for loop", "while loop", "do-while loop", "infinite loop"]
                },
                {
        
        
                    question: "In C, which function is used to dynamically allocate memory?",
                    options: ["alloc()", "malloc()", "memalloc()", "mallocate()"]
                },
        
        {
                    question: "Which type of polymorphism is achieved at compile time?",
                    options: ["Runtime polymorphism", " Function overriding", "Compile-time polymorphism", "Operator overriding"]
                },
        {
                    question: "Which header file is required for using the std::vector in C++?",
                    options: ["vector.h", "array.h", "vector", "list"]
        
                },
        {
                    question: "Which of the following is NOT a type of DBMS?",
                    options: ["Hierarchical", "Relational", "Network", "Spreadsheet"]
                },
        {
                    question: "Which of the following is a property of ACID transactions?",
                    options: ["consistency", "durability", "Isolation", "All the above"]
                },
        {
                    question: "In SQL, which command is used to retrieve data from a database?",
                    options: ["GET", "SELECT", "FETCH", "PULL"]
                },
        {
                    question: "Which of the following SQL commands is used to delete data from a table?",
                    options: ["REMOVE", "DELETE", "DROP", "TRUNCATE"]
                },
        {
                    question: "Which of the following is an example of a NoSQL database?",
                    options: ["MySQL", "Oracle", "MangoDB", "Microsoft SQL Server"]
                },
        {
                    question: "What does the term data redundancy refer to?",
                    options: ["The process of deleting duplicate data", " The unnecessary duplication of data", "The storage of data in multiple formats", " The backup of data across servers"]
                },
        {
                    question: "Which of the following is NOT a type of join in SQL?",
                    options: ["INNER JOIN", "OUTER JOIN", "CROSS JOIN", "FULL JOIN"]
                },
        
                {
                    question: "Which of the following is the correct way to define a pure virtual function in C++?",
                    options: ["virtual void show() = 0;", "virtual void show() = NULL;", "virtual void show() {} = 0;", "void virtual show() = 0;"]
                },
                {
                    question: "What is the size of an empty class in C++?",
                    options: ["0 bytes", "1 byte", "2 bytes", "Undefined"]
                },
                {
                    question: " In C++, which of the following is true about constructors?",
                    options: ["They do not return any value", "They can be virtual", "They can be inherited", " They can be static"]
                },
                {
                    question: "Which of the following cannot be used with the cin object?",
                    options: [">>", "get()", "ignore", "<<"]
                },
                {
                    question: "Which of the following is not a type of inheritance in C++?",
                    options: ["Single", "Double", "Multiple", "hierarchical"]
                },
                {
                    question: "Which of the following is the correct way to write a multi-line comment in Python?",
                    options: ["# This is a comment #", "'''This is a comment'''", "// This is a comment", "/* This is a comment */"]
                },
                {
                    question: "Which of the following functions is used to sort a list in Python?",
                    options: ["sort()", "order()", "arange()", "sortList()"]
                },
                {
                    question: "What is the primary key",
                    options: ["A key that unlocks a database", "A unique identifier for each record", "A foreign key", " None of the above"]
                },
                {
                    question: "Which SQL clauses is used to filter records in a query?",
                    options: ["SELECT", "ORDER BY", "WHERE", "GROUP BY"]
                },
                {
                    question: "In a star schema,what do you call the central table?",
                    options: ["Dimension table", "Fact table", "Join table", "Aggregate table"]
                },
                {
         
                    question: "What is a C Storage Class.?",
                    options: ["C Storage Class decides what is the default value of a variable", "C Storage Class decides what is the Scope and Life of a variable", "C Storage decides where to or which memory store the variable", "All the above"]
                },
                {
         
                    question: "Which of the following is not a storage class specifier in C?",
                    options: ["volatile", "extern", "auto", "register"]
                },
                {
         
                    question: "What is the inital value of register storage class specifier?",
                    options: ["0", "Null", " Garbage", "infinite"]
                },
                {
         
                    question: "The duration for which the variable retains a given value during the execution of a program?",
                    options: ["Internal linkage of a variable", "External linkage of a variable", "External linkage of a variable", "The portion of a program in which the variable may be visible"]
                },
                {
         
                    question: "Find a C Storage Class below?",
                    options: ["Auto", "Static", "Register and Extern", "All the above"]
                },
                {
         
                    question: "Every C Variable must have?",
                    options: ["Type", "Storage Class", "Both Type and Storage Class", "Either Type or Storage Class"]
                },
                {
         
                    question: "Variables of type auto, static and extern are all stored in ?",
                    options: ["ROM", "RAM", "CPU", "Compiler"]
                },
                {
                    question: "In C, static storage class cannot be used with _________",
                    options: ["Local variable", "Function name", "Function parameter", "Global variable"]
                }
    ];
    

    questions.sort(() => Math.random() - 0.5);
    container.innerHTML = '';

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionHTML = `
            <p>${index + 1}. ${q.question}</p>
            <ul>
                ${q.options.map((opt, i) => `
                    <li><input type="radio" name="q${index + 1}" id="q${index + 1}a${i}">
                    <label for="q${index + 1}a${i}">${opt}</label></li>
                `).join('')}
            </ul>
        `;
        questionDiv.innerHTML = questionHTML;
        container.appendChild(questionDiv);
    });
}

function reloadPage() {
    location.reload();
}
