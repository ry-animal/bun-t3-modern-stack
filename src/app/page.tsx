import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap justify-between">
        {images.map((image, idx) => (
          <div key={image.id + "-" + idx} className="flex w-48 flex-col gap-2">
            <img src={image.url} alt="image" />
            <div className="text-sm">{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
