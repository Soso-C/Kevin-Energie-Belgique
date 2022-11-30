import React from "react";

export default function InputContact({
  labelName,
  textLabel,
  inptType,
  inptId,
  inptName,
  textarea = false,
}) {
  return (
    <div className={`p-2  ${textarea ? "w-full" : "w-1/2"}`}>
      <div>
        <label
          htmlFor={labelName}
          className="leading-7 text-sm text-gray-600 font-medium"
        >
          {textLabel}
        </label>
        {/* Input Or TextArea */}
        {textarea ? (
          <textarea
            required={true}
            id={inptId}
            name={inptName}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
        ) : (
          <input
            required={true}
            type={inptType}
            id={inptId}
            name={inptName}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        )}
      </div>
    </div>
  );
}
