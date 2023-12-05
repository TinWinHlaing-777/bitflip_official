import { useNavigate } from "react-router-dom";
import {
  LegalInfoContainer,
  LegalInfoNav,
  LegalHeaderContainer,
  LegalMainContainer,
} from "../../styles/Legal/Legalinfo.style";

const LegalInfoData = [
  {
    title: "Mailing Address",
    body: "At present, Bitflip operates exclusively online, delivering services digitally. While we don't have a physical office location, our virtual doors are always open to address your needs. We are excited to share that we have plans to establish a physical office in the hear future. Stay tuned for updates on our office location and upcoming meetups, as we look forward to the opportunity to connect with our valued customers and clients in person.",
  },
  {
    title: "Business Hours",
    body: "At present, Bitflip operates exclusively online, delivering services digitally. While we don't have a physical office location, our virtual doors are always open to address your needs. We are excited to share that we have plans to establish a physical office in the hear future. Stay tuned for updates on our office location and upcoming meetups, as we look forward to the opportunity to connect with our valued customers and clients in person.",
  },
  {
    title: "Emergency Contact",
    body: "At present, Bitflip operates exclusively online, delivering services digitally. While we don't have a physical office location, our virtual doors are always open to address your needs. We are excited to share that we have plans to establish a physical office in the hear future. Stay tuned for updates on our office location and upcoming meetups, as we look forward to the opportunity to connect with our valued customers and clients in person.",
  },
  {
    title: "Contact with us",
    body: "At present, Bitflip operates exclusively online, delivering services digitally. While we don't have a physical office location, our virtual doors are always open to address your needs. We are excited to share that we have plans to establish a physical office in the hear future. Stay tuned for updates on our office location and upcoming meetups, as we look forward to the opportunity to connect with our valued customers and clients in person.",
  },
  {
    title: "Feedback",
    body: "At present, Bitflip operates exclusively online, delivering services digitally. While we don't have a physical office location, our virtual doors are always open to address your needs. We are excited to share that we have plans to establish a physical office in the hear future. Stay tuned for updates on our office location and upcoming meetups, as we look forward to the opportunity to connect with our valued customers and clients in person.",
  },
];

const Legalinfo = () => {
  const navigate = useNavigate();
  return (
    <LegalInfoContainer>
      <LegalInfoNav onClick={() => navigate("/")}>
        <i className="ri-arrow-left-s-line back__icon"></i>
        <p className="back__text">Back</p>
      </LegalInfoNav>
      <LegalHeaderContainer>
        <h2 className="legalHeader">Contact Details</h2>
        <p className="small__legal__header">Last Updated on: 30th Nov 2023</p>
        <p className="legal__paragraph">
          Thank you for considering Bitflip, an organization run by a team of{" "}
          <br /> dedicated freelancing professionals, for your ICT services.{" "}
          <br />
          For seamless communication and assistance, please find our contact
          details below.
        </p>
      </LegalHeaderContainer>
      <LegalMainContainer>
        <ul className="legal__list__container">
          {LegalInfoData.map((info, index) => (
            <li key={index} className="legal__list__item">
              <p className="legal__list__text">{info.title}</p>
            </li>
          ))}
        </ul>
        <div className="legal__text__container">
          <p className="legal__text__details">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eius
            dolore neque earum velit nam quia quo nobis excepturi. Molestias
            praesentium laudantium facere quia aliquam harum commodi nesciunt
            provident officia! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Ipsa quaerat totam beatae commodi fugit
            voluptatem? Natus similique dicta velit magni quo sint, architecto
            at exercitationem veritatis, quisquam modi ipsa facere.
          </p>
        </div>
      </LegalMainContainer>
    </LegalInfoContainer>
  );
};

export default Legalinfo;
