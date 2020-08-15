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
			name: "Zeeshan",
			age: "30",
			mobile: "1234567890",
			course: "B.tech"
		}
	]
}

const {students:[, name]} = college

console.log(name)