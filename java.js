function myFunction() 
{ 
    var data = Check() 
 
    if(data == true) 
    { 
        var tbl = document.getElementById ("table"); 
        var nRow = tbl.insertRow (); 

        var cN = nRow.insertCell(); 
        var cM = nRow.insertCell(); 
        var cT = nRow.insertCell(); 
        var cC = nRow.insertCell(); 
        var cR = nRow.insertCell(); 
        var cS = nRow.insertCell(); 
        var cD = nRow.insertCell(); 
        var cTt = nRow.insertCell(); 


        cN.innerHTML = document.getElementById("namn").value; 
        cM.innerHTML = document.getElementById("mail").value; 
        cT.innerHTML = document.getElementById("tel").value; 
        cC.innerHTML = document.getElementById("bil").value; 
        cR.innerHTML = document.getElementById("tjänst").value; 
        cS.innerHTML = document.getElementById("reg").value; 
        cD.innerHTML = document.getElementById("datum").value; 
        cTt.innerHTML = document.getElementById("tid").value;  
    } 
} 
function Check() 
{ 
    //checks if everything is inputted corectly and  
    //notices the user of any mistakes and does not allow  
    //booking if all data is not correct 

    var validEntry = true; 

    var n = document.getElementById("namn");
    if(n.value == "") 
    { 
        n.focus(); 
        validEntry = false; 
    } 

    n = document.getElementById("mail") 
    if(n.value == "") 
    {
        n.focus();
        validEntry = false;
    } 

    n = document.getElementById("tel")
    if(n.value == "")
    {
        n.focus(); 
        validEntry = false; 
    } 

    n = document.getElementById("tel") 
    if(n.value == "") 
    { 
        n.focus(); 
        validEntry = false; 
    }  

    n = document.getElementById("cars"); 
    if(n.value == "") 
    { 
        n.focus(); 
        validEntry = false; 
    } 

    n = document.getElementById("service"); 
    if(n.value == "") 
    { 
        n.focus(); 
        validEntry = false;
    } 

    n = document.getElementById("reg"); 
    if(n.value == "") 
    { 
        n.focus(); 
        validEntry = false; 
    }

    n = document.getElementById("date"); 
    if(n.value == "") 
    { 
        n.focus(); 
    validEntry = false; 
    } 

    n = document.getElementById("time"); 
    if(n.value == "") 
    { 
        n.focus(); 
        validEntry = false; 
    } 

    return validEntry; 
} 