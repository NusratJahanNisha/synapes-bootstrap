import React from 'react';


// -----------------------------Employee Benefit section of CAREER page-------------------------


const EmployeeBenefits = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <h1 style={{ textAlign: "center" }}>Employee Benefits</h1>
            <div className="row" style={{ padding: "50px" }}>
                <div className="col-md-6">
                    <h5>Talented teams, performance-based compensation</h5>
                    <p style={{ color: "grey" }}>The success of Synapes depends on the performance and dedication of our Group company associates. We strive to be an employer of choice that attracts, retains and motivates talented and performance-driven people in our affiliates around the world. Each associate is given a fixed salary based on job characteristics, market competitiveness and the associate’s skills. Salary growth depends on the associate's individual performance and level compared to the benchmark. Synapes benefits programs are an integral part of the total compensation policy and strategy and are designed to meet the challenges of the growing, global competition for talent. These programs support the overall business objectives and strategy of Synapes. Benefits are aligned with local legislation and practices in each country and are established to provide a framework of security for associates.</p>
                </div>
                <div className="col-md-6">
                    <img style={{ width: "100%" }} src="https://i.ibb.co/8KpPRKz/Employee-Benefits.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default EmployeeBenefits;