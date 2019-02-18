
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
        console.log(elm);
        elm.checked = !elm.checked;
        if (elm.checked === true){
            $(this).next().animate({height:'show'});
            arrow.html('<i class="fas fa-angle-up"></i>')
        }else{
            $(this).next().animate({height:'hide'});
            arrow.html('<i class="fas fa-angle-down"></i>')
        }
    });

    // function Show(){
    //     this.show = false;
    //     this.click = function () {
    //         this.show = !this.show;
    //         if (this.show === true){
    //             $(this).next().animate({height:'show'});
    //             // arrow.html('<i class="fas fa-angle-up"></i>')
    //         }else{
    //             $(this).next().animate({height:'hide'});
    //             // arrow.html('<i class="fas fa-angle-down"></i>')
    //         }
    //     }
    // }

    // $(".categories-btn").Show();

    $(".categories-btn").click(function(){
        if (!$(this).prev().is(":checked")){
            console.log('1');
            $(this).next().animate({height:'show'},300);
            $(this).html('<i class="fas fa-minus"></i>')
        }else{
            console.log('2');
            $(this).next().animate({height:'hide'},300);
            $(this).html('<i class="fas fa-plus"></i>')

        }
    });

    console.log($('#testcheckbox').is(":checked"))

    $(".item-menu").hover(
        function(){
            $(this).find('.popup').animate({height:'show'},500)
        }, function(){
            $(this).find('.popup').css('display','none')
        });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 165) {
            $('.scroll-nav').css('transform','translateY(100px)');
        }else{
            $('.scroll-nav').css('transform','translateY(-100px)');
        }
    });
    $('.p-carousel-item img').fadeIn()

});