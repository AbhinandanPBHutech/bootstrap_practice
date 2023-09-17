import { useState } from "react";
import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState("none");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const razorpayPayment = async (data) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      console.log("Something went wrong..., Please try again...");
      return;
    }

    const options = {
      key: "rzp_test_yRs15l53NJNQ7H",
      amount: 100,
      currency: "INR",
      name: "Bank Offers POC",
      description: "Product Purchase",
      image: "",
      // order_id: "",
      prefill: {
        name: "",
        email: "",
      },
      //extra config for bank offerce POC
      config: {
        display:
          selectedOption !== "none" //(true/false) icici not there in selected coupon code
            ? {
                blocks: {
                  utib: {
                    //name for Axis block
                    name: "Pay using Axis Bank",
                    instruments: [
                      {
                        method: "card",
                        issuers: [selectedOption],
                      },
                      {
                        method: "netbanking",
                        banks: ["UTIB"],
                      },
                    ],
                  },
                  other: {
                    //  name for other block
                    name: "Other Payment modes",
                    instruments: [
                      // {
                      //   method: "card",
                      //   issuers: ["ICIC"],
                      // },
                      // {
                      //   method: "netbanking",
                      // },
                    ],
                  },
                },
                hide: [
                  {
                    method: "upi",
                  },
                ],
                sequence: ["block.utib", "block.other"],
                preferences: {
                  show_default_blocks: false, // Should Checkout show its default blocks?
                },
              }
            : {},
      },

      handler: function (response) {
        console.log("payment_id", response.razorpay_payment_id);
      },
      modal: {
        escape: false,
        ondismiss: function () {},
      },
      notes: {
        address: "notes",
      },
      theme: {
        color: "green",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ color: "green" }}>
        Select The Bank to Apply Bank Coupon{" "}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>
          <input
            type="radio"
            value="ICIC"
            checked={selectedOption === "ICIC"}
            onChange={handleOptionChange}
          />
          ICICI
        </label>
        <label>
          <input
            type="radio"
            value="Axis"
            checked={selectedOption === "Axis"}
            onChange={handleOptionChange}
          />
          AXIS
        </label>
        <label>
          <input
            type="radio"
            value="HDFC"
            checked={selectedOption === "HDFC"}
            onChange={handleOptionChange}
          />
          HDFC
        </label>
        <label>
          <input
            type="radio"
            value="none"
            checked={selectedOption === "none"}
            onChange={handleOptionChange}
          />
          NONE
        </label>
      </div>
      <button
        style={{ cursor: "pointer", padding: "10px 30px" }}
        onClick={() => razorpayPayment()}
      >
        PAY NOW
      </button>
    </div>
  );
}

export default App;
