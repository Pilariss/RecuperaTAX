import React, { useState } from "react";

const formatCNPJ = (value) => {
  const cleaned = value.replace(/\D/g, ""); // Remove tudo que não for número

  return cleaned
    .slice(0, 14)
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
};

const validarCNPJ = (_cnpj) => {
  const cnpj = _cnpj.replace(/\D/g, ""); // Remove caracteres não numéricos

  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;

  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  const digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(0))) return false;

  tamanho += 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  return resultado === parseInt(digitos.charAt(1));
};

const CNPJInput = ({ onChange, ...props }) => {
  const [cnpj, setCNPJ] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleChange = (event) => {
    const rawValue = event.target.value;
    const formattedValue = formatCNPJ(rawValue);
    setCNPJ(formattedValue);

    if (formattedValue.replace(/\D/g, "").length === 14) {
      setIsValid(validarCNPJ(formattedValue));
    } else {
      setIsValid(null);
    }

    if (onChange) {
      onChange({
        ...event,
        target: { ...event.target, value: formattedValue, name: event.target.name },
      });
    }
  };

  return (
    <>
      <input
        type="text"
        value={cnpj}
        onChange={handleChange}
        maxLength={18}
        {...props}
      />
      {isValid === false && (
        <p style={{ color: "red", fontSize: 8 }}>CNPJ inválido</p>
      )}
    </>
  );
};

export default CNPJInput