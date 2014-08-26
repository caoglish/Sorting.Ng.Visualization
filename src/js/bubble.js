// Code goes here

function ctrl($scope,$timeout){
  var defaultData=[54,16,37,28,29,24,21,11,5,10,4,3,8,1,25,12,20,30];

 $scope.reset=function(){
    $scope.data=defaultData.map(function(i){
      return i;
    });
    pointer=0;
    checklen=$scope.data.length;
	  $scope.alertMsg="";
   
  }
	 
  
  var sorting=function(){
    var data=$scope.data;
  
    
    if(data[pointer]>data[pointer+1])
    {
      var tmp=data[pointer]; 
      data[pointer]=data[pointer+1];
      data[pointer+1]=tmp;
    }
    
   pointer++;
    if( pointer>=checklen){
      checklen--;
      pointer=0;
    }
    
    if(checklen <=0){
     $scope.alertMsg="sorting done";
    }else{
      $timeout(sorting,100);
    }
   
   };
 
  $scope.start=function(){
    $timeout(sorting,100);
   
  }
		
		$scope.reset();
  
}

window.ctrl=ctrl;