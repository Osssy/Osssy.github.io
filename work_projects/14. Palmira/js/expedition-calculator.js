/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

function getDocumentationRegistration()
{
    var documentation_registrationprice=0;
    var theForm = document.forms["calculationform"];
    var includeDocumentationRegistration = theForm.elements["documentation_registration"];

    if(includeDocumentationRegistration.checked==true)
    {
        documentation_registrationprice=55;
    }
    return documentation_registrationprice;
}

function getTransportationOrganization()
{
    var transportation_organizationprice=0;
    var theForm = document.forms["calculationform"];
    var includeTransportationOrganization = theForm.elements["transportation_organization"];

    if(includeTransportationOrganization.checked==true)
    {
        transportation_organizationprice=60;
    }
    return transportation_organizationprice;
}

function getPortForwarding()
{
    var port_forwardingprice=0;
    var theForm = document.forms["calculationform"];
    var includePortForwarding = theForm.elements["port_forwarding"];

    if(includePortForwarding.checked==true)
    {
        port_forwardingprice=70;
    }
    return port_forwardingprice;
}

function getCargoStorage()
{
    var cargo_storageprice=0;
    var theForm = document.forms["calculationform"];
    var includeCargoStorage = theForm.elements["cargo_storage"];

    if(includeCargoStorage.checked==true)
    {
        cargo_storageprice=160;
    }
    return cargo_storageprice;
}

function getCargoEscort()
{
    var cargo_escortprice=0;
    var theForm = document.forms["calculationform"];
    var includeCargoEscort = theForm.elements["cargo_escort"];

    if(includeCargoEscort.checked==true)
    {
        cargo_escortprice=350;
    }
    return cargo_escortprice;
}

function getCargoInsurance()
{
    var cargo_insuranceprice=0;
    var theForm = document.forms["calculationform"];
    var includeCargoInsurance = theForm.elements["cargo_insurance"];

    if(includeCargoInsurance.checked==true)
    {
        cargo_insuranceprice=55;
    }
    return cargo_insuranceprice;
}

function getPaymentsSettlement()
{
    var payments_settlementprice=0;
    var theForm = document.forms["calculationform"];
    var includePaymentsSettlement = theForm.elements["payments_settlement"];

    if(includePaymentsSettlement.checked==true)
    {
        payments_settlementprice=40;
    }
    return payments_settlementprice;
}

function getCargoSupport()
{
    var cargo_supportprice=0;
    var theForm = document.forms["calculationform"];
    var includeCargoSupport = theForm.elements["cargo_support"];

    if(includeCargoSupport.checked==true)
    {
        cargo_supportprice=20;
    }
    return cargo_supportprice;
}
 
function calculateTotal()
{       
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var ServicesPrice = getDocumentationRegistration() + getTransportationOrganization() + getPortForwarding() + getCargoStorage() + getCargoEscort() + getCargoInsurance() + getPaymentsSettlement() + getCargoSupport();

    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Общая стоимость = €"+ServicesPrice.toFixed(2);

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
}