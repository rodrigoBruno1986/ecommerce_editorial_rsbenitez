import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import Data from "../../Data";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/index";

export default function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollecition = db.collection("items");
    const item = itemCollecition.doc(id);
    item
      .get()
      .then((querySnapshot) => {
        if (querySnapshot === 0) {
          console.log("no resultado");
        } else {
          setItem({ id: querySnapshot.id, ...querySnapshot.data() });
        }
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <ItemDetail
        name={item.name}
        src={item.image}
        precio={item.precio}
        description={item.description}
        id={item.id}
      />
    </div>
  );
}

//asinc para llamar a una api

// const getCharacter = async () => {
//   const response = await fetch("http del api");
//   const dataInfo = await response.json();
//   setItem(dataInfo);
// };

// useEffect(()=>{
//   getCharacter();
// })
