$(function(){
    $('#skin li').on('click',function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('h1').attr('class','title').addClass($(this).attr('id'));
    //$('h1').css('background',$(this).attr('background'));//Ã»ÓÐbackground
    $.cookie( "MyCssSkin" ,$(this).attr('id'), {expires: 10 });
    })
    var cook_skin=$.cookie( "MyCssSkin");
    $('#'+cook_skin).trigger('click');
})
