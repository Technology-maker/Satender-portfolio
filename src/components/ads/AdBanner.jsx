import { useEffect } from 'react';

function AdBanner() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-7455773663622042"
      data-ad-slot="9925531791"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export default AdBanner;
