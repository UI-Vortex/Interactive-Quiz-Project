import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Tests.css'
import './Testsmedia.css'

import imagetest_1 from "../Data-Answer/Data-images/imagetest_1.png";
import imagetest_2 from "../Data-Answer/Data-images/imagetest_2.png";
import imagetest_3 from "../Data-Answer/Data-images/imagetest_3.png";
import imagetest_4 from "../Data-Answer/Data-images/imagetest_4.png";
import imagetest_5 from "../Data-Answer/Data-images/imagetest_5.png";
import imagetest_6 from "../Data-Answer/Data-images/imagetest_6.png";
import imagetest_7 from "../Data-Answer/Data-images/imagetest_7.png";

const quiz = [
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
            { answerImage: imagetest_3, isCorrect: false },
            { answerImage: imagetest_4, isCorrect: false },
            { answerImage: imagetest_2, isCorrect: true },
            { answerImage: imagetest_1, isCorrect: false },
        ],
    },
    {
        questionText: 'magpie',
        answerOptions: [
            { answerImage: imagetest_2, isCorrect: true },
            { answerImage: imagetest_1, isCorrect: false },
            { answerImage: imagetest_4, isCorrect: false },
            { answerImage: imagetest_3, isCorrect: false },
        ],
    },
    {
        questionText: 'robin',
        answerOptions: [
            { answerImage: imagetest_1, isCorrect: false },
            { answerImage: imagetest_5, isCorrect: false },
            { answerImage: imagetest_2, isCorrect: false },
            { answerImage: imagetest_4, isCorrect: true },
        ],
    },
    {
        questionText: 'sparrow',
        answerOptions: [
            { answerImage: imagetest_6, isCorrect: true },
            { answerImage: imagetest_5, isCorrect: false },
            { answerImage: imagetest_7, isCorrect: false },
            { answerImage: imagetest_4, isCorrect: false },
        ],
    },
    {
        questionText: 'jay',
        answerOptions: [
            { answerImage: imagetest_6, isCorrect: false },
            { answerImage: imagetest_5, isCorrect: false },
            { answerImage: imagetest_3, isCorrect: false },
            { answerImage: imagetest_7, isCorrect: true },
        ],
    },
    {
        questionText: 'blue tit',
        answerOptions: [
            { answerImage: imagetest_6, isCorrect: false },
            { answerImage: imagetest_5, isCorrect: true },
            { answerImage: imagetest_3, isCorrect: false },
            { answerImage: imagetest_7, isCorrect: false }
        ]
    }
]


function Tests() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [score, setScore] = useState(0);
    const navigate = useNavigate(); // ✅ Use Router for Navigation

    const handleSelection = (index) => {
        setSelectedIndex(index);
    };

    const handleNext = () => {
        if (selectedIndex === null) return alert("Please select an answer first!");

        if (quiz[currentQuestion].answerOptions[selectedIndex].isCorrect) {
            setScore((prev) => prev + 1);
        }

        if (currentQuestion < quiz.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setSelectedIndex(null);
        } else {
            // ✅ Navigate to /results correctly
            navigate("/results", {
                state: {
                    score: score + (quiz[currentQuestion].answerOptions[selectedIndex].isCorrect ? 1 : 0),
                    total: quiz.length
                }
            });
        }
    };


    return (
        <>
            <div className="test_children">
                <div className="quiz_test">
                    <div className="background_quiz"></div>
                    <h1 className="quiz_title">Kids Quiz</h1>
                </div>
                <h2 className="children_where">Where’s the ...?</h2>
                <div className="question">
                    <h1 className='question_title'>{quiz[currentQuestion].questionText}</h1>
                    <div className="options">
                        {quiz[currentQuestion].answerOptions.map((option, index) => (
                            <img
                                className="option_image"
                                key={index}
                                src={option.answerImage}
                                alt="Error"
                                onClick={() => handleSelection(index)}
                                style={{
                                    border: selectedIndex === index ? "5px solid green" : "3px solid transparent",
                                    borderRadius: "25px",
                                    cursor: "pointer",
                                }}
                            />
                        ))}
                    </div>
                    <button onClick={handleNext} className="test_button">
                        Next Question
                    </button>
                </div>


            </div>
        </>
    )
}
// question first className
// question_title for h1 tag
// options for div

{/* <div className="options">
    {information.answerOptions.map((option, i) => (
        <img className='option_image' key={i} src={option.answerImage} alt={`Option ${i + 1}`} />
    ))}
</div> */}

export default Tests