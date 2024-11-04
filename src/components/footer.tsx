import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="w-screen w-96 bg-green-400 relative">
            <div className="px-36 pt-4 pb-5 flex grid grid-cols-4 gap-4 ">
                    <div className="space-y-2">
                        <h1 className="pb-5">Главное</h1>
                        <h1>Все авторские туры</h1>
                        <h1>Владельцам туров</h1>
                        <h1>Поддержка</h1>
                        <h1>Правила оплаты</h1>
                        <h1>Реквизиты организации</h1>
                        
                    </div>
                    <div className="space-y-2">
                        <h1 className="pb-5">Помощь путешественнику</h1>
                        <div className="flex items-center">
                            <Icon icon="ic:baseline-mail" /> <h1>info@yatvoiorientir.com</h1>
                        </div>
                        <div className="flex items-center">
                            <Icon icon="mdi:phone" /> <h1>+7(999)173-80-47</h1>
                        </div>
                        <div className="flex items-center">
                            <Icon icon="fa-solid:building" /> <h1>г. Якутск улица Ленина 1, каб 1488</h1>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h1 className="pb-5">Помощь организатору</h1>
                        <div className="flex items-center">
                            <Icon icon="ic:baseline-mail" /> <h1>info@yatvoiorientir.com</h1>
                        </div>
                        <div className="flex items-center">
                            <Icon icon="mdi:phone" /> <h1>+7(999)173-80-47</h1>
                        </div>
                        <div className="flex items-center">
                            <Icon icon="fa-solid:building" /> <h1>г. Якутск улица Ленина 1, каб 1488</h1>
                        </div>
                    </div>
                    <div className="space-y-2">
                    <h1 className="pb-5">Платежные системы</h1>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-card flex items-center justify-center px-4 py-3 rounded-3xl">
                        <Icon icon="logos:visa" width="40" />
                        </div>
                        <div className="bg-card flex items-center justify-center px-4 py-3 rounded-3xl">
                        <Icon icon="logos:mastercard" width="40" />
                        </div>
                        <div className="bg-card flex items-center justify-center px-4 py-3 rounded-3xl">
                        <h1>mir epta</h1>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="absolute bottom-2">
                    <h1>logo here</h1>
                </div>
            </div>

            <div className="w-full text-center mt-12">
          <p className="text-sm text-gray-500">© 2024 Your Company Name. All rights reserved.</p>
          
          
        </div>
      </div>
  );
};

export default Footer;
