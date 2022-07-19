import SideNavContainer from "./SideNavContainer";
import SideNavContent from "./SideNavContent";
import SideNavTitle from "./SideNavTitle";
import SideNavItems from "./SideNavItems";
import SideNavHeader from "./SideNavHeader";

import { useState } from "react";

export default function SideNav({title, items}){

  const [mainSelected, setMainSelected] = useState("")
  const [mainPrimary, setMainPrimary] = useState("")

  return (
    <SideNavContainer>
      <SideNavContent>
        <SideNavTitle title={title} />
        <SideNavItems>
          {items?.map(header => {
            return (<SideNavHeader title={header.title} subHeaders={header.subHeaders}
              key={`${header.title}-header`} upper={mainSelected} setUpper={setMainSelected}
              mainPrimary={mainPrimary} setMainPrimary={setMainPrimary}
              />)
          })}
        </SideNavItems>
      </SideNavContent>
    </SideNavContainer>
  )
}
