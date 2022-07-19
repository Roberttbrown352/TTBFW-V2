import Paragraph from "./Paragraph";

export default function ParagraphFunction({children, id}){
  return(
    <Paragraph id={id}>{children}</Paragraph>
  )
}
