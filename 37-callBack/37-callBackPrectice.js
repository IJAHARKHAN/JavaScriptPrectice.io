console.log("This is tutorial 37");

const students = [
    { name: 'Moon Khan', subject: 'Math' },
    { name: 'Sameer khan', subject: 'English' }
]

/// how can get data with call back fuction
function getStudentDetaials() {
    setTimeout(function() {
        let str = '';
        students.forEach(function(studentDetail) {
            console.log(studentDetail);
            str += `<li>${studentDetail.name} , ${studentDetail.subject}</li>`
        });
        document.getElementById('students').innerHTML = str;
    }, 5000);
}

getStudentDetaials();