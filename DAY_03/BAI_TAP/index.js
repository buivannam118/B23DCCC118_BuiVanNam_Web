function getStudents() {
    const students = localStorage.getItem('students');
    return students ? JSON.parse(students) : [];
}

function saveStudents(students) {
    localStorage.setItem('students', JSON.stringify(students));
}

function addOrUpdateStudent() {
    const id = document.getElementById('studentId').value;
    const name = document.getElementById('studentName').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const hometown = document.getElementById('hometown').value;

    if (!id || !name || !dob || !hometown) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    let students = getStudents();
    const existingIndex = students.findIndex(student => student.id === id);

    const student = { id, name, gender, dob, hometown };

    if (existingIndex >= 0) {
        students[existingIndex] = student;
    } else {
        students.push(student);
    }

    saveStudents(students);
    displayStudents();
    resetForm();
}

function displayStudents() {
    const students = getStudents();
    const tableBody = document.getElementById('student-table-body');
    tableBody.innerHTML = '';

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.dob}</td>
            <td>${student.hometown}</td>
            <td>
                <div class="action-buttons">
                    <button class="edit-btn" onclick="editStudent('${student.id}')">Sửa</button>
                    <button class="delete-btn" onclick="deleteStudent('${student.id}')">Xoá</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteStudent(id) {
    let students = getStudents();
    students = students.filter(student => student.id !== id);
    saveStudents(students);
    displayStudents();
}

function editStudent(id) {
    const students = getStudents();
    const student = students.find(student => student.id === id);
    if (student) {
        document.getElementById('studentId').value = student.id;
        document.getElementById('studentName').value = student.name;
        document.getElementById('gender').value = student.gender;
        document.getElementById('dob').value = student.dob;
        document.getElementById('hometown').value = student.hometown;
    }
}

function resetForm() {
    document.getElementById('studentId').value = '';
    document.getElementById('studentName').value = '';
    document.getElementById('gender').value = 'Nam';
    document.getElementById('dob').value = '';
    document.getElementById('hometown').value = '';
}

document.getElementById('student-form').addEventListener('submit', function (e) {
    e.preventDefault();
    addOrUpdateStudent();
});

window.onload = displayStudents;
