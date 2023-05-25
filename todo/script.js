const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');


class item{
    constructor(itemName){
        

        this.createDiv(itemName);

    }

    createDiv(itemName){

        let input = document.createElement('input');
        input.value= itemName;
        input.disabled = true;
        input.classList.add('item_input')
        input.type= "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item')

        let changeButton = document.createElement('button');
        changeButton.innerHTML = "change";
        changeButton.classList.add('changeButton');

        let DeleteButton = document.createElement('button');
        DeleteButton.innerHTML = "Delete";
        DeleteButton.classList.add('DeleteButton');

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(changeButton);
        itemBox.appendChild(DeleteButton);

     
        changeButton.addEventListener('click',() => this.change(input));

        DeleteButton.addEventListener('click',() => this.Delete(itemBox));

    }

    change(input){

        input.disabled =  !input.disabled;
    }

    Delete(item){

        container.removeChild(item);
    }

}

function check(){

        if(input.value !=""){
            new item(input.value);
            input.value = "";
        }

}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e)=>{
    if(e.which == 13){
        check();
    }
});