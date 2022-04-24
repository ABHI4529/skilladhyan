import home from "../../styles/Home.module.css";
import WhatWeOffer from "../Components/whatweoffer/whatweoffer";
import Section_3 from "../Components/section_3/seaction_3";


export default function HomePage(){
    return(
        <div className={home.home}>
            <div className={home.division}>
                <div className={home.title}>
                    <div className={home.component}/>
                    <h1>Be The Most<br/>Confident Child</h1>
                    <p>Our aim is to make every child a fearless public
                        speaker so they can present their ideas, feelings
                        and point of view to people without any hesitation
                        and fear.</p>
                </div>
                <form className={home.form}>
                    <p>SCHEDULE YOUR FREE TRIAL SESSION</p>
                    <div className={home.scheduleForm}>
                        <input className={home.input} type={"Name"} placeholder={"Name"}/>
                        <input className={home.input} type={"Email"} placeholder={"Email"}/>
                        <select className={home.input}>
                            <option>Select Class</option>
                            <option>1</option>
                        </select>
                        <textarea className={home.inputMessage} placeholder={"Message"}/>
                    </div>
                    <button className={home.button}>Submit</button>
                </form>
            </div>
            <WhatWeOffer/>
            <Section_3/>
        </div>
    )
}