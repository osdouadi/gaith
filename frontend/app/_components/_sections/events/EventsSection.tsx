"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "../../_ui/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import EventAPIs from "../../../_api/EventAPIs";
import Pagination from "../../_ui/Pagination";
import EventCard from "../../_ui/EventCard";
import Image from "next/image";
import EventImage from "/public/images/events-section.svg";
import { BellRing } from "lucide-react";

export interface Events {
  _id: string;
  cover: string;
  type: string;
  title: string;
  date: Date;
  plannerType: string;
  planner: string;
  topics: string[];
  __v: number;
}

interface QueryData {
  eventsList: Events[];
  pageCount: number;
}

let isInitialFetch = true;

function EventsSection() {
  const [page, setPage] = useState(1);
  const limit = 3;

  const { data, isLoading, isError, refetch } = useQuery<QueryData>({
    queryKey: ["Events"],
    queryFn: async () => {
      const { data } = await EventAPIs.getPaginatedEvents(page, limit);
      return data;
    },
  });

  useEffect(() => {
    if (isInitialFetch) {
      isInitialFetch = false;
      return;
    }
    refetch();
  }, [refetch, page]);

  return (
    <section className="px-6">
      <SectionTitle
        title="الفعاليات و المناسبات القادمة"
        textColor="text-primary"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {data?.eventsList.map((event, index) => (
          <EventCard
            key={index}
            cover={event.cover}
            type={event.type}
            title={event.title}
            date={event.date}
            plannerType={event.plannerType}
            planner={event.planner}
            topics={event.topics}
          />
        ))}
      </div>
      <div className="notifications-subscription flex items-center py-6">
        <div className="content w-1/2">
          <div>
            <h3 className="text-primary text-2xl font-bold">
              إشترك و تلقى إشعارات بجميع إنشطة النادي القادمة!
            </h3>
          </div>
          <div>
            <Image
              src={EventImage}
              alt="events-ghaith"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="pb-5">
            <p className="text-xl">
              يُسرّنا أن نقدّم لكم إمكانية تلقي الإشعارات بشكل مجاني تمامًا!
            </p>
            <p className="text-xl">
              كل ما عليكم فعله هو تقديم البريد الإلكتروني الخاص بكم و إختيار إسم
              مستخدم. بمجرّد الاشتراك، ستتلقون إشعارات فورية في حال قام النادي
              بتنظيم نشاط معين.
            </p>
          </div>
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  إسم المستخدم
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="إسم المستخدم"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="البريد الإلكتروني"
                  required
                />
              </div>
            </div>
            <button className="flex items-center gap-2 bg-red-300 text-white px-3 py-2 text-md rounded-md cursor-pointer">
              إشتراك الآن
              <BellRing />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
