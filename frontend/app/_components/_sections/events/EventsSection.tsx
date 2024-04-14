"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "../../_ui/SectionTitle";
import { useMutation, useQuery } from "@tanstack/react-query";
import EventAPIs from "../../../_api/EventAPIs";
import Pagination from "../../_ui/Pagination";
import EventCard from "../../_ui/EventCard";
import Image from "next/image";
import EventImage from "/public/images/events-section.svg";
import { BellRing } from "lucide-react";
import SubscriptionForm from "../../_ui/SubscriptionForm";
import SubscriptionAPI from "../../../_api/SubscriptionAPI";

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
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [page, setPage] = useState(1);
  const limit = 3;

  const { data, isLoading, isError, refetch } = useQuery<QueryData>({
    queryKey: ["Events"],
    queryFn: async () => {
      const { data } = await EventAPIs.getPaginatedEvents(page, limit);
      return data;
    },
  });

  const {
    mutate: mutateSubscription,
    isPending: subscriptionPending,
    isError: subscriptionError,
  } = useMutation({
    mutationFn: ({ newSubscription }) => {
      return SubscriptionAPI.createSubscription(userName, userEmail);
    },
  });

  useEffect(() => {
    if (isInitialFetch) {
      isInitialFetch = false;
      return;
    }
    refetch();
  }, [refetch, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutateSubscription({ userName, userEmail });
  };

  return (
    <section className="px-6">
      <SectionTitle
        title="الفعاليات و المناسبات القادمة"
        textColor="text-primary"
      />
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
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
        <Pagination
          onPageChange={(page) => setPage(page)}
          currentPage={page}
          totalPageCount={data?.pageCount}
          siblingCount={1}
        />
      </div>
      <div className="notifications-subscription flex flex-col lg:flex-row xl:flex-row items-center py-6">
        <div className="content lg:w-1/2 xl:w-1/2">
          <div>
            <h3 className="text-primary text-lg leading-relaxed sm:text-2xl xl:text-2xl font-bold">
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
        <div className="lg:w-1/2 xl:w-1/2">
          <div className="pb-3 lg:pb-5 xl:pb-5 text-center md:text-start sm:leading-8">
            <p className="text-base sm:text-xl xl:text-xl">
              يُسرّنا أن نقدّم لكم إمكانية تلقي الإشعارات بشكل مجاني تمامًا!
            </p>
            <p className="text-base sm:text-xl xl:text-xl">
              كل ما عليكم فعله هو تقديم البريد الإلكتروني الخاص بكم و إختيار إسم
              مستخدم. بمجرّد الاشتراك، ستتلقون إشعارات فورية في حال قام النادي
              بتنظيم نشاط معين.
            </p>
          </div>
          <SubscriptionForm
            userName={userName}
            setUserName={setUserName}
            userEmail={userEmail}
            setUserEmail={setUserEmail}
            handleSubmit={handleSubmit}
            subscriptionPending={subscriptionPending}
          />
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
