import book from "./components/book"
import page from "./components/page"
import headerBlock from "./components/block/headerBlock"
import asideBlock from "./components/block/asideBlock"
import asideHeader from "./components/header/asideHeader"
import abilityHeader from "./components/header/abilityHeader"
import largeHeader from "./components/header/largeHeader"
import mediumHeader from "./components/header/mediumHeader"
import smallHeader from "./components/header/smallHeader"
import italic from "./components/italic"
import imageCenter from "./components/image/imageCenter"
import imageRight from "./components/image/imageRight"
import imageObject from "./components/image/imageObject"
import topMenuBackground from "./components/topMenu/topMenuBackground"
import topMenuContainer from "./components/topMenu/topMenuContainer"

import lightColor from "./colors/light"
import darkColor from "./colors/dark"

const style = {
  book,
  page,
  headerBlock,
  asideBlock,
  asideHeader,
  abilityHeader,
  largeHeader,
  mediumHeader,
  smallHeader,
  italic,
  imageCenter,
  imageRight,
  imageObject,
  topMenuBackground,
  topMenuContainer
}

const light = {
  style,
  color: lightColor
}

const dark = {
  style,
  color: darkColor
}

const theme = {
  light,
  dark
}

export default theme
