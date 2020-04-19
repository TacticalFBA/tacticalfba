import React from "react";
import Box from "@material-ui/core/Box";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="container ">
      <Box component="div" textAlign="center" marginBottom="10vh">
        <Box
          component="div"
          textAlign="center"
          marginTop="10vh"
          marginBottom="5vh"
        >
          <h4>Contact Us</h4>
        </Box>
        <ContactForm />
      </Box >
    </div>
  );
}
