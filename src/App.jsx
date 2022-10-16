import Header from "./components/Header";
import Post from "./Post";

/**
 * Podemos importar css, sempre no ficheiro App ou ficheiro que estamos a trabalhar. NUNCA no index.html. Para que os outros componentes nao recebam esta estilização, para nao haver problemas.
 */
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

/**
 *  .JSX - Javascript + XML
 */

/**
 * Os componentes "exportados" podem receber Propriedades/atributos
 */
function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="User-1"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti dolorum vero ducimus iste blanditiis ea adipisci officiis debitis modi reprehenderit enim quod sit, beatae aliquam expedita? Minima aspernatur natus et?"
          />
          <Post
            author="User-2"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti dolorum vero ducimus iste blanditiis ea adipisci officiis debitis modi reprehenderit enim quod sit, beatae aliquam expedita? Minima aspernatur natus et?"
          />
        </main>
      </div>
    </>
  );
}

/**
 * Default Exports vs Named Exports
 */
export default App;
