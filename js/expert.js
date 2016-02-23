$(function(){
    /*上传照片按钮 start*/
    $('.upPicBtn').click(function(){
        return $('#updatePic').click();
    });
    /*上传照片按钮 end*/

    /*输入框输入文字改变文字颜色 start*/
    $('.e-formItem input').click(function(){
         $(this).css("color","#222222");
    });
    $('.expertForm .in textarea').css('color','#c0c5ca');
    $('.expertForm .in textarea').click(function(){
        $(this).css('color','#222222');
    })
    /*输入框输入文字改变文字颜色 end*/

    $('.e-formItem .btn').css('color','#c0c5ca');

    /*照片样例按钮 start*/
    $('.picDemo').click(function(){
        $('.picDemo1').show();
    });
    /*照片样例按钮 end*/

    /*文本框获取焦点移开焦点 start*/
    $("#txtUser").jFocus();
    $("#txtCorp").jFocus();
    $("#txtZhi").jFocus();
    $("#txtCountry").jFocus();
    $("#txtTel").jFocus();
    $(".expertForm .in textarea").jFocus();
    /*文本框获取焦点移开焦点 end*/

    /*模式弹框左右切换 start*/
    $('#tabCarousel0').carousel('pause');
    $('#tabCarousel1').carousel('pause');
    $('#tabCarousel2').carousel('pause');
    $('#tabCarousel3').carousel('pause');
    /*模式弹框左右切换 end*/


});
