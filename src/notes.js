//NOTES

// having trouble with completed functionality which creates strikethrough
// for completed items
//- Have to select an item by its id and then only change state for that
// particular item
//-was thinking of using template literals to change className which
// chooses which cssclass to use to create strikethrough

// - Still need to figure out how to change className="completion" which
// renders strikethrough. It shouldn't be hard. Hopefully can make
// progress on this tonight
  - Got it to work

  Initial Render - componentDidMount(){
    returns <AddButton /> & <List />
      -don't put it in separate file. It needs access App.js state
      - Clicking on <AddButton/> component reveals <Input />
    }

  All subsequent state changes will return <Input />

  AddButton Component is just a + that flashes/blinks
    - Clicking on AddButton component reveals Input Component