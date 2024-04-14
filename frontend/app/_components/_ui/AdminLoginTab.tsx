import React, { useState } from "react";
import Input from "./Input";
import { ArrowRight, Key, Mail } from "lucide-react";
import Link from "next/link";
import { useAdmin } from "../../_hooks/useAdmin";

function AdminLoginTab({ handleReturnBack }: { handleReturnBack: () => void }) {
  const { adminLogin, isLoading } = useAdmin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault()     
      await adminLogin(email, password);

    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="w-full px-4">
      <form className="pb-8 flex flex-col gap-7 w-full">
        <Input
          label="البريد الإلكتروني"
          icon={<Mail color="#999999" />}
          placeHolder="قم بكتابة البريد الإلكتروني هنا..."
          value={email}
          setterFunction={setEmail}
        />
        <Input
          label="كلمة المرور"
          icon={<Key color="#999999" />}
          placeHolder="قم بكتابة كلمة المرور هنا..."
          value={password}
          setterFunction={setPassword}
        />
        <div className="flex items-center gap-5">
          <button
            className="bg-primary text-white py-3 text-lg rounded-lg w-1/2 flex items-center justify-center gap-3 mt-5"
            onClick={handleLogin}
          >
            تسجيل الدخول
          </button>
          <button
            className="bg-primary text-white py-3 text-lg rounded-lg w-1/2 flex items-center justify-center gap-3 mt-5"
            onClick={handleReturnBack}
          >
            عودة للوراء
            <ArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminLoginTab;
