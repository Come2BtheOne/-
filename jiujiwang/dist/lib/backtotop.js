//立即回到顶部



let backTopQuick = (opt) => {

    let defaultData = {//可选项,用默认参数
        id: '',    //默认节点名字
    };

    Object.assign(defaultData, opt);//用默认参数
    let backToTop = document.getElementById(defaultData.id);

    backToTop.onclick = () => {
        window.scrollTo(0, 0);
    };
};




//自定义速度回到顶部


let backTopSlow = (opt) => {

    let defaultData = {//可选项,用默认参数
        id: '',        //默认节点名字
        setSpeed: 10,   //步长默认20
        setTime: 10,    //定时器时间默认30
    };

    Object.assign(defaultData, opt);//用默认参数
    let backToTop = document.getElementById(defaultData.id);

    backToTop.onclick = () => {
        let top = window.scrollY;
        timer = setInterval(function () {
            top -= defaultData.setSpeed;
            if (top <= 0) { 
                top = 0;
                window.scrollTo(0, top);
                clearInterval(timer);
            }
            else {
                window.scrollTo(0, top);
            }
        }, defaultData.setTime);
    };
};

//结构


//          <p id="goback"></p>

