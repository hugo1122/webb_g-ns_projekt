//script för bokning
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
        
        cN.innerHTML = document.getElementById("name").value; 
        cM.innerHTML = document.getElementById("eMail").value; 
        cT.innerHTML = document.getElementById("tel").value; 
        cC.innerHTML = document.getElementById("cars").value; 
        cR.innerHTML = document.getElementById("reg").value; 
        cS.innerHTML = document.getElementById("tjänst").value; 
        cD.innerHTML = document.getElementById("date").value; 
        cTt.innerHTML = document.getElementById("time").value;  
    } 
} 
//kollar så att alla fält för bokning är ifyllda
function Check()
{ 
    var validEntry = true; 

    var n = document.getElementById("name"); 
    if(n.value == "") 
    { 
        n.focus(); 
        validEntry = false; 
    } 

    n = document.getElementById("eMail") 
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

    n = document.getElementById("tjänst"); 
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