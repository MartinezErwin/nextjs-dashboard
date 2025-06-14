import { lusitana } from "@/app/ui/fonts";
import MapsIframe from "@/app/ui/iFrames/MapsIframe";
import SpotifyIframe from "@/app/ui/iFrames/SpotifyIframe";
import YouTube from "@/app/ui/iFrames/YouTube";

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>APIs</h1>
      <YouTube />
      <MapsIframe />
      <SpotifyIframe />
    </main>
  );
}
