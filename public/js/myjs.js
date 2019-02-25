function deleteProduct(id) {
    $.ajax({
        url: 'https://appcuatuine.herokuapp.com/products/' + id,
        type: 'DELETE',
        data: {"_id": id},
        success: function (response) {
            alert('Success.');
            location.href = '/products';
        },
        error: function (response, message) {
            alert('Error. ' + message);
            location.href = '/products';
            console.log(response);
        }
    });
}

$(document).ready(function () {
    $(".megamenu_title").click(function () {
        var arrow = $(".megamenu .megamenu_title span");
        var elm = document.getElementById('checkbox-toggle');
        elm.checked = !elm.checked;
        if (elm.checked === true) {
            $(this).next().animate({height: 'show'});
            arrow.html('<i class="fas fa-angle-up"></i>')
        } else {
            $(this).next().animate({height: 'hide'});
            arrow.html('<i class="fas fa-angle-down"></i>')
        }
    });

    function myMap() {
        var mapProp = {
            center: new google.maps.LatLng(21.028891, 105.781704),
            zoom: 5,
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    }

    $(".categories-btn-modal").click(function () {
        if (!$(this).prev().is(":checked")) {
            $(this).next().animate({height: 'show'}, 300)
                   .html('<i class="fas fa-minus"></i>')
        } else {
            $(this).next().animate({height: 'hide'}, 300)
                   .html('<i class="fas fa-plus"></i>')

        }
    });

    $(".categories-btn").click(function () {
        if (!$(this).prev().is(":checked")) {
            $(this).next().animate({height: 'show'}, 300)
                   .html('<i class="fas fa-minus"></i>')
        } else {
            $(this).next().animate({height: 'hide'}, 300)
                   .html('<i class="fas fa-plus"></i>')

        }
    });


    $(".item-menu").hover(
        function () {
            $(this).find('.popup').animate({height: 'show'}, 500)
        }, function () {
            $(this).find('.popup').css('display', 'none')
        });

    // $(window).resize(function(){
    //
    //     if ($(window).width() <= 768 ){
    //         $('.title-item-menu i').removeClass('fa-angle-right').addClass('fa-plus')
    //     }else {
    //         $('.title-item-menu i').removeClass('fa-plus').addClass('fa-angle-right')
    //     }
    //
    // });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 165) {
            $('.scroll-nav').css('transform', 'translateY(100px)');
        } else {
            $('.scroll-nav').css('transform', 'translateY(-100px)');
        }
    });
    $('.p-carousel-item img').fadeIn()

});