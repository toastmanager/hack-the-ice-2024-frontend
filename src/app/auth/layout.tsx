import Image from "next/image";
import logo from "../../../public/logo.svg";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="grid grid-flow-col grid-cols-2 h-full w-full">
      <section className="h-full w-full bg-primary hidden md:flex justify-center items-center">
        <div className="w-96 h-96 bg-white rounded-3xl flex justify-center items-center">
          <Image alt="Logo" src={logo} />
        </div>
      </section>
      {children}
    </main>
  );
};

export default AuthLayout;
