(function(){
	app = angular
		.module("photoStory", []);

		// ToolTipApp is the ng-app application in your web app
app.directive('mytooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){

            $(element).hover(
        		function(){
            		$(this).find('.caption').slideDown(190); //.fadeIn(250)
        		},
        		function(){
            		$(this).find('.caption').fadeOut(50)
       			},

       			$(element).find('.btn').click(function (evt) {
    				evt.stopPropagation();


				})
    		);
        }
    };
});
})();
