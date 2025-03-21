import imagetest_1 from "./Data-images/imagetest_1.png";
import imagetest_2 from "./Data-images/imagetest_2.png";
import imagetest_3 from "./Data-images/imagetest_3.png";
import imagetest_4 from "./Data-images/imagetest_4.png";
import imagetest_5 from "./Data-images/imagetest_5.png";
import imagetest_6 from "./Data-images/imagetest_6.png";
import imagetest_7 from "./Data-images/imagetest_7.png";

export const Questions = [
    {
        questionText: 'blackbird',
        answerOptions: [
            { answerImage: imagetest_1, isCorrect: false },
            { answerImage: imagetest_2, isCorrect: false },
            { answerImage: imagetest_3, isCorrect: true },
            { answerImage: imagetest_4, isCorrect: false },
        ],
    },
    {
        questionText: 'woodpecker',
        answerOptions: [
            {answerImage: imagetest_3, isCorrect: false},
            {answerImage: imagetest_4, isCorrect: false},
            {answerImage: imagetest_2, isCorrect: true},
            {answerImage: imagetest_1, isCorrect: false},
        ],
    },
    {
        questionText: 'magpie',
        answerOptions: [
            {answerImage: imagetest_2, isCorrect: true},
            {answerImage: imagetest_1, isCorrect: false},
            {answerImage: imagetest_4, isCorrect: false},
            {answerImage: imagetest_3, isCorrect: false},
        ],
    },
    {
        questionText: 'robin',
        answerOptions: [
            {answerImage: imagetest_1, isCorrect: false},
            {answerImage: imagetest_5, isCorrect: false},
            {answerImage: imagetest_2, isCorrect: false},
            {answerImage: imagetest_4, isCorrect: true},
        ],
    },
    {
        questionText: 'sparrow',
        answerOptions: [
            {answerImage: imagetest_6, isCorrect: true},
            {answerImage: imagetest_5, isCorrect: false},
            {answerImage: imagetest_7, isCorrect: false},
            {answerImage: imagetest_4, isCorrect: false},
        ],
    },
    {
        questionText: 'jay',
        answerOptions: [
            {answerImage: imagetest_6, isCorrect: false},
            {answerImage: imagetest_5, isCorrect: false},
            {answerImage: imagetest_3, isCorrect: false},
            {answerImage: imagetest_7, isCorrect: true},
        ],
    },
    {
        questionText: 'blue tit',
        answerOptions: [
            {answerImage: imagetest_6, isCorrect: false},
            {answerImage: imagetest_5, isCorrect: true},
            {answerImage: imagetest_3, isCorrect: false},
            {answerImage: imagetest_7, isCorrect: false}
        ]
    }
]
