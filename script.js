let isOpenBasketModal = false;


const cardImg = [
    'lego_1.webp',
    'lego_2.webp',
    'lego_3.webp',
    'lego_4.webp',
    'lego_5.webp',
    'lego_6.webp',
]

const cardDescription = [
    'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
]

function CreateCard() {
    let container = document.querySelector('#card-container');
    

    for(let i = 0; i < 6; i++){
        let card = document.createElement('div')
        card.classList.add('col-md-3')
        card.innerHTML = `
        <div class="col">
                <div class="card shadow-sm">
                  <img class="card-img-top"
                    data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                    alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;"
                    src="media/${cardImg[i]}" data-holder-rendered="true">
      
                  <div class="card-body">
                    <p class="card-text">${cardDescription[i]}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>`

        container.append(card)
    }
}

function ShowBasketModalWindow () {
  let basketNode = document.querySelector('.basket-modal')
  // basketNode.style.display = isOpenBasketModal ? 'none' : 'block';
  if(isOpenBasketModal){
      basketNode.style.display = 'none';
  }else{
      basketNode.style.display = 'block';
  }
  isOpenBasketModal = !isOpenBasketModal;
}

CreateCard()