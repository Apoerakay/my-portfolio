import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import whatsapp from "../../assets/whatsapp.png"
import email from "../../assets/mail.png"
import facbook from "../../assets/facebook (1).png"

export default function Contact() {
    const [test, SetTest] = useState('');

    const handleOnClick = () => {
        // speck ({text:text})
    };

    return (
        <>
            <section id="contact" className="ml-5"> {/* Apply ml-5 class for 5% left margin */}
                <h3 className="text-center">Get In Touch</h3>
                <h1 className="text-center font-bold text-3xl text-sky-300">Contact Me</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-20 text-center">
                    <div className="grid grid-rows-4 grid-flow-col gap-5 w-80">
                        {/* Email */}
                        <div className="bg-slate-950 hover:bg-slate-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 border-solid border-2 border-sky-200 rounded p-1">
                        <img src={email} className="w-20 justify-center m-auto "></img>
                            <h2 className="text-2xl font-bold">Email</h2>
                            <h4>jademest@gmail.com</h4>
                            <li><button onClick={() => window.location = 'mailto:yourmail@domain.com'} className="hover:underline hover:underline-offset-8 hover:cursor-pointer p-4 ">Send A Message</button></li>
                        </div>

                        {/* Facebook Messenger */}
                        <div className="bg-slate-950 hover:bg-slate-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 border-solid border-2 border-sky-200 rounded p-1">
                        <img src={facbook} className="w-20 justify-center m-auto "></img>
                            <h2 className="text-2xl font-bold">Facebook Messager</h2>
                            <Link to="https://facebook.com" target="_blank" className="text-sky-300">Send a Message</Link>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-slate-950 hover:bg-slate-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 border-solid border-2 border-sky-200 rounded p-1">
                            <img src={whatsapp} className="w-20 justify-center m-auto "></img>
                            <h2 className="text-2xl font-bold">WhatsApp</h2>
                            <Link to="https://api.whatsaap.com/send?phone+233248206242" target="_blank" className="text-sky-300">Send a Message</Link>
                        </div>
                    </div>
                    <div className="p-20">
                        <form className="grid grid-rows-4 grid-flow-col gap-4 text-center bg-transparent p-2">
                            <input type="text" className="border-solid border-2 border-sky-200 rounded p-1 w-96 bg-transparent text-gray-200" placeholder="Your full name" required />
                            <input type="text" className="border-solid border-2 border-sky-200 rounded w-96 bg-transparent text-gray-200" placeholder="Your Email" required />
                            <div className="w-96 text-center bg-transparent">
                                <textarea name="" id="" cols="" rows="" className="w-96 text-cente bg-transparent border-solid border-2 border-sky-200 text-gray-200" onChange={(e) => { SetTest(e.target.value) }} placeholder="Your Message" required></textarea>
                            </div>
                            <div>
                                <button className="text-center text-sky-300 bg-gray-500 px-3 py-2 rounded-2xl"  >Send Message</button>
                                {/* <button className="" onClick={() => { handleOnClick() }}>Listen</button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
