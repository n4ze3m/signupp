import { Fileds } from "./type";

const step1: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "First Name",
                name: "firstName",
                type: "text",
                placeholder: "Enter your first name",
                regex: /^[a-zA-Z]+$/,
                errorMessage: "Please enter a valid first name",
                required: true
            },
            {
                inputType: "input",
                label: "Last Name",
                name: "lastName",
                type: "text",
                placeholder: "Enter your last name",
                regex: /^[a-zA-Z]+$/,
                errorMessage: "Please enter a valid last name",
                required: true

            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "Enter your email",
                regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                errorMessage: "Please enter a valid email",
                required: true
            },

        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Phone Number",
                name: "phoneNumber",
                type: "tel",
                placeholder: "Enter your phone number",
                regex: /^(\+?\d{1,3}[- ]?)?\d{10}$/,
                errorMessage: "Please enter a valid phone number",
                required: true
            }
        ]
    }
]

export default step1;