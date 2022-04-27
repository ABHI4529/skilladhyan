import section_4 from "../../../styles/section_4.module.css";
import Image from "next/image";
import Contact_Icon from "../../assets/contact_icon.png";
import MainImage from "../../assets/mail_image.png";

export default function Section_4(){
    return(
        <div className={section_4.section_4}>
            <div className={section_4.title}>
                <h1>Lets Learn Together</h1>
                <p>We recognize that students will learn more through stories  or
                    practical format and we are ready to provide them with  an endless number
                    of opportunities.</p>
                <a>Get Started</a>
            </div>
            <div className={section_4.contact}>
                <div className={section_4.contactCard}>
                    <div className={section_4.image}>
                        <Image src={Contact_Icon} layout={"fixed"} height={30} width={20}/>
                    </div>
                    <p>+91 75320 40455</p>
                </div>
                <div className={section_4.contactCard}>
                    <div className={section_4.image}>
                        <Image src={MainImage} layout={"fixed"} height={30} width={20}/>
                    </div>
                    <p>skilladhyan@gmail.com</p>
                </div>
            </div>
        </div>
    )
}