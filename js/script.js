let maketItem = document.querySelectorAll('.de');
let hover = document.querySelectorAll('.f');
let hide = document.querySelectorAll('.hide_elem');



hover.forEach(el => {
  el.onmouseover = function () {
    el.children[0].classList.add("de_after");
    el.children[1].classList.add("hide_vis");
    
    el.children[1].children[0].classList.add("hide_elem_vis"); 
  }
  el.onmouseout = function () {
    el.children[0].classList.remove("de_after");
    el.children[1].classList.remove("hide_vis");
    el.children[1].children[0].classList.remove("hide_elem_vis"); 
  }

});





let modal = document.querySelector('.modal');
let close = document.querySelector('.close');

close.onclick = () => {
  modal.style.display = "none";
}

maketItem.forEach(el => {
  el.onclick = async () => {
    let sliderArray;
    let wrapper = document.querySelector('.swiper-wrapper');
    let wrapper_name = document.querySelector('.modal_name');
    let wrapper_text = document.querySelector('.modal__info');
    wrapper.innerHTML = "";
    wrapper_name.innerHTML = "";
    wrapper_text.innerHTML = "";

    const respons = await fetch("/api.json");
    const data = await respons.json();
    console.log(data);
    data.forEach(elem => {
      if(el.id == elem.id )
      {
       
        sliderArray = elem;
       console.log(sliderArray.name);
      }
    });
    sliderArray.img.forEach((slide)=>{
      
wrapper.innerHTML += ` <div class="swiper-slide"> <img class="market__item__img" src="${slide}" alt=""></div>
`
    });
    wrapper_name.innerHTML += ` ${sliderArray.name}
    `;
    wrapper_text.innerHTML += ` ${sliderArray.decr}
    `;
 

    modal.style.display = "block";

    const swiper = new Swiper('.swiper-container', {
      navigation: {

        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
});

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

let on_img = document.querySelectorAll('.hover_cont_block');
on_img.forEach(el => {

  el.onmouseover  = function (e) {
  
let f  = document.querySelector(".pic_one"+ e.target.dataset.id);
f.src = e.target.dataset.src;
  }
});



document.querySelector('.modalForm').onsubmit = async (e) => {
  e.preventDefault();
  const respons = await fetch("fpfdh@mail.ru", {
    method: "post",
    body: new FormData(e.target)

  })
  const data = await respons.json();
}



let logo =  document.querySelectorAll('.logo');

logo.forEach(el => {
  el.onclick = function () {
    alert('Товар добавлен в корзину!');
  } 
});