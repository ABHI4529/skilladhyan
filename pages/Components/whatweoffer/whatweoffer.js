import offer from "../../../styles/whatweoffer.module.css";
import card_2 from "../../assets/card_2.png";
import card_3 from "../../assets/card_3.png";
import card_1 from "../../assets/card_1.png";
import Image from "next/image";

export default function WhatWeOffer(){
    return(
        <div className={offer.whatweoffer}>
            <h1>What We Offer</h1>
            <div className={offer.content}>
                <div className={offer.card}>
                    <Image src={card_1} height={"150px"} layout={"fixed"} width={"200px"} className={offer.cardImage}/>
                    <h1>Public Speaking</h1>
                    <p>
                        Our courses basically focus on
                        LSRW concept and develop a
                        strong, confident personality of
                        child.
                    </p>
                    <div className={offer.points}>
                        <div className={offer.points}>
                            <div className={offer.tick}/>
                            <p>Activity based learning</p>
                        </div>
                    </div>
                    <div className={offer.points}>
                        <div className={offer.points}>
                            <div className={offer.tick}/>
                            <p>Fluency of Speech</p>
                        </div>
                    </div>
                    <div className={offer.points}>
                        <div className={offer.points}>
                            <div className={offer.tick}/>
                            <p>Progress Report</p>
                        </div>
                    </div>
                    <button className={offer.button}>
                        Know More
                    </button>
                </div>
                <div className={offer.card}>
                    <Image src={card_2} height={"150px"} layout={"fixed"} width={"180px"} className={offer.cardImage}/>
                    <h1>Creative Writing</h1>
                    <p>
                        From Stories to essays as well
                        as answers requires a certain
                        amount of creative writing skills
                    </p>
                    <div className={offer.points}>
                        <div className={offer.points}>
                            <div className={offer.tick}/>
                            <p>Novel-Writing activities</p>
                        </div>
                    </div>
                    <div className={offer.points}>
                        <div className={offer.points}>
                            <div className={offer.tick}/>
                            <p>Learn script Writing</p>
                        </div>
                    </div>
                    <div className={offer.points}>
                        <div className={offer.points}>
                            <div className={offer.tick}/>
                            <p>Techniques of organise thoughts</p>
                        </div>
                    </div>
                    <button className={offer.button}>
                        Know More
                    </button>
                </div>
                <div className={offer.card}>
                    <Image src={card_3} height={"150px"} layout={"fixed"} width={"220px"} className={offer.cardImage}/>
                    <h1>Personalized Classes</h1>
                    <p>
                        Subject matter experts who focus
                        on a child's academics and
                        strengthen their basics in every
                        subject Each and every child will
                        be groomed under proper guidance
                        and personal training.
                    </p>
                    <div className={offer.points}>
                        <div className={offer.points}>
                            <div className={offer.tick}/>
                            <p>Flexible Schedule</p>
                        </div>
                    </div>
                    <div className={offer.points}>
                        <div className={offer.points}>
                            <div className={offer.tick}/>
                            <p>Live Classes</p>
                        </div>
                    </div>
                    <div className={offer.points}>
                        <div className={offer.points}>
                            <div className={offer.tick}/>
                            <p>Interactive Assignments</p>
                        </div>
                    </div>
                    <button className={offer.button}>
                        Know More
                    </button>
                </div>
            </div>
        </div>
    )
}