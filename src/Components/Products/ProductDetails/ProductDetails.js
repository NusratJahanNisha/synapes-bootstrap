import React from 'react';
import './ProductDetails.css';


// -----------------------Product details section of PRODUCTS page------------------------------------


const ProductDetails = () => {
    return (
        <div style={{ margin: "50px" }}>
            <div className="row" style={{ padding: "30px" }}>
                <div className="col-md-4 box">
                    <img style={{ width: "100%", height: "200px" }} src="https://i.ibb.co/yP08HNy/1big.jpg" alt="" />
                    <h3 style={{ textAlign: "center", color: "black" }}>MOXY-S™</h3>
                    <p style={{ color: "orange", textAlign: "center" }}>AMOXYCILLIN SODIUM 1000MG + SULBACTAM 500MG</p>
                </div>
                <div className="col-md-4 box">
                    <img style={{ width: "100%", height: "200px" }} src="https://i.ibb.co/ZckGvmN/2big.jpg" alt="" />
                    <h3 style={{ textAlign: "center", color: "black" }}>LARI-GO™</h3>
                    <p style={{ color: "orange", textAlign: "center" }}>ARTESUNATE 60MG</p>
                </div>
                <div className="col-md-4 box">
                    <img style={{ width: "100%", height: "200px" }} src="https://i.ibb.co/S0gHYP5/3big.jpg" alt="" />
                    <h3 style={{ textAlign: "center", color: "black" }}>MEROGOLD™</h3>
                    <p style={{ color: "orange", textAlign: "center" }}>MEROPENEM 1GM</p>
                </div>
            </div>
            <div className="row" style={{ padding: "30px" }}>
                <div className="col-md-4 box">
                    <img style={{ width: "100%", height: "200px" }} src="https://i.ibb.co/9n8wfn4/5big.jpg" alt="" />
                    <h3 style={{ textAlign: "center", color: "black" }}>MEROGOLD-S™</h3>
                    <p style={{ color: "orange", textAlign: "center" }}>MEROPENEM + SULBACTAM (2:1) 1.5GM</p>
                </div>
                <div className="col-md-4 box">
                    <img style={{ width: "100%", height: "200px" }} src="https://i.ibb.co/HqCGPg1/6big.jpg" alt="" />
                    <h3 style={{ textAlign: "center", color: "black" }}>PIPTAA™</h3>
                    <p style={{ color: "orange", textAlign: "center" }}>PIPERACILLIN + TAZOBACTAM 4.5GM</p>
                </div>
                <div className="col-md-4 box">
                    <img style={{ width: "100%", height: "200px" }} src="https://i.ibb.co/xFd77L9/7big.jpg" alt="" />
                    <h3 style={{ textAlign: "center", color: "black" }}>CEFTOR™</h3>
                    <p style={{ color: "orange", textAlign: "center" }}>CEFTRIAXONE 1GM</p>
                </div>
            </div>
            <div className="row" style={{ padding: "30px" }}>
                <div className="col-md-4 box">
                    <img style={{ width: "100%", height: "200px" }} src="https://i.ibb.co/zx3PQd7/8big.jpg" alt="" />
                    <h3 style={{ textAlign: "center", color: "black" }}>CEFTOR™</h3>
                    <p style={{ color: "orange", textAlign: "center" }}>CEFTRIAXONE 2GM</p>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
};

export default ProductDetails;