/**
 * By Udara Samaratunge
 */
/**
 * Add unique index for the table
 * @returns 
 */
function addIndex() {
    const idLabel = document.createElement('label');
    idLabel.setAttribute('id', 'index');
    var index = 1;
    var previousIndex = document.getElementById('index');
    if (previousIndex === null) {
        idLabel.innerHTML = index++;
    } else {
        //Get previous last index     
        var elements = document.querySelectorAll('[id="index"]');
        var lastElement = elements[elements.length - 1];
        var lastIndex = parseInt(lastElement.innerHTML);
        lastIndex++;
        idLabel.innerHTML = lastIndex;
    }
    const tdIndex = document.createElement("td");
    tdIndex.appendChild(idLabel);
    return tdIndex;
}

/**
 * Select Fruit Items from the drop down
 * @returns 
 */
function selectItem() {
    const itemSelect = document.createElement('select');
    itemSelect.options.add(new Option("-Select-", "-Select-"));
    itemSelect.options.add(new Option("Apple", "Apple"));
    itemSelect.options.add(new Option("Banana", "Banana"));
    itemSelect.options.add(new Option("Orange", "Orange"));
    itemSelect.options.add(new Option("Mango", "Mango"));
    itemSelect.options.add(new Option("Pineapple", "Pineapple"));
    return itemSelect;
}

/**
 * This function dynamically create a row for the fruite 
 * purchase table
 */
function addRow() {
    const tr = document.createElement("tr");

    const item = selectItem();
    const tdItem = document.createElement("td");
    tdItem.appendChild(item);

    const tdImage = document.createElement("td");
    item.onchange = function () {
        var fruit = item.options[item.selectedIndex].text;
        if (new String(fruit).valueOf() !== new String("-Select-").valueOf()) {
            tdImage.innerHTML = fruit;
        }
    }
    //Add unit price for the fruit item
    const tdPrice = document.createElement("td");
    const unitPriceInput = document.createElement('input');
    unitPriceInput.setAttribute('type', 'text');
    unitPriceInput.setAttribute('id', 'unitPrice');
    tdPrice.appendChild(unitPriceInput);
    //Add unit for the fruit item
    const tdUnit = document.createElement("td");
    tdUnit.textContent = "KG";
    //Add quantity for fruit
    const tdQty = document.createElement("td");
    const qtyInput = document.createElement('input');
    qtyInput.setAttribute('type', 'text');
    qtyInput.setAttribute('id', 'qty');
    tdQty.appendChild(qtyInput);
    //Add amount for fruit
    const tdAmount = document.createElement("td");
    const amountLabel = document.createElement('label');
    amountLabel.setAttribute('id', 'fruit');
    tdAmount.appendChild(amountLabel);

    //Calculate row tatal amount
    qtyInput.onchange = function () {
        var qty = qtyInput.value;
        var unitPrice = unitPriceInput.value;
        var price = qty * unitPrice;
        amountLabel.innerHTML = price;
    }
    tr.appendChild(addIndex());
    tr.appendChild(tdItem);
    tr.appendChild(tdImage);
    tr.appendChild(tdPrice);
    tr.appendChild(tdUnit);
    tr.appendChild(tdQty);
    tr.appendChild(tdAmount);
    const tbody = document.getElementById('tbody');
    tbody.appendChild(tr);
}

/**
 * Function calculate the grand total amount
 */
function getTotal() {
    var elements = document.querySelectorAll('[id="fruit"]');
    var total = 0;     
    if (elements.length > 0) {
        for (var i = 0; i < elements.length; i++) {
            //check each item with not inserting total
            if ((parseInt(elements[i].innerHTML) >= 0)) {
                total += parseInt(elements[i].innerHTML);
            }
        }
    }
    document.getElementById('Gtotal').style = "display";
    document.getElementById('total').innerHTML = total + " LKR";
}