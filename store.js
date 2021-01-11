const store = {
    // 5 or more questions are required
    questions: [{
            id: 1,
            question: 'The term Yoga is said to mean: ?',
            answers: [
                'The union of the sun, moon, and earth',
                'The union of mind, body & spirit in communication and awareness',
                'The union mind, soul, and body'
            ],
            correctAnswer: 'The union of mind, body & spirit in communication and awareness',
            imageSource : './images/questionImages/what_is_yoga.png'
        },
        {
            id: 2,
            question: 'Duhka is said to mean?',
            answers: [
                'Yoga postures sequences that are arranged sequentially',
                'Eight limbs of yoga practice',
                'Bad space or energy, translated as pain or sorrow'
            ],
            correctAnswer: 'Bad space or energy, translated as pain or sorrow',
            imageSource: './images/questionImages/dukhaa.jpg'
        },
        {
            id: 3,
            question: 'An asana is defined as?',
            answers: [
                'Posture or devoted to the practice of the yoga postures',
                'A victory breath or ocean breath',
                'A three part breath'
            ],
            correctAnswer: 'Posture or devoted to the practice of the yoga postures',
            imageSource: './images/questionImages/asana.jpg'
        },
        {
            id: 4,
            question: 'Yama is____________ ?',
            answers: [
                'Flexible, pliable or adaptable',
                'The five universal commandments of not harming anyone, truth, non-stealing, godly, chaste life, greedless',
                'The devoted practice of yoga postures'
            ],
            correctAnswer: 'The five universal commandments of not harming anyone, truth, non-stealing, godly, chaste life, greedless',
            imageSource: './images/questionImages/yama.jpg'
        },
        {
            id: 5,
            question: 'Chakra is: ?',
            answers: [
                'Three-part breath',
                'Said to be "the wheel of light" that refers to the seven physical areas of the body',
                'Shining skull breath'
            ],
            correctAnswer: 'Said to be "the wheel of light" that refers to the seven physical areas of the body',
            imageSource: './images/questionImages/chakra_info.jpg'
        },
        {
            id: 6,
            question: 'Hatha means: ?',
            answers: [
                'Ha=Sun, Tha=Moon; representing duality in balance',
                'Life force, energy that moves through all earthly things',
                'Union of mind, body and spirit'
            ],
            correctAnswer: 'Ha=Sun, Tha=Moon; representing duality in balance',
            imageSource: './images/questionImages/Hatha-Yoga.jpg'
        },
        {
            id: 7,
            question: 'Surya Namaskar is considered to be a complete exercise for the body and has often been cited as a combination of Asanas that helps in stretching almost all the major muscles. How many Asanas does Surya Namaskar in total include?',
            answers: [
                '12',
                '6',
                '24'
            ],
            correctAnswer: '12',
            imageSource: './images/questionImages/surya_namaskar.jpg'
        },
        {
            id: 8,
            question: 'Prana means: ?',
            answers: [
                'Union of mind and body',
                'Duality in balance',
                'Life force, energy that moves through all earthly things'
            ],
            correctAnswer: 'Life force, energy that moves through all earthly things',
            imageSource: './images/questionImages/prana.jpg'
        },
        {
            id: 9,
            question: 'Niyama is said to be: ?',
            answers: [
                'The eight limbs of yoga practice',
                'The five personal disciplines of cleanliness, contentedness, self discipline, study, study of the scriptures and dedication to God',
                'Three part breath'
            ],
            correctAnswer: 'The five personal disciplines of cleanliness, contentedness, self discipline, study, study of the scriptures and dedication to God',
            imageSource: './images/questionImages/niyama.png'
        },
        {
            id: 10,
            question: 'Samadhi is ?',
            answers: [
                'A trance or state of bliss',
                'A state of sleep',
                'A state of resting'
            ],
            correctAnswer: 'A trance or state of bliss',
            imageSource: './images/questionImages/samadhi.jpg'
        },
        {
            id: 11,
            question: 'Dhyana is meditation?',
            answers: [
                'True',
                'False',
                'Neither True nor False'
            ],
            correctAnswer: 'True',
            imageSource: './images/questionImages/dhyana.jpg'
        },
        {
            id: 12,
            question: 'Pratyahara is the practice of meditation?',
            answers: [
                'True',
                'False',
                'Neither True nor False'
            ],
            correctAnswer: 'False',
            imageSource: './images/questionImages/pratyahara.jpg'
        },
        {
            id: 13,
            question: 'Dharana is said to be concentration?',
            answers: [
                'True',
                'False',
                'Neither True nor False'
            ],
            correctAnswer: 'True',
            imageSource: './images/questionImages/dharana.jpg'
        },
        {
            id: 14,
            question: 'Pranayama is the practice of breathing control?',
            answers: [
                'True',
                'False',
                'Neither True nor False'
            ],
            correctAnswer: 'True',
            imageSource: './images/questionImages/pranayama.jpg'
        },
        {
            id: 15,
            question: 'The key to being successful in yoga is to be able to remove all the bad obstacles at will?',
            answers: [
                'True',
                'False',
                'Neither True nor False'
            ],
            correctAnswer: 'True',
            imageSource: './images/questionImages/remove_bad.jpg'
        },
        {
            id: 16,
            question: 'Yoga has eight components, also known as the eight limbs of Yoga - Niyama, Asana, Pranayama, Dhyana, Samadhi are five of them. Which are the other three?',
            answers: [
                'Savichar, Santosa, Tapas',
                'Yama, Dharana, Pratyahara',
                'Ananda, Asmita, Aachaar'
            ],
            correctAnswer: 'Yama, Dharana, Pratyahara',
            imageSource: './images/questionImages/eight_fold.png'
        }
    ],
    quizStarted: false,
    questionNumber: 1,
    score: 0,
    currentQuestion: 0,
    currentAnswer: 0
};