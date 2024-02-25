const Layout = () => {
  return (
    <div className="grid grid-cols-7 gap-2">
      {/* column-1 */}
      <div className="col-span-1 flex flex-col justify-between items-center flex-shrink flex-grow self-stretch h-[650px] bg-[#06367a] rounded-l-3xl shadow-[0_0_0px_rgba(0,0,0,0.08)] border-0 mb-1">
        {/* Container for top elements (image + rows 1-4) */}
        <div className="w-full">
          <div
            className="visible bg-center bg-cover bg-no-repeat shadow border-2 border-white rounded-[72px] h-28 w-28 mt-8 ml-7"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw1fHxjaGFudnJlJTIwfGVufDF8fHx8MTY1NjY1NjY1MA&ixlib=rb-1.2.1&q=80&w=1080')",
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
            }}
          ></div>
          {/* Rows 1-4 */}
          <div className="flex flex-col items-center w-full mt-8">
            <div className="flex justify-between items-center flex-shrink w-[170px] h-[44px] opacity-100 bg-[rgb(0,39,92)] rounded-none shadow border-0 space-x-2 ">
              <svg
                className="ml-5"
                viewBox="0 0 640 512"
                style={{
                  width: "20px",
                  height: "20px",
                  overflow: "visible",
                  opacity: 1,
                  zIndex: 1,
                  fill: "rgb(255, 255, 255)",
                }}
              >
                <path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"></path>
              </svg>

              <p
                className="flex-grow m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100 font-bold"
                style={{
                  width: "94px",
                  height: "20px",
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#ffffff",
                }}
              >
                <span style={{ color: "#ffffff" }}>My cloud</span>
              </p>
            </div>
            <div className="flex justify-between items-center flex-shrink w-[170px] h-[44px] opacity-100 rounded-none shadow border-0 space-x-2">
              <svg
                className="ml-4"
                viewBox="0 0 640 512"
                style={{
                  width: "20px",
                  height: "20px",
                  overflow: "visible",
                  opacity: 1,
                  zIndex: 1,
                  fill: "rgb(255, 255, 255)",
                }}
              >
                <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
              </svg>

              <p
                className="flex-grow m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100 font-bold"
                style={{
                  width: "94px",
                  height: "20px",
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#ffffff",
                }}
              >
                <span style={{ color: "#ffffff" }}>Shared files</span>
              </p>
            </div>
            <div className="flex justify-between items-center flex-shrink w-[170px] h-[44px] opacity-100 rounded-none shadow border-0 space-x-2">
              <svg
                viewBox="0 0 576 512"
                className="ml-5"
                style={{
                  width: "20px",
                  height: "20px",
                  overflow: "visible",
                  opacity: 1,
                  zIndex: 1,
                  fill: "rgb(255, 255, 255)",
                }}
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>

              <p
                className="flex-grow m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100 font-bold"
                style={{
                  width: "94px",
                  height: "20px",
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#ffffff",
                }}
              >
                <span style={{ color: "#ffffff" }}>Favorites</span>
              </p>
            </div>
            <div className="flex justify-between items-center flex-shrink w-[170px] h-[44px] opacity-100 rounded-none shadow border-0 space-x-2">
              <svg
                viewBox="0 0 640 512"
                className="ml-4"
                style={{
                  width: "20px",
                  height: "20px",
                  overflow: "visible",
                  opacity: 1,
                  zIndex: 1,
                  fill: "white",
                }}
              >
                <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"></path>
              </svg>

              <p
                className="flex-grow m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100 font-bold"
                style={{
                  width: "94px",
                  height: "20px",
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#ffffff",
                }}
              >
                <span style={{ color: "#ffffff" }}>Upload files</span>
              </p>
            </div>
          </div>
        </div>

        {/* Container for bottom elements (rows 5 and 6) */}
        <div className="w-full mb-3">
          <div className="flex justify-between items-center flex-shrink w-[170px] h-[44px] opacity-100 rounded-none shadow border-0 space-x-2">
            <svg
              viewBox="0 0 512 512"
              className="w-5 h-5 ml-7" // Tailwind classes for width and height.
              style={{
                overflow: "visible",
                opacity: 1,
                zIndex: 1,
                fill: "rgb(255, 255, 255)", // Using inline styles for properties not covered by Tailwind.
              }}
            >
              <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path>
            </svg>

            <p
              className="flex-grow m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100 font-bold"
              style={{
                width: "94px",
                height: "20px",
                fontSize: "16px",
                lineHeight: "20px",
                color: "#ffffff",
              }}
            >
              <span style={{ color: "#ffffff" }}>Settings</span>
            </p>
          </div>
          <div className="flex justify-between items-center flex-shrink w-[170px] h-[44px] opacity-100 rounded-none shadow border-0 space-x-2">
            <svg
              className="ml-7"
              viewBox="0 0 512 512"
              style={{
                width: "20px",
                height: "20px",
                overflow: "visible",
                opacity: 1,
                zIndex: 1,
                fill: "rgb(255, 255, 255)",
              }}
            >
              <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path>
            </svg>

            <p
              className="flex-grow m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100 font-bold"
              style={{
                width: "94px",
                height: "20px",
                fontSize: "16px",
                lineHeight: "20px",
                color: "#ffffff",
              }}
            >
              <span style={{ color: "#ffffff" }}>Log out</span>
            </p>
          </div>
        </div>
      </div>

      {/* column -2 */}
      <div className="col-span-4">
        <div className="flex items-center rounded-full bg-white overflow-hidden shadow-md m-5">
          <svg
            className="ml-5"
            viewBox="0 0 512 512"
            style={{
              width: "20px",
              height: "20px",
              overflow: "visible",
              opacity: 1,
              zIndex: 1,
              fill: "rgb(205, 222, 247)",
            }}
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>

          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-full bg-transparent outline-none"
          />
        </div>
        <p
          className="flex-grow m-0 overflow-hidden text-left align-middle font-bold whitespace-pre-line break-words opacity-100 ml-5 mb-4"
          style={{
            width: "276px",
            height: "26px",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "0px",
            lineHeight: "26px",
            color: "#06367a",
          }}
        >
          Categories
        </p>

        <div className="flex gap-3 justify-start ml-5">
          <div
            className="flex flex-col gap-1 justify-between items-center flex-shrink flex-grow self-stretch w-[130px] h-[100px] opacity-100 bg-[#6663fe] rounded-[12px] shadow-sm border-0"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
            }}
          >
            <div
              className="flex justify-center items-center w-8 h-8 p-0 overflow-hidden rounded-full mr-auto ml-3 mt-3"
              style={{
                cursor: "inherit",
                opacity: 1,
                backgroundColor: "rgb(255, 255, 255)",
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
                border: "0px",
              }}
            >
              <svg
                viewBox="0 0 512 512"
                style={{
                  width: "14px",
                  height: "14px",
                  overflow: "visible",
                  opacity: "unset",
                  zIndex: 1,
                  fill: "rgb(102, 99, 254)",
                }}
              >
                <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path>
              </svg>
            </div>
            <p
              className="m-0 overflow-hidden text-left whitespace-pre-line break-words"
              style={{
                width: "108px",
                height: "20px",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0px",
                lineHeight: "20px",
                fontFamily: '"Work Sans"',
                color: "#ffffff",
              }}
            >
              Pictures
            </p>
            <p
              style={{
                width: "108px",
                height: "18px",
                flexGrow: 1,
                margin: "0px",
                overflow: "hidden",
                fontSize: "14px",
                textTransform: "none",
                textAlign: "left",
                letterSpacing: "0px",
                lineHeight: "18px",
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                opacity: 1,
                visibility: "visible",
                color: "#ffffff",
              }}
            >
              480 files
            </p>
          </div>
          <div
            className="flex flex-col gap-1 justify-between items-center flex-shrink flex-grow self-stretch w-[130px] h-[100px] opacity-100 bg-[#00a0b6] rounded-[12px] shadow-sm border-0"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
            }}
          >
            <div
              className="flex justify-center items-center w-8 h-8 p-0 overflow-hidden rounded-full mr-auto ml-3 mt-3"
              style={{
                cursor: "inherit",
                opacity: 1,
                backgroundColor: "rgb(255, 255, 255)",
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
                border: "0px",
              }}
            >
              <svg
                viewBox="0 0 448 512"
                style={{
                  width: "14px",
                  height: "14px",
                  overflow: "visible",
                  opacity: "unset",
                  zIndex: 1,
                  fill: "rgb(0, 160, 182)",
                }}
              >
                <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
              </svg>
            </div>
            <p
              className="m-0 overflow-hidden text-left whitespace-pre-line break-words"
              style={{
                width: "108px",
                height: "20px",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0px",
                lineHeight: "20px",
                fontFamily: '"Work Sans"',
                color: "#ffffff",
              }}
            >
              Documents
            </p>
            <p
              style={{
                width: "108px",
                height: "18px",
                flexGrow: 1,
                margin: "0px",
                overflow: "hidden",
                fontSize: "14px",
                textTransform: "none",
                textAlign: "left",
                letterSpacing: "0px",
                lineHeight: "18px",
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                opacity: 1,
                visibility: "visible",
                color: "#ffffff",
              }}
            >
              190 files
            </p>
          </div>
          <div
            className="flex flex-col gap-1 justify-between items-center flex-shrink flex-grow self-stretch w-[130px] h-[100px] opacity-100 bg-[#e06c9f] rounded-[12px] shadow-sm border-0"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
            }}
          >
            <div
              className="flex justify-center items-center w-8 h-8 p-0 overflow-hidden rounded-full mr-auto ml-3 mt-3"
              style={{
                cursor: "inherit",
                opacity: 1,
                backgroundColor: "rgb(255, 255, 255)",
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
                border: "0px",
              }}
            >
              <svg
                viewBox="0 0 576 512"
                style={{
                  width: "14px",
                  height: "14px",
                  overflow: "visible",
                  opacity: "unset", // Or remove if the default opacity is desired
                  zIndex: 1,
                  fill: "rgb(224, 108, 159)",
                }}
              >
                <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path>
              </svg>
            </div>
            <p
              className="m-0 overflow-hidden text-left whitespace-pre-line break-words"
              style={{
                width: "108px",
                height: "20px",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0px",
                lineHeight: "20px",
                fontFamily: '"Work Sans"',
                color: "#ffffff",
              }}
            >
              Videos
            </p>
            <p
              style={{
                width: "108px",
                height: "18px",
                flexGrow: 1,
                margin: "0px",
                overflow: "hidden",
                fontSize: "14px",
                textTransform: "none",
                textAlign: "left",
                letterSpacing: "0px",
                lineHeight: "18px",
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                opacity: 1,
                visibility: "visible",
                color: "#ffffff",
              }}
            >
              30 files
            </p>
          </div>
          <div
            className="flex flex-col gap-1 justify-between items-center flex-shrink flex-grow self-stretch w-[130px] h-[100px] opacity-100 bg-[#266fd5] rounded-[12px] shadow-sm border-0"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
            }}
          >
            <div
              className="flex justify-center items-center w-8 h-8 p-0 overflow-hidden rounded-full mr-auto ml-3 mt-3"
              style={{
                cursor: "inherit",
                opacity: 1,
                backgroundColor: "rgb(255, 255, 255)",
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
                border: "0px",
              }}
            >
              <svg
                viewBox="0 0 352 512"
                className="w-3.5 h-3.5"
                style={{
                  overflow: "visible",
                  opacity: "unset",
                  zIndex: 1,
                  fill: "rgb(38, 111, 213)",
                }}
              >
                <path d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"></path>
              </svg>
            </div>
            <p
              className="m-0 overflow-hidden text-left whitespace-pre-line break-words"
              style={{
                width: "108px",
                height: "20px",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0px",
                lineHeight: "20px",
                fontFamily: '"Work Sans"',
                color: "#ffffff",
              }}
            >
              Audio
            </p>
            <p
              style={{
                width: "108px",
                height: "18px",
                flexGrow: 1,
                margin: "0px",
                overflow: "hidden",
                fontSize: "14px",
                textTransform: "none",
                textAlign: "left",
                letterSpacing: "0px",
                lineHeight: "18px",
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                opacity: 1,
                visibility: "visible",
                color: "#ffffff",
              }}
            >
              80 files
            </p>
          </div>
          <div
            id="abec71962-622b-400d-a9af-2b23a6141c8e"
            className="flex flex-col justify-between items-center flex-shrink flex-grow self-stretch w-[130px] h-[100px] opacity-100 bg-[rgb(235,242,252)] rounded-[12px] shadow-sm border-0"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
            }}
          ></div>
        </div>
        <p
          className="flex-grow m-0 overflow-hidden text-left align-middle font-bold whitespace-pre-line break-words opacity-100 ml-5 mb-4 mt-5"
          style={{
            width: "276px",
            height: "26px",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "0px",
            lineHeight: "26px",
            color: "#06367a",
          }}
        >
          Files
        </p>
        <div className="flex gap-3 justify-start ml-5">
          <div
            className="flex flex-col items-center flex-shrink flex-grow self-stretch w-[130px] h-[100px] opacity-100 bg-[white] rounded-[12px] shadow-sm border-0 gap-2"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
            }}
          >
            <svg
              className="mr-auto ml-3 mt-4"
              viewBox="0 0 512 512"
              style={{
                width: "18px",
                height: "18px",
                overflow: "visible",
                opacity: 1,
                zIndex: 1,
                fill: "rgb(102, 99, 254)",
              }}
            >
              <path d="M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"></path>
            </svg>
            <p
              className=" m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100"
              style={{
                width: "106px",
                height: "20px",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0px",
                lineHeight: "20px",
                color: "#00275cff",
              }}
            >
              <span>Work</span>
            </p>
            <p
              className=" m-0 overflow-hidden text-left whitespace-pre-line break-words"
              style={{
                width: "106px",
                height: "18px",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#00275cff",
              }}
            >
              <span>820 files</span>
            </p>
          </div>
          <div
            className="flex flex-col items-center flex-shrink flex-grow self-stretch w-[130px] h-[100px] opacity-100 bg-[white] rounded-[12px] shadow-sm border-0 gap-2"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
            }}
          >
            <svg
              className="mr-auto ml-3 mt-4"
              viewBox="0 0 512 512"
              style={{
                width: "18px",
                height: "18px",
                overflow: "visible",
                opacity: 1,
                zIndex: 1,
                fill: "rgb(0, 160, 182)",
              }}
            >
              <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path>
            </svg>

            <p
              className=" m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100"
              style={{
                width: "106px",
                height: "20px",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0px",
                lineHeight: "20px",
                color: "#00275cff",
              }}
            >
              <span>Personal</span>
            </p>
            <p
              className=" m-0 overflow-hidden text-left whitespace-pre-line break-words"
              style={{
                width: "106px",
                height: "18px",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#00275cff",
              }}
            >
              <span>115 files</span>
            </p>
          </div>
          <div
            className="flex flex-col items-center flex-shrink flex-grow self-stretch w-[130px] h-[100px] opacity-100 bg-[white] rounded-[12px] shadow-sm border-0 gap-2"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
            }}
          >
            <svg
              className="mr-auto ml-3 mt-4"
              viewBox="0 0 640 512"
              style={{
                width: "18px",
                height: "18px",
                overflow: "visible",
                opacity: 1,
                zIndex: 1,
                fill: "rgb(224, 108, 159)",
              }}
            >
              <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
            </svg>
            <p
              className=" m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100"
              style={{
                width: "106px",
                height: "20px",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0px",
                lineHeight: "20px",
                color: "#00275cff",
              }}
            >
              <span>School</span>
            </p>
            <p
              className=" m-0 overflow-hidden text-left whitespace-pre-line break-words"
              style={{
                width: "106px",
                height: "18px",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#00275cff",
              }}
            >
              <span>65 files</span>
            </p>
          </div>
          <div
            className="flex flex-col items-center flex-shrink flex-grow self-stretch w-[130px] h-[100px] opacity-100 bg-[white] rounded-[12px] shadow-sm border-0 gap-2"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
            }}
          >
            <svg
              className="mr-auto ml-3 mt-4"
              viewBox="0 0 512 512"
              style={{
                width: "18px",
                height: "18px",
                overflow: "visible",
                opacity: 1,
                zIndex: 1,
                fill: "rgb(38, 111, 213)",
              }}
            >
              <path d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z"></path>
            </svg>
            <p
              className=" m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100"
              style={{
                width: "106px",
                height: "20px",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0px",
                lineHeight: "20px",
                color: "#00275cff",
              }}
            >
              <span>Archive</span>
            </p>
            <p
              className=" m-0 overflow-hidden text-left whitespace-pre-line break-words"
              style={{
                width: "106px",
                height: "18px",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#00275cff",
              }}
            >
              <span>21 files</span>
            </p>
          </div>
          <div
            className="flex flex-col items-center flex-shrink flex-grow self-stretch w-[130px] h-[100px] opacity-100 bg-[white] rounded-[12px] shadow-sm border-0 gap-2"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
            }}
          >
            <p
              className="mt-6 ml-4"
              style={{
                width: "38px",
                height: "42px",
                fontSize: "32px",
                opacity: 1,
                visibility: "visible",
                color: "#266fd5ff",
              }}
            >
              +
            </p>
          </div>
        </div>
        <p
          className="flex-grow m-0 overflow-hidden text-left align-middle font-bold whitespace-pre-line break-words opacity-100 ml-5 mb-4 mt-5"
          style={{
            width: "276px",
            height: "26px",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "0px",
            lineHeight: "26px",
            color: "#06367a",
          }}
        >
          Recent files
        </p>

        <div
          className="flex justify-between items-center flex-shrink flex-grow self-stretch w-[700px] h-[40px] opacity-100 bg-white rounded-[10px] shadow border-0 m-2 ml-5"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
          }}
        >
          <div className="flex justify-center items-center">
            <div
              className="flex justify-center items-center w-8 h-8 p-0 cursor-default overflow-hidden opacity-100 rounded-lg ml-2"
              style={{
                backgroundColor: "rgb(102, 99, 254)",
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
                border: "0px",
              }}
            >
              <svg
                viewBox="0 0 512 512"
                style={{
                  width: "14px",
                  height: "14px",
                  overflow: "visible",
                  opacity: "unset",
                  zIndex: 1,
                  fill: "rgb(255, 255, 255)",
                }}
              >
                <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path>
              </svg>
            </div>

            <p
              className="m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100 ml-2"
              style={{
                width: "132px",
                height: "18px",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0px",
                lineHeight: "18px",
                color: "#030303",
              }}
            >
              <span>IMG_100000</span>
            </p>
          </div>

          <p
            className="m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100"
            style={{
              width: "72px",
              height: "18px",
              fontSize: "14px",
              lineHeight: "18px",
              color: "#929292ff",
            }}
          >
            <span>PNG file</span>
          </p>

          <p
            className=" m-0 overflow-hidden text-left align-middle whitespace-pre-line break-words opacity-100"
            style={{
              width: "70px",
              height: "18px",
              fontSize: "14px",
              lineHeight: "18px",
              color: "#929292ff",
            }}
          >
            <span>5 MB</span>
          </p>

          <svg
            viewBox="0 0 448 512"
            style={{
              width: "16px",
              height: "16px",
              overflow: "visible",
              opacity: 1,
              zIndex: 1,
              fill: "rgb(38, 111, 213)",
            }}
          >
            <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path>
          </svg>

          <svg
            className="mr-2"
            viewBox="0 0 512 512"
            style={{
              width: "16px",
              height: "16px",
              overflow: "visible",
              opacity: 1,
              zIndex: 1,
              fill: "rgb(114, 163, 232)",
            }}
          >
            <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
          </svg>
        </div>
        <div
          className="flex justify-between items-center flex-shrink flex-grow self-stretch w-[700px] h-[40px] opacity-100 bg-white rounded-[10px] shadow border-0 m-2 ml-5"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
          }}
        >
          <div className="flex justify-center items-center">
            <div
              className="flex justify-center items-center w-8 h-8 p-0 cursor-default overflow-hidden opacity-100 rounded-lg ml-2"
              style={{
                backgroundColor: "rgb(224, 108, 159)",
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
                border: "0px",
              }}
            >
              <svg
                viewBox="0 0 576 512"
                style={{
                  width: "14px",
                  height: "14px",
                  overflow: "visible",
                  opacity: "unset",
                  zIndex: 1,
                  fill: "white",
                }}
              >
                <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path>
              </svg>
            </div>

            <p
              className="m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100 ml-2"
              style={{
                width: "132px",
                height: "18px",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0px",
                lineHeight: "18px",
                color: "#030303",
              }}
            >
              <span>Startup pitch</span>
            </p>
          </div>

          <p
            className="m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100"
            style={{
              width: "72px",
              height: "18px",
              fontSize: "14px",
              lineHeight: "18px",
              color: "#929292ff",
            }}
          >
            <span>AVI file</span>
          </p>

          <p
            className=" m-0 overflow-hidden text-left align-middle whitespace-pre-line break-words opacity-100"
            style={{
              width: "70px",
              height: "18px",
              fontSize: "14px",
              lineHeight: "18px",
              color: "#929292ff",
            }}
          >
            <span>106 MB</span>
          </p>

          <svg
            viewBox="0 0 448 512"
            style={{
              width: "16px",
              height: "16px",
              overflow: "visible",
              opacity: 1,
              zIndex: 1,
              fill: "rgb(38, 111, 213)",
            }}
          >
            <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path>
          </svg>

          <svg
            className="mr-2"
            viewBox="0 0 512 512"
            style={{
              width: "16px",
              height: "16px",
              overflow: "visible",
              opacity: 1,
              zIndex: 1,
              fill: "rgb(114, 163, 232)",
            }}
          >
            <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
          </svg>
        </div>
        <div
          className="flex justify-between items-center flex-shrink flex-grow self-stretch w-[700px] h-[40px] opacity-100 bg-white rounded-[10px] shadow border-0 m-2 ml-5"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
          }}
        >
          <div className="flex justify-center items-center">
            <div
              className="flex justify-center items-center w-8 h-8 p-0 cursor-default overflow-hidden opacity-100 rounded-lg ml-2"
              style={{
                backgroundColor: "rgb(38, 111, 213)",
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
                border: "0px",
              }}
            >
              <svg
                viewBox="0 0 352 512"
                style={{
                  width: "14px",
                  height: "14px",
                  overflow: "visible",
                  opacity: "unset",
                  zIndex: 1,
                  fill: "rgb(255, 255, 255)",
                }}
              >
                <path d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"></path>
              </svg>
            </div>

            <p
              className="m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100 ml-2"
              style={{
                width: "132px",
                height: "18px",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0px",
                lineHeight: "18px",
                color: "#030303",
              }}
            >
              <span>Freestyle beat </span>
            </p>
          </div>

          <p
            className="m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100"
            style={{
              width: "72px",
              height: "18px",
              fontSize: "14px",
              lineHeight: "18px",
              color: "#929292ff",
            }}
          >
            <span>MP3 file</span>
          </p>

          <p
            className=" m-0 overflow-hidden text-left align-middle whitespace-pre-line break-words opacity-100"
            style={{
              width: "70px",
              height: "18px",
              fontSize: "14px",
              lineHeight: "18px",
              color: "#929292ff",
            }}
          >
            <span>21 MB</span>
          </p>

          <svg
            viewBox="0 0 448 512"
            style={{
              width: "16px",
              height: "16px",
              overflow: "visible",
              opacity: 1,
              zIndex: 1,
              fill: "rgb(38, 111, 213)",
            }}
          >
            <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path>
          </svg>

          <svg
            className="mr-2"
            viewBox="0 0 512 512"
            style={{
              width: "16px",
              height: "16px",
              overflow: "visible",
              opacity: 1,
              zIndex: 1,
              fill: "rgb(114, 163, 232)",
            }}
          >
            <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
          </svg>
        </div>
        <div
          className="flex justify-between items-center flex-shrink flex-grow self-stretch w-[700px] h-[40px] opacity-100 bg-white rounded-[10px] shadow border-0 m-2 ml-5"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
          }}
        >
          <div className="flex justify-center items-center">
            <div
              className="flex justify-center items-center w-8 h-8 p-0 cursor-default overflow-hidden opacity-100 rounded-lg ml-2"
              style={{
                backgroundColor: "rgb(0, 160, 182)",
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
                border: "0px",
              }}
            >
              <svg
                viewBox="0 0 448 512"
                style={{
                  width: "14px",
                  height: "14px",
                  overflow: "visible",
                  opacity: "unset",
                  zIndex: 1,
                  fill: "rgb(255, 255, 255)",
                }}
              >
                <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
              </svg>
            </div>

            <p
              className="m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100 ml-2"
              style={{
                width: "132px",
                height: "18px",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0px",
                lineHeight: "18px",
                color: "#030303",
              }}
            >
              <span>Work proposal</span>
            </p>
          </div>

          <p
            className="m-0 overflow-hidden text-left whitespace-pre-line break-words opacity-100"
            style={{
              width: "72px",
              height: "18px",
              fontSize: "14px",
              lineHeight: "18px",
              color: "#929292ff",
            }}
          >
            <span>DOCx file</span>
          </p>

          <p
            className=" m-0 overflow-hidden text-left align-middle whitespace-pre-line break-words opacity-100"
            style={{
              width: "70px",
              height: "18px",
              fontSize: "14px",
              lineHeight: "18px",
              color: "#929292ff",
            }}
          >
            <span>500 kb</span>
          </p>

          <svg
            viewBox="0 0 448 512"
            style={{
              width: "16px",
              height: "16px",
              overflow: "visible",
              opacity: 1,
              zIndex: 1,
              fill: "rgb(38, 111, 213)",
            }}
          >
            <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path>
          </svg>

          <svg
            className="mr-2"
            viewBox="0 0 512 512"
            style={{
              width: "16px",
              height: "16px",
              overflow: "visible",
              opacity: 1,
              zIndex: 1,
              fill: "rgb(114, 163, 232)",
            }}
          >
            <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
          </svg>
        </div>
      </div>
      {/* column-3 */}
      <div className="col-span-2 flex flex-col justify-between items-center flex-shrink flex-grow self-stretch w-[290px] h-[600px] bg-white rounded-[20px] shadow-sm border-0 mt-5 gap-3 ml-auto mr-4 p-2">
        <div className="bg-[rgb(235,242,252)] h-60 w-64 m-2 flex flex-col items-center justify-center gap-3">
          <svg
            viewBox="0 0 512 512"
            style={{
              width: "40px",
              height: "40px",
              overflow: "visible",
              opacity: 1,
              zIndex: 1,
              fill: "rgb(38, 111, 213)",
            }}
          >
            <path d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
          </svg>
          <h1 className="text-[#06367aff] font-bold">Add new files</h1>
        </div>
        <div className="bg-[rgb(235,242,252)] h-20 w-64 flex flex-col gap-1">
          <div className="flex m-1">
            <p className="w-[147px] h-[20px] flex-grow m-0 overflow-hidden text-[16px] font-bold text-left leading-[20px] whitespace-pre-line break-words opacity-100">
              <span className="text-[#06367a]">Your storage</span>
            </p>
            <p className="w-[102px] h-[20px] flex-grow m-0 overflow-hidden text-right text-[16px] font-bold leading-[20px] whitespace-pre-line break-words opacity-100">
              <span className="text-[#00A0B6]">25% left</span>
            </p>
          </div>

          <p className="w-[207px] h-[18px] flex-grow m-0 overflow-hidden text-left text-[14px] leading-[18px] whitespace-pre-line break-words opacity-100 visible font-[Work_Sans]">
            <span className="text-[#00275cff]">75 GB of 100 GB are used</span>
          </p>

          <div className="w-64 h-2 bg-[rgb(205,222,247)] rounded-full overflow-hidden relative mb-2">
            <div
              className="bg-[rgb(38,111,213)] h-full rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
        <div className="bg-[rgb(235,242,252)] h-60 w-64 m-2 flex flex-col gap-3 items-center justify-center">
          <div className="flex justify-between items-center flex-shrink flex-grow self-stretch w-60 h-12 opacity-100 bg-[rgb(189,229,235)] rounded-[10px] shadow border-0 ml-2 mt-2 relative">
            <p className="w-[142px] h-[18px] flex-grow m-0 overflow-hidden text-[14px] font-bold text-left leading-[18px] whitespace-pre-line break-words opacity-100 z-10 ml-2">
              <span className="text-[#00275cff]">Keynote files</span>
            </p>
            <div className="absolute right-0 flex mr-2">
              <div
                className="bg-center bg-cover bg-no-repeat shadow border-2 border-white rounded-[32px] h-7 w-7"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8YmxhY2slMjB3b21hbnxlbnwxfHx8fDE2NTY2NjI4NDc&ixlib=rb-1.2.1&q=80&w=1080")`,
                  boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
                }}
              ></div>
              <div
                id="a7ce8895a-1ae9-48bb-9baa-51016abd5477"
                className="bg-center bg-cover bg-no-repeat shadow border-2 border-white rounded-[32px] h-7 w-7 -ml-2"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw5MXx8d29tYW58ZW58MXx8fHwxNjU2NjYyNzQ5&ixlib=rb-1.2.1&q=80&w=1080")`,
                  boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
                }}
              ></div>
            </div>
          </div>

          <div className="flex justify-between items-center flex-shrink flex-grow self-stretch w-60 h-12 opacity-100 bg-[#d7d7ff] rounded-[10px] shadow border-0 ml-2 relative">
            <p className="w-[142px] h-[18px] flex-grow m-0 overflow-hidden text-[14px] font-bold text-left leading-[18px] whitespace-pre-line break-words opacity-100 z-10 ml-2">
              <span className="text-[#00275cff]">Vacation photos</span>
            </p>
            <div className="absolute right-0 flex mr-2">
              <div
                className="bg-center bg-cover bg-no-repeat shadow border-2 border-white rounded-[32px] h-7 w-7"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8YmxhY2slMjB3b21hbnxlbnwxfHx8fDE2NTY2NjI4NDc&ixlib=rb-1.2.1&q=80&w=1080")`,
                  boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
                }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between items-center flex-shrink flex-grow self-stretch w-60 h-12 opacity-100 bg-[#f7dae7] rounded-[10px] shadow border-0 relative ml-2">
            <p className="w-[142px] h-[18px] flex-grow m-0 overflow-hidden text-[14px] font-bold text-left leading-[18px] whitespace-pre-line break-words opacity-100 z-10 ml-2">
              <span className="text-[#00275cff]">Project report</span>
            </p>
            <div className="absolute right-0 flex mr-2">
              <div
                className="bg-center bg-cover bg-no-repeat shadow border-2 border-white rounded-[32px] h-7 w-7"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8YmxhY2slMjB3b21hbnxlbnwxfHx8fDE2NTY2NjI4NDc&ixlib=rb-1.2.1&q=80&w=1080")`,
                  boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
                }}
              ></div>
              <div
                id="a7ce8895a-1ae9-48bb-9baa-51016abd5477"
                className="bg-center bg-cover bg-no-repeat shadow border-2 border-white rounded-[32px] h-7 w-7 -ml-2"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw5MXx8d29tYW58ZW58MXx8fHwxNjU2NjYyNzQ5&ixlib=rb-1.2.1&q=80&w=1080")`,
                  boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px",
                }}
              ></div>
            </div>
          </div>
          <div className="flex items-center justify-center box-border overflow-hidden outline-none cursor-inherit w-60 h-12 opacity-100 bg-[rgba(114,163,232,0)] rounded-[8px] shadow border border-[rgb(205,222,247)] mb-2">
            <span className="flex items-center flex-row p-[0px_8px] z-10">
              <div className="flex-grow m-0 overflow-visible text-center text-[12px] leading-[16px] whitespace-nowrap text-[rgb(114,163,232)] font-[Work_Sans]">
                + Add more
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
