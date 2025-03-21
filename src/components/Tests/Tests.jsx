import React, { useState } from 'react'
import './Tests.css'
import './Testsmedia.css'
import { Questions } from '../Data-Answer/Data'

function Tests() {

    const [datas, setDatas] = useState(Questions);

    return (
        <>
            <div className="test_children">
                <div className="quiz_test">
                    <div className="background_quiz"></div>
                    <h1 className="quiz_title">Kids Quiz</h1>
                </div>
                <h2 className="children_where">Where’s the ...?</h2>
                {datas.map((information, index) => {
                    return <div key={index} className='question'><h1 className='question_title' >{information.questionText}</h1>
                        <div className="options">
                            {information.answerOptions.map((option, i) => (
                                <img className='option_image' key={i} src={option.answerImage} alt={`Option ${i + 1}`} />
                            ))}
                        </div>
                    </div>

                })}
            </div>
        </>
    )
}

export default Tests