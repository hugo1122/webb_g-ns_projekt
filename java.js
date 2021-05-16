//bygger en tabell som visar kundens bokning
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//joels kod bygger en tabell som visar medelandet--------------------------------------------------------------------------------------------------------------------------------------------------
function myScndFunction() 
{
    var hasData = InputHasData();
    if (hasData == true) {
        var tbl = document.getElementById("tbl");
        var row = tbl.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();     

        var serv = document.getElementById("Service2");

        cell1.innerHTML = document.getElementById("namn2").value;
        cell2.innerHTML = document.getElementById("email2").value;        
        cell3.innerHTML = document.getElementById("datum2").value;
        cell4.innerHTML = serv.options[serv.selectedIndex].value;
    }
}
//kollar så att alla medelande fält är ifyllda
function InputHasData() 
{
    var validEntry = true;

    var n = document.getElementById("namn2");
    if (n.value == "") 
    {
        n.focus();
        validEntry = false;
    }

    n = document.getElementById("email2");
    if (n.value == "") 
    {
        n.focus();
        validEntry = false;
    }

    n = document.getElementById("datum2");
    if (n.value == "") 
    {
        n.focus();
        validEntry = false;
    }

    n = document.getElementById("Service2");
    if (n.value == "-1") 
    {
        n.focus();
        validEntry = false;
    }

    n = document.getElementById("txtarea2");
    if (n.value == "") 
    {
        n.focus();
        validEntry = false;
    }

    return validEntry;
}