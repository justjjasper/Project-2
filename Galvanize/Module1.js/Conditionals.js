// if(CONDITION) {
//     return condition;
// }



// Use .indexOf to find if something in list
//  List.indexOf(findItem) > -1   <-- this means item is present in list
function findAgent(agentList, agentToSearchFor) {
    // if agentToSearchFor is present within agentList
      // return '{agentToSearchFor} is present within Agent list'
      if (agentList.indexOf(agentToSearchFor) > -1){
          return `${agentToSearchFor} is present within Agent list`;
      }
  }
  
  var result1 = findAgent(['001', '005', '007', '009'], '007');
  console.log('should log "007 is present within Agent list":', result1);
  
  var result2 = findAgent(['tiny', 'teeny', 'eeny', 'meany'], 'teeny');
  console.log('should log "teeny is present within Agent list":', result2);
  
  var result3 = findAgent(['red', 'blue', 'green'], 'orange');
  console.log('Should log undefined, because function returned nothing:', result3);