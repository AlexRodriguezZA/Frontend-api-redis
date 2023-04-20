const reservarCapitulo = async (capitulo) => {
    try {
      const response = await fetch(`http://localhost:3000/reservar/${capitulo}`);
      const data = await response.text();
      console.log(data); // "ok" si la operación tuvo éxito
    } catch (error) {
      console.error(error);
    }
  }

export default reservarCapitulo;