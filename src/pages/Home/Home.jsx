import {
  Footer,
  ChequeDeposit,
  extras,
  HomeBottom,
  HomeTop,
} from "../../assets/images";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/deposit-cheque");
  };

  return (
    <div>
      <div>
        <img src={HomeTop} alt="top" />
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex items-center m-4">
          <div
            className="flex h-11 rounded-full flex-shrink-0 min-w-min flex-no-wrap justify-center items-center gap-x-2 rounded-full p-4 font-semibold    "
            style={{
              backgroundColor: "rgba(243, 219, 212, 1)",
              color: "#ee4411",
              border: "1px solid rgba(95, 40, 22, 0.15)",
            }}
            onClick={handleClick}
          >
            <span>
              <img src={ChequeDeposit} alt="depositIcon" />
            </span>
            <p>Cheque Deposit</p>
          </div>
          <div className="flex-shrink-0 min-w-min flex-no-wrap ">
            <img src={extras} alt="extra pills" className="object-fill h-12 " />
          </div>
        </div>
      </div>
      <div>
        <img src={HomeBottom} alt="top" />
      </div>
      <div className="w-full fixed bottom-0 left-0 right-0">
        <img src={Footer} alt="footer" />
      </div>
    </div>
  );
};

export default Home;
