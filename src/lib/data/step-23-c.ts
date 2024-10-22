import { Fileds } from "./type";

const step23C: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "Brand of office chair",
                name: "officeChairBrand",
                type: "text",
                placeholder: "Enter the brand of your office chair or N/A",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Type of office chair",
                name: "officeChairType",
                placeholder: "Select the type of your office chair or N/A",
                required: true,
                options: [
                    { value: "Ergonomic", label: "Ergonomic" },
                    { value: "Executive", label: "Executive" },
                    { value: "Mesh", label: "Mesh" },
                    { value: "Gaming", label: "Gaming" },
                    { value: "N/A", label: "N/A" }
                ],
                type: ""

            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Does your chair have lumbar support?",
                name: "lumbarSupport",
                placeholder: "Select if your chair has lumbar support or N/A",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                    { value: "N/A", label: "N/A" }
                ],
                type: ""

            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Adjustable armrests",
                name: "adjustableArmrests",
                placeholder: "Select if your chair has adjustable armrests or N/A",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                    { value: "N/A", label: "N/A" }
                ],
                type: ""

            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Color of office chair",
                name: "officeChairColor",
                type: "text",
                placeholder: "Enter the color of your office chair or N/A",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use a chair mat?",
                name: "useChairMat",
                placeholder: "Select if you use a chair mat or N/A",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                    { value: "N/A", label: "N/A" }
                ],
                type: ""

            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Age of office chair (years)",
                name: "officeChairAge",
                type: "number",
                placeholder: "Enter the age of your office chair in years or N/A",
                required: true,
                regex: /^\d+$/,
                errorMessage: "Please enter a valid number or N/A"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer a high-back or mid-back chair?",
                name: "chairBackPreference",
                placeholder: "Select your chair back preference or N/A",
                required: true,
                options: [
                    { value: "High-back", label: "High-back" },
                    { value: "Mid-back", label: "Mid-back" },
                    { value: "N/A", label: "N/A" }
                ],
                type: ""

            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use a footrest?",
                name: "useFootrest",
                placeholder: "Select if you use a footrest or N/A",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                    { value: "N/A", label: "N/A" }
                ],
                type: ""

            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you work from home?",
                name: "workFromHome",
                placeholder: "Select if you work from home",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    }
];

export default step23C;
