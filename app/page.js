"use client";
import { useEffect, useState } from "react";
import Form from "./component/Form";
import { applyAnimation } from "../animations/animation";

export default function Home() {
  const [result, setResult] = useState(null);
  useEffect(() => {
    applyAnimation();
  }, []);
  const handleDniSubmit = async (dni) => {
    try {
      const response = await fetch(
        `https://apiperu.dev/api/dni/${dni}?api_token=72e1027da1674650d1d20093819ef6a4c83078bae91b1340c37e6f14e7ba4a77`, // Replace with your actual API token
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error al consultar el DNI");
      }

      const data = await response.json();
      setResult(data);
      console.log(result);
    } catch (error) {
      console.error("Error al consultar el DNI", error);
      setResult(null);
    }
  };

  return (
    <div className="w-full h-full">
      <Form onSubmit={handleDniSubmit} />

      <section className="card_section" id="card_section">
        <div className="info_card">
          <button className="btn btn_close_card" id="btn_close_card">
            {" "}
            <img className="icon" src="/close.svg" alt="icono cerrar" />
          </button>
          <div className="info">
            <h1 className="title">INFORMACIÓN</h1>
            <div className="user_container">
              <img className="icon" src="/user.svg" alt="icono usuario" />
            </div>
            <div className="info_content">
              <p>
                <span>DNI:</span>
                {result && result.data.numero}
              </p>
              <p>
                <span>Nombre:</span>
                {result && result.data.nombres}
              </p>
              <p>
                <span>Apellido:</span>
                {result &&
                  result.data.apellido_paterno +
                    " " +
                    result.data.apellido_materno}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
