import React, { useState } from "react";

export default function ErrorBoundary(props) {
  const [error, setError] = useState(false);

  if (error) {
    setError(true);
    return <h1>Something went wrong here!</h1>;
  }
  return props.children;
}
