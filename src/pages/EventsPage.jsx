import React from 'react';
import Events from '../components/Events';
import Reservation from '../components/Reservation';
import WhatsAppFloat from '../components/WhatsAppFloat';

const EventsPage = () => {
  return (
    <div className="pt-20">
      <Events />
      <Reservation />
      <WhatsAppFloat />
    </div>
  );
};

export default EventsPage;
