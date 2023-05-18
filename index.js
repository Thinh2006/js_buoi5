// global
function dom(id) {
    return document.getElementById(id);
}

// // QUAN LY TUYEN SINH
function area_point(area) {
    if (area === "A") {
        return 2;
    } 
    if (area === "B") {
        return 1;
    }
    if (area === "C") {
        return 0.5;
    }
    if (area === "X") {
        return 0;
    }
}

function type_point(type) {
    if (type == 1) {
        return 2.5;
    }
    if (type == 2) {
        return 1.5;
    }
    if (type == 3) {
        return 1.5;
    }
    if (type == 0) {
        return 0;
    }
}

var btn1 = dom("btn1");
btn1.onclick = function () {
    var point1 = dom("num1").value;
    var point2 = dom("num2").value; 
    var point3 = dom("num3").value;
    var benchmark = dom("benchmark").value;
    var area = dom("area").value;
    var type = dom("type").value;
    var total = parseInt(point1) + parseInt(point2) + parseInt(point3);
    var final = total + area_point(area) + type_point(type);
    var result1 = dom("result1");
    var result2 = dom("result2");
    if (final >= benchmark && point1!=0 && point2!=0 && point3!=0) { 
        result1.innerHTML = "DAU";
        result2.innerHTML = final;
    } else {
        result1.innerHTML = "ROT";
        result2.innerHTML = final;
    }
}

// TINH TIEN DIEN
var btn2 = dom("btn2");
function energy(kw) {
    if (kw<=50) {
        return 500*kw;
    }
    if (kw>50 && kw<=100) {
        return 500*50 + 650*(kw-50);
    }
    if (kw>100 && kw<=200) {
        return 500*50 + 650*50 + 850*(kw-100);
    }
    if (kw>200 && kw<=350) {
        return 500*50 + 650*50 + 850*(100) + 1100*(kw-200);
    }
    if (kw>350) {
        return 500*50 + 650*50 + 850*(100) + 1100*(150) + 1300*(kw-350)
    }
}
btn2.onclick = function() {
    var energy_total = dom("energy_total");
    var energy_name = dom("energy_name");
    var kw = dom("kw").value;
    energy_name.innerHTML = dom("name").value;
    energy_total.innerHTML = energy(kw).toLocaleString("vi", {style:"currency", currency:"VND"});;
}

// TINH THUE THU NHAP CA NHAN 
var btn3 = dom("btn3");
btn3.onclick = function() {
    var income = dom("income").value;
    var people = dom("people").value;
    var tax_income = income - 4 - people*1.6;
    function tax_calc(tax_income){
        if (tax_income<=60) {
            return tax_income*0.05;
        }
        if (tax_income>60 && tax_income<=120) {
            return 60*0.05 + (tax_income-60)*0.1; 
        }
        if (tax_income>120 && tax_income<=210) {
            return 60*0.05 + 60*0.1 + (tax_income-120)*0.15; 
        }
        if (tax_income>210 && tax_income<=384) {
            return 60*0.05 + 60*0.1 + 90*0.15 + (tax_income-210)*0.2; 
        }
        if (tax_income>384 && tax_income<=624) {
            return 60*0.05 + 60*0.1 + 90*0.15 + 174*0.2(tax_income-384)*0.25; 
        }
        if (tax_income>624 && tax_income<=960) {
            return 60*0.05 + 60*0.1 + 90*0.15 + 174*0.2 + 40*0.25 + (tax_income-624)*0.3; 
        }
        if (tax_income>960) {
            return 60*0.05 + 60*0.1 + 90*0.15 + 174*0.2 + 40*0.25 + 336*0.3 + (tax_income-960)*0.35;
        }
    }
    var total_tax = dom("total_tax");
    total_tax.innerHTML = tax_calc(tax_income);
}

// TINH TIEN CAP
var btn = dom("btn")
var type1 = dom("type1");
var connection = dom("connection");

type1.onchange=function(){
    if (type1.value === "business") {
        connection.style.display = "block";
    } else {
        connection.style.display = "none";
    }
}

btn.onclick = function(){
    var channel = dom("channel").value;
    var connection_val = connection.value;
    function connection_calc(connection_val) {
        if (connection_val<=10) {
            return 75*connection_val;
        } else {
            return 75*10 + (connection_val-10)*5;
        }
    }
    function cable_calc(type) {
        if (type.value === "domestic") {
            return 4.5 + 20.5 + 7.5*channel;
        } else {
            return 15 + connection_calc(connection_val) + 50*channel;
        }
    } 
    var total_cable = dom("total_cable");
    total_cable.innerHTML = (cable_calc(type1)).toLocaleString("en-US", {style:"currency", currency:"USD"});
}