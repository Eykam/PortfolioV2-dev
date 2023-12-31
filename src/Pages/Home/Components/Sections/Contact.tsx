import { Button, Paper, TextField } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import Footer from "../../../../Global/Footer";

const Contact = () => {
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

            <TextField
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
