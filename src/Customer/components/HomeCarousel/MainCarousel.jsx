import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <img className="ml-40 mt-10 cursor-pointer h-96"  src='https://t3.ftcdn.net/jpg/01/63/13/30/240_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg' role='presentation'/>,
    <img className="ml-40 mt-10 cursor-pointer h-96"  src='https://t3.ftcdn.net/jpg/06/09/31/24/240_F_609312487_cnMcTSARF8C4RMMDqkjkYxBBWE3MUH69.jpg' role='presentation'/>,
    <img className="ml-60 mt-10 cursor-pointer h-96"  src='https://t3.ftcdn.net/jpg/05/85/89/86/240_F_585898626_lraWQGtBdWyVMANAHWK9g81dyLwPEHiA.jpg' role='presentation'/>,
    <img className="ml-56 mt-10 cursor-pointer h-96"  src='https://t4.ftcdn.net/jpg/01/08/58/19/240_F_108581963_fUemW2wartQIgj7G1BKjdQm6PRHjyDqT.jpg' role='presentation'/>,
    <img className="ml-20 mt-10 cursor-pointer h-96"  src='https://t4.ftcdn.net/jpg/01/47/51/17/240_F_147511773_kUtulf4Dbydv9nonNx2q5vhh6JPwGaVq.jpg' role='presentation'/>
    
];

const MainCarousel = () => (
   
    <AliceCarousel
        items={items}
        disableButtonsControls
        disableDotsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);

export default MainCarousel;