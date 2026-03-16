import React, { useEffect, useState } from "react";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export default function WeatherNews({ city }) {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!city) return;

        const fetchNews = async () => {

            try {

                setLoading(true);

                const res = await fetch(
                    `https://gnews.io/api/v4/search?q=${city}+weather+rain&lang=en&max=5&apikey=${NEWS_API_KEY}`
                );

                const data = await res.json();

                if (data?.articles?.length > 0) {

                    setNews(data.articles.slice(0, 5));

                } else {

                    const fallbackRes = await fetch(
                        `https://gnews.io/api/v4/search?q=weather+storm+rain+forecast&lang=en&max=5&apikey=${NEWS_API_KEY}`
                    );

                    const fallbackData = await fallbackRes.json();

                    if (fallbackData?.articles) {
                        setNews(fallbackData.articles.slice(0, 5));
                    }

                }

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        fetchNews();

    }, [city]);

    return (
        <div className="weather-news">

            <h2>Weather News in {city}</h2>

            {loading && <p>Loading News...</p>}

           {!loading && city && news.length === 0 && (
                <p className="no-news">
                    No weather news available.
                </p>
            )}

            <div className="news-container">

                {news.map((article, index) => (

                    <div key={index} className="news-card">

                        <img
                            src={
                                article.image ||
                                "https://via.placeholder.com/400x200?text=Weather+News"
                            }
                            alt="news"
                        />

                        <div className="news-content">

                            <h3>{article.title}</h3>

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