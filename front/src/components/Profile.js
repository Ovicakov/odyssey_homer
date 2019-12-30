import React, { useState } from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

export default function Profile() {

  const [profile, setProfile] = useState({
    email: "homer.simpson@wildcodeschool.fr",
    name: "Homer",
    lastname: "Simpson"
  })

  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary="Name" secondary={profile.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Lastname" secondary={profile.lastname} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={profile.email} />
        </ListItem>
        <ListItem>
          <Link to="/signin">
            <Button
              variant="contained"
              color="primary">
              Déconnexion
            </Button>
          </Link>
        </ListItem>
      </List>
    </div>
  )
}
