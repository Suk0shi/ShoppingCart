import { useEffect, useState } from 'react'
import Header from './Header'

const useImageURL = () => {
    const [imageURL, setImageURL] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products?limit=5', { mode: "cors" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((response) => setImageURL(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    return { imageURL, error, loading };
};


function Shop({cartNum, cartHandler}) {
  const { imageURL, error, loading } = useImageURL();
  console.log(imageURL)

  function Card({ cardNumber, cartHandler }) {
    const handleClick = () => {
      cartHandler(imageURL[cardNumber]);
    };

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;
  return (
    <div className='cardDiv' onClick={handleClick}>
      <div className="card">
        <h2>{imageURL[cardNumber].title}</h2>
        <img src={imageURL[cardNumber].image} alt="" />
        <h3>£{imageURL[cardNumber].price}</h3>
      </div>
    </ div>
  )

  }

  return (
    <>
      <Header cartNum = {cartNum}></Header>
      <div className="cardHolder">
        <Card cardNumber={"0"} cartHandler={cartHandler} ></Card>
        <Card cardNumber={"1"} cartHandler={cartHandler} ></Card>
        <Card cardNumber={"2"} cartHandler={cartHandler} ></Card>
        <Card cardNumber={"3"} cartHandler={cartHandler} ></Card>
        <Card cardNumber={"4"} cartHandler={cartHandler} ></Card>
      </div>
      
    </>
  )
}

export default Shop