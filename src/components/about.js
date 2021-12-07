import React from 'react'
import Sahil from '../images/du.jpg'

export const About = () => {
    return (
        <div>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                <div className="section-title">
                <h2>About</h2>
                <p>Hello Intellegent Mate, This is Sahil Duhan, an Ingenious and determined Coding Enthusiast, learning and enhancing my skills. I'm National level public speaker and national level volleyball player, a born leader and a fitness freak by nature.#peace</p>
                    </div>
                        <div className="row">
                        <div className="col-lg-4">
                        <img src={Sahil} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>UI/UX Designer &amp; Web Developer.</h3>
                            <p className="fst-italic">
                            Hello Mate, This is Sahil duhan, an upcoming SDE
                            </p>
                            <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>16 Septemner 2001</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>sahilduhan.me</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9560826298</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Delhi, India</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Persuing Bachellors of Technology</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>duhan.sahil16@gmail.com</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                         <p>
                         Hey Buddy, This is Sahil Duhan currently pursuing my bachellors of technology from Delhi Technological University in Software Engineering, and i love to code
                         </p>
            </div>
            </div>
        </div>
    </section>
    </div>
    )
}
