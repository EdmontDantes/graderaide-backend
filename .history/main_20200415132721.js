/******************
 * YOUR CODE HERE *
 ******************/
const grade = (assignmentParam, scoreParam) => {
  return {
    assignment: assignmentParam,
    score: scoreParam,
  };
};

const germ = (hoursParam) => {
  return {
    hours: hoursParam,
    grades: [],

    addGrade: function(assignmentParam, scoreParam) {
      this.grades = Grade(assignmentParam, scoreParam);
    }
  };
};

Term.addGrade('EPIC ASSIGMENT', '100')

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
