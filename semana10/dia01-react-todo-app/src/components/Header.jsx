const Header = (props) => {
    console.log(props);
  return (
    <h1 className="text-2xl font-bold ">
        {props.title}
    </h1>
  )
}

export default Header