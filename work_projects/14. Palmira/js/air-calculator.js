/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

var services_type= new Array();
 services_type["None"]=0;
 services_type["General"]=25.0;
 services_type["Backway"]=35.0;
 services_type["Groupage"]=80.0;

var goods_type= new Array();
 goods_type["None"]=0;
 goods_type["General"]=0.1;
 goods_type["Special"]=0.15;
 goods_type["Hazardous"]=0.22;
 goods_type["Animals"]=0.25;
 goods_type["Heavy"]=0.3;
	 
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

function getWeightValue()
{
    var weightValue=0;
    var theForm = document.forms["calculationform"];

    weightValue = parseFloat(theForm.elements["weight"].value) / 1000;

    if (isNaN(weightValue) == true) weightValue = 0;

    return weightValue;
}

function getDistanceValue()
{
    var distanceValue=0;
    var theForm = document.forms["calculationform"];
    
    distanceValue = parseFloat(theForm.elements["distance"].value) / 20;

    if (isNaN(distanceValue) == true) distanceValue = 0;

    return distanceValue;
}

function getInsurance()
{
    var insuranceprice=0;
    var theForm = document.forms["calculationform"];
    var includeInsurance = theForm.elements["insurance"];

    if(includeInsurance.checked==true)
    {
        insuranceprice=75;
    }
    return insuranceprice;
}

function getPackaging()
{
    var packagingprice=0;
    var theForm = document.forms["calculationform"];
    var includePackaging = theForm.elements["packaging"];

    if(includePackaging.checked==true)
    {
        packagingprice=35;
    }
    return packagingprice;
}

function getFragileYes()
{
    var fragileyes=0;
    var theForm = document.forms["calculationform"];
    var includeFragile = theForm.elements["fragileyes"];

    if(includeFragile.checked==true)
    {
        fragileyes=40;
    }
    return fragileyes;
}
 
function calculateTotal()
{       
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var ServicesPrice = getServicesType() * getGoodsType() * getWeightValue() * getDistanceValue() + getInsurance() + getPackaging() + getFragileYes();

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