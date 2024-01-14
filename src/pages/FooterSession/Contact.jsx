import Legalinfo from "../../components/Legal/Legalinfo";

const Contact = () => {
  const dataArray = [
    {
      title: "Mailing Address",
      body: (
        <>
          At present, Bitflip operates exclusively online, delivering services
          digitally. While we don't have a physical office location, our virtual
          doors are always open to address your needs. We are excited to share
          that we have plans to establish a physical office in the hear future.
          Stay tuned for updates on our office location and upcoming meetups, as
          we look forward to the opportunity to connect with our valued
          customers and clients in person.
        </>
      ),
    },
    {
      title: "Business Hours",
      body: (
        <>
          Our regular business hours are from{" "}
          <span className="span__text">9 Am to 7 PM</span> (GMT +06:30).
          However, please note that you can contact us anytime, and we'll strive
          to respond to your inquries promptly
        </>
      ),
    },
    {
      title: "Emergency Contact",
      body: (
        <>
          For urgent matters requiring immediate attention, please use the
          provided phone number <br />
          <br />
          <span className="span__text">+95 9 264 448 664</span> <br />
          <br />
          We understand that the importance of addressing is critical issues
          promptly and will do our best to assist you as quickly as possible.
        </>
      ),
    },
    {
      title: "Contact with us",
      body: (
        <>
          Stay updated on our latest offerings, industry insights, and
          announcements by connecting with BitFlip on various platforms.
          <br />
          <br />
          <i className="ri-facebook-fill contact__icons"></i>
          <i className="ri-youtube-fill contact__icons"></i>
          <i className="ri-instagram-line contact__icons"></i>
          <i className="ri-discord-fill contact__icons"></i>
        </>
      ),
    },
    {
      title: "Feedback",
      body: (
        <>
          We value your feedback and are always looking for ways to enhance our
          services. If you have suggestions or comments, please don't hesitate
          to share them with us via email. <br />
          <br />
          <span className="span__text">bitflipofficial@gmail.com</span>
        </>
      ),
    },
  ];
  const header = "Contact Details";
  const body = (
    <>
      Thank you for considering BitFlip, an organization run by a team of <br />
      dedicated freelancing professionals, for your ICT services. <br />
      For seamless communication and assistance, please find our contact details
      below.
    </>
  );
  return (
    <>
      <Legalinfo
        header={header}
        body={body}
        data={dataArray}
        route="/privacy-policy"
      />
    </>
  );
};

export default Contact;
