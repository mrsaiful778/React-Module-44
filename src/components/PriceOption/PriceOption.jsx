import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {
    const {name ,price, features}=option;
    return (
        
        <div className="bg-blue-500 border rounded-lg shadow-lg p-4 flex flex-col ">
            <h2 className="text-center">
                <span className='text-7xl font-bold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-8"> {name}</h4>
            <div className="pl-6 flex-grow">
            {
                features.map((feature,idx)=> <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <button className="mt-12 bg-green-500 w-full py-2 rounded-lg">Buy Now</button>
        </div>
    );
};



export default PriceOption;