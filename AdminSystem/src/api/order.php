<?php

    include 'conn.php';

    $ordertype = isset($_REQUEST['ordertype']) ? $_REQUEST['ordertype'] : '';
    $order = isset($_REQUEST['order']) ? $_REQUEST['order'] : '';
    $order2 = isset($_REQUEST['order2']) ? $_REQUEST['order2'] : '';
    
    $sql = "$order";
    $res = $conn->query($sql);


    if($ordertype == 'verify'){
        if($res->num_rows){
            echo 'no';
        }
        else{
            echo 'yes';
        }
    }
    
    if($ordertype == 'reg' || $ordertype == 'changeuserinf' ||
     $ordertype == 'delID' || $ordertype == 'changegoodsinf'
      || $ordertype == 'addgoods'){
        if($res) {
            echo 'success';
        }else {
            echo 'failure';
        }
    }

    if($ordertype == 'login' || $ordertype == 'isadmin'){
        if($res->num_rows){
            echo 'allow';
            }
        else {
            echo 'notallow';
        }
    }

    

    if($ordertype == 'setpage'){
        $page = isset($_GET['page']) ? $_GET['page'] : 1;
        $num = isset($_GET['num']) ? $_GET['num'] : 8;
        $sql2 = "$order2";
        $res2 = $conn->query($sql2);

        $arr = $res->fetch_all(MYSQLI_ASSOC);//得到一个数组 [{},{},{}]
        $data = array(
            'total' => $res2->num_rows,
            'data' => $arr,
            'page' => $page,
            'num' => $num,
        );
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }

    if($ordertype == 'getuserinf' || $ordertype == 'control' || $ordertype == 'sendid' 
    || $ordertype == 'footprint1' || $ordertype == 'searchuid' 
    || $ordertype == 'getgid' || $ordertype == 'searchnum'){
        $data = $res->fetch_all(MYSQLI_ASSOC);//得到一个数组 [{},{},{}]
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }

    if($ordertype == 'footprint2'|| $ordertype == 'savedata'){
        if($res){
            echo 'success';
        }
        else{
            echo 'failure';
        }
    }


    

    
    // $data = $res->fetch_all(MYSQLI_ASSOC);//得到一个数组 [{},{},{}]
    // // var_dump($data)
    // //4.把数组转成字符串，传给前端,一个接口文件只能有一个输出：echo '[{},{},{}]'
    // echo json_encode($data,JSON_UNESCAPED_UNICODE);//把对象转成字符串 JSON_UNESCAPED_UNICODE防止转义
    
    //关闭连接，防止资源浪费
    // $res->close();
    // $conn->close();
?>