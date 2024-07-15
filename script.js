
let shoppingList = [];

const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const shoppingListElement = document.getElementById('shoppingList');


function addItem() {
    const newItem = itemInput.value.trim();
    if (newItem) {
        shoppingList.push({ name: newItem, purchased: false });
        itemInput.value = '';
        updateList();
    }
}


function updateList() {
    shoppingListElement.innerHTML = '';
    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        if (item.purchased) {
            li.style.textDecoration = 'underline line-through';
        }
        li.addEventListener('click', () => togglePurchased(index));
        shoppingListElement.appendChild(li);
    });
}

function togglePurchased(index) {
    shoppingList[index].purchased = !shoppingList[index].purchased;
    updateList();
}

function clearList() {
    shoppingList = [];
    updateList();
}

addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearList);