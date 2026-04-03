import React from 'react';

const WebViewer = ({ url }) => {
  if (!url) return <p>No website loaded</p>;

  return (
    <iframe
      src={url}
      title="Web Viewer"
      className="iframe"
    />
  );
};

export default WebViewer;