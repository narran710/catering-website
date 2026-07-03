import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center items-center py-20">
      <TailSpin
        height={60}
        width={60}
        color="#ea580c"
        visible={true}
      />
    </div>
  );
}

export default Loader;