const employees = [
    {
        id: 101,
        name: "Sneha",
        age: 22,
        department: "QA",
        designation: "Engineer",
        salary: 25000
    },
    {
        id: 102,
        name: "Shahala",
        age: 23,
        department: "IT",
        designation: "Developer",
        salary: 30000
    },
    {
        id: 103,
        name: "Sanju",
        age: 25,
        department: "HR",
        designation: "HR Manager",
        salary: 40000
    },
    {
        id: 104,
        name: "Fasin",
        age: 24,
        department: "Sales",
        designation: "Sales Executive",
        salary: 35000
    }
];

function searchEmployee() {

    const employeeId = document.getElementById("employeeId").value;
    const message = document.getElementById("message");
    const employeeDetails = document.getElementById("employeeDetails");

    const employee = employees.find(
        employee => employee.id == employeeId
    );

    if (employee) {

        message.textContent = "";

        employeeDetails.innerHTML = `
            <h2>Employee Details</h2>
            <p><strong>ID:</strong> ${employee.id}</p>
            <p><strong>Name:</strong> ${employee.name}</p>
            <p><strong>Age:</strong> ${employee.age}</p>
            <p><strong>Department:</strong> ${employee.department}</p>
            <p><strong>Designation:</strong> ${employee.designation}</p>
            <p><strong>Salary:</strong> ${employee.salary}</p>
        `;

    } else {

        employeeDetails.innerHTML = "";
        message.textContent ="No employee found with this ID.";
    }
}

function showFullDetails(employeeId) {

    const employeeDetails = document.getElementById("employeeDetails");

    const employee = employees.find(
        employee => employee.id == employeeId
    );

    if (employee) {

        employeeDetails.innerHTML = `
            <h2>Full Employee Details</h2>

            <p><strong>ID:</strong> ${employee.id}</p>
            <p><strong>Name:</strong> ${employee.name}</p>
            <p><strong>Age:</strong> ${employee.age}</p>
            <p><strong>Department:</strong> ${employee.department}</p>
            <p><strong>Designation:</strong> ${employee.designation}</p>
            <p><strong>Salary:</strong> ₹${employee.salary}</p>
        `;
    }
}


function clearSearch() {

    document.getElementById("employeeId").value = "";

    document.getElementById("message").textContent = "";

    document.getElementById("employeeDetails").innerHTML = "";
}

function viewAllEmployees() {

    const employeeDetails = document.getElementById("employeeDetails");
    const message = document.getElementById("message");

    message.textContent = "";

    employeeDetails.innerHTML = `
        <h2>All Employees</h2>

        ${employees.map(employee => `
            <div>
                <p><strong>ID:</strong> ${employee.id}</p>
                <p><strong>Name:</strong> ${employee.name}</p>
                <p><strong>Department:</strong> ${employee.department}</p>
                <p><strong>Designation:</strong> ${employee.designation}</p>
                <hr>
            </div>
        `).join("")}
    `;
}