import { useNavigate } from "react-router";
import { CastState } from "../../CharactersState/CharactersState";

const CharacterCard = ({ list }: any) => {
  const { setCast } = CastState();
  const navigate = useNavigate();

  const fetchCast = async (id: number) => {
    const data = await fetch(`https://www.swapi.tech/api/people/${id}`);
    const response = await data.json();
    setCast(response.result);
    navigate("/details");
  };

  return (
    <div key={list.uid}>
      {list.name}
      <p>hello world</p>
      <button onClick={() => fetchCast(list.uid)}>More</button>
    </div>
  );
};

export default CharacterCard;
