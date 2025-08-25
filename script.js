const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   const prices = document.querySelectorAll('.price');
            let total = 0;

            prices.forEach(price => {
                total += Number(price.textContent);
            })

            const table = document.querySelector("table");
            const newRow = document.createElement("tr");
            const newCell = document.createElement("td");

            newCell.setAttribute("colspan", "2"); // span across both columns
            newCell.textContent = `Total Price: Rs ${total}`;
            newCell.style.fontWeight = "bold";

            newRow.appendChild(newCell);
            table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

