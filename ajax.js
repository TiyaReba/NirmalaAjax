function changedta() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var data = JSON.parse(this.responseText);
      var output = `<tr><th>age</th>
      <th>name</th></tr>`
      for (let i = 0; i < data.length; i++) {
        output += `<tr><td>${data[i].id}</td>
                            <td>${data[i].name }</td></tr>`;
      }
      document.getElementById("tr").innerHTML = output;
    }
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.send();
}
