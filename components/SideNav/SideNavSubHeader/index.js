import SideNavSubHeaderContainer from "./SideNavSubHeaderContainer"
import SideNavSubHeaderTitle from "./SideNavSubHeaderTitle"
import SideNavSubHeaderChildren from "./SideNavSubHeaderChildren"
import SideNavSubItems from "./SideNavSubItems"
import SideNavDropdown from "../SideNavDropdown"
import createPath from "../../utility/createPath"
import Anchor from "../Anchor"
import Link from "next/link"

import { useState } from "react"

export default function SideNavSubHeader ({title, subHeaders, upper, setUpper, mainPrimary, setMainPrimary}){
  const [selected, setSelected] = useState("")

  const path = createPath(title)

  const updateState = () =>{
    setUpper(path)
    setMainPrimary(path)
  }

  const clearState = () => {
    setSelected("")
    setUpper("")
    setMainPrimary(path)
  }

  if(!subHeaders){
    return (
      <SideNavSubItems>
        <Anchor href={path}>
          <SideNavSubHeaderContainer primary={path === mainPrimary} onClick={() => {updateState()}}>
            <SideNavDropdown type="none" />
            <SideNavSubHeaderTitle>
              {title}
            </SideNavSubHeaderTitle>
          </SideNavSubHeaderContainer>
        </Anchor>
      </SideNavSubItems>
    )
  }

  if(upper === path){
    return(
      <SideNavSubItems>
        <Anchor href={path}>
          <SideNavSubHeaderContainer primary={path === mainPrimary} onClick={() => {clearState()}}>
            <SideNavDropdown active />
            <SideNavSubHeaderTitle>
              {title}
            </SideNavSubHeaderTitle>
          </SideNavSubHeaderContainer>
        </Anchor>
        <SideNavSubHeaderChildren>
          {subHeaders?.map((header) => {
            return <SideNavSubHeader title={header.title} subHeaders={header.subHeaders}
            key={`${header.title}-sub-header`} upper={selected} setUpper={setSelected}
            mainPrimary={mainPrimary} setMainPrimary={setMainPrimary}/>
          })}
        </SideNavSubHeaderChildren>
      </SideNavSubItems>
    )
  }

  return (
    <SideNavSubItems>
      <Anchor href={path}>
        <SideNavSubHeaderContainer primary={path === mainPrimary} onClick={() => {updateState()}}>
          <SideNavDropdown />
          <SideNavSubHeaderTitle>
            {title}
          </SideNavSubHeaderTitle>
        </SideNavSubHeaderContainer>
      </Anchor>
    </SideNavSubItems>
  )
}
