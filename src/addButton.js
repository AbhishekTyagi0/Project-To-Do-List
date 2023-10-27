
export function taskCard(title,description,dueDate,priority){

    const addButton = document.querySelector('.add-button>button');
    const dialog = document.querySelector('.dialog');
    // const dialog = document.querySelector('dialog');
    
    addButton.addEventListener('click',()=>{

        dialog.showModal();
    });

    // addTask(){

    //     const card = document.createElement('div');
    //     card.classList.add('card');
    // },


    // const addButton = document.querySelector('.add-button>button');

    // addButton.addEventListener('click', ()=>{



    // })


}