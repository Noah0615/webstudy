import React, { useContext, useState } from "react";
import { QuizContext } from "../context/quiz-context";

const Result = () => {
    const { quizData, userAnswers, resetQuiz } = useContext(QuizContext);
    const [finished, setFinished] = useState(false);

    const score = userAnswers.reduce((acc, answer, index) => {
        return answer === quizData[index].answer ? acc + 1 : acc;
    }, 0);

    const handleFinish = () => {
        setFinished(true);
    };

    if (finished) {
        return (
            <div className="result-card fade-in">
                <h2 className="result-title">🎉 Thank you for playing!</h2>
                <p className="result-message">Hope you enjoyed the quiz!</p>
            </div>
        );
    }

    return (
        <div className="result-card fade-in">
            <h2 className="result-title">📊 Quiz Results</h2>
            <p className="result-score">
                You scored <span className="score-highlight">{score}</span> out of{" "}
                <span className="score-total">{quizData.length}</span>
            </p>
            <div className="nav-buttons">
                <button className="retry-button" onClick={resetQuiz}>
                    🔄 Retry Quiz
                </button>
                <button className="finish-button" onClick={handleFinish}>
                    ✅ Finish
                </button>
            </div>
        </div>
    );
};

export default Result;
