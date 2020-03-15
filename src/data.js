export const sampleTemplate = {
  uid: "visitor",
  templateName: "sample",
  themeColor: "#f0523c",
  front: {
    textOne:
      "Hey there,<br/><br/>Thanks so much for supporting our small and growing Amazon business. <br/>We really hope you like our products, if you have any questions, feel free to reach out anytime. <br/>If you have a second, leaving us an honest review would help us out so much, as well as help other customers who might be looking for our products. <br/><br/>Thanks again!",
    textTwo: "A note",
    textThree: "James from TacticalFBA",
    frontImg: `${process.env.PUBLIC_URL}/img/front-img.jpg`
  },
  back: {
    backText:
      "We appreciate your support! Here is a promo code for 30% off on your next order: THANKYOU30",
    backImg: `${process.env.PUBLIC_URL}/img/logo.png`
  }
};

export const products = [
  {
    pid: 1,
    type: "Insert",
    name: "Basic",
    img: "img/template-1.jpg",
    content: sampleTemplate,
    price: 10,
    inCart: false,
    count: 0,
    total: 0,
    paid: false
  },
  {
    pid: 2,
    type: "Insert",
    name: "Natural",
    img: "img/template-1.jpg",
    content: sampleTemplate,
    price: 10,
    inCart: false,
    count: 0,
    total: 0,
    paid: false
  },
  {
    pid: 3,
    type: "Insert",
    name: "BNW",
    img: "img/template-1.jpg",
    content: sampleTemplate,
    price: 10,
    inCart: false,
    count: 0,
    total: 0,
    paid: false
  }
];
