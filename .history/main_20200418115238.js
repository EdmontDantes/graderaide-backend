/******************
 * YOUR CODE HERE *
 ******************/
const Grade = (assignmentParam, scoreParam) => {
  return {
    assignment: assignmentParam,
    score: scoreParam,
  };
};

const Term = (hoursParam) => {
  return {
    hours: hoursParam,
    grades: [],

    addGrade: function(assignmentParam, scoreParam) {
      const addedGrades = this.grades;
      addedGrades.push(Grade(assignmentParam, scoreParam));
      
    },
  };
};

// const termEpic = Term(300);
// termEpic.addGrade('Epic Assignment', '100');
// termEpic.addGrade('Epic Assignment2', '90');
// termEpic.addGrade('Epic Assignment3', '85');
// console.log(termEpic)

const Course = (nameOfACourse) => {
  return  {
    name: nameOfACourse,
    terms: [],

    addTerm: function (hours) {
      this.terms.push(Term(hours));
    }
  };
};
// const epicCourse = Course('WDI');
// epicCourse.addTerm(300);
// console.log(epicCourse);
const getAverage = function(nums) {
  let sum = 0;

  for(const num of nums) {
    sum += num;
  }

  return sum / nums.length;
}


const Student = (studentName, course, term = 1) => {
  return {
      name: studentName,
      course: course,
      term: term,
      courses: [],

      addCourse: function (nameOfCourse) {
        
        this.courses.push(Course(nameOfCourse));
      },

      getAverage: function (courseToFind = this.course, termToFind = this.term - 1) {
      
        let foundCourse = '';
        for (const course of this.courses) {
          if(course.name === courseToFind) {
            foundCourse = course;
            const term = course.terms[termToFind];

            let sum = 0;
            for (const grade of course.term.grades) {
              sum += grade.score;
            }
          }
        }
        return sum /term.grades.length;


        // let coursesLevel1Array = this.courses;
        // for(let i = 0; i < coursesLevel1Array.length; i++) {
        //   let objInArray = coursesLevel1Array[i];
        //   if(objInArray.name === course) {
            
        //     for(let array in objInArray.term) {
                
        //         }
        //   }
        // }
      },



//       1 string building
// 2 looping
// 3 filtering
// 4 mapping
// 5 copying objects so they aren't mutated
// 6 using callbacks (taking functions as parameters)
// 7 factory functions (functions that return objects
        // let getNestedObjectinsidearray = this.courses.map(function() {
        //   this.courses.
        // });
        // if (course === this.courses. && term === this.courses.terms[term - 1]) {
        //   const intermediateArray = this.courses.name.terms[terms];
        //   let totalSumOfArray = 0;
        //   for (let i = 0; i < intermediateArray.length ;i++) {
        //     totalSumOfArray += intermediateArray[i];
        //   }
        //   return totalSumOfArray /  intermediateArray.length;
        // }
    };
  };

// const student1 = Student('Edmont', 'SomeCourse')
// console.log(student1)
// student1.addCourse(epicCourse)
// console.log(student1)


// Term.addGrade('EPIC ASSIGMENT', '100')

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof Grade === 'undefined') {
  Grade = undefined;
}

if (typeof Term === 'undefined') {
  Term = undefined;
}

if (typeof Course === 'undefined') {
  Course = undefined;
}

if (typeof Student === 'undefined') {
  Student = undefined;
}


module.exports = {
  Grade,
  Term,
  Course,
  Student,
}
