const Challeng = () => {
  const valor1 = 4;
  const valor2 = 6;

  const somar = () => {
    console.log(valor1 + valor2);
  };

  return (
    <div>
      Componente Challeng
      <p>valor1 = {valor1}</p>
      <p>valor2 = {valor2}</p>
      <button onClick={somar}>somar</button>
    </div>
  );
};

export default Challeng;
