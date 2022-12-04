import { useState, memo } from "react";

export default function ReactMemo() {
  const [iphoneCount, setIphoneCount] = useState(0);
  const [androidCount, setAndroidCount] = useState(0);

  return (
    <div>
      <h4>Mobile Poll Contest </h4>
      {/* without memo if i update iphone state andriod component also gets rerender*/}
      <IPhone count={iphoneCount} setCount={setIphoneCount} />
      <AndroidPhone count={androidCount} setCount={setAndroidCount} />
    </div>
  );
}

const IPhone = memo(({ count, setCount }) => {
  console.log("IPhone compoent");
  return (
    <div>
      <p>IPhone Count : {count}</p>{" "}
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
});

const AndroidPhone = memo(({ count, setCount }) => {
  console.log("Android compoent");
  return (
    <div>
      <p>Android Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
});
