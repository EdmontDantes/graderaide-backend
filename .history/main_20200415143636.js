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
      
      if (course === this.course && term === this.term) {
        term = term - 1;
        // for (let i = 0; ;i++)
      }
      let averageCourseAndTerm = this.courses;
      this.course
      this.term

    }
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
