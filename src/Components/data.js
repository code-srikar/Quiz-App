
let nums = new Set();
while(nums.size!==5){
    nums.add(Math.floor(Math.random() * 22))
}

let num = [];

for(var value of nums){
    num.push(value)
}

// console.log([...nums])
// console.log(num[0])

const data = [
    {
        question: "What is the function used to read CSV files into R?",
        option1: "Csv()",
        option2: "Read.csv()",
        option3: "Read_csv()",
        option4: "B & c",
        ans:4
    },
    {
        question: "What does MATLAB stand for?",
        option1: "Matrix Laboratory",
        option2: "Mathematical Laboratory",
        option3: "Methodical Laboratory",
        option4: "None of the above",
        ans: 1
    },
    {
        question: "When did PowerShell become open-source and cross-platform?",
        option1: "November 2006",
        option2: "August 18, 2016",
        option3: "1 October 2003",
        option4: "December 2012",
        ans: 2
    },
    {
        question: "Which scripting language is used in PowerShell?",
        option1: "Python",
        option2: "JavaScript",
        option3: "PowerShell Scripting Language",
        option4: "Ruby",
        ans: 3
    },
    {
        question: "Which is a python package used for 2D graphics?",
        option1: "Matplotlib.pyplot",
        option2: "Matplotlib.pip",
        option3: "Matplotlib.numpy",
        option4: "Matplotlib.plt",
        ans: 1
    },
    {
        question: "Identify the package manager for Python packages, or modules.",
        option1: "Matplotlib",
        option2: "PIP",
        option3: "Plt.show()",
        option4: "Python Package",
        ans: 2
    },
    {
        question: "Which of the following thing can be data in Pandas?",
        option1: "A python dict",
        option2: "An ndarray",
        option3: "A scalar value",
        option4: "All of the mentioned",
        ans: 4
    },
    {
        question: "C programming language was developed in 1972 by ________________ at bell laboratories of AT&T (American Telephone & Telegraph).",
        option1: "Ken Thompson",
        option2: "Peter Norton",
        option3: "Dennis Ritchie",
        option4: "Martin Richards",
        ans: 3
    },
    {
        question: "Which of the following special symbol can be used in a variable name?",
        option1: "* (asterisk)",
        option2: "- (hyphen)",
        option3: "| (pipeline)",
        option4: "_ (underscore)",
        ans: 4
    },
    {
        question: "Information on a computer is stored as what?",
        option1: "Analog Data",
        option2: "Digital Data",
        option3: "Modern Data",
        option4: "Watts Data",
        ans: 2
    },
    {
        question: "C, BASIC, COBOL and Java are examples of languages.",
        option1: "Low-Level",
        option2: "Computer",
        option3: "System Programming",
        option4: "High-Level",
        ans: 4
    },
    {
        question: "Most Web sites have a main page, the, which acts as a doorway to the rest of the Web site pages.",
        option1: "Search Engine",
        option2: "Home Page",
        option3: "Browser",
        option4: "URL",
        ans: 2
    },
    {
        question: "An email account includes a storage area, often called a(n)-",
        option1: "Attachment",
        option2: "Hyperlink",
        option3: "Mailbox",
        option4: "IP address",
        ans: 3
    },
    {
        question: "The is the box that houses the most important parts of a computer system.",
        option1: "Software",
        option2: "Hardware",
        option3: "Input device",
        option4: "System Unit",
        ans: 4
    },
    {
        question: "What type of computer could be found in a digital watch?",
        option1: "Mainframe computer",
        option2: "Supercomputer",
        option3: "Embedded computer",
        option4: "Notebook computer",
        ans: 3
    },
    {
        question: "What is a modem connected to?",
        option1: "Processor",
        option2: "Mother board",
        option3: "Printer",
        option4: "Phone line",
        ans: 4
    },
    {
        question: "The space in your computer that loads and works with data-",
        option1: "Cache memeory",
        option2: "CPU",
        option3: "Megabyte",
        option4: "RAM memory",
        ans: 4
    },
    {
        question: "What is a correct syntax to output 'Hello World' in Java?",
        option1: "echo(\"Hello World\");",
        option2: "Console.WriteLine(\"Hello World\");",
        option3: "print (\"Hello World\");",
        option4: "System.out.println(\"Hello World\");",
        ans: 4
    },
    {
        question: "How do you create a variable with the floating number 2.8?",
        option1: "byte x = 2.8f",
        option2: "float x = 2.8f;",
        option3: "x = 2.8f;",
        option4: "int x = 2.8f;",
        ans: 2
    },
    {
        question: "Who invented Java Programming?",
        option1: "Guido van Rossum",
        option2: "James Gosling",
        option3: "Dennis Ritchie",
        option4: "Bjarne Stroustrup",
        ans: 2
    },
    {
        question: "Which statement is true about Java?",
        option1: "Java is a sequence-dependent programming language",
        option2: "Java is a code dependent programming language",
        option3: "Java is a platform-dependent programming language",
        option4: "Java is a platform-independent programming language",
        ans: 4
    },
    {
        question: "Which component is used to compile, debug and execute the java programs?",
        option1: "JRE",
        option2: "JIT",
        option3: "JDK",
        option4: "JVM",
        ans: 3
    },
];

export let main_data = [data[num[0]],data[num[1]],data[num[2]],data[num[3]],data[num[4]]];
