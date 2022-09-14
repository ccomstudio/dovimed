module.exports = [
  {
    step: "Personal details",
    fields: [
      {
        id: 1,
        name: "firstName",
        type: "text",
        placeholder: "first name",
        errorMessage: "Name should be 3-16 characters and shouldn't include any special character!",
        label: "First Name",
        pattern: /^[A-Za-z]{3,16}$/,
        required: true,
      },
      {
        id: 2,
        name: "lastName",
        type: "text",
        placeholder: "last name",
        errorMessage: "Name should be 3-16 characters and shouldn't include any special character!",
        label: "Last Name",
        pattern: /^[A-Za-z- ]{3,20}$/,
        required: true,
      },
    ],
  },
  {
    step: "Contact Information",
    fields: [
      {
        id: 3,
        name: "email",
        type: "email",
        placeholder: "email",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        pattern: /^[^@]+@[^@]+\.[^@]+$/, //jedna malpa i kropka
        required: true,
      },
      {
        id: 4,
        name: "phone",
        type: "tel",
        placeholder: "e.g. 666777888",
        label: "Phone",
        errorMessage: "Please provide 9-digit phone number.",
        pattern: /[0-9]{9}/,
        maxLength: 9,
        required: true,
      },
    ],
  },
  {
    step: "Appointment Details",
    fields: [
      {
        id: 5,
        name: "list",
        label: "Field of interest",
        errorMessage: "Please select an option.",
        pattern: /[A-Za-z0-9]/,
        required: true,
        list: ["Go nuts", "Best to do"],
      },
      {
        id: 6,
        name: "date",
        type: "date",
        label: "Date of visit",
        errorMessage: "Please provide the date.",
        pattern: "/[0-9]/",
        required: true,
      },
    ],
  },
];
