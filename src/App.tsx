import Button from './components/button/button';
import { FC } from 'react'

const App: FC = () => {
  return (
    <Button style="primary" size={36}>
      <Button.Label text="Что сделать" />
      <Button.Counter />
      <Button.Loader />
    </Button>
  )
};

export default App
