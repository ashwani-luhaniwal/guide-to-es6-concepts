import { error } from "util";
// import * as service from './employee-service';
import { employees } from './employee-service-mock';

service.findAll()
    .then(employees => {
        let html = "";
        employees.forEach(employee => {
            html += `
                <div>
                    <img src='${employee.picture}' />
                    <div>
                        ${employee.firstName} ${employee.lastName}
                        <p>${employee.phone}</p>
                    </div>
                </div>`;
        });
        document.getElementById("list").innerHTML = html;
    })
    .catch(error => {
        console.log(error);
    });