import Contacts from "../../components/contacts/Contacts";
import Maps from "../../components/map/Maps";
import Social from "../../components/social/Social";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <Contacts />
      <Maps />
      <Social />
    </div>
  );
};

export default Contact;
