import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/index.html";
  }, []);

  return (
    <p style={{ padding: 20, fontSize: 18 }}>
      Loading Granny’s Kitchen website...
    </p>
  );
}
