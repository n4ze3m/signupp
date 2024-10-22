import { Fileds } from "./type";

const step7: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "Best friend's name",
                name: "bestFriendName",
                type: "text",
                placeholder: "Enter your best friend's name",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Best friend's email",
                name: "bestFriendEmail",
                type: "email",
                placeholder: "Enter your best friend's email",
                required: true,
                regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                errorMessage: "Please enter a valid email address"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Best friend's phone number",
                name: "bestFriendPhoneNumber",
                type: "tel",
                placeholder: "Enter your best friend's phone number",
                required: true,
                regex: /^(\+?\d{1,3}[- ]?)?\d{10}$/,
                errorMessage: "Please enter a valid phone number"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Number of close friends",
                name: "numberOfCloseFriends",
                type: "number",
                placeholder: "Enter the number of close friends",
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
                label: "Oldest friend's name",
                name: "oldestFriendName",
                type: "text",
                placeholder: "Enter your oldest friend's name",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Year you met your best friend",
                name: "yearMetBestFriend",
                type: "number",
                placeholder: "Enter the year you met your best friend",
                required: true,
                regex: /^\d{4}$/,
                errorMessage: "Please enter a valid year (e.g., 2010)"
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Favorite activity with friends",
                name: "favoriteActivityWithFriends",
                type: "text",
                placeholder: "Enter your favorite activity",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Frequency of meeting friends per month",
                name: "friendMeetingFrequency",
                type: "number",
                placeholder: "Enter the number of times",
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
                label: "City where most friends live",
                name: "friendsCityLocation",
                type: "text",
                placeholder: "Enter the city name",
                required: true
            }
        ]
    },
    {
        fields: [
            {
                inputType: "input",
                label: "Newest friend's name",
                name: "newestFriendName",
                type: "text",
                placeholder: "Enter your newest friend's name",
                required: true
            }
        ]
    }
];

export default step7;
