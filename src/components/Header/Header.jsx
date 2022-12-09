import { LOGO } from "../../libs/constantes";
import "../../style.css"

const Header = () => {
    return (
            <header><img src={LOGO} width="60" alt="Logo de noticias" /><center><h4>INFORMATORIO</h4></center></header>
    )
};

export default Header;