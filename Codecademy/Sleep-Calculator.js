console.log('Sleep-Calculator')

// userChoice = prompt('Do you like pie?')

const getSleepHours = (day) => {
    switch(day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 6;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 9;
        break;
      case 'sunday':
        return 9;
        break;
    }
  }
  // console.log(getSleepHours('thursday'))
  
  const getActualSleepHours = () => 
  getSleepHours('monday') 
  + getSleepHours('tuesday') 
  + getSleepHours('wednesday') 
  + getSleepHours('thursday') 
  + getSleepHours('friday') 
  + getSleepHours('saturday') 
  + getSleepHours('sunday')
    // getSleepHours('monday');
    // getSleepHours('tuesday');
    // getSleepHours('wednesday');
    // getSleepHours('thursday');
    // getSleepHours('friday');
    // getSleepHours('saturday');
    // getSleepHours('sunday');
    // let sleepTotal = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    
    // return sleepTotal;
  // console.log(getActualSleepHours())
  const getIdealSleepHours = () => {
    let idealHours = 8.5;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours) {
      console.log('User slept like a baby.');
    } else if(actualSleepHours > idealSleepHours){
      console.log('User slept too much. The user is over ' + (actualSleepHours - idealSleepHours) + ' hours.');
    } else {
      console.log('User is sleep deprived. The user needs ' + (idealSleepHours - actualSleepHours) + ' hours.');
    }
  }
  calculateSleepDebt()
  
  