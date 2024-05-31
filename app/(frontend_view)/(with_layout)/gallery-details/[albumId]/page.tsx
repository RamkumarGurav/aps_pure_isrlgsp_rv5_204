/*** nextjs ***/
import { notFound } from "next/navigation";

/*** fonts ***/
import Cpage from "./Cpage";
/*** util functions ***/
async function fetchData(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/album-images?albumID=${id}`;
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });

    if (!res.ok) {
      const text = await res.text();
      console.error("Error fetching data:", text);
      return null;
    }

    try {
      const json = await res.json();
      return json;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

/*****************************************************
           page
*****************************************************/
export default async function GalleryPage({
  params,
}: {
  params: { albumId: string };
}) {
  const albumId = params.albumId;
  if (albumId == "0") {
    return notFound();
  }
  const data = await fetchData(albumId);
  if (!data || !data.data) {
    return notFound();
  }

  return (
    <>
      <div>
        <Cpage initialData={data} albumId={albumId} />
      </div>
    </>
  );
}
/*****************************************************
           GSP
*****************************************************/
async function fetchDataGSP() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/albums`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
}
export async function generateStaticParams() {
  const data = await fetchDataGSP();
  // console.log("data", data);
  return data.map((album: { [key: string]: any }) => ({
    albumId: album.id.toString(),
  }));
}
