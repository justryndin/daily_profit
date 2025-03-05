var app = new Vue({
    el: '#app',
    data: {
        menu: {
            open: false
        },
        tab: {
            active: 1,
            top: 41
        }
    },
    methods: {
        toggleActive: function (e) {
            e.target.classList.toggle('active');
        },
        scrollTo: function (e) {
            var path = $(e.target).attr('href');
            $('body, html').animate({
                scrollTop: $(path).offset().top
            }, 600);
        },
        menuOpen: function (e) {
            this.menu.open = !this.menu.open
        },
        setTab: function (n, e) {
            var self = e.target;
            this.tab.active = n;
            this.tab.top = self.offsetTop;
        }
    }
});

$('.s6').slick({
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false
});
$(window).on('scroll', function () {
    app.menu.open = false;
});