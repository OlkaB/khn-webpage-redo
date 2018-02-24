(function() {
    "use strict";

    /*
     * BIND EVENTS
     */
    /* bind view: panels, sport subpages and menu pages*/
    bindEventToSelectors('.theme-panel, .closeSubpage', manageView);

    /* bind toggle of mobile menu to collapse/expand menu items */
    document.querySelector('.mobileMenuIcon').addEventListener('click', toggleClassOnSelectors.bind(null, '.wrapper.nav', 'open'));


    /*
     * DOM CACHE
     */
    var themePanelsAndMain = document.querySelectorAll('.theme-panel, main');
    var main = document.querySelector('main');
    var subPages = document.querySelectorAll('.subpage');
    var footer = document.querySelector('footer');


    /*
     * UTILS
     */
    /* bind function as event to multiply selector passed via string like for querySelectorAll */
    function bindEventToSelectors(selectorsString, callback) {
        [].forEach.call(document.querySelectorAll(selectorsString), function(selector) {
            selector.addEventListener('click', callback);
        });
    }


    /*
    * FUNCTIONALITIES
    * /

    /* toggle class on selectors */
    function toggleClassOnSelectors(selectorsToToggle, classToToggle) {
        var selectors = document.querySelectorAll(selectorsToToggle);
        if (selectors.length > 0) {
            [].forEach.call(selectors, function(selector) {
                selector.classList.toggle(classToToggle);
            });
        }
    }

    function manageView() {
        /* manage subpages visibility regarding if panels are collapsed */
        console.log('manageViewByPanels_event: ', event.target.classList);
        if (main.classList.contains('collapsed')) {
            togglePanles(false);
            toggleSubpages(true);
            if (innerWidth < 900 && footer.classList.contains('bottomPosition')) {
                footer.classList.remove('bottomPosition');
            }
        } else {
            if (event.target.classList.contains('theme-panel') || event.target.classList.contains('themePanelText')) {
                togglePanles(true, event.target.classList[1]);
                var subPageToShow = event.target.classList[1] === "personalTraining" ? "personalTraining" : "underConstruction";
                toggleSubpages(true, subPageToShow);
            } else if (event.target.classList.contains('closeSubpage')) {
                toggleSubpages(true);
            }
            if (innerWidth < 900 && !footer.classList.contains('bottomPosition')) {
                footer.classList.add('bottomPosition');
            }
        }
    }

    /* togglePanles(true) --> collapse;   togglePanles(false) --> expand */
    function togglePanles(shouldCollapseBool, leaveExpandedPanel) {
        [].forEach.call(themePanelsAndMain, function(selector) {
            if (selector.classList.contains(leaveExpandedPanel)) {
                return;
            }
            if (selector.classList.contains('collapsed') && !shouldCollapseBool) {
                selector.classList.remove('collapsed');
                return;
            }
            if (!selector.classList.contains('collapsed') && shouldCollapseBool) {
                selector.classList.add('collapsed');
                return;
            }
        });
    }



    /* toggleSubpages(true) --> hide;   toggleSubpages(false) --> reveal */
    function toggleSubpages(shouldHideBool, leaveVisiblePage) {
        [].forEach.call(subPages, function(selector) {
            if (selector.classList.contains(leaveVisiblePage) && selector.classList.contains('hidden')) {
                selector.classList.remove('hidden');
                return;
            }
            if (selector.classList.contains('hidden') && !shouldHideBool) {
                selector.classList.remove('hidden');
                return;
            }
            if (!selector.classList.contains('hidden') && shouldHideBool) {
                selector.classList.add('hidden');
                return;
            }
        });
    }



}());