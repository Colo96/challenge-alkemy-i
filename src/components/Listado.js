import { Link, Navigate } from 'react-router-dom';

function Listado() {

    let token = localStorage.getItem('token');

    return (
        <>
            {!token && <Navigate to='/' />}
            <div className='row'>
                <div className='col-3' style={{ border: '1px solid red' }}>
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Movie title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/" className='btn btn-primary'>View detail</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listado;