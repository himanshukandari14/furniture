const appo=document.querySelector('#appointment');
const appobox=document.querySelector('#appbox');
const crossbtn=document.querySelector('#crossbtn');
const querycard=document.querySelector('#querycard');
const wrapper=document.querySelector('#wrapper');

//loader logic
setTimeout(function() {
    // Hide the loader
    document.getElementById("loader").style.display = "none";
    
    // Show the content
    document.getElementById("content").style.display = "block";
}, 2000); 

// appear logic appointment
appobox.addEventListener('mouseover',()=>{
    console.log("box appear");
    appo.style.display="flex";
})

// disappear logic
appobox.addEventListener('mouseout',()=>{
    console.log("box disappear ");
    appo.style.display="none";
})

// front card
crossbtn.addEventListener('click',()=>{
    querycard.style.display="none";
    
    console.log("card hided");
})
// Delayed appear logic for the querycard
setTimeout(() => {
    querycard.style.display = "flex";
}, 2000); // 2000 milliseconds (2 seconds) delay


// gsap code



