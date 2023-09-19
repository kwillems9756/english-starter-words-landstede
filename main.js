/* CONSTANTS */

/**
 * A constant containing all the questions and answers
 * @type {[{question: string, answer: string}]}
 */
const data = [
  {
    "question": "network administrator",
    "answer": "netwerkbeheerder"
  },
  {
    "question": "ICT administrator",
    "answer": "ict-beheerder"
  },
  {
    "question": "ICT assistant",
    "answer": "ict-medewerker"
  },
  {
    "question": "application developer",
    "answer": "applicatieontwikkelaar"
  },
  {
    "question": "visit a company",
    "answer": "een bedrijf bezoeken"
  },
  {
    "question": "take a seat",
    "answer": "plaatsnemen"
  },
  {
    "question": "fill in a form / complete a form",
    "answer": "een formulier invullen"
  },
  {
    "question": "department",
    "answer": "afdeling"
  },
  {
    "question": "reception desk",
    "answer": "receptiebalie"
  },
  {
    "question": "foreign visitor / foreign guest",
    "answer": "buitenlandse gast"
  },
  {
    "question": "folder",
    "answer": "map"
  },
  {
    "question": "answer questions",
    "answer": "vragen beantwoorden"
  },
  {
    "question": "make an appointment",
    "answer": "een afspraak maken"
  },
  {
    "question": "offer help / offer assistance",
    "answer": "hulp aanbieden"
  },
  {
    "question": "receive visitors",
    "answer": "bezoekers ontvangen"
  },
  {
    "question": "show somebody the way",
    "answer": "iemand de weg wijzen"
  },
  {
    "question": "contact somebody",
    "answer": "contact met iemand opnemen"
  },
  {
    "question": "recognise",
    "answer": "herkennen"
  },
  {
    "question": "main entrance",
    "answer": "hoofdingang"
  },
  {
    "question": "invitation",
    "answer": "uitnodiging"
  },
  {
    "question": "confirm an appointment",
    "answer": "een afspraak bevestigen"
  },
  {
    "question": "send a confirmation",
    "answer": "een bevestiging sturen"
  },
  {
    "question": "cancel a meeting",
    "answer": "een vergadering afzeggen"
  },
  {
    "question": "disassemble / dismantle",
    "answer": "demonteren"
  },
  {
    "question": "assemble",
    "answer": "assembleren"
  },
  {
    "question": "implement",
    "answer": "implementeren"
  },
  {
    "question": "testing environment",
    "answer": "testomgeving"
  },
  {
    "question": "user",
    "answer": "gebruiker"
  },
  {
    "question": "parts",
    "answer": "onderdelen"
  },
  {
    "question": "functional design",
    "answer": "functioneel ontwerp"
  },
  {
    "question": "careful",
    "answer": "voorzichtig"
  },
  {
    "question": "certainly / sure",
    "answer": "zeker"
  },
  {
    "question": "invoice / bill",
    "answer": "rekening / factuur"
  },
  {
    "question": "colleague",
    "answer": "collega"
  },
  {
    "question": "customer / client",
    "answer": "klant / opdrachtgever"
  },
  {
    "question": "lately",
    "answer": "de laatste tijd"
  },
  {
    "question": "for example",
    "answer": "bijvoorbeeld"
  },
  {
    "question": "instructions",
    "answer": "instructie"
  },
  {
    "question": "install",
    "answer": "installeren"
  },
  {
    "question": "unfortunately",
    "answer": "helaas"
  },
  {
    "question": "perhaps / maybe",
    "answer": "misschien"
  },
  {
    "question": "polite",
    "answer": "beleefd"
  },
  {
    "question": "estimation",
    "answer": "schatting"
  },
  {
    "question": "employee",
    "answer": "werknemer"
  },
  {
    "question": "employer",
    "answer": "werkgever"
  },
  {
    "question": "meanwhile / in the meantime",
    "answer": "ondertussen"
  },
  {
    "question": "impression",
    "answer": "indruk"
  },
  {
    "question": "branch",
    "answer": "vestiging"
  },
  {
    "question": "cancellation",
    "answer": "annulering"
  },
  {
    "question": "user friendly",
    "answer": "gebruiksvriendelijk"
  },
  {
    "question": "template",
    "answer": "sjabloon"
  },
  {
    "question": "project based",
    "answer": "projectmatig"
  },
  {
    "question": "have access",
    "answer": "toegang krijgen"
  },
  {
    "question": "urgent",
    "answer": "dringend"
  },
  {
    "question": "flow chart",
    "answer": "diagram"
  },
  {
    "question": "attention",
    "answer": "aandacht"
  },
  {
    "question": "available",
    "answer": "beschikbaar"
  },
  {
    "question": "compare to",
    "answer": "vergelijken met"
  },
  {
    "question": "compete",
    "answer": "concurreren"
  },
  {
    "question": "competitive",
    "answer": "concurrerend"
  },
  {
    "question": "considerable",
    "answer": "flink / aanzienlijk"
  },
  {
    "question": "attachment",
    "answer": "bijlage"
  },
  {
    "question": "forward",
    "answer": "doorsturen"
  },
  {
    "question": "content",
    "answer": "inhoud"
  },
  {
    "question": "table of contents",
    "answer": "inhoudsopgave"
  },
  {
    "question": "continue",
    "answer": "doorgaan"
  },
  {
    "question": "contribute to",
    "answer": "bijdragen aan"
  },
  {
    "question": "guidelines",
    "answer": "richtlijnen"
  },
  {
    "question": "decide",
    "answer": "beslissen"
  },
  {
    "question": "operating system",
    "answer": "besturingssysteem"
  },
  {
    "question": "exchange",
    "answer": "uitwisselen"
  },
  {
    "question": "demand",
    "answer": "eisen"
  },
  {
    "question": "depend on",
    "answer": "afhankelijk zijn van"
  },
  {
    "question": "device",
    "answer": "apparaat"
  },
  {
    "question": "distance",
    "answer": "afstand"
  },
  {
    "question": "additional",
    "answer": "aanvullend"
  },
  {
    "question": "invalid",
    "answer": "ongeldig"
  },
  {
    "question": "double",
    "answer": "verdubbelen"
  },
  {
    "question": "solve",
    "answer": "oplossen"
  },
  {
    "question": "usually",
    "answer": "meestal"
  },
  {
    "question": "the computer froze",
    "answer": "de computer liep vast"
  },
  {
    "question": "expand",
    "answer": "uitbreiden"
  },
  {
    "question": "expansion",
    "answer": "uitbreiding"
  },
  {
    "question": "familiar with",
    "answer": "bekend met"
  },
  {
    "question": "figures / numbers",
    "answer": "cijfers"
  },
  {
    "question": "gradually",
    "answer": "langzamerhand"
  },
  {
    "question": "issue / matter",
    "answer": "kwestie"
  },
  {
    "question": "objective / goal",
    "answer": "doel"
  },
  {
    "question": "prepare",
    "answer": "voorbereiden"
  },
  {
    "question": "profit",
    "answer": "winst"
  },
  {
    "question": "recover",
    "answer": "herstellen"
  },
  {
    "question": "recovery",
    "answer": "herstel"
  },
  {
    "question": "report",
    "answer": "verslag"
  },
  {
    "question": "screen",
    "answer": "scherm"
  },
  {
    "question": "security",
    "answer": "veiligheid"
  },
  {
    "question": "password",
    "answer": "wachtwoord"
  },
  {
    "question": "select / choose",
    "answer": "kiezen"
  },
  {
    "question": "present / current",
    "answer": "huidig"
  },
  {
    "question": "previous",
    "answer": "vorig / vorige"
  },
  {
    "question": "put through",
    "answer": "doorverbinden"
  },
  {
    "question": "surname",
    "answer": "achternaam"
  },
  {
    "question": "peripheral devices / peripherals",
    "answer": "randapparatuur"
  },
  {
    "question": "step-by-step",
    "answer": "stapsgewijs"
  },
  {
    "question": "general manager",
    "answer": "algemeen directeur"
  },
  {
    "question": "department manager",
    "answer": "afdelingshoofd"
  },
  {
    "question": "colleague",
    "answer": "collega"
  },
  {
    "question": "registration form",
    "answer": "registratieformulier"
  },
  {
    "question": "master the English language",
    "answer": "de Engelse taal beheersen"
  },
  {
    "question": "Dear Sir/Madam",
    "answer": "Geachte heer/mevrouw"
  },
  {
    "question": "Yours faithfully/sincerely",
    "answer": "Hoogachtend"
  },
  {
    "question": "Kind regards",
    "answer": "Met vriendelijke groet"
  },
  {
    "question": "receiver",
    "answer": "ontvanger"
  },
  {
    "question": "sender",
    "answer": "afzender"
  },
  {
    "question": "typing error",
    "answer": "typfout"
  },
  {
    "question": "invoice",
    "answer": "factuur"
  },
  {
    "question": "VAT",
    "answer": "BTW"
  },
  {
    "question": "automatic signature",
    "answer": "automatische handtekening"
  },
  {
    "question": "first impression",
    "answer": "eerste indruk"
  },
  {
    "question": "appearance",
    "answer": "uiterlijk"
  },
  {
    "question": "client delivery",
    "answer": "klantoplevering"
  },
  {
    "question": "client meeting",
    "answer": "klantgesprek"
  },
  {
    "question": "client request",
    "answer": "klantvraag"
  },
  {
    "question": "resources",
    "answer": "hulpmiddelen"
  },
  {
    "question": "error notification",
    "answer": "foutmelding"
  },
  {
    "question": "clean up",
    "answer": "opschonen"
  },
  {
    "question": "configure",
    "answer": "configureren"
  },
  {
    "question": "notification form",
    "answer": "meldingsformulier"
  },
  {
    "question": "switch on",
    "answer": "aanzetten"
  },
  {
    "question": "switch off",
    "answer": "uitzetten"
  },
  {
    "question": "battery",
    "answer": "accu"
  },
  {
    "question": "power outlet",
    "answer": "stopcontact"
  },
  {
    "question": "ink cartridge",
    "answer": "inktpatroon"
  },
  {
    "question": "power supply",
    "answer": "voeding"
  },
  {
    "question": "complaint",
    "answer": "klacht"
  },
  {
    "question": "complain",
    "answer": "klagen"
  },
  {
    "question": "outdated",
    "answer": "verouderd"
  },
  {
    "question": "user manual",
    "answer": "gebruikershandleiding"
  },
  {
    "question": "switch on",
    "answer": "aanzetten"
  },
  {
    "question": "switch off",
    "answer": "uitzetten"
  },
  {
    "question": "table of contents",
    "answer": "inhoudsopgave"
  },
  {
    "question": "unauthorised",
    "answer": "onbevoegd"
  },
  {
    "question": "copier",
    "answer": "kopieerapparaat"
  },
  {
    "question": "discount",
    "answer": "korting"
  },
  {
    "question": "advantage",
    "answer": "voordeel"
  },
  {
    "question": "disadvantage",
    "answer": "nadeel"
  },
  {
    "question": "computer performance",
    "answer": "prestaties van de computer"
  },
  {
    "question": "replace",
    "answer": "vervangen"
  },
  {
    "question": "separate / separately",
    "answer": "afzonderlijk"
  },
  {
    "question": "pros / advantages",
    "answer": "voordelen"
  },
  {
    "question": "discuss",
    "answer": "bespreken"
  }
];

/**
 * How long to show a correction in seconds
 * @type {number}
 */
const CORRECTION_SHOW_TIME = 3;

/**
 * How many question only multiple choice should be shown
 * @type {number}
 */
const SHOW_MULTIPLE_CHOICE_UNTIL = 10;

/**
 * How many choices a multiple choice question should contain
 * @type {number}
 */
const MULTIPLE_CHOICE_CHOICE_AMOUNT = 4;

/* GLOBAL VARIABLES */

/**
 * An index that points to the current question in the data constant
 * @type {number}
 */
let currentQuestionId = 0;

/**
 * How many questions where answered correctly
 * @type {number}
 */
let points = 0;
/**
 * How many questions where answered
 * @type {number}
 */
let questionsDone = 0;

/* UTIL FUNCTIONS */

/**
 * A simple function that handles string comparisons that should not be uppercase sensitive
 * @param str1
 * @param str2
 * @returns {boolean}
 */
function notUppercaseSensitiveCompare(str1, str2){
    return str1.toLowerCase() === str2.toLowerCase();
}

/**
 * Randomize/Shuffle an array
 * @param {array} array The array to modify and shuffle
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

/* FORM HANDLER */

/**
 * Handle when the input is submitted
 * @param {HTMLFormElement} event
 */
function handleFormSubmit(event) {
    // disable form being sent
    event.preventDefault();

    /**
     * A variable pointing to the input element
     * @type {HTMLInputElement|HTMLSelectElement}
     */
    let answer = document.getElementById("answer");

    /**
     * The answer the user was expected/should have guessed
     * @type {string}
     */
    const correctAnswer = data[currentQuestionId].answer;

    // Check if answer was correct
    if(notUppercaseSensitiveCompare(answer.value, correctAnswer)) {
        // Reset the input, update the score and show a new question
        answer.value = "";
        handleScore(true);
        getRandomQuestion();
    } else {
        // Update the score, show what it should have been, wait 3 seconds then reset input and show another question
        handleScore(false);
        showCorrection();
        setTimeout(() => {
            answer.value = "";
            getRandomQuestion();
        }, CORRECTION_SHOW_TIME * 1000);
    }
}

/* INPUT GENERATORS */

/**
 * Generate a regular question input
 * @returns {HTMLInputElement}
 */
function generateQuestionInput() {
    /**
     * The question input element
     * @type {HTMLInputElement}
     */
    const element = document.createElement("input");
    element.id = "answer";
    element.type = "text";
    element.placeholder = "answer...";

    // disable auto- stuff
    element.autocomplete = "off";
    element.autocapitalize = "off";

    return element;
}

/**
 * Pick N amount of random (and unique) choices together with the expected one
 * @param {number} amount How many choices to pick
 * @returns {number[]} An array containing all the unique ids
 */
function pickMultipleChoiceChoices(amount = 4){
    /**
     * An array containing all the unique ids
     * @type {number[]}
     */
    let answerIds = [currentQuestionId];
    for(let i = 0; i < (amount-1); i++){
        /**
         * The random new unique id to add
         * @type {number}
         */
        let randomOtherChoice = Math.floor(Math.random()*data.length);
        while(answerIds.includes(randomOtherChoice)) {
            randomOtherChoice = Math.floor(Math.random()*data.length);
        }
        answerIds.push(randomOtherChoice);
    }
    // randomize the array so the correct answer isn't always at the start
    shuffleArray(answerIds);
    return answerIds;
}

/**
 * Generate a multiple choice question input (using a select/dropdown)
 * @param answerIds What random ids to use
 * @returns {HTMLSelectElement}
 */
function generateMultipleChoiceInput(answerIds) {
    /**
     * An array containing all the options
     * @type {HTMLOptionElement[]}
     */
    const answerElements = answerIds.map(answerId => {
        /**
         * The new option element for "answerId"
         * @type {HTMLOptionElement}
         */
        const optionElement = document.createElement("option");
        // Set both the value and innerText
        optionElement.value = data[answerId].answer;
        optionElement.innerText = data[answerId].answer;
        return optionElement;
    });
    /**
     * The Select element containing all the options
     * @type {HTMLSelectElement}
     */
    const element = document.createElement("select");
    element.id = "answer";
    // Add all the options
    answerElements.forEach(answerElement => element.appendChild(answerElement));
    return element;
}

/* QUESTION STUFF */

/**
 * Pick a new random question and show it
 */
function getRandomQuestion(){
    /**
     * What the new question's index will be
     * @type {number}
     */
    let newQuestionId = Math.floor(Math.random()*data.length);
    // make sure it is not the same as the current question
    while (newQuestionId === currentQuestionId) {
        newQuestionId = Math.floor(Math.random()*data.length);
    }

    // update the current question and show the question (a multiple choice if it is one of the first 10 questions, otherwise just a regular input)
    currentQuestionId = newQuestionId;
    showQuestion(questionsDone < SHOW_MULTIPLE_CHOICE_UNTIL);
}

/**
 * Display a correction on the screen with the correct answer
 */
function showCorrection(){
    /**
     * The element displaying the current question
     * @type {HTMLHeadingElement}
     */
    const questionElement = document.getElementById("question");
    questionElement.innerText = data[currentQuestionId].question + " = " + data[currentQuestionId].answer;
}

/**
 * Display a question on the screen
 * @param {boolean} isMultipleChoice Whether it should be multiple choice or not
 */
function showQuestion(isMultipleChoice = false) {
    /**
     * An element containing the question input
     * @type {HTMLInputElement|HTMLSelectElement}
     */
    let element;
    if(!isMultipleChoice) {
        element = generateQuestionInput();
    } else {
        const answerIds = pickMultipleChoiceChoices(MULTIPLE_CHOICE_CHOICE_AMOUNT);
        element = generateMultipleChoiceInput(answerIds);
    }

    /**
     * The element referenced to swap the input element in
     * @type {HTMLDivElement}
     */
    const inputContainer = document.getElementById("input");
    inputContainer.replaceChildren(element);

    // autofocus on it
    element.focus();

    // display the question to the h2
    let questionElement = document.getElementById("question");
    questionElement.innerText = data[currentQuestionId].question;
}

/* SCORE STUFF */

/**
 * Display the score on screen
 */
function showScore(){
    /**
     * The element where the score is displayed
     * @type {HTMLSpanElement}
     */
    const scoreElement = document.getElementById("score");

    /**
     * The default score is it is a zero-division (which always fails)
     * @type {number}
     */
    let score = 100;
    if(questionsDone !== 0) {
        // No zero division, so it can be calculated
        score = points / questionsDone * 100;
    }
    // Display a rounded percentage on the screen
    scoreElement.innerText = Math.round(score).toString();
}

/**
 * Increase the score and display it
 * @param {boolean} wasGood Whether the correct answer was given (and points can increase) or not
 */
function handleScore(wasGood) {
    if(wasGood){
        points++;
    }
    questionsDone++;
    showScore();
}

/**
 * Reset the score and question answers
 */
function resetScore(){
    points = 0;
    questionsDone = 0;
    getRandomQuestion();
    showScore();
}

/* MAIN */

window.addEventListener("load", async () => {
    // Load a random question
    getRandomQuestion();

    // setup form handler
    const formElement = document.getElementById("answerForm");
    formElement.addEventListener("submit", handleFormSubmit);

    // setup reset button
    const resetScoreButton = document.getElementById("reset-score");
    resetScoreButton.addEventListener("click", resetScore);
})

/* PWA */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
        .register("./serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
  })
}