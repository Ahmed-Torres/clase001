import PropTypes from "prop-types";
//PD: laburando con Typescript no se usan proptypes. no hacen falta.
import React from "react";
import Counter from "../Counter/Counter"

//memo es una funcion que se desprende de react.
//sirve para memorizar el componente.
//es una funcion, parentesis inicio, y fin.
//verifica que las propiedades que esten llegando, no cambien, asi no re-renderizar el header.
//si esta cambiando, ahi si redibuja el header, ya qu cambio el componente.
//usar sabiamente, no va por todos lados, consume recursos.

const Header = React.memo(({title}) => {
    return ( 
        <div className="Header">
            <h3>{title} 🚀</h3>
            <Counter />
            <p>Esto es mi header</p>
        </div>
     );
})

//proptypes sirve para documentar, que esta haciendo el componente
//a medida que tu proyecto crece podes aumentar la cantidad deproptypes que
//recibe un componente
//DOCUMENTACION
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;