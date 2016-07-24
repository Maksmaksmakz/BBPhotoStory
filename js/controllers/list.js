(function(){

	angular
		.module("photoStory")
		.controller("listCtrl", ListController);

		function ListController($http){
            var controller = this;
            var url ='data/images.json';

            controller.activeImage = {};
            controller.changeActiveImage = changeActiveImage;


            function changeActiveImage(index){
                controller.activeImage = index;
                console.log(controller.imageTags);
            }

            handleImagesLoaded = function(data, status){
                controller.imageData = data;
                controller.imageTags = _.uniq(_.pluck(controller.imageData,'tag'));
            }

            fetch = function(){
                $http.get(url).success(handleImagesLoaded);
            }
            fetch();
		}
})();