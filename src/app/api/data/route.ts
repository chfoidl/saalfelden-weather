import { fetchWeatherData } from "@/lib/fetchData";

export const POST = async () => {
  const data = await fetchWeatherData();

  return new Response(JSON.stringify(data), { status: 200 });
};

export const fetchCache = "force-no-store";

