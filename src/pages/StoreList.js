import Dd_categor from "../components/Dd_categor";
import Dd_storemain from "../components/Dd_storemain";
import StoreMain from "../components/StoreMain";

const StoreList = () => {
  return (
    <div id="StoreList">
      <Dd_storemain />
      <Dd_categor />
      <StoreMain />
    </div>
  );
};

export default StoreList;