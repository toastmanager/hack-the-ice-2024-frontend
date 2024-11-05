import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <section className="w-full bg-card px-3 py-5">
      <div className="m-auto max-w-[1200px] flex flex-wrap gap-3 text-sm justify-between items-center leading-7">
        <div className="flex flex-col">
          <span className="pb-2 text-lg font-semibold text-foreground-alternative">
            Главное
          </span>
          <a href="#">Все авторские туры</a>
          <a href="#">Владельцам туров</a>
          <a href="#">Поддержка</a>
          <a href="#">Правила оплаты</a>
          <a href="#">Реквизиты организации</a>
        </div>

        <div>
          <span className="text-base">Помощь путешественнику</span>
          <div className="flex items-center gap-1 mt-2">
            <Icon
              icon="ic:baseline-mail"
              className="text-foreground-alternative"
            />
            <span>info@yatvoiorientir.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon
              icon="mage:phone-fill"
              className="text-foreground-alternative"
            />
            <span>+7(999)173-80-47</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon
              icon="fa-solid:building"
              className="text-foreground-alternative"
            />
            <span>г. Якутск улица Ленина 1, каб 1488</span>
          </div>
        </div>

        <div>
          <span className="text-base">Помощь организатору</span>
          <div className="flex items-center gap-1 mt-2">
            <Icon
              icon="ic:baseline-mail"
              className="text-foreground-alternative"
            />
            <span>info@yatvoiorientir.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon
              icon="mage:phone-fill"
              className="text-foreground-alternative"
            />
            <span>+7(999)173-80-47</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon
              icon="fa-solid:building"
              className="text-foreground-alternative"
            />
            <span>г. Якутск улица Ленина 1, каб 1488</span>
          </div>
        </div>

        <div className="">
          <span className="text-base">Платежные системы</span>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div className="bg-background flex items-center justify-center px-4 py-3 rounded-lg">
              <Icon
                icon="logos:visa"
                width="40"
                className="text-foreground-alternative"
              />
            </div>
            <div className="bg-background flex items-center justify-center px-4 py-3 rounded-lg">
              <Icon icon="logos:mastercard" width="40" />
            </div>
            <div className="bg-background flex items-center justify-center px-4 py-3 rounded-lg">
              <span>МИР</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-center mt-12">
        <span className="text-base font-semibold text-gray-500">
          Все права защищены © 2024 Якутия: Твой ориентир
        </span>
      </div>
    </section>
  );
};

export default Footer;
