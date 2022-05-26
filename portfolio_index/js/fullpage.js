$(document).ready(function() {
	$('#fullpage').fullpage({
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    autoScrolling:true,
    scrollHorizontally: true,
    anchors: ['firstPage', 'secondPage', 'lastPage'],
    navigation:true,
		navigationPosition: 'left',
    showActiveTooltip: false,
    menu: '#menu',
    autoScrolling: true,
    slidesNavigation: false,
    responsiveHeight: 330,
    scrollingSpeed: 700,
    controlArrows: false,
    autoScrolling: true,
		fitToSection: true
	});
});
