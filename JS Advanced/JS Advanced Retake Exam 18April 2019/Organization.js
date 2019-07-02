class Organization {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;

        this.employees = [];

        this.departments = {
            marketing: this.budget * 0.4,
            finance: this.budget * 0.25,
            production: this.budget * 0.35
        };

    }

    get departmentsBudget(){
        return {
            marketing: this.departments['marketing'],
            finance: this.departments['finance'],
            production: this.departments['production']
        };
    }

    add(employeeName, department , salary){
        if (this.departmentsBudget[department] >= salary){
            const employee = {
                employeeName,
                department,
                salary
            };

            this.employees.push(employee);
            this.departments[department] -= salary;
            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
        }

        return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this.departmentsBudget[department]}.`;
    }

    employeeExists(employeeName){
        let employee = this.employees.findIndex(x => x.employeeName === employeeName);

        if (employee === -1){
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }

        return `Mr./Mrs. ${employeeName} is part of the ${this.employees[employee].department} department.`

    }

    leaveOrganization(employeeName){
        let employee = this.employees.findIndex(x => x.employeeName === employeeName);

        if (employee === -1){
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }

        const salary = this.employees[employee].salary;
        const department = this.employees[employee].department;
        this.employees.splice(employee, 1);
        this.departments[department] += salary;

        return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
    }

    status(){
        let result = [];

        result.push(`${this.name.toUpperCase()} DEPARTMENTS`);

        for (let department in this.departments){
            let depInfo = [];

            depInfo.push(department.charAt(0).toUpperCase() + department.slice(1));

            const empls = this.employees
                .filter(d => d.department === department)
                .sort((a,b) => b.salary - a.salary)
                .map(e => e.employeeName);

            empls.push(`Employees: ${empls.length}: ${empls.join(', ')}`);
            empls.push(`Remaining Budget: ${this.departments[department]}`);
            result.push(empls.join(' | '));
        }

        return result.join('\n');
    }

}