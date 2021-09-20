function CreateTableFromJSON() {
    var groceryList = [
        {
            "Serial No": "1",
            "Name": "Potato",
            "Quantity": "2",
            "Unit": "Kg",
            "Department": "Vegetables",
             "Notes": "Fresh"
        },
        {
            "Serial No": "2",
            "Name": "Milk",
            "Quantity": "1",
            "Unit": "L",
            "Department": "Dairy",
            "Notes": "About to finish"
        },
        {
            "Serial No": "3",
            "Name": "Egg",
            "Quantity": "10",
            "Unit": "numbers",
            "Department": "Poultry",
            "Notes": "Fresh"
        },
        {
            "Serial No": "4",
            "Name": "Tomato",
            "Quantity": "2",
            "Unit": "kg",
            "Department": "Vegetables",
            "Notes": "Fresh"
        },
        {
            "Serial No": "5",
            "Name": "Ginger",
            "Quantity": "200",
            "Unit": "gm",
            "Department": "Vegetables",
            "Notes": "Fresh"
        },
        {
            "Serial No": "6",
            "Name": "Rice",
            "Quantity": "5",
            "Unit": "kg",
            "Department": "Cereals",
            "Notes": "Newly arrived"
        },
        {
            "Serial No": "7",
            "Name": "Yogurt",
            "Quantity": "1",
            "Unit": "L",
            "Department": "Dairy",
            "Notes": "fresh"
        },
        {
            "Serial No": "8",
            "Name": "Sugar ",
            "Quantity": "2",
            "Unit": "kg",
            "Department": "Bakery",
            "Notes": "offer"
        },
        {
            "Serial No": "9",
            "Name": "dal",
            "Quantity": "1",
            "Unit": "kg",
            "Department": "Pulses",
            "Notes": "Fresh"
        },
        {
            "Serial No": "10",
            "Name": "Pappaya",
            "Quantity": "2",
            "Unit": "Number",
            "Department": "Vegetables",
            "Notes": "newly arrived"
        }
       

    ]

    // EXTRACT VALUE FOR HTML HEADER.
    
    var col = [];
    for (var i = 0; i < groceryList.length; i++) {
        for (var key in groceryList[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    
    var table = document.createElement("table");

    

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

  
    for (var i = 0; i < groceryList.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = groceryList[i][col[j]];
        }
    }

   
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}