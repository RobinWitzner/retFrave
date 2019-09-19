(function($) {
	'use strict';

	// Tilføjer plugin til fn så det kan bruges normalt
	$.fn.retFarve = function (options) {

		// Options
		// Sætter default options, hvis der ikke sendes noget med
		const defaultOptions = {
		colors: {
			bgcolor: 'red',
			txtcolor: 'blue'
		}
		};
		
		const opts = $.extend(true, {}, defaultOptions, options);

		// Går gennem alle elementer der matcher selector = idx=index, el=element
		return this.each(function (idx, el) {

			$(el).css('background-color', opts.colors.bgcolor);
			$(el).css('color', opts.colors.txtcolor);
			
		});
	};

})(jQuery);