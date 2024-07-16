import React from 'react'
import Nav from './Nav'

const Viewallmovie = () => {
    return (
        <div>
            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">movie name</th>
                                    <th scope="col">actors</th>
                                    <th scope="col">actress</th>
                                    <th scope="col">directors</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">avengers</th>
                                    <td>kalki</td>
                                    <td>ironman</td>
                                    <td>spiderman 2</td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewallmovie