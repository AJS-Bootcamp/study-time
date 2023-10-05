import { RotatingLines } from "react-loader-spinner";

function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "500px" }}
    >
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="2"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Loading;
