export default async function handler(req, res) {

  const { city } = req.query;

  const API_KEY = process.env.NEWS_API_KEY;

  try {

    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${city}+weather+rain&lang=en&max=5&apikey=${API_KEY}`
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({ error: "Failed to fetch news" });

  }

}