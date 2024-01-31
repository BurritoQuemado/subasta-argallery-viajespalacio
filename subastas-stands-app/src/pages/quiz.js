import React from "react";
import { Quiz } from "../components"

function QuizPage({ user_id}) {
    
    return (
        <Quiz user_id={user_id}/>
    );
}

export default QuizPage;