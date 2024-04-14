"use client";

import React, { useState } from "react";
import bgImage from "/public/images/bg-red.jpg";
import Image from "next/image";
import SectionTitle from "../../_ui/SectionTitle";
import Input from "../../_ui/Input";
import { Loader, Mail, Phone, Send, User } from "lucide-react";
import MessageAPI from "../../../_api/MessageAPI";
import { useMutation } from "@tanstack/react-query";
import Button from "../../_ui/Button";

function ContactSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const {
    mutate: mutateMessage,
    isPending: messagePending,
    isError: messageError,
  } = useMutation({
    mutationFn: () => {
      return MessageAPI.createMessage(fullName, email, phone, message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutateMessage({ fullName, email, phone, message });
  };
  return (
    <section>
      <div className="relative w-full h-[250px]">
        <div className="absolute w-full h-full bg-black/20 z-10"></div>
        <Image
          src={bgImage}
          alt="contact"
          className="absolute w-full h-full bg-center z-[1]"
          width={1000}
          height={1000}
        />
        <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 text-center w-full px-6">
          <div>
            <h3 className="text-center text-white text-xl lg:text-3xl font-bold my-4">
              هل لديك اسئلة لغيث؟
            </h3>
          </div>
          <div className="text-white text-lg lg:text-2xl xl:text-2xl leading-relaxed">
            <p>
              يمكنكم التواصل مباشرة مع إدارة فريق غيث من خلال إستمارة التواصل
              ادناه
            </p>
          </div>
        </div>
      </div>

      <div className="section-content">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-1 mx-auto py-5 px-8 lg:max-w-3xl xl:max-w-3xl items-center sm:w-[60%] md:w-full">
            <div>
              <Input
                label="الإسم الكامل"
                placeHolder="قم بكتابة الإسم الكامل هنا..."
                icon={<User />}
                value={fullName}
                setterFunction={setFullName}
              />
            </div>
            <div>
              <Input
                label="البريد الإلكتروني"
                placeHolder="قم بكتابة البريد الإلكتروني هنا..."
                icon={<Mail />}
                value={email}
                setterFunction={setEmail}
              />
            </div>
            <div>
              <Input
                label="رقم الهاتف"
                placeHolder="قم بكتابة رقم الهاتف هنا..."
                icon={<Phone />}
                value={phone}
                setterFunction={setPhone}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm lg:text-lg font-medium text-black"
              >
                الرسالة
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm lg:text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="قم بكتابة رسالتك هنا..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="mx-auto flex justify-center mt-6 pb-10">
            <Button color="text-white" bgColor="bg-primary">
              <span>إرسال الرسالة</span>
              {!messagePending ? (
                <Send />
              ) : (
                <span className="animate-spin !duration-300">
                  <Loader />
                </span>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
