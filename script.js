// Criar tabela
const table = document.createElement("table");
const tudo = document.getElementById("tabela");

// Tabela UFESP
const ValorUFESP_2024 = 35.36;
const AliquotaFixa_2024 = 0.04;

tudo.style.display = "flex";
tudo.style.justifyContent = "center";
table.style.width = "50vw";
table.style.border = "none";

// Criar linhas e colunas
const rows = [];
for (let i = 0; i < 4; i++) {
  rows.push(table.insertRow());
  rows[i].insertCell();
  rows[i].insertCell();

  // Alternating row colors
  rows[i].style.backgroundColor = i % 2 === 0 ? "white" : "#ebfbff";
}

rows[0].cells[0].textContent = "Base para Cálculo em UFESP:";
rows[1].cells[0].textContent = "Valor Proposto - Em UFESP:";
rows[2].cells[0].textContent = "Valor Proposto - Em R$:";
rows[3].cells[0].textContent = "Carga Tributária";

// Create input element for user number
const inputCell = rows[0].cells[1];
const userInput = document.createElement("input");
userInput.type = "text"; // Change type to text
userInput.placeholder = "Digite o valor";
userInput.style.display = "flex";
userInput.style.textAlign = "right"; // Align input to the right
userInput.style.border = "0";
userInput.style.width = "100%"; // Adjust width to fill the cell
userInput.id = "userNumber";
inputCell.appendChild(userInput);

// Align text on the right side
for (let i = 0; i < rows.length; i++) {
  rows[i].cells[1].style.textAlign = "right";
}

rows[1].cells[1].textContent = "R$ 0,00";
rows[2].cells[1].textContent = "R$ 0,00";
rows[3].cells[1].textContent = "0%";

// Event Listener
userInput.addEventListener("input", function () {
  // Remove caracteres não-númericos
  this.value = this.value.replace(/[^\d.,]/g, "");

  // Troca vírgulas por pontos (apenas para cálculo)
  let sanitizedValue = this.value.replace(",", ".");

  // If input is null or empty, set number to 0
  let number = sanitizedValue.trim() === "" ? 0 : parseFloat(sanitizedValue);

  // Formatar números em português
  const numberFormatter = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // ---------------- Cálculos ------------------
  // Tabela UFESP
  if (number > 0 && number <= 10000) {
    // console.log("Faixa 1");
  } else if (number > 10000 && number <= 85000) {
    // console.log("Faixa 2");
  } else if (number > 85000 && number <= 280000) {
    // console.log("Faixa 3");
  } else if (number > 280000) {
    // console.log("Faixa 4");
  }

  let calculoUFESP = isNaN(number) ? 0 : number + number;
  let square = isNaN(number) ? 0 : Math.pow(number, 2);
  let divisao = isNaN(number) ? 0 : calculoUFESP / square;

  // Mostrar resultados
  rows[1].cells[1].textContent = `R$ ${numberFormatter.format(calculoUFESP)}`; // Format calculoUFESP
  rows[2].cells[1].textContent = `R$ ${numberFormatter.format(square)}`; // Format square
  rows[3].cells[1].textContent = `${numberFormatter.format(divisao)}%`; // Format square

  if (number === 0) {
    for (let i = 1; i < 4; i++) {
      rows[i].cells[1].textContent = "R$ 0,00"; // Format zero
    }
  }

  let fourthRowMessage =
    number > 10 ? `Aumento na Carga Tributária:` : `Perda na Carga Tributária:`;
  rows[3].cells[0].textContent = fourthRowMessage;
});

// Imprimir tabela
document.getElementById("asd").appendChild(table);
