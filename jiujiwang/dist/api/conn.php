<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'h51907';

$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error) {
    //有数据返回，就证明失败了
    die('连接失败：'. $conn->connect_error);
};
// else {
//     echo '连接成功';
// }

?>