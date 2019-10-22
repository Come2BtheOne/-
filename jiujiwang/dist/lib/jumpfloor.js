let floorJump = (opt) => {
    let defaultData = {
        id: '',
        setHeight: window.innerHeight,
    }
    Object.assign(defaultData, opt);

    let box = document.getElementById(defaultData.id);
    let aLis = box.querySelectorAll('.floor li');
    let aBtns = box.querySelectorAll('.btn li');

    //1.让楼层的高度和可视区保持一致
    for (let i = 0; i < aLis.length; i++) {
        aLis[i].style.height = defaultData.setHeight + 'px';
    }

    //2.点击按钮可以跳转到对应楼层
    for (let i = 0; i < aLis.length; i++) {
        aBtns[i].index = i;
        aBtns[i].onclick = function () {
            for (let k = 0; k < aBtns.length; k++) {
                aBtns[k].className = '';
            }
            this.className = 'active';
            let num = this.index;
            window.scrollTo(0, num * aLis[0].offsetHeight);
        }
    }

    //3.在楼层滚动的时候，按钮跟着高亮显示
    window.onscroll = function () {
        let scrollTop = window.scrollY;//动态获取到滚动距离
        for (let i = 0; i < aLis.length; i++) {
            if (scrollTop >= aLis[i].offsetTop) {
                // console.log('临界值到了' + i);
                //排他
                for (let j = 0; j < aBtns.length; j++) {
                    aBtns[j].className = '';
                }
                aBtns[i].className = 'active';
            }
        }
    }
}

//结构

// <div id="box">
//     <ul class="floor">
//         <li>1楼</li>
//         <li>2楼</li>
//         <li>3楼</li>
//         <li>4楼</li>
//     </ul>
//     <ul class="btn">
//         <li class="active">1楼</li>
//         <li>2楼</li>
//         <li>3楼</li>
//         <li>4楼</li>
//     </ul>
// </div>