/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

var services_type= new Array();
 services_type["None"]=0;
 services_type["Container"]=1.0;
 services_type["Flatbed"]=1.1;
 services_type["Awning"]=1.2;
 services_type["Isothermal"]=1.3;
 services_type["Refrigerator"]=1.4;
 services_type["Groupage"]=7.0;

var goods_type= new Array();
 goods_type["None"]=0;
 goods_type["General"]=0.1;
 goods_type["Fragile"]=0.16;
 goods_type["Hazardous"]=0.2;
 goods_type["Fine"]=0.3;
	 
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

    distanceValue = parseFloat(theForm.elements["distance"].value);

    if (isNaN(distanceValue) == true) distanceValue = 0;

    return distanceValue;
}

function getExpressDelivery()
{
    var expressprice=0;
    var theForm = document.forms["calculationform"];
    var includeExpress = theForm.elements["expressdelivery"];

    if(includeExpress.checked==true)
    {
        expressprice=25;
    }
    return expressprice;
}

function getInsurance()
{
    var insuranceprice=0;
    var theForm = document.forms["calculationform"];
    var includeInsurance = theForm.elements["insurance"];

    if(includeInsurance.checked==true)
    {
        insuranceprice=40;
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
        packagingprice=30;
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
        fragileyes=20;
    }
    return fragileyes;
}
 
function calculateTotal()
{       
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var ServicesPrice = getServicesType() * getGoodsType() * getWeightValue() * getDistanceValue() + getExpressDelivery() + getInsurance() + getPackaging() + getFragileYes();

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