<?php
header("Content-type:text/html;charset=utf-8");

$username = $_GET['username'];
$conn = mysql_connect('localhost','root','root');
	if(!$conn){
		die("连接失败");
	}
	//2、选择数据库（选择目的地）
	mysql_select_db("users",$conn);

	//3、执行SQL语句（传输数据）
	$sqlstr="select * from userlog where username='$username'";
	$result = mysql_query($sqlstr,$conn);//结果是个表格

	//4、关闭数据库（过河拆桥）
	mysql_close($conn);

	//三、响应
	if(mysql_num_rows($result)>0){
		echo "1";
	}else{
		echo "0";
	}
// $username=$_POST['username'];
// $userpass=$_POST['userpass'];
// echo "您的用户名是：".$username."<br/>";
// echo "您的密码是：".$userpass;
// echo "您的密码是：".$userpass;
?>