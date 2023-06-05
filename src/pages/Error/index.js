import { ButtonText, SectionTitle } from "components/UI/Typography";
import { Wrapper } from "./styled";
import PropTypes from "prop-types";
import Button from "components/UI/Button";
import { useNavigate } from "react-router-dom";

function Error({ isErrorPage }) {
  const navigate = useNavigate();
  if (isErrorPage) {
    return (
      <Wrapper>
        <SectionTitle>Something went wrong</SectionTitle>
        <Button onClick={() => navigate(0)}>
          <ButtonText>Go Back</ButtonText>
        </Button>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <SectionTitle>Page not found :(</SectionTitle>
    </Wrapper>
  );
}

Error.propTypes = {
  isErrorPage: PropTypes.bool,
};

export default Error;
