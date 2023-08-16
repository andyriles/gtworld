import { useEffect, useState } from "react";
import Logo from "../assets/gtb-logo.svg";
import Keypad from "../components/Keypad";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0); // Initialize count to 2 for demonstration
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  useEffect(() => {
    if (count >= 6) {
      navigate("/dashboard");
    }
  }, [count]);

  const handleDelete = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < 6; i++) {
      const circleColor = i < count ? "circle-color-orange" : "bg-neutral-500";
      circles.push(
        <div
          key={i}
          className={`border-2 rounded-full mb-4 w-4 h-4 ${circleColor}`}
        ></div>
      );
    }
    return circles;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-1 h-fit overflow-y-hidden ">
      <div>
        <img src={Logo} alt="logo" width={80} />
      </div>
      <p className="text-lg">Enter password</p>
      <div className="flex mt-4 gap-x-4">{renderCircles()}</div>
      <Keypad handleClick={handleClick} handleDelete={handleDelete} />
      <p style={{ color: "#ff6b3c" }} className="text-sm text-bold">
        Forgot Password?
      </p>
    </div>
  );
};

export default Login;
