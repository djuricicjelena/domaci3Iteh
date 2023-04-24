import NavMeni from "../komponente/NavMeni";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Digimon from "../komponente/Digimon";

function PocetnaDigimoni() {

    const [digimoni, setDigimoni] = useState([]);

    useEffect(() => {
        axios.get('https://digimon-api.vercel.app/api/digimon').then(res => {
            setDigimoni(res.data.slice(0, 50));
        });
    }, []);


    return (
        <div className="pocetna_digimoni">
            <NavMeni />

            <div className="digimoni_map">
                {
                    digimoni.map(digimon => (
                        <Digimon digimon={digimon} />
                    ))
                }
            </div>

        </div>
    )
}

export default PocetnaDigimoni;