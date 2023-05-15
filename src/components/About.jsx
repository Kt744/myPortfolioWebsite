import Kamlesh from '../assets/kamlesh.jpg'
import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import react from '../assets/react.png'

function About() {
    return (
        <>
        <div className="About">
            <div className="image">
            <img src={Kamlesh} alt="" />
            <div className='name'>Kamlesh Tailor</div>
            <div className='name-headline'>I'M React Developer</div>
            <div className='description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. 
            </div>
            <div className='buttons'>
                <button className=''>HIRE ME</button>
                <button className=''>DOWNLOAD MY CV</button>
            </div>
            </div>
            </div>
            <div className='Skills'>
                <div>Skills</div>
                <div className='skillsection1'>
                <div className='skillA'>
                    <div className='skillAimage'>
                        <img src={html} alt="" />
                    </div>
                    <div>HTML</div>
                    <div>Lorem Ipsum has been the industry's standard dummy text</div>
                </div>
                <div className='skillB'>
                    <div className='skillAimage'>
                        <img src={css} alt="" />
                    </div>
                    <div>CSS</div>
                    <div>Lorem Ipsum has been the industry's standard dummy text</div>
                </div>
                </div>
                <div className='skillsection2'>
                <div className='skillC'>
                    <div className='skillAimage'>
                        <img src={js} alt="" />
                    </div>
                    <div>JavaScript</div>
                    <div>Lorem Ipsum has been the industry's standard dummy text</div>
                </div>
                <div className='skillD'>
                    <div className='skillAimage'>
                        <img src={react} alt="" />
                    </div>
                    <div>React</div>
                    <div>Lorem Ipsum has been the industry's standard dummy text</div>
                </div>
            </div>
            </div>
            <div className='Education'>
                <div>Education And Experience</div>
                <div className='Education-container'>
                <div className='Education-box1'>
                <div className='Education1'>
                    <div>2013-14</div>
                    <div>10th</div>
                </div>
                <div  className='Education2'>
                    <div>2015-16</div>
                    <div>12th</div>
                </div>
                </div>
                <div className='Education-box2'>
                <div className='Education3'>
                    <div>2016-19</div>
                    <div>Polytechnic Diploma in Information Technology</div>
                </div>
                <div className='Education4'>
                    <div>2019-22</div>
                    <div>B.Tech in Information Technology</div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default About;