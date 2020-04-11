export const samples = [
  {
    pid: 1,
    iName: "",
    themeColor: "#000080",
    frontMsgBody: `<p>Hey there,</p><br/><p>Thanks so much for supporting our small and growing Amazon business.</p><br/><p>We really hope you like our products, if you have any questions, feel free to reach out anytime.</p><br/><p>If you have a second, leaving us an honest review would help us out so much, as well as help other customers who might be looking for our products.</p><br/><p>Thanks again!</p>`,
    frontMsgSec: `<strong>James<br>from<br>TacticalFBA</strong>`,
    rearMsg: `<p>We appreciate your support!</p><p>Here is a promo code for 15% off on your next order:</p><br><p><strong>THANKYOU15</strong></p>`,
    frontImg: `${process.env.PUBLIC_URL}/img/person.jpg`,
    rearImg: `${process.env.PUBLIC_URL}/img/logo-white.png`,
    frontPre: "",
    backPre: "",
  },
  {
    pid: 2,
    iName: "",
    themeColor: "#b29ea8",
    frontMsgBody:
      "<p>Hey there,</p><br/><p>Thanks so much for supporting our small and growing Amazon business.</p><br/><p>We really hope you like our products, if you have any questions, feel free to reach out anytime.</p><br/><p>If you have a second, leaving us an honest review would help us out so much, as well as help other customers who might be looking for our products.</p><br/><p>Thanks again!</p>",
    frontMsgSec: "<strong>James<br>from<br>TacticalFBA</strong>",
    rearMsg:
      "<p><strong>Check out our new product!</strong></p><br><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt oreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>",
    frontImg: `${process.env.PUBLIC_URL}/img/person.jpg`,
    rearImg: `${process.env.PUBLIC_URL} /img/product.jpg`,
    frontPre: "",
    backPre: "",
  },
  {
    pid: 0,
    iName: "",
    frontImg: `${process.env.PUBLIC_URL}/img/sample_image/t0/front.jpg`,
    rearImg: `${process.env.PUBLIC_URL}/img/sample_image/t0/rear.jpg`,
    frontPre: "",
    backPre: "",
  },
];

export const products = [
  {
    pid: 1,
    type: "Insert",
    name: "Discount Code",
    img: `${process.env.PUBLIC_URL}/img/insert_cover/discount.jpg`,
    price: 50,
    count: 0,
    total: 0,
  },
  {
    pid: 2,
    type: "Insert",
    name: "New Product",
    img: `${process.env.PUBLIC_URL}/img/insert_cover/new-product.jpg`,
    price: 50,
    count: 0,
    total: 0,
  },
  {
    pid: 0,
    type: "Insert",
    name: "Own Artwork",
    img: `${process.env.PUBLIC_URL}/img/insert_cover/own.jpg`,
    price: 50,
    count: 0,
    total: 0,
  },
];
