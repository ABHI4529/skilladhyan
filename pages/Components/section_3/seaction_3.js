import section from "../../../styles/section_3.module.css"
import Image from "next/image";
import section_3_card_1  from "../../assets/section_3_card_1.png";
import section_3_card_2 from "../../assets/section_3_card_2.png";
import section_3_card_3 from "../../assets/section_3_card_3.png";

export default function Section_3(){
    return(
        <div className={section.section3}>
            <div className={section.section_3_1}>
                <div className={section.card}>
                    <div className={section.card_image}>
                        <Image src={section_3_card_1} height={"200px"} width={"200px"} layout={"fixed"}/>
                    </div>
                    <h1>CHAT WITH AN EXPERT</h1>
                    <button className={section.button}>Live Chat</button>
                </div>
                <div className={section.card}>
                    <div className={section.card_image}>
                        <Image src={section_3_card_2} height={"200px"} width={"200px"} layout={"fixed"}/>
                    </div>
                    <h1>SEARCH FOR A TUTOR</h1>
                    <button className={section.button}>Search</button>
                </div>
                <div className={section.card}>
                    <div className={section.card_image}>
                        <Image src={section_3_card_3} height={"200px"} width={"200px"} layout={"fixed"}/>
                    </div>
                    <h1>BOOK A LESSON</h1>
                    <button className={section.button}>Book</button>
                </div>
            </div>
            <div className={section.impact}>
                <h1>Our<br/>Impact</h1>
                <div className={section.impactCard}>
                    <h2>100+</h2>
                    <p>Teachers</p>
                </div>
                <div className={section.impactCard}>
                    <h2>200+</h2>
                    <p>Skill Course Response</p>
                </div>
                <div className={section.impactCard}>
                    <h2>1000+</h2>
                    <p>Hours of Teaching</p>
                </div>
            </div>
        </div>
    )
}