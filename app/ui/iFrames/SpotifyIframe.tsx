import { Card } from "@/app/ui/dashboard/cards";

export default function SpotifyIframe() {
  return (
    <Card title="Spotify Álbum" value={""} type="spotify">
      <div className="relative w-full h-[352px]">
        <iframe
          src="https://open.spotify.com/embed/album/7kuJ6wtlijDEk2A71qG2q6"
          title="Spotify Álbum"
          className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </Card>
  );
}
