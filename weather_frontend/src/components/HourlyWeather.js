import React, { useEffect, useState } from "react";
import moment from "moment";
import { ResponsiveLine } from "@nivo/line";
import { withRouter } from "react-router-dom";

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

  var height = "250px";
  var width = "";
  switch (screenSize) {
    case "mega":
      width = "900px";
      height = "300px";
      break;
    case "2xl":
      height = "300px";
      width = "800px";
      break;
    case "xl":
      width = "550px";
      height = "300px";
      break;
    case "lg":
      width = "670px";
      break;
    case "md":
      width = "550px";
      break;
    case "sm":
      width = "93vw";
      // on sm screens we need to be a bit
      // more dynamic, so use 90% of viewport
      // width
      break;
    default:
      throw new Error(`unknown screenSize: '${screenSize}'`);
  }
  const theme = {
    textColor: "(141, 156, 171)",
    axis: {
      legend: {
        text: {
          fill: "rgb(141, 156, 171)",
        },
      },
      ticks: {
        text: {
          fill: "rgb(141, 156, 171)",
        },
      },
      point: {
        text: {
          fill: "rgb(141, 156, 171)",
        },
      },
    },
  };

  return (
    <div className="container mx-auto" style={{ height: height, width: width }}>
      {/* FOR THE LOVE OF EVERYTHING HOLY DO NOT PUT */}
      {/* ANYTHING ELSE BESIDES ResponseLine IN THIS */}
      {/* DIV OR DEMONS WILL RAVAGE THE PAGE */}
      {/* rgb(106, 124, 137) */}
      {/* rgb(141, 156, 171) dark mode */}

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
        margin={{ top: 40, right: 50, bottom: 40, left: 50 }}
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
          legend: "Hour",
          legendOffset: 35,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Temp (F)",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={8}
        theme={theme}
        enablePointLabel={true}
        colors="rgb(141, 156, 171)"
        // pointColor="rgb(141, 156, 171)"
        // pointBorderWidth={2}
        pointLabel="y"
        pointLabelYOffset={-12}
        isInteractive={false}
        useMesh={true}
        // legends={[
        //   {
        //     anchor: "bottom-right",
        //     direction: "column",
        //     justify: false,
        //     translateX: 130,
        //     translateY: -100,
        //     itemsSpacing: 0,
        //     itemDirection: "left-to-right",
        //     itemWidth: 80,
        //     itemHeight: 20,
        //     itemOpacity: 0.75,
        //     symbolSize: 12,
        //     symbolShape: "circle",
        //     itemTextColor: "rgb(141, 156, 171)",
        //     symbolBorderColor: "rgb(141, 156, 171)",
        //     effects: [
        //       {
        //         on: "hover",
        //         style: {
        //           itemBackground: "rgb(141, 156, 171)",
        //           itemOpacity: 1,
        //         },
        //       },
        //     ],
        //   },
        // ]}
      />
    </div>
  );
}
export default HourlyWeather;
