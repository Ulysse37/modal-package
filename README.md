# Package's usage

After importing this package, use the hook useState to declare a variable and a function to update it like this : 
  ### Code
  ```
    const [open, setOpen] = useState(false);
```

Then, you can create 2 functions to update the state of open :
    
    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };
    ```

Finally you can call openModal on your trigger to open the modal dialog, and call closeModal on the modal dialog 
itself to close it, like so :  
  `<button onClick={openModal}>Save</button>`  
  `<Modal open={open} message="Text exemple !" onClose={closeModal}/>`

You can also import the package css in "modal-package/dist/style.css".

### Exemple
```
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Modal } from "ulysse37-modal-package";
  import 'ulysse37-modal-package/dist/style.css';

  function App() {
    const [open, setOpen] = useState(false); 

    const openModal = () => {
      setOpen(true);
    }

    const closeModal = () => {
      setOpen(false);
    }

    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal 
          open={open} 
          onClose={closeModal} 
          message="Exemple Message !">
        </Modal>
      </div>
    );
  }
  
  ReactDOM.render(<App />, appElement);
```