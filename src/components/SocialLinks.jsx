import React from "react";

export default function SocialLinks() {
  return (
    <div className="mt-6 text-sm text-slate-600">
      Find me:
      <a
        href="https://www.linkedin.com/in/luizmura"
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        {" "}
        LinkedIn
      </a>{" "}
      •
      <a
        href="https://github.com/LuizMura"
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        {" "}
        GitHub
      </a>
    </div>
  );
}
