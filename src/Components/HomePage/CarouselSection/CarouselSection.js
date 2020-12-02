import React from 'react';


// ----------------------------Carousel of HOME page---------------------------------


const CarouselSection = () => {

    return (
        <div style={{ paddingTop: "5px" }}>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{ height: "550px", width: "100%" }} src="https://i.ibb.co/jTLdCym/logo2.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img style={{ height: "550px", width: "100%" }} src="https://i.ibb.co/tcKsv3f/health.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img style={{ height: "550px", width: "100%" }} src="https://i.ibb.co/Hdz1w9j/slide3.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default CarouselSection;