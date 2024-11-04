import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const LoginSection = () => {
  return (
    <section>
      <div className="flex gap-4">
        <div>
          <Label>Почта</Label>
          <Input className="bg-background" />
        </div>
        <div>
          <Label>Пароль</Label>
          <Input className="bg-background" />
        </div>
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <Checkbox id="remember-me" className="rounded-[5px]" />
        <label
          htmlFor="remember-me"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Запомнить меня
        </label>
      </div>
      <Button className="w-full mt-4">Войти</Button>
    </section>
  );
};

export default LoginSection;
