import { Link, NavLink } from "react-router-dom"

export const Header = () => {
  const items = ["home", "add", "profile/mohammed"]

  const ItemList = ({ item }) => {
    return (
      <NavLink
        to={item}
        className={({ isActive }) => (isActive ? "bg-white" : "")}
      >
        {item}
      </NavLink>
    )
  }

  return (
    <nav className="justify-center bg-red-800 items-center flex  ">
      <ul className="gap-7 flex p-4">
        {items.map((item, index) => (
          <li>
            <ItemList item={item} key={index} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
