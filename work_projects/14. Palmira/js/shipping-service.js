/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

var delivery_type= new Array();
 delivery_type["None"]=0;
 delivery_type["Balker_ore"]=0.5;
 delivery_type["20DC"]=0.7;
 delivery_type["40DC"]=0.85;
 delivery_type["Tanker"]=0.9;
 delivery_type["Multipurpose"]=1.0;
 delivery_type["Refrigerator"]=1.2;
 delivery_type["Combined"]=2.4;

var goods_type= new Array();
 goods_type["None"]=0;
 goods_type["General"]=0.1;
 goods_type["Fragile"]=0.16;
 goods_type["Hazardous"]=0.2;
 goods_type["Fine"]=0.3;
	 
function getDeliveryType()
{
    var deliveryType=0;
    var theForm = document.forms["calculationform"];
    var selectedDeliveryType = theForm.elements["delivery_type"];
     
    deliveryType = delivery_type[selectedDeliveryType.value];

    return deliveryType;
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
    var distanceValue = parseFloat(theForm.elements["distance"].value) / 5;

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
        insuranceprice=25;
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
        packagingprice=15;
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
    var ServicesPrice = getDeliveryType() * getGoodsType() * getWeightValue() * getDistanceValue() + getInsurance() + getPackaging() + getFragileYes();

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