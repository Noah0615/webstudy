import React, { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {

    const quizData = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Jupiter"
        },
        {
            question: "What is the boiling point of water?",
            options: ["0°C", "50°C", "100°C", "150°C"],
            answer: "100°C"
        },
    ];

    const initialAnswers = quizData.map(() => null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(initialAnswers);

    const setAnswerForQuestion = (index, answer) => {
        setUserAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[index] = answer;
            return newAnswers;
        });
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setUserAnswers(quizData.map(() => null));
    };

    return (
        <QuizContext.Provider
            value={{
                quizData,
                currentQuestion,
                setCurrentQuestion,
                userAnswers,
                setAnswerForQuestion,
                resetQuiz
            }}>
            {children}
        </QuizContext.Provider>
    );
};