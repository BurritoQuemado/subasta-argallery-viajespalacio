    import React, { useState } from "react";
    import questions from "../../questions";
    import { Link } from "react-router-dom";

    const Quiz = ({user_id}) => {
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [result, setResult] = useState(0);
        const [showResult, setShowResult] = useState(false);
        
        const { question, correct_answer } = questions[currentQuestion];
        
        const chooseAnswer = (option) => {
            if(currentQuestion < questions.length - 1) {
                if (option === correct_answer) {
                    setResult(result + 1);
                }
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResult(true);
            }
        }
        return (
            <>
                { !showResult ?
                <div className="bg-white px-4 py-2 ">
                    <div className="">
                        <div className="text-right">
                            <span >{currentQuestion + 1}</span>
                            <span>/{questions.length}</span> 
                        </div>
                        <div>
                            <div className="py-4">
                                <h2 className="text-center">{question}</h2>
                            </div>
                            <div className="grid grid-rows-4 gap-2">
                                <button className="justify-center text-black rounded-md bg-principal border border-principal mx-10 my-2 py-1" onClick={() => chooseAnswer(1)}>Opción 1</button>
                                <button className="justify-center text-black rounded-md bg-principal border border-principal mx-10 my-2 py-1" onClick={() => chooseAnswer(2)}>Opción 2</button>
                                <button className="justify-center text-black rounded-md bg-principal border border-principal mx-10 my-2 py-1" onClick={() => chooseAnswer(3)}>Opción 3</button>
                                <button className="justify-center text-black rounded-md bg-principal border border-principal mx-10 my-2 py-1" onClick={() => chooseAnswer(4)}>Opción 4</button>
                            </div>
                        </div>
                    </div>
                </div> 
                : <div className="bg-white px-4 py-5">
                    <div className="text-center">
                        <h2 className="font-bold">Tu resultado es: {result}/{questions.length}</h2>
                    </div>
                    <div className="text-center">
                        <p>Con este resultado obtuviste <b>{result * 1000 }</b> Cryptomonedas</p>
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                        to={'/cartera-desc'}
                        className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                        >
                            Regresar
                        </Link>
                    </div>
                </div> }
            </>
        );
    }

    export default Quiz;