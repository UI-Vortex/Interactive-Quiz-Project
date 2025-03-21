import React from 'react'
import './Final.css'
import './FinalMedia.css'
import { Link, useLocation, useNavigate } from "react-router-dom";


function Final() {

    const location = useLocation();
    const navigate = useNavigate();
    const { score, total } = location.state || { score: 0, total: 0 };

    return (
        <>
            <div className="final">
                <div className="final_texts">
                    <h1 className="final_title">Kids Quiz</h1>
                    <div className="final_results">
                        <h2 className="your_score">Your Score is</h2>
                        <p className="score">{score} / {total}</p>
                    </div>
                    <Link to='/'>
                        <button className="final_button">Go back</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Final