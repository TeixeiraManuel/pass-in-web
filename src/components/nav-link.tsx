import { ComponentProps } from "react"

interface NavLinkprops extends ComponentProps<'a'>{
  children:string
}
export function NavLink(props:NavLinkprops){
  return(
    <a {...props} className="font-medium text-sm">
      {props.children}
    </a>
  )
}