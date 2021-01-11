/**
 * Example store structure
 */
// const store = {
//     // 5 or more questions are required
//     questions: [{
//             question: 'What color is broccoli?',
//             answers: [
//                 'red',
//                 'orange',
//                 'pink',
//                 'green'
//             ],
//             correctAnswer: 'green'
//         },
//         {
//             question: 'What is the current year?',
//             answers: [
//                 '1970',
//                 '2015',
//                 '2019',
//                 '2005'
//             ],
//             correctAnswer: '2019'
//         }
//     ],
//     quizStarted: false,
//     questionNumber: 1,
//     score: 0,
//     currentQuestion: 0
// };

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
    return `<h2 id="checkYouOnWhichQue">You are on Question Number ${item.questionNumber} of Quiz</h2>`;
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
    // item.currentQuestion++;
    // console.log(item.currentQuestion);
}

function QuizQuestionTemplate(item) {
    let currentQueHolderid = item.currentQuestion;
    console.log(currentQueHolderid);
    return `<div class="questionContainer" id="questionContainHolder"><div class="questionContent"><p id="questionContainerId">Que(${item.questionNumber}):${item.questions[currentQueHolderid]['question']}</p></div></div>`;
}

/* Quiz Answer */

function generateQuizAnswerTemplate(item) {
    const QuizAnswerBaseTemplate = QuizAnswerTemplate(item);
    $('.mainYogiApp').append(QuizAnswerBaseTemplate);
}

function QuizAnswerTemplate(item) {
    let currentAnswerHolderid = item.currentAnswer;
    console.log(currentAnswerHolderid);
    let firstAnswer = item.questions[currentAnswerHolderid]['answers'][0];
    let secondAnswer = item.questions[currentAnswerHolderid]['answers'][1];
    let thirdAnswer = item.questions[currentAnswerHolderid]['answers'][2];

    console.log(firstAnswer);
    return `
    <div class="quizAnswerContainer" id="quizAnswerContainHolder">
    <div class="quizAnswerContent">    
    <div>
    <span class="bulletHolder"><input type="radio" name="answerRadio" value="firstAns" checked></span><span class="ansItemHolder" id="ansItemOne">${item.questions[currentAnswerHolderid]['answers'][0]}</span>
    </div>
    <div>
    <span class="bulletHolder"><input type="radio" name="answerRadio" value="sencondAns"></span><span class="ansItemHolder" id="ansItemTwo">${item.questions[currentAnswerHolderid]['answers'][1]}</span>
    </div>
    <div>
    <span class="bulletHolder"><input type="radio" name="answerRadio" value="thirdAns"></span><span class="ansItemHolder" id="ansItemThree">${item.questions[currentAnswerHolderid]['answers'][2]}</span>
    </div>
    </div>
    </div>`;
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

/* Quiz correct/Incorrect question answer Message template*/

function generateCorrectNotCorrectMessageTemplate(text) {
    const correctNotCorrectMessageBaseTemplate = correctNotCorrectMessage(text);
    $('.mainYogiApp').append(correctNotCorrectMessageBaseTemplate);
}


function correctNotCorrectMessage(text) {
    return `<div class="corMessageContainer"><div class="corMessageItem">${text}</div></div>`;
}

/* Quiz Final Message template*/

function generateQuizFinalMessage(item) {
    const quizFinalMessageBase = quizFinalMessage(item);
    $('.mainYogiApp').append(quizFinalMessageBase);
}

function quizFinalMessage(item) {
    return `<div class="finalMessageContainer"><div class="finalMessageContent"><p class="finalMessageFormat">Your score is: ${item.score}/16</p><button id="restartQuizButton" onClick="restartQuizHandler();" class="kickButton">Restart Quiz</button></div></div>`
}


// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function preloadImages(headerImageStore) {

    for (var i = 0; i < headerImageStore.length; i++) {
        $("#myHeaderImageGallery>img").attr("src", headerImageStore[i]);
    }
}

function changeHeaderImages() {

    $('#myHeaderImageGallery img').attr({
        src: headerImageStore[imageChangeCounter],
        alt: "jQuery Logo"
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
        // Get the value from a set of radio buttons
        let selectedAnswer = $("input[type=radio][name=answerRadio]:checked").val();
        let selectedAnswerContent = $("input[type=radio][name=answerRadio]:checked").parent().siblings().text();
        var holderId = item.currentAnswer;
        var correctAnswerFromStore = item.questions[holderId]['correctAnswer'];
        var message = '';
        // compare with correct answer
        if (selectedAnswerContent === correctAnswerFromStore) {
            console.log("Your Answer is correct");
            message = "Your Answer is Correct!!!";
            (item.score) ++;
            console.log(item.score);
            $('.scoreHeader').text(`Score : ${item.score}/16`);

        } else {
            console.log("Your answer is not correct, please try again");
            message = "Your Answer is not correct";
        }

        //



        generateCorrectNotCorrectMessageTemplate(message);
        $('#submitButton').css("display", "none");
        $('#nextButton').css("display", "block");
        console.log(selectedAnswerContent);
    });
}

function nextButtonHandler(item) {
    $('#nextButton').on('click', function(e) {
        e.preventDefault();
        // generateQuizQuestionTemplate(item);

        // remove correct incorrect message item
        $('.corMessageContainer').css("display", "none");
        console.log("check Nesh");
        console.log(item.questionNumber);

        // check if it is last question
        if (parseInt(item.questionNumber) === 16) {
            $('#questionContainHolder').css("display", "none");
            $('#quizAnswerContainHolder').css("display", "none");
            $('#nextButton').css("display", "none");
            $('#submitButton').css("display", "none");
            $('#checkYouOnWhichQue').css("display", "none");
            $('#scoreHeaderId').css("display", "none");
            generateQuizFinalMessage(item);
        } else {
            (item.questionNumber) ++;

            // update QuizHeaderTemplate
            $('#checkYouOnWhichQue').text(`You are on Question Number ${item.questionNumber} of Quiz`);

            (item.currentQuestion) ++;
            let queHolder = `Que(${item.questionNumber}):${item.questions[item.currentQuestion]['question']}`;
            $('#questionContainerId').text(queHolder);
            (item.currentAnswer) ++;
            let answerHolderOne = `${item.questions[item.currentAnswer]['answers'][0]}`;
            let answerHolderTwo = `${item.questions[item.currentAnswer]['answers'][1]}`;
            let answerHolderThree = `${item.questions[item.currentAnswer]['answers'][2]}`;
            $('#ansItemOne').text(answerHolderOne);
            $('#ansItemTwo').text(answerHolderTwo);
            $('#ansItemThree').text(answerHolderThree);

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
        // restartQuizHandler();
    } else {
        quizPage();
        submitButtonHandler(store);
        nextButtonHandler(store);
        // restartQuizHandler();
        // var check = true;
        // if(check){
        //     submitButtonHandler(store);
        //     nextButtonHandler(store);
        //     check = false;
        // }else{
        //     var counter = 7;
        //     while(counter >=5 ){
        //         submitButtonHandler(store);
        //         nextButtonHandler(store);
        //         counter --;
        //     }
        // if(counter === 1){
        //     submitButtonHandler(store);
        //     nextButtonHandler(store);
        //     $('#nextButton').css("display","none");
        //     generateQuizFinalMessage(store);

        // }
    }



}


/********** Initialization Function **********/

function initializeYogiApp() {

    provideRoute(store.quizStarted);

}




// When the page loads, call `initializeYogiApp`
$(initializeYogiApp);