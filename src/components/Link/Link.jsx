

const Link = ({route}) => {
    return (
        
        <li className="mr-4 ml-4">
        <a href={route.path}>{route.name}</a> </li>
    );
};

export default Link;