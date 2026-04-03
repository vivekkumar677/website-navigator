import React, { useState } from 'react';

const WebViewer = ({ url }) => {

  const [ loading, setLoading ] = useState(true);

  if (!url) return <p>No website loaded</p>;

  return (

    <div>
      {loading && (
        <div className='iframe-loader'>🌐 Loading website...</div>
      )}
      <iframe
        src={url}
        title="Web Viewer"
        className="iframe"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default WebViewer;