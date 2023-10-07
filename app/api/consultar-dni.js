export const consultarDni = async (req, res) => {
  const { dni } = req.body;

  try {
    // Replace this with actual logic to fetch data based on the provided DNI
    const data = {
      apellidos: "Apellido Ejemplo",
      nombres: "Nombre Ejemplo",
    };
    res.status(200).json(data);
  } catch (error) {
    console.error("Error al consultar el DNI", error);
    res.status(500).json({ error: "Error al consultar el DNI" });
  }
};

export default consultarDni;
