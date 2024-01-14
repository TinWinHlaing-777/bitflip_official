import React from "react";
import Legalinfo from "../../components/Legal/Legalinfo";

const Conduct = () => {
  const dataArray = [
    {
      title: (
        <>
          Unlawnful and&nbsp;&nbsp;&nbsp;
          <br />
          Harmful Behavior
        </>
      ),
      body: (
        <>
          <span className="span__text">Illegal Content</span>
          <br />
          Posting, sharing, or promoting illegal or illicit content, including
          but not limited to content that violates local, national, or
          international laws. <br />
          <br />
          <span className="span__text">Threats and Violence</span>
          <br />
          Making threats of violence or promoting any form of physical harm
          towards individuals or groups.
          <br />
          <br />
          <span className="span__text">Malicious Activities</span>
          <br />
          Engaging in any form of hacking, phiching, or other malicious
          activities that compromise the security or integrity of the platform
          or its users.
        </>
      ),
    },
    {
      title: "Inappropriate Expression",
      body: (
        <>
          <span className="span__text">Harassment</span>
          <br />
          Engaging in any form of haressment, including but not limited to
          bullying, intimidation, or the use of offensive language.
          <br />
          <br />
          <span className="span__text">
            Hate Speech and Inappropriate Content
          </span>
          <br />
          Expressing or promoting discrimination, hate speech, or any form of
          prejudice bace on race, ethnicity, gender, religion, or any other
          protected characterisic. Posting or sharing content that is sexually
          explicit, obscene, or otherwise inappropriate for the community.
          <br />
          <br />
          <span className="span__text">Impersonation</span>
          <br />
          Impersonating another person or entity, or falsely claming an
          affiliation with an individual or organization.
        </>
      ),
    },
    {
      title: (
        <>
          Violation of&nbsp;&nbsp;&nbsp;
          <br />
          Rules and Policies
        </>
      ),
      body: (
        <>
          <span className="span__text">Spam and Unwanted Content</span>
          <br />
          Sending unsolicited messages, advertisements, or any form of spam to
          other users.
          <br />
          <br />
          <span className="span__text">Intellectual Property Violations</span>
          <br />
          Violating intellectual property rights, including unauthorized use,
          reproductin, or distribution of copyrighted materials or trademarks.
          <br />
          <br />
          <span className="span__text">Invasion of Privacy</span>
          <br />
          Violating the privacy of others, including sharing personal
          information without consent or engaging in any form of unauthorized
          surveillance
          <br />
          <br />
          <span className="span__text">Abuse of Forums or Discussions</span>
          <br />
          Disrupting or abusing forums, discussions, or any interactive features
          on the platform, including but not limited to spamming or trolling.
        </>
      ),
    },
  ];

  const header = "User Conduct";
  const body = (
    <>
      Users are expected to conduct themselves ethically when
      <br />
      interacting with the BitFlip website and forums. Prohibited activities
      include
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

export default Conduct;
