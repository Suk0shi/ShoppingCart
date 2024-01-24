import { useEffect, useState } from 'react'
import Header from './Header'

const useImageURL = () => {
    const [imageURL, setImageURL] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products?limit=10', { mode: "cors" })
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

  function Card({ cartHandler }) {
    
  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;
  return (
    <div className='cardHolder'>
      {imageURL.map((value) => {
        return (
          <div className='card' onClick={(e)=>cartHandler(value)}>
            <h2>{value.title}</h2>
            <img src={value.image} alt={"Image of "+value.title} />
            <h3>{"£" + value.price}</h3>
          </div>
        );
      })}
    </div>
  )

  }

  return (
    <>
      <Header cartNum = {cartNum}></Header>
      <div className="cardContainer">
        <Card cartHandler={cartHandler} ></Card>
      </div>
      
      
    </>
  )
}

export default Shop