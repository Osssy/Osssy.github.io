/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/
var services_type= new Array();
 services_type["None"]=0;
 services_type["D"]=1.0;
 services_type["C"]=1.15;
 services_type["B"]=1.3;
 services_type["A"]=1.5;

var goods_type= new Array();
 goods_type["None"]=0;
 goods_type["Cellrental"]=0.24;
 goods_type["Europallet"]=0.48;
 goods_type["Nonstandardpallet"]=1.10;
     
function getServicesType()
{
    var servicesType=0;
    var theForm = document.forms["calculationform"];
    var selectedServicesType = theForm.elements["services_type"];
     
    servicesType = services_type[selectedServicesType.value];

    return servicesType;
}

function getGoodsType()
{
    var goodsType=0;
    var theForm = document.forms["calculationform"];
    var selectedGoodsType = theForm.elements["goods_type"];
     
    goodsType = goods_type[selectedGoodsType.value];

    return goodsType;
}

function getQuantityValue()
{
    var quantityValue=0;
    var theForm = document.forms["calculationform"];

    quantityValue = parseFloat(theForm.elements["quantity"].value);

    if (isNaN(quantityValue) == true) quantityValue = 0;

    return quantityValue;
}

function getDayQuantityValue()
{
    var dayquantityValue=0;
    var theForm = document.forms["calculationform"];

    dayquantityValue = parseFloat(theForm.elements["dayquantity"].value);

    if (isNaN(dayquantityValue) == true) dayquantityValue = 0;

    return dayquantityValue;
}

function getPalletQuantityValue()
{
    var palletquantityValue=0;
    var theForm = document.forms["calculationform"];

    palletquantityValue = parseFloat(theForm.elements["palletquantity"].value);

    if (isNaN(palletquantityValue) == true) palletquantityValue = 0;

    return palletquantityValue;
}

function getDocumentQuantityValue()
{
    var documentquantityValue=0;
    var theForm = document.forms["calculationform"];

    documentquantityValue = parseFloat(theForm.elements["documentquantity"].value);

    if (isNaN(documentquantityValue) == true) documentquantityValue = 0;

    return documentquantityValue;
}

function getControl()
{
    var controlprice=0;
    var theForm = document.forms["calculationform"];
    var includeControl = theForm.elements["control"];

    if(includeControl.checked==true)
    {
        controlprice=75;
    }
    return controlprice;
}

function getInsurance()
{
    var insuranceprice=0;
    var theForm = document.forms["calculationform"];
    var includeInsurance = theForm.elements["insurance"];

    if(includeInsurance.checked==true)
    {
        insuranceprice=30;
    }
    return insuranceprice;
}

function getClearance()
{
    var clearanceprice=0;
    var theForm = document.forms["calculationform"];
    var includeClearance = theForm.elements["clearance"];

    if(includeClearance.checked==true)
    {
        clearanceprice=80;
    }
    return clearanceprice;
}

function getFence()
{
    var fenceprice=0;
    var theForm = document.forms["calculationform"];
    var includeFence = theForm.elements["fence"];

    if(includeFence.checked==true)
    {
        fenceprice=130;
    }
    return fenceprice;
}

function getIntegration()
{
    var integrationprice=0;
    var theForm = document.forms["calculationform"];
    var includeIntegration = theForm.elements["integration"];

    if(includeIntegration.checked==true)
    {
        integrationprice=95;
    }
    return integrationprice;
}
 
function calculateTotal()
{       
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var ServicesPrice = getServicesType() * getGoodsType() * getQuantityValue() * getDayQuantityValue() + 4 * getPalletQuantityValue() + 0.4 * getDocumentQuantityValue() + getControl() + getInsurance() + getClearance() + getFence() + getIntegration();

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