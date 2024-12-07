
const Header = () => {
  const homeLink = 'https://zihadulislam2.netlify.app/'
  const inLink = 'https://www.linkedin.com/in/zihadulislam2/'
  return (
    <header className=" py-8 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href={homeLink}>
            <span className="logo">Zihadul </span>
            Islam
          </a>
          {/* button */}
          <button className="btn btn-sm">
            {' '}
            <a href={inLink}>work with me</a>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
