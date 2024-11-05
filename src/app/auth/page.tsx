import Image from "next/image";
import logo from "../../../public/logo.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import LoginSection from "./login-section";
import RegisterSection from "./register-section";

const AuthPage = () => {
  return (
    <main className="block md:grid grid-flow-col grid-cols-2 h-full w-full">
      <section className="h-full w-full bg-primary hidden md:flex justify-center items-center">
        <div className="w-96 h-96 bg-white rounded-3xl flex justify-center items-center">
          <Image alt="Logo" src={logo} />
        </div>
      </section>
      <section className="bg-card h-full w-full flex">
        <Tabs className="m-auto w-[400px]" defaultValue="login">
          <TabsList className="w-full bg-card justify-start mb-4">
            <TabsTrigger
              value="login"
              className="w-44 justify-start text-xl font-bold"
            >
              Вход
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="w-44 justify-start text-xl font-bold"
            >
              Регистрация
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginSection />
          </TabsContent>
          <TabsContent value="register">
            <RegisterSection />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default AuthPage;
