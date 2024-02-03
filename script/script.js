let star=document.querySelector("#start");
let ref=document.querySelector("#refresh");
let pau=document.querySelector("#pau");


let sec=document.querySelector("#sec");
let min=document.querySelector("#min");

let i=0;
let j=0;
let u=0;
let e=0;
let r=0;

let s=document.querySelector(".s");
s.innerHTML=i;
let m=document.querySelector(".m")
m.innerHTML=i;
let h=document.querySelector(".h");
h.innerHTML=i;
let d=document.querySelector(".d");
d.innerHTML=i;

function start(){
    setInterval(()=>{
    s.innerHTML=i+=1
    if(i===10){
        i=0;
        m.innerHTML=j+=1;
        if(j===10){
            i=0;
            j=0;
            h.innerHTML=u+=1;
            if(u===10){
                i=0;
                j=0;
                u=0
                s.innerHTML=0;
                m.innerHTML=0;
                d.innerHTML= e+=1;
                if(e===10){
                    i=9;
                    j=9;
                    u=9;
                    e=9;
                    s.innerHTML=9;
                    m.innerHTML=9;
                    h.innerHTML=9;
                    return d.innerHTML=9;
                }
                return h.innerHTML=0;
            }
            s.innerHTML=0;
            return m.innerHTML=0;
        }
        s.innerHTML=0;
    }
}, 1000);
}
star.addEventListener("click", (e)=>{
    start();
    e.currentTarget.style="visibility: hidden";
})
ref.addEventListener("click", ()=>{
    window.location.reload();
})
pau.addEventListener("click", ()=>{
    
})