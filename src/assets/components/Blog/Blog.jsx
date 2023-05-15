import React from "react";
import AppliedZone from "../AppliedZone/AppliedZone";

const Blog = () => {
  return (
    <div>
      <div className="">
        <div className="h-[calc(100vh-25rem)]  flex items-center justify-center bg-gradient-to-r from-[rgba(146,126,192,0.05)] to-[rgba(113,101,146,0.05)]">
          <div className="text-3xl md:text-4xl font-bold">Blog</div>
        </div>
        <div className="rounded-md p-6 pt-0  bg-gradient-to-r from-[rgba(196,202,242,0.05)] to-[rgba(152,115,255,0.05)]">
          <div className="py-3 font-bold ">
            When should you use context API?
          </div>
          <div className="py-0 pb-2 font-light">
            Many state management-related issues that contemporary apps have,
            such props digging, may be resolved via context API. There are
            several methods that can address state management problems and props
            drilling, but they could raise your build size and impair the speed
            of your app. Since Context API is a React built-in feature,
            performance overhead and library installation problems are not a
            concern. The props drilling issue manifests itself when a prop is
            encountered farther down the tree. Data going via props gets chaotic
            as a project expands, increasing the vulnerability and complexity of
            the code. We make use of Context API to solve this issue.{" "}
          </div>
          <div className="py-2 "></div>
          <div className="mb-4">
          <div className="py-3 font-bold ">
          What is a custom hook?
          </div>
            <div className="py-0 pb-2 font-light">
            Reusable functions are provided using hooks.Along with the well-known Hooks like useState, useEffect, and useRef, React also enables us to build custom Hooks with special capabilities that isolate component code into reusable functions.
            </div>
          </div>
          <div className="mb-4">
          <div className="py-3 font-bold ">
          What is useRef?
          </div>
            <div className="py-0 pb-2 font-light">
            Values may be maintained between renderings using the useRef Hook.
            </div>
          </div>
          <div className="mb-4">
          <div className="py-3 font-bold ">
          What is useMemo?
          </div>
            <div className="py-0 pb-2 font-light">
            The function useMemo() provides a resource-intensive function's passed-in value memoized for later use. 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
