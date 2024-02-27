import { useState } from "react";
import "./Header.css"



const Header = () => {

    const [openMenu, SetOpenMenu] = useState(false);

    const handleMenu = () => {
        SetOpenMenu((e) => !e);
    }
    return (
        <div className="Header">
            <div className="mainBg">
                <img className="H_bg" src="./img/ocean.jpg" />
                <img className="H_bg_pc" src="./img/ocean_1920.jpg" />
                <div className="main_txt">
                    <p>" 안녕하세요, </p>
                    <p><span>프론트엔드 개발자</span>를</p>
                    <p>꿈꾸는 <span>정기림</span>입니다. "</p>
                    <p>작디 작은 물방울이 모여 샘이 되고</p>
                    <p>그 샘은 강을 이루며 곧 바다가 됩니다.</p>
                    <p>저는 아직 작은 물방울이지만 <span>바다를 꿈꾸는 사람</span>입니다.</p>
                </div>
            </div>
            <div className="H_wrap">
                <div className="H_1f">
                    <p className="H_menu"><img onClick={handleMenu} src="./img/Header_menu.png" /></p>
                    <p className="title">KiRim's Portfolio</p>
                </div>
                <div className={openMenu ? 'H_2f show' : 'H_2f'}>                
                    <p>About Me</p>
                    <p>Skill</p>
                    <p>Project</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    );
}
export default Header;

