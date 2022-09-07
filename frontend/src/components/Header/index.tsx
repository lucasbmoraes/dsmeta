import logo from '../../assets/img/logo.svg';
import './style.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMEta</h1>
                <p>
                    Desenvolvido por <a href="https://github.com/lucasbmoraes">@lucasbmoraes</a>
                </p>
            </div>
        </header>
    )
}

export default Header;