export const Header = () => {
  const items = ["home", "add", "profile"]

  const ItemList = ({ item }) => {
    return <div>{item}</div>
  }

  return (
    <div className="bg-red-600 w-full gap-7 flex">
      {items.map((item, index) => (
        <ItemList item={item} key={index} />
      ))}
    </div>
  )
}
