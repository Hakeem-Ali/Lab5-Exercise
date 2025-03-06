let bob = {
    fname: "bob",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1603',
        grades: [ 89, 34, 67 ]
      },
      {
        course: 'INFO 1601',
        grades: [ 89, 34, 67 ]
      }
    ]
  };
  
  let sally = {
    fname: "sally",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1601',
        grades: [ 100, 89, 79 ]
      }
    ]
  };
  
  let paul = {
    fname: "paul",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1600',
        grades: [ 89, 34, 67 ]
      }
    ]
  };
  
  
  const students = [bob, sally, paul];

  function getAverageGrade(student, course){
    let sum=0;
    let count=0;
    
    for(let i=0; i<student.transcript.length; i++){
        if(student.transcript[i].course===course){
            for(let j=0; j<student.transcript[i].grades.length; j++){
                sum= sum+student.transcript[i].grades[j];
                count++;
            }

            break;
        }
    }

    if(count>0){
        let avg=sum/count;
        return avg;
    }
    else{
        return -1;
    }
  }

  function getAssignmentMark(student, course, num){
    for(let i=0; i<student.transcript.length; i++){
        if(student.transcript[i].course===course){
            return student.transcript[i].grades[num];
        }
    }
    
    return -1;
  }

  function averageAssessment(students, courseName, assignment){
    let sum1=0;
    let count1=0;
    for(let i=0; i<students.length; i++){
        for(let j=0; j<students[i].transcript.length; j++){
            if(students[i].transcript[j].course===courseName){
                sum1=sum1+students[i].transcript[j].grades[assignment];
                count1++;
            }
        }
    }

    if(count1>0){
        let avg1=sum1/count1;
        return avg1;
    }
    else{
        return -1;
    }
  }