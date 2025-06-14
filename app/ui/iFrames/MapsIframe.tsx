import React from "react";
import { Card } from "@/app/ui/dashboard/cards";

const MapsIframe: React.FC = () => {
  return (
    <Card title="Google Maps" value={""} type="invoices">
      <div className="relative w-full pt-[56.25%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197266543905!2d-122.4194150846816!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e0c6b1b%3A0x7d0f7e0c6b1b7d0f!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620240000000!5m2!1sen!2sus"
          title="Google Maps"
          allowFullScreen
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full border-0"
        ></iframe>
      </div>
    </Card>
  );
};

export default MapsIframe;
