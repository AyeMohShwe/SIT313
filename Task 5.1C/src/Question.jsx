import React from "react";
import "./Question.css";

function Question(){
    return(
        <div>
            <div className="t1">
                <h4>Title:</h4><input className="Title" placeholder="Start your question with how, what,why,etc" />
            </div>

            <div className="t2">
                <h4>Describe your problem</h4><textarea className="problem" ></textarea>
                <div className="t3"> 
                    <h4>Tags:</h4><input className="Title" placeholder="Please add up to 3 tags describe what your question is about e.g.,Java " />
                </div>
                <button className="post">Post</button>
            </div>
        </div>
)
}
export default Question ;