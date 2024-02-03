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
let q=6;
let p=9; // for s
let w=9; // for m
let a=9; // for h
let l=5 // for d
let s=document.querySelector(".s");
s.innerHTML=i;
let m=document.querySelector(".m")
m.innerHTML=i;
let h=document.querySelector(".h");
h.innerHTML=i;
let d=document.querySelector(".d");
d.innerHTML=q;

function stop(){
    location.reload();
}
function pause(){
    alert("Pause")
}
function start(){
    setTimeout(()=>{
        s.innerHTML=p;
        m.innerHTML=w;
        h.innerHTML=a;
        d.innerHTML=l;

        setInterval(()=>{
            s.innerHTML=p-=1;
            if(p===-1){
                p=9;
                m.innerHTML=w-=1;
                s.innerHTML=p;
                if(w===-1){
                    p=9;
                    w=9;
                    m.innerHTML=w
                    h.innerHTML=a-=1;
                    if(a===-1){
                        w=9;
                        a=9;
                        h.innerHTML=a;
                        d.innerHTML=l-=1;
                        if(l===-1){
                            p=0;
                            w=0;
                            a=0;
                            l=0;
                            s.innerHTML=p;
                            m.innerHTML=w;
                            h.innerHTML=a;
                            d.innerHTML=l;
                            setTimeout(()=>{
                                let k=document.createElement("div");
                                document.body.appendChild(k);
                                let _k=document.createElement("div");
                                k.append(_k);
                                k.style="width: 100%;height: 100vh; flex-direction: column;background-color: red; display: flex; align-items:center;justify-content: center;position: absolute; left: 0;top: 0;";
                                _k.textContent="Time Up!".toUpperCase();
                                _k.style="color: #fff; font-size: 80px;";
                                let ry=document.createElement("button");
                                k.appendChild(ry);
                                ry.innerHTML="Reload";
                                ry.style="padding: 15px 25px; border: none; position: relative; top: 15px; cursor: pointer;";
                                ry.addEventListener("click", ()=>{
                                    location.reload();
                                })
                            }, 1000);
                        }
                    }
                }
            }
        }, 1000);
    }, 1000)
}
star.addEventListener("click", (e)=>{
    start();
    e.currentTarget.style="visibility: hidden";
})
ref.addEventListener("click", ()=>{
    stop();
})
pau.addEventListener("click", (e)=>{
    alert("Pause")
})