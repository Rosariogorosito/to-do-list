const input = document.querySelector('.input');
const botonAgregar = document.querySelector('.boton-agregar');
const container = document.querySelector('.container');

class Item {
    constructor(tarea) {
        this.crearDiv(tarea);
    }

    crearDiv(tarea) {
        const inputItem = document.createElement('input');
        inputItem.type = 'text';
        inputItem.classList.add('item-input');
        inputItem.value = tarea;
        inputItem.disabled = true;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const botonEditar = document.createElement('button');
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
        botonEditar.classList.add('boton-editar');

        const botonRemover = document.createElement('button');
        botonRemover.innerHTML = '<i class="fas fa-trash"></i>';
        botonRemover.classList.add('boton-remover');

        botonEditar.addEventListener('click', () => {
            inputItem.disabled = !inputItem.disabled;
            botonEditar.innerHTML = inputItem.disabled 
                ? '<i class="fas fa-lock"></i>' 
                : '<i class="fas fa-lock-open"></i>';
        });

        botonRemover.addEventListener('click', () => {
            container.removeChild(itemDiv);
        });

        itemDiv.appendChild(inputItem);
        itemDiv.appendChild(botonEditar);
        itemDiv.appendChild(botonRemover);
        container.appendChild(itemDiv);
    }
}

function chequearInput() {
    if (input.value.trim() !== "") {
        new Item(input.value);
        input.value = "";
    }
}

botonAgregar.addEventListener('click', chequearInput);