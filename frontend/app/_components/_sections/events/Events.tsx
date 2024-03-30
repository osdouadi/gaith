import React from 'react'
import SectionTitle from '../../_ui/SectionTitle'
import EventCard from '../../_ui/eventCard'

function Events() {
  return (
    <section>
      <SectionTitle title="الفعاليات و المناسبات القادمة" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <EventCard
          cover=""
          type=""
          title=""
          date=""
          plannerType=""
          planner=""
          topics=""
        />
      </div>
    </section>
  );
}

export default Events
