const facultyInCharges = [
    {
        title: '',
        subTitle: '',
        subSubTitles: [
            {
                subSubTitle: 'Sports/NSS/NCC',
                people: [
                    { name: 'Prof. Rajeswara Rao M', designation: 'Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)' },
                    { name: 'Prof. Vigneshwara Raja P', designation: 'Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)' },
                    { name: 'Prof. Kavita Devi', designation: 'Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)' },
                ],
            },
            {
                subSubTitle: 'Cultural & Technical Events',
                people: [
                    { name: 'Prof. Nagaveni S', designation: 'Faculty-In-Charge, Students Welfare (Cultural & Technical)' },
                    { name: 'Prof. Surya Prakash Ramesh', designation: 'Faculty-In-Charge, Students Welfare (Cultural & Technical)' },
                ],
            },
        ],
    },
];

const secretaries = [
    {
        title: '',
        subTitle: 'General Secretaries',
        subSubTitles: [
            {
                subSubTitle: '',
                people: [
                    { name: 'Krishan', designation: 'General Secretary, Sports Affairs' },
                    { name: 'Yadav Vansh Suresh', designation: 'General Secretary, Technical Affairs' },
                    { name: 'Gurvir Singh', designation: 'General Secretary, Cultural Affairs' },
                    { name: 'Kodati Tharun', designation: 'General Secretary, Hostel Affairs' },
                    { name: 'Krishna Karthik', designation: 'General Secretary, Mess Affairs' },
                ],
            },
        ],
    },
    {
        title: '',
        subTitle: 'Junior General Secretaries',
        subSubTitles: [
            {
                subSubTitle: '',
                people: [
                    { name: 'Patel Saurya Ashokbhai', designation: 'Junior General Secretary, Mess Affairs' },
                    { name: 'Nilesh Kumar', designation: 'Junior General Secretary, Sports Affairs' },
                    { name: 'Samartha', designation: 'Junior General Secretary, Technical Affairs' },
                    { name: 'Mareddy Naveen Kumar Reddy', designation: 'Junior General Secretary, Cultural Affairs' },
                    { name: 'Amartya Sanjay Gawali', designation: 'Junior General Secretary, Hostel Affairs' },
                ],
            },
        ],
    },
    {
        title: '',
        subTitle: 'PG Secretaries',
        subSubTitles: [
            {
                subSubTitle: '',
                people: [
                    { name: 'Anish S K', designation: 'PG Secretary, Technical Affairs' },
                    { name: 'Rajput R Vikramsingh', designation: 'PG Secretary, Cultural Affairs' },
                    { name: 'Kaushik Shivanand Powar', designation: 'PG Secretary, Hostel Affairs' },
                    { name: 'Alok Kumar', designation: 'PG Secretary, Mess Affairs' }, // Add name if available
                ],
            },
        ],
    },
];

const clubSecretaries = [
    {
        title: '',
        subTitle: 'Tech Club Secretaries',
        subSubTitles: [
            {
                subSubTitle: '',
                people: [
                    { name: 'Pranav Kumar Pandey', designation: 'Club Secretary, AI' },
                    { name: 'Nishant Shailesh Mehta', designation: 'Club Secretary, Space Data Science' },
                    { name: 'Animesh Jain', designation: 'Club Secretary, Robotics' },
                    { name: 'Amogh R', designation: 'Club Secretary, Coding' },
                    { name: 'Jai Sharma', designation: 'Club Secretary, Finance' },
                    { name: 'Ratish Sinha', designation: 'Club Secretary, Ingene Motorsport' },
                    { name: 'Upakramanika Bishnu', designation: 'Club Secretary, Design' },
                    { name: 'Srihari Gonahal', designation: 'Junior Club Secretary, Coding' },
                    { name: 'Vidit Parikh', designation: 'Junior Club Secretary, Robotics' },
                    { name: 'Nihar Sagar G', designation: 'Junior Club Secretary, AI' },
                    { name: 'Yash Halbhavi', designation: 'Junior Club Secretary, Finance' },
                    { name: 'Dev Kaushal', designation: 'Junior Club Secretary, Space Data Science' },
                    { name: 'Soumya Shaw', designation: 'Junior Club Secretary, Ingene Motorsport' },
                    { name: 'Saipushkar Nagaraj', designation: 'Junior Club Secretary, Design' },
                ],
            },
        ],
    },
    {
        title: '',
        subTitle: 'Sports Club Secretaries',
        subSubTitles: [
            {
                subSubTitle: '',
                people: [
                    { name: 'Shivam Kumar', designation: 'Club Secretary, Athletics' },
                    { name: 'Maddela Vaishwitha', designation: 'Club Secretary, Badminton' },
                    { name: 'Nipun Gupta', designation: 'Club Secretary, Basketball' },
                    { name: 'Khot Atharva Deepak', designation: 'Club Secretary, Chess' },
                    { name: 'Tanishq Singh', designation: 'Club Secretary, Weightlifting' },
                    { name: 'Suharsh Agrawal', designation: 'Club Secretary, Cricket' },
                    { name: 'Krishnanshu Yadav', designation: 'Club Secretary, E-Sports' },
                    { name: 'Vedansh Chaudhary', designation: 'Club Secretary, Football' },
                    { name: 'Omkar Kulkarni', designation: 'Club Secretary, Tennis' },
                    { name: 'G. Rishikesh', designation: 'Club Secretary, Volleyball' },
                    { name: 'Aryawardhansingh Solanki', designation: 'Junior Club Secretary, Basketball' },
                    { name: 'Kamatham Varshith', designation: 'Junior Club Secretary, Chess' },
                    { name: 'B. Rajesh', designation: 'Junior Club Secretary, Cricket' },
                    { name: 'Ayaan Karim', designation: 'Junior Club Secretary, Football' },
                    { name: 'Pullipudi Sri Smaran', designation: 'Junior Club Secretary, Table Tennis' },
                    { name: 'Deepansh Pandey', designation: 'Junior Club Secretary, Tennis' },
                    { name: 'M. Aditya', designation: 'Junior Club Secretary, Volleyball' },
                    { name: 'Aditi Soukar', designation: 'Girls nominee for sports' },
                ],
            },
        ],
    },
    {
        title: '',
        subTitle: 'Cultural Club Secretaries',
        subSubTitles: [
            {
                subSubTitle: '',
                people: [
                    { name: 'Vedant Kannur', designation: 'Club Secretary, Dramatics' },
                    { name: 'Yogita Darji', designation: 'Club Secretary, Fine Arts' },
                    { name: 'Prachi Prasoon', designation: 'Club Secretary, Literary' },
                    { name: 'Mann Maru', designation: 'Club Secretary, Music' },
                    { name: 'Bidipta Saha', designation: 'Club Secretary, Photography and Films' },
                    { name: 'Gaurav Singhal', designation: 'Club Secretary, Quiz' },
                    { name: 'Lavanya Jayant Shende', designation: 'Club Secretary, Dhristi' },
                    { name: 'Pooja Ramesh', designation: 'Club Secretary, Dance' },
                    { name: 'Prajwal N Prasad', designation: 'Junior Club Secretary, Literary' },
                    { name: 'Kaushal Aditya Bhooshan', designation: 'Junior Club Secretary, Music' },
                    { name: 'Mayank Sharma', designation: 'Junior Club Secretary, Photography and Films' },
                    { name: 'Utkarsh Raj', designation: 'Junior Club Secretary, Prabodhini' },
                    { name: 'Preksha Patange', designation: 'Junior Club Secretary, Dhristi' },
                ],
            },
        ],
    },
];



export {facultyInCharges, secretaries, clubSecretaries};