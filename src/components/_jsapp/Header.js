import icon from "../img/iconhead.png";

export default function Header() {
  return (
    <header>
      <div className='title'>
        <a href='/' className='status'>
          <img src={icon} alt='img' className='iconHead' />
          <div className='greetings'>
            <p>Good Morning</p>
            <p>
              <strong>Fellas</strong>
            </p>
          </div>
        </a>
      </div>
    </header>
  );
}
