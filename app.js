/* Global variables */
/* Header Image Storage Array */
const headerImageStore = [

    "./images/headerFrontPage/krishna-arjuna.png",
    "./images/headerFrontPage/sanskrit-shloka.png",
    "./images/headerFrontPage/yoga-beginner.jpg",
    "./images/headerFrontPage/cat_cow_pose_base_yoga.gif"
];

var imageChangeCounter = 0;

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

/* Introduction Page Template */

function yogiIntroPage() {
    generateYogiIntroPageImageTemplate();
    generateYogiIntroPageKickButtonTemplate();
}

function generateYogiIntroPageImageTemplate() {
    const headerImageBaseTemplate = HeaderImageTemplate();
    $('.mainYogiApp').html(headerImageBaseTemplate);

}

function generateYogiIntroPageKickButtonTemplate() {
    const kickStartButtonBaseTemplate = KickStartButtonTemplate();
    $('.mainYogiApp').append(kickStartButtonBaseTemplate);
}

function HeaderImageTemplate() {
    return `<div id="myHeaderImageGallery"><img></div>`;
}

function KickStartButtonTemplate() {
    return `<div class="kickButtonContainer">
                <div class="kickButtonItem">
                    <button id="kickStartButton" class="kickButton">START QUIZ</button>
                </div>
            </div>`;
}

/* Quiz Page Templage */

function quizPage() {
    generateQuizHeaderTemplate();
    generateScoreTemplate(store);
    generateQuestionImageTemplate(store);
    generateQuizQuestionTemplate(store);
    generateQuizAnswerTemplate(store);
    generateSubmitButtonTemplate();
    generateNextButtonTemplate();
}

/* Quiz Header */

function generateQuizHeaderTemplate() {
    const QuizHeaderBaseTemplate = QuizHeaderTemplate(store);
    $('.mainYogiApp').html(QuizHeaderBaseTemplate);
    $("h1").remove();
}

function QuizHeaderTemplate(item) {
    return `<header><h2 id="checkYouOnWhichQue">You are on Question Number ${item.questionNumber} / 16 of Quiz</h2></header>`;
}

function generateScoreTemplate(storage) {
    const scoreTemplateBase = scoreTemplate(storage.score);
    $('.mainYogiApp').append(scoreTemplateBase);
}

function scoreTemplate(score) {
    return `<h2 class="scoreHeader" id="scoreHeaderId">Score : ${score}/16 </h2>`;
}

/* Quiz Question */

function generateQuizQuestionTemplate(item) {
    const QuizQuestionBaseTemplate = QuizQuestionTemplate(item);
    $('.mainYogiApp').append(QuizQuestionBaseTemplate);
}

function QuizQuestionTemplate(item) {
    let currentQueHolderid = item.currentQuestion;
    return `<div class="questionContainer" id="questionContainHolder"><div class="questionContent"><p id="questionContainerId">Question (${item.questionNumber}) ${item.questions[currentQueHolderid]['question']}</p></div></div>`;
}

/* Quiz Answer */

function generateQuizAnswerTemplate(item) {
    const QuizAnswerBaseTemplate = QuizAnswerTemplate(item);
    $('.mainYogiApp').append(QuizAnswerBaseTemplate);
}

function QuizAnswerTemplate(item) {
    let currentAnswerHolderid = item.currentAnswer;
    return `
    <form>
    <div class="quizAnswerContainer" id="quizAnswerContainHolder">
    <div class="quizAnswerContent">    
    <div>
    <span class="bulletHolder"><input type="radio" name="answerRadio" value="firstAns" required /></span><span class="ansItemHolder" id="ansItemOne">${item.questions[currentAnswerHolderid]['answers'][0]}</span>
    </div>
    <div>
    <span class="bulletHolder"><input type="radio" name="answerRadio" value="sencondAns" /></span><span class="ansItemHolder" id="ansItemTwo">${item.questions[currentAnswerHolderid]['answers'][1]}</span>
    </div>
    <div>
    <span class="bulletHolder"><input type="radio" name="answerRadio" value="thirdAns" /></span><span class="ansItemHolder" id="ansItemThree">${item.questions[currentAnswerHolderid]['answers'][2]}</span>
    </div>
    <div id="validationText"></div>
    </div>
    </div></form>`;
}

/* Quiz Submit Button */

function generateSubmitButtonTemplate() {
    const submitButtonBaseTemplate = submitButtonTemplate();
    $('.mainYogiApp').append(submitButtonBaseTemplate);
}

function submitButtonTemplate() {
    return `<div class="submitButtonContainer"><button class="submitButtonStyleHolder" id='submitButton'>SUBMIT</button></div>`;
}

/* Quiz Next Button */

function generateNextButtonTemplate() {
    const nextButtonBaseTemplate = nextButtonTemplate();
    $('.mainYogiApp').append(nextButtonBaseTemplate);
}

function nextButtonTemplate() {
    return `<div class="submitButtonContainer"><button class="submitButtonStyleHolder" id='nextButton'>NEXT</button></div>`;
}

/* Quiz correct/Incorrect question answer Message Template*/

function generateCorrectNotCorrectMessageTemplate(text) {
    const correctNotCorrectMessageBaseTemplate = correctNotCorrectMessage(text);
    $('.mainYogiApp').append(correctNotCorrectMessageBaseTemplate);
}


function correctNotCorrectMessage(text) {
    return `<div class="corMessageContainer"><div class="corMessageItem">${text}</div></div>`;
}

/* Quiz Final Message Template*/

function generateQuizFinalMessage(item) {
    const quizFinalMessageBase = quizFinalMessage(item);
    $('.mainYogiApp').append(quizFinalMessageBase);
}

function quizFinalMessage(item) {
    return `<div class="finalMessageContainer"><div class="finalMessageContent"><p class="finalMessageFormat">Your score is: ${item.score}/16</p><button id="restartQuizButton" onClick="restartQuizHandler();" class="kickButton">Restart Quiz</button></div></div>`
}


/* Question Image Template */

function generateQuestionImageTemplate(item) {
    const queImageTemplateBase = queImageTemplate(item);
    $('.mainYogiApp').append(queImageTemplateBase);
}

function queImageTemplate(item) {
    return `<div class="queImageContainer" id="queImageContainId"><div class="queImageItem"><img id="queImageID" src="${item.questions[item.currentQuestion]['imageSource']}" alt="${item.questions[item.currentQuestion]['altText']}"></div></div>`;
}

/* Footer */
function generateFooter() {
    const yogiFooterBase = yogiFooter();
    $('.mainYogiApp').append(yogiFooterBase);
}

function yogiFooter() {
    return `<footer><div class="FooterContainer"><div class="Footer"><span>Beginner Yogi&nbsp;&nbsp;<br></span><span>nesh &copy; ${getCopyRightYear()}</span></div></div></footer>`;
}

function getCopyRightYear() {
    return new Date().getFullYear();
}

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function preloadImages(headerImageStore) {

    for (var i = 0; i < headerImageStore.length; i++) {
        $("#myHeaderImageGallery>img").attr("src", headerImageStore[i]);
        $("#myHeaderImageGallery>img").attr("alt", )
    }
}

function changeHeaderImages() {

    $('#myHeaderImageGallery img').attr({
        src: headerImageStore[imageChangeCounter],
        alt: "logo images of header containing lady doing yoga, arjuna krishna image, bhaghavad gita shloka and group doing pranayama yoga"
    });

    if (imageChangeCounter === 3) {
        imageChangeCounter = 0;
    } else {
        imageChangeCounter++;
    }
}

function yogiIntrorender() {
    preloadImages(headerImageStore);
    setInterval(changeHeaderImages, 6000);
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function loadFirstQueQuizContent() {
    $('#kickStartButton').on('click', function(e) {
        e.preventDefault();
        store.quizStarted = true;
        provideRoute(store.quizStarted);
    });
}

function submitButtonHandler(item) {
    $('#submitButton').on('click', function(e) {
        e.preventDefault();

        // validate radio button
        if (!$("input[type=radio][name=answerRadio]").is(':checked')) {
            $('#validationText').text("Please select one of the answers 🥵");
        } else {
            $('#validationText').text("");
            // Get the value from a set of radio buttons
            let selectedAnswerContent = $("input[type=radio][name=answerRadio]:checked").parent().siblings().text();
            var holderId = item.currentAnswer;
            var correctAnswerFromStore = item.questions[holderId]['correctAnswer'];
            var message = '';
            // compare with correct answer
            if (selectedAnswerContent === correctAnswerFromStore) {
                message = "Your Answer is Correct!!! 😀";
                generateCorrectNotCorrectMessageTemplate(message);
                $('.corMessageContainer').css("color", "blue");
                $('.corMessageContainer').css("background-color", "rgba(1, 221, 253, 0.3)");
                (item.score) ++;
                $('.scoreHeader').text(`Score : ${item.score}/16`);
            } else {
                message = `Your Answer is not Correct 😫. The correct answer is : ${item.questions[item.currentAnswer]['correctAnswer']}`;
                generateCorrectNotCorrectMessageTemplate(message);
            }
            $('#submitButton').css("display", "none");
            $('#nextButton').css("display", "block");
        }
    });
}

function nextButtonHandler(item) {
    $('#nextButton').on('click', function(e) {
        e.preventDefault();
        // remove correct incorrect message item
        $('.corMessageContainer').css("display", "none");
        // reset radio button
        $("input[type=radio][name=answerRadio]").prop("checked", false);
        // check if it is last question
        if (parseInt(item.questionNumber) === 16) {
            $('#questionContainHolder').css("display", "none");
            $('#quizAnswerContainHolder').css("display", "none");
            $('#nextButton').css("display", "none");
            $('#submitButton').css("display", "none");
            $('#checkYouOnWhichQue').css("display", "none");
            $('#scoreHeaderId').css("display", "none");
            $('#queImageContainId').css("display", "none");
            generateQuizFinalMessage(item);
        } else {
            (item.questionNumber) ++;
            // update QuizHeaderTemplate
            $('#checkYouOnWhichQue').text(`You are on Question Number ${item.questionNumber} / 16 of Quiz`);
            (item.currentQuestion) ++;
            let queHolder = `Question (${item.questionNumber}) ${item.questions[item.currentQuestion]['question']}`;
            $('#questionContainerId').text(queHolder);
            (item.currentAnswer) ++;
            let answerHolderOne = `${item.questions[item.currentAnswer]['answers'][0]}`;
            let answerHolderTwo = `${item.questions[item.currentAnswer]['answers'][1]}`;
            let answerHolderThree = `${item.questions[item.currentAnswer]['answers'][2]}`;
            $('#ansItemOne').text(answerHolderOne);
            $('#ansItemTwo').text(answerHolderTwo);
            $('#ansItemThree').text(answerHolderThree);
            // change image
            let imageSourceContainer = `${item.questions[item.currentQuestion]['imageSource']}`;
            let imageAltTextContainer = `${item.questions[item.currentQuestion]['altText']}`;
            $('#queImageID').attr('src', imageSourceContainer);
            $('#queImageID').attr('alt', imageAltTextContainer);
            // remove next button
            $('#nextButton').css("display", "none");
            $('#submitButton').css("display", "block");
        }
    });
}

function restartQuizHandler() {
    console.log("restart button is clicked");
    window.location.reload();
}

/********** Routing Function **********/

function provideRoute(checkFlag) {
    if (checkFlag === false) {
        yogiIntroPage();
        yogiIntrorender();
        loadFirstQueQuizContent();
        generateFooter();
    } else {
        quizPage();
        submitButtonHandler(store);
        nextButtonHandler(store);
    }
}


/********** Initialization Function **********/

function initializeYogiApp() {
    provideRoute(store.quizStarted);
}

// When the page loads, call `initializeYogiApp`
$(initializeYogiApp);