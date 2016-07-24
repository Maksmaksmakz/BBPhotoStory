(function(){

	angular
		.module("photoStory")
		.controller("listCtrl", ListController);

		function ListController($http){
            var vm = this;
            var url ='data/images.json';

            vm.activeImage = {};
            vm.changeActiveImage = changeActiveImage;

            function changeActiveImage(index){
                vm.activeImage = index;
                console.log(index.image_path);
            }

            handleImagesLoaded = function(data, status){
                vm.data = data;
            }

            fetch = function(){
                $http.get(url).success(handleImagesLoaded);
            }

            fetch();
		}

})();