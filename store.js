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
            correctAnswer: 'The union of mind, body & spirit in communication and awareness'
        },
        {
            id: 2,
            question: 'Duhka is said to mean?',
            answers: [
                'Yoga postures sequences that are arranged sequentially',
                'Eight limbs of yoga practice',
                'Bad space or energy, translated as pain or sorrow'
            ],
            correctAnswer: 'Bad space or energy, translated as pain or sorrow'
        },
        {
            id: 3,
            question: 'An asana is defined as?',
            answers: [
                'Posture or devoted to the practice of the yoga postures',
                'A victory breath or ocean breath',
                'A three part breath'
            ],
            correctAnswer: 'Posture or devoted to the practice of the yoga postures'
        },
        {
            id: 4,
            question: 'Yama is____________ ?',
            answers: [
                'Flexible, pliable or adaptable',
                'The five universal commandments of not harming anyone, truth, non-stealing, godly, chaste life, greedless',
                'The devoted practice of yoga postures'
            ],
            correctAnswer: 'The five universal commandments of not harming anyone, truth, non-stealing, godly, chaste life, greedless'
        },
        {
            id: 5,
            question: 'Chakra is: ?',
            answers: [
                'Three-part breath',
                'Said to be "the wheel of light" that refers to the seven physical areas of the body',
                'Shining skull breath'
            ],
            correctAnswer: 'Said to be "the wheel of light" that refers to the seven physical areas of the body'
        },
        {
            id: 6,
            question: 'Hatha means: ?',
            answers: [
                'Ha=Sun, Tha=Moon; representing duality in balance',
                'Life force, energy that moves through all earthly things',
                'Union of mind, body and spirit'
            ],
            correctAnswer: 'Ha=Sun, Tha=Moon; representing duality in balance'
        },
        {
            id: 7,
            question: 'Surya Namaskar is considered to be a complete exercise for the body and has often been cited as a combination of Asanas that helps in stretching almost all the major muscles. How many Asanas does Surya Namaskar in total include?',
            answers: [
                '12',
                '6',
                '24'
            ],
            correctAnswer: '12'
        },
        {
            id: 8,
            question: 'Prana means: ?',
            answers: [
                'Union of mind and body',
                'Duality in balance',
                'Life force, energy that moves through all earthly things'
            ],
            correctAnswer: 'Life force, energy that moves through all earthly things'
        },
        {
            id: 9,
            question: 'Niyama is said to be: ?',
            answers: [
                'The eight limbs of yoga practice',
                'The five personal disciplines of cleanliness, contentedness, self discipline, study, study of the scriptures and dedication to God',
                'Three part breath'
            ],
            correctAnswer: 'The five personal disciplines of cleanliness, contentedness, self discipline, study, study of the scriptures and dedication to God'
        },
        {
            id: 10,
            question: 'Samadhi is ?',
            answers: [
                'A trance or state of bliss',
                'A state of sleep',
                'A state of resting'
            ],
            correctAnswer: 'A trance or state of bliss'
        },
        {
            id: 11,
            question: 'Dhyana is meditation?',
            answers: [
                'True',
                'False',
                'Neither True nor False'
            ],
            correctAnswer: 'True'
        },
        {
            id: 12,
            question: 'Pratyahara is the practice of meditation?',
            answers: [
                'True',
                'False',
                'Neither True nor False'
            ],
            correctAnswer: 'False'
        },
        {
            id: 13,
            question: 'Dharana is said to be concentration?',
            answers: [
                'True',
                'False',
                'Neither True nor False'
            ],
            correctAnswer: 'True'
        },
        {
            id: 14,
            question: 'Pranayama is the practice of breathing control?',
            answers: [
                'True',
                'False',
                'Neither True nor False'
            ],
            correctAnswer: 'True'
        },
        {
            id: 15,
            question: 'The key to being successful in yoga is to be able to remove all the bad obstacles at will?',
            answers: [
                'True',
                'False',
                'Neither True nor False'
            ],
            correctAnswer: 'True'
        },
        {
            id: 16,
            question: 'Yoga has eight components, also known as the eight limbs of Yoga - Niyama, Asana, Pranayama, Dhyana, Samadhi are five of them. Which are the other three?',
            answers: [
                'Savichar, Santosa, Tapas',
                'Yama, Dharana, Pratyahara',
                'Ananda, Asmita, Aachaar'
            ],
            correctAnswer: 'Yama, Dharana, Pratyahara'
        }
    ],
    quizStarted: false,
    questionNumber: 1,
    score: 0,
    currentQuestion: 0,
    currentAnswer: 0
};