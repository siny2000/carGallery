
function Dashboard() {
    return (
        <div className="Dashboard">

            <div style={{
                alignItems: 'center',
                display: 'flex',
                flexFlow: 'row wrap',
            }}>
                {/*car1*/}
                <div style={{
                    alignItems: 'center',
                    border: '2px solid red',
                    width: '500px',
                    height: '350px',
                    margin: 5,
                    borderRadius: 15,
                }}>
                    {/* รูปรถ */}
                    <img src="logo192.png" style={{ borderRadius: 15, width: '100%', height: '100%', boxShadow: '1px 1px 2px 2px grey' }} />
                    <div style={{
                        border: '3.5px solid white',
                        borderRadius: 50,
                        width: '40px',
                        height: '40px',
                        top: '-110px',
                        position: 'relative',
                        left: '230px',
                    }}>
                        {/* โลโก้ยี่ห้อ */}
                        <img src="logo192.png" style={{
                            borderRadius: 50,
                            width: '100%',
                            height: '100%'
                        }} />
                    </div>
                    <h5 style={{
                        textAlign: 'center',
                        top: '-110px',
                        position: 'relative',
                        color: 'white'
                    }}>
                        Lamborghini Aventador
                    </h5>
                    <h6 style={{
                        textAlign: 'center',
                        top: '-110px',
                        position: 'relative',
                        color: 'white'
                    }}>
                        45,000,000 บาท
                    </h6>
                </div>



                {/*car2*/}
                <div style={{
                    border: '2px solid white',
                    width: '500px',
                    height: '350px',
                    margin: 5,
                    borderRadius: 15
                }}>
                    <img src="logo192.png" style={{ borderRadius: 15, width: '100%', height: '100%', boxShadow: '1px 1px 2px 2px grey' }} />
                    <div style={{
                        border: '3.5px solid white',
                        borderRadius: 50,
                        width: '40px',
                        height: '40px',
                        top: '-110px',
                        position: 'relative',
                        left: '230px',
                    }}>
                        <img src="logo192.png" style={{
                            borderRadius: 50,
                            width: '100%',
                            height: '100%'
                        }} />
                    </div>
                    <h5 style={{
                        textAlign: 'center',
                        top: '-110px',
                        position: 'relative',
                        color: 'white'
                    }}>
                        Lamborghini Aventador
                    </h5>
                    <h6 style={{
                        textAlign: 'center',
                        top: '-110px',
                        position: 'relative',
                        color: 'white'
                    }}>
                        45,000,000 บาท
                    </h6>
                </div>

                {/*car3*/}
                <div style={{
                    border: '2px solid white',
                    width: '500px',
                    height: '350px',
                    margin: 5,
                    borderRadius: 15
                }}>
                    <img src="logo192.png" style={{ borderRadius: 15, width: '100%', height: '100%', boxShadow: '1px 1px 2px 2px grey' }} />
                    <div style={{
                        border: '3.5px solid white',
                        borderRadius: 50,
                        width: '40px',
                        height: '40px',
                        top: '-110px',
                        position: 'relative',
                        left: '230px',
                    }}>
                        <img src="logo192.png" style={{
                            borderRadius: 50,
                            width: '100%',
                            height: '100%'
                        }} />
                    </div>
                    <h5 style={{
                        textAlign: 'center',
                        top: '-110px',
                        position: 'relative',
                        color: 'white'
                    }}>
                        Lamborghini Aventador
                    </h5>
                    <h6 style={{
                        textAlign: 'center',
                        top: '-110px',
                        position: 'relative',
                        color: 'white'
                    }}>
                        45,000,000 บาท
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;