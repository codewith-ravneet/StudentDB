function openForm() {
    document.getElementById("studentForm").style.display = "block";
}


const form = document.getElementById("studentForm");


// Check whether we are editing
const editIndex = localStorage.getItem("editIndex");


// If Edit button was clicked
if (editIndex !== null) {
    const students =JSON.parse(localStorage.getItem("students")) || [];
    const student = students[editIndex];

    document.getElementById("studentname").value =student.studentName;
    document.getElementById("fatherName").value =student.fathername;
    document.getElementById("dob").value =student.Dob;
    document.getElementById("address").value =student.address;
    document.getElementById("phoneNo").value =student.phoneNo;
}


// Save button
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const photo = document.getElementById("photo");
    const file = photo.files[0];

    let students =JSON.parse(localStorage.getItem("students")) || [];


    function saveStudent(photoData) {
        const student = {
            photo: photoData,
            studentName:document.getElementById("studentname").value,
            fathername:document.getElementById("fatherName").value,
            Dob:document.getElementById("dob").value,
            address:document.getElementById("address").value,phoneNo:document.getElementById("phoneNo").value
        };


        // EDIT
        if (editIndex !== null) {
            students[editIndex] = student;
            localStorage.removeItem("editIndex");
        }

        // ADD NEW
        else {
            students.push(student);
        }
        localStorage.setItem("students",JSON.stringify(students));
        window.location.href = "index.html";
    }


    // New photo selected
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
        saveStudent(reader.result);
    };

        reader.readAsDataURL(file);
    }


    // Editing but keeping old photo
    else if (editIndex !== null) {
        const oldPhoto =students[editIndex].photo;
        saveStudent(oldPhoto);
    }


    // New student must have photo
    else {
        alert("Please select a student photo.");
    }

});