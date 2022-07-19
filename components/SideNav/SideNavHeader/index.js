import SideNavHeaderItems from "./SideNavHeaderItems"
import SideNavHeaderContainer from "./SideNavHeaderContainer"
import SideNavHeaderTitle from "./SideNavHeaderTitle"
import SideNavHeaderChildren from "./SideNavHeaderChildren"
import SideNavSubHeader from "../SideNavSubHeader"
import createPath from "../../utility/createPath"

import { useState } from "react"

export default function SideNavHeader({title, subHeaders, upper, setUpper, mainPrimary, setMainPrimary}){
  const [selected, setSelected] = useState("")

  const path = createPath(title)

  const updateState = () =>{
    setUpper(path)
    setMainPrimary(path)
  }

  const clearState = () => {
    setSelected("")
    setMainPrimary(path)
  }

  if(path === upper){
    return(
      <SideNavHeaderItems>
      <SideNavHeaderContainer primary={path === mainPrimary} active onClick={() => {clearState()}}>
        <SideNavHeaderTitle>
          {title}
        </SideNavHeaderTitle>
      </SideNavHeaderContainer>
      <SideNavHeaderChildren>
        {subHeaders?.map((header) => {
          return <SideNavSubHeader title={header.title} subHeaders={header.subHeaders}
          key={`${header.title}-sub-header`} upper={selected} setUpper={setSelected}
          mainPrimary={mainPrimary} setMainPrimary={setMainPrimary}/>
        })}
      </SideNavHeaderChildren>
    </SideNavHeaderItems>
    )
  }

  return (
    <SideNavHeaderItems>
      <SideNavHeaderContainer onClick={() => {updateState()}}>
        <SideNavHeaderTitle>
          {title}
        </SideNavHeaderTitle>
      </SideNavHeaderContainer>
    </SideNavHeaderItems>
  )
}
