import React from 'react';


// ------------------------Why us section of CAREER page---------------------------


const Why = () => {
    return (
        <div>
            <p style={{ color: "grey", padding: "30px" }}>Our people are our future" People are the pivot in our organizational planning. Human Resource plays a key role and human capital forms the most crucial part of our organisation portfolio of privileged assets.</p>
            <div className="row" style={{ padding: "50px" }}>
                <div className="col-md-6">
                    <img style={{ width: "100%" }} src="https://i.ibb.co/ZTR91bx/why.jpg" alt="" />
                </div>
                <div className="col-md-6">
                    <h5>WHY Synapes ?</h5>
                    <p style={{ color: "grey" }}>Whether it’s helping invent the next breakthrough treatment or simply challenging and supporting one another for mutual betterment, our culture is about applied curiosity. We are dedicated to our team members’ growth and development, and empower each of them to reach their full potential regardless of function, geography or experience level. </p>
                    <h5>Why synapes ? Because we are:</h5>
                    <p style={{ color: "grey" }}>
                        Committed to fostering development and rewarding talent <br />
                    Dedicated to diversity and inclusion at every level of our organization <br />
                    Adept at recognizing unique skill sets and nurturing our employees’ talents </p>
                </div>
            </div>
        </div>
    );
};

export default Why;