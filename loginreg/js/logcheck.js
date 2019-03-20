function $(str){   //id  class tagname
	if(str.charAt(0) == "#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0) == "."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	
function getStyle(domObj,attr){
	if(domObj.currentStyle){//domObj.currentStyle如果能够正确获取到，那就真
		return domObj.currentStyle[attr];//当对象的属性名是变量时，用方括号而不是点。
	}else{
		return window.getComputedStyle(domObj)[attr];
	}	
}
function saveCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = key+'='+escape(value)+';expires='+d.toGMTString();
}

$("#txtLogin").onclick=function(){
		//创建对象
		let xhr=new XMLHttpRequest();

		//设置请求参数
		xhr.open('post','php/loginCheck.php',true);
		//设置回调函数
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){//从服务器返回的数字代码，如404（未找到）或200（就绪）4 = 完成（complete）
				if(xhr.responseText=="1"){
					//存cookie
					saveCookie("username",$("#txt").value,7);
					alert("登陆成功");
					window.parent.location.href="../SKII.html";

					
				}else{
					alert("登录失败");
				}
			}
		}
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');//post的固定写法
		//发送
		xhr.send("txt="+$("#txt").value+"&txts="+$("#txts").value);
}
$("#txtLoginA").onclick=function(){
	$("#txt").value="";
	$("#txts").value="";

}
$("#ifzc").onclick=function(){
	$("#dian").style.display="block";

}
$("#ifzc").ondblclick=function(){
	$("#dian").style.display="none";

}
