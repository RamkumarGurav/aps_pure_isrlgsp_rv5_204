/*** nextjs ***/
import { notFound } from "next/navigation";

/*** components ***/
import Cpage from "./Cpage";

/*** util functions ***/
async function fetchData(fy: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/albums?fy=${fy}`;
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });

    if (!res.ok) {
      const text = await res.text();
      console.error("Error fetching data:", text);
      console.error("Error fetching url:", url);
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
           PAGE
*****************************************************/
export default async function Gallery({
  params,
}: {
  params: { year: string };
}) {
  const year = params.year;
  if (year == "0") {
    return notFound();
  }
  const data = await fetchData(year);
  if (!data || data.albums == false) {
    return notFound();
  }

  return (
    <>
      <div>
        <Cpage initialData={data} fy={year} />
      </div>
    </>
  );
}
/*****************************************************
           other
*****************************************************/

async function fetchDataGSP() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/years`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
}
export async function generateStaticParams() {
  const data = await fetchDataGSP();
  return data.map((item: { [key: string]: any }) => ({
    year: item.fiscal_year.toString(),
  }));
}
