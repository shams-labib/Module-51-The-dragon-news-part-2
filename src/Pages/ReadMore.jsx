import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header/Header';
import RightAside from '../layout/Aside/RightAside/RightAside';
import ReadDetails from './ReadDetails';

const ReadMore = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const filtered = data.find(news => news.id === id);
    setItem(filtered);
  }, [data, id]);

  return (
    <div>
      <section>
        <Header />
      </section>

      <main className="grid grid-cols-12 gap-5 container mx-auto">
        <aside className="col-span-9">
          <div className="">
            {item ? (
              <ReadDetails news={item} />
            ) : (
              <p className="text-center text-gray-500">Loading...</p>
            )}
          </div>
        </aside>

        <section className="col-span-3">
          <RightAside />
        </section>
      </main>
    </div>
  );
};

export default ReadMore;
