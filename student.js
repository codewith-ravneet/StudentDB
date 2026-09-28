function openForm() {
    document.getElementById("studentForm").style.display = "block";
}


const form = document.getElementById("studentForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const photo = document.getElementById("photo");
    const file = photo.files[0];

    const reader = new FileReader();
    reader.onload = function () {

        const student = {

            photo: reader.result,
            studentId: document.getElementById("id").value,
            rollno: document.getElementById("rollno").value,
            studentName: document.getElementById("studentname").value,
            class: document.getElementById("class").value,
            stream: document.getElementById("stream").value,
            fathername: document.getElementById("fatherName").value,
            mothername: document.getElementById("mothername").value,
            address: document.getElementById("address").value,
            phoneNo: document.getElementById("phoneNo").value,
            Dob: document.getElementById("dob").value,
            AadharNumber : document.getElementById("aadhar").value,
            accountNumber : document.getElementById("accountNumber").value,
            ifsc: document.getElementById("ifsc").value
        };


let students = JSON.parse(localStorage.getItem("students")) || [];

    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    
    window.location.href = "index.html";
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        alert("Please select a student photo.");
    }
});
