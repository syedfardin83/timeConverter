function fn1()
{
    var sec = Number(document.getElementById("sec").value);
    // if (sec  == Integer)
    // {
    //     alert("The entered value must be a number! Enter again")
    // }
    
    var h = parseInt(sec/3600);
    var x = parseInt(sec%3600);
    var m = parseInt(x/60);
    var s = parseInt(x%60);

    console.log("Time: "+h+"hrs "+m+"min "+s+"sec");
    var output = "Time: "+h+"hrs "+m+"min "+s+"sec";

    // const para = document.createElement("p");
    // const node = document.createTextNode(output);

    // para.appendChild(node);

    // const element = document.getElementById("div1");
    // element.appendChild(para);

    const outputDisplay = document.getElementById("outputDisplay");
    outputDisplay.innerText = output; 

}