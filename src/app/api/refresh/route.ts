import { fetchWeatherData } from "@/lib/fetchData";
import { revalidateTag } from "next/cache";

export const POST = async (request: Request) => {
  const url = request.url;

  const searchQuery = url.split('?')[1];
  if (!searchQuery) {
    return new Response(null, { status: 400 });
  }

  const params = new URLSearchParams(searchQuery);
  if (params.get('secret') !== process.env.REFRESH_SECRET) {
    return new Response(null, { status: 401 });
  }

  revalidateTag('weather');
  await fetchWeatherData();

  return new Response(null, { status: 200 });
}
