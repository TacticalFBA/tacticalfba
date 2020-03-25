
export const validation = [
    {
        field: "factory",
        checkList: [
            {
                rule: /\S/, // not empty
                message: "Please enter factory name."
            },
        ]
    },
    {
        field: "address",
        checkList: [
            {
                rule: /\S/, //  not empty
                message: "Please enter address."
            },
            {
                rule: /^.*[\u4e00-\u9fa5].*$/, // is Chinese address
                message: "Please enter address in Chinese."
            }
        ]
    },
    {
        field: "zipcode",
        checkList: [
            {
                rule: /\S/, //  not empty
                message: "Please enter zipcode."
            },
            {
                rule: /^[0-9]{6}$/, // is zipcode
                message: "Invalid zipcode."
            }
        ]
    },
    {
        field: "contact",
        checkList: [
            {
                rule: /\S/, //  not empty
                message: "Please enter a contact person."
            }
        ]
    },
    {
        field: "email",
        checkList: [
            {
                rule: /\S/, //  not empty
                message: "Please enter Email."
            },
            {
                rule: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/, // is email
                message: "Invalid Email address."
            }
        ]
    },
    {
        field: "mobile",
        checkList: [
            {
                rule: /\S/, //  not empty
                message: "Please enter mobile number."
            },
            {
                rule: /^[1]([3-9])[0-9]{9}$/, // is mobile number
                message: "Invalid mobile number."
            }
        ]
    }
];
