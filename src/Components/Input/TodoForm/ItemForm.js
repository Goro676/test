import { useRef, useState } from "react";
import Items from "../Todos/Items";

const InpForm = () => {
  const [data, setData] = useState([]);
  const Ref = useRef(null);

  const deleteItem = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const showPhone = (item) => {
    // setData(data.filter(contact => contact.id === item));
    // alert(data[0].phone)
    alert(item.phone)
  }

  return (
    <div>
      <form ref={Ref} onSubmit={(e) => {
          e.preventDefault();
          setData([
            ...data,
            {
              id: Math.random(),
              name: Ref.current[0].value,
              phone: Ref.current[1].value,
            },
        ]);
        Ref.current[0].value = ''; 
        Ref.current[1].value = '';
    }}
    >
        <input type="text" placeholder="Name" />
        <br />
        <input type="number" placeholder="Phone Number" />
        <br />
        <button>ADD</button>
      </form>
      {data.map((item) => 
        <Items key={item.id} item={item} deleteItem={deleteItem} showPhone={showPhone}/>
      )}
    </div>
  );
};
export default InpForm;