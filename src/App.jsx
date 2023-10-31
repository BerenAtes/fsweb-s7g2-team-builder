import "./App.css";
import { useState } from "react";
import MemberForm from "./components/MemberForm";
import MemberListing from "./components/MemberListing";

function App() {
  const [memberList, setMemberList] = useState([]);

  const addMember = (member) => {
    const newMember = [...memberList, member];
    setMemberList(newMember);
  };

  return (
    <div className="App">
      <div className="App-landing">
        {memberList.length === 0 ? (
          <div> Üye listesinde henüz üye yoktur.</div>
        ) : (
          <MemberListing memberProp={memberList} />
        )}
        <MemberForm addMemberFn={addMember} />
      </div>
    </div>
  );
}

export default App;
