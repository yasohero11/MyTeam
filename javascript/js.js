nav =document.getElementsByClassName("navbar-brand")

ulItems = document.getElementsByClassName("navbar-nav")

console.log(nav)


const tl =  new TimelineMax();

tl.fromTo(nav,1.2,{opacity:0,x:30},{opacity:1 , x:0} )


.fromTo(ulItems,1 ,{opacity:0,x:30},{opacity:1 , x:0} , "-=0.5")

profileIcon = document.querySelector("#profileIcon")
loginBtn = document.querySelector("#loginBtn")


    if(localStorage.key(0) === null){    
        
        profileIcon.style.display =  "none"
    }
    else{      
      loginBtn.innerText = "Logout"
      loginBtn.addEventListener("click" , function(event){
        event.preventDefault()        
        localStorage.clear();
        window.location.href = "index.html"
      })
    }