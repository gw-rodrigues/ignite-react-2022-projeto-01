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

/**
 * author: { avatarUrl:"", name:"", role:"" }
 * publishedAt: Date
 * content: String
 */

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gw-rodrigues.png",
      name: "Gleydson W. Rodrigues",
      role: "Front-end Dev",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
      { type: "tag", content: "#novoprojeto" },
      { type: "tag", content: "#nlw" },
      { type: "tag", content: "#rocketseat" },
    ],
    publishedAt: new Date("2022-10-17 15:15:00"),
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educador @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
      { type: "tag", content: "#novoprojeto" },
      { type: "tag", content: "#nlw" },
      { type: "tag", content: "#rocketseat" },
    ],
    publishedAt: new Date("2022-09-15 15:15:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

/**
 * Default Exports vs Named Exports
 */
export default App;
