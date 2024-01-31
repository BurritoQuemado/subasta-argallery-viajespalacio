import React from "react";
import { Quiz } from "../components"

function QuizPage({ user_id}) {
    
    return (
        <>
            <div className="px-6 py-4 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="px-6 py-6 sm:px-6 sm:py-32 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="mx-auto mt-2 max-w-xl text-lg text-justify leading-6 text-gray-600">
                                Para conocer las preguntas y respuestas presta atención al presentador y a la pantalla, ya que ahí
                                es donde podras conocerlas.
                            </p>
                            <p className="mx-auto mt-2 max-w-xl text-lg text-justify leading-6 text-gray-600">
                                En este cuestionario no se puede retroceder de pregunta, así que elige sabiamente tu respuesta.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Quiz user_id={user_id}/>
        </>
    );
}

export default QuizPage;