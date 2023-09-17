import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Button } from "antd";
import axios from "axios";

const Checkout = ({ post }) => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              //   value: 1000,
              value: post.insertPrice,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (err) => {
    alert(err);
  };

  useEffect(() => {
    if (success) {
      //   alert("Payment successful!!");
      const fetchFile = async () => {
        try {
          const res = await axios.get(
            `http://localhost:5000/file/${post.answer}`
          );

          // Create a Blob object from the byte array
          const bl = res.data.length;
          const buffer = new ArrayBuffer(bl);
          let chars = new Uint8Array(buffer);
          for (let i = 0; i < bl; i++) chars[i] = res.data.charCodeAt(i);

          // application/x-zip-compressed - winrar archive
          // application/x-msdownload - windows executable files

          const file = new File([buffer], "filename.exe", {
            type: "application/x-msdownload",
          });

          // Generate a temporary URL for the blob
          const url = URL.createObjectURL(file);
          console.log(file, url);

          // Create a link element and set its attributes
          const link = document.createElement("a");
          link.href = url;
          link.download = post.answer; // Specify the desired filename with extension

          // Programmatically click the link to trigger the download
          link.click();
        } catch (e) {
          console.log(e);
        }
      };
      fetchFile();
      console.log("Order successful . Your order id is--", orderID);
    }
  }, [success]);

  console.log(process.env.CLIENT_ID);

  return (
    <PayPalScriptProvider options={{ "client-id": process.env.CLIENT_ID }}>
      <div>
        <div className="wrapper">
          <div className="product-info">
            <div className="product-price-btn">
              <br></br>

              <div>
                <Button
                  block
                  onClick={() => setShow(true)}
                  style={{ fontWeight: "bold" }}
                >
                  Download this answer instantly at {post.insertPrice}$
                </Button>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        {show ? (
          <PayPalButtons
            style={{ layout: "vertical" }}
            fundingSource="paypal"
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        ) : null}
      </div>
    </PayPalScriptProvider>
  );
};

export default Checkout;
