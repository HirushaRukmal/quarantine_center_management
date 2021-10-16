/*
    Created by - Isuru Pathum Herath
    On - 22/08/2021
    Name - EMP Salary CRUD
 */

const EmployeeSalary = require('../../models/HRM/Employee-Salary');

/*
Name - Add Salary
Date - 22/08/2021
 */
exports.create = (req, res) => {

    const { EmployeeID, Grade, PerDay, AdditionalHour } = req.body;

    switch (true) {
        case !EmployeeID:
            return res.status(400).json({
                error: 'Employee ID is reqired'
            });
        case !Grade:
            return res.status(400).json({
                error: 'Grade is required'
            });
        case !PerDay:
            return res.status(400).json({
                error: 'Salary per day is required'
            });
    }

    EmployeeSalary.create({ EmployeeID, Grade, PerDay, AdditionalHour }, (err, salary) => {
        if (err) {
            console.log(err)
            res.status(400).json({
                error: 'Salary adding failed! Try Again'
            })
        }
        res.json(salary);
    });

}

/*
Name - Get All Salary
Date - 22/08/2021
 */

exports.showAll = (req, res) => {
    EmployeeSalary.find({})
        // .limit(10)
        .sort({ createdAt: -1 })
        .exec((err, EmployeeSalary) => {
            if (err) console.log(err);
            res.json(EmployeeSalary);
        });
};

/*
Name - Delete Staff Salary by _ID
Date - 11/09/2021
 */
exports.removebyId = (req, res) => {
    const { id } = req.params.id;
    console.log(id);
    EmployeeSalary.findOneAndRemove({ id }).exec((err, post) => {
        if (err) console.log(err);
        res.json({
            message: 'Staff Salary Record Deleted'
        });
    })
}

/*
Name - Get Salary Details by date
Date - 16/10/2021
 */
exports.getByYear = async (req, res) => {
    let start = req.params.from;
    let end = req.params.to;
    try {
        const salary = await EmployeeSalary.find({
            orderedDate: { $gte: start, $lt: end },
        });

        console.log(salary);
        res.status(200).json(salary);
        // res.status(200).json(end);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};