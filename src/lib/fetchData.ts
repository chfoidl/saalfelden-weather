export const fetchWeatherData = async () => {
  const ritzensee = await fetchWeatherStationData("ritzensee");
  const ramseiden = await fetchWeatherStationData("ramseiden");

  const median = {
    temperature: round((ritzensee.temperature + ramseiden.temperature) / 2, 1),
    humidity: round((ritzensee.humidity + ramseiden.humidity) / 2, 0),
  }

  return {
    median,
    ritzensee,
    ramseiden,
  }
}

export const fetchWeatherStationData = async (type: "ritzensee" | "ramseiden") => {
  const arg = type === "ritzensee" ? "wetter" : "zwetter";

  const response = await fetch(`${process.env.ENDPOINT_URL}?${arg}`, {
    cache: "no-cache",
    referrer: process.env.ENDPOINT_REFERRER,
  });
  const text = await response.text();

  const tempRegex = /<b>\s*(?<temp>[0-9,]+)/gm;
  const humidityRegex = /(?<humidity>[0-9,]+)%rF/gm;

  const tempGroups = tempRegex.exec(text)?.groups;
  const humidityGroups = humidityRegex.exec(text)?.groups;

  return {
    temperature: round(Number(tempGroups?.temp.replace(',', '.') ?? 0), 1),
    humidity: round(Number(humidityGroups?.humidity ?? 0), 0),
  }
}

export const round = (input: number, precition: number) => {
  const factor = Math.pow(10, precition);
  return Math.round(input * factor) / factor;
}
