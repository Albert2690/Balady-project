import { useState } from "react";
import { Moon } from "lucide-react";

const AccessibilityWidget = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <div className="relative">
      {/* Accessibility Button */}
      <button
        id="muneer-trigger-button"
        aria-label="Open Accessibility Panel"
        className="fixed bottom-4 right-4 rounded-full p-3 shadow-lg z-50 hover:scale-105 transition-transform duration-200"
        style={{ backgroundColor: "rgb(132, 188, 71)" }}
        data-muneer-trigger=""
        onClick={togglePanel}
      >
        <span className="muneer-trigger-button-icon">
          <svg
            height="32"
            viewBox="0 0 512 512"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <path d="m256 112c30.9 0 56-25.1 56-56s-25.1-56-56-56-56 25.1-56 56 25.1 56 56 56z"></path>
            <path d="m432 112.8-.5.1-.4.1c-1 .3-2 .6-3 .9-18.6 5.5-108.9 30.9-172.6 30.9-59.1 0-141.3-22-167.6-29.5-2.6-1-5.3-1.9-8-2.6-19-5-32 14.3-32 31.9 0 17.5 15.7 25.8 31.5 31.8v.3l95.2 29.7c9.7 3.7 12.3 7.5 13.6 10.8 4.1 10.6.8 31.6-.3 38.9l-5.8 45-32.1 176.3c-.1.5-.2 1-.3 1.5l-.2 1.3c-2.3 16.1 9.5 31.8 32 31.8 19.6 0 28.3-13.5 32-31.9 0 0 28-157.6 42-157.6s42.8 157.6 42.8 157.6c3.8 18.4 12.4 31.9 32 31.9 22.5 0 34.4-15.7 32-31.9-.2-1.4-.5-2.7-.8-4.1l-32.5-174.7-5.8-45c-4.2-26.2-.8-34.9.3-36.9 0 0 .1-.1.1-.2 1.1-2 6-6.5 17.5-10.8l89.3-31.2c.5-.1 1.1-.3 1.6-.5 16-6 32-14.3 32-31.9s-13-37-32-32z"></path>
          </svg>
        </span>
      </button>

      {/* Overlay */}
      {isPanelOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={closePanel}
        />
      )}

      {/* Accessibility Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-screen bg-[#1B1E26] shadow-2xl z-[999] transform transition-transform duration-300 ease-in-out ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full relative">
          {/* Left Blue Highlight Bar */}
          <div className="absolute top-[150px] left-0 h-[100px] w-1 bg-[#2563EB]" />

          {/* Top Buttons */}
          {/* Top Buttons */}
          <div className="flex items-center justify-between px-3 py-3 space-x-3">
            {/* Left section: Close + Icon Group */}
            <div className="flex items-center space-x-3">
              {/* Close Button */}
              <button
                aria-label="Close"
                className="w-7 h-7 rounded-full bg-[#2A2E3B] flex justify-center items-center text-gray-400 hover:text-white text-sm"
                onClick={closePanel}
              >
                ✕
              </button>

              {/* Icon Group */}
              <div className="flex bg-black rounded-xl p-2 shadow-xl space-x-2">
                <button
                  aria-label="Accessibility"
                  className="w-7 h-7 rounded-full bg-[#2563EB] flex justify-center items-center text-white text-sm"
                >
                  ♿
                </button>
                <button
                  aria-label="Settings"
                  className="w-7 h-7 rounded-full bg-[#2A2E3B] flex justify-center items-center text-gray-400 hover:text-white text-sm"
                >
                  ⚙
                </button>
                <button
                  aria-label="Dark Mode"
                  className="w-7 h-7 rounded-full bg-[#2A2E3B] flex justify-center items-center text-white text-sm"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "scaleX(-1)" }}
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right section: Language Selector */}
            <div className="flex items-center space-x-1 text-lg font-medium text-white">
              <span>English</span>

              {/* England Flag: white with red cross */}

              <span
                className="w-4 h-3 bg-center bg-no-repeat bg-cover rounded-sm border border-white"
                style={{ backgroundImage: "url('https://flagcdn.com/gb.svg')" }}
              ></span>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto">
            {/* Main Title */}
            <div className="flex justify-end mb-5">
              <div className="border-t  border-[#2A2E3B] px-4 py-3">
                <h2 className="text-sm font-semibold text-white">
                  Accessibility Tools
                </h2>
              </div>
            </div>

            {/* Accordion Section */}
            <div className="border-t flex justify-between my-3 border-[#2A2E3B] px-4 py-2  items-center cursor-pointer">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700">
                <span className="text-xs text-white ">▼</span>
              </div>
              <span className="text-sm font-medium text-white">
                Accessibility Modes
              </span>
            </div>

            {/* Subtitle */}
            <div className="border-t flex justify-end my-3 border-[#2A2E3B] px-4 py-2">
              <span className="text-sm font-medium text-white">
                Readable Experience
              </span>
            </div>

            {/* Tools Grid */}
            <div className="px-4 py-16 grid grid-cols-2 gap-3">
              <button className="bg-[#2563EB] rounded-lg p-3 h-[150px] flex flex-col items-center justify-center text-xs font-medium text-white hover:bg-[#363A4A] transition-colors">
                <div className=" mb-2 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="8"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M21 21l-4.35-4.35"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <circle
                      cx="11"
                      cy="11"
                      r="3"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                Text Magnifier
              </button>

              <button className="bg-[#2A2E3B] rounded-lg p-3 h-[150px] flex flex-col items-center justify-center text-xs font-medium text-white hover:bg-[#363A4A] transition-colors">
                <div className="mb-2  flex items-center justify-center h-10 w-10">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                      stroke="#2563EB"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                Content Scaling
              </button>

              <button className="bg-[#2A2E3B] rounded-lg p-3 h-[150px] flex flex-col items-center justify-center text-xs font-medium text-[#2563EB] hover:bg-[#363A4A] transition-colors">
                <div className=" mb-2 flex items-center justify-center">
                  <span className="text-lg font-bold text-[#2563EB]">Aa</span>
                </div>
                Dyslexia Friendly
              </button>

              <button className="bg-[#2A2E3B] rounded-lg p-3 h-[150px] flex flex-col items-center justify-center text-xs font-medium text-[#2563EB] hover:bg-[#363A4A] transition-colors">
                <div className=" mb-2 flex items-center justify-center">
                  <span className="text-lg font-bold text-[#2563EB]">Aa</span>
                </div>
                Readable Font
              </button>

              <button className="bg-[#2A2E3B] rounded-lg p-3 h-[150px] flex flex-col items-center justify-center text-xs font-medium text-white hover:bg-[#363A4A] transition-colors">
                <div className=" mb-2 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                      stroke="#2563EB"
                      strokeWidth="2"
                    />
                    <path
                      d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                      stroke="#2563EB"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                Highlight Links
              </button>

              <button className="bg-[#2A2E3B] rounded-lg p-3 h-[150px] flex flex-col items-center justify-center text-xs font-medium text-white hover:bg-[#363A4A] transition-colors">
                <div className=" mb-2 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                      stroke="#2563EB"
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="9"
                      y1="9"
                      x2="15"
                      y2="9"
                      stroke="#2563EB"
                      strokeWidth="2"
                    />
                    <line
                      x1="9"
                      y1="15"
                      x2="15"
                      y2="15"
                      stroke="#2563EB"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                Highlight Titles
              </button>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="border-t border-[#2A2E3B] p-4 flex space-x-3">
            <button className="flex-1 bg-[#2563EB] rounded-md py-2 px-3 text-xs font-medium text-white flex items-center justify-center space-x-1 hover:bg-[#1D4ED8] transition-colors">
              <span>Hide Forever</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="1"
                  y1="1"
                  x2="23"
                  y2="23"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <button className="flex-1 bg-[#2563EB] rounded-md py-2 px-3 text-xs font-medium text-white flex items-center justify-center space-x-1 hover:bg-[#1D4ED8] transition-colors">
              <span>Reset Settings</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="1,4 1,10 7,10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <polyline
                  points="23,20 23,14 17,14"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityWidget;
