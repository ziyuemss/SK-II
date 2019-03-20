<?php
header("Content-type:text/html;charset=utf-8");

//获取用户的输入
$stuname=$_POST['txt'];
$stupass=$_POST['txts'];
if(($stuname!="")||($stupass!="")){
	//处理

//建立连接
$conn=mysql_connect('localhost','root','root');
if(!$conn){
	die("连接失败");
}

//选择数据库
mysql_select_db("users",$conn);

//执行sql语句
$sqlstr="select * from userlog where username='$stuname' and userpwd='$stupass'";
$result=mysql_query($sqlstr,$conn);//返回值为表格

//关闭数据库
mysql_close($conn);
//响应
if(mysql_num_rows($result)>0){
	echo "1";
}else{
	echo "0";
}
}


?>