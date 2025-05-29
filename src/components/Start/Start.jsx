import React from "react";
import bird_1 from "../../assets/bird_1.png";
import bird_right from "../../assets/bird_right.png";
import big_bird_1 from "../../assets/bird_big_1.png";
import big_bird_2 from "../../assets/bird_big_2.png";
import "./Start.css";
import "./Startmedia.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Start() {
  const springs = useSpring({
    from: {
      opacity: 0,
      scale: 0,
      friction: 20,
      y: -50,
    },
    to: {
      opacity: 1,
      scale: 1,
      friction: 0,
      y: 200,
    },
    config: { duration: 500 },
  });
  const birdSpring = useSpring({
    from: { x: -100 },
    to: { x: 0 },
    config: { duration: 1000 },
  });

  return (
    <>
      <div className="inter_start">
        <div className="light_green"></div>
        <animated.div style={{ ...birdSpring }}>
          <img className="big_bird_1" src={big_bird_1} alt="" />
        </animated.div>
        <animated.div style={{ ...springs }} className="start_texts">
          <h1 className="start_title">Kids Quiz</h1>

          <img className="img_bird_1" src={bird_right} alt="error" />
          <Link to="/direct-test">
            <div className="start_button">
              <img src={bird_1} alt="error" />
              <h3>Start</h3>
            </div>
          </Link>
        </animated.div>
        <img className="big_bird_2" src={big_bird_2} alt="" />
      </div>
    </>
  );
}

export default Start;
