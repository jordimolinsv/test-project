$(document).ready(function() {

	// Fullpage.js
	$('#fullpage').fullpage({
		scrollOverflow: true,
		verticalCentered: false,
		menu: '#menu',
		afterRender: function() {
			var activeSection = $('.section.active');
			isBlau(activeSection);
			isPortada(activeSection);
		},
		onLeave: function(index, nextIndex, direction) {
			var eq = nextIndex - 1;
			var activeSection = $('.section:eq(' + eq + ')');
			isBlau(activeSection);
			isPortada(activeSection);
		}
	});

	// Blau vs Blanc
	function isBlau(activeSection) {
		if( activeSection.hasClass('isblau') ) {
			$('body').addClass('blau');
		} else {
			$('body').removeClass('blau');
		}
	}

	// Hide Menu in Home
	function isPortada(activeSection) {
		var winWidth = $(window).width();
		if( winWidth >= 800 ) {
			if( activeSection.hasClass('portada') ) {
				$('.site-navigation').hide();
			} else {
				$('.site-navigation').show();
			}
		}
	}

	// Toggle Menu
	$('.nav-btn').click(function() {
		$('.site-navigation').fadeToggle(300);
	});
	$('.site-navigation a, .site-header h1 a').click(function() {
		var winWidth = $(window).width();
		if( winWidth <= 800 ) {
			$('.site-navigation').fadeOut(300);
		}
	});
});
