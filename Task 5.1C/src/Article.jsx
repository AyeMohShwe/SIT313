import React from "react";
import "./Article.css"

function Article(){
    return(
        <div>
            <div className="t1">
                <h4>Title:</h4><input className="Title" placeholder="Enter a descriptive title" />
            </div>
            <div className="t2">
                <h4>Abstract</h4><textarea placeholder="Enter a 1-paragraph abstract" className="abstract" />
            </div>
            <div className="t4"> 
                <h4>Article Text</h4><textarea placeholder="Enter a 1-paragraph abstract" className="text" />
            </div>
            <div className="t5">
                <h4>Tags:</h4><input className="Title" placeholder="Please add up to 3 tags describe what your article is about e.g.,Java " />  
            </div>
            <button className="post">Post</button>
        </div>
)
}
export default Article