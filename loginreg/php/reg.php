<?php
 header("Content-type:text/html;charset=utf-8");

 $stuname=$_GET['username'];
 $password=$_GET['userpass'];

if(($stuname !="")&&($password !="")){
//处理

 //建立连接
 $conn=mysql_connect("localhost","root","root");
 if(!$conn){
 	die("连接失败");

 }
//选择数据库
 mysql_select_db("users",$conn);

 //执行sql语句

 // 1.查询
 $sqlstr="select * from userlog where username='$stuname'";
 $result=mysql_query($sqlstr,$conn);
 if(mysql_num_rows($result)>0){
 	mysql_close($conn);//先处理完后端程序
 	echo "该账号已被注册";
 }else{
 	$sqlstr="insert into userlog values('$stuname','$password')";
 	$result=mysql_query($sqlstr,$conn);

 	//关闭数据库
 	mysql_close($conn);
 	//响应
 	if($result==1){
 		// echo "注册成功"."<br/>"."<a href='../login.html'>"."返回"."</a>";
 		echo "1";
 	}else{
 		// echo "注册失败";
 		echo "0";
 	}

 }
}else if(($stuname =="")||($password =="")){

 echo "请写入用户名和密码"."<br/>"."<a href='../reg.html'>"."返回"."</a>";
	
}


?>