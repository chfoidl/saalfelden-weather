import { fetchWeatherData } from "@/lib/fetchData";

export const GET = async () => {
  const data = await fetchWeatherData();

  return new Response(JSON.stringify(data), { status: 200 });
}

