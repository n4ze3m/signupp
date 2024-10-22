import { Fileds } from "./type";

const step13: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "Brand of mobile phone",
                name: "mobilePhoneBrand",
                type: "text",
                placeholder: "Enter the brand of your mobile phone",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Model of mobile phone",
                name: "mobilePhoneModel",
                type: "text",
                placeholder: "Enter the model of your mobile phone",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Operating system of mobile phone",
                name: "mobilePhoneOS",
                type: "text",
                placeholder: "Enter the operating system of your mobile phone",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Brand of laptop",
                name: "laptopBrand",
                type: "text",
                placeholder: "Enter the brand of your laptop",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Model of laptop",
                name: "laptopModel",
                type: "text",
                placeholder: "Enter the model of your laptop",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Operating system of laptop",
                name: "laptopOS",
                type: "text",
                placeholder: "Enter the operating system of your laptop",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Brand of desktop computer",
                name: "desktopBrand",
                type: "text",
                placeholder: "Enter the brand of your desktop computer",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Model of desktop computer",
                name: "desktopModel",
                type: "text",
                placeholder: "Enter the model of your desktop computer",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Operating system of desktop computer",
                name: "desktopOS",
                type: "text",
                placeholder: "Enter the operating system of your desktop computer",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Number of tablets owned",
                name: "numberOfTablets",
                type: "number",
                placeholder: "Enter the number of tablets you own",
                required: true,
                regex: /^\d+$/,
                errorMessage: "Please enter a valid number"
            }
        ]
    }
];

export default step13;
