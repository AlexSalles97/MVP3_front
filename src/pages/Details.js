import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import Navigation from "../components/Navigation";

export default function Details() {
  let { state } = useLocation();
  let { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="detailed-content">
      <header>
        <button className="back" onClick={() => navigate('/Products')}>Voltar</button>
      </header>
      <div>
        <div>
          <img className="detailed-image" src={state.p.image} alt="" />
        </div>
        <div>
          <h2>{state.p.title} - {id}</h2>
          <p>{state.p.description}</p>
        </div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: 100 }}
        >
          <Navigation />
        </Grid>
      </div>
      <footer>
        <p className="footer-text">&copy; 2023 Sallesianismo Store. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}