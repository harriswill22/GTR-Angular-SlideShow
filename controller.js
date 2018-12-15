(function () {
  'use strict'
  angular.module('app').controller('GTRController', 
  GTRController);
  GTRController.inject =['$scope'];

  function GTRController($scope){
    const gtr = this; // refers to the function that "gtr" is in 

  gtr.photos = [
    // gtr images
    {
      img: "./images/download (2).jpeg"
    },
    {
      img: "./images/download.jpeg"
    },
    {
      img: "./images/2018-nissan-gt-r.jpg"
    },
    {
      img: "./images/skyline.jpeg"
    },
  
  ];

$scope.CurrentSlideIndex = 0; //Defines current slide at index of 0
$scope.PrevSlideIndex = gtr.photos.length -1; //Defines last slide as CurrentSlide decremented 1
$scope.NextSlideIndex= $scope.CurrentSlideIndex +1; //Defines next slide as CurrentSlide increment by 1

gtr.next = function() { //Created a function for the next button 
  if(gtr.photos.length -1 ===$scope.CurrentSlideIndex+1) {
    $scope.CurrentSlideIndex =$scope.CurrentSlideIndex +1; 
    $scope.PrevSlideIndex = $scope.CurrentSlideIndex -1;
    $scope.NextSlideIndex =0;
  }else if(gtr.photos.length -1 ==$scope.CurrentSlideIndex){
    $scope.CurrentSlideIndex = 0;
    $scope.PrevSlideIndex = gtr.photos.length -1;
    $scope.NextSlideIndex = $scope.CurrentSlideIndex +1;
  }else{
    $scope.CurrentSlideIndex = $scope.CurrentSlideIndex + 1;
    $scope.PrevSlideIndex = $scope.CurrentSlideIndex -1;
    $scope.NextSlideIndex = $scope.CurrentSlideIndex +1;
  }
}

gtr.prev = function() { //Created function for previous button
          
  if ($scope.CurrentSlideIndex - 1 === 0) {
      $scope.CurrentSlideIndex =$scope.CurrentSlideIndex -1;
      $scope.PrevSlideIndex =  gtr.photos.length -1;
      $scope.NextSlideIndex = $scope.CurrentSlideIndex +1;
    
  } else if ($scope.CurrentSlideIndex === 0){
      $scope.CurrentSlideIndex = gtr.photos.length -1;
      $scope.PrevSlideIndex =  $scope.CurrentSlideIndex - 1;
      $scope.NextSlideIndex = 0;
  } else {
      $scope.CurrentSlideIndex = $scope.CurrentSlideIndex -1;
      $scope.PrevSlideIndex =  $scope.CurrentSlideIndex - 1;
      $scope.NextSlideIndex = $scope.CurrentSlideIndex +1;
  }
}
  }

})(); //calls GTRController Function 
