import "../../style.css"
import './Header.css';
import {BANNER} from "../../libs/constantes";

const Header = () => {
    return (
            <header><img className="ImgLogo" src={BANNER} height="120" alt="Logo de noticias"/>
            </header>
    )
};

export default Header;