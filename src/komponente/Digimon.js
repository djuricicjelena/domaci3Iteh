function Digimon(props) {

    const digimon = props.digimon

    return (
        <div className="digimon">
            <h2>{digimon.name}</h2>
            <img src={digimon.img} id="digimon_img" />
        </div>
    );
}

export default Digimon;