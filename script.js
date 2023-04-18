function myfun() {
    var pincodevalue=document.querySelector("input").value;
    if(pincodevalue==123456){
        document.querySelector("p").innerText="valid Pin code";
    }
    else{
        document.querySelector("p").innerText=" invalid Pin code";
    }
}
