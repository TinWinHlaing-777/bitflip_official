import Legalinfo from "../../components/Legal/Legalinfo";

const Privacy = () => {
  const dataArray = [
    {
      title: (
        <>
          User Creation&nbsp;&nbsp;&nbsp;
          <br />
          and Account Management
        </>
      ),
      body: (
        <>
          <span className="span__text">User Account Creation</span>
          <br />
          Users have the option to create accounts using Facebook or Google
          credentials. BitFlip ensures the privacy and security of user data and
          does not share it with any third parties. User data is kept private
          and secure within our site. <br />
          <br />
          <span className="span__text">Account Management</span>
          <br />
          We collect certain information during the account creation process to
          facilitate the management of your BitFlip account. This includes but
          is not limited to your name, email address, and login credentials.
          This information is essential for account authentication, security,
          and communication related to your account.
        </>
      ),
    },
    {
      title: "Data Handling and Security",
      body: (
        <>
          <span className="span__text">Data Collection and Usage</span>
          <br />
          BitFlip may collect certain information during account creation and
          usage, such as username, password, Gmail, region address and payment
          information. This data is used for account management and personalized
          experience.
          <br />
          <br />
          <span className="span__text">Data Security</span>
          <br />
          BitFlip employs industry-standard security measures to protect user
          data from anauthorized access, disclosure, alteation, and destruction.
          We use encryption and secure protocols to safeguard your information.
        </>
      ),
    },
    {
      title: (
        <>
          Personalization and&nbsp;&nbsp;&nbsp;
          <br />
          Third-Party Involvment
        </>
      ),
      body: (
        <>
          <span className="span__text">Personalized Experience</span>
          <br />
          To enhance your experience on the BitFlip paltform, we collect data to
          personalize the content and services we provide. This may include
          analyzing your usage patterns, perfrences, and interacions with our
          platform. The data enables us to tailor our service, recommendations,
          and communications to better suit your indivudual need and interestes.
          <br />
          <br />
          <span className="span__text">Third-Party Services</span>
          <br />
          BitFlip may integrate with third-party services, such as Facebook or
          Google for acctount creation, but we do not share user data with these
          services.
        </>
      ),
    },
    {
      title: "Special Considerations",
      body: (
        <>
          <span className="span__text">Children's Privacy</span>
          <br />
          BitFlip does not knowingly collect personal information from children
          under the age of 13. If you are a parent or guardian and belive that
          your child has provided us with personal information, please contact
          us.
        </>
      ),
    },
  ];

  const header = "Privacy Policy";
  const body = (
    <>
      Your privacy is important to us.
      <br />
      This Privacy Policy outlines how BitFlip collects, uses, and <br />
      protacts your personal information whent you use our website.
    </>
  );
  return (
    <>
      <Legalinfo
        header={header}
        body={body}
        data={dataArray}
        route="/user-conduct"
      />
    </>
  );
};

export default Privacy;
