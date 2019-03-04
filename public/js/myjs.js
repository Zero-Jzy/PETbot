

function deleteProduct(id) {
    if(confirm('Bạn có muốn xóa sản phẩm?')) {
        $.ajax({
            url: 'http://localhost:3000/admin/products/list-products/' + id,
            type: 'DELETE',
            data: {"_id": id},
            success: function (response) {
                alert('Xóa Thành Công.');
                location.href = '/admin/products/list-products';
            },
            error: function (response, message) {
                alert('Error. ' + message);
                location.href = '/admin/products/list-products';
                console.log(response);
            }
        });
    }
}

$(document).ready(function () {
    $(".megamenu_title").click(function () {
        var arrow = $(".megamenu .megamenu_title span");
        var elm = document.getElementById('checkbox-toggle');
        console.log(elm);
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

    // $(".categories-btn-modal").click(function () {
    //     if (!$(this).prev().is(":checked")) {
    //         console.log('1');
    //         $(this).next().animate({height: 'show'}, 300);
    //         $(this).html('<i class="fas fa-minus"></i>')
    //     } else {
    //         console.log('2');
    //         $(this).next().animate({height: 'hide'}, 300);
    //         $(this).html('<i class="fas fa-plus"></i>')
    //
    //     }
    // });

    function toggle(a){
        $(a).click(function () {
            if (!$(this).prev().is(":checked")) {
                console.log('1');
                $(this).parent().next().animate({height: 'show'}, 300);
                $(this).html('<i class="fas fa-minus"></i>')
            } else {
                console.log('2');
                $(this).parent().next().animate({height: 'hide'}, 300);
                $(this).html('<i class="fas fa-plus"></i>')

            }
        });
    }

    toggle('.categories-btn-modal');
    toggle('.categories-btn');

    function resizeImg() {
        var cw = $('.img-products').width();
        $('.img-products').css({
            'height': cw + 'px'
        });
    }
    resizeImg();

    $(window).resize(function(){

        if ($(window).width() <= 768 ){
            $('.title-item-menu i').removeClass('fa-angle-right').addClass('fa-plus');
            $('#megamenu > div').removeClass('item-menu-hover');
        }else {
            $('.title-item-menu i').removeClass('fa-plus').addClass('fa-angle-right');
            $('#megamenu > div').addClass('item-menu-hover');
        }

        resizeImg()
    });

    $(".item-menu-hover").hover(
        function () {
            $(this).find('.popup').animate({height: 'show'}, 500)
        }, function () {
            $(this).find('.popup').css('display', 'none')
        });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 165) {
            $('.scroll-nav').css('transform', 'translateY(100px)');
            $('.back-top').css('opacity','1')
        } else {
            $('.scroll-nav').css('transform', 'translateY(-100px)');
            $('.back-top').css('opacity','0')

        }

    });

    $('#back-top-button').click( function() {
        $('html, body').animate({scrollTop:0}, '300');
    });

    $('#myCarousel').hover(function () {
        $('.btn-prev-carousel').css('opacity','1');
        $('.btn-next-carousel').css('opacity','1')
    }, function(){
        $('.btn-prev-carousel').css('opacity','0');
        $('.btn-next-carousel').css('opacity','0')
    });

});
//
// $('.owl-carousel').owlCarousel({
//     autoplay: true,
//     autoplayTimeout: 5000,
//     autoplayHoverPause: true,
//     loop: true,
//     margin: 20,
//     responsiveClass: true,
//     nav: true,
//     loop: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         568: {
//             items: 2
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 4
//         }
//     }
// })