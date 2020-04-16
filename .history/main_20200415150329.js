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
termEpic = 
// const termEpic = Term(300)
// termEpic.addGrade('Epic Assignment', '100')
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

const Student = (studentName, course, term = 1) => {
  return {
      name: studentName,
      course: course,
      term: term,
      courses: [],

      addCourse: function (nameOfCourse) {
        
        this.courses.push(Course(nameOfCourse));
      },

      getAverage: function (course, term) {

        if (course === this.courses.name && term === this.course.term) {
          const intermediateArray = this.courses.name.term;
          let totalSumOfArray = 0;
          for (let i = 0; i < intermediateArray.length ;i++) {
            totalSumOfArray += intermediateArray[i];
          }
          return totalSumOfArray /  intermediateArray.length;

        }
    },
  };
};



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
