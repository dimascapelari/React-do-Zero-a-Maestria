const TemplateExpressions = () => {
  const name = "Dimas";
  const data = {
    age: 40,
    job: "Programmer",
  };

  return (
    <div>
      <h2>Olá {name}, tudo bem?</h2>
      <p>Você atua como: {data.job}</p>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExpressions;
