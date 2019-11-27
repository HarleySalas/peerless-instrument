import React from "react";

import "./HomeClients.scss";

import clients from "./assets/clients.json";
import ClientLogo from "./ClientLogo/ClientLogo";

const HomeClients = () => {
  return (
    <>
      <section className="homeclients">
        <div className="homeclients__blue" />
        {/* <div className="homeclients__container"> */}
        <div className="container homeclients__container">
          <h2 className="homeclients__heading">TRUSTED BY</h2>
          {clients.map((client, index) => (
            <React.Fragment key={index}>
              <a href={`${client.link}`} className="homeclients__logo-wrapper" target="_blank" rel="noopener noreferrer">
                <ClientLogo logo={client.component} className="homeclients__logo" />
              </a>
            </React.Fragment>
          ))}
        </div>
      </section>
      <p className="homeclients__cta-text">
        We look forward to building new client relationships and hope you'll let us show you why these companies trust us.
      </p>
    </>
  );
};

export default HomeClients;
