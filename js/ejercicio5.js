const conversion = (num) => {
  return num * 60;
};

let horas = 12;
let minutos = 30;

console.log(`Son las ${horas}:${minutos}`);
console.log(
  `En total serian: ${conversion(minutos) + conversion(conversion(horas))}s`,
);
