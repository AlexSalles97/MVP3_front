import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.PNG';

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="content-product">
      <header>
      </header>
      <section className="banner">
        <img src={logo} alt="Logo" />
      </section>
      <section className="text-intro">
          <h2>Bem-vindo à Sallesianismo Store!</h2>
          <p>Confira as melhores peças para seu computador e potencialize seu desempenho:</p>
          <button className="more-info" onClick={() => navigate('/products')}>Entrar</button>
      </section>
      <footer>
        <p className="footer-text">&copy; 2023 Sallesianismo Store. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}