import "./AboutMe.css";

const AboutMe = () => {
    return(
        <div className="AboutMe">
            <div className="AboutTitle">
                ABOUT ME
            </div>
            <div className="introduce intr_name">
                <img className="waterImg" src="./img/water.png" />
                <div className="waterTxt water_name">
                    <p>이름</p>
                    <p>정기림</p>
                </div>
            </div>
            <div className="introduce intro_birth">
                <img className="waterImg" src="./img/water.png" />
                <div className="waterTxt water_birth">
                    <p>생년월일</p>
                    <p>1990.01.31</p>
                </div>
            </div>
            <div className="introduce intro_Email">
                <img className="waterImg" src="./img/water.png" />
                <div className="waterTxt water_Email">
                    <p>이메일(구글)</p>
                    <p>jkirin900131</p>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;