import React from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function Detail() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  };
  return (
    <>
      <Headers />
      <div className="min-h-[80vh] primary-color grid grid-col text-primary-color source-sans-pro">
        <article className="card-color mt-10 mx-4 md:mx-12 lg:mx-24  xl:mx-32 mb-8">
          <h1 className="text-center md:text-3xl source-sans-pro-bold my-6 mx-8 xl:mx-2 text-2xl">
            in hac habitasse platea dictumst maecenas ut massa quis augue
          </h1>
          <section className="grid lg:grid-cols-5 mx-10">
            <figure className="mx-auto">
              <img
                className="rounded-full"
                src="https://robohash.org/quamnonet.jpg?size=150x150&set=set1"
                alt="description"
              />
            </figure>
            <div className="grid lg:grid-cols-3 lg:col-span-4">
              <figcaption className="lg:flex lg:col-span-3 source-sans-pro-bold text-2xl mb-2 md:mx-0">
                <p className="text-center xl:mt-0 lg:mt-0 lg:col-span-3">
                  Bunnie Mathey
                </p>
                <div className="grid md:flex md:justify-between text-center">
                  <time className="source-sans-pro md:ml-8  lg:mx-10 lg:mb-0 mb-2">
                    Date posted : 2020-09-12
                  </time>
                  <time className="source-sans-pro md:mx-8 lg:mx-10 lg:mb-0 mb-2">
                    Time posted : 10:15
                  </time>
                </div>
              </figcaption>
              <div className="secondary-color lg:mx-6 my-2 pt-1 pb-0 rounded-md text-center">
                Category 1
              </div>
              <div className="secondary-color lg:mx-6 my-2 pt-1 pb-0 rounded-md text-center">
                Category 2
              </div>
              <div className="secondary-color lg:mx-6 my-2 pt-1 pb-0 rounded-md text-center">
                Category 3
              </div>
              <div className="secondary-color lg:mx-6 my-2 pt-1 pb-0 rounded-md text-center">
                Category 4
              </div>
              <div className="secondary-color lg:mx-6 my-2 pt-1 pb-0 rounded-md text-center">
                Category 5
              </div>
              <div className="secondary-color lg:mx-6 my-2 pt-1 pb-0 rounded-md text-center">
                Category 6
              </div>
            </div>
          </section>
          <main className="text-justify mx-4 xl:mx-16 lg:mx-12 my-10">
            Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam
            turpis adipiscing lorem, vitae mattis nibh ligula nec sem.Nulla ac
            enim. In tempor, turpis nec euismod scelerisque, quam turpis
            adipiscing lorem, vitae mattis nibh ligula nec sem.Nulla ac enim. In
            tempor, turpis nec euismod scelerisque, quam turpis adipiscing
            lorem, vitae mattis nibh ligula nec sem.Nulla ac enim. In tempor,
            turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae
            mattis nibh ligula nec sem.Nulla ac enim. In tempor, turpis nec
            euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh
            ligula nec sem.Nulla ac enim. In tempor, turpis nec euismod
            scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula
            nec sem.Nulla ac enim. In tempor, turpis nec euismod scelerisque,
            quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.Nulla
            ac enim. In tempor, turpis nec euismod scelerisque, quam turpis
            adipiscing lorem, vitae mattis nibh ligula nec sem.Nulla ac enim. In
            tempor, turpis nec euismod scelerisque, quam turpis adipiscing
            lorem, vitae mattis nibh ligula nec sem.Nulla ac enim. In tempor,
            turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae
            mattis nibh ligula nec sem.Nulla ac enim. In tempor, turpis nec
            euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh
            ligula nec sem.Nulla ac enim. In tempor, turpis nec euismod
            scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula
            nec sem.Nulla ac enim. In tempor, turpis nec euismod scelerisque,
            quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.Nulla
            ac enim. In tempor, turpis nec euismod scelerisque, quam turpis
            adipiscing lorem, vitae mattis nibh ligula nec sem.Nulla ac enim. In
            tempor, turpis nec euismod scelerisque, quam turpis adipiscing
            lorem, vitae mattis nibh ligula nec sem.Nulla ac enim. In tempor,
            turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae
            mattis nibh ligula nec sem.Nulla ac enim. In tempor, turpis nec
            euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh
            ligula nec sem.Nulla ac enim. In tempor, turpis nec euismod
            scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula
            nec sem.Nulla ac enim. In tempor, turpis nec euismod scelerisque,
            quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
          </main>
          <div className="text-center xl:text-left">
            <button
              className="tertiary-color text-white px-10 py-2 mb-4 xl:ml-16 mt-0"
              onClick={toHome}
            >
              Go Back
            </button>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
