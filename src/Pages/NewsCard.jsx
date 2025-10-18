import React from "react";
import { FaEye, FaShareAlt } from "react-icons/fa";
import { IoShareSocialOutline, IoStarSharp } from "react-icons/io5";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  const formattedDate = new Date(news.author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md border rounded-2xl overflow-hidden">
      {/* Author Section */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-primary flex gap-5 items-center">
          <PiBookmarkSimpleLight size={28}></PiBookmarkSimpleLight>
          <IoShareSocialOutline size={25}></IoShareSocialOutline>
        </button>
      </div>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <Link className="card-title text-lg font-bold">{title}</Link>
        <p className="text-gray-600 text-sm">
          {details.length > 150 ? details.slice(0, 250) + "..." : details}
        </p>

        <a href="#" className="text-primary font-semibold text-sm mt-2">
          Read More
        </a>

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-4 pt-2 border-t">
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <IoStarSharp
                key={i}
                className={i < rating.number ? "fill-yellow-500" : "fill-gray-300"}
              />
            ))}
            <span className="text-gray-700 font-semibold ml-1">
              {rating.number.toFixed(1)}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FaEye /> <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
