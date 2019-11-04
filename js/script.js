document.addEventListener("DOMContentLoaded", function() {
    function toggleFooter() {
        var togglePannel = document.querySelector(".want-cheaper-toggle");
        var toggleBody = document.querySelector(".want-cheaper-toggle-body");

        togglePannel.addEventListener("click", function() {
            this.classList.toggle("active");
            toggleBody.classList.toggle("active");
        })
    }

    toggleFooter();

    function smoothScroll() {
        var $page = $('html, body');
        
        $(".scroll-link").on("click", function() {
            $page.animate({
                scrollTop: $(this.getAttribute("href")).offset().top
            }, 400);

            return false;
        })
    }

    smoothScroll();
})