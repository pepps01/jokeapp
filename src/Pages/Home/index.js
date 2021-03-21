import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../services/categories";
import { Container } from "../../components/Container";
import "./Home.scss";
import { CategoryImage } from "../../components/CategoryImage";


export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    try {
      getCategories().then((cats) => {
        setCategoryList(cats);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);


  console.log("categoryList: ", categoryList);



  return (
    <Container>
      <div className="categories-container">
        <div className="categories-header">
          <h1>Category</h1>
        </div>
        <div className="categories-grid">
          {categoryList.categories &&
            categoryList.categories.map((category) => (
              <Link to={`/joke/${category}`} key={category}>
                <div> 
                      <CategoryImage category = {category}/>
                      {category}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </Container>
  );
}
