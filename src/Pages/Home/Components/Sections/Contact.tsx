import { Button, Modal, Paper, TextField } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import Footer from "../../../../Global/Footer";
import { useRef, useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const name = useRef(null!);
  const email = useRef(null!);
  const message = useRef(null!);

  const handleCloseModal = () => {
    setOpen(false);
    setSuccess(false);
  };

  return (
    <>
      <div className="h-full w-full flex justify-center relative">
        <Paper
          className="self-center p-4 flex flex-col justify-center items-center h-3/4 w-3/4 md:w-1/2 lg:w-1/4 opacity-90"
          style={{ backgroundColor: "#191325", borderRadius: "15px" }}
        >
          <div className="w-full md:w-3/4 h-full p-4 md:p-2 lg:p-0 flex flex-col justify-evenly align-middle">
            <span className="font-bold text-3xl md:text-4xl  text-neutral-200">
              Contact Me
            </span>

            <Modal open={open} onClose={handleCloseModal}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "rgb(50,50,50)",
                  padding: "2%",
                  borderRadius: "5px",
                }}
              >
                {success ? (
                  <h2 className="m-0 p-0 text-lg text-white font-bold">
                    Message Sent!
                  </h2>
                ) : (
                  <h2 className="m-0 p-0 text-lg text-white font-bold">
                    Please make sure all fields are correct!
                  </h2>
                )}

                <br />

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCloseModal}
                  style={{ marginLeft: "auto" }}
                >
                  Close
                </Button>
              </div>
            </Modal>

            <TextField
              inputRef={name}
              style={{
                background: "#261D39",
                borderRadius: "10px",
              }}
              sx={{
                input: { color: "rgb(200,200,200)" },
                label: { color: "rgb(200,200,200)" },
                "& label.Mui-focused": {
                  color: "rgb(200,200,200)",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "rgb(200,200,200)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(200,200,200)",
                  },
                },
              }}
              id="name-input"
              label="Name"
              placeholder="Name"
              variant="outlined"
              required
            />

            <TextField
              inputRef={email}
              style={{
                background: "#261D39",
                borderRadius: "10px",
              }}
              sx={{
                input: { color: "rgb(200,200,200)" },
                label: { color: "rgb(200,200,200)" },
                "& label.Mui-focused": {
                  color: "rgb(200,200,200)",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "rgb(200,200,200)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(200,200,200)",
                  },
                },
              }}
              id="email-input"
              label="Email"
              placeholder="abc@example.com"
              type="email"
              variant="outlined"
              required
            />

            <span className="font-bold text-lg mt-2 text-neutral-200">
              Message
            </span>

            <label htmlFor="contact-message" hidden>
              Contact Message
            </label>

            <BaseTextareaAutosize
              ref={message}
              style={{
                background: "#261D39",
                borderRadius: "10px",
                color: "rgb(200,200,200)",
                marginBottom: "2%",
                height: "50%",
              }}
              id="contact-message"
              required
            />

            <Button
              className="w-1/3 self-end "
              variant="contained"
              style={{ backgroundColor: "rgb(80,20,100)" }}
              onClick={() => {
                let nameText = (name.current as HTMLInputElement).value;
                let emailText = (email.current as HTMLInputElement).value;
                let messageText = (message.current as HTMLTextAreaElement)
                  .value;

                if (
                  nameText &&
                  emailText &&
                  messageText &&
                  nameText.length > 1 &&
                  emailText.includes("@") &&
                  emailText.includes(".") &&
                  messageText.length > 1
                ) {
                  setSuccess(true);
                }

                setOpen(true);
              }}
            >
              Submit
            </Button>
          </div>
        </Paper>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
