import { Card } from "@/app/ui/dashboard/cards";

export default function YouTubeIframe() {
  return (
    <Card title="YouTube Video" value={""} type="youtube">
      <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        ></iframe>
      </div>
    </Card>
  );
}
