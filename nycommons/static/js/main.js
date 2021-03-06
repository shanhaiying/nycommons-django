//
// main.js
//
// Scripts that should run on every page.
//

require('bootstrap_dropdown');
require('bootstrap_transition');
require('bootstrap_collapse');
require('fancybox')($);
var header = require('./components/header');
require('./maplinks');

var pathwayRecentActivity = require('./components/activities').pathwayRecentActivity;

/*
 * Global form-related scripts
 */
$(document).ready(function () {
    /*
     * Disable submit buttons on forms once they have been submitted once.
     */
    $('form').submit(function () {
        $(this).find('input[type="submit"]').attr('disabled', 'disabled');
    });

    /*
     * Collapse the collapsible sections
     */
    // Slide up those sections not initially expanded
    $('.collapsible-section:not(.is-expanded) .collapsible-section-text').slideUp();

    // Prepare headers for clicking
    $('.collapsible-section-header').click(function () {
        var $section = $(this).parent(),
            $sectionText = $section.find('.collapsible-section-text');
        $section.toggleClass('is-expanded');
        $sectionText.slideToggle();
    });

    /*
     * Fancy the fancyboxes
     */
    $('.fancybox').fancybox({
        beforeShow: function () {
            var $link = this.element,
                $img = $link.find('img'),
                alt = $img.attr('alt'),
                addedBy = $link.data('added-by'),
                description = $link.data('description');

            this.inner.find('img').attr('alt', alt);
            if (alt && addedBy) {
                this.title = alt + ' by ' + addedBy + '<p>' + description + '</p>';
            }
            else if (alt) {
                this.title = alt;
            }
            else {
                this.title = null;
            }
        }
    });

    /*
     * Allow dropdowns on smallest screens (xs in Bootstrap)
     */
    if ($(window).width() < 767) {
        $('.mainmenu-item > a').click(function () {
            // If submenu already visible, follow link
            if ($(this).hasClass('open')) {
                return true;
            }

            // Else show submenu, don't follow link
            $(this).toggleClass('open');
            return false;
        });
    }

    /*
     * Make hovered menus work similarly on touch devices
     */
    function hideSubmenu (e) {
        if (!$('.mainmenu-item-parent').is(e.target)) {
            e.stopPropagation();
            $(document).off('click', hideSubmenu);
            $('.nav .mainmenu-item').removeClass('open');
        }
    }

    if ($('.navbar').length) {
        $('.nav .mainmenu-item').click(function () {
            $('.mainmenu-item').removeClass('open');
            $(this).addClass('open');
            $(document).on('click', hideSubmenu);
        });
    }

    $('.menu-button').click(function () {
        $('.menu-expanded').toggle();
    });

    pathwayRecentActivity.attachTo('.pathway-recent-activities-list');
    header.header.attachTo('header');
});


/*
 * Page-specific modules
 */
require('./pages/addorganizer.js');
require('./pages/map.js');
require('./pages/lotdetail.js');
