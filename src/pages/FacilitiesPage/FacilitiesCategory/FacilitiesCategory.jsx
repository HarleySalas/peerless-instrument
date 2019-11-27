import React from "react";
import "./FacilitiesCategory.scss";

import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";
import { ReactComponent as CloseIcon } from "../assets/close-icon.svg";

import { useToggle } from "../../../utils";

import Modal from "../../../components/Modal/Modal";

const FacilitiesCategory = props => {
  const [open, toggle] = useToggle(false);
  return (
    <React.Fragment>
      <div className="facilitiescategory">
        <div className="facilitiescategory__box" onClick={toggle}>
          {props.children}
          <h3 className="facilitiescategory__title">{props.title}</h3>
          <ArrowDown className="facilitiescategory__arrow" />
        </div>
      </div>
      {open && (
        <Modal onClickOutside={toggle}>
          <div className="facilitiescategory__modal-wrapper">
            <div className="container">
              <div className="facilitiescategory__modal-heading-wrapper">
                <button className="facilitiescategory__modal-close" onClick={toggle}>
                  <CloseIcon />
                </button>
                {props.children}
              </div>
              <h2 className="facilitiescategory__modal-heading-title">{props.title} Equipment List</h2>
              <div className="facilitiescategory__modal-table-container">
                <table className="facilitiescategory__modal-table">
                  <tbody>
                    <tr>
                      <th className="facilitiescategory__modal-table-head">Model</th>
                      <th className="facilitiescategory__modal-table-head">Type</th>
                      <th className="facilitiescategory__modal-table-head">Spec.</th>
                      <th className="facilitiescategory__modal-table-head">QTY</th>
                    </tr>
                    {props.list.map((list, index) => (
                      <tr className="facilitiescategory__modal-table-row" key={index}>
                        <td className="facilitiescategory__modal-table-item" dangerouslySetInnerHTML={{ __html: list.model }}></td>
                        <td className="facilitiescategory__modal-table-item" dangerouslySetInnerHTML={{ __html: list.type }}></td>
                        <td className="facilitiescategory__modal-table-item" dangerouslySetInnerHTML={{ __html: list.spec }}></td>
                        <td className="facilitiescategory__modal-table-item" dangerouslySetInnerHTML={{ __html: list.qty }}></td>
                      </tr>
                    ))}
                    {/* <tr className="facilitiescategory__modal-table-row">
                    <th className="facilitiescategory__modal-table-item">Item One</th>
                    <th className="facilitiescategory__modal-table-item">2</th>
                  </tr>
                  <tr className="facilitiescategory__modal-table-row">
                    <th className="facilitiescategory__modal-table-item">Item Two</th>
                    <th className="facilitiescategory__modal-table-item">5</th>
                  </tr> */}
                  </tbody>
                </table>
                {props.note && (
                  <>
                    <h3 className="facilitiescategory__modal-note-title">Additional Equipment Notes</h3>
                    <p className="facilitiescategory__modal-note" dangerouslySetInnerHTML={{ __html: props.note }}></p>
                  </>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default FacilitiesCategory;
