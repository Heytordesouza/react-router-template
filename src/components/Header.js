import {goToHomePage, goToProfilePage , goToLoginPage} from "../Router/coordinator"
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  return (
    <header>
      <button onClick={() => goToHomePage(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => goToProfilePage(navigate, "Heytor")}>
        Ir para página de perfil
      </button>
      <button onClick={() => goToLoginPage(navigate)}>
        Ir para página de Login
      </button>
    </header>
  );
}

export default Header;
