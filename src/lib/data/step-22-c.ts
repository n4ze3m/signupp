import { Fileds } from "./type";

const step22C: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "Company name",
                name: "companyName",
                type: "text",
                placeholder: "Enter your company name",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "textarea",
                label: "Company address",
                name: "companyAddress",
                type: "text",
                placeholder: "Enter your company address",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Your work email",
                name: "workEmail",
                type: "email",
                placeholder: "Enter your work email",
                required: true,
                regex: /^[a-zA-Z0-9._%+-]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                errorMessage: "Please enter a valid work email address (not a common email provider)"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Your job title",
                name: "jobTitle",
                type: "text",
                placeholder: "Enter your job title",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Department",
                name: "department",
                type: "text",
                placeholder: "Enter your department",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Years with company",
                name: "yearsWithCompany",
                type: "number",
                placeholder: "Enter the number of years with the company",
                required: true,
                regex: /^\d+$/,
                errorMessage: "Please enter a valid number"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Company phone number",
                name: "companyPhoneNumber",
                type: "tel",
                placeholder: "Enter your company's phone number",
                required: true,
                regex: /^(\+?\d{1,3}[- ]?)?\d{10}$/,
                errorMessage: "Please enter a valid phone number"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Employment type",
                name: "employmentType",
                placeholder: "Select your employment type",
                required: true,
                options: [
                    { value: "Full-time", label: "Full-time" },
                    { value: "Part-time", label: "Part-time" },
                    { value: "Contract", label: "Contract" },
                    { value: "Internship", label: "Internship" },
                    { value: "Freelance", label: "Freelance" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Company website",
                name: "companyWebsite",
                type: "url",
                placeholder: "Enter your company's website URL",
                required: false
            }
        ]
    }
];

export default step22C;
