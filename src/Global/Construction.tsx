import HandymanIcon from "@mui/icons-material/Handyman";

const Construction = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="font-bold text-2xl mb-4 text-neutral-200">
        Under Construction
      </span>

      <HandymanIcon
        sx={{
          height: "200px",
          width: "200px",
          opacity: 1,
          color: "rgb(10,10,10)",
        }}
      />
    </div>
  );
};

export default Construction;
