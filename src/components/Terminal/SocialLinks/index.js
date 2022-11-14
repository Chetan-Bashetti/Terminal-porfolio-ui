import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 1em;
  margin: 0.5em 0;
  border: 1px solid;
  width: fit-content;
  flex-direction: column;
`;

const LinksWrapper = styled.div`
  display: flex;
  line-height: 1.5;
`;
const LinkKey = styled.div``;

const LinkUrl = styled.a`
  cursor: pointer;
  color: limegreen;
  margin-left: 0.5em;
`;

const SocialLinks = ({ socialLinks = [] }) => {
  return (
    <Wrapper>
      {socialLinks &&
        socialLinks.length > 0 &&
        socialLinks.map((eachLink, id) => {
          return (
            <LinksWrapper key={id}>
              <LinkKey>{eachLink.platform}</LinkKey> :
              <LinkUrl href={eachLink.link} target="_blank">
                {eachLink.link}
              </LinkUrl>
            </LinksWrapper>
          );
        })}
    </Wrapper>
  );
};
export default SocialLinks;
