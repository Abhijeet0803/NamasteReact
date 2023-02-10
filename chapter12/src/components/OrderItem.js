const OrderItem = ({name, price}) =>{

    return(<div className="flex justify-between m-2 p-5 bg-pink-50 hover:bg-pink-100">
        <h2 className="font-bold text-xl">{name}</h2>
        {price?<h3 className="font-semibold text-xl">{price/100} rupees</h3>:null}
    </div>)

};

export default OrderItem;

