
function deleteProduct(id){
    $.ajax({
        url: 'https://appcuatuine.herokuapp.com/products/' + id,
        type: 'DELETE',
        data: {"_id" : id},
        success: function(response){
            alert('Success.');
            location.href = '/products';
        },
        error: function(response, message){
            alert('Error. ' + message );
            location.href = '/products';
            console.log(response);
        }
    });
}

$(document).ready(function(){
    $(".megamenu_title").click(function(){
        var arrow = $(".megamenu .megamenu_title span");
        var elm = document.getElementById('checkbox-toggle');
        elm.checked = !elm.checked;
        if (elm.checked === true){
            $('#megamenu').animate({height:'show'});
            arrow.html('<i class="fas fa-angle-up"></i>')
        }else{
            $('#megamenu').animate({height:'hide'});
            arrow.html('<i class="fas fa-angle-down"></i>')
        }
    });

    $(".item-menu").hover(
        function(){
            $(this).find('.popup').animate({height:'show'},500)
        }, function(){
            $(this).find('.popup').css('display','none')
        });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 140) {
            $('.scroll-nav').css('transform','translateY(100px)');
        }else{
            $('.scroll-nav').css('transform','translateY(-100px)');
        }
    });
    $('.p-carousel-item img').fadeIn()

});