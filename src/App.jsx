import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";

/**
 * Podemos importar css, sempre no ficheiro App ou ficheiro que estamos a trabalhar. NUNCA no index.html. Para que os outros componentes nao recebam esta estilização, para nao haver problemas.
 */
import styles from "./App.module.css";
import "./global.css";
import { Post } from "./components/Post";

/**
 *  .JSX - Javascript + XML
 */

/**
 * Os componentes "exportados" podem receber Propriedades/atributos
 */
/**
 * Propriedades/Atributos podem ser recebidas e usadas através do parâmetro "props"
 *
 * podemos usar método destructing {author, content} = props
 */
function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}

/**
 * Default Exports vs Named Exports
 */
export default App;
