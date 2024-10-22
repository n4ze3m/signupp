import { Fileds } from "./type";

const step4: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "Primary bank name",
                name: "primaryBankName",
                type: "text",
                placeholder: "Enter your primary bank name",
                required: true,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Number of active bank accounts",
                name: "activeBankAccounts",
                type: "number",
                placeholder: "Enter the number of active bank accounts",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Monthly savings amount",
                name: "monthlySavings",
                type: "number",
                placeholder: "Enter your monthly savings amount",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Preferred investment type",
                name: "investmentType",
                placeholder: "Select your preferred investment type",
                required: true,
                options: [
                    { value: "Stocks", label: "Stocks" },
                    { value: "Bonds", label: "Bonds" },
                    { value: "Mutual Funds", label: "Mutual Funds" },
                    { value: "Real Estate", label: "Real Estate" },
                    { value: "Cryptocurrency", label: "Cryptocurrency" },
                    { value: "Other", label: "Other" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Credit score",
                name: "creditScore",
                type: "number",
                placeholder: "Enter your credit score",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Annual income",
                name: "annualIncome",
                type: "number",
                placeholder: "Enter your annual income",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you have a financial advisor?",
                name: "financialAdvisor",
                placeholder: "Select if you have a financial advisor",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Monthly expenditure",
                name: "monthlyExpenditure",
                type: "number",
                placeholder: "Enter your monthly expenditure",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use online banking?",
                name: "onlineBanking",
                placeholder: "Select if you use online banking",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                type: ""
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Number of credit cards",
                name: "numberOfCreditCards",
                type: "number",
                placeholder: "Enter the number of credit cards you have",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    }
];

export default step4;
