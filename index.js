function openForm() {
    window.location.href = "student.html";
}
const container = document.getElementById("studentContainer");
const students = JSON.parse(localStorage.getItem("students")) || [];

students.forEach(function(student) {

    const card = document.createElement("div");

    card.classList.add("student-card");

    card.innerHTML = `
        <img src="${student.photo}" alt="Student Photo">
        <h2>${student.studentName}</h2>
        <p><strong>Student ID:</strong> ${student.studentId}</p>
        <p><strong>Roll No:</strong> ${student.rollno}</p>
        <p><strong>Class:</strong> ${student.class}</p>
        <p><strong>Stream:</strong> ${student.stream}</p>
         <p><strong>DOB:</strong> ${student.Dob}</p>
        <p><strong>Father:</strong> ${student.fathername}</p>
        <p><strong>Mother:</strong> ${student.mothername}</p>
        <p><strong>Phone:</strong> ${student.phoneNo}</p>
        <p><strong>Address:</strong> ${student.address}</p>
        <p><strong>Aadhaar:</strong> ${student.AadharNumber}</p>
        <p><strong>Bank Account:</strong> ${student.accountNumber}</p>
        <p><strong>IFSC:</strong> ${student.ifsc}</p>
      
    `;

    container.appendChild(card);
});