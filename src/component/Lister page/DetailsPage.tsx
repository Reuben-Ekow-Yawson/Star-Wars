import React, { useCallback, useEffect } from "react";
import { CastState } from "../../CharactersState/CharactersState";
import "./detailsPage.css";


const DetailsPage = () => {
    const { cast } = CastState();

//   const getInfo = useCallback(async (id:number) => {
//     const datas = await fetch(`https://www.swapi.tech/api/people/${id}`);
//     const response = await datas.json();
//     setCast(response.result);
//     console.log(response.results);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id]);

//   useEffect(() => {
//     getInfo()
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [getInfo])

console.log(cast);

  

  return <div className="details">
        details page
        <p> <span className="details-prop">Name:</span>  {cast?.properties?.name} </p>
        <p> <span className="details-prop">Birth year:</span>  {cast?.properties?.birth_year} </p>
        <p> <span className="details-prop">Eye color:</span> {cast?.properties?.eye_color}</p>
        <p><span className="details-prop">Gender:</span> {cast?.properties?.gender}</p>
        <p><span className="details-prop">Hair color:</span> {cast?.properties?.hair_color}</p>
        <p><span className="details-prop">Height:</span> {cast?.properties?.height}</p>
        <p><span className="details-prop">Skin color:</span> {cast?.properties?.skin_color}</p>
        <p><span className="details-prop">Mass:</span> {cast?.properties?.mass} </p>
    </div>;
};

export default DetailsPage;































// import React from 'react'

// const DetailsPage = () => {
//   return (
// <div>
//     details page
// </div>
// <Modal show={show} onHide={handleClose} centered>
//     <Modal.Header closeButton>
//       <Modal.Title>Name: {details?.properties?.name} </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <p>Description: {details?.description} </p>
//       <p>Birth year: {details?.properties?.birth_year} </p>
//       <p>Eye color: {details?.properties?.eye_color}</p>
//       <p>Gender: {details?.properties?.gender}</p>
//       <p>
//         URL:{" "}
//         <a href={details?.properties?.url} target="_blank" rel="noreferrer">
//           {details?.properties?.url}
//         </a>
//       </p>
//     </Modal.Body>
//     <Modal.Footer>
//       <Button onClick={handleClose}>Close</Button>
//     </Modal.Footer>
//   </Modal>
//   )
// }

// export default DetailsPage
