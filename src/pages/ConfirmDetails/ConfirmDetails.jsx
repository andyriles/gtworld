import { useLocation } from "react-router-dom";
import BackIcon from "../../assets/back-icon.svg";
import { useNavigate } from "react-router-dom";
import Checkmark from "../../assets/done.svg";
import Failed from "../../assets/failed.svg";
import "./confirm-details.css";
import { useState } from "react";

const ConfirmDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log({ loading });
  console.log({ data });
  const handleNavigate = () => {
    navigate("/deposit-cheque");
  };

  /* useEffect(() => {
    if (loading) {
      window.my_modal_3.showModal();
    } else {
      if (data?.code == 200) {
        window.my_modal_5.showModal();
      } else if (data?.code != 200) {
        window.my_modal_4.showModal();
      }
    }
  }, [loading, data]); */

  const handleNavigateWithState = () => {
    navigate("/deposit-cheque", { state: state });
  };

  const handleNavigateToHome = () => {
    navigate("/dashboard");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setClicked(true);
    const formData = new FormData();
    formData.append("front_image", state[3]);
    formData.append("back_image", state[4]);

    try {
      fetch(
        "https://hackathon-production-8f50.up.railway.app/api/v1/deposits/cheque",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((response) => {
          setData(response);
          setLoading(false);
          console.log("Response:", response);
        });
    } catch (error) {
      console.error("Error:", error);
    }
    /* window.my_modal_3.showModal();
    window.my_modal_4.showModal();
    window.my_modal_5.showModal(); */
  };

  return (
    <div className="m-4">
      <div
        onClick={handleNavigate}
        className="fixed top-0 left-4 right-0 z-20 h-16 pt-8"
        style={{ backgroundColor: "#f1f2f5" }}
      >
        <img src={BackIcon} alt="backIcon" />
      </div>
      <h1 className="text-3xl text-extrabold mt-16">Confirm Details</h1>
      <p className="mt-4">
        Please confirm the deposit details. Then tap
        <span className="font-bold"> Deposit</span> to continue or{" "}
        <span className="font-bold">Edit</span> to change
      </p>
      <div className="mt-8 ">
        <div className="flex gap-x-2 w-full border-b-2 pb-8 border-neutral-300">
          <div className="w-1/2 flex justify-center items-center">
            <p>Front of cheque</p>
          </div>
          <div className="w-1/2">
            <img
              src={state[0]}
              alt="front of change"
              className="h-24 rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-end gap-x-2 w-full mt-4 border-b-2 pb-8 ">
          <div className="w-1/2 flex justify-center items-center">
            <p>Back of cheque</p>
          </div>
          <div className="w-1/2">
            <img
              src={state[1]}
              alt="front of change"
              className="h-24 rounded-md "
            />
          </div>
        </div>
        <div className="flex  gap-x-2 w-full mt-4 pt-4 ">
          <div className="w-1/2  flex justify-center items-center">
            <p>Account to deposit</p>
          </div>
          <div className="pl-8">
            <p>{state[2].value}</p>
          </div>
        </div>
      </div>
      <div className="flex px-4 gap-x-2 w-full fixed bottom-8 left-0 right-0">
        <button
          style={{ outline: "rgba(0, 0, 0, 0.1)" }}
          className="bg-white border w-1/2 h-12 rounded-md"
          onClick={handleNavigateWithState}
        >
          Edit
        </button>
        <button
          style={{ backgroundColor: "#FB5621" }}
          className="text-white w-1/2 rounded-md"
          onClick={handleSubmit}
        >
          Deposit
        </button>
      </div>
      {/* Open the modal using ID.showModal() method */}

      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        checked={!loading && clicked && data?.code == 200}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box" style={{ background: "#f1f2f5" }}>
          <div className="p-4">
            <img src={Checkmark} alt="checkmark" />
          </div>
          <p className="p-4 font-semibold text-xl ">
            Cheque Deposit to your account is being processed
          </p>
          <p className="py-2 text-sm px-4">
            Guarantee Trust Bank Plc &#x2022; 0817455948
          </p>
          <div className="modal-action bg-white py-4 pr-4">
            <label
              htmlFor="my_modal_6"
              className="btn rounded-md text-white w-44"
              style={{ backgroundColor: "#FB5621" }}
              onClick={handleNavigateToHome}
            >
              Done
            </label>
          </div>
        </div>
      </div>
      <input
        type="checkbox"
        id="my_modal_5"
        className="modal-toggle"
        checked={!loading && clicked && data?.code != 200}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box" style={{ background: "#f1f2f5" }}>
          <div className="p-4">
            <img src={Failed} alt="checkmark" />
          </div>
          <p className="p-4 font-semibold text-xl ">
            Cheque Deposit not successful, please try again later
          </p>
          <div className="modal-action bg-white py-4 pr-4">
            <label
              htmlFor="my_modal_6"
              className="btn rounded-md text-white w-44"
              style={{ backgroundColor: "#FB5621" }}
              onClick={handleNavigateToHome}
            >
              Go Home
            </label>
          </div>
        </div>
      </div>
      <input
        type="checkbox"
        id="my_modal_4"
        className="modal-toggle"
        checked={loading}
      />
      <div className="modal">
        <div
          className="modal-box rounded-md w-20 h-20 max-w-5x flex items-center justify-center"
          style={{ background: "#f1f2f5" }}
        >
          <span className="loading loading-spinner text-error"></span>
        </div>
      </div>
      <dialog id="my_modal_3" className=" modal ">
        <form
          method="dialog"
          className="modal-box rounded-md w-20 h-20 max-w-5x flex items-center justify-center "
          style={{ background: "#f1f2f5" }}
        >
          <span className="loading loading-spinner text-error"></span>
        </form>
      </dialog>
    </div>
  );
};

export default ConfirmDetails;
