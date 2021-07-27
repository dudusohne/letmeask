import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';

export function NewRoom() {
    // const { user } = useContext(AuthContext);
    
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilsutração" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <h2>criar uma nova sala</h2>

                    <form>
                        <input
                            type="text"
                            placeholder="digite o código da sala"
                        />
                        <Button type="submit">
                            entrar na sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala já existente? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}

