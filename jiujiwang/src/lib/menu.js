clickMenu = (opt) => {
    let defaultData = {
        ele: '',
        speed: null,
    }
    Object.assign(defaultData, opt);

    $(defaultData.ele).click(function () {
        $(this).children().eq(1).toggle(defaultData.speed);
    })
}

slideMenu = (opt) => {

    let defaultData = {
        ele: '',
        speed: 200,
    }
    Object.assign(defaultData, opt);

    $(defaultData.ele).mouseenter(function () {
        $(this).children().eq(1).stop().slideDown(defaultData.speed);
    })
    $(defaultData.ele).mouseleave(function () {
        $(this).children().eq(1).stop().slideUp(defaultData.speed);
    })
}

quickMenu = (opt) => {

    let defaultData = {
        ele: '',
        speed: null,
    }
    Object.assign(defaultData, opt);

    $(defaultData.ele).mouseenter(function () {
        $(this).children().eq(1).show(defaultData.speed);
    })
    $(defaultData.ele).mouseleave(function () {
        $(this).children().eq(1).hide(defaultData.speed);
    })

}
//结构

//div id="box">
//     <input type="button" value="下拉菜单" class="btn">
//     <div class="hideBox"></div>
//</div>