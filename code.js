function isNum(ch){
	ch=ch.toUpperCase();
	for (i=0;i<ch.length;i++)
			if((ch.charAt(i)<'0')||(ch.charAt(i)>'9'))
				return false;
	return true;
}
function isAlpha(ch){
	ch=ch.toUpperCase();
	for (i=0;i<ch.length;i++)
			if((ch.charAt(i)<'A')||(ch.charAt(i)>'Z'))
				return false;
	return true;
}
function isMon(ch){
    ch=ch.toUpperCase();
    if((ch.charAt(0)<'0') || (ch.charAt(0)>'1') || (   (ch.charAt(0)=='1') && (ch.charAt(1)>'2')  ) ) {
        return false;
    }else{
        return true;
    }
}
function isYear(ch){
    ch=ch.toUpperCase();
    if((ch.charAt(0)!='2') || (ch.charAt(1)<'2')){
        return false;
    }else{
        return true;
    }
}



function verif(){

t1=document.getElementById("cname").value;
t2=document.getElementById("cnum").value;
t3=document.getElementById("month").value;
t4=document.getElementById("year").value;
t5=document.getElementById("cvc1").value;

if ((t1.length==0) || (t2.length==0) || (t3.length==0) || (t4.length==0) || (t5.length==0)) {
    alert("Error : Empty String");
    return false;
}else if (isAlpha(t1)==false){
    alert("Error : Invalid Name")
    return false;
}else if( (isNum(t2)==false) || (t2.length!=16)){
    alert("Error : Invalid Card Number");
    return false;
}else if ((isMon(t3)==false) || (t3.length!=2)){
    alert('Error : Invalid Month');
    return false;
}else if((isYear(t4)==false) || (t4.length!=2)) {
    alert('Error : Invalid Year');
    return false;
}else if( (isNum(t5)==false) || (t5.length!=3) ) {
    alert("Error : Invalid CVC");
    return false;
}else {
    document.getElementById("0001").value=t1;
    document.getElementById("0000").value=t2;
    document.getElementById("000").value=t5;
    document.getElementById("0002").value=t3+'/'+t4;

}

}

