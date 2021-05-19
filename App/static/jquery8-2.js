$(document).ready(function () {
    //更新元素內部html $(選擇條件).html(...)
    $('.block1').html("更新公告");
    //更新css $(選擇條件).css(...)
    $('.block2').css("background-color","#f24");
    $('.block2').css("border-radius","100%");
    //新增/移除css class $(選擇條件).addClass/removeClass(...)
    $('.block3').addClass("bigblock");
    $('.block4').removeClass('bigblock');
    //使用html()動態新增元素
    $('.block5').html("<div class='block'>商品</div><div class='block'>商品</div>");
    $('.block5').prepend("商品列表");
    $('.block5').append("共有兩項");
    //使用text()顯示純文件
    $('.block6').text("<div class='block'>商品</div><div class='block'>商品</div>");
});

