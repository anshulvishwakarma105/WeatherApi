import React, { useEffect, useState } from "react";

const NEWS_API_KEY = "a062f9c0204344829ef9df858075adb2";

export default function WeatherNews({ city }) {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchNews = async () => {

            try {
                setLoading(true);

                const res = await fetch(
                    `https://newsapi.org/v2/everything?q=weather+${city}&pageSize=5&apiKey=${NEWS_API_KEY}`
                );

                const data = await res.json();

                if (data.articles) {
                    setNews(data.articles.slice(0, 5));
                } else {
                    setNews([]);
                }

            } catch (error) {
                console.error(error);
                setNews([]);
            } finally {
                setLoading(false);
            }

        };

        if (city) {
            fetchNews();
        }

    }, [city]);



    return (
        <div className="weather-news">

            <h2>Weather News in {city}</h2>

            {loading && <p>Loading News...</p>}

            {!loading && news.length === 0 && (
                <p className="no-news">
                    No weather news available for this city.
                </p>
            )}

            <div className="news-container">

                {news.map((article, index) => (

                    <div key={index} className="news-card">

                        <img
                            src={
                                article.urlToImage ||
                                "https://via.placeholder.com/400x200?text=Weather+News"
                            }
                            alt="news"
                        />

                        <div className="news-content">

                            <h3>{article.title || "Weather Update"}</h3>

                            <p>
                                {article.description || "Click below to read full article."}
                            </p>

                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read More
                            </a>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}