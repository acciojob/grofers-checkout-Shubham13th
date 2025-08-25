const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
 const prices = document.querySelectorAll(".price");
        let total = 0;

        prices.forEach(price => {
            total += Number(price.innerText.trim()); 
        });

        // check if #ans row already exists → update it instead of appending duplicate
        let ansRow = document.getElementById("ans");
        if (ansRow) {
            ansRow.textContent = total;
        } else {
            // create a new row for total
            const table = document.querySelector("table");
            const newRow = document.createElement("tr");
            const newCell = document.createElement("td");

            newCell.setAttribute("colspan", "2");
            newCell.id = "ans"; // ✅ for Cypress
            newCell.textContent = total;
            newCell.style.fontWeight = "bold";

            newRow.appendChild(newCell);
            table.appendChild(newRow);
        }
};

getSumBtn.addEventListener("click", getSum);

