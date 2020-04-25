import React from "react";
import Box from "@material-ui/core/Box";
import Cover from "./Cover";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div style={{ position: "relative" }}>
      <Cover />
      <div
        className="container"
        style={{
          position: "absolute",
          top: "65%",
          zIndex: "99",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Box component="div" textAlign="center" marginBottom="10vh">
          <Box
            component="div"
            textAlign="center"
            marginTop="10vh"
            marginBottom="5vh"
          ></Box>
          <ContactForm />
        </Box>
      </div>
    </div>
  );
}
