import reactLogo from "./assets/react.svg";
import Cabecalho from "./components/Cabecalho";

export default function App() {
  
  //ÁREA DECLARATIVA

  let reactLogoTextoAlt = "Logo do React";

  return (
    <>
      {/* Área imperativa! */}
      <div>
        {/* Um cabeçalho com um header, um h1, uma lista ul com 3 itens com 3 links. */}

      <Cabecalho/>

        {/* Uma seção com uma div com 3 parágrafos, com 3 linhas de lorem, uma imagem */}
        <section>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium repudiandae enim delectus deserunt itaque necessitatibus, obcaecati fugiat suscipit quasi error animi impedit esse distinctio! Cum impedit modi tempora laborum?</p>
            <p>Incidunt quaerat id neque non dolores atque architecto, praesentium rerum, veritatis magnam iure rem commodi itaque illo vel modi numquam libero quam labore exercitationem laboriosam fuga est. Nam, nostrum commodi!</p>
            <p>Velit tempora, hic facilis suscipit, beatae aliquid saepe harum aspernatur deserunt unde dicta blanditiis quod maiores accusantium sunt, itaque odit. Facilis magnam eius sapiente illo reiciendis quisquam saepe nisi at?</p>
            <img src={reactLogo} alt={reactLogoTextoAlt} />
          </div>
        </section>
        
        {/* Um rodapé com uma div, uma lista ul com 3 itens e links para redes sociais */}
        <footer>
          <div>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">X</a></li>
              <li><a href="#">Reddit</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}
