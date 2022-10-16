/**
 * Propriedades/Atributos podem ser recebidas e usadas através do parâmetro "props"
 *
 * podemos usar método destructing {author, content} = props
 */
export default function Post({ author, content }) {
  return (
    <>
      <h1>{author}</h1>
      <p>{content}</p>
    </>
  );
}
