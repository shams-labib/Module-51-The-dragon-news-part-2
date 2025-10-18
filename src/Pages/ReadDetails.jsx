import React from "react";
import { FaEye, FaStar, FaTag } from "react-icons/fa";
import { Link } from "react-router";

const ReadDetails = ({ news }) => {
  const {
    title,
    author,
    details,
    image_url,
    total_view,
    rating,
    tags,
    category_id,
  } = news;

  return (
    <div className="grid grid-col-7 p-7 bg-base-100 shadow-xl rounded-2xl overflow-hidden">
      {/* image section */}
      <figure>
        <img
          src={image_url}
          alt={title}
          className="w-full rounded-lg h-[300px] object-cover"
        />
      </figure>

      {/* card content */}
      <div className="p-6">
        {/* title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3 leading-snug">
          {title}
        </h2>

        {/* author info */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* details */}
        <p className="text-gray-700 mb-5 leading-relaxed">{details}</p>

        {/* tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="flex items-center gap-1 bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
            >
              <FaTag className="text-xs" /> {tag}
            </span>
          ))}
        </div>

        {/* bottom stats */}
        <div className="flex justify-between items-center border-t pt-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaEye /> {total_view}
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" /> {rating.number}/5
          </div>
        </div>

        {/* category button */}
        <div className="mt-6">
          <Link to={`/category/${category_id}`}>
            <button className="btn btn-outline btn-error w-full">
              ← All news in this category
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadDetails;
