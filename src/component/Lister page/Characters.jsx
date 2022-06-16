import React, { useCallback, useEffect, useState } from "react";
import { Modal, Pagination } from "react-bootstrap";
import "./characters.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router";
import CharacterCard from "./CharacterCard";

const Characters= () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // const [details, setDetails] = useState<any>({});

  // const navigate = useNavigate();

  // const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");

  // const handleClose = () => setShow(false);
  // const handleShow = (id: number) => {
  //   getInfo(id);
  //   setShow(true);
  // };

  let items = [];
  for (let number = 1; number <= 9; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => {
          setPage(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  // const getInfo = async (id: number) => {
  //   const datas = await fetch(`https://www.swapi.tech/api/people/${id}`);
  //   const response = await datas.json();
  //   setDetails(response.result);
  // };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = useCallback(async () => {
    const myData = await fetch(
      `https://www.swapi.tech/api/people?page=${page}&limit=10`
    );
    const response = await myData.json();
    setData(response.results);
    console.log(response.results);
  }, [page]);

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getData]);

  return (
    <div className="character-container">
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <section className="cardContainer">
        {data
          .filter((list) => {
            if (query === "") return list;

            if (
              list.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            )
              return list;

            return false;
          })
          .map((list) => (
            <CharacterCard key={list.uid} list={list} />
          ))}
      </section>
      {/* <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Name: {details?.properties?.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Description: {details?.description} </p>
          <p>Birth year: {details?.properties?.birth_year} </p>
          <p>Eye color: {details?.properties?.eye_color}</p>
          <p>Gender: {details?.properties?.gender}</p>
          <p>
            URL:{" "}
            <a href={details?.properties?.url} target="_blank" rel="noreferrer">
              {details?.properties?.url}
            </a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal> */}

      <Pagination className="pages">
        {items}
      </Pagination>
    </div>
  );
};

export default Characters;
