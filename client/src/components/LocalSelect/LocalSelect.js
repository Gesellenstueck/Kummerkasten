import React, { useContext } from "react";
import { I18nContext, localDicts } from "../../contexts/i18n";

const LocalSelect = () => {
  const { setDict } = useContext(I18nContext);

  return (
    <select onChange={(event) => setDict(localDicts[event.target.value])}>
      <option value="de">DE</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LocalSelect;