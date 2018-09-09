import React from 'react'

const PersonComponent = (props) => {
  return (
    <div>
      <h1 className="heading-main actor-name">{props.name}</h1>
      <div className="biodata">
        <div className="row">
          <div className="col-md-2">
            <div className="biodata-photo">
              <div className="overlay">
                <div className="overlay-icon"><i className="fa fa-user fwhite"></i></div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="biodata-detail fwhite">
              <ul>
                <li>
                  <div className="biodata-detail-left">Height :</div>
                  <div className="biodata-detail-right">{props.tinggi}</div>
                </li>
                <li>
                  <div className="biodata-detail-left">Mass :</div>
                  <div className="biodata-detail-right">{props.berat}</div>
                </li>
                <li>
                  <div className="biodata-detail-left">Hair Color :</div>
                  <div className="biodata-detail-right">{props.wrambut}</div>
                </li>
                <li>
                  <div className="biodata-detail-left">Skin Color :</div>
                  <div className="biodata-detail-right">{props.wkulit}</div>
                </li>
                <li>
                  <div className="biodata-detail-left">Birth Year :</div>
                  <div className="biodata-detail-right">{props.thnlahir}</div>
                </li>
                <li>
                  <div className="biodata-detail-left">Gender :</div>
                  <div className="biodata-detail-right">{props.kelamin}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonComponent;
