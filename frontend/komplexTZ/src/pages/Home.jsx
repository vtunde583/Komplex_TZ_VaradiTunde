
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import fejlecKep from './oktatas-01.jpg'
import logo from './logo.png'
import email from './e-mail-marketing-2745489__340.jpg'


const Home = () => {
  return (
    <>
 <div> <img src={fejlecKep} alt="fejleckep"/></div>
 <br />
 <div className="container mt-5">
<div className="row"> 
 <div className="col-md 4" style={{ backgroundColor: 'olive' }}>
    <h2>Központi felvételi tájékoztató</h2>
    <p>A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el. A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján rangsorolja az iskolába jelentkezőket.</p>
    <a href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi">Tájékozató oldal</a>
    <br />
    <img src={logo}alt="" />
  </div>

  <div className="col-md 4">
    <h1>Tájékoztatás</h1>
    <h3>Jószakma Szakgimnázium</h3>
    <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák. A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.</p>
    <br />
    <img src={email} alt="" />
  </div>

  <div className="col-md 4" style={{ backgroundColor: 'olive' }}>
    <h2>Az oldal használatáról</h2>
    <p>Ön az oldal használatával a következő információkhoz juthat hozzá</p>
</div>
</div>
</div>
<section>
    <div>
        <h2>A felvételt nyert tanulók névsora a nyelvi előkészítőre</h2>
    </div>

   <table>
    <tr>
        <th>Tanuló neve</th>
        <th>Ágazat</th>
        <th>Összes pontszám</th>
    </tr>
   </table>
 
 
</section>+
  </>
  )
};

export default Home;