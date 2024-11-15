import certificate1 from '../assets/certificate1.png';
import certificate2 from '../assets/certificate2.png';
const Experience = () => {
    return (
        <div className="experience">
            <h2>Resume</h2>

            <ul>
                <li>
                    <i>St. Michael's Convent School </i>, 2011-2013
                    <ul>
                        <li>Did my O levels</li>
                        <ul>Subjects with grades were:
                            <li>Computer A*,Maths A, Physics A, Chemistry A,
                                Biology A, English B, Urdu A, Islamiyat A, Pakistan Studies A</li>
                        </ul>
                    </ul>
                </li>
                <li>
                    <i>Avicenna School </i>, 2011-2013
                    <ul>
                        <li>Did my A levels for 2 years</li>
                        <ul>Subjects were:
                            <li>Maths, Physics,Chemistry, General</li>
                        </ul>
                    </ul>
                </li>
                <li>
                    <i>DHA Suffa University</i>, 2013-2015
                    <ul>
                        <li>studied Bs Computer science for 2 years</li>
                        <ul><li>Semester 1 3.6 gpa</li>
                            <li>Semester2  4.0gpa</li>
                            <li>Semester3  3.96gpa</li>
                            <li>Semester4  3.61gpa.</li>
                        </ul>
                    </ul>
                </li>
                <li>
                    <i>Coursera: The Honkong Univeristy of Science and Technology</i> - <strong>Front-End Web UI Frameworks and Tools: Bootstrap 4
                    </strong>, 2022
                    <ul>
                        <li>Studied front-end web development with Bootstrap 4</li>
                        <li><img src={certificate1} alt="Bootstrap certificate" /></li>
                    </ul>
                </li>
                <li>
                    <i>Coursera: The Honkong Univeristy of Science and Technology</i> - <strong>Front-end web development with React Native</strong>,2022
                    <ul>
                        <li>Studied making react based applications</li>
                        <li><img src={certificate2} alt="React certificate" /></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Experience;