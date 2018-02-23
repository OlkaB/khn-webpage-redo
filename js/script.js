(function() {
    "use strict";

    /*
     * BIND EVENTS
     */
    /* attach toggle mobile menu */
    document.querySelector('.mobileMenuIcon').addEventListener('click', toggleMenu);


    /* toggle mobile menu class to roll up menu items */
    function toggleMenu() {
        var mobileMenuSel = document.querySelector('.wrapper.nav');
        if (mobileMenuSel) {
            mobileMenuSel.classList.toggle('open');
        }
    }
}());