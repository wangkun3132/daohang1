/**
 * Created by Administrator on 2017/1/6.
 */
window.onload = function() {
    var oContainer = document.getElementById('container');
    var oContent = document.getElementById('content');
    var aLi = oContent.getElementsByTagName('li');
    var aImg = oContent.getElementsByTagName('img');
    var oNext = document.getElementById('next');
    var oPrev = document.getElementById('prev');
    var iNow = 0;  //记录当前显示的索引
    var timer;
    for(var i=0;i<aLi.length;i++){
        aLi[i].index =i;
        aLi[i].onselectstart=function(){
            return false;
        }
        aLi[i].onmouseover=function(){
            changeImg(this.index);
            iNow=index;
        }
    }
    function changeImg(index){
        for(var i=0;i<aLi.length;i++){
            aLi[i].className="";
            aImg[i].className="";
        }
        aLi[index].className="selected";
        aImg[index].className="selected";
    }
    oPrev.onclick=function(){
        iNow++;
        iNow=iNow%aLi.length;
        changeImg(iNow);
    }
    oNext.onclick=function(){
        iNow--;
        if(iNow==-1){
           iNow
        }
        changeImg(iNow);
    }
    timer=setInterval(function(){
        oPrev.onclick();
    },1500);
    oContainer.onmouseover=function(){
        clearInterval(timer);
    }
    oContainer.onmouseout=function(){
        timer=setInterval(function(){
            oPrev.onclick();
        },1500);
    }


}
