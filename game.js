p1n=localStorage.getItem("p1n");
p2n=localStorage.getItem("p2n");

p1s=0;
p2s=0;

document.getElementById("p1n").innerHTML=p1n+ ":";
document.getElementById("p2n").innerHTML=p2n+ ":";

document.getElementById("p1s").innerHTML=p1s;
document.getElementById("p2s").innerHTML=p2s;

document.getElementById("pq").innerHTML="question-player-"+p1n;
document.getElementById("pa").innerHTML="answering-player-"+p2n;

function send()
{
    document.getElementById()
    no1=document.getElementById("no.1").Value;
    no2=document.getElementById("no.2").Value;
    cans=parseInt(no1)*parseInt(no2);
    console.log(cans);
    document.getElementById("q").innerHTML=no1+"X"+no2;
    wans=document.getElementById("a").value;
    if(cans==wans)
    {
        p2s=p2s+1;
    }
    else{
        p1s=p1s+1;
    }

}