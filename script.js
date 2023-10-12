//  fetch("https://cataas.com/api/cats")
//  .then((Response)=>Response.json())
//  .then((data)=>console.log(data))
//  .catch((err)=>console.log(err));

 function getAllDatas() {
    fetch('https://cataas.com/api/cats')
        .then(response => response.json())
        .then(data => { console.log(data)
            data.forEach(datas => {
                createTheCard(datas);
            });
        })
        .catch(error => console.error('Error:', error));
  }
  
  function createTheCard(data) {
    const createcard = document.createElement('div');
    createcard.classList.add('card', 'border-secondary');
    
    const cardhead = document.createElement('div');
    cardhead.classList.add('card-header');
    cardhead.textContent = "CATAAS";

   
    const cardbody = document.createElement('div');
    cardbody.classList.add('card-body', 'text-secondary');
    
    const id = document.createElement('p');
    id.classList.add('card-text');
    id.textContent = `ID : ${data._id}`;
    
    const create = document.createElement('p');
    create.classList.add('card-text');
    create.textContent = `CreatedAt: ${data.createdAt}`;
  
    const  update= document.createElement('p');
    update.classList.add('card-text');
    update.textContent = `UpdatedAt  : ${data.updatedAt} `;

    const  tags= document.createElement('p');
    tags.classList.add('card-text');
    tags.textContent = `Tag : ${data.tags[0]} `;

     
  
createcard.appendChild(cardhead);
createcard.appendChild(cardbody);
cardbody.appendChild(id);
cardbody.appendChild(tags);
cardbody.appendChild(create);
cardbody.appendChild(update);
  document.getElementById('card-container').appendChild(createcard);
  }
  
getAllDatas();
  
  

  