import React from "react";

export interface Country {
  name: string;
  flag: string;
  capital: string;
}

function useCountriesData() {
  const [data, setData] = React.useState<Country[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  console.log(data);

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch countries data");
        }
        const limitedCountries = (await response.json()).slice(0, 10); // Limit to 10 countries
        const formattedCountries = limitedCountries.map((country: any) => ({
          name: country.name.common,
          flag: country.flags.svg,
          capital: country.capital ? country.capital[0] : "N/A",
        }));

        setData(formattedCountries);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { data, loading, error };
}

export default useCountriesData;
