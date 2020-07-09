let maket_item = document.querySelectorAll('.de');
let img = document.querySelectorAll('.market__item__img');
function sl(t) {
    maket_item.forEach(el => {
    
        if(t == maketItem[0])
        {
            img[0].src = "./src/slider/1/1.jpg";
            img[1].src = "./src/slider/1/2.jpg";
            img[2].src = "./src/slider/1/3.jpg";
            
        }
        else if (t == maketItem[1])
        {
            img[0].src = "./src/slider/2/1.jpg";
            img[1].src = "./src/slider/2/2.jpg";
            img[2].src = "./src/slider/2/3.jpg";
        }
        else if (t == maketItem[2])
        {
            img[0].src = "./src/slider/3/1.jpg";
            img[1].src = "./src/slider/3/2.jpg";
            img[2].src = "./src/slider/3/3.jpg";
        }
        else if (t == maketItem[3])
        {
            img[0].src = "./src/slider/4/1.jpg";
            img[1].src = "./src/slider/4/2.jpg";
            img[2].src = "./src/slider/4/3.jpg";
        }
        else if (t == maketItem[4])
        {
            img[0].src = "./src/slider/5/1.jpg";
            img[1].src = "./src/slider/5/2.jpg";
            img[2].src = "./src/slider/5/3.jpg";
        }
        else if (t == maketItem[5])
        {
            img[0].src = "./src/slider/6/1.jpg";
            img[1].src = "./src/slider/6/2.jpg";
            img[2].src = "./src/slider/6/3.jpg";
        }
    
       
        
    
        
    });
}


    

    
