import { AiFillPhone, AiFillMail, AiFillEnvironment } from "react-icons/ai";
import "../styles/components/information.sass";

const Infomartion = () => {
  return (
    <section id="information">
      <div className="information-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(11) 97471-0705</p>
        </div>
      </div>
      <div className="information-card">
        <AiFillMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>pedrohs.work@gmail.com</p>
        </div>
      </div>
      <div className="information-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>São Paulo / SP</p>
        </div>
      </div>
    </section>
  );
};
export default Infomartion;
