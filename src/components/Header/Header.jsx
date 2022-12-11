import { LOGO } from "../../libs/constantes";
import "../../style.css"

const Header = () => {
    return (
            <header><img src={LOGO} width="60" alt="Logo de noticias"/> <h5>INFORMATORIO</h5>
            </header>
    )
};

export default Header;