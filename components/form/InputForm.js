/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

export const InputForm = forwardRef(
  (
    {
      error,
      inptType,
      inptId,
      textLabel,
      inptName,
      textarea = false,
      large = false,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`p-2  ${large ? "w-full" : "w-1/2"}`}>
        {/* TextArea */}
        {textarea ? (
          <div>
            <label className="leading-7 text-sm text-gray-600 font-medium">
              {textLabel}
            </label>
            <textarea
              required={true}
              id={inptId}
              name={inptName}
              ref={ref}
              {...rest}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
        ) : (
          <div>
            <label className="leading-7 text-sm text-gray-600 font-medium">
              {textLabel}
            </label>
            <input
              required={true}
              type={inptType}
              id={inptId}
              name={inptName}
              ref={ref}
              {...rest}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        )}
        {/* Error Span */}
        {error && (
          <span role="alert" className="text-red-500 text-sm font-medium px-1">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

export default InputForm;
