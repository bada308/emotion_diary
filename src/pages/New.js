import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryEditor from "../components/DiaryEditor";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const New = () => {
  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
