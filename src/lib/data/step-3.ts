import { Fileds } from "./type";

const step3: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Highest Education",
                name: "highestEducation",
                type: "text",
                placeholder: "Select your highest education",
                required: true,
                options: [
                    { value: "highSchool", label: "High School" },
                    { value: "bachelors", label: "Bachelor's Degree" },
                    { value: "masters", label: "Master's Degree" },
                    { value: "phd", label: "Ph.D." },
                    { value: "other", label: "Other" }
                ]
            },
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Field of Study",
                name: "fieldOfStudy",
                type: "text",
                placeholder: "Enter your field of study",
                required: true
            },

        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Institution Name",
                name: "institutionName",
                type: "text",
                placeholder: "Enter the name of your educational institution",
                required: true
            },

        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Graduation Year",
                name: "graduationYear",
                type: "number",
                placeholder: "Enter your graduation year",
                required: true
            },

        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "GPA",
                name: "gpa",
                type: "number",
                placeholder: "Enter your GPA (optional)",
                required: false
            },

        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Current Academic Status",
                name: "academicStatus",
                type: "text",
                placeholder: "Select your current academic status",
                required: true,
                options: [
                    { value: "enrolled", label: "Currently Enrolled" },
                    { value: "graduated", label: "Graduated" },
                    { value: "onLeave", label: "On Leave" },
                    { value: "other", label: "Other" }
                ]
            },

        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Academic Achievements",
                name: "academicAchievements",
                type: "text",
                placeholder: "Enter any notable academic achievements (optional)",
                required: false
            },

        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Research Experience",
                name: "researchExperience",
                type: "text",
                placeholder: "Describe any research experience (optional)",
                required: false
            },

        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Publications",
                name: "publications",
                type: "text",
                placeholder: "List any publications (optional)",
                required: false
            }
        ]
    }
];

export default step3;
