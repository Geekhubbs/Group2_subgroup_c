const colleges = [
{
"collegeId": 1,
"name": "College of Engineering",
"code": "COLENG"
},
{
"collegeId": 2,
"name": "College of Physical Sciences",
"code": "COLPHYS"
},
{
"collegeId": 3,
"name": "College of Biosciences",
"code": "COLBIOS"
},
{
"collegeId": 4,
"name": "College of Management Sciences",
"code": "COLMAS"
} 
]

const departments = [
  {
    "departmentId": 1,
    "name": "Agricultural and Bio-Resources Engineering",
    "code": "ABE",
    "collegeId": 1
  },
  {
    "departmentId": 2,
    "name": "Civil Engineering",
    "code": "CVE",
    "collegeId": 1
  },
  {
    "departmentId": 3,
    "name": "Electrical and Electronics Engineering",
    "code": "EEE",
    "collegeId": 1
  },
  {
    "departmentId": 4,
    "name": "Mechanical Engineering",
    "code": "MCE",
    "collegeId": 1
  },
  {
    "departmentId": 5,
    "name": "Mechatronics Engineering",
    "code": "MTR",
    "collegeId": 1
  },
{
"departmentId": 6,
"name": "Computer Science",
"code": "CSC",
"collegeId": 2
},
{
"departmentId": 7,
"name": "Mathematics",
"code": "MTH",
"collegeId": 2
},
{
"departmentId": 8,
"name": "Physics",
"code": "PHY",
"collegeId": 2
},
{
"departmentId": 9,
"name": "Statistics",
"code": "STA",
"collegeId": 2
},
{
"departmentId": 10,
"name": "Chemistry",
"code": "CHM",
"collegeId": 2
},
{
"departmentId": 11,
"name": "Biochemistry",
"code": "BCH",
"collegeId": 3
},
{
"departmentId": 12,
"name": "Microbiology",
"code": "MCB",
"collegeId": 3
},
{
"departmentId": 13,
"name": "Pure and Applied Botany",
"code": "PAB",
"collegeId": 3
},
{
"departmentId": 14,
"name": "Pure and Applied Zoology",
"code": "PAZ",
"collegeId": 3
},
 // COLMAS departments
  {
    "departmentId": 15,
    "name": "Accounting",
    "code": "ACC",
    "collegeId": 4
  },
  {
    "departmentId": 16,
    "name": "Banking and Finance",
    "code": "BNF",
    "collegeId": 4
  },
  {
    "departmentId": 17,
    "name": "Business Administration",
    "code": "BUS",
    "collegeId": 4
  },
  {
    "departmentId": 18,
    "name": "Economics",
    "code": "ECO",
    "collegeId": 4
  },
  {
    "departmentId": 19,
    "name": "Entrepreneurial Studies",
    "code": "ETS",
    "collegeId": 4
  }
]

const students = [
  {
    "studentId": 1,
    "fullName": "John Adewale",
    "gender": "Male",
    "matricNumber": "COLENG/2024/001",
    "collegeId": 1,
    "departmentId": 1,
    "level": 100,
    "email": "john.adewale@student.funaab.edu.ng"
  },
  {
    "studentId": 2,
    "fullName": "Mary Johnson",
    "gender": "Female",
    "matricNumber": "COLENG/2024/002",
    "collegeId": 1,
    "departmentId": 2,
    "level": 200,
    "email": "mary.johnson@student.funaab.edu.ng"
  },
  {
    "studentId": 3,
    "fullName": "David Ogunleye",
    "gender": "Male",
    "matricNumber": "COLENG/2024/003",
    "collegeId": 1,
    "departmentId": 3,
    "level": 300,
    "email": "david.ogunleye@student.funaab.edu.ng"
  },
  {
    "studentId": 4,
    "fullName": "Sarah Bello",
    "gender": "Female",
    "matricNumber": "COLENG/2024/004",
    "collegeId": 1,
    "departmentId": 4,
    "level": 400,
    "email": "sarah.bello@student.funaab.edu.ng"
  },
  {
    "studentId": 5,
    "fullName": "Daniel Akinola",
    "gender": "Male",
    "matricNumber": "COLENG/2024/005",
    "collegeId": 1,
    "departmentId": 5,
    "level": 500,
    "email": "daniel.akinola@student.funaab.edu.ng"
  },
  {
    "studentId": 6,
    "fullName": "Grace Oladipo",
    "gender": "Female",
    "matricNumber": "COLPHYS/2024/006",
    "collegeId": 2,
    "departmentId": 6,
    "level": 100,
    "email": "grace.oladipo@student.funaab.edu.ng"
  },
  {
    "studentId": 7,
    "fullName": "Michael Adekunle",
    "gender": "Male",
    "matricNumber": "COLPHYS/2024/007",
    "collegeId": 2,
    "departmentId": 7,
    "level": 200,
    "email": "michael.adekunle@student.funaab.edu.ng"
  },
  {
    "studentId": 8,
    "fullName": "Esther Balogun",
    "gender": "Female",
    "matricNumber": "COLPHYS/2024/008",
    "collegeId": 2,
    "departmentId": 8,
    "level": 300,
    "email": "esther.balogun@student.funaab.edu.ng"
  },
  {
    "studentId": 9,
    "fullName": "Samuel Okoro",
    "gender": "Male",
    "matricNumber": "COLPHYS/2024/009",
    "collegeId": 2,
    "departmentId": 9,
    "level": 400,
    "email": "samuel.okoro@student.funaab.edu.ng"
  },
  {
    "studentId": 10,
    "fullName": "Ruth Adebayo",
    "gender": "Female",
    "matricNumber": "COLPHYS/2024/010",
    "collegeId": 2,
    "departmentId": 10,
    "level": 500,
    "email": "ruth.adebayo@student.funaab.edu.ng"
  },
  {
    "studentId": 11,
    "fullName": "Joshua Nwosu",
    "gender": "Male",
    "matricNumber": "COLBIOS/2024/011",
    "collegeId": 3,
    "departmentId": 11,
    "level": 100,
    "email": "joshua.nwosu@student.funaab.edu.ng"
  },
  {
    "studentId": 12,
    "fullName": "Faith Adeyemi",
    "gender": "Female",
    "matricNumber": "COLBIOS/2024/012",
    "collegeId": 3,
    "departmentId": 12,
    "level": 200,
    "email": "faith.adeyemi@student.funaab.edu.ng"
  },
  {
    "studentId": 13,
    "fullName": "Emmanuel Okafor",
    "gender": "Male",
    "matricNumber": "COLBIOS/2024/013",
    "collegeId": 3,
    "departmentId": 13,
    "level": 300,
    "email": "emmanuel.okafor@student.funaab.edu.ng"
  },
  {
    "studentId": 14,
    "fullName": "Blessing Ojo",
    "gender": "Female",
    "matricNumber": "COLBIOS/2024/014",
    "collegeId": 3,
    "departmentId": 14,
    "level": 400,
    "email": "blessing.ojo@student.funaab.edu.ng"
  },
  {
    "studentId": 15,
    "fullName": "Peter Salami",
    "gender": "Male",
    "matricNumber": "COLENG/2024/015",
    "collegeId": 1,
    "departmentId": 3,
    "level": 500,
    "email": "peter.salami@student.funaab.edu.ng"
  },
  {
    "studentId": 16,
    "fullName": "Aisha Ibrahim",
    "gender": "Female",
    "matricNumber": "COLENG/2024/016",
    "collegeId": 1,
    "departmentId": 2,
    "level": 100,
    "email": "aisha.ibrahim@student.funaab.edu.ng"
  },
  {
    "studentId": 17,
    "fullName": "Tunde Alabi",
    "gender": "Male",
    "matricNumber": "COLENG/2024/017",
    "collegeId": 1,
    "departmentId": 4,
    "level": 200,
    "email": "tunde.alabi@student.funaab.edu.ng"
  },
  {
    "studentId": 18,
    "fullName": "Kehinde Lawal",
    "gender": "Male",
    "matricNumber": "COLENG/2024/018",
    "collegeId": 1,
    "departmentId": 5,
    "level": 300,
    "email": "kehinde.lawal@student.funaab.edu.ng"
  },
  {
    "studentId": 19,
    "fullName": "Victor Eze",
    "gender": "Male",
    "matricNumber": "COLENG/2024/019",
    "collegeId": 1,
    "departmentId": 1,
    "level": 400,
    "email": "victor.eze@student.funaab.edu.ng"
  },
  {
    "studentId": 20,
    "fullName": "Mercy Adesina",
    "gender": "Female",
    "matricNumber": "COLENG/2024/020",
    "collegeId": 1,
    "departmentId": 3,
    "level": 500,
    "email": "mercy.adesina@student.funaab.edu.ng"
  },
  {
    "studentId": 21,
    "fullName": "Ifeanyi Okeke",
    "gender": "Male",
    "matricNumber": "COLPHYS/2024/021",
    "collegeId": 2,
    "departmentId": 6,
    "level": 100,
    "email": "ifeanyi.okeke@student.funaab.edu.ng"
  },
  {
    "studentId": 22,
    "fullName": "Sophia Bello",
    "gender": "Female",
    "matricNumber": "COLPHYS/2024/022",
    "collegeId": 2,
    "departmentId": 7,
    "level": 200,
    "email": "sophia.bello@student.funaab.edu.ng"
  },
  {
    "studentId": 23,
    "fullName": "Ebuka Nnamdi",
    "gender": "Male",
    "matricNumber": "COLPHYS/2024/023",
    "collegeId": 2,
    "departmentId": 8,
    "level": 300,
    "email": "ebuka.nnamdi@student.funaab.edu.ng"
  },
  {
    "studentId": 24,
    "fullName": "Janet Ogunyemi",
    "gender": "Female",
    "matricNumber": "COLPHYS/2024/024",
    "collegeId": 2,
    "departmentId": 9,
    "level": 400,
    "email": "janet.ogunyemi@student.funaab.edu.ng"
  },
  {
    "studentId": 25,
    "fullName": "Chinedu Umeh",
    "gender": "Male",
    "matricNumber": "COLPHYS/2024/025",
    "collegeId": 2,
    "departmentId": 10,
    "level": 500,
    "email": "chinedu.umeh@student.funaab.edu.ng"
  },
  {
    "studentId": 26,
    "fullName": "Gloria Adeola",
    "gender": "Female",
    "matricNumber": "COLBIOS/2024/026",
    "collegeId": 3,
    "departmentId": 11,
    "level": 100,
    "email": "gloria.adeola@student.funaab.edu.ng"
  },
  {
    "studentId": 27,
    "fullName": "Olamide Yusuf",
    "gender": "Male",
    "matricNumber": "COLBIOS/2024/027",
    "collegeId": 3,
    "departmentId": 12,
    "level": 200,
    "email": "olamide.yusuf@student.funaab.edu.ng"
  },
  {
    "studentId": 28,
    "fullName": "Patience Okon",
    "gender": "Female",
    "matricNumber": "COLBIOS/2024/028",
    "collegeId": 3,
    "departmentId": 13,
    "level": 300,
    "email": "patience.okon@student.funaab.edu.ng"
  },
  {
    "studentId": 29,
    "fullName": "Samuel Adegbite",
    "gender": "Male",
    "matricNumber": "COLBIOS/2024/029",
    "collegeId": 3,
    "departmentId": 14,
    "level": 400,
    "email": "samuel.adegbite@student.funaab.edu.ng"
  },
  {
    "studentId": 30,
    "fullName": "Hannah Ekanem",
    "gender": "Female",
    "matricNumber": "COLBIOS/2024/030",
    "collegeId": 3,
    "departmentId": 11,
    "level": 500,
    "email": "hannah.ekanem@student.funaab.edu.ng"
  },
  {
    "studentId": 31,
    "fullName": "Ridwan Salihu",
    "gender": "Male",
    "matricNumber": "COLENG/2024/031",
    "collegeId": 1,
    "departmentId": 2,
    "level": 100,
    "email": "ridwan.salihu@student.funaab.edu.ng"
  },
  {
    "studentId": 32,
    "fullName": "Joy Olatunji",
    "gender": "Female",
    "matricNumber": "COLENG/2024/032",
    "collegeId": 1,
    "departmentId": 5,
    "level": 200,
    "email": "joy.olatunji@student.funaab.edu.ng"
  },
  {
    "studentId": 33,
    "fullName": "Emeka Obi",
    "gender": "Male",
    "matricNumber": "COLENG/2024/033",
    "collegeId": 1,
    "departmentId": 1,
    "level": 300,
    "email": "emeka.obi@student.funaab.edu.ng"
  },
  {
    "studentId": 34,
    "fullName": "Deborah Ajayi",
    "gender": "Female",
    "matricNumber": "COLENG/2024/034",
    "collegeId": 1,
    "departmentId": 4,
    "level": 400,
    "email": "deborah.ajayi@student.funaab.edu.ng"
  },
  {
    "studentId": 35,
    "fullName": "Abdul Kareem",
    "gender": "Male",
    "matricNumber": "COLENG/2024/035",
    "collegeId": 1,
    "departmentId": 3,
    "level": 500,
    "email": "abdul.kareem@student.funaab.edu.ng"
  },
  {
    "studentId": 36,
    "fullName": "Naomi Peters",
    "gender": "Female",
    "matricNumber": "COLPHYS/2024/036",
    "collegeId": 2,
    "departmentId": 6,
    "level": 100,
    "email": "naomi.peters@student.funaab.edu.ng"
  },
  {
    "studentId": 37,
    "fullName": "Isaac Adekunbi",
    "gender": "Male",
    "matricNumber": "COLPHYS/2024/037",
    "collegeId": 2,
    "departmentId": 8,
    "level": 200,
    "email": "isaac.adekunbi@student.funaab.edu.ng"
  },
  {
    "studentId": 38,
    "fullName": "Vivian Udo",
    "gender": "Female",
    "matricNumber": "COLPHYS/2024/038",
    "collegeId": 2,
    "departmentId": 9,
    "level": 300,
    "email": "vivian.udo@student.funaab.edu.ng"
  },
  {
    "studentId": 39,
    "fullName": "Daniel Chukwu",
    "gender": "Male",
    "matricNumber": "COLPHYS/2024/039",
    "collegeId": 2,
    "departmentId": 10,
    "level": 400,
    "email": "daniel.chukwu@student.funaab.edu.ng"
  },
  {
    "studentId": 40,
    "fullName": "Mariam Lawanson",
    "gender": "Female",
    "matricNumber": "COLPHYS/2024/040",
    "collegeId": 2,
    "departmentId": 7,
    "level": 500,
    "email": "mariam.lawanson@student.funaab.edu.ng"
  },
  {
    "studentId": 41,
    "fullName": "Felix Nwankwo",
    "gender": "Male",
    "matricNumber": "COLBIOS/2024/041",
    "collegeId": 3,
    "departmentId": 12,
    "level": 100,
    "email": "felix.nwankwo@student.funaab.edu.ng"
  },
  {
    "studentId": 42,
    "fullName": "Oluchi Nneka",
    "gender": "Female",
    "matricNumber": "COLBIOS/2024/042",
    "collegeId": 3,
    "departmentId": 13,
    "level": 200,
    "email": "oluchi.nneka@student.funaab.edu.ng"
  },
  {
    "studentId": 43,
    "fullName": "Adebisi Folarin",
    "gender": "Male",
    "matricNumber": "COLBIOS/2024/043",
    "collegeId": 3,
    "departmentId": 14,
    "level": 300,
    "email": "adebisi.folarin@student.funaab.edu.ng"
  },
  {
    "studentId": 44,
    "fullName": "Kelvin Essien",
    "gender": "Male",
    "matricNumber": "COLBIOS/2024/044",
    "collegeId": 3,
    "departmentId": 11,
    "level": 400,
    "email": "kelvin.essien@student.funaab.edu.ng"
  },
  {
    "studentId": 45,
    "fullName": "Christiana James",
    "gender": "Female",
    "matricNumber": "COLBIOS/2024/045",
    "collegeId": 3,
    "departmentId": 12,
    "level": 500,
    "email": "christiana.james@student.funaab.edu.ng"
  },
  {
    "studentId": 46,
    "fullName": "Ayomide Ogunlana",
    "gender": "Male",
    "matricNumber": "COLENG/2024/046",
    "collegeId": 1,
    "departmentId": 1,
    "level": 100,
    "email": "ayomide.ogunlana@student.funaab.edu.ng"
  },
  {
    "studentId": 47,
    "fullName": "Uche Ezeani",
    "gender": "Male",
    "matricNumber": "COLENG/2024/047",
    "collegeId": 1,
    "departmentId": 2,
    "level": 200,
    "email": "uche.ezeani@student.funaab.edu.ng"
  },
  {
    "studentId": 48,
    "fullName": "Tosin Akinyemi",
    "gender": "Male",
    "matricNumber": "COLENG/2024/048",
    "collegeId": 1,
    "departmentId": 5,
    "level": 300,
    "email": "tosin.akinyemi@student.funaab.edu.ng"
  },
  {
    "studentId": 49,
    "fullName": "Precious Okafor",
    "gender": "Female",
    "matricNumber": "COLENG/2024/049",
    "collegeId": 1,
    "departmentId": 3,
    "level": 400,
    "email": "precious.okafor@student.funaab.edu.ng"
  },
  {
    "studentId": 50,
    "fullName": "Henry Balogun",
    "gender": "Male",
    "matricNumber": "COLENG/2024/050",
    "collegeId": 1,
    "departmentId": 4,
    "level": 500,
    "email": "henry.balogun@student.funaab.edu.ng"
  }
]



module.exports = {
    colleges,
    departments,
    students
}
