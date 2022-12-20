import Layout from "../../components/Layout/Layout";
import React from "react";

export default function About(props) {
  return (
    <Layout user={props.user}>
      <div className="pb-24">
        <h1 className=" grid-cols-1 pb-7 lg:pb-0 grid lg:pt-10 font-bold text-6xl font-gt-mono w-full place-items-center">
          our story
        </h1>
        <div className="font-gt-mono text-[.9rem]  mix-blend-screen text-black flex flex-col lg:p-10 items-center w-full">
          <div className="first-about w-full lg:w-3/4 md:w-11/12 sm:w-full ">
            <div
              style={{
                backgroundImage: "url('https://i.imgur.com/XykTSaa.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
              className="info-about"
            >
              <div
                style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                className="info container custom-scrollbar  p-7 grid grid-cols-1 gap-3"
              >
                <p className="info-paragraph">
                  We are a small grassroots company brought together by our
                  passion of jam. g'JAM is proud to say that all of our
                  ingredients come directly from us or local farms and fruit
                  curators. Due to this, we can always guarantee the freshest of
                  fruits and spices. We are commited to this promise.
                </p>
                <p className="info-paragraph">
                  We believe that everyone is unique, so why shouldn’t your jam
                  be unique too? g'JAM began one day right in our backyards when
                  we were pushed to action by the over-sugared, super
                  over-preserved jams that saturate the market today. Grab any
                  store brand and dip a spoon in and you'll have a sugar
                  overdose in a single scoop. Then taste ours (once you have
                  recovered), and the decision will be made for you, you will
                  never go back!
                </p>
                <p className="info-paragraph">
                  The one thing we hear most from our satisified customers is
                  that they do not experience the cloying taste that is so often
                  assosicated with store brand. Basically ours is better in
                  everyway. Our jam is a must for any health food snob that
                  can't go a day without telling someone how they should switch
                  over to organic and locally sourced so they can get that brief
                  sense of superiority that brightens an otherwise dull life for
                  a just a moment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 className=" pb-5 z-50 grid-cols-1 grid font-bold text-6xl font-gt-mono w-full place-items-center">
          our process
        </h1>
        <div className=" font-gt-mono w-full lg:px-10 mix-blend-screen grid  grid-cols-1 place-items-center">
          <div className="second-about w-full lg:w-3/4 md:w-11/12 sm:w-full">
            <div
              style={{
                backgroundImage: "url('https://i.imgur.com/F6pWmql.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
              className="info-process mt-5"
            >
              <div
                style={{ backgroundColor: "rgba(250, 200, 175, 0.75)" }}
                className="info container  p-7 grid grid-cols-1 gap-3"
              >
                <p className="info-paragraph ">
                  Our superb chef Josh curates all of our jam flavors by
                  combining his knowledge of great flavor combinations with his
                  obsession for taking risks. We begin in our home kitchen. Then
                  the products, if not taken from our own garden, are procured
                  through local farmers, supporting our region and sticking it
                  to the corporations.
                </p>

                <p className="info-paragraph">
                  Believe it or not, canning our jams is the most important step
                  in our process. Every single jam is jarred by our jam-jarring
                  expert Jexica. The jars are sanitized and filled while hot,
                  and then we stick them upside down for awhile. Why do we do
                  this? It helps to sanitize the lids and prevents oxygen from
                  getting into our stellar jam. This makes it possible for the
                  jars to sit on a shelf for up to a year without spoiling. But
                  honestly, if our jam sits on your shelf for up to a year just
                  lose our number, we don't want your business.
                </p>

                <p className="info-paragraph">
                  All of our jams are made by hand by Casey in very small
                  batches. We cook our jams in one of two ways: slow cooking, to
                  produce a thick, savory and sweet, buttery spread, or quick
                  cooking, to retain as much color and flavor in the fruit as
                  possible. We add no sugar, gone with the pectin, and we will
                  literally die before putting preservatives in our jam. Enjoy
                  with a spoon, spread on toast or bread. Or Garrett's personal
                  favorite, just open it and use your hand as a scoop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
