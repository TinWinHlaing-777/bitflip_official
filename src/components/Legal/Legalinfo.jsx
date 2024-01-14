import {
  LegalInfoContainer,
  LegalHeaderContainer,
  LegalMainContainer,
} from "../../styles/Legal/Legalinfo.style";
import { useState } from "react";

const Legalinfo = (props) => {
  // eslint-disable-next-line react/prop-types
  const { header, body, data } = props;
  const [selectedTitle, setSelectedTitle] = useState(data[0].title);

  const selectedInfo = data.find((info) => info.title === selectedTitle);

  return (
    <LegalInfoContainer>
      <LegalHeaderContainer>
        <h2 className="legalHeader">{header}</h2>
        <p className="small__legal__header">Last Updated on: 30th Nov 2023</p>
        <p className="legal__paragraph">{body}</p>
      </LegalHeaderContainer>
      <LegalMainContainer>
        <ul className="legal__list__container">
          {data.map((info, index) => (
            <li
              key={index}
              className={`legal__list__item ${
                info.title === selectedTitle ? "active" : ""
              }`}
              onClick={() => setSelectedTitle(info.title)}
            >
              <p className="legal__list__text">
                <span className="list__text">{info.title}</span>
              </p>
            </li>
          ))}
        </ul>
        <div className="legal__text__container">
          {selectedInfo && (
            <p className="legal__text__details">{selectedInfo.body}</p>
          )}
        </div>
      </LegalMainContainer>
    </LegalInfoContainer>
  );
};

export default Legalinfo;
