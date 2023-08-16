import FaceID from "../assets/faceid.svg";
import Backspace from "../assets/backspace.svg";
import PropTypes from "prop-types";

const Keypad = ({ handleClick, handleDelete }) => {
  return (
    <div className="mt-12 ">
      <div className="flex gap-x-8">
        <div
          className="w-16 h-16 text-3xl flex items-center justify-center cursor-pointer "
          onClick={handleClick}
        >
          1
        </div>
        <div
          className="w-16 h-16 text-3xl flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          2
        </div>
        <div
          className="w-16 h-16 text-3xl flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          3
        </div>
      </div>
      <div className="flex gap-x-8">
        <div
          className="w-16 h-16 text-3xl flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          4
        </div>
        <div
          className="w-16 h-16 text-3xl flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          5
        </div>
        <div
          className="w-16 h-16 text-3xl flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          6
        </div>
      </div>
      <div className="flex gap-x-8">
        <div
          className="w-16 h-16 text-3xl flex items-center justify-center cursor-pointer "
          onClick={handleClick}
        >
          7
        </div>
        <div
          className="w-16 h-16 text-3xl flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          8
        </div>
        <div
          className="w-16 h-16 text-3xl flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          9
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="w-16 h-16 text-3xl flex items-center justify-center cursor-pointer">
          <img src={FaceID} alt="faceid" />
        </div>
        <div
          className="w-16 h-16 text-3xl flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          0
        </div>
        <div
          className="w-16 h-16 text-3xl flex items-center justify-center pt-2 cursor-pointer"
          onClick={handleDelete}
        >
          <img src={Backspace} alt="faceid" />
        </div>
      </div>
    </div>
  );
};

Keypad.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Keypad;
