"use client";
/*** components ***/
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";
import { useQuery } from "@tanstack/react-query";
import { defaultBlurDataUrl } from "@/lib/helpers/displayData";
import GalleryCard from "@/components/Gallery/GalleryCard";
import HeadingP from "@/components/Headings/HeadingP";
/*** util functions ***/
async function fetchData(fy: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/albums?fy=${fy}`
  );

  return await res.json();
}

/*****************************************************
           page
*****************************************************/
export default function CPage({
  initialData,
  fy,
}: {
  initialData: any;
  fy: string;
}) {
  const { data, isLoading } = useQuery({
    queryKey: [`album_data/${fy}`],
    queryFn: async () => fetchData(fy),
    initialData: initialData,
    staleTime: 0,
    refetchOnWindowFocus: true, // Invalidate cache on window focus
  });

  const albumsData = data.data;
  const yearData = data.yearData;

  // console.log(data);

  let albumCoverImages = albumsData.map((item: { [key: string]: any }) => ({
    ...item,
    imageUrl: `${process.env.NEXT_PUBLIC_API_URL}/uploads/album/${yearData?.fiscal_year}/cover_images/${item.cover_image}`,
  }));
  return (
    <div className="w-[100%] overflow-hidden">
      <Bedcrumb heading="Gallery" pageName1={`Gallery`} />

      <section
        id="albums"
        className="albumsShell py-[35px] sm:py-[50px] px-4  xl:px-[86px] "
      >
        <HeadingP
          first="Gallery"
          second={yearData?.fiscal_year}
          boldness="!font-bold"
        />

        <div className=" mt-4   grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start ">
          {albumCoverImages.map((item: { [key: string]: any }, i: number) => (
            <GalleryCard
              key={i}
              i={i}
              id={item.id}
              name={item.name}
              srcUrl={item.imageUrl}
              blurDataUrl={defaultBlurDataUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
