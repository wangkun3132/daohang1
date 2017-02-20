$(function(){
    $('span').on('click',function(){
        var size=$('#para').css('font-size');
        var fontSize=parseFloat(size,10);
        var unit=size.slice(-2);
        var cName=$(this).attr('class');
        if(cName=='bigger'){
            if(fontSize<=22){
                fontSize+=2;
            }
        }else if(cName=='smaller'){
            if(fontSize>=2){
               fontSize-=2;
            }
        }
        $('#para').css('font-size',fontSize+unit);
    })
})
