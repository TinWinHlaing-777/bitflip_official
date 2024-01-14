import React from "react";
import Legalinfo from "../../components/Legal/Legalinfo";

const Terms = () => {
  const dataArray = [
    {
      title: "Guidelines",
      body: (
        <>
          By submitting content to the BitFlip Blog, you grant BitFlip a
          non-exclusive, royalty-free license to use, eproduce, and distribute
          your content. BitFlip reserves the right to moderate and remove any
          content that violates our Bolgging Guidlines or Terms of Use. Users
          may be notified or their content may be taken down withour prior
          notice. Users are encourages to engage in respectful and constructive
          discussions in the comments section. Any form of harassment or
          inappropriate behavior will not be tolerated. BitFlip is not liable
          for the accuracy, coompleteness, or reliability of user-generated
          content. Users bear the responsibility for their posts and comments.
          BitFlip reserves the right to terminate user access to the Blog for
          violaiton for our Blogging Guidlines or Terms of Use.
        </>
      ),
    },
    {
      title: "Reporting Violations",
      body: (
        <>
          If you come across content that violates our Blogging Guidlines or
          Terms of Use, please report it to our moderation team at <br />
          <br />
          <span className="span__text">bitflipofficial@gmail.com</span>
          <br />
          <br />
          For any questions or concerns related to our Blog Informations, please
          contact us at
          <br />
          <br />
          <span className="span__text">blogsupport@bitflip.com</span>
        </>
      ),
    },
  ];
  const header = "Terms of Use";
  const body = (
    <>
      User are responsible for the content they publish on our platform.
      <br />
      Ensure that your posts comply with our Blogging Guidelines and all
      applicable laws.
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

export default Terms;
