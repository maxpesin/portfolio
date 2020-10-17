//-- TYPED.JS ------------------------------
//------------------------------------------
document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.typed_hero_msg', {
        strings: ["Portfolio | Max Pesin"],
        typeSpeed: 60
      });
  });

$('.btn').hover(
    function() {
        var $this = $(this); // caching $(this)
        $this.data('initialText', $this.text());
        $this.text('WebOrbit');
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialText'));
    }
);

//-- CAROUSEL FUNCTIONALITY ----------------
//------------------------------------------
$(document).ready(function(){
    $('.carousel-container').slick({
        /*setting-name: setting-value*/
    });

    $(window).resize(function() {
        $('.carousel-container').slick('resize');
    });

    $(window).on('orientationchange', function() {
        $('.carousel-container').slick('resize');
    });

//-- PORTFOLIO ON/OFF PROGRAM --------------
//------------------------------------------
    var currentPortfolio = document.getElementsByClassName('js--carousel-ani');

    var indicatorPrePortfolio = document.getElementsByClassName('js--carousel-ani');
    var prePortfolio = 'Pre-Portfol'

    var indicatorOnPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeInUp');
    var onPortfolio = 'Portfolio Up'

    var indicatorOffPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeOutDown');
    var offPortfolio = 'Portfolio Off'

    function mouseWheel(e) {
        if (currentPortfolio === indicatorPrePortfolio && e.deltaY > 0) {
            $('.js--pre-carousel').addClass('animated fadeOutDown');
            $('.js--carousel').addClass('animated fadeInUp');
            $('.js--footer').addClass('animated fadeIn');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeInUp');
        }
        else if (currentPortfolio === indicatorOnPortfolio && e.deltaY < 0) {
            $('.js--carousel').addClass('fadeOutDown');
            $('.js--footer').removeClass('fadeIn');
            $('.js--footer').addClass('fadeOut');
            $('.js--pre-carousel').removeClass('fadeOutDown');
            $('.js--pre-carousel').addClass('fadeInUp');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeOutDown');
        }
        else if (currentPortfolio === indicatorOffPortfolio && e.deltaY > 0) {
            $('.js--carousel').removeClass('animated fadeOutDown fadeInUp');
            $('.js--footer').removeClass('animated fadeOut fadeIn');
            $('.js--pre-carousel').removeClass('fadeInUp');
            $('.js--pre-carousel').addClass('fadeOutDown');
            $('.js--carousel').addClass('animated fadeInUp');
            $('.js--footer').addClass('animated fadeIn');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeInUp');
        }
}

    function keyboardArrowKeys(e) {
        if (currentPortfolio === indicatorPrePortfolio && e.keyCode === 40) {
            $('.js--pre-carousel').addClass('animated fadeOutDown');
            $('.js--carousel').addClass('animated fadeInUp');
            $('.js--footer').addClass('animated fadeIn');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeInUp');
    }
            else if (currentPortfolio === indicatorOnPortfolio && e.keyCode === 38) {
            $('.js--carousel').addClass('fadeOutDown');
            $('.js--footer').removeClass('fadeIn');
            $('.js--footer').addClass('fadeOut');
            $('.js--pre-carousel').removeClass('fadeOutDown');
            $('.js--pre-carousel').addClass('fadeInUp');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeOutDown');
        }
        else if (currentPortfolio === indicatorOffPortfolio && e.keyCode === 40) {
            $('.js--carousel').removeClass('animated fadeOutDown fadeInUp');
            $('.js--footer').removeClass('animated fadeOut fadeIn');
            $('.js--pre-carousel').removeClass('fadeInUp');
            $('.js--pre-carousel').addClass('fadeOutDown');
            $('.js--carousel').addClass('animated fadeInUp');
            $('.js--footer').addClass('animated fadeIn');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeInUp');
        }
}

    function keyboardGamerKeys(e) {
        if (currentPortfolio === indicatorPrePortfolio && e.keyCode === 83) {
            $('.js--pre-carousel').addClass('animated fadeOutDown');
            $('.js--carousel').addClass('animated fadeInUp');
            $('.js--footer').addClass('animated fadeIn');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeInUp');
    }
            else if (currentPortfolio === indicatorOnPortfolio && e.keyCode === 87) {
            $('.js--carousel').addClass('fadeOutDown');
            $('.js--footer').removeClass('fadeIn');
            $('.js--footer').addClass('fadeOut');
            $('.js--pre-carousel').removeClass('fadeOutDown');
            $('.js--pre-carousel').addClass('fadeInUp');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeOutDown');
        }
        else if (currentPortfolio === indicatorOffPortfolio && e.keyCode === 83) {
            $('.js--carousel').removeClass('animated fadeOutDown fadeInUp');
            $('.js--footer').removeClass('animated fadeOut fadeIn');
            $('.js--pre-carousel').removeClass('fadeInUp');
            $('.js--pre-carousel').addClass('fadeOutDown');
            $('.js--carousel').addClass('animated fadeInUp');
            $('.js--footer').addClass('animated fadeIn');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeInUp');
        }
}

    function keyboardAccountantKeys(e) {
        if (currentPortfolio === indicatorPrePortfolio && e.keyCode === 98) {
            $('.js--pre-carousel').addClass('animated fadeOutDown');
            $('.js--carousel').addClass('animated fadeInUp');
            $('.js--footer').addClass('animated fadeIn');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeInUp');
    }
            else if (currentPortfolio === indicatorOnPortfolio && e.keyCode === 104) {
            $('.js--carousel').addClass('fadeOutDown');
            $('.js--footer').removeClass('fadeIn');
            $('.js--footer').addClass('fadeOut');
            $('.js--pre-carousel').removeClass('fadeOutDown');
            $('.js--pre-carousel').addClass('fadeInUp');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeOutDown');
        }
        else if (currentPortfolio === indicatorOffPortfolio && e.keyCode === 98) {
            $('.js--carousel').removeClass('animated fadeOutDown fadeInUp');
            $('.js--footer').removeClass('animated fadeOut fadeIn');
            $('.js--pre-carousel').removeClass('fadeInUp');
            $('.js--pre-carousel').addClass('fadeOutDown');
            $('.js--carousel').addClass('animated fadeInUp');
            $('.js--footer').addClass('animated fadeIn');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeInUp');
        }
}

    function touchSwipeStart(e) {
        window.touchSwipeStartY = e.changedTouches[0].pageY;
    }
    function touchSwipeEnd(e) {
        window.touchSwipeEndY = e.changedTouches[0].pageY;
    }
    function touchSwipe() {
        var touchLength = touchSwipeEndY - touchSwipeStartY;
        if (currentPortfolio === indicatorPrePortfolio && touchSwipeStartY > touchSwipeEndY) {
            $('.js--pre-carousel').addClass('animated fadeOutDown');
            $('.js--carousel').addClass('animated fadeInUp');
            $('.js--footer').addClass('animated fadeIn');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeInUp');
        }
            else if (currentPortfolio === indicatorOnPortfolio && touchSwipeStartY < touchSwipeEndY && touchLength > 75) {
            $('.js--carousel').addClass('fadeOutDown');
            $('.js--footer').removeClass('fadeIn');
            $('.js--footer').addClass('fadeOut');
            $('.js--pre-carousel').removeClass('fadeOutDown');
            $('.js--pre-carousel').addClass('fadeInUp');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeOutDown');
        }
        else if (currentPortfolio === indicatorOffPortfolio && touchSwipeStartY > touchSwipeEndY) {
            $('.js--carousel').removeClass('animated fadeOutDown fadeInUp');
            $('.js--footer').removeClass('animated fadeOut fadeIn');
            $('.js--pre-carousel').removeClass('fadeInUp');
            $('.js--pre-carousel').addClass('fadeOutDown');
            $('.js--carousel').addClass('animated fadeInUp');
            $('.js--footer').addClass('animated fadeIn');
            currentPortfolio = document.getElementsByClassName('js--carousel-ani animated fadeInUp');
        }
}
/*
    function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };*/

    window.addEventListener('wheel', mouseWheel);
    window.addEventListener('keydown', keyboardArrowKeys);
    window.addEventListener('keydown', keyboardGamerKeys);
    window.addEventListener('keydown', keyboardAccountantKeys);
    window.addEventListener('touchstart', touchSwipeStart);
    window.addEventListener('touchend', touchSwipeEnd);
    window.addEventListener('touchend', touchSwipe);

//-- SCRIPT END ----------------------------
//------------------------------------------
});
