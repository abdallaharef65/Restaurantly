

// wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww



let toggle = document.querySelector(".toggle")

let drop = document.querySelector(".drop-down1")


toggle.onclick = function () {
    drop.classList.toggle("open");

    if(drop.classList.contains("open")){

        // console.log('Yes This Div Contain Class Called open')
    } else{
        drop2.classList.remove("open");
    }

};

let DEEPdrop = document.querySelector(".DropDownfathersecond span")

let drop2 = document.querySelector(".show")

DEEPdrop.onclick = function () {

    drop2.classList.toggle("open"); 
};





// wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwnewcodeww

let topheader = document.querySelector(".landing-page .container .topheader")


let landing = document.querySelector(".landing-page .spen" )


// ssssssssssssssssssssssssssssssssssssssssss


let about = document.querySelector(".About .container .AboutLanding")
        
let fixedimg = document.querySelector(".fixedimg")

let aboutinfo = document.querySelector(".aboutinfo")


// ssssssssssssssssssssssssssssssssssssssssss

let WHYUSlanding = document.querySelector(".WHY-US .container .WHY-USlanding")
        
let tophederWHYUSlandingd = document.querySelector(".topheder-WHY-USlanding")

let downWHYUSlanding = document.querySelectorAll(".down-WHY-USlanding .sq")

let WHYUS = document.querySelector(".WHY-US")

// ssssssssssssssssssssssssssssssssssssssssss

let MENU = document.querySelector(".MENU")

let MENUlanding = document.querySelector(".MENU .container .MENUlanding")  

// ssssssssssssssssssssssssssssssssssssssssss

let SPECIALS = document.querySelector(".SPECIALS")
let SPECIALSlanding = document.querySelector(".SPECIALS .container .SPECIALSlanding")

// ssssssssssssssssssssssssssssssssssssssssss
let hoHome = document.querySelector(".nav .mainul .hovHome  a")

hoHome.style.color = "#cda45e"

// window.onscroll = function(c){


//     if
//     (window.scrollY  <= (topheader.offsetTop + 100) )

//     {
//         hoHome.style.color = "red"


//   }
// }


window.onscroll = function(b){



    if (window.scrollY >= (topheader.offsetTop + 120) )

    {

        topheader.style.margin = "0px 0px 0px 0px"
        landing.style.margin = "0px 0px 0px 0px"
        landing.style.borderBottom = "0.2px solid var(--main-color)"
        landing.style.opacity = "9.5"



    }
     else
     if
      (window.scrollY  <= (topheader.offsetTop + 100) )

      {
        topheader.style.margin = "40px 0px 0px 0px"
        landing.style.margin = "40px 0px 0px 0px"
        landing.style.opacity = "0.5"


    }


    // wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww


    // wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww




        if (window.scrollY >= (about.offsetTop + 150) )

    {

        fixedimg.classList.add("scaling");
        aboutinfo.classList.add("showaboutinfo");

        let hovAbout = document.querySelector(".nav .mainul .hovAbout  a")

        hovAbout.style.color = "#cda45e"

    }

    if(window.scrollY <= (about.offsetTop + 550)){
        let hovAbout = document.querySelector(".nav .mainul .hovAbout  a")

        hovAbout.style.color = "#cda45e"
    }

    
    if(window.scrollY <= (about.offsetTop + 550)){
        let hovAbout = document.querySelector(".nav .mainul .hovAbout  a")

        hovAbout.style.color = "white"
    }

    if(window.scrollY <= (about.offsetTop + 550)){
        let hovAbout = document.querySelector(".nav .mainul .hovAbout  a")

        hovAbout.style.color = "white"
    }

    // wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

    // wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

    if (window.scrollY >= WHYUS.offsetTop -100 )

    {

    let hovAbout = document.querySelector(".nav .mainul .hovAbout  a")

    hovAbout.style.color = "white"
}

    if (window.scrollY >= WHYUS.offsetTop - 680)

    {
        

        WHYUSlanding.style.display = "block" 

        tophederWHYUSlandingd.classList.add("showaboutinfoUSlanding");

        document.querySelectorAll(".down-WHY-USlanding .sq").forEach(function (Q) {

            Q.classList.add("showaboutinfoUSlanding2");

    
        });
    }


        // wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

      
        
 

        if (window.scrollY >= MENU.offsetTop - 350)

        {  
            MENUlanding.style.display = "block" 
    
            MENUlanding.classList.add("showaboutinfoUSlanding");
    
  
            let hovMenu = document.querySelector(".nav .mainul .hovMenu  a")

            hovMenu.style.color = "#cda45e"
    
        }   

        
        if(window.scrollY <= MENU.offsetTop - 350){
            let hovMenu = document.querySelector(".nav .mainul .hovMenu  a")
    
            hovMenu.style.color = "white"
        }
    
        if(window.scrollY >= SPECIALS.offsetTop - 350){
            let hovMenu = document.querySelector(".nav .mainul .hovMenu  a")
    
            hovMenu.style.color = "white"
        }
        
            // wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
          
            
    
            if (window.scrollY >= SPECIALS.offsetTop - 350)    
            { 
                SPECIALSlanding.style.display = "block" 
        
                SPECIALSlanding.classList.add("showaboutinfoUSlanding");
        
    
            }

        // wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww


            let EVENTS = document.querySelector(".EVENTS")
        let EVENTSlanding = document.querySelector(".EVENTS .container .EVENTSlanding")        
            
                if (window.scrollY >= EVENTS.offsetTop - 350)
                {
                
        
                EVENTSlanding.style.display = "block" 
        
                EVENTSlanding.classList.add("showaboutinfoUSlanding");
        
        }


                // wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww


        let RESERVATION = document.querySelector(".RESERVATION")

        let RESERVATIONlanding = document.querySelector(".RESERVATION .container .RESERVATIONlanding")        
            
                if (window.scrollY >= RESERVATION.offsetTop - 400)
                {
                
        
                RESERVATIONlanding.style.display = "block" 
        
                RESERVATIONlanding.classList.add("showaboutinfoUSlanding");
        
        }

        // wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww


        let TESTIMONIALS = document.querySelector(".TESTIMONIALS")

        let TESTIMONIALSlanding = document.querySelector(".TESTIMONIALS .container .TESTIMONIALSlanding")        

        if (window.scrollY >= TESTIMONIALS.offsetTop - 350)
            {
            
                 TESTIMONIALSlanding.style.display = "block" 
                 TESTIMONIALSlanding.classList.add("showaboutinfoUSlanding");
        
        }


                // wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww


                let GALLERY = document.querySelector(".GALLERY")

                let GALLERYlanding = document.querySelector(".GALLERY .GALLERYlanding")        
        
                if (window.scrollY >= GALLERY.offsetTop - 350)
                    {
                    
                        GALLERYlanding.style.display = "block" 
                        
                        GALLERYlanding.classList.add("showaboutinfoUSlanding");
                
                }

            // wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

            let CHEFSlanding = document.querySelector(".CHEFS .container .CHEFSlanding")
        
            let headerCHEFS = document.querySelector(".headerCHEFS")
            
            let photoCHEFS = document.querySelectorAll(".photoCHEFS")
            
            let CHEFS = document.querySelector(".CHEFS")
    
        if (window.scrollY >= CHEFS.offsetTop -450 )
    
        {
            
    
            CHEFSlanding.style.display = "block" 
    
            headerCHEFS.classList.add("showaboutinfoUSlanding");
    
            document.querySelectorAll(".photoCHEFS").forEach(function (Q) {
    
                Q.classList.add("showaboutinfoUSlanding2");
    
        
            });
        }


          // wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
    //    let CONTACT = document.querySelector(".CONTACT")

    //    let CONTACTlanding = document.querySelector(".CONTACT .container .CONTACTlanding")        
       

    //    if (window.scrollY >= CONTACT.offsetTop - 350)
    //    {
    //     CONTACTlanding.classList.add("showaboutinfoUSlanding"); 
    //     }

    //                    CONTACTlanding.style.display = "block"  

    //         CONTACTlanding.classList.add("showaboutinfoUSlanding");
        }

// wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww





let downGALLERY = Array.from(document.querySelectorAll(".downGALLERY img"))
// console.log(downGALLERY)


let AA = document.querySelectorAll(".downGALLERY img")
// console.log(AA)


let prev = document.querySelector(".slider-controls .prev")

let next = document.querySelector(".slider-controls .next")


prev.onclick = function previmg(){

    // console.log("prev")

}

next.onclick = function nextimg(){

    // console.log("next")

}


// EVENTSssss

let downlandingEVENTS = Array.from(document.querySelectorAll(".downlandingEVENTS"))


let movelsi = document.querySelectorAll(".move .movepoint li")
let li1 = document.querySelectorAll(".li1")
console.log(li1)
li1.onclick = function(){
    console.log("aref")
}


// console.log(movelsi)


movelsi.forEach(function(a){

    a.addEventListener("click", (e) => {
        // console.log(e.target.dataset.cat);
        console.log(e)

        downlandingEVENTS.forEach((el) => {
  
            // console.log(el)
            // el.classList.remove("active")  
            
          });
  
        document.querySelectorAll(e.target.dataset.cat).forEach((el) => {
  
              el.classList.add("active")  
              
            });
      });

  addEventListener("click",remactive)
  addEventListener("click",oneve)

})



function remactive (){
    movelsi.forEach(function(a){

        a.classList.remove("active") 
    })
}

function oneve(ele){
    ele.target.classList.add("active")
}

let menushow = document.querySelectorAll(".menupart .MENUnav li")
let disfood = document.querySelectorAll(".headerimg .disfood")

// console.log(menushow)


menushow.forEach(function(ala){

ala.addEventListener("click",function(ele){
        disfood.forEach((ele) => {
          ele.style.display = "none";
        //   console.log(disfood)
        });

        document.querySelectorAll(ele.target.dataset.na).forEach((el) => {
          el.style.display = "block";

        });
})
})



let lin = document.querySelectorAll(".nav .mainul li a")

lin.forEach(function(el){
el.addEventListener("click", function(event){
    event.preventDefault()

})
})

let scrol = document.querySelectorAll(".nav .mainul li a ")
// console.log(scrol)

scrol.forEach((scr)=>{
    scr.addEventListener("click",(ele)=>{
        // console.log(("."+ ele.target.dataset.scr))
        document.querySelector("."+ ele.target.dataset.scr).scrollIntoView( {
            behavior:"smooth"
            
        })
    })
})



// ulSPECIALSnav.forEach(function(ala){

// ala.addEventListener("click",function(ele){
//     disfood2.forEach((ele) => {
//         ele.classList.remove("show2")
//           ele.style.display = "none";
//           console.log(disfood2)
//         });

//         document.querySelectorAll(ele.target.dataset.show).forEach((el) => {
//           el.style.display = "block";

//         });
// })
// })


let ulSPECIALSnav = document.querySelectorAll(".SPECIALSnav .ulSPECIALSnav li")
let disfood2 = document.querySelectorAll(".disfood2")

// console.log(disfood2)


ulSPECIALSnav.forEach((ele) => {
    ele.addEventListener("click", function (e) {

        // e.classList.remove("active2")

        ulSPECIALSnav.forEach((li) => {
            li.classList.remove("active2");
            this.classList.add("active2");
          });

        // ulSPECIALSnav.forEach(function(ele){
        
        //    ele.style.backgroundColor = "red"
        // })

        disfood2.forEach((ele) => {
        ele.style.display = "none";
      });

      document.querySelector(e.target.dataset.show).style.display = "block";


    });
  });

let mainulshow = document.querySelector(".container .topheader .nav .mainul")

let bars = document.querySelector(".bars")

let body2 = document.querySelector(".body")

let X = document.querySelector(".close")




X.addEventListener("click", function(){
    mainulshow.style.display = "none"
    X.style.display = "none"    
    console.log("X") 
})


bars.addEventListener("click", function(){
    mainulshow.style.display = "block"
    X.style.display = "block"    
})


const swiper = new Swiper('.SquareTESTIMONIALS', {
    autoplay: {
      delay: 1000,
    },
   });