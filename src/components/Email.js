import { useRef } from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import "./Email.css";

const Email = () => {
  const form = useRef();
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [isValid, setIsValid] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (emailRef.current.value === "")
      return alert("Please enter a valid email");
    if (messageRef.current.value === "") return alert("Please enter a message");

    emailjs
      .sendForm(
        "service_uwmfnit",
        "template_b6b0kpm",
        form.current,
        "fdT5mUsZAI0HT7vdH"
      )
      .then(
        (result) => {
          console.log(result);
          if (result.text === "OK") {
            setIsValid(true);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  const displayMessage = () => {
    return <p>{isValid ? "thank you for submission" : "Ooops, all berries"}</p>;
  };
  return (
    <div id="emailSection" className="portfolio-prompt-section">
      <h1 className="portfolio-prompt-header">Get in touch!</h1>
      <div className="portfolio-contact-form-block w-form">
        <form
          ref={form}
          onSubmit={sendEmail}
          id="email-form"
          name="email-form"
          data-name="Email Form"
          method="get"
          className="portfolio-contact-form"
        >
          <label htmlFor="name" className="portfolio-contact-field-label">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            className="portfolio-contact-text-field w-input"
            maxLength={256}
            name="name"
            data-name="Name"
            placeholder="Please enter your email."
            id="name"
            defaultValue={""}
          />
          <label htmlFor="field" className="portfolio-contact-field-label">
            Message
          </label>
          <textarea
            ref={messageRef}
            placeholder="Let me know if you would like to work with me!"
            maxLength={5000}
            id="field"
            name="field"
            data-name="field"
            className="portfolio-contact-textarea w-input"
            defaultValue={""}
          />
          <button
            onSubmit={displayMessage}
            type="submit"
            data-wait="Please wait..."
            className="portfolio-contact-submit-btn w-button"
          >
            Submit
          </button>
        </form>
        <div className="w-form-done">
          <div>
            {isValid && "Thank you! Your submission has been received!"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
