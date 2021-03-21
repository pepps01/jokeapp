import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BackButton } from "../../components/BackButton";
import { CategoryImage } from "../../components/CategoryImage";
import { Container } from "../../components/Container";
import { getJokesByCategory } from "../../services/categories";
import { Randomiser } from "../Randomiser";
import {Howl, Howler} from 'howler';


import "./Joke.scss";
import Laugh from "../../Asset/Audio/laugh.mp3";

export const Joke = () => {
  const [jokes, setjokes] = useState();
  let params = useParams();

  console.log(params.catId);

  useEffect(() => {
    if (params?.catId) {
      getJokesByCategory(params?.catId).then((jokes) => {
        console.log("jokes: ", jokes);
        setjokes(jokes);
      });
    }
  }, [params.catId]);

  const refetchJokes = () => {
    getJokesByCategory(params?.catId).then((jokes) => {
      console.log("jokes: ", jokes);
      setjokes(jokes);
    });
  };

  const SoundPlay = (src) => {
    const sound = new Howl({
        src : [Laugh],
        autoplay: true,
        volume: 0.1,
        loop:false
    });

    sound.play();
    console.log("sound")
  }

  return (

    <Container>
      <div className="joke-container">
          <div className="joke-topbar">
              <BackButton />
              <Randomiser refresh={refetchJokes}/>
          </div>

          <div className="joke-card-container">
            <div className="joke-title">
              <CategoryImage category={jokes && jokes?.category} className="category-image"/>
              {jokes && jokes?.category}
              
            </div>

            {jokes?.joke && <div className="joke-card">{jokes?.joke}</div>}
            {jokes?.setup && (
              <>
                <div className="joke-card">{jokes?.setup}</div>
                <div className="joke-card">{jokes?.delivery}</div>
              </>
            )}

            <div className="joke-footer">
              <span className="joke-footer-bold">Language:</span> {jokes?.lang}
              &nbsp;
              &nbsp;
              <span className="joke-footer-bold">Type:</span> {jokes?.type}
            </div>

              <div>{window.setTimeout(SoundPlay, 2000) }</div>

               
          </div>
      </div>
    </Container>
  );
};
