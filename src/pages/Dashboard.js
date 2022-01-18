import "../assets/Dashboard.css"
const Dashboard = () => {
    return (
        <>
            {/* <!-- hero section-- > */}
            <header className="hero-section">
                <div className="content">
                    {/* <img src="/logo.jpeg" className="logo" alt=""></img> */}
                    <p className="heading">Eat.Think.Safe</p>
                    {/* <br> */}
                    <p className="sub-heading">Eat Everything You Buy</p>
                </div>
            </header>
            {/* <h1>Hello!</h1> */}
            <div>
                <h3>Items in your Fridge</h3>
                <ul>
                    <li>Item01</li>
                    <li>Item02</li>
                    <li>Item03</li>
                </ul>
            </div>
            <div>
                <h3>Add Food Info</h3>
                <label htmlFor="foodItem">Add Food Item</label>
                <input type="text" placeholder="Food Item" name="foodItem" />
                <label>Add its Expiry Date</label>
                <input type="date" name="expiryDate" />
                <button className="btn btn-danger">Add Item</button>
            </div>
            <div>
                <h3>Food items that are expiring within 10 days</h3>
                <ul>
                    <li>Item01</li>
                    <li>Item02</li>
                    <li>Item03</li>
                </ul>
                <button className="btn btn-danger">View More</button>
            </div>

        </>
    );
};

export default Dashboard;