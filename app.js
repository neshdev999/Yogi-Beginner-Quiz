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

function yogiIntroPage() {
    generateYogiIntroPageTemplate();
}

function generateYogiIntroPageTemplate() {

    const headerImageBaseTemplate = generateHeaderImageTemplate();
    $('.mainYogiApp').html(headerImageBaseTemplate);

}

function generateHeaderImageTemplate() {

    return `<div id="myHeaderImageGallery"><img></div>`

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
var trial;

function render() {

    preloadImages(headerImageStore);
    trial = setInterval(changeHeaderImages, 6000);

}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

/********** Initialization Function **********/

function initializeYogiApp() {
    yogiIntroPage();
    render();
}




// When the page loads, call `initializeYogiApp`
$(initializeYogiApp);