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

Finally you can call openModal on your trigger to open the the modal dialog, and call closeModal on the modal dialog 
itself to close it, like so :  
  `<button onClick={openModal}>Save</button>`  
  `<Modal open={open} message="Text exemple !" onClose={closeModal}/>`