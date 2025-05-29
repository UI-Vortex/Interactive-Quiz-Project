import React from "react";
import "./Final.css";
import "./FinalMedia.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

function Final() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  const springs = useSpring({
    from: {
      opacity: 0,
      y: 300,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    config: { duration: 300 },
  });

  const springs2 = useSpring({
    from: {
      opacity: 0,
      y: -300,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    config: { duration: 400 },
  });
  const springs3 = useSpring({
    from: {
      opacity: 0,
      y: 300,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    config: { duration: 500 },
  });

  return (
    <>
      <div className="final">
        <animated.div style={{ ...springs }} className="final_texts">
          <animated.div style={{...springs2}}>
            <h1 className="final_title">Kids Quiz</h1>
          </animated.div>
          <animated.div style={{ ...springs3 }} className="final_results">
            <h2 className="your_score">Topgan Qushlaringiz</h2>
            <p className="score">
              {score} / {total}
            </p>
          </animated.div>
          <Link to="/">
            <button className="final_button">Orqaga Qaytish</button>
          </Link>
        </animated.div>
      </div>
    </>
  );
}

export default Final;
