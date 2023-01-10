function Items({item, deleteItem, showPhone}) {
    return (
        <div>
            <ul>
                <li>
                    <span onClick={()=> {
                        showPhone(item.phone)
                    }}>{item.name}</span>
                    <button onClick={()=> {
                        deleteItem(item.id);
                    }}>X</button>
                </li>
            </ul>
        </div>
    )
}
export default Items;