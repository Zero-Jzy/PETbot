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

    //google maps
    $(document).ready(function () {
        $("#form-contact").validate({
            rules: {
                nameContact: {
                    required: true,
                    minlength: 2,
                    maxlength: 40
                },
                emailContact: {
                    required: true,
                    minlength: 2,
                    maxlength: 50,
                    email: true
                },
                numberPhoneContact: {
                    required: true,
                    minlength: 10,
                    maxlength: 11
                },
                messageContact: {
                    required: true,
                    minlength: 5,
                }
            },
            messages: {
                nameContact: {
                    required: "*Vui lòng nhập họ và tên của bạn.",
                    minlength: "*Vui lòng nhập đúng họ và tên của bạn.",
                    maxlength: "*Vui lòng nhập đúng họ và tên của bạn."
                },
                emailContact: {
                    required: "*Vui lòng nhập Email.",
                    minlength: "*Vui lòng nhập đúng Email.",
                    maxlength: "*Vui lòng nhập đúng Email",
                    email: "*Vui lòng nhập đúng định dạng Email."
                },
                numberPhoneContact: {
                    required: "*Vui lòng nhập số điện thoại.",
                    minlength: "*Vui lòng nhập đúng số điện thoại.",
                    maxlength: "*Vui lòng nhập đúng số điện thoại."
                },
                messageContact: {
                    required: "*Vui lòng nhập tin nhắn.",
                    minlength: "*Tin nhắn quá ngắn."
                }
            }
        })
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

    $(".categories-btn").click(function () {
        if (!$(this).prev().is(":checked")) {
            console.log('1');
            $(this).next().animate({height: 'show'}, 300);
            $(this).html('<i class="fas fa-minus"></i>')
        } else {
            console.log('2');
            $(this).next().animate({height: 'hide'}, 300);
            $(this).html('<i class="fas fa-plus"></i>')

        }
    });

    console.log($('#testcheckbox').is(":checked"))

    $(".item-menu").hover(
        function () {
            $(this).find('.popup').animate({height: 'show'}, 500)
        }, function () {
            $(this).find('.popup').css('display', 'none')
        });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 165) {
            $('.scroll-nav').css('transform', 'translateY(100px)');
        } else {
            $('.scroll-nav').css('transform', 'translateY(-100px)');
        }
    });
    $('.p-carousel-item img').fadeIn()

});