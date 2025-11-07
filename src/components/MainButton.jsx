// eslint-disable-next-line no-unused-vars
const MainButton = ({title, mission, hasIcon, icon}) => {
  return (
    <button className="py-1.5 px-4 bg-primary text-white text-sm font-bold tracking-wide rounded-lg duration-300 hover:bg-destructive">
        {title}
        {hasIcon && <div className="bg-white">{icon}</div>}
    </button>
  )
}

export default MainButton
