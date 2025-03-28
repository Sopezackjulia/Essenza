// Importação de arquivos
import './home.css';
import { Link } from "react-router-dom";
import entreeImage from '../../assets/entrees.jpeg';
import dishesImage from '../../assets/dishes.jpg';
import dessertsImage from '../../assets/desserts.jpg';

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          {/* Links para as seções */}
          <a href="#section-entrees">ENTRADAS</a>
          <a href="#section-dishes">PRATOS</a>
          <a href="#section-desserts">SOBREMESAS</a>
          <Link to="/form">AGENDAMENTO</Link>
        </nav>
        <h1>Nosso cardápio</h1>
      </header>

      {/* Seção de entradas */}
      <section id="section-entrees">
        <div id="container-entrees">
          <h2>Entradas</h2>
          <div className="entrees">
            <h3>Bruschetta de Tomate e Manjericão</h3>
            <p>Fatias de pão italiano crocante com uma cobertura fresca de tomate, manjericão e azeite de oliva.</p>
            <p><strong>R$26,00</strong></p>
          </div>
          <div className="entrees">
            <h3>Mini Bolinhos de Bacalhau</h3>
            <p>Tradicionais bolinhos dourados, crocantes por fora e macios por dentro, feitos com bacalhau desfiado e temperos especiais.</p>
            <p><strong>$33,00</strong></p>
          </div>
          <div className="entrees">
            <h3>Creme de Abóbora com Gengibre</h3>
            <p>Sopa cremosa de abóbora levemente picante, finalizada com um toque de gengibre e creme de leite.</p>
            <p><strong>R$30,00</strong></p>
          </div>
          <div className="entrees">
            <h3>Carpaccio de Carne com Parmesão</h3>
            <p>Finas fatias de carne temperadas com azeite trufado, lascas de parmesão e rúcula fresca.</p>
            <p><strong>R$42,00</strong></p>
          </div>
        </div>
        <img src={entreeImage} />
      </section>
      {/* Seção de pratos */}
      <section id="section-dishes">
        <img src={dishesImage} />
        <div id="container-dishes">
          <h2>Pratos</h2>
          <div className="dishes">
            <h3>Risoto de Funghi e Grana Padano</h3>
            <p>Arroz arbóreo cremoso, cozido com cogumelos selecionados e finalizado com queijo Grana Padano.</p>
            <p><strong>R$68,00</strong></p>
          </div>
          <div className="dishes">
            <h3>Salmão Grelhado ao Molho de Maracujá</h3>
            <p>Filé de salmão grelhado, servido com molho agridoce de maracujá e acompanhado de arroz de amêndoas.</p>
            <p><strong>$75,00</strong></p>
          </div>
          <div className="dishes">
            <h3>Medalhão de Filé Mignon ao Molho Madeira</h3>
            <p>Filé mignon macio envolto em bacon, servido com molho madeira e purê de batatas trufado.</p>
            <p><strong>R$79,00</strong></p>
          </div>
          <div className="dishes">
            <h3>Ravioli de Queijo Brie com Molho de Pera e Nozes</h3>
            <p>Massa artesanal recheada com queijo brie, coberta com um delicado molho de pera caramelizada e nozes crocantes.</p>
            <p><strong>R$59,00</strong></p>
          </div>
        </div>
      </section>

      {/* Seção de sobremesas */}
      <section id="section-desserts">
        <div id="container-desserts">
          <h2>Sobremesas</h2>
          <div className="desserts">
            <h3>Tiramisù Clássico</h3>
            <p>Camadas de biscoito embebido em café, creme de mascarpone e cacau polvilhado.</p>
            <p><strong>R$35,00</strong></p>
          </div>
          <div className="desserts">
            <h3>Cheesecake de Doce de Leite</h3>
            <p>Base crocante de biscoito, recheio cremoso de queijo e cobertura generosa de doce de leite.</p>
            <p><strong>$28,00</strong></p>
          </div>
          <div className="desserts">
            <h3>Petit Gâteau de Chocolate com Sorvete de Baunilha</h3>
            <p>Bolinho quente de chocolate com recheio cremoso, servido com sorvete de baunilha.</p>
            <p><strong>R$21,00</strong></p>
          </div>
          <div className="desserts">
            <h3>Pavlova com Frutas Vermelhas</h3>
            <p>Merengue crocante por fora e macio por dentro, coberto com chantilly e frutas vermelhas frescas.</p>
            <p><strong>R$33,00</strong></p>
          </div>
        </div>
        <img src={dessertsImage} />
      </section>

      {/* Rodapé */}
      <footer>
        <p><strong>Essenza Gastronomia</strong></p>
        <p>Sabores que contam histórias, momentos que criam memórias.</p>
      </footer>
    </div>
  );
}
