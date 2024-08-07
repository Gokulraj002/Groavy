import React from 'react';
import News from "../../../images/news-groavy.jpeg";

const NewsPage = () => {
  const newsArticles = [
    {
      image: News,
      title: "Newspaper Title 1",
      summary: "Summary of the first newspaper article."
    },
   
  ];

  return (
    <div className="container">
      <div className="row">
        {newsArticles.map((article, index) => (
          <div className={`col-12 col-md-6 g-0`} key={index}>
            <div className="position-relative newscol">
              <img
                className="news-img"
                src={article.image}
                alt={article.title}
              />
              <div className="overlay"></div>
              <div className="position-absolute top-50 start-50 translate-middle news-content">
                <h1 className="newsh5 text-center text-white font">
                  {article.title}
                </h1>
                <p className="news-p text-white text-center para-color">
                  {article.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
