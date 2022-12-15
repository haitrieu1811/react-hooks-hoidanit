const Home = () => {
    const handleClick = () => {
        console.log('Click me');
    };

    return (
        <>
            <h1>Home Page</h1>
            <button type="button" onClick={handleClick}>
                Click me !
            </button>
        </>
    );
};

export default Home;
