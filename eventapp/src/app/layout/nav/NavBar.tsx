import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';

type Props ={
  setFormOpen: (value: boolean) => void;
}

export default function NavBar({setFormOpen}: Props) {
  return (
    <div>
      <Menu inverted={true} fixed='top'>
        <Container>
          <MenuItem header>
            <img src='/logo.png' alt='logo' />
            EventApp
          </MenuItem>
          <MenuItem name='Events' />
          <MenuItem>
            <Button
              floated='right'
              basic
              inverted={true}
              onClick={() => setFormOpen(true)}
              content='Create Event'
            />
          </MenuItem>
          <MenuItem position='right'>
            <Button basic inverted content='Login' />
            <Button
              basic
              inverted
              content='Register'
              style={{ marginLeft: '0.5em' }}
            />
          </MenuItem>
        </Container>
      </Menu>
    </div>
  );
}