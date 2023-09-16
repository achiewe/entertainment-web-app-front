import styled from "styled-components";

const FullEntertainment = (): JSX.Element => {
  return (
    <EntertainmentCont>
      <h2> Recommended for you</h2>
    </EntertainmentCont>
  );
};

const EntertainmentCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  gap: 24px;
`;

export default FullEntertainment;
