import React, { useEffect, useState } from "react";
import { applyAnimation } from "../../animations/animation";

const Form = ({ onSubmit }) => {
  //   useEffect(() => {
  //     applyAnimation();
  //   }, []);
  const [dni, setDni] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(dni); // Call the onSubmit function if it's a valid function
  };
  return (
    <div>
      <div className="card_container">
        <form onSubmit={handleSubmit}>
          <h1>Formulario Web</h1>
          <input
            type="number"
            className="dni_input"
            name="dni"
            id="dni"
            placeholder="Ingrese su DNI"
            onChange={(e) => setDni(e.target.value)}
            required
          />
          <button
            type="submit"
            id="btn_submit"
            className="btn btn_submit"
            value="Enviar"
          >
            Enviar
          </button>
        </form>
        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            placeholder="Ingrese el DNI"
          />
          <button type="submit">Consultar</button>
        </form> */}
      </div>
    </div>
  );
};

export default Form;
