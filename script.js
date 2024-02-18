// Criar tabela
const table = document.createElement("table");
const tudo = document.getElementById("tabela");

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

rows[0].cells[0].textContent = "Valor para cálculo";
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
userInput.style.appearance = "textfield"; // Hide arrows for number input
userInput.pattern = "[0-9]*"; // Only accept numbers
userInput.id = "userNumber";
inputCell.appendChild(userInput);

// Event Listener
userInput.addEventListener("input", function () {
  // Remove non-numeric characters
  this.value = this.value.replace(/[^0-9]/g, "");

  // Input user
  let number = parseFloat(this.value);

  // Cálculos
  let sum = isNaN(number) ? "" : number + number;
  let square = isNaN(number) ? "" : Math.pow(number, 2);

  // Mostrar resultados
  rows[1].cells[1].textContent = sum;
  rows[2].cells[1].textContent = square;
  rows[3].cells[1].textContent = square;

  if (number === 0) {
    for (let i = 1; i < 4; i++) {
      rows[i].cells[1].textContent = "0";
    }
  }

  let fourthRowMessage =
    number > 10 ? `Aumento na Carga Tributária:` : `Perda na Carga Tributária:`;
  rows[3].cells[0].textContent = fourthRowMessage;

  // Align text on the right side
  for (let i = 0; i < rows.length; i++) {
    rows[i].cells[1].style.textAlign = "right";
  }
});

// Imprimir tabela
document.getElementById("asd").appendChild(table);
