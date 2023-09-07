import { useEffect, useState } from "react";
import "./Main.css";
import image_students from './img/image_students.jpg';
import image_workers from './img/image_workers.png';
import image_persons from './img/image_persons.jpg';
import { Link } from "react-router-dom";


function Main() {
  // State for show\hide persons
  const [isPerson, setIsPerson] = useState(false);

  // Scroll window for show persons
  useEffect(() => {
      window.scrollTo({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      });
  });

  return (
    <>
      <div className="bg-image">
        <header className="header">
          <h1>Ласкаво просимо у світ Гаррі Поттера</h1>
          <button onClick={() => setIsPerson(!isPerson)} className="btn-main">Показати всіх персонажів</button>
        </header>
      </div>
      {isPerson ? (
      <main className="content">
        <section className="persons">
          <img src={image_students} alt="students" />
          <Link className="content-link" to='/students'>Студенти Гоґвортсу</Link>
        </section>
        <section className="persons">
          <img src={image_workers} alt="workers" />
          <Link className="content-link" to="/staff">Співробітники Гоґвортсу</Link>
        </section>
        <section className="persons">
          <img src={image_persons} alt="persons" />
          <Link className="content-link" to="/persons">Персонажі в певному будинку</Link>
        </section>
      </main>) : null}
    </>
  );
}
export default Main;
