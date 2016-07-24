(function(){
	app = angular
		.module("photoStory", []);

// mytooltip directive makes tooltips available in angular view
app.directive('mytooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){ //after compiling the link function registers listeners to the DOM element

            $(element).hover(
        		function(){
            		$(this).find('.caption').slideDown(190);
        		},
        		function(){
            		$(this).find('.caption').fadeOut(50)
       			}
			);
        }
    };
});
})();
