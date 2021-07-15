import React, { useState, Fragment } from "react";
import "./TableHeader.css";
import { CSVLink } from "react-csv";
import { ImFolderDownload } from "react-icons/im";
import { BiUpArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";

const TableHeader = (props) => {
  const [isTable, setIsTable] = useState(false);
  const toggleTable = () => {
    setIsTable((prev) => !prev);
  };

  const data = props.order.orders;
  const headers = [
    { label: "Product Num", key: "productID" },
    { label: "Product Description", key: "ProdDesc" },
    { label: "Product Category", key: "category" },
    { label: "Order Quantity", key: "OrderQuantity" },
    { label: "Batched By", key: "batchedby" },
  ];

  const csvReport = {
    filename: "Report.csv",
    headers: headers,
    data: data,
  };

  return (
    <Fragment>
      <div className="headercontainer">
        <div className="ordercontainer">
          <div className="orderidcontainer" onClick={() => toggleTable()}>
            <h3 className="oderid">{props.id}</h3>
            {isTable ? <BiUpArrow /> : <BiDownArrow />}
          </div>
          <div className="batchedby">
            <div className="imagecontainer">
              <img
                className="profileimage"
                width="106"
                height="106"
                src={props.image}
                alt=""
              />
            </div>
            <div className="nameandtime">
              <h4 className="name">{props.name}</h4>
              <p className="time">
                {props.day}, {props.date}, {props.time}
              </p>
            </div>
          </div>
          <div className="csv">
            <CSVLink {...csvReport}>
              {/* <i className="fas fa-download"></i> */}
              <ImFolderDownload></ImFolderDownload>
            </CSVLink>
          </div>
        </div>
      </div>
      {isTable && (
        <table className="items">
          <thead>
            <tr>
              <th></th>
              <th>Agri-Input Category</th>
              <th>Product Image</th>
              <th>Product Description</th>
              <th>Order Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{props.children}</tbody>
        </table>
      )}
    </Fragment>
  );
};

export default TableHeader;
