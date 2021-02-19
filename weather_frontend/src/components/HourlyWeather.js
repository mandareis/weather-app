import React, { useEffect, useState } from "react";
import moment from "moment";
import { ResponsiveLine } from "@nivo/line";

function getScreenSize() {
  if (matchMedia("(max-width: 640px)").matches) {
    return "sm";
  } else if (matchMedia("(max-width: 768px)").matches) {
    return "md";
  } else if (matchMedia("(max-width: 1024px)").matches) {
    return "lg";
  } else if (matchMedia("(max-width: 1280px)").matches) {
    return "xl";
  } else if (matchMedia("(max-width: 1536px)").matches) {
    return "2xl";
  }
  return "mega";
}

function HourlyWeather({ weather }) {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  let hourly = weather.forecast.forecastday[0];
  useEffect(() => {
    // set up "screen resized" event listener
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // for debugging
  useEffect(() => {
    console.log("lol thanks for testing if my site is responsive ;)");
    console.log(`screenSize is now: ${screenSize}`);
  }, [screenSize]);

  //turn this into a switch case?
  //   let graph = null;
  //   if (screenSize === "sm") {
  //     graph = "h-80 w-full";
  //   }
  //   if (screenSize === "md") {
  //     graph = "md:h-96 md:w-full";
  //   }
  //   if (
  //     screenSize === "lg" ||
  //     screenSize === "xl" ||
  //     screenSize === "2xl" ||
  //     screenSize === "mega"
  //   ) {
  //     graph = "h-1/2 w-full";
  //   }
  //   console.log(`graph = ${graph}`);
  //   console.log(hourly.hour);

  //   return parseInt(moment(i.time).format("H")) % 3 === 0;
  //
  var height = "250px";
  var width = "";
  switch (screenSize) {
    case "mega":
    case "2xl":
    case "xl":
      height = "300px";
      width = "650px";
      break;
    case "lg":
      width = "700px";
      break;
    case "md":
      width = "600px";
      break;
    case "sm":
      // on sm screens we need to be a bit
      // more dynamic, so use 90% of viewport
      // width
      width = "90vw";
      break;
    default:
      throw new Error(`unknown screenSize: '${screenSize}'`);
  }

  return (
    <>
      <div
        style={{ height: height, width: width }}
        // className={`relative sm:h-80 sm:w-full md:h-96 md:w-full ${graph}`}
        className=""
        // place-content-center

        //find a way to add a size to the graph using tailwinds
      >
        {/* FOR THE LOVE OF EVERYTHING HOLY DO NOT PUT */}
        {/* ANYTHING ELSE BESIDES ResponseLine IN THIS */}
        {/* DIV OR DEMONS WILL RAVAGE THE PAGE */}
        <ResponsiveLine
          data={[
            {
              id: "temp.",
              data: hourly.hour
                .filter((i, idx) => idx % 3 === 0)
                .map((h) => {
                  return {
                    x: moment(h.time).format("HH"),
                    y: Math.round(h.temp_f),
                  };
                }),
            },
          ]}
          margin={{ top: 50, right: 20, bottom: 20, left: 45 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="natural"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "hour",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "temp (F)",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          enableGridX={false}
          enableGridY={false}
          pointSize={2}
          pointColor={{ theme: "background" }}
          enablePointLabel={true}
          pointBorderWidth={8}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="y"
          pointLabelYOffset={-12}
          isInteractive={false}
          useMesh={true}
          //   legends={[
          //     {
          //       anchor: "bottom-right",
          //       direction: "column",
          //       justify: false,
          //       translateX: 130,
          //       translateY: -100,
          //       itemsSpacing: 0,
          //       itemDirection: "left-to-right",
          //       itemWidth: 80,
          //       itemHeight: 20,
          //       itemOpacity: 0.75,
          //       symbolSize: 12,
          //       symbolShape: "circle",
          //       symbolBorderColor: "rgba(0, 0, 0, .5)",
          //       effects: [
          //         {
          //           on: "hover",
          //           style: {
          //             itemBackground: "rgba(0, 0, 0, .03)",
          //             itemOpacity: 1,
          //           },
          //         },
          //       ],
          //     },
          //   ]}
        />
      </div>
    </>
  );
}
export default HourlyWeather;
