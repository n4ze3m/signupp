import { Fileds } from "./type";

const step11: Fileds = [
    {
        fields: [
            {
                inputType: "select",
                label: "Preferred online shopping platform",
                type: "text",
                name: "shoppingPlatform",
                placeholder: "Select your preferred platform",
                required: true,
                options: [
                    { value: "Amazon", label: "Amazon" },
                    { value: "eBay", label: "eBay" },
                    { value: "Walmart", label: "Walmart" },
                    { value: "Alibaba", label: "Alibaba" },
                    { value: "Etsy", label: "Etsy" },
                    { value: "Other", label: "Other" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Average amount spent per month",
                type: "number",
                name: "amountSpent",
                placeholder: "Enter average amount spent",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Preferred payment method",
                type: "text",
                name: "paymentMethod",
                placeholder: "Select your preferred payment method",
                required: true,
                options: [
                    { value: "Credit Card", label: "Credit Card" },
                    { value: "Debit Card", label: "Debit Card" },
                    { value: "PayPal", label: "PayPal" },
                    { value: "Gift Card", label: "Gift Card" },
                    { value: "Other", label: "Other" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Number of online purchases per month",
                type: "number",
                name: "purchasesPerMonth",
                placeholder: "Enter number of purchases",
                required: true,
                regex: /^[0-9]+$/,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you use online coupons?",
                type: "text",
                name: "useCoupons",
                placeholder: "Select if you use coupons",
                required: true,
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Preferred delivery speed",
                type: "text",
                name: "deliverySpeed",
                placeholder: "Select your preferred delivery speed",
                required: true,
                options: [
                    { value: "Same Day", label: "Same Day" },
                    { value: "Next Day", label: "Next Day" },
                    { value: "Standard", label: "Standard" },
                    { value: "No Preference", label: "No Preference" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Favorite product category to shop online",
                type: "text",
                name: "favoriteCategory",
                placeholder: "Enter your favorite product category",
                required: true,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you read product reviews before purchasing?",
                type: "text",
                name: "readReviews",
                placeholder: "Select if you read reviews",
                required: true,
                options: [
                    { value: "Always", label: "Always" },
                    { value: "Sometimes", label: "Sometimes" },
                    { value: "Never", label: "Never" }
                ]
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Most expensive item purchased online",
                type: "text",
                name: "expensiveItem",
                placeholder: "Enter the most expensive item",
                required: true,
            }
        ]
    },
    {
        fields: [
            {
                inputType: "select",
                label: "Do you prefer shopping on mobile or desktop?",
                type: "text",
                name: "shoppingDevice",
                placeholder: "Select your preferred device",
                required: true,
                options: [
                    { value: "Mobile", label: "Mobile" },
                    { value: "Desktop", label: "Desktop" },
                    { value: "No Preference", label: "No Preference" }
                ]
            }
        ]
    }
];

export default step11;
