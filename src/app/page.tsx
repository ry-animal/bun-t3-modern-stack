const mockUrls = [
  "https://utfs.io/f/91048601-cfd7-4bcc-9934-a2653c6c34d8-la9qb0.png",
  "https://utfs.io/f/a3f058e6-5726-47e5-8988-ae7e7c5525ab-7do5yw.png",
  "https://utfs.io/f/eb1c8547-0c27-40b3-9a66-edb5ddc05e1c-boc3wc.webp",
  "https://utfs.io/f/39824305-c8fd-4f83-bf83-a7c9bd43429f-22y1o.webp",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
