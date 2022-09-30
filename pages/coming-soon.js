import { useState, useEffect } from "react";

export default () => {
  const endDate = new Date(2022, 9, 10, 0, 0, 0).getTime()
  const [count, setCount] = useState(Math.round((endDate- new Date().getTime())/1000))
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count--)
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div id="coming-soon">
      <h2>Coming Soon</h2>
      <h3>{(count / (60 * 60 * 24)).toFixed(0)} : {(Math.max((count / (60 * 60) % 24) - 1, 0)).toFixed(0)} : {(count / 60 % 60).toFixed(0)} : {count % 60}</h3>
    </div>
  )
}