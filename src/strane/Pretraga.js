import NavMeni from "../komponente/NavMeni";
import { useState } from 'react';
import axios from 'axios';
import Digimon from "../komponente/Digimon";

function Pretraga() {
    const [digimoni, setDigimoni] = useState([]);
    const [ime, setIme] = useState('');

    function saveIme(e) {
        setIme(e.target.value)
    }

    function pretragaDigimona() {
        axios.get(`https://digimon-api.vercel.app/api/digimon/name/${ime}`).then(res => {
            setDigimoni(res.data);
        });
    }

    return (
        <div className="pretraga">
            <NavMeni />

            <input type="text" className="form-control offset-5" id="pretraga_input" value={ime} onChange={saveIme} />
            <button className="btn btn-dark mt-3" onClick={pretragaDigimona} id="button_pretraga">Pretraga</button>


            <div className="digimoni_map" id="digimon_search">
                {
                    digimoni.map(digimon => (
                        <Digimon key={digimon.name} digimon={digimon} />
                    ))
                }
            </div>
        </div>
    )
}

export default Pretraga;