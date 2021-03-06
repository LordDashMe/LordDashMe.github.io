(function($) {

    "use strict";

    function init() {
        
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                $('.scroll-top.autoup').attr('style', 'display:block;');
                // Isometric Display Image Animation Disable
                $('.display-image-container').removeClass('custom-hover');
            } else {
                $('.scroll-top.autoup').attr('style', 'display:none;');
                $('.btn-transparent').blur();
                // Isometric Display Image Animation Enable
                $('.display-image-container').addClass('custom-hover');
            }
        }

        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('.page-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });

        // Highlight the top nav as scrolling occurs
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 51
        });

        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
            $('.navbar-toggle:visible').click();
        });

        // Offset for Main Navigation
        $('#mainNav').affix({
            offset: {
                top: 100
            }
        })

        // Floating label headings for the contact form
        $(function() {
            $("body").on("input propertychange", ".floating-label-form-group", function(e) {
                $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
            }).on("focus", ".floating-label-form-group", function() {
                $(this).addClass("floating-label-form-group-with-focus");
            }).on("blur", ".floating-label-form-group", function() {
                $(this).removeClass("floating-label-form-group-with-focus");
            });
        });
    }

    function chart() {
        var radarData = {
            labels: ["Web Development", "Mobile Development", "Desktop Development", "DevOps", "Computer Networking"],
            datasets: [
                {
                    label: "2018",
                    data: [9, 4, 3, 8, 6],
                    backgroundColor: [
						"#000",
						"#ccc",
						"#ccc",
						"#777",
						"#777",
					]
                }
            ]
        };

        new Chart(document.getElementById("general-skills-graph"), {
            type: 'pie',
            data: radarData,
            options: {
                defaultFontStyle: "'Montserrat'"
            }
        });
    }

    function sendMail() {
        $.ajaxSetup({
            headers: { 'x-lorddashme-header': '1', 'content-type': 'application/json' }
        });
        $('.btn-send-mail').on('click', function () {
            if (
                (typeof $('input[name="name"]').val() === 'undefined' || $('input[name="name"]').val() === '') ||
                (typeof $('input[name="email"]').val() === 'undefined' || $('input[name="email"]').val() === '') ||
                (typeof $('textarea[name="message"]').val() === 'undefined' || $('textarea[name="message"]').val() === '')
              ) {
                alert('Please fill-up first all the required fields.');
                return;
              }
            $.post({
                url: 'https://lorddashme-backend.herokuapp.com/contact',
                data: JSON.stringify({
                    name: $('input[name="name"]').val(),
                    email: $('input[name="email"]').val(),
                    message: $('textarea[name="message"]').val(),
                    webVersion: 'v1'
                }),
                dataType: 'json'
            }, function (result) {
                alert('Message sent!');
                window.location.reload();
                return;
            }).fail(function (error) {
                alert(error.responseJSON.message);
                console.error(error.responseJSON.message);
            });
        });
    }
    
    $(document).ready(function () {
        setTimeout(function () {
            $(".signal-background").fadeOut('slow');
        }, 1000);
        
        init();
        
        if ($('.home-section-body').is(':visible')) {
            chart();
        }
        
        if ($('.contact-me-section-body').is(':visible')) {
            sendMail();
        }
    });

})(jQuery);
