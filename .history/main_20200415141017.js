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

const termEpic = Term(300)
ermEpic.addGrade('Epic Assignment', '100'))

const Course = (nameOfACourse) => {
  return  {
    name: nameOfACourse,
    terms: [],

  };
};

const Student = (studentName, course, term = 1) => {
  return {
    name: studentName,
    course: course,
    term: term,
    courses: [],
  };
}

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
