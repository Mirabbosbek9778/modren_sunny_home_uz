import { Facebook, Instagram, Youtube } from "../../assets";
import Telegram from "../../assets/icons/telegram.svg";
import { Cons, Socialstyle, TextSocial } from "../body/style";
import { Wrapper } from "../modal/style";

const Social = () => {
  return (
    <Wrapper className="bg-[#f0f2f4] flex justify-center pb-[150px]">
      <Socialstyle>
        <TextSocial className="w-[327px]">
          Подписывайтесь на наши соц сетях и будьте в курсе о новостях
        </TextSocial>
        <div className="flex gap-3">
          <Cons>
            <img src={Telegram} alt="Telegram" />
            <TextSocial size="true">
              <a href="https://t.me/sherbee535" className="hoverSocial">
                User name
              </a>
            </TextSocial>
          </Cons>
          <Cons>
            <img src={Instagram} alt="Instagram" />
            <TextSocial size="true">
              <a href="" className="hoverSocial">
                User name
              </a>
            </TextSocial>
          </Cons>
          <Cons>
            <img src={Facebook} alt="Facebook" />
            <TextSocial size="true">
              <a href="" className="hoverSocial">
                User name
              </a>
            </TextSocial>
          </Cons>
          <Cons>
            <img src={Youtube} alt="Youtube" />
            <TextSocial size="true">
              <a href="" className="hoverSocial">
                User name
              </a>
            </TextSocial>
          </Cons>
        </div>
      </Socialstyle>
    </Wrapper>
  );
};

export default Social;
