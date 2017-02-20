$(function(){
    $('span').on('click',function(){
    var size=$('#para').css('font-size');
    var textFontSize = parseFloat(size , 10);
    var unit = size.slice(-2); //获取单位
    var cName = $(this).attr("class");
    if(cName=='bigger'){
        textFontSize+=2;
    }else if(cName=='smaller'){
        textFontSize-=2;
    }
    $('#para').css('font-size',textFontSize+unit);
    })
})
