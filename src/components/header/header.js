import { Link } from 'react-router-dom';
import pic from '../../assets/apo2.png'
import pic1 from '../../assets/apo3.png'
import pic2 from '../../assets/apo4.png'
import Nav from "../navbar/navbar";
import Cta from '../cta/cta';
import SocialHeader from '../social/social';
import "./header.css"


export default function Header() {
    return (
        <>
            <section id='#'>
               
                <header className=" pt-7 text-center justify-center">
                    <div className="text-center ">
                        <h5 className="px-5 mt-20 text-2xl">Hello I'm</h5>
                        <h1 className="text-4xl font-bold">Kevin Azanga Apo-era</h1>
                        <h5 className="text-light text-2xl">Web Developer</h5>
                        <Cta />
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <SocialHeader />
                            <div className=" overflow-hidden py-20 m-auto rounded-t-lg">
                                <img src={pic2} className=" bg-sky-300 " alt="" />
                            </div>
                            <button className="rotate-90">
                                <a href="#about" className='text-sky-300'> Scroll Down</a>
                            </button>

                        </div>
                    </div>

                </header>
            </section>
        </>
    )
}