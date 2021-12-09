import React from "react";
import { GeneratePageTitle } from "../App";

/**
 * Contact Page
 *
 * @return {React.FC} The contact HTML
 */
function Contact() {
  return (
    <div data-testid="page-contact">
      <GeneratePageTitle title="Contact" />
    </div>
  );
}

export default Contact;
