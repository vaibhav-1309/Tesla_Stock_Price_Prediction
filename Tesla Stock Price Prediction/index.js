// function getStockPrice() {
//     const stockSymbol = document.getElementById("stockSymbol").value;
    // const url = `??????`; (Template authentication failed)
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         const stockTableBody = document.getElementById("stockTableBody");
//         stockTableBody.innerHTML = `
//           <tr>
//             <td>${data.open}</td>
//             <td>${data.close}</td>
//             <td>${data.high}</td>
//             <td>${data.low}</td>
//           </tr>
//         `;
//       })
//       .catch(error => console.error(error));
//   }

function getPrice(){
  // Define the slope and y-intercept of the line
  const date = document.getElementById("date").value;
  const dateA = new Date(date);
  const dateB = new Date('2016-08-17');
  // Calculate the time difference between the two dates
  const timeDiff = Math.abs(dateB.getTime() - dateA.getTime());
  // Convert the time difference to days
  const noOfDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  const m = 0.48564741424802;
  const c = 121.38275126649;
  // Define the input x-coordinate
  x = noOfDays;
  // Calculate the corresponding y-coordinate
  let y = m * x + c;
  y = y.toFixed(4);
  document.getElementById("predicted").innerHTML = y;
  document.getElementById("date_on_page").innerHTML = date;
  // console.log(y);
  document.getElementById("res").style.display = "block";
  document.getElementById("image").style.display = "block";
}
const button = document.getElementById("btn");
button.addEventListener("click", getPrice);