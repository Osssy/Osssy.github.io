/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

var services_type= new Array();
 services_type["None"]=0;
 services_type["City-inside"]=1.0;
 services_type["Country-inside"]=1.15;
 services_type["Country-outside"]=1.5;

var goods_type= new Array();
 goods_type["None"]=0;
 goods_type["General"]=0.1;
 goods_type["Special"]=0.14;
 goods_type["Hazardous"]=0.2;
 goods_type["Animals"]=0.3;
 goods_type["Fragile"]=0.4;
 goods_type["Heavy"]=0.42;
 goods_type["Fine"]=0.55;
	 
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

    weightValue = parseFloat(theForm.elements["weight"].value);

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
        expressprice=8;
    }
    return expressprice;
}

function getRepeatDelivery()
{
    var repeatprice=0;
    var theForm = document.forms["calculationform"];
    var includeRepeat = theForm.elements["repeatdelivery"];

    if(includeRepeat.checked==true)
    {
        repeatprice=10;
    }
    return repeatprice;
}

function getNonworkingDelivery()
{
    var nonworkingprice=0;
    var theForm = document.forms["calculationform"];
    var includeNonworking = theForm.elements["nonworkingdelivery"];

    if(includeNonworking.checked==true)
    {
        nonworkingprice=15;
    }
    return nonworkingprice;
}

function getSmsinform()
{
    var smsinformprice=0;
    var theForm = document.forms["calculationform"];
    var includeSmsinform = theForm.elements["smsinform"];

    if(includeSmsinform.checked==true)
    {
        smsinformprice=1;
    }
    return smsinformprice;
}

function getringing()
{
    var ringingprice=0;
    var theForm = document.forms["calculationform"];
    var includeRinging = theForm.elements["ringing"];

    if(includeRinging.checked==true)
    {
        ringingprice=1;
    }
    return ringingprice;
}

function getInsurance()
{
    var insuranceprice=0;
    var theForm = document.forms["calculationform"];
    var includeInsurance = theForm.elements["insurance"];

    if(includeInsurance.checked==true)
    {
        insuranceprice=7;
    }
    return insuranceprice;
}

function getCod()
{
    var codprice=0;
    var theForm = document.forms["calculationform"];
    var includeCod = theForm.elements["cod"];

    if(includeCod.checked==true)
    {
        codprice=6;
    }
    return codprice;
}

function getStorage()
{
    var storageprice=0;
    var theForm = document.forms["calculationform"];
    var includeStorage = theForm.elements["storage"];

    if(includeStorage.checked==true)
    {
        storageprice=11;
    }
    return storageprice;
}

function getAdditionalPackaging()
{
    var additionalpackagingprice=0;
    var theForm = document.forms["calculationform"];
    var includeAdditionalPackaging = theForm.elements["additionalpackaging"];

    if(includeAdditionalPackaging.checked==true)
    {
        additionalpackagingprice=5;
    }
    return additionalpackagingprice;
}
 
function calculateTotal()
{       
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var ServicesPrice = getServicesType() * getGoodsType() * getWeightValue() * getDistanceValue() + getExpressDelivery() + getRepeatDelivery() + getNonworkingDelivery() + getSmsinform() + getringing() + getInsurance() + getCod() + getStorage() + getAdditionalPackaging();

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