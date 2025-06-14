import React from "react";
import { Card } from "@/app/ui/dashboard/cards";

const SpotifyIframe: React.FC = () => {
  return (
    <Card title="Spotify Playlist" value={""} type="invoices">
      <div className="relative w-full h-[352px]">
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
          title="Spotify Playlist"
          className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </Card>
  );
};

export default SpotifyIframe;
