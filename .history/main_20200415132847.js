/******************
 * YOUR CODE HERE *
 ******************/
const Grade = (assignmentParam, scoreParam) => {
  return {
    assignment: assignmentParam,
    score: scoreParam,
  };
};

const term = (hoursParam) => {
  return {
    hours: hoursParam,
    grades: [],

    // addGrades: function(assignmentParam, scoreParam) {
    //   this.grades = grade(assignmentParam, scoreParam);
    // }
  };
};

// term.addGrade('EPIC ASSIGMENT', '100')

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
