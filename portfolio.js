const pageturnbtn= document.querySelectorAll(".prevnext-btn");

pageturnbtn.forEach((el,index)=>{
    el.onclick=()=>{
    const pageturnid=el.getAttribute("data-page");
    const pageturn=document.getElementById(pageturnid);

    if(pageturn.classList.contains("turn")){
        pageturn.classList.remove("turn");
        setTimeout(()=>{
            pageturn.style.zIndex=20-index;
        },500)
    }else{
        pageturn.classList.add("turn");
        setTimeout(()=>{
            pageturn.style.zIndex=20+index;
        },500)
    }
    }
})

//contactme btn
const pages=document.querySelectorAll(".book-page.page-right");
const contactmebtn=document.querySelector(".contact-me");


    contactmebtn.onclick=()=>{
        pages.forEach((page,index)=>{
        setTimeout(()=>{
            page.classList.add("turn");

            setTimeout(()=>{
                page.style.zIndex=20+index;

            },500)
        },(index + 1)*200+100);
    })
}
let totalpages=pages.length;
let pagenumber=0;

function reverseIndex(){
    pagenumber--;

    if(pagenumber<0){
        pagenumber=totalpages-1;
    }
}

const backporfilebtn=document.querySelector(".back-profile");
backporfilebtn.onclick=()=>{
    pages.forEach((_,index)=>{
      setTimeout(()=>{
        reverseIndex();
        pages[pagenumber].classList.remove("turn");
        setTimeout(()=>{
            reverseIndex(); 
            pages[pagenumber].style.zIndex = 10 + index;
        },500)
      },(index + 1)* 200 + 100)
    })
}