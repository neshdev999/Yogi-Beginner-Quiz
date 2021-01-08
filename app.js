/**
 * Example store structure
 */
const store = {
    // 5 or more questions are required
    questions: [{
            question: 'What color is broccoli?',
            answers: [
                'red',
                'orange',
                'pink',
                'green'
            ],
            correctAnswer: 'green'
        },
        {
            question: 'What is the current year?',
            answers: [
                '1970',
                '2015',
                '2019',
                '2005'
            ],
            correctAnswer: '2019'
        }
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0
};

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

function generateYogiIntroPageKickButtonTemplate(){
    const kickStartButtonBaseTemplate = KickStartButtonTemplate();
    $('.mainYogiApp').append(kickStartButtonBaseTemplate);
}

function HeaderImageTemplate() {
    return `<div id="myHeaderImageGallery"><img></div>`;
}

function KickStartButtonTemplate(){
    return `<div class="kickButtonContainer">
                <div class="kickButtonItem">
                    <button id="kickStartButton" class="kickButton">START QUIZ</button>
                </div>
            </div>`;
}

/* Quiz Page Templage */


function quizPage(){
    generateQuizHeaderTemplate();
}

function generateQuizHeaderTemplate(){
    const QuizHeaderBaseTemplate = QuizHeaderTemplate();
    $('.mainYogiApp').html(QuizHeaderBaseTemplate);
}

function QuizHeaderTemplate(){
    return `<h1>You are on First Question of Quiz</h1>`;
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



function loadFirstQueQuizContent(){
    $('#kickStartButton').on('click', function (e){
        e.preventDefault();
        store.quizStarted = true;
        provideRoute(store.quizStarted);
    });
}

/********** Routing Function **********/

function provideRoute(checkFlag){

    if(checkFlag === false){
        yogiIntroPage();
        yogiIntrorender();
        loadFirstQueQuizContent();
    }else{
        quizPage();
    }
}

/********** Initialization Function **********/

function initializeYogiApp() {

    provideRoute(store.quizStarted);

}




// When the page loads, call `initializeYogiApp`
$(initializeYogiApp);