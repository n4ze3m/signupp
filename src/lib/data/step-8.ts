import { Fileds } from "./type";

const step8: Fileds = [
    {
        fields: [
            {
                inputType: "input",
                label: "Number of unread emails",
                name: "numberOfUnreadEmails",
                type: "number",
                placeholder: "Enter the number of unread emails",
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
                label: "Number of unread messages",
                name: "numberOfUnreadMessages",
                type: "number",
                placeholder: "Enter the number of unread messages",
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
                label: "Number of unread notifications",
                name: "numberOfUnreadNotifications",
                type: "number",
                placeholder: "Enter the number of unread notifications",
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
                label: "Number of social media notifications",
                name: "numberOfSocialMediaNotifications",
                type: "number",
                placeholder: "Enter the number of social media notifications",
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
                label: "Number of app notifications",
                name: "numberOfAppNotifications",
                type: "number",
                placeholder: "Enter the number of app notifications",
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
                label: "Number of missed calls",
                name: "numberOfMissedCalls",
                type: "number",
                placeholder: "Enter the number of missed calls",
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
                label: "Number of calendar reminders",
                name: "numberOfCalendarReminders",
                type: "number",
                placeholder: "Enter the number of calendar reminders",
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
                label: "Number of task reminders",
                name: "numberOfTaskReminders",
                type: "number",
                placeholder: "Enter the number of task reminders",
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
                label: "Number of friend requests",
                name: "numberOfFriendRequests",
                type: "number",
                placeholder: "Enter the number of friend requests",
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
                label: "Number of event invitations",
                name: "numberOfEventInvitations",
                type: "number",
                placeholder: "Enter the number of event invitations",
                required: true,
                regex: /^\d+$/,
                errorMessage: "Please enter a valid number"
            }
        ]
    }
];

export default step8;
