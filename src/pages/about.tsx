import { FC } from "react";
import Nav from "shared/Nav";
import { masterClassesData } from "../../data";

const App: FC = () => {
  return (
    <>
      <Nav payload={masterClassesData}/>
    </>
  );
};
export default App;
