import React, { useState, useEffect } from 'react';
import { ISWPeople } from '../utils/interface';
import { URLS } from '../utils/constants';
import {
  Container,
  Bg,
  Title,
  Text,
  Bg2,
  Identity
} from './styles';
import '../App.css';

interface IPeople {
  Ppl: ISWPeople[]
}

const Home: React.FC<IPeople> = ({Ppl}: IPeople) => {
  const [data, setData] = useState(Ppl);

  useEffect(() => {
    console.log('api call...');

    let promises = URLS.map((url) => 
      fetch(url)
      .then((response) => 
        response.json()
      ));
    
    Promise.all(promises).then(data => {
      console.log(data);

      setData(data);
    })
  }, []);
    
  function renderData() {
    if (data !== undefined) {
        return data.map((people) => {
            return (
              <div key={people.name}>
                <br></br>
                <h2>Name: {people.name}</h2>
                <h3>Height: {people.height}</h3>
                <h3>Mass: {people.mass}</h3>
                <h3>Birth year: {people.birth_year}</h3>
                <h3>Gender: {people.gender}</h3>
                <h4>Homeworld: {people.homeworld}</h4>
                <br></br>
              </div>
            )
          })
    }
  }

  return (
    <Container>
      <div>
        <Bg>
          <Title>
            <h4>STAR WARS CHARACTERS</h4>
            <Identity>
            <h5>Valeska Cheryl Tekla / XE / 37</h5>
            </Identity>
          </Title>
        </Bg>
      </div>
      <div>
        <Bg2>
          <Text>
            <div>{renderData()}</div>
          </Text>
        </Bg2>
      </div>
    </Container>
  )
}

export default Home