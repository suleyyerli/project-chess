import React from "react";
import Card from "../../components/ui/Card/Card";
import Button from "../../components/ui/Button/Button";

const Home = () => {
  return (
    <>
      <h1>Page Home</h1>
      <p>TEST DES COMPOSANTS UI</p>
      <Card>
        Le developpement du front c'est cool test du bouton dans une Card
        <Button label="Hello world" />
        <Button label="Hello world" variant="brown" />
        <Button label="Hello world" variant="red" />
      </Card>

      <Card variant="dark">
        ytest du variant de la card
        <Button label="Hello world" />
        <Button label="Hello world" variant="brown" />
        <Button label="Hello world" variant="red" />
      </Card>
    </>
  );
};

export default Home;
