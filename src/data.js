export const sampleTemplate = {
  pid: "",
  templateName: "sample",
  themeColor: "#f0523c",
  front: {
    messageBody:
      `<p>Hey there,</p><br/><p>Thanks so much for supporting our small and growing Amazon business.</p><br/><p>We really hope you like our products, if you have any questions, feel free to reach out anytime.</p><br/><p>If you have a second, leaving us an honest review would help us out so much, as well as help other customers who might be looking for our products.</p><br/><p>Thanks again!</p>`,
    sellerName: `<p>James</p><p>from</p><p>TacticalFBA</p>`,
    facePhoto: `${process.env.PUBLIC_URL}/img/front-img.jpg`
  },
  rear: {
    rearMessage:
      `<p>We appreciate your support!</p><p>Here is a promo code for 30% off on your next order:</p><br><p><strong>THANKYOU30</strong></p>`,
    companyLogo: `${process.env.PUBLIC_URL} /img/logo.png`
  }
};

export const products = [
  {
    pid: 1,
    type: "Insert",
    name: "Basic",
    img: "img/template-1.jpg",
    price: 10,
    count: 0,
    total: 0
  },
  // {
  //   pid: 2,
  //   type: "Insert",
  //   name: "Natural",
  //   img: "img/template-1.jpg",
  //   price: 10,
  //   count: 0,
  //   total: 0
  // },
  // {
  //   pid: 3,
  //   type: "Insert",
  //   name: "BNW",
  //   img: "img/template-1.jpg",
  //   price: 10,
  //   count: 0,
  //   total: 0
  // }
];
