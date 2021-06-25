function calculate_results() {

    var A1 = parseInt(document.getElementById('1A').value, 10);
    var B1 = parseInt(document.getElementById('1B').value, 10);
    var A2 = parseInt(document.getElementById('2A').value, 10);
    var B2 = parseInt(document.getElementById('2B').value, 10);
    var A3 = parseInt(document.getElementById('3A').value, 10);
    var B3 = parseInt(document.getElementById('3B').value, 10);
    var A4 = parseInt(document.getElementById('4A').value, 10);
    var B4 = parseInt(document.getElementById('4B').value, 10);

    var A5 = parseInt(document.getElementById('5A').value, 10);
    var B5 = parseInt(document.getElementById('5B').value, 10);
    var A6 = parseInt(document.getElementById('6A').value, 10);
    var B6 = parseInt(document.getElementById('6B').value, 10);
    var A7 = parseInt(document.getElementById('7A').value, 10);
    var B7 = parseInt(document.getElementById('7B').value, 10);
    var A8 = parseInt(document.getElementById('8A').value, 10);
    var B8 = parseInt(document.getElementById('8B').value, 10);
    var A9 = parseInt(document.getElementById('9A').value, 10);
    var B9 = parseInt(document.getElementById('9B').value, 10);
    var A10 = parseInt(document.getElementById('10A').value, 10);
    var B10 = parseInt(document.getElementById('10B').value, 10);
    var A11 = parseInt(document.getElementById('11A').value, 10);
    var B11 = parseInt(document.getElementById('11B').value, 10);
    var A12 = parseInt(document.getElementById('12A').value, 10);
    var B12 = parseInt(document.getElementById('12B').value, 10);
    var A13 = parseInt(document.getElementById('13A').value, 10);
    var B13 = parseInt(document.getElementById('13B').value, 10);
    var A14 = parseInt(document.getElementById('14A').value, 10);
    var B14 = parseInt(document.getElementById('14B').value, 10);
    var A15 = parseInt(document.getElementById('15A').value, 10);
    var B15 = parseInt(document.getElementById('15B').value, 10);
    var A16 = parseInt(document.getElementById('16A').value, 10);
    var B16 = parseInt(document.getElementById('16B').value, 10);
    var A17 = parseInt(document.getElementById('17A').value, 10);
    var B17 = parseInt(document.getElementById('17B').value, 10);
    var A18 = parseInt(document.getElementById('18A').value, 10);
    var B18 = parseInt(document.getElementById('18B').value, 10);

    var O = A1 + B3 + A5 + B7 + A9 + B11 + A13 + B15 + A17;
    var G = B1 + A3 + B5 + A7 + B9 + A11 + B13 + A15 + B17;
    var D = B2 + A4 + B6 + A8 + B10 + A12 + B14 + A16 + B18;
    var I = A2 + B4 + A6 + B8 + A10 + B12 + A14 + B16 + A18;
		//alert("o:"+O+" G:"+G+" D:"+D+" I:"+I);
		var result;
    if (O > G) { 
        if (D > I) { //O & D
            alert("您是I型人格!");
            result="I型人格"
        } else { //O & I
            alert("您是S型人格!");
            result="S型人格"
        }
    } else {
        if (D > I) { //G & D
            alert("您是D型人格!");
            result="D型人格"
        } else { // G & I
            alert("您是C型人格!");
            result="C型人格"
        }
    }
    
    return result;
}

   
