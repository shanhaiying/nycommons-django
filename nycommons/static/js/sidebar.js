//
// sidebar.js
//
// Sidebar for map
//
var flight = require('flightjs');

var sidebarHeaderContent = flight.component(function () {
    this.attributes({
        closeButton: '.close',
        name: null
    });

    this.sidebarHeaderContentShown = function (event, data) {
        if (this.attr.name !== data.name) {
            this.$node.hide();
        }
        else {
            this.$node.show();
        }
    };

    this.sidebarHeaderContentHidden = function (event) {
        this.$node.hide();
        $(document).trigger('sidebarHeaderContentHidden');
    };

    this.after('initialize', function () {
        this.on(document, 'sidebarHeaderContentShown', this.sidebarHeaderContentShown);
        this.on(this.select('closeButton'), 'click', this.sidebarHeaderContentHidden);
    });
});

var legend = flight.component(function () {
    this.hide = function (event) {
        this.$node.hide();
    };

    this.show = function (event) {
        this.$node.show();
    };

    this.after('initialize', function () {
        this.on(document, 'sidebarHeaderContentShown', this.hide);
        this.on(document, 'sidebarHeaderContentHidden', this.show);
    });
});

var defaultSidebarContent = flight.component(function () {
    this.hide = function (event) {
        this.$node.hide();
    };

    this.show = function (event) {
        this.$node.show();
    };

    this.after('initialize', function () {
        this.on(document, 'sidebarHeaderContentShown', this.hide);
        this.on(document, 'sidebarHeaderContentHidden', this.show);
    });
});

var sidebarHeaderButton = flight.component(function () {
    this.click = function (event, name) {
        $(document).trigger('sidebarHeaderContentShown', {
            name: this.attr.name
        });
        return false;
    };

    this.after('initialize', function () {
        this.on('click', this.click);
    });
});

$(document).ready(function () {
    sidebarHeaderButton.attachTo('.filter-button', { name: 'filter' });
    sidebarHeaderContent.attachTo('.map-header-content-filters', { name: 'filter' });

    sidebarHeaderButton.attachTo('.details-button', { name: 'details' });
    sidebarHeaderContent.attachTo('.map-header-content-details', { name: 'details' });

    legend.attachTo('.map-legend');
    defaultSidebarContent.attachTo('.map-header-content-default');
});
