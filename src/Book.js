import React from "react";

const Book = (props) => {
  const { img, title, author } = props; //destructuring para no poner prop.img,title,author todo el rato en el return
  const clickHandler = () => {
    alert("Added");
  };
  const complexExample = (author) => {
    alert(`The Author is ${author}`);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1> {title} </h1> <h4> {author.toUpperCase()} </h4>{" "}
      {/* Evento que llama a la función ya creada: */}{" "}
      <button type="button" onClick={clickHandler}>
        Buy me{" "}
      </button>{" "}
      {/* Función en el mismo evento: */}{" "}
      {/* <button type="button" onClick={()=> console.log(title)}>Title me</button> */}{" "}
      <button type="button" onClick={() => complexExample(author)}>
        Who's the author?{" "}
      </button>{" "}
    </article>
  );
};

export default Book;
