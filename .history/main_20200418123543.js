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
// // console.log(epicCourse);
// const getAverage = function(nums) {
//   let sum = 0;

//   for(const num of nums) {
//     sum += num;
//   }

//   return sum / nums.length;
// };


const Student = (studentName, course, term = 1) => {
  return {
      name: studentName,
      course: course,
      term: term,
      courses: [],

      addCourse: function (course) {
        
        this.courses.push(Course(course));
      },

      getAverage: function (courseToFind, termToFind) {
        const course = this.courses.find((course) => course.name === courseToFind);
        const term = course.terms[termToFind];
        return term.grades.reduce((sum, grade) => sum + grade.score, 0) / term.grades.length;
        let sum = 0;

        for(const grade of term.grades) {
          sum += grade.score;
        }
        return sum / term.grades.length;

        // for (const course of this.courses) {
        //   if (course) {
        //     const term = course.terms[termToFind];
        //     let sum = 0;

        //     for (const grade of term.grades) {
        //       sum += grade.score;
        //     }
        //     return sum / term.grades.length;
        //   }
        // }
    },
    };
  };


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
