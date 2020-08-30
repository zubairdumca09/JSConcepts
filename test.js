a = 10;
function test() {
    console.log(this)
}
test()
const college = {
    departments: [

    ],
    employees: {
        faculties: [

        ],
        accounts: [

        ],
        examCells: [

        ],
        admin: [

        ]
    },
    students: [
        {
            name: "Imran",
            age: "28",
            mobile: "9999888676",
            course: "MCA"
        },
        {
            name: "Zubair",
            age: "32",
            mobile: "9999999999",
            course: "Msc"
        },
        {
            name: "Zeeshan",
            age: "30",
            mobile: "1234567890",
            course: "B.tech"
        }
    ]
}

const { students: [{ name: name1 }, students] } = college

// console.log(name1, name2)
// console.log(students)


// const numbers = { goli: "Imran", center: "Zeeshan", defence: "Zubair" }


// const numbers1 = ["imran", "zeeshan", "zubair"]

// console.log(numbers[0])
// console.log(numbers1[0])

