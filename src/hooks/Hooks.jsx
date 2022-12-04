import { Link } from "react-router-dom";

const Hooks = () => {
  return (
    <div
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <Link to='/hooks/memo'>Memo</Link>
      <Link to='/hooks/usememo'>UseMemo</Link>
      <Link to='/hooks/useref'>UseRef</Link>
      <Link to='/hooks/uselayouteffect'>UseLayoutEffect</Link>
      <Link to='/hooks/callback'>UseCallBack</Link>
      <Link to='/hooks/usereducer'>UseReducer</Link>
      <Link to='/hooks/usecontext'>UseContext</Link>
    </div>
  );
};
export default Hooks;
