
function $(str){   //id  class tagname
	if(str.charAt(0) == "#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0) == "."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	

	$("#txt").onblur=function(){
		var res=$("#txt").value;
		var patterns=/^[\u4e00-\u9fa5]{2,6}$/;
			var pattern=/^[a-zA-Z_]\w{5,7}/;
			if(pattern.test(res)||(patterns.test(res))){
					$("#vv").innerHTML="√";
			}else{
					$("#vv").innerHTML="×";
					alert("请填写6~8位数字或字母或_(数字不能开头)或2~6位汉字")
					$("#txt").value="";
					return;
			}

			$("#txts").onblur=function(){
		var res=$("#txts").value;
			var pattern=/^[a-zA-Z0-9]{6,10}/;
			if(pattern.test(res)){
					$("#pp").innerHTML="√";
			}else{
					$("#pp").innerHTML="×";
					alert("请填写6~10位数字或字母")
					$("#txts").value="";
					return;
			}
	}
		//创建对象
		let xhr=new XMLHttpRequest();

		//设置请求参数
		xhr.open('get','php/regsave.php?username='+this.value,true);
		//设置回调函数
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){//从服务器返回的数字代码，如404（未找到）或200（就绪）4 = 完成（complete）
				if(xhr.responseText=="1"){
					$("#sp").innerHTML="该账号已被注册";
				}else{
					$("#sp").innerHTML="该账号可以使用";
				}
			}
		}
		//发送
		xhr.send();
}
