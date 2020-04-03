export const CFV = [
  {
    field: "name",
    check: {
      rule: /\S/, // not empty
      message: "What's your name?"
    }
  },
  {
    field: "email",
    check: {
      rule: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/, // is email
      message: "Invalid Email address."
    }
  },
  {
    field: "subject",
    check: {
      rule: /\S/, // not empty
      message: "Enter a subject."
    }
  },
  {
    field: "message",
    check: {
      rule: /\S/, // not empty
      message: "Leave us some message."
    }
  }
];
