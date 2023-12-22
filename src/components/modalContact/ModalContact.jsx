import { Con, Text, Wrapper } from "../modal/style";

const ModalContact = () => {
  return (
    <Wrapper>
      <Con>
        <div className="flex flex-col items-center justify-center gap-[30px]">
          <Text>Позвоните мы всегда на связи!</Text>
          <div></div>
        </div>
      </Con>
    </Wrapper>
  );
};

export default ModalContact;
