import BackIcon from "../../assets/back-icon.svg";
import Select from "react-select";
import SelectIcon from "../../assets/selectIcon.svg";
import Add from "../../assets/add.svg";
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const selectOptions = [{ value: "0817455948", label: "Current- 0817455948" }];

const ChequeDeposit = () => {
  const { state } = useLocation();
  const [error, setError] = useState(null);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [secondSelectedImage, setSecondSelectedImage] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  useEffect(() => {
    if (state) {
      setSelectedImage(state[0]);
      setSecondSelectedImage(state[1]);
      setSelectedAccount(state[2]);
      setFile1(state[3]);
      setFile2(state[4]);
    }
  }, []);

  const navigate = useNavigate();

  const handleChange = (selectedOption) => {
    setSelectedAccount(selectedOption);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFile1(file);
      setSelectedImage(imageUrl);
    }
  };
  const handleSecondImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFile2(file);
      setSecondSelectedImage(imageUrl);
    }
  };

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  const handleproceed = () => {
    if (selectedAccount && selectedImage && secondSelectedImage) {
      navigate("/confirm", {
        state: [
          selectedImage,
          secondSelectedImage,
          selectedAccount,
          file1,
          file2,
        ],
      });
    } else {
      setError(
        "Form not complete, kindly update the required fields to proceed"
      );
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };
  return (
    <div className="m-4">
      {error ? (
        <div
          className="alert  fixed top-0 left-0 z-20 fixed text-start"
          style={{ backgroundColor: "#FB5621", borderRadius: "0px" }}
        >
          <span className="text-white ">{error}</span>
        </div>
      ) : (
        <div
          onClick={handleNavigate}
          className="fixed top-0 left-4 right-0 z-20 h-16 pt-8"
          style={{ backgroundColor: "#f1f2f5" }}
        >
          <img src={BackIcon} alt="backIcon" />
        </div>
      )}
      <h1 className={`text-3xl text-extrabold ${error ? "mt-16" : "mt-20"}`}>
        Cheque Deposit
      </h1>
      <p className="mt-4">
        Provide the required details to process your cheque deposit
      </p>
      <div className="mt-8 flex flex-col">
        <small className="">Own accounts deposit</small>
        <Select
          required={true}
          value={selectedAccount}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={"Select account"}
          isDisabled={false}
          name="Own accounts deposit"
          onChange={handleChange}
          options={selectOptions}
          placeholder={
            <div className="flex">
              <img src={SelectIcon} alt="select icon" className="mr-2" /> Select
              account
            </div>
          }
          isSearchable={false}
        />
        <p className="my-4">Upload clear image of cheque </p>
        <div
          onClick={() => inputRef.current.click()}
          className="mt-2  border border-neutral-500 rounded-md"
        >
          {selectedImage ? (
            <div>
              <img src={selectedImage} alt="Uploaded" className="w-full h-48" />
              <p className="bg-gray-200 py-2 text-center">
                Front side of cheque{" "}
              </p>
            </div>
          ) : (
            <div className="border rounded-md">
              <div className=" w-full h-48 flex justify-center items-center bg-white border rounded-md">
                <img src={Add} alt="add image" />
              </div>
              <p className="bg-gray-200 py-2 text-center border rounded-md">
                Front side of cheque
              </p>
            </div>
          )}
          <input
            required={true}
            type="file"
            accept=".jpg, .jpeg, .png"
            ref={(ref) => (inputRef.current = ref)}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </div>
        <div
          onClick={() => secondInputRef.current.click()}
          className="mt-8 border rounded-md border-neutral-500"
        >
          {secondSelectedImage ? (
            <div>
              <img
                src={secondSelectedImage}
                alt="Uploaded"
                className="w-full h-48"
              />
              <p className="bg-gray-200 py-2 text-center">
                Back side of cheque{" "}
              </p>
            </div>
          ) : (
            <div className=" border rounded-md">
              <div className="w-full h-48 flex justify-center items-center bg-white border rounded-md">
                <img src={Add} alt="add image" />
              </div>
              <p className="bg-gray-200 py-2 text-center border-b rounded-md">
                Back side of cheque{" "}
              </p>
            </div>
          )}
          <input
            required={true}
            type="file"
            accept=".jpg, .jpeg, .png"
            ref={(ref) => (secondInputRef.current = ref)}
            style={{ display: "none" }}
            onChange={handleSecondImageUpload}
          />
        </div>
      </div>
      <div className="mt-12 flex justify-end">
        <button
          style={{ backgroundColor: "#FB5621" }}
          className="text-white p-4 rounded-md w-56"
          onClick={handleproceed}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default ChequeDeposit;
