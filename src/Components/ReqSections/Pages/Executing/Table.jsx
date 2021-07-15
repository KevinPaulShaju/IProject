import React, { Fragment, useState } from "react";
import "./Table.css";
import data from "../../../Assets/Data";
import Modal from "../../../UIElements/Modal/Modal";
import TableHeader from "./TableHeader";

const Table = () => {
  const [isModal, setIsModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const setModal = (product) => {
    setSelectedItem(product);
    setIsModal(true);
  };

  const cancelModal = () => {
    setIsModal(false);
    setSelectedItem(null);
  };

  return (
    <Fragment>
      {isModal && (
        <Modal
          onClick={cancelModal}
          isModal={isModal}
          header={selectedItem.category}
          description={selectedItem.ProdDesc}
          quantity={selectedItem.OrderQuantity}
          image={selectedItem.ProdImage}
        ></Modal>
      )}
      <div className="table-container">
        <div className="title">
          <h4>Executing Agri-Input Orders</h4>
          <h4>Batched By</h4>
        </div>
        {data.map((order, i) => {
          return (
            <React.Fragment key={order.orderId}>
              <TableHeader
                order={order}
                key={i}
                id={order.orderId}
                name={order.batchedby}
                day={order.day}
                date={order.date}
                time={order.time}
                image={order.imageUrl}
              >
                {order.orders.map((product) => {
                  return (
                    <tr key={product.productID}>
                      <td>{product.productID}</td>
                      <td>{product.category}</td>
                      <td>
                        <div className="img-container">
                          <img
                            width="50"
                            height="50"
                            src={product.ProdImage}
                            alt=""
                          ></img>
                        </div>
                      </td>
                      <td>{product.ProdDesc}</td>
                      <td>{product.OrderQuantity}</td>
                      <td>
                        <i
                          onClick={() => {
                            setModal(product);
                          }}
                          className="fas fa-external-link-alt icon"
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </TableHeader>
            </React.Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Table;
