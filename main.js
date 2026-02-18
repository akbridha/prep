// B2 Vocabulary Quiz — Question Bank (100 questions)
const questionBank = [
    // --- Original 50 ---
    { question: "Choose the word that is closest in meaning to 'meticulous':", options: ["Careless", "Thorough", "Quick", "Lazy"], correctAnswer: 1 },
    { question: "The manager decided to _______ the meeting until next week.", options: ["postpone", "cancel", "arrange", "shorten"], correctAnswer: 0 },
    { question: "What is the opposite of 'abundant'?", options: ["Plentiful", "Scarce", "Excessive", "Sufficient"], correctAnswer: 1 },
    { question: "Choose the correct synonym for 'ambiguous':", options: ["Clear", "Obvious", "Vague", "Precise"], correctAnswer: 2 },
    { question: "She has a _______ for remembering names and faces.", options: ["knack", "lack", "block", "shock"], correctAnswer: 0 },
    { question: "The word 'ubiquitous' means:", options: ["Rare", "Present everywhere", "Invisible", "Ancient"], correctAnswer: 1 },
    { question: "Choose the antonym of 'pragmatic':", options: ["Practical", "Realistic", "Idealistic", "Sensible"], correctAnswer: 2 },
    { question: "The company's _______ policy led to many complaints from employees.", options: ["flexible", "rigid", "fair", "generous"], correctAnswer: 1 },
    { question: "What does 'to scrutinize' mean?", options: ["To ignore", "To examine closely", "To approve quickly", "To reject"], correctAnswer: 1 },
    { question: "Choose the word that best completes: 'The politician's speech was deliberately _______ to avoid controversy.'", options: ["provocative", "inflammatory", "vague", "offensive"], correctAnswer: 2 },
    { question: "The synonym of 'resilient' is:", options: ["Fragile", "Tough", "Weak", "Sensitive"], correctAnswer: 1 },
    { question: "To 'mitigate' a problem means to:", options: ["Make it worse", "Ignore it", "Make it less severe", "Create it"], correctAnswer: 2 },
    { question: "What is the meaning of 'procrastinate'?", options: ["To act quickly", "To delay action", "To plan ahead", "To work hard"], correctAnswer: 1 },
    { question: "Choose the correct word: 'Her _______ behavior at the party embarrassed everyone.'", options: ["discreet", "modest", "obnoxious", "humble"], correctAnswer: 2 },
    { question: "The antonym of 'superficial' is:", options: ["Shallow", "Profound", "Surface", "Light"], correctAnswer: 1 },
    { question: "'Unprecedented' means:", options: ["Common", "Expected", "Never happened before", "Repeated"], correctAnswer: 2 },
    { question: "Choose the synonym for 'eloquent':", options: ["Silent", "Articulate", "Confused", "Quiet"], correctAnswer: 1 },
    { question: "The word 'feasible' means:", options: ["Impossible", "Possible to do", "Difficult", "Unlikely"], correctAnswer: 1 },
    { question: "To 'exacerbate' a situation means to:", options: ["Improve it", "Make it worse", "Solve it", "Ignore it"], correctAnswer: 1 },
    { question: "Choose the correct word: 'The witness gave a _______ account of the accident.'", options: ["vague", "detailed", "brief", "confused"], correctAnswer: 1 },
    { question: "What is the opposite of 'temporary'?", options: ["Brief", "Short-term", "Permanent", "Fleeting"], correctAnswer: 2 },
    { question: "'Inevitable' means something that is:", options: ["Avoidable", "Certain to happen", "Unlikely", "Preventable"], correctAnswer: 1 },
    { question: "The synonym of 'comprehensive' is:", options: ["Limited", "Partial", "Thorough", "Incomplete"], correctAnswer: 2 },
    { question: "To 'consolidate' means to:", options: ["Divide", "Combine into one", "Separate", "Scatter"], correctAnswer: 1 },
    { question: "Choose the word that means 'happening at the same time':", options: ["Sequential", "Simultaneous", "Consecutive", "Successive"], correctAnswer: 1 },
    { question: "The antonym of 'hostile' is:", options: ["Aggressive", "Unfriendly", "Friendly", "Antagonistic"], correctAnswer: 2 },
    { question: "'Deteriorate' means to:", options: ["Improve", "Get worse", "Stay the same", "Recover"], correctAnswer: 1 },
    { question: "Choose the correct word: 'The museum has an _______ collection of ancient artifacts.'", options: ["ordinary", "extensive", "limited", "poor"], correctAnswer: 1 },
    { question: "What does 'to advocate' mean?", options: ["To oppose", "To support publicly", "To criticize", "To ignore"], correctAnswer: 1 },
    { question: "The synonym of 'controversial' is:", options: ["Agreeable", "Debatable", "Accepted", "Popular"], correctAnswer: 1 },
    { question: "'Redundant' means:", options: ["Essential", "Necessary", "Unnecessary", "Important"], correctAnswer: 2 },
    { question: "To 'alleviate' pain means to:", options: ["Increase it", "Reduce it", "Cause it", "Ignore it"], correctAnswer: 1 },
    { question: "Choose the antonym of 'conventional':", options: ["Traditional", "Standard", "Unconventional", "Normal"], correctAnswer: 2 },
    { question: "What is the meaning of 'diligent'?", options: ["Lazy", "Hardworking", "Careless", "Slow"], correctAnswer: 1 },
    { question: "The word 'compelling' means:", options: ["Boring", "Convincing", "Weak", "Uninteresting"], correctAnswer: 1 },
    { question: "Choose the correct word: 'The professor's _______ explanation made the complex topic easy to understand.'", options: ["confusing", "lucid", "complicated", "unclear"], correctAnswer: 1 },
    { question: "'Impartial' means:", options: ["Biased", "Unfair", "Neutral", "Prejudiced"], correctAnswer: 2 },
    { question: "To 'undermine' someone's confidence means to:", options: ["Boost it", "Weaken it", "Support it", "Protect it"], correctAnswer: 1 },
    { question: "The synonym of 'coherent' is:", options: ["Confusing", "Logical", "Random", "Chaotic"], correctAnswer: 1 },
    { question: "What does 'to fluctuate' mean?", options: ["To remain stable", "To vary irregularly", "To stay constant", "To be fixed"], correctAnswer: 1 },
    { question: "Choose the antonym of 'obsolete':", options: ["Outdated", "Modern", "Ancient", "Old-fashioned"], correctAnswer: 1 },
    { question: "'Intricate' means:", options: ["Simple", "Complex", "Easy", "Basic"], correctAnswer: 1 },
    { question: "To 'implement' a plan means to:", options: ["Reject it", "Put it into action", "Ignore it", "Delay it"], correctAnswer: 1 },
    { question: "Choose the correct word: 'The new law had _______ consequences that nobody had anticipated.'", options: ["expected", "predictable", "unforeseen", "obvious"], correctAnswer: 2 },
    { question: "What is the meaning of 'tentative'?", options: ["Definite", "Uncertain", "Final", "Confirmed"], correctAnswer: 1 },
    { question: "The synonym of 'substantial' is:", options: ["Minimal", "Significant", "Tiny", "Small"], correctAnswer: 1 },
    { question: "'Detrimental' means:", options: ["Beneficial", "Helpful", "Harmful", "Positive"], correctAnswer: 2 },
    { question: "To 'refute' an argument means to:", options: ["Support it", "Prove it wrong", "Accept it", "Ignore it"], correctAnswer: 1 },
    { question: "Choose the antonym of 'ambition':", options: ["Drive", "Motivation", "Apathy", "Determination"], correctAnswer: 2 },
    { question: "What does 'plausible' mean?", options: ["Impossible", "Believable", "Absurd", "Ridiculous"], correctAnswer: 1 },

    // --- New 50 questions ---
    { question: "Choose the synonym for 'concise':", options: ["Long-winded", "Brief", "Rambling", "Verbose"], correctAnswer: 1 },
    { question: "The word 'benevolent' means:", options: ["Cruel", "Kind and generous", "Selfish", "Indifferent"], correctAnswer: 1 },
    { question: "What is the antonym of 'significant'?", options: ["Important", "Trivial", "Major", "Critical"], correctAnswer: 1 },
    { question: "To 'condemn' means to:", options: ["Praise", "Express strong disapproval", "Support", "Admire"], correctAnswer: 1 },
    { question: "Choose the correct word: 'The results of the experiment were _______ and could not be trusted.'", options: ["reliable", "dubious", "accurate", "definitive"], correctAnswer: 1 },
    { question: "'Affluent' means:", options: ["Poor", "Wealthy", "Modest", "Average"], correctAnswer: 1 },
    { question: "The synonym of 'cautious' is:", options: ["Reckless", "Careful", "Impulsive", "Hasty"], correctAnswer: 1 },
    { question: "To 'comply' with a rule means to:", options: ["Break it", "Follow it", "Ignore it", "Challenge it"], correctAnswer: 1 },
    { question: "What does 'to endorse' mean?", options: ["To reject", "To approve or support", "To criticize", "To ban"], correctAnswer: 1 },
    { question: "Choose the antonym of 'transparent':", options: ["Clear", "Opaque", "Obvious", "Visible"], correctAnswer: 1 },
    { question: "'Reluctant' means:", options: ["Eager", "Unwilling", "Excited", "Enthusiastic"], correctAnswer: 1 },
    { question: "The word 'diminish' means:", options: ["Increase", "Reduce", "Expand", "Grow"], correctAnswer: 1 },
    { question: "Choose the correct word: 'His _______ attitude made it difficult to work with him.'", options: ["cooperative", "arrogant", "humble", "friendly"], correctAnswer: 1 },
    { question: "What is the meaning of 'enhance'?", options: ["To worsen", "To improve", "To maintain", "To destroy"], correctAnswer: 1 },
    { question: "The antonym of 'deliberately' is:", options: ["Intentionally", "Accidentally", "Purposely", "Consciously"], correctAnswer: 1 },
    { question: "'Notorious' means:", options: ["Famous for good reasons", "Famous for bad reasons", "Unknown", "Forgettable"], correctAnswer: 1 },
    { question: "To 'perceive' means to:", options: ["To ignore", "To become aware of", "To forget", "To deny"], correctAnswer: 1 },
    { question: "Choose the synonym for 'legitimate':", options: ["Illegal", "Valid", "Fake", "False"], correctAnswer: 1 },
    { question: "What does 'to allocate' mean?", options: ["To waste", "To distribute for a purpose", "To collect", "To hoard"], correctAnswer: 1 },
    { question: "The word 'subsequent' means:", options: ["Previous", "Following", "Simultaneous", "Initial"], correctAnswer: 1 },
    { question: "Choose the correct word: 'The scientist made a _______ discovery that changed the field forever.'", options: ["minor", "groundbreaking", "insignificant", "trivial"], correctAnswer: 1 },
    { question: "'Persistent' means:", options: ["Giving up easily", "Continuing firmly", "Lazy", "Indecisive"], correctAnswer: 1 },
    { question: "The antonym of 'diverse' is:", options: ["Varied", "Uniform", "Mixed", "Assorted"], correctAnswer: 1 },
    { question: "To 'suppress' information means to:", options: ["Share it", "Prevent it from being known", "Publish it", "Broadcast it"], correctAnswer: 1 },
    { question: "What is the meaning of 'ambivalent'?", options: ["Certain", "Having mixed feelings", "Decisive", "Confident"], correctAnswer: 1 },
    { question: "Choose the synonym for 'adjacent':", options: ["Distant", "Nearby", "Remote", "Far"], correctAnswer: 1 },
    { question: "'Accumulate' means to:", options: ["Scatter", "Gather over time", "Distribute", "Lose"], correctAnswer: 1 },
    { question: "The word 'concede' means:", options: ["To deny", "To admit or accept", "To refuse", "To fight"], correctAnswer: 1 },
    { question: "Choose the antonym of 'generous':", options: ["Kind", "Stingy", "Charitable", "Liberal"], correctAnswer: 1 },
    { question: "What does 'to depict' mean?", options: ["To hide", "To represent or show", "To erase", "To conceal"], correctAnswer: 1 },
    { question: "'Ambiguous' and 'equivocal' are:", options: ["Antonyms", "Synonyms", "Unrelated", "Homonyms"], correctAnswer: 1 },
    { question: "The word 'indispensable' means:", options: ["Unnecessary", "Essential", "Optional", "Replaceable"], correctAnswer: 1 },
    { question: "Choose the correct word: 'The judge remained _______ throughout the trial.'", options: ["biased", "impartial", "prejudiced", "partial"], correctAnswer: 1 },
    { question: "To 'revoke' a license means to:", options: ["Renew it", "Take it away", "Extend it", "Issue it"], correctAnswer: 1 },
    { question: "What is the meaning of 'spontaneous'?", options: ["Planned", "Happening without planning", "Delayed", "Rehearsed"], correctAnswer: 1 },
    { question: "'Versatile' means:", options: ["Limited", "Able to adapt to many functions", "Rigid", "Inflexible"], correctAnswer: 1 },
    { question: "The synonym of 'chronic' is:", options: ["Temporary", "Long-lasting", "Brief", "Acute"], correctAnswer: 1 },
    { question: "Choose the antonym of 'optimistic':", options: ["Hopeful", "Pessimistic", "Positive", "Cheerful"], correctAnswer: 1 },
    { question: "To 'speculate' means to:", options: ["To know for certain", "To form a theory without firm evidence", "To prove", "To confirm"], correctAnswer: 1 },
    { question: "What does 'prevalent' mean?", options: ["Rare", "Widespread", "Uncommon", "Unusual"], correctAnswer: 1 },
    { question: "'Elicit' means to:", options: ["To hide", "To draw out a response", "To suppress", "To conceal"], correctAnswer: 1 },
    { question: "The word 'erratic' means:", options: ["Consistent", "Unpredictable", "Steady", "Regular"], correctAnswer: 1 },
    { question: "Choose the correct word: 'The company took _______ measures to prevent data leaks.'", options: ["lenient", "stringent", "relaxed", "casual"], correctAnswer: 1 },
    { question: "What is the antonym of 'unanimous'?", options: ["Agreed", "Divided", "United", "Harmonious"], correctAnswer: 1 },
    { question: "'Authentic' means:", options: ["Fake", "Genuine", "Counterfeit", "Artificial"], correctAnswer: 1 },
    { question: "To 'relinquish' control means to:", options: ["Seize it", "Give it up", "Strengthen it", "Demand it"], correctAnswer: 1 },
    { question: "The synonym of 'futile' is:", options: ["Productive", "Useless", "Effective", "Successful"], correctAnswer: 1 },
    { question: "Choose the word meaning 'to make something clearer':", options: ["Obscure", "Clarify", "Confuse", "Complicate"], correctAnswer: 1 },
    { question: "'Hindsight' refers to:", options: ["Future planning", "Understanding after the event", "Foresight", "Prediction"], correctAnswer: 1 },
    { question: "The antonym of 'abstract' is:", options: ["Theoretical", "Concrete", "Vague", "Conceptual"], correctAnswer: 1 }
];

// --- Configuration ---
const QUESTIONS_PER_SESSION = 20;

// --- Quiz State ---
let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let answered = false;

// --- DOM Elements ---
const landingScreen = document.getElementById('landing-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const currentScoreSpan = document.getElementById('current-score');
const progressFill = document.getElementById('progress-fill');
const feedbackArea = document.getElementById('feedback-area');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackText = document.getElementById('feedback-text');
const btnNext = document.getElementById('btn-next');

// Initialize display
totalQuestionsSpan.textContent = QUESTIONS_PER_SESSION;

// --- Utility: Fisher-Yates Shuffle ---
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Pick N random questions from the bank
function pickRandomQuestions(bank, count) {
    const shuffled = shuffleArray(bank);
    return shuffled.slice(0, count);
}

// --- Start Quiz ---
function startQuiz() {
    activeQuestions = pickRandomQuestions(questionBank, QUESTIONS_PER_SESSION);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    answered = false;

    currentScoreSpan.textContent = 0;
    totalQuestionsSpan.textContent = QUESTIONS_PER_SESSION;

    landingScreen.classList.remove('active');
    quizScreen.classList.add('active');

    showQuestion();
}

// --- Show Question ---
function showQuestion() {
    answered = false;
    const question = activeQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    currentScoreSpan.textContent = score;

    const progress = (currentQuestionIndex / QUESTIONS_PER_SESSION) * 100;
    progressFill.style.width = progress + '%';

    questionText.textContent = question.question;

    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `<span class="option-letter">${letters[index]}</span>${option}`;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });

    feedbackArea.classList.remove('show', 'correct', 'wrong');
    btnNext.classList.remove('show');
}

// --- Select Answer ---
function selectAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const question = activeQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctAnswer;
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');

    userAnswers.push({
        questionIndex: currentQuestionIndex,
        selectedAnswer: selectedIndex,
        isCorrect: isCorrect
    });

    optionButtons.forEach(btn => btn.classList.add('disabled'));
    optionButtons[question.correctAnswer].classList.add('correct');

    if (!isCorrect) {
        optionButtons[selectedIndex].classList.add('wrong');
    } else {
        score++;
        currentScoreSpan.textContent = score;
    }

    feedbackArea.classList.add('show');
    if (isCorrect) {
        feedbackArea.classList.add('correct');
        feedbackIcon.textContent = '✓';
        feedbackText.textContent = 'Correct! Well done!';
    } else {
        feedbackArea.classList.add('wrong');
        feedbackIcon.textContent = '✗';
        feedbackText.textContent = `Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`;
    }

    btnNext.classList.add('show');

    if (currentQuestionIndex === QUESTIONS_PER_SESSION - 1) {
        btnNext.textContent = 'See Results';
    }
}

// --- Next Question ---
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= QUESTIONS_PER_SESSION) {
        showResults();
    } else {
        showQuestion();
    }
}

// --- Show Results ---
function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');

    document.getElementById('final-score').textContent = score;

    const percentage = (score / QUESTIONS_PER_SESSION) * 100;
    const messageElement = document.getElementById('score-message');

    if (percentage >= 90) {
        messageElement.textContent = '🌟 Excellent! You have an outstanding vocabulary!';
    } else if (percentage >= 70) {
        messageElement.textContent = '👏 Great job! Your vocabulary is impressive!';
    } else if (percentage >= 50) {
        messageElement.textContent = '👍 Good effort! Keep practicing to improve!';
    } else {
        messageElement.textContent = '💪 Keep studying! Practice makes perfect!';
    }

    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    userAnswers.forEach((answer, index) => {
        const question = activeQuestions[answer.questionIndex];
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'wrong'}`;

        reviewItem.innerHTML = `
            <div class="review-question">${index + 1}. ${question.question}</div>
            <div class="review-answer">
                Your answer: <span class="${answer.isCorrect ? 'correct-answer' : 'wrong-answer'}">${question.options[answer.selectedAnswer]}</span>
                ${!answer.isCorrect ? `<br>Correct answer: <span class="correct-answer">${question.options[question.correctAnswer]}</span>` : ''}
            </div>
        `;

        reviewList.appendChild(reviewItem);
    });

    progressFill.style.width = '100%';
}

// --- Restart Quiz ---
function restartQuiz() {
    resultsScreen.classList.remove('active');
    landingScreen.classList.add('active');
    btnNext.textContent = 'Next →';
}