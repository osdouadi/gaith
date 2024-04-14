import { BellRing, Loader, Mail, User } from "lucide-react";
import React from "react";
import Input from "./Input";
import Button from "./Button";

function SubscriptionForm({
  userName,
  setUserName,
  userEmail,
  setUserEmail,
  handleSubmit,
  subscriptionPending,
}) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="grid gap-6 mb-6 md:grid-cols-2 sm:w-[60%] md:w-full mx-auto">
        <div>
          <Input
            label="إسم المستخدم"
            icon={<User />}
            placeHolder="قم بإدخال إسم مستخدم"
            value={userName}
            setterFunction={setUserName}
          />
        </div>
        <div>
          <Input
            label="البريد الإلكتروني"
            icon={<Mail />}
            placeHolder="قم بإدخال البريد الإلكتروني"
            value={userEmail}
            setterFunction={setUserEmail}
          />
        </div>
      </div>
      <Button color="text-white" bgColor="bg-red-300">
        إشتراك الآن
        {!subscriptionPending ? (
          <span className="animate-pulse !duration-300">
            <BellRing />
          </span>
        ) : (
          <span className="animate-spin !duration-300">
            <Loader />
          </span>
        )}
      </Button>
    </form>
  );
}

export default SubscriptionForm;
