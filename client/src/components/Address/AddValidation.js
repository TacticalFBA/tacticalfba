export const validation = [
  {
    field: "factory",
    check: [
      // {
      //   rule: /\S/, // not empty
      //   message: "Assign a nickname for your factory.",
      // },
    ],
  },
  {
    field: "address",
    check: [
      // {
      //   rule: /\S/, //  not empty
      //   message: "Please enter factory address.",
      // },
      {
        rule: /^.*[\u4e00-\u9fa5].*$/, // is Chinese
        message: "Please enter address in Chinese.",
      },
    ],
  },
  {
    field: "contact",
    check: [
      {
        rule: /^.*[\u4e00-\u9fa5].*$/, // is Chinese
        message: "Please enter name in Chinese.",
      },
      // {
      //   rule: /\S/, //  not empty
      //   message: "Please enter a contact person.",
      // },
    ],
  },
  {
    field: "email",
    check: [
      {
        rule: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/, // is email
        message: "Invalid Email address.",
      },
      // {
      //   rule: /\S/, //  not empty
      //   message: "Please enter Email.",
      // },
    ],
  },
  {
    field: "mobile",
    check: [
      {
        rule: /^[1]([3-9])[0-9]{9}$/, // is mobile number
        message: "Invalid mobile number.",
      },
      // {
      //   rule: /\S/, //  not empty
      //   message: "Please enter mobile number.",
      // },
    ],
  },
];
