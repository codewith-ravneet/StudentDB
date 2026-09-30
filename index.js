function openForm() {
    window.location.href = "student.html";
}


// EDIT
function editStudent(index) {
    localStorage.setItem("editIndex", index);
    window.location.href = "student.html";
}


// DELETE
function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    const confirmDelete = confirm("Are you sure you want to delete this student?");

    if (confirmDelete) {
        students.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(students));
        location.reload();
    }
}


// Get container
const container = document.getElementById("studentContainer");


// Get students
const students = JSON.parse(localStorage.getItem("students")) || [];


// Create cards
students.forEach(function (student, index) {

    const card = document.createElement("div");
    card.classList.add("student-card");
    card.innerHTML = `
        <img src="${student.photo}" class="student-photo">
        <h2>${student.studentName}</h2>
        <p><strong>Father Name:</strong>${student.fathername}</p>

        <p><strong>DOB:</strong>${student.Dob}</p>

        <p><strong>Phone:</strong>${student.phoneNo}</p>

        <p><strong>Address:</strong>${student.address}</p>

        <button id="btn1" onclick="editStudent(${index})">Edit</button>

        <button id="btn1" onclick="deleteStudent(${index})">Delete</button>
    `;

    container.appendChild(card);
});