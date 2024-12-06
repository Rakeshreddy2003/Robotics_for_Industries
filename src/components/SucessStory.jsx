import { useState, useEffect } from "react";
import "../styles/SucessStory.css";

function SuccessStory() {
    const [currentIndex, setCurrentIndex] = useState(0);


    const cards = [
        {
            id: 1,
            img: "https://plus.unsplash.com/premium_photo-1661421746164-b8b53de3bd4e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZCUyMHNoYWtlfGVufDB8fDB8fHww",
            text: "Another amazing success story with exciting features and benefits for kids.",
        },
        {
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5JtwNePDD6X2GhMQJQWEAD5Hpan002O3WA&s",
            text: "Another amazing success story with exciting features and benefits for kids.",
        },
        {
            id: 3,
            img: "https://thumbs.dreamstime.com/b/close-up-hand-shake-business-people-concept-trustworthy-relations-business-cooperation-33409175.jpg",
            text: "Explore the best-in-class kids' GPS trackers with incredible technology.",
        },
    ];

    useEffect(() => {
        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        };

        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [cards.length]);


    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };


    const getClassName = (index) => {
        if (index === currentIndex) return "carousel-card larger-card";
        if (index === (currentIndex + 1) % cards.length) return "carousel-card smaller-card next-card";
        if (index === (currentIndex - 1 + cards.length) % cards.length)
            return "carousel-card smaller-card prev-card";
        return "carousel-card hidden-card";
    };


    return (


        <div className="success-carousel success-story container">
            <h2 className="pb-2 text-center fs-1 mt-5">Our Success Track</h2>
            <div className="carousel-container">
                {cards.map((card, index) => (
                    <div key={card.id} className={getClassName(index)}>
                        <img src={card.img} alt={`Success Story ${card.id}`} />
                        <p>{card.text}</p>
                    </div>
                ))}
                
            </div>

            <div className="carousel-controls">
                <button className='dot-btn' onClick={handlePrev}></button>
                <button className='dot-btn' onClick={handleNext}></button>
            </div>
        </div>


    );
}

export default SuccessStory;
